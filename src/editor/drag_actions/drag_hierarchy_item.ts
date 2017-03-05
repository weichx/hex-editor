import {DragAction} from "./drag_action";
import {HierarchyItem} from "../../windows/hierarchy/hierarchy_item";
import {AppElement} from "../../runtime/app_element";

export class HierarchyItemDragAction extends DragAction {

    public readonly item : HierarchyItem;
    public readonly appElement : AppElement;

    constructor(item : HierarchyItem) {
        super();
        this.item = item;
        this.appElement = item.attrs.element;
    }

}