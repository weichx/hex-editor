import {ToggleIcon} from "../icon";
import {InspectorBody} from "./inspector_body";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";

interface IInspectorHeaderAttrs {
    title : string;
}

export class InspectorHeader extends EditorHTMLElement<IInspectorHeaderAttrs> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "horizontal" }
    }

    public createInitialStructure() : JSXElement {
        return [
            <ToggleIcon visibilityTarget={ () => this.parent.getChildByType(InspectorBody) }/>,
            <span>{this.attrs.title}</span>,
        ]
    }
}
