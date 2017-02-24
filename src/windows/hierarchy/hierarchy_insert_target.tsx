import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {DragAction} from "../../drag_actions/drag_action";

class AppElementAssetDragAction extends DragAction {}

export class HierarchyInsertTarget extends EditorHTMLElement<{}> {

    public getDomData() : IDomData {
        return { tagName : "div", classList: "hierarchy-insert-target" };
    }

    @DragAction.MouseEnter(AppElementAssetDragAction)
    public handleDragEnter(dragAction : AppElementAssetDragAction) : void {
        this.getDomNode().style.background = "blue";
    }

    @DragAction.MouseExit(AppElementAssetDragAction)
    @DragAction.Drop(AppElementAssetDragAction)
    public handleDragExit(dragAction : AppElementAssetDragAction) : void {
        this.getDomNode().style.background = null;
    }

    @DragAction.Drop(AppElementAssetDragAction)
    public handleDrop(dragAction : AppElementAssetDragAction) : void {

    }
}

createStyleSheet(`<style>
    .hierarchy-insert-target {
        height: 0.2em;
    }
`);