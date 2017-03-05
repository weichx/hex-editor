import {PrefabTemplate} from "./prefab_template";
import {EditorAssetItem} from "../windows/asset/asset_item";
import {DragAction} from "../editor/drag_actions/drag_action";
import {Asset} from "../runtime/asset";

@DragAction.Inherit
export class PrefabAssetItem extends EditorAssetItem<PrefabTemplate> {

    public getIconName() : string {
        return "object-group";
    }

    public canNestAsset(asset : Asset) : boolean {
        return asset instanceof PrefabTemplate;
    }


}