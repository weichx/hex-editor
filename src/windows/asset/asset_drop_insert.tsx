import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {DragAction} from "../../drag_actions/drag_action";
import {DragAssetItemAction} from "../../drag_actions/drag_asset_item_action";

export class AssetDropTargetInsert extends EditorHTMLElement<{}> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "asset-drop-target-insert" }
    }

    @DragAction.MouseEnter(DragAssetItemAction)
    public onDragEnter(action : DragAssetItemAction) {

    }

    @DragAction.MouseExit(DragAssetItemAction)
    public onDragExit(action : DragAssetItemAction) {

    }

    @DragAction.Drop(DragAssetItemAction)
    public onDrop(action : DragAssetItemAction) {
        debugger;
    }

}

createStyleSheet(`<style>

    .asset-drop-target-insert {
        width: 100%;
        height: 4px;
        background: orange;
    }

`);