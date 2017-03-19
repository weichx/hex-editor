import {EditorAssetItem} from "../windows/asset/asset_item";
import {DragAction} from "../editor/drag_actions/drag_action";
import {Asset} from "../runtime/asset";

@DragAction.Inherit
export class ImageAssetItem extends EditorAssetItem<Asset> {

    public getIconName() : string {
        return "object-group";
    }

}