import { EditorHTMLElement } from "../../editor_element/editor_html_element";
import { InspectorRow } from "../../ui_elements/inspector/inspector_row";
import { Vector2Input } from "../../ui_elements/vector2_input";

export class TransformInspector extends EditorHTMLElement<{element : any}> {

    public createInitialStructure() : JSXElement {
        return [
            <InspectorRow label="Position">
                <Vector2Input binding={this.attrs.element.position}/>
            </InspectorRow>
        ];
    }

}