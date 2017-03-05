import {EditorHTMLElement} from "../../editor_element/editor_html_element";

export class InspectorBody extends EditorHTMLElement<{}> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "vertical" }
    }
}

