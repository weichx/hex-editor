import {Button} from "../ui_elements/button";
import {EditorCustomElement} from "../editor_element/editor_custom_element";

export class Toolbar extends EditorCustomElement<{}> {

    public getDomData() : IDomData {
        return {
            tagName: "div",
            classList: "editor-toolbar"
        }
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <div class="button-group">
                <Button>Pan</Button>
                <Button>Scale</Button>
                <Button>Rotate</Button>
            </div>
        ]
    }

}

createStyleSheet(`
<style>
.editor-toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2em;
}

.button-group {

}

.button-group:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}
</style>
`);