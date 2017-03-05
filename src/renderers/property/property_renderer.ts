import {EditorElement} from "../../editor_element/editor_element";
import {createElement} from "../../editor_element/element_renderer";
import {Component} from "../../runtime/component";
import {TypeOf} from "../../runtime/interfaces/i_typeof";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";

export interface IPropertyRendererAttrs {
    component : Component & Indexable<any>;
    editorData : IEditorAnnotationData;
}

export class PropertyRenderer<T> extends EditorHTMLElement<T & IPropertyRendererAttrs> {

    public createInitialStructure(children : any) : JSXElement {
        return children;
    }

    private static RendererMap = new Map<Constructor, TypeOf<EditorElement>>();

    public static set(type : Constructor, renderer : any) : void {
        PropertyRenderer.RendererMap.set(type, renderer);
    }

    public static get(component : Component, editorData : IEditorAnnotationData, attrs : any = null) : any {
        const rendererType = PropertyRenderer.RendererMap.get(editorData.propertyType);
        return createElement(rendererType, {component, editorData, ...attrs});
    }

}

//change propogation
//input -> notify upwards of changes

//send every frame

//check every frame

