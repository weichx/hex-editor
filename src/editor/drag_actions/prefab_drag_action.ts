import {DragAction} from "./drag_action";
import {PrefabTemplate} from "../../asset_types/prefab_template";

export class PrefabDragAction extends DragAction {

    public readonly template : PrefabTemplate;

    constructor(template : PrefabTemplate) {
        super();
        this.template = template;
    }

}