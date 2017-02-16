import {EditorCustomElement} from "../../editor_element/editor_custom_element";

interface IComponentOptionAttr extends IHTMLAttribute {
    label : string;
}

export class ComponentOption extends EditorCustomElement<IComponentOptionAttr> {

    public getDomData() : IDomData {
        return { tagName: "div", classList: "component-item" }
    }

    public createInitialStructure() : JSX.Element<any> {
        return this.attrs.label
    }

}
