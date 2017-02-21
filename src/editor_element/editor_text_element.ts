import {EditorElement} from './editor_element';

export class EditorTextElement extends EditorElement {

    public content : string;
    private textNode : Text;

    constructor(content : string) {
        super();
        this.content = content;
    }

    public getDomNode() : HTMLElement {
        return this.textNode as any;
    }

    public addChild(child : EditorElement) {
        throw new Error("Text Nodes cannot have children");
    }

    public mount(mountPoint : HTMLElement) : void {
        this.textNode = this.textNode || this.createDomNode() as any;
        mountPoint.appendChild(this.textNode);
    }

    public createDomNode() : HTMLElement {
        return document.createTextNode(this.content) as any;
    }

}
