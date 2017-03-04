import {DragAction} from "./drag_action";
import {HierarchyItem} from "../../windows/hierarchy/hierarchy_item";

export class HierarchyItemDragAction extends DragAction {

    public readonly item : HierarchyItem;

    constructor(item : HierarchyItem) {
        super();
        this.item = item;
    }

}