import {Button} from "../../ui_elements/button";
import {HierarchyItem} from "./hierarchy_item";
import {SelectionChanged} from "../../editor_events/evt_selection_changed";
import {SceneLoaded} from "../../editor_events/evt_scene_loaded_event";
import {AppElementCreated} from "../../editor_events/evt_app_element_created";
import {createElement, render} from "../../editor_element/element_renderer";
import {EditorWindowElement, IWindowAttrs} from "../../chrome/editor_window_element";
import {WindowColors} from "../../editor_theme";
import {EditorElement} from "../../editor_element/editor_element";
import {AppElement} from "../../runtime/app_element";
import {MouseButtonState} from "../../runtime/enums/e_mouse_state";
import {Scene} from "../../runtime/scene";

export class HierarchyWindow extends EditorWindowElement<IWindowAttrs> {

    private elementMap : any = new Map<AppElement, HierarchyItem>();
    private contextSelection : AppElement = null;
    private contextMenu : EditorElement = null;
    private dragElement : EditorElement = null;

    public getDomData() : IDomData {
        return {tagName: "div", classList: "hierarchy-window-root" }
    }

    private createHierarchyItem(element : AppElement) : HierarchyItem {
        const item = createElement(HierarchyItem, { element: element });
        this.elementMap.set(element, item);
        const childCount = element.getChildCount();
        for (let i = 0; i < childCount; i++) {
            const appElement = element.getChildAt(i);
            const childItem = this.createHierarchyItem(appElement);
            item.getChildRoot().addChild(childItem);
        }
        return item;
    }

    private getHierarchyItemForElement(element : AppElement) : HierarchyItem {
        return this.elementMap.get(element);
    }

    public onSelectionChanged(newSelection : AppElement, oldSelection : AppElement) : void {
        if (oldSelection) {
            const item = this.getHierarchyItemForElement(oldSelection);
            if (item) {
                item.setSelected(false);
            }
        }
        if (newSelection) {
            const selectedItem = this.getHierarchyItemForElement(newSelection);
            if (selectedItem) {
                selectedItem.setSelected(true);
            }
        }

    }

    public showContextMenu(item : AppElement, x : number, y : number) : void {
        this.contextSelection = item;
        this.contextMenu.setPosition(x, y);
        this.contextMenu.setVisible(true);
    }

    public onUpdated() {
        const input = EditorRuntime.getInput();
        if (this.dragElement) {
            const mouse = input.getMousePosition();
            if (input.isMouseUp()) {

                const dropElement = EditorRuntime.getEditorElementAtPoint(mouse);
                if (!dropElement) {
                    this.dragElement = null;
                    return;
                }

                const item = dropElement.getFirstOfTypeUpwards(HierarchyItem);

                if (!item || item === this.dragElement) {
                    this.dragElement = null;
                    return;
                }

                if (this.dragElement.isElementInHierarchy(item.getDomNode())) {
                    this.dragElement = null;
                    return;
                }

                const spacer = dropElement.hasXId("spacer");
                if (spacer) {
                    //insert child here if not in hierarchy
                    const idx = item.parent.getChildIndex(item);
                    //item.parent.insertChild(this.dragElement, idx);
                }
                else {
                    item.addChild(this.dragElement);
                }

                this.dragElement = null;
                return;
            }
        }
        else if (this.contextMenu.isVisible()) {
            if (EditorRuntime.getInput().isMouseButtonDown(MouseButtonState.Left)) {
                //if click outside context menu, hide it
                const mp = EditorRuntime.getInput().getMousePosition();
                const el = document.elementFromPoint(mp.x, mp.y);
                if (!this.contextMenu.isElementInHierarchy(el)) {
                    this.contextMenu.setVisible(false);
                }
            }
        }
        else if (input.isMouseInEditorElement(this) && input.isMouseDown()) {
            const mouse = input.getMousePosition();
            const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse) as EditorElement;
            if (!hoverElement) return;
            this.dragElement = hoverElement.getFirstOfTypeUpwards(HierarchyItem);
        }
    }

    public onRendered() {
        render(this.contextMenu, document.getElementById("root"));
        EditorRuntime.on(SelectionChanged, this);
        EditorRuntime.on(SceneLoaded, this);

        EditorRuntime.on(AppElementCreated, this);
        // EditorRuntime.on(AppElementDestroyed, this);
        // EditorRuntime.on(AppElementReparented, this);
        EditorRuntime.updateTree.add(this);
        this.onSceneLoaded(EditorRuntime.getScene());
    }

    public onAppElementCreated(appElement : AppElement) : void {
        const item = this.createHierarchyItem(appElement);
        if (appElement.getParent().isRoot()) {
            this.addChild(item);
        }
        else {
            const parentItem = this.elementMap.get(appElement.getParent());
            parentItem.addChild(item);
        }
    }

    public onSceneLoaded(scene : Scene) : void {
        const root = AppElement.Root;
        const rootItem = this.createHierarchyItem(root);
        // const roots = scene.getRootElements();
        // for (let i = 0; i < roots.length; i++) {
        //     rootItem.addChild(this.createHierarchyItem(roots[i]));
        // }
        this.addChild(rootItem);
    }

    public isDragging() : boolean {
        return Boolean(this.dragElement);
    }

    private clearSelection() {
        EditorRuntime.select(null);
    }

    private addChildToContextSelection() {
        const appElement = new AppElement("Child Element");
        appElement.setParent(this.contextSelection);
        const item = this.createHierarchyItem(appElement);
        const itemParent = this.getHierarchyItemForElement(this.contextSelection);
        itemParent.addChild(item);
        this.contextMenu.setVisible(false);
    }

    private destroyContextSelection() {
        const hierarchyItem = this.getHierarchyItemForElement(this.contextSelection);
        if (EditorRuntime.getSelection() === this.contextSelection) {
            EditorRuntime.select(null);
        }
        hierarchyItem.destroy();
        this.contextSelection.destroy();
        this.contextSelection = null;
        this.contextMenu.setVisible(false);
    }

    private createNewElement() : void {
        const selection = EditorRuntime.getSelection();
        let appElement : AppElement = null;
        if (selection) {
            appElement = new AppElement("Element", selection);
        }
        else {
            appElement = new AppElement("Element");
        }
    }

    public createInitialStructure(children : Array<HTMLElement>) {
        this.contextMenu = this.createContextMenu() as any;
        return [
            <div class="hierarchy-top-bar">
                <Button class="btn btn-xs btn-info" onClick={ this.createNewElement }>Create</Button>
            </div>,
            <div x-child-root class="hierarchy-main-body" onClick={ this.clearSelection }/>
        ]
    }

    private createContextMenu() : any {
        return <div x-id="ctx-menu" x-hidden class="hierarchy-ctx-menu-container">
            <ul class="hierarchy-ctx-menu">
                <li class="ctx-menu-item" onClick={this.addChildToContextSelection}>
                    <a>Add Child</a>
                </li>
                <li class="ctx-menu-item" onClick={this.destroyContextSelection}>
                    <a>Delete</a>
                </li>
            </ul>
        </div>
    }
}

createStyleSheet(`
<style>


.hierarchy-ctx-menu-container {
    position: absolute;
    z-index: 100;
    min-width: 200px;
    background: burlywood;
    display: flex;
    flex-direction: column;
    color: black;
}

.ctx-menu-item {
    cursor: pointer;
}

.hierarchy-ctx-menu {
    width: 100%;
    background: white;
    padding-left: 1em;
    list-style: none;
    margin:0;
    
}

.hierarchy-window-root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.hierarchy-main-body {
    background: ${WindowColors.foregroundGrey};
    color: black;
    width:100%;
}

</style>
`);