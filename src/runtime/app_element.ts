import {Rectangle} from "./rectangle";
import {Component} from "./component";
import {Vector2, ImmutableVector2} from "./vector2";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {CommandType} from "./enums/e_command_type";
import {TypeOf} from "./interfaces/i_typeof";
import {traverseChildren} from "../util";

let idGenerator = 0;

export enum Space {
    Local, World
}

export class AppElement {

    public name : string;
    public readonly id : number;

    private parent : AppElement;
    private components : Array<Component>;
    private children : Array<AppElement>;
    private lifeCycleFlags : LifeCycleFlag;
    private localPosition : Vector2;
    private parentPosition : Vector2;
    private scale : Vector2;
    private rotation : number;
    private width : number;
    private height : number;

    constructor(name? : string, parent : AppElement = null) {
        this.id = idGenerator++;
        this.name = name || "App Element";
        this.lifeCycleFlags = 0;
        this.parent = parent || AppElement.Root;
        this.children = [];
        this.components = [];
        this.localPosition = new Vector2();
        this.parentPosition = (this.parent) ? this.parent.getPosition() : new Vector2();
        if(this.parent) {
            this.parent.children.push(this);
        }
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.scale = new Vector2(1, 1);
        //todo don't allow components to be constructed outside of addComponent or this constructor
        Runtime.addElement(this);
    }

    public setScale(scale : IVector2) : void {
        this.scale.x = scale.x;
        this.scale.y = scale.y;
        Runtime.sendCommand(CommandType.SetTransform, this.id);
    }

    public getScale() : ImmutableVector2 {
        return this.scale.clone() as ImmutableVector2;
    }

    public getWidth() : number {
        return this.width;
    }

    public setWidth(width : number) : void {
        this.width = width;
        //todo get parent layout component and invoke layout
        //todo get layout component and invoke layout
        //todo use anchor settings
        Runtime.sendCommand(CommandType.SetDimensions, this.id);
    }

    public getHeight() : number {
        return this.height;
    }

    public setHeight(height : number) : void {
        this.height = height;
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
        Runtime.sendCommand(CommandType.SetDimensions, this.id);
    }

    public getRotation() : number {
        return this.rotation;
    }

    public setRotation(value : number) : void {
        this.rotation = value;
        Runtime.sendCommand(CommandType.SetTransform, this.id);
    }

    public setPosition(position : IVector2, relativeTo : Space = Space.World) : void {
        this.setPositionValues(position.x, position.y, relativeTo);
    }

    public setPositionValues(x : number, y : number, relativeTo : Space = Space.World) : void {
        if (relativeTo === Space.Local) {
            this.localPosition.x = x;
            this.localPosition.y = y;
        }
        else {
            this.localPosition.x = x - this.parentPosition.x;
            this.localPosition.y = y - this.parentPosition.y;
        }
        Runtime.sendCommand(CommandType.SetPosition, this.id);
        const worldX = this.localPosition.x + this.parentPosition.x;
        const worldY = this.localPosition.y + this.parentPosition.y;
        for(let i = 0; i < this.children.length;i++) {
            const position = this.children[i].parentPosition;
            position.x = worldX;
            position.y = worldY;
        }
    }

    public getLocalPosition() : ImmutableVector2 {
        return this.localPosition.clone() as ImmutableVector2;
    }

    public getPosition(positionCache? : Vector2) : Vector2 {
        if(positionCache) {
            positionCache.x = this.parentPosition.x + this.localPosition.x;
            positionCache.y = this.parentPosition.y + this.localPosition.y;
            return positionCache;
        }
        return this.localPosition.addVectorNew(this.parentPosition);
    }

    public getBoundingBox() : Rectangle {
        //todo axis aligned? handle rotation and scale
        const p = this.getPosition();
        return new Rectangle(p.x, p.y, this.width, this.height);
    }

    public enable() : void {
        //Runtime.enable(this);
    }

    public setParent(parent : AppElement) : void {
        if(parent && parent === this.parent) return;
        parent = parent || AppElement.Root;
        const oldParent = this.parent;
        this.parent = parent;
        //todo ancestor check
        if(oldParent) {
            oldParent.children.remove(this);
        }
        if(parent) {
            this.parent.children.push(this);
            const p = this.parent.getPosition();
            this.parentPosition.x = p.x;
            this.parentPosition.y = p.y;
        }
        else {
            this.parentPosition.x = 0;
            this.parentPosition.y = 0;
        }
        Runtime.setParent(this, parent, oldParent);
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
        if(this.children.remove(child)) {
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
        if(!this.parent) return; //can't destroy root

        this.lifeCycleFlags |= LifeCycleFlag.Destroyed;

        for(let i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }

        for (let i = 0; i < this.components.length; i++) {
            this.components[i].destroy();
        }

        if(!this.parent.isDestroyed()) {
            this.parent.children.remove(this);
            const components = this.parent.components;
            for(let i = 0; i < components.length; i++) {
                components[i].onChildRemoved(this);
            }
            const childIds = new Array<number>();
            traverseChildren(this, (child : AppElement) => {
                childIds.push(child.id);
            });
            Runtime.sendCommand(CommandType.Destroy, { id : this.id, childIds });
        }

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
        const p  = this.getPosition();
        const x = p.x;
        const y = p.y;
        const w = this.width;
        const h = this.height;
        const px = point.x;
        const py = point.y;
        return px >= x && x + w >= px && py >= y && y + h >= py;
    }

    //this might be backwards
    //todo account for rotation
    public containsRect(rect : Rectangle) : boolean {
        const p = this.getPosition();
        return rect.x + rect.width < (p.x + this.width)
            && (rect.x) > (p.x)
            && (rect.y) > (p.y)
            && (rect.y + rect.height) < (p.y + this.height);
    }

    //todo account for rotation -- probably want to use algorithm of overlapping polygons instead
    public overlapsRectangle(rect : Rectangle) : boolean {
        const p = this.getPosition();
        const minAx = p.x;
        const minAy = p.y;
        const maxAx = p.x + this.width;
        const maxAy = p.y + this.height;
        const minBx = rect.x;
        const minBy = rect.y;
        const maxBx = rect.x + rect.width;
        const maxBy = rect.y + rect.height;
        const aLeftOfB = maxAx < minBx;
        const aRightOfB = minAx > maxBx;
        const aAboveB = minAy > maxBy;
        const aBelowB = maxAy < minBy;
        return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );
    }


    /*** Static ***/

    public static Root : AppElement = null;

}


