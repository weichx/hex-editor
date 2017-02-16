import {getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorElement} from "./editor_element";

export class EditorBindingElement extends EditorElement {

    private lastContent : string;
    private textNode : Text;
    private getterFn : (ctx : any) => any;
    private ctx : any;

    constructor(ctx : any, path : Array<any>) {
        super();
        this.ctx = ctx;
        this.getterFn = getGetter(path);
    }

    public onEnabled() {
        if (this.textNode) {
            EditorRuntime.addUpdater(this, 150);
        }
    }

    public onUpdated() {
        const newValue = this.getterFn(this.ctx);
        if (this.lastContent !== newValue) {
            this.textNode.nodeValue = newValue;
            this.lastContent = newValue;
        }
    }

    public onDestroyed() {
        this.ctx = null;
        EditorRuntime.removeUpdater(this);
    }

    public onDisabled() {
        EditorRuntime.removeUpdater(this);
    }

    public getDomNode() : HTMLElement {
        return this.textNode as any;
    }

    protected getChildMountPoint() : HTMLElement {
        throw new Error("Bind Nodes cannot have children");
    }

    public addChild(child : EditorElement) {
        throw new Error("Bind Nodes cannot have children");
    }

    public mount(mountPoint : HTMLElement) : void {
        if (this.isMounted) return;
        this.__mountPoint = mountPoint;
        this.textNode = document.createTextNode(this.getterFn(this.ctx));
        mountPoint.appendChild(this.textNode);
        this.onEnabled(); // todo only do this if enabled
        this.isMounted = true;
    }

}
