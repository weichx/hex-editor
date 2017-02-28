import {EditorElement} from "../../editor_element/editor_element";
import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {createElement} from "../../editor_element/element_renderer";
import {Component} from "../../runtime/component";
import {TypeOf} from "../../runtime/interfaces/i_typeof";

export interface IPropertyRendererAttrs {
    component : Component & Indexable<any>;
    editorData : IEditorAnnotationData;
}

export class PropertyRenderer<T> extends EditorCustomElement<T & IPropertyRendererAttrs> {

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

