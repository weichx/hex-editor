import {getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorElement} from "./editor_element";

export class EditorBindingElement extends EditorElement {
    public element = this;
    private lastContent : string;
    private textNode : Text;
    private getterFn : (ctx : any) => any;
    private ctx : any;
    private formatters : Array<(value : any) => any>;

    constructor(ctx : any, path : Array<any>) {
        super();
        this.ctx = ctx;
        this.getterFn = getGetter(path);
        this.formatters = null;
    }

    public onUpdated() {
        const newValue = this.getterFn(this.ctx);
        if (this.lastContent !== newValue) {
            this.textNode.nodeValue = this.applyFormatters(newValue);
            this.lastContent = newValue;
        }
    }

    private applyFormatters(value : any) : string {
        if(!this.formatters) return value;
        for(let i = 0; i < this.formatters.length; i++) {
            value = this.formatters[i](value);
        }
        return value;
    }

    public getDomNode() : HTMLElement {
        return this.textNode as any;
    }

    public addChild(child : EditorElement) {
        throw new Error("Bind Nodes cannot have children");
    }

    public mount(mountPoint : HTMLElement) : void {
        this.textNode = this.createDomNode() as any;
        mountPoint.appendChild(this.textNode);
        EditorRuntime.updateTree.add(this);
    }

    protected createDomNode() : HTMLElement {
        return document.createTextNode(this.getterFn(this.ctx)) as any;
    }

    public format(formatter : (value : any) => any ) : this {
        this.formatters = this.formatters || [];
        this.formatters.push(formatter);
        return this;
    }

}
