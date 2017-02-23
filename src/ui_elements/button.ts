import {EditorHTMLElement} from "../editor_element/editor_html_element";

interface IButtonAttr {
    [key : string] : any;
}

export class Button extends EditorHTMLElement<IButtonAttr> {

    protected getDomData() : IDomData {
        return {
            tagName: "button",
            classList: "btn"
        }
    }


}

