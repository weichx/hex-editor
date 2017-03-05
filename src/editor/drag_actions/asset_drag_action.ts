import {DragAction} from "./drag_action";
import {Asset} from "../../runtime/asset";
import {EditorAssetItem} from "../../windows/asset/asset_item";

export class AssetDragAction extends DragAction {

    public readonly asset : Asset;
    public readonly item : EditorAssetItem<any>;

    constructor(asset : Asset, item : EditorAssetItem<any>) {
        super();
        this.asset = asset;
        this.item = item;
    }

}