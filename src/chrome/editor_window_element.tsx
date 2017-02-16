import {EditorCustomElement} from "../editor_element/editor_custom_element";

export interface IWindowAttrs {
    title : string;
    icon? : string;
}

export abstract class EditorWindowElement<T extends IWindowAttrs> extends EditorCustomElement<IWindowAttrs> {

}

