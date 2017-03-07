import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {HierarchyItem} from "./hierarchy_item";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {HierarchyItemDragAction} from "../../editor/drag_actions/drag_hierarchy_item";
import {PrefabDragAction} from "../../editor/drag_actions/prefab_drag_action";

export class HierarchyItemDropTarget extends EditorHTMLElement<{ insert : "before"|"after" }> {

    private target : HierarchyItem;

    public onMounted() {
        this.target = this.parent as HierarchyItem;
    }

    @DragAction.MouseEnter(PrefabDragAction)
    @DragAction.MouseEnter(HierarchyItemDragAction)
    public onDragEnter(action : PrefabDragAction|HierarchyItemDragAction) : void {
        this.addClass("hover")
    }

    @DragAction.MouseExit(PrefabDragAction)
    @DragAction.MouseExit(HierarchyItemDragAction)
    public onDragExit() : void {
        this.removeClass("hover")
    }

    @DragAction.Drop(PrefabDragAction)
    @DragAction.Drop(HierarchyItemDragAction)
    public onDrop(action : PrefabDragAction|HierarchyItemDragAction) : void {
        const grandParent = this.target.getAncestorByType(HierarchyItem);

        if (!grandParent) {
            return;
        }

        let idx = grandParent.getChildRoot().getChildIndex(this.target);
        if (this.attrs.insert === "after") idx++;
        if(action instanceof PrefabDragAction) {
            //create
        }
        else if(action instanceof HierarchyItemDragAction) {
            //if shares parent, set index
            //else, set parent then index

            //action.appElement.setParent(this.target.attrs.element);
            action.appElement.setSiblingIndex(idx);
            grandParent.getChildRoot().insertChild(action.item, idx);
        }

    }

    public createInitialStructure() : JSXElement {
        return <div class="hover-target-display"/>
    }
}

createStyleSheet(`<style>
    
    .hierarchy-item-drop-target {
        position:relative;
    }
    
    .hierarchy-item-drop-target .hover-target-display {
        position: absolute;
        top: -2px;
        left: 0;
        height: 4px;
        width: 100%;
    }
    
    .hierarchy-item-drop-target.hover .hover-target-display {
        background: aliceblue;
    }
    
`);