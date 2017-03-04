import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {HierarchyItemDragAction} from "../../editor/drag_actions/drag_hierarchy_item";

class AppElementAssetDragAction extends DragAction {}

export class HierarchyInsertTarget extends EditorHTMLElement<{}> {

    public getDomData() : IDomData {
        return { tagName : "div", classList: "hierarchy-insert-target" };
    }

    @DragAction.MouseEnter(HierarchyItemDragAction)
    public handleDragEnter(dragAction : AppElementAssetDragAction) : void {
        this.getDomNode().style.background = "green";
    }

    @DragAction.MouseExit(HierarchyItemDragAction)
    @DragAction.Drop(HierarchyItemDragAction)
    public handleDragExit(dragAction : AppElementAssetDragAction) : void {
        this.getDomNode().style.background = null;
    }

    @DragAction.Drop(HierarchyItemDragAction)
    public handleDrop(dragAction : AppElementAssetDragAction) : void {
        debugger;
    }
}

createStyleSheet(`<style>
    .hierarchy-insert-target {
        height: 0.15em;
    }
`);