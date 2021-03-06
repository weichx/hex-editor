import {traverse, traverseRootFirst} from "../util";
import {Vector2} from "../runtime/vector2";

interface IEventDescriptor {
    type : string;
    fn : (e? : any) => void;
    bubble : boolean;
}

export enum EditorElementFlags {
    Rendered = 1 << 1,
    Enabled = 1 << 2,
    Destroyed = 1 << 3,
    Visible = 1 << 4
}

const pendingEventMap = new WeakMap<EditorElement, IEventDescriptor[]>();
const activeEventMap = new WeakMap<EditorElement, IEventDescriptor[]>();
let idGenerator = 0;

export class EditorElement {

    public readonly id : number;
    public parent : EditorElement;
    public children : Array<EditorElement>;

    private renderContext : EditorElement;

    private childRoot : EditorElement;
    protected htmlNode : HTMLElement;

    private childIdMap : Indexable<EditorElement>;
    private flags : EditorElementFlags;

    constructor() {
        this.id = ++idGenerator;
        this.children = [];
        this.parent = null;
        this.flags = EditorElementFlags.Visible | EditorElementFlags.Enabled;
        this.childIdMap = null; //todo make this global map?
        this.childRoot = null;
        this.renderContext = null;
        this.childRoot = this;
    }

    public setChildIdAlias(id : string, element : EditorElement) {
        this.childIdMap = this.childIdMap || {};
        this.childIdMap[id] = element;
    }

    public setVisible(isVisible : boolean) {
        if (isVisible === this.isVisible()) {
            return;
        }
        this.flags ^= EditorElementFlags.Visible;
        if (this.htmlNode) {
            this.htmlNode.classList.toggle("hidden", !isVisible);
        }
        // this.onVisibilityChanged(isVisible);
    }

    public setPosition(x : number, y : number) : void {
        const dom = this.getDomNode();
        dom.style.left = x + "px";
        dom.style.top = y + "px";
    }

    public getClientBounds() {
        return (this.htmlNode) ? this.htmlNode.getBoundingClientRect() : null;
    }

    public addChild<T>(child : EditorElement) : boolean {
        return this.insertChild(child, this.children.length);
    }

    public insertChild<T>(child : EditorElement, index : number) : boolean {
        if(!child) return;
        if (index < 0) index = 0;
        if (index > this.children.length) index = this.children.length;
        if (this.children[index] === child) return;

        if (this.isAncestor(child)) {
            return false;
        }

        const oldParent = child.parent;
        const current = this.children[index];
        const moved = child.parent === this;

        if (child.parent) {
            child.parent.children.remove(child);
        }

        this.children.insert(child, index);
        child.parent = this;

        if (this.isMounted() && child.isMounted()) {
            if (current) {
                this.htmlNode.insertBefore(child.htmlNode, current.htmlNode);
            }
            else {
                this.htmlNode.appendChild(child.htmlNode);
            }
        }
        else if (!child.isRendered() && this.isRendered()) {
            child.render(this.htmlNode);
        }
        else if (!child.isMounted() && this.isMounted()) {
            child.mount(this.htmlNode);
        }

        if(!moved && oldParent && child.parent && child.isMounted()) {
            child.onParentChanged(this, oldParent);
        }

        if(moved) child.onMoved(index);

        return true;
    }

    protected render(mountPoint : HTMLElement) : void {
        this.mount(mountPoint);
        //todo get rid of onRerendered
        traverse(this, function (element : EditorElement) {
            if (element.isRendered()) {
                element.onRerendered();
            }
            else {
                element.flags |= EditorElementFlags.Rendered;
                element.onRendered();
            }
        });

    }

    public mount(mountPoint : HTMLElement) : void {
        this.htmlNode = this.htmlNode || this.createDomNode();

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].mount(this.htmlNode);
        }

        this.attachEvents();

        mountPoint.appendChild(this.htmlNode);
        this.onMounted();
    }

    protected attachEvents() : void {
        const pendingEvents = pendingEventMap.get(this);
        if (pendingEvents) {
            const activeEvents = activeEventMap.get(this) || [];
            for (let i = 0; i < pendingEvents.length; i++) {
                const handler = pendingEvents[i];
                activeEvents.push(handler);
                this.addEventListener(handler.type, handler.fn, handler.bubble);
            }
            pendingEvents.length = 0;
            pendingEventMap.set(this, null);
            activeEventMap.set(this, activeEvents);
        }
    }

    protected createDomNode() : HTMLElement {
        throw new Error("Not Implemented, use a subclass");
    }

    public orphan() : void {
        if (!this.isOrphaned()) {
            this.parent.children.remove(this);
            this.getDomNode().remove();
            this.parent = null;
        }
    }

    public isOrphaned() : boolean {
        return this.parent === null;
    }

    public orphanChildren() : void {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].getDomNode().remove();
            this.children[i].parent = null;
        }
        this.children.length = 0;
    }

    public clearChildren() : void {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }
        const node = this.getDomNode();
        while (node.firstElementChild) {
            node.firstElementChild.remove();
        }
    }

    public getChildrenByType<T extends EditorElement>(type : INewable<T>) : T[] {
        const retn = new Array<T>();
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof type) {
                retn.push(this.children[i] as any);
            }
        }
        return retn;
    }

    public getChildByType<T extends EditorElement>(type : INewable<T>) : T {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof type) {
                return this.children[i] as any;
            }
        }
        return null;
    }

    public getAncestorByType<T extends EditorElement>(type : INewable<T>, allowSelf = false) : T {
        if (allowSelf && this instanceof type) return this as any; //why do I need a cast and why can't it be T?
        let ptr = this.parent as any;
        while (ptr) {
            if (ptr instanceof type) {
                return ptr as T;
            }
            ptr = ptr.parent;
        }
        return null;
    }

    public getFirstOfTypeUpwards<T extends EditorElement>(type : INewable<T>) : T {
        if (this instanceof type) return this as any;
        return this.getAncestorByType(type);
    }

    public getDomNode() : HTMLElement {
        return this.htmlNode;
    }

    public getChildById<T extends EditorElement>(id : string) : T {
        if (!this.childIdMap) return null;
        return this.childIdMap[id] as T;
    }

    public setChildRoot(element : EditorElement) : void {
        //todo assert child root is a child
        this.childRoot = element;
        if (!this.childRoot) this.childRoot = this;
    }

    public getChildRoot() : EditorElement {
        return this.childRoot;
    }

    public getChildCount() : number {
        return this.children.length;
    }

    public hasXId(idName : string) : boolean {
        const dom = this.getDomNode();
        return dom.getAttribute("x-id") === idName;
    }

    public isElementInHierarchy(element : Element) : boolean {
        const dom = this.getDomNode();
        let ptr = element.parentNode;
        while (ptr !== document.body) {
            if (ptr === dom) return true;
            ptr = ptr.parentNode;
        }
        return false;
    }

    public isAncestor(target : EditorElement) : boolean {
        let ptr = this.parent;
        while (ptr) {
            if (ptr === target) {
                return true;
            }
            ptr = ptr.parent;
        }
        return false;
    }

    public isDescendant(target : EditorElement) : boolean {
        return target.isAncestor(this);
    }

    public getChildIndex(child : EditorElement) : number {
        return this.children.indexOf(child);
    }

    //todo need to remove all event handlers
    public destroy() {
        if (this.isDestroyed()) return;
        this.flags |= EditorElementFlags.Destroyed;
        //maybe have 'isDestroyPending' flag
        //be careful with destroying the dom node since it is shared in a virtual tree
        this.onDestroyed();

        for (let i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }

        if (this.parent) {
            if (!this.parent.isDestroyed()) {
                this.getDomNode().remove();
                this.parent.children.remove(this);
            }
        }

        this.renderContext = null;
        this.parent = null;
        this.childRoot = null;
        this.childIdMap = null;
        this.children = null;

    }

    public pointToLocalSpace(point : Vector2) : Vector2 {
        const rect = this.htmlNode.getBoundingClientRect();
        return new Vector2(
            point.x - rect.left,
            point.y - rect.top
        );
    }

    public pointToWorldSpace(point : Vector2) : Vector2 {
        const rect = this.htmlNode.getBoundingClientRect();
        return new Vector2(
            point.x + rect.left,
            point.y + rect.top
        );
    }

    public isDestroyed() : boolean {
        return (this.flags & EditorElementFlags.Destroyed) !== 0;
    }

    public isMounted() : boolean {
        return Boolean(this.htmlNode);
    }

    public isRendered() : boolean {
        return (this.flags & EditorElementFlags.Rendered) !== 0;
    }

    public isVisible() : boolean {
        return (this.flags & EditorElementFlags.Visible) !== 0;
    }

    public addEventListener(evtName : string, fn : (e : any) => void, bubble : boolean = false) : void {
        if (this.htmlNode) {
            const evtList = activeEventMap.get(this) || [];
            evtList.push({ type: evtName, fn: fn, bubble: bubble });
            this.htmlNode.addEventListener(evtName, fn, false);
            activeEventMap.set(this, evtList);
        }
        else {
            const evtList = pendingEventMap.get(this) || [];
            evtList.push({ type: evtName, fn, bubble });
            pendingEventMap.set(this, evtList);
        }
    }

    public removeEventListener(evtName : string, fn : (e : any) => void) : boolean {
        const evtList = pendingEventMap.get(this);
        if (!evtList) return;
        for (let i = 0; i < evtList.length; i++) {
            const evt = evtList[i];
            if (evt.type === evtName && evt.fn === fn) {
                if (this.htmlNode) {
                    this.htmlNode.removeEventListener(evtName, fn);
                }
                evtList.removeAt(i);
                return true;
            }
        }
    }

    public createInitialStructure(children : any) : JSXElement {
        return children;
    }

    public onDestroyed() { }

    public onCreated() { }

    public onUpdated() { }

    public onRendered() { }

    public onRerendered() {}

    public onParentChanged(newParent : EditorElement, oldParent : EditorElement) {}

    public onMounted() { }

    public onDisabled() { }

    public onEnabled() { }

    public onMoved(index : number) : void {}

}