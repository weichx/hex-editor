import {PrefabAsset} from "../asset_types/prefab_asset";
import {EditorAssetItem} from "../windows/asset/asset_item";
import {DragAction} from "../editor/drag_actions/drag_action";
import {Asset} from "../runtime/asset";
import {PrefabDragAction} from "../editor/drag_actions/prefab_drag_action";

@DragAction.Inherit
export class PrefabAssetItem extends EditorAssetItem<PrefabAsset> {

    public getIconName() : string {
        return "object-group";
    }

    public canNestAsset(asset : Asset) : boolean {
        return asset instanceof PrefabAsset;
    }

    public createDragAction() : DragAction {
        return new PrefabDragAction(this.asset);
    }

}