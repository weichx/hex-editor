import {EditorElement} from "./editor_element";

interface IPendingEvent {
    type : string;
    fn : (e? : any) => void;
    bubble : boolean;
}

export class EditorHTMLElement<T extends IHTMLAttribute> extends EditorElement {

    public attrs : T;
    public tagName : string;
    protected htmlNode : HTMLElement;
    private registeredEventHandlers : Array<IPendingEvent>;

    constructor(attrs : T, tagName : string = "div") {
        super();
        this.attrs = attrs || {} as T;
        this.tagName = tagName;
        this.htmlNode = null;
        this.registeredEventHandlers = null;
        this.childRoot = this;
        //todo -- seal this
    }

    public addEventListener(evtName : string, fn : (e : any) => void, bubble : boolean = false) : void {
        if (!this.registeredEventHandlers) this.registeredEventHandlers = [];
        if (!this.isRendered) this.registeredEventHandlers.push({ type: evtName, fn, bubble });
        if (this.htmlNode) {
            this.htmlNode.addEventListener(evtName, fn, false);
        }
    }

    public removeEventListener(evtName : string, fn : (e : any) => void) : boolean {
        if (!this.registeredEventHandlers) return false;
        for (let i = 0; i < this.registeredEventHandlers.length; i++) {
            const handler = this.registeredEventHandlers[i];
            if (handler.type === evtName && handler.fn === fn) {
                if (this.htmlNode) {
                    this.htmlNode.removeEventListener(evtName, fn);
                }
                this.registeredEventHandlers.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public getDomNode() : HTMLElement {
        return this.htmlNode;
    }

    protected getChildMountPoint() : HTMLElement {
        return this.htmlNode;
    }

    public mount(mountPoint : HTMLElement) : void {
        const wasMounted = this.isMounted;
        this.__mountPoint = mountPoint;
        const root = this.htmlNode || this.createDomNode();
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].mount(root);
        }
        if (!this.isVisible && this.hasVisibleParentHTML()) {
            this.setVisible(false);
        }
        mountPoint.appendChild(root);
        if (!wasMounted) this.onMounted();
        this.isMounted = true;
    }

    private hasVisibleParentHTML() {
        let ptr = this.parent;
        while (ptr) {
            if (ptr instanceof EditorHTMLElement) {
                return ptr.isVisible;
            }
            ptr = ptr.parent;
        }
        return false;
    }

    public onRendered() {
        if (this.registeredEventHandlers) {
            for (let i = 0; i < this.registeredEventHandlers.length; i++) {
                const peh = this.registeredEventHandlers[i];
                this.addEventListener(peh.type, peh.fn);
            }
        }
    }

    public setVisible(isVisible : boolean) : void {
        this.isVisible = isVisible;
        if (!this.htmlNode) return;
        if (isVisible) {
            this.htmlNode.classList.remove('hidden');
        }
        else {
            this.htmlNode.classList.add('hidden');
        }
    }

    public createDomNode() {
        if (this.htmlNode) return this.htmlNode;
        this.htmlNode = document.createElement(this.tagName);
        (<any>this.htmlNode).__editorElement = this;
        for (let a in this.attrs) {
            if (typeof this.attrs[a] === "string") {
                this.htmlNode.setAttribute(a, (<any>this.attrs)[a]);
            }
        }
        return this.htmlNode;
    }

    public createInitialStructure(children : any) : JSX.Element<{}> {
        return children;
    }

    public getClientBounds() {
        return this.htmlNode.getBoundingClientRect();
    }

}
