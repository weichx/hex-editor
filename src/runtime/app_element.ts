import {Rectangle} from "./rectangle";
import {Component} from "./component";
import {Vector2} from "./vector2";
import {RuntimeImpl} from "./runtime";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {CommandType} from "./enums/e_command_type";
import {TypeOf} from "./interfaces/i_typeof";

let idGenerator = -1;

export class AppElement {

    public name : string;

    public readonly id : number;

    private rect : Rectangle;
    private parent : AppElement;
    private components : Array<Component>;
    private children : Array<AppElement>;
    private lifeCycleFlags : LifeCycleFlag;

    constructor(name? : string, parent : AppElement = null) {
        this.id = idGenerator++;
        this.name = name || "App Element";
        this.lifeCycleFlags = 0;
        this.parent = parent || AppElement.Root;
        this.children = [];
        this.components = [];
        this.rect = new Rectangle();
        //todo don't allow components to be constructed outside of addComponent or this constructor
        Runtime.addElement(this);
    }

    public enable() : void {
        //Runtime.enable(this);
    }

    public setRectValues(x : number, y : number, width : number, height : number) : void {
        this.rect.x = x;
        this.rect.y = y;
        this.rect.width = width;
        this.rect.height = height;
        Runtime.sendCommand(CommandType.SetRect, this.id);
    }

    public setRect(rect : Rectangle) : void {
        this.rect.x = rect.x;
        this.rect.y = rect.y;
        this.rect.width = rect.width;
        this.rect.height = rect.height;
        Runtime.sendCommand(CommandType.SetRect, this.id);
        //todo -- emit event here
    }

    public getRect() : Rectangle {
        return this.rect.clone();
    }

    public setParent(parent : AppElement) : void {
        this.parent = parent;
        this.parent.children.push(this);
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
        const idx = this.children.indexOf(child);
        if (idx !== -1) {
            child.setParent(null);
            this.children.splice(idx, 1);
        }
    }

    public getDepth() : number {
        if (this === AppElement.Root) return 0;
        let ptr = this.parent;
        let depth = 0;
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
        //todo this isnt right yet

        //todo destroy children
        for (let i = 0; i < this.components.length; i++) {
            this.components[i].destroy();
        }

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
        return this.rect.containsPoint(point);
    }

    public containsRect(rect : Rectangle) : boolean {
        return this.rect.containsRectangle(rect);
    }

    public overlapsRectangle(rect : Rectangle) : boolean {
        return this.rect.overlapsRectangle(rect);
    }

    public containsElement(appElement : AppElement) : boolean {
        return this.rect.containsRectangle(appElement.rect);
    }

    public overlapsElement(appElement : AppElement) : boolean {
        return this.rect.overlapsRectangle(appElement.rect);
    }

    // public getPointRelative() : Vector2 {
    //   return new Vector2(this.rect.x - )
    // }
    //
    // public makePointRelative(point : Vector2) : Vector2 {
    //     return new Vector2(this.rect.x + point.x, this.rect.y + point.y);
    // }

    /*** Static ***/

    public static Root : AppElement = null;

}


