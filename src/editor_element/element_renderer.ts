import {IdAndEventsAttributes} from "./element_attribute";
import {EditorTextElement} from "./editor_text_element";
import {EditorHTMLElement} from "./editor_html_element";
import {RenderContextStack} from "./render_context_stack";
import {EditorElement} from "./editor_element";

const smartAttributes = [
    IdAndEventsAttributes
];

function createChildren(root : any, children : any) {
    if (typeof children === "string") {
        root.addChild(new EditorTextElement(children));
    }
    else if (typeof children === "boolean") {
        root.addChild(new EditorTextElement(children.toString()));
    }
    else if (typeof children === "number") {
        root.addChild(new EditorTextElement(children.toString()));

    }
    else if (Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            createChildren(root, children[i]);
        }
    }
    else if (children instanceof EditorElement) {
        root.addChild(children);
    }
}

// created -> no children have been built
// structured -> static children have been built
// enabled
// mounted -> structure is built but not in dom, all children are present
// rendered -> structure in dom
// disabled
// destroyed

function createHTMLElement(tag : string, attrs : any, children : any) {
    const retn = new EditorHTMLElement(attrs, tag);
    const renderContext = RenderContextStack.peek();
    retn.onCreated();
    createChildren(retn, children);
    if (attrs) {
        for (let i = 0; i < smartAttributes.length; i++) {
            smartAttributes[i](renderContext, retn, attrs);
        }
    }
    retn.isStructured = true;
    retn.__renderContext = renderContext;
    retn.onStructured();
    retn.onEnabled();
    return retn;
}

function createInstanceElement(type : TypeOf<EditorElement>, attrs : any, children : any) {
    const renderContext = RenderContextStack.peek();
    const retn = new type(attrs) as any;
    RenderContextStack.push(retn);
    retn.onCreated();
    const child = retn.createInitialStructure(children);
    child && createChildren(retn, child);
    if (attrs) {
        for (let i = 0; i < smartAttributes.length; i++) {
            smartAttributes[i](renderContext, retn, attrs);
        }
    }
    retn.isStructured = true;
    retn.__renderContext = renderContext;
    retn.onStructured();
    retn.onEnabled();
    RenderContextStack.pop();
    return retn;
}

export function createElement<T extends EditorElement,U>(type : string | TypeOf1<T, U>, attrs : U = null, ...children : any[]) : any {

    if (typeof type === "string") {
        return createHTMLElement(type, attrs, children);
    }
    else if (typeof type === "function") {
        return createInstanceElement(type, attrs, children);
    }

}

export function render(editorElement : EditorElement, mountPoint : HTMLElement) {
    (editorElement as any).render(mountPoint);
}

