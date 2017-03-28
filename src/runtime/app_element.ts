import {Component} from "./component";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {CommandType} from "./enums/e_command_type";
import {TypeOf} from "./interfaces/i_typeof";
import {clamp, traverseChildren} from "../util";
import {BoundingBox} from "./bounding_box";
import {MathUtil} from "../math_util";
import {Matrix} from "./matrix";
import {Quaternion} from "./quaternion";
import {Vector2} from "./vector2";
import {Vector3} from "./vector3";

let idGenerator = 0;
const scratchVector = new Vector2();

export enum Space {
    Local, World
}

enum ElementDirtyFlag {
    Position = 1 << 0,
    Scale = 1 << 1,
    Rotation = 1 << 2,
    Width = 1 << 3,
    Height = 1 << 4,
    WidthOrHeight = Width | Height,
    Transform = Position | Rotation | Scale
}

export class AppElement {

    public name : string;
    public readonly id : number;

    private parent : AppElement;
    private components : Array<Component>;
    private children : Array<AppElement>;
    private boundingBox : BoundingBox;
    private lifeCycleFlags : LifeCycleFlag;
    //private localPosition : Vector2;
    //private parentPosition : Vector2;
    private position : Vector2;
    private scale : Vector2;
    private rotation : number;
    private width : number;
    private height : number;
    private pivot : Vector2;
    private dirtyFlags : ElementDirtyFlag;
    private localMatrix : Matrix;
    private worldMatrix : Matrix;

    constructor(name? : string, parent : AppElement = null) {
        this.id = idGenerator++;
        this.name = name || "App Element";
        this.lifeCycleFlags = 0;
        this.parent = parent || AppElement.Root;
        this.children = [];
        this.components = [];
        if (this.parent) {
            this.parent.children.push(this);
        }
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.dirtyFlags = 0;
        this.scale = new Vector2(1, 1);
        this.pivot = new Vector2();
        this.position = new Vector2();
        this.localMatrix = new Matrix();
        this.worldMatrix = new Matrix();
        this.boundingBox = new BoundingBox(this);
        //todo don't allow components to be constructed outside of addComponent or this constructor
        Runtime.addElement(this);
    }

    //
    // public setPivot(x : number, y : number) : void {
    //     this.pivot.x = clamp01(x);
    //     this.pivot.y = clamp01(y);
    // }
    //

    public getPivot() : Vector2 {
        const out = new Vector2();
        out.x = this.pivot.x;
        out.y = this.pivot.y;
        return out;
    }

    public worldToLocal(vector : Vector2, out? : Vector2) : Vector2 {
        this.updateWorldMatrix();
        //return Vector2.transformCoordinates(vector, this.worldMatrix.invertNew(Matrix3x3.scratch0), out);
        return null;
    }

    public localToWorld(vector : Vector2, out? : Vector2) : Vector2 {
        this.updateWorldMatrix();
        // return Vector2.transformCoordinates(vector, this.worldMatrix, out);
        return null;
    }

    public getWorldMatrix() : Matrix {
        this.updateWorldMatrix();
        // return this.worldMatrix.clone(out || new Matrix3x3());
        return this.worldMatrix.clone();
    }

    public updateWorldMatrix() {

        //mat 0 = rotation matrix
        //mat 1 = scale matrix
        //mat 2 = translation matrix
        //mat 4 = pivot * scale
        //mat 5 = mat4 * rotation
        //local world = mat5 * translation
        //worldMatrix = parent.getWorldMatrix() * localWorld

        const scaling = Matrix.scratch0;
        const rotation = Matrix.scratch1;
        const translate = Matrix.scratch2;
        const rotationAndScale = Matrix.scratch3;
        const radians = this.rotation * MathUtil.DegreesToRadians;

        Quaternion.RotationAxis(Vector3.Forward, radians).toRotationMatrix(rotation);
        Matrix.CreateScale(this.scale.x, this.scale.y, 1, scaling);
        Matrix.CreateTranslation(this.position.x, this.position.y, 0, translate);
        Matrix.Multiply(scaling, rotation, rotationAndScale);
        Matrix.Multiply(rotationAndScale, translate, this.localMatrix);

        if (this.parent) {
            Matrix.Multiply(this.localMatrix, this.parent.getWorldMatrix(), this.worldMatrix);
        }
        else {
            this.worldMatrix.copy(this.localMatrix);
        }
        return this.worldMatrix;
    }

    public getMatrix(out? : Matrix) : Matrix {
        this.updateWorldMatrix();
        return this.localMatrix.clone();
    }

    public setScale(scale : Vector2) : void {
        if (this.scale.equals(scale)) return;
        this.scale.x = scale.x;
        this.scale.y = scale.y;
        this.dirtyFlags |= ElementDirtyFlag.Scale;
        Runtime.sendCommand(CommandType.SetTransform, this.id);
    }

    public getScale(out? : Vector2) : Vector2 {
        return this.scale.clone(out);
    }

    public getWidth() : number {
        return this.width;
    }

    public setWidth(width : number) : void {
        if (width === this.width) return;
        this.width = width;
        //todo get parent layout component and invoke layout
        //todo get layout component and invoke layout
        //todo use anchor settings
        this.dirtyFlags |= ElementDirtyFlag.Width;
        Runtime.sendCommand(CommandType.SetDimensions, this.id);
    }

    public getHeight() : number {
        return this.height;
    }

    public setHeight(height : number) : void {
        if (this.height === height) return;
        this.height = height;
        this.dirtyFlags |= ElementDirtyFlag.Height;
        Runtime.sendCommand(CommandType.SetDimensions, this.id);
    }

    public setDimensions(widthOrDimension : number | IDimension, height = 0) : void {
        const dimension = widthOrDimension as IDimension;

        if (typeof widthOrDimension === "object") {
            if (dimension.width !== void 0) {
                this.width = dimension.width;
                this.height = dimension.height;
            }
        }
        else {
            this.width = widthOrDimension;
            this.height = height;
        }
        this.dirtyFlags |= ElementDirtyFlag.WidthOrHeight;
        Runtime.sendCommand(CommandType.SetDimensions, this.id);
    }

    public getRotation() : number {
        return this.rotation;
    }

    public setRotation(value : number, space = Space.Local) : void {
        if (this.rotation === value && space === Space.Local) return;
        if (space === Space.World) {
            let ptr = this.parent;
            let worldRot = 0;
            while (ptr) {
                worldRot += ptr.rotation;
                ptr = ptr.parent;
            }
            this.rotation = -worldRot + value;
        }
        else {
            this.rotation = value;
        }
        this.dirtyFlags |= ElementDirtyFlag.Rotation;
        Runtime.sendCommand(CommandType.SetTransform, this.id);
    }

    public setPosition(position : Vector2, relativeTo : Space = Space.World) : void {
        this.setPositionValues(position.x, position.y, relativeTo);
    }

    public setPositionValues(x : number, y : number, relativeTo : Space = Space.World) : void {
        if (this.parent && relativeTo === Space.World) {
            var invertParentWorldMatrix = this.parent.getWorldMatrix().clone();
            invertParentWorldMatrix.invert();
            var worldPosition = new Vector2(x, y);
            const scratch = Vector3.scratch0.set(x, y, 0);
            Vector3.TransformCoordinates(scratch, invertParentWorldMatrix, scratch);
            this.position.x = scratch.x;
            this.position.y = scratch.y;
        }
        else {
            this.position.x = x;
            this.position.y = y;
        }
        this.dirtyFlags |= ElementDirtyFlag.Position;
        Runtime.sendCommand(CommandType.SetTransform, this.id);
    }

    public getLocalPosition() : Vector2 {
        return this.position.clone();
    }

    public getPosition(out? : Vector2) : Vector2 {
        this.updateWorldMatrix();
        return (out || new Vector2()).set(this.worldMatrix.m[12], this.worldMatrix.m[13]);
    }

    public getBoundingBox() : BoundingBox {
        this.boundingBox.update();
        return this.boundingBox;
    }

    public getAxisAlignedBoundingBox() {
        this.boundingBox.update();
        return this.boundingBox.getAxisAlignedBoundingBox();
    }

    public setActive(isActive : boolean) : void {
        if (this.isEnabled() === isActive) return;
        this.lifeCycleFlags ^= LifeCycleFlag.Enabled;
        if (isActive) {
            //on enable
        }
        else {
            //on disable
        }
    }

    public enable() : void {
        //Runtime.enable(this);
    }

    public setParent(parent : AppElement, keepPosition = true) : void {
        if (parent && parent === this.parent) return;
        parent = parent || AppElement.Root;
        const oldParent = this.parent;
        let currentPosition = this.getPosition();
        this.parent = parent;
        //todo ancestor check
        if (oldParent) {
            oldParent.children.remove(this);
        }
        if (parent) {
            this.parent.children.push(this);
            //todo position
        }
        else {
            //todo position
        }
        if (keepPosition) {
            this.setPosition(currentPosition);
        }
        Runtime.setParent(this, parent, oldParent);
    }

    public setSiblingIndex(index : number) : boolean {
        const parent = this.parent;
        if (!parent) return false;
        const children = this.parent.children;
        const currentIndex = children.indexOf(this);

        if (index === currentIndex || currentIndex === -1) {
            return false;
        }

        index = clamp(index, 0, children.length - 1);
        children.remove(this);
        children.insert(this, index);
        Runtime.setSiblingIndex(this, index, currentIndex);
        return true;
    }

    public getParent() : AppElement {
        return this.parent;
    }

    public getChildAt(index : number) {
        return this.children[index];
    }

    public getChildCount() : number {
        return this.children.length;
    }

    public removeChild(child : AppElement) : void {
        if (this.children.remove(child)) {
            child.setParent(null);
        }
    }

    public getDepth() : number {
        if (this === AppElement.Root) return 0;
        let ptr = this.parent;
        let depth = 1;
        while (ptr !== AppElement.Root) {
            depth++;
            ptr = ptr.parent;
        }
        return depth;
    }

    //todo component lifecycle
    public addComponent<T extends Component>(componentType : TypeOf<T>) : T {
        const component = new componentType() as any; //cast to avoid read-only access
        component.appElement = this;
        this.components.push(component);
        Runtime.addComponent(component);
        return component;
    }

    public getAllComponents(storage? : Array<Component>) : Array<Component> {
        const retn = storage || new Array<Component>();
        for (let i = 0; i < this.components.length; i++) {
            retn.push(this.components[i] as Component);
        }
        return retn;
    }

    public getComponent<T extends Component>(type : TypeOf<T>) : T {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] instanceof type) {
                return this.components[i] as T; //why do I need the cast?
            }
        }
        return null;
    }

    //Returns all components of Type type in the GameObject
    public getComponents<T extends Component>(type : TypeOf<T>, storage? : Array<T>) : Array<T> {
        const retn = storage || new Array<T>();
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] instanceof type) {
                retn.push(this.components[i] as T);
            }
        }
        return retn;
    }

    public getComponentInChildren<T extends Component>(type : TypeOf<T>) : T {
        const cmp = this.getComponent(type);
        if (cmp) return cmp;
        const childCount = this.children.length;
        for (let i = 0; i < childCount; i++) {
            const child = this.children[i];
            const cmp = child.getComponent(type);
            if (cmp) return cmp;
        }
        return null;
    }

    //Returns all components of Type in the AppElement in it's direct children
    public getComponentsInChildren<T extends Component>(type : TypeOf<T>, storage? : Array<T>) : Array<T> {
        const retn = this.getComponents(type, storage);
        const childCount = this.children.length;
        for (let i = 0; i < childCount; i++) {
            const child = this.children[i];
            child.getComponents(type, retn);
        }
        return retn;
    }

    public getComponentsInDescendants<T extends Component>(type : TypeOf<T>, storage? : Array<T>) : Array<T> {
        const retn = this.getComponents(type, storage);
        const childCount = this.children.length;
        for (let i = 0; i < childCount; i++) {
            const child = this.children[i];
            child.getComponentsInDescendants(type, retn);
        }
        return retn;
    }

    public getComponentInParent<T extends Component>(type : TypeOf<T>) : T {
        if (!this.parent) return null;
        return this.parent.getComponent(type);
    }

    public getComponentsInParent<T extends Component>(type : TypeOf<T>, storage? : Array<T>) : Array<T> {
        if (!this.parent) return [];
        return this.parent.getComponents(type, storage);
    }

    public destroy() {
        if (!this.parent) return; //can't destroy root

        this.lifeCycleFlags |= LifeCycleFlag.Destroyed;

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }

        for (let i = 0; i < this.components.length; i++) {
            this.components[i].destroy();
        }

        if (!this.parent.isDestroyed()) {
            this.parent.children.remove(this);
            const components = this.parent.components;
            for (let i = 0; i < components.length; i++) {
                components[i].onChildRemoved(this);
            }
            const childIds = new Array<number>();
            traverseChildren(this, (child : AppElement) => {
                childIds.push(child.id);
            });
            Runtime.sendCommand(CommandType.Destroy, { id: this.id, childIds });
        }

        this.components = null;
        this.boundingBox = null;
        this.children = null;
        this.parent = null;
    }

    private destroyFromParent() : void {
        //don't fire handlers n stuff
    }

    /*** Accessors ***/

    public isRoot() : boolean {
        return this === AppElement.Root;
    }

    public isCreated() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Created) !== 0;
    }

    public isEnabled() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Enabled) !== 0;
    }

    public isDisabled() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Enabled) === 0;
    }

    public isMounted() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Mounted) !== 0;
    }

    public isDestroyed() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Destroyed) !== 0;
    }

    /*** Helpers ***/

    public containsPoint(point : Vector2) : boolean {
        return false;
        // const p = this.getPosition();
        // const x = p.x;
        // const y = p.y;
        // const w = this.width;
        // const h = this.height;
        // const px = point.x;
        // const py = point.y;
        // return px >= x && x + w >= px && py >= y && y + h >= py;
    }

    //this might be backwards
    //todo account for rotation
    // public containsRect(rect : Rectangle) : boolean {
    //     const p = this.getPosition();
    //     return rect.x + rect.width < (p.x + this.width)
    //         && (rect.x) > (p.x)
    //         && (rect.y) > (p.y)
    //         && (rect.y + rect.height) < (p.y + this.height);
    // }
    //
    // //todo account for rotation -- probably want to use algorithm of overlapping polygons instead
    // public overlapsRectangle(rect : Rectangle) : boolean {
    //     const p = this.getPosition();
    //     const minAx = p.x;
    //     const minAy = p.y;
    //     const maxAx = p.x + this.width;
    //     const maxAy = p.y + this.height;
    //     const minBx = rect.x;
    //     const minBy = rect.y;
    //     const maxBx = rect.x + rect.width;
    //     const maxBy = rect.y + rect.height;
    //     const aLeftOfB = maxAx < minBx;
    //     const aRightOfB = minAx > maxBx;
    //     const aAboveB = minAy > maxBy;
    //     const aBelowB = maxAy < minBy;
    //     return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );
    // }

    /*** Static ***/

    public static Root : AppElement = null;

}


