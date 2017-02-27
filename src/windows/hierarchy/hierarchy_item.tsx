import {ToggleIcon} from "../../ui_elements/icon";
import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {HierarchyWindow} from "./hierarchy_window";
import {AppElement} from "../../runtime/app_element";
import {HierarchyInsertTarget} from "./hierarchy_insert_target";

interface IHierarchyItem {
    element : AppElement;
}

export class HierarchyItem extends EditorCustomElement<IHierarchyItem> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "hierarchy-item" }
    }

    public setSelected(isSelected : boolean) : void {
        const node = this.getChildById("item-details");
        node.getDomNode().classList.toggle("selected", isSelected);
    }

    public onDestroyed() {
        this.attrs.element = null;
    }

    private showCreateMenu(e : MouseEvent) {
        const hierarchy = this.getAncestorByType(HierarchyWindow);
        hierarchy.showContextMenu(this.attrs.element, e.pageX, e.pageY);
    }

    private mouseEnterDetails() : void {
        if (this.getAncestorByType(HierarchyWindow).isDragging()) {
            this.getChildById("item-details").getDomNode().style.background = "blue";
        }
    }

    private mouseExitDetails() : void {
        this.getChildById("item-details").getDomNode().style.background = null;
    }

    public createInitialStructure(children : any) {
        const appElement = this.attrs.element;
        let padding = (appElement.getDepth() + 1);

        return [
            <div x-id="item-details"
                 class="hierarchy-item-details"
                 style={"padding-left:" + padding + "em"}
                 onMouseEnter={ this.mouseEnterDetails }
                 onMouseExit={ this.mouseExitDetails }
                 onClick={ () => EditorRuntime.select(appElement) }
                 onRightClick={ this.showCreateMenu }>

                <ToggleIcon class="hierarchy-toggle" x-hidden x-if-eval={ () => appElement.getChildCount() > 0 }/>

                <a> { Bind(appElement.name) } </a>
            </div>,
            <HierarchyInsertTarget/>,
            <div x-child-root class="item-children"></div>
        ]
    }

}

createStyleSheet(`<style>

.hierarchy-toggle {
    font-size: 0.7em;
    position: absolute;
    left: 0.2em;
    top: 4px;
}    
    
.hierarchy-item-details {
    position: relative;
}

.item-insert-space {
    position: absolute;
    height: 0.2em;
    width: 100%;
}

.hierarchy-item-details.selected {
    background: #c8f8ff;
}


`);