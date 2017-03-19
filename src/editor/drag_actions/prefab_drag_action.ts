import {DragAction} from "./drag_action";
import {PrefabAsset} from "../../asset_types/prefab_asset";

export class PrefabDragAction extends DragAction {

    public readonly template : PrefabAsset;

    constructor(template : PrefabAsset) {
        super();
        this.template = template;
    }

}