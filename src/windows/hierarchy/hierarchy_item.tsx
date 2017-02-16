import {ToggleIcon} from "../../ui_elements/icon";
import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {HierarchyWindow} from "./hierarchy_window";


interface IHierarchyItem {
    element : AppElement;
}

export class HierarchyItem extends EditorCustomElement<IHierarchyItem> {

    public setSelected(isSelected : boolean) : void {
        const node = this.getChildById("item-details");
        if (isSelected) {
            node.getDomNode().classList.add('selected');
        }
        else {
            node.getDomNode().classList.remove('selected');
        }
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

    private mouseEnterSpace() : void {
        if (this.getAncestorByType(HierarchyWindow).isDragging()) {
            this.getChildById("spacer").getDomNode().style.background = "blue";
        }
    }

    private mouseExitSpace() : void {
        this.getChildById("spacer").getDomNode().style.background = null;
    }

    public createInitialStructure(children : any) {
        const appElement = this.attrs.element;
        let padding = (appElement.getDepth() * 12);
        if (appElement.getParent() !== AppElement.Root) {
            padding += 12;
        }

        return <div class="item-structure">

            <div x-id="item-details"
                 class="item-details"
                 style={"padding-left:" + padding + "px"}
                 x-bind-style={
                     { paddingLeft: () => "" }
                 }
                 onMouseEnter={ this.mouseEnterDetails }
                 onMouseExit={ this.mouseExitDetails }
                 onClick={ () => EditorRuntime.select(appElement) }
                 onRightClick={ this.showCreateMenu }>

                <ToggleIcon x-hidden x-if-eval={ () => appElement.getChildCount() > 0 }/>
                <a>({appElement.name})</a>
            </div>

            <div x-id="spacer"
                 class="item-insert-space"
                 onMouseEnter={this.mouseEnterSpace}
                 onMouseExit={this.mouseExitSpace}/>

            <div x-child-root class="item-children"></div>
        </div>
    }

}

