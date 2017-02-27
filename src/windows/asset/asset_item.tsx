import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {DragAction} from "../../editor/drag_actions/drag_action";

export class AssetSectionItem<T> extends EditorHTMLElement<T> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "asset-item" }
    }

    public createDragAction() : DragAction {
        throw new Error("Subclass this");
    }

}

createStyleSheet(`<style>
    
    .asset-item {

    }
    
    .asset-item-name {
    
    }
    
`);