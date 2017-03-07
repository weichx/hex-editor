import {ToggleIcon} from "../../ui_elements/icon";
import {AppElement} from "../../runtime/app_element";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {HierarchyItemDragAction} from "../../editor/drag_actions/drag_hierarchy_item";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {HierarchyItemDropTarget} from "./hierarchy_insert_target";
import {CreateBinding} from "../../editor/binding";
import {AppElementParentChanged} from "../../editor_events/evt_app_element_parent_changed";

interface IHierarchyItem {
    element : AppElement;
}

export class HierarchyItem extends EditorHTMLElement<IHierarchyItem> {

    public setSelected(isSelected : boolean) : void {
        this.getChildBySelector(".hierarchy-item-offset").toggleClass("selected", isSelected);
    }

    public onDestroyed() {
        this.attrs.element = null;
    }

    @DragAction.MouseEnter(HierarchyItemDragAction)
    private mouseEnterDetails(action : HierarchyItemDragAction) : void {
        if (!(action.item === this || action.item === this.parent)) {
            this.getChildBySelector(".hierarchy-item-offset").addClass("hovered");
        }
    }

    @DragAction.MouseExit(HierarchyItemDragAction)
    private mouseExitDetails(item : HierarchyItemDragAction) : void {
        this.getChildBySelector(".hierarchy-item-offset").removeClass("hovered");
    }

    @DragAction.Drop(HierarchyItemDragAction)
    public mouseDragDrop(action : HierarchyItemDragAction) : void {
        if (action.item === this || action.item === this.parent) {
            return;
        }
        const elementParent = this.attrs.element;
        action.appElement.setParent(elementParent);
    }

    public onAppElementParentChanged(element : AppElement) : void {
        if(this.attrs.element !== element) return;
        const depth = element.getDepth();
        this.getChildBySelector(".hierarchy-item-offset").setStyle({paddingLeft: `${depth * 12}px`});
    }

    public onRendered() {
        EditorRuntime.on(AppElementParentChanged, this);
    }

    public createInitialStructure(children : any) {
        const appElement = this.attrs.element;
        const depth = this.attrs.element.getDepth();
        const paddingLeft = "padding-left:" + (depth * 12) + "px";
        const visBinding = CreateBinding((appElement as any).children, "length");
        return [
            <HierarchyItemDropTarget insert="before"/>,
            <div class="hierarchy-item-offset" style={ paddingLeft }>
                <ToggleIcon x-id="toggle" x-bind-class={ { invisible: visBinding } }/>
                <div class="name-label"> {  Bind(appElement.name)  } </div>
            </div>,
            <HierarchyItemDropTarget insert="after"/>,
            <div x-child-root class="hierarchy-item-children">
                {children}
            </div>,
        ];

    }

}

createStyleSheet(`<style>

    .hierarchy-item-details.selected {
        background: #c8f8ff;
    }

    .hierarchy-item-offset.selected {
        color:white;
        background: #62b4ff;
    }
    
    .hierarchy-item-offset.hovered {
        background: #43ff5f;
    }
    
    .hierarchy-item-offset {
        display:flex;
        flex-direction: row;
    }
        
    .hierarchy-item-offset .name-label {
        flex:1;
        margin-right:2px;
        margin-left: 2px;
        padding-left:2px;
        padding-right:2px;
    }
    
    .hierarchy-item-offset .icon {
        color: black;
    }
    

`);