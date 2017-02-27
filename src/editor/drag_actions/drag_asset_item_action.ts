import {DragAction} from "./drag_action";
import {Asset} from "../../runtime/asset";

export class DragAssetItemAction extends DragAction {

    public readonly asset : Asset;

    constructor(asset : Asset) {
        super();
        this.asset = asset;
    }



}