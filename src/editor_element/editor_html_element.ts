import {EditorElement} from "./editor_element";
import {EditorTextElement} from "./editor_text_element";
import {dasherize} from "../util";
import {Color} from "../runtime/color";
import {Vector2} from "../runtime/vector2";
import {MathUtil} from "../math_util";

declare global {
    interface Node {
        __editorElement : EditorElement;
    }
}

export let InputEventAnnotationMap = new Map<Object, Array<any>>();

export class EditorHTMLElement<T extends IHTMLAttribute> extends EditorElement {

    public attrs : T;
    public tagName : string;
    public element = this; //this is for the updateTree -- but I don't like it

    private __runtime_events__ : Map<any, any>; //set from the runtime event class

    constructor(attrs : T, tagName : string = "div") {
        super();
        this.attrs = attrs || {} as T;
        this.tagName = tagName;
        const eventAnnotations = InputEventAnnotationMap.get(this.constructor.prototype);

        if (eventAnnotations) {
            for (let i = 0; i < eventAnnotations.length; i++) {
                const annotation = eventAnnotations[i];
                this.addEventListener(annotation.type, (e : MouseEvent) => {
                    (this as any)[annotation.methodName](e);
                    e.stopPropagation();
                    e.preventDefault();
                });
            }
        }
        // todo -- handle events better, right now we never unsubscribe on destroy
        // todo -- better to handle events on a per instance basis
        // if (this.__runtime_events__) {
        //     this.__runtime_events__.forEach((value : any, key : any) => {
        //         EditorRuntime.on(value, this);
        //     });
        // }
    }

    protected getDomData() : IDomData {
        if (this.constructor.name === "EditorHTMLElement") {
            return { tagName: this.tagName };
        }
        else {
            return {
                tagName: this.tagName,
                classList: dasherize(this.constructor.name)
            }
        }
    }

    public hasClass(className : string) : boolean {
        return this.htmlNode.classList.contains(className);
    }

    public addClass(className : string) : void {
        this.htmlNode.classList.add(className);
    }

    public removeClass(className : string) : void {
        this.htmlNode.classList.remove(className);
    }

    public toggleClass(className : string, force : boolean = false) {
        this.htmlNode.classList.toggle(className, force);
    }

    public setStyle(styles : IStyleDeclaration) : void {
        const keys = Object.keys(styles);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            (this.htmlNode.style as any)[key] = styles[key];
        }
    }

    public setText(text : string) : void {
        const textChild = this.children[0];
        if (!textChild) {
            this.addChild(new EditorTextElement(text));
        }
        else if (textChild instanceof EditorTextElement) {
            textChild.setText(text);
        }
        else {
            // no idea what to do here
        }
    }

    public getText() : string {
        return this.htmlNode.innerText;
    }

    private hasVisibleParentHTML() {
        let ptr = this.parent;
        while (ptr) {
            if (ptr instanceof EditorHTMLElement) {
                return ptr.isVisible();
            }
            ptr = ptr.parent;
        }
        return false;
    }

    public createDomNode() {
        if (this.htmlNode) return this.htmlNode;
        const domData = this.getDomData();
        this.tagName = domData.tagName || "div";
        this.htmlNode = document.createElement(domData.tagName);
        this.htmlNode.__editorElement = this;

        if (domData.classList) {
            let className = domData.classList;
            const attrClass = this.attrs.class;
            if (attrClass) {
                className += " " + attrClass;
            }
            this.htmlNode.className = className;
        }
        else if (this.attrs.class) {
            this.htmlNode.className = this.attrs.class;
        }

        if (domData && domData.style) {
            const attrStyle = this.attrs.style || "";
            this.htmlNode.setAttribute("style", domData.style + ";" + attrStyle);
        }
        else if (this.attrs.style) {
            this.htmlNode.setAttribute("style", this.attrs.style);
        }

        const attrs = domData.attributes;
        if (attrs) {
            for (let a in attrs) {
                if (a[0] === "x" && a[1] === "-") continue;
                if (a.indexOf("on") === 0) continue;
                this.htmlNode.setAttribute(a, attrs[a])
            }
        }

        for (let a in this.attrs) {
            if (typeof this.attrs[a] !== "string") continue;
            if (a.indexOf("x-") === 0) continue;
            if (a.indexOf("on") === 0) continue;
            if (a === "style" || a === "class") continue;
            this.htmlNode.setAttribute(a, (this.attrs as any)[a])
        }

        if (!this.isVisible()) {
            this.htmlNode.classList.add("hidden");
        }
        return this.htmlNode;
    }

    public getChildBySelector<T extends EditorHTMLElement<any>>(selector : string, type : INewable<T> = null) : T {
        const node = this.htmlNode.querySelector(":scope " + selector);
        if (node && node.__editorElement) {
            return node.__editorElement as T;
        }
    }

    public getChildrenBySelector(selector : string) : EditorHTMLElement<IHTMLAttribute>[] {
        const retn : Array<EditorHTMLElement<IHTMLAttribute>> = [];
        const nodes = this.htmlNode.querySelectorAll(":scope " + selector);
        for (let i = 0; i < nodes.length; i++) {
            const editorElement = nodes[i].__editorElement;
            if (editorElement) {
                retn.push(editorElement as EditorHTMLElement<IHTMLAttribute>);
            }
        }
        return retn;
    }

    public getDescendantsBySelector(selector : string) : EditorHTMLElement<IHTMLAttribute>[] {
        const retn : Array<EditorHTMLElement<IHTMLAttribute>> = [];
        const nodes = this.htmlNode.querySelectorAll(selector);
        for (let i = 0; i < nodes.length; i++) {
            const editorElement = nodes[i].__editorElement;
            if (editorElement) { //todo maybe ensure renderContext == this || this.renderContext
                retn.push(editorElement as EditorHTMLElement<IHTMLAttribute>);
            }
        }
        return retn;
    }

}




