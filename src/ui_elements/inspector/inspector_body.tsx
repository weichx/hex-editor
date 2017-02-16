import {EditorCustomElement} from "../../editor_element/editor_custom_element";

export class InspectorBody extends EditorCustomElement<{}> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "vertical" }
    }
}

