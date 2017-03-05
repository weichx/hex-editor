import {EditorHTMLElement} from "../../editor_element/editor_html_element";

interface IComponentOptionAttr extends IHTMLAttribute {
    label : string;
}

export class ComponentOption extends EditorHTMLElement<IComponentOptionAttr> {

    public getDomData() : IDomData {
        return { tagName: "div", classList: "component-item" }
    }

    public createInitialStructure() : JSX.Element<any> {
        return this.attrs.label
    }

}
