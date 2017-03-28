import {EditorHTMLElement} from "../editor_element/editor_html_element";

export interface IWindowAttrs {
    titleString : string;
    icon? : string;
}

export abstract class EditorWindowElement<T extends IWindowAttrs> extends EditorHTMLElement<IWindowAttrs> {

}

