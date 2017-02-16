import {EditorCustomElement} from "../editor_element/editor_custom_element";

interface IButtonAttr {
    [key : string] : any;
    type? : "info" | "danger" | "primary" | "success" | "warning" | "link";
    size? : "block" | "large" | "medium" | "small" | "tiny";
}

export class Button extends EditorCustomElement<IButtonAttr> {

    protected getDomData() : IDomData {
        return {
            tagName: "button",
            classList: "btn " + this.getButtonSize() + this.getButtonType()
        }
    }

    private getButtonSize() : string {
        return " btn-" + (this.attrs.size || "default");
    }

    private getButtonType() : string {
        return " btn-" + (this.attrs.size || "primary");
    }

}

