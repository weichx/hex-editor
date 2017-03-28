import {Button} from "../../ui_elements/button";
import {HierarchyItem} from "./hierarchy_item";
import {SelectionChanged} from "../../editor_events/evt_selection_changed";
import {SceneLoaded} from "../../editor_events/evt_scene_loaded_event";
import {AppElementCreated} from "../../editor_events/evt_app_element_created";
import {createElement} from "../../editor_element/element_renderer";
import {EditorWindowElement, IWindowAttrs} from "../../chrome/editor_window_element";
import {AppElement, Space} from "../../runtime/app_element";
import {Scene} from "../../runtime/scene";
import {AppElementParentChanged} from "../../editor_events/evt_app_element_parent_changed";
import {HierarchyItemDragAction} from "../../editor/drag_actions/drag_hierarchy_item";
import {Vector2} from "../../runtime/vector2";
import {onClick, onRightClick} from "../../editor_element/editor_element_annotations";
import {ToggleIcon} from "../../ui_elements/icon";
import {AppElementIndexChanged} from "../../editor_events/evt_app_element_index_changed";
import {RuntimeEvent} from "../../editor_events/runtime_event";
import {ScrollComponent} from "../../runtime/components/scroll_component";
import {SizingComponent} from "../../runtime/components/layout/sizing_component";
import {getCreationMenu} from "../../menu_setup";
import {Color} from "../../runtime/color";
import {BackgroundComponent} from "../../runtime/components/background_component";
import {PanelComponent} from "../../runtime/components/ui/panel_component";

export class HierarchyWindow extends EditorWindowElement<IWindowAttrs> {

    private mouse = new Vector2();
    private elementMap = new Map<AppElement, HierarchyItem>();
    private contextSelection : AppElement = null;

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

    public onAppElementParentChanged(appElement : AppElement, newParent : AppElement) : void {
        const targetItem = this.elementMap.get(appElement);
        const newParentItem = this.elementMap.get(newParent);
        newParentItem.getChildRoot().addChild(targetItem);
        EditorRuntime.select(appElement);
    }

    public onSelectionChanged(newSelection : AppElement, oldSelection : AppElement) : void {
        if (oldSelection) {
            const item = this.elementMap.get(oldSelection);
            if (item) {
                item.setSelected(false);
            }
        }
        if (newSelection) {
            const selectedItem = this.elementMap.get(newSelection);
            if (selectedItem) {
                selectedItem.setSelected(true);
            }
        }

    }

    @onClick
    private select() : AppElement {
        const input = EditorRuntime.getInput();
        input.getMousePosition(this.mouse);
        let mouseOver = EditorRuntime.getEditorElementAtPoint(this.mouse);
        if (!mouseOver || mouseOver.getAncestorByType(ToggleIcon, true)) return;

        let item = mouseOver.getAncestorByType(HierarchyItem, true);
        if (!item) {
            EditorRuntime.select(null);
            return null;
        }
        EditorRuntime.select(item.attrs.element);
        return item.attrs.element;
    }

    @onRightClick
    public showContextMenu() : void {
        this.contextSelection = this.select();
        this.createContextMenu();
    }

    public onUpdated() {
        const input = EditorRuntime.getInput();
        const inElement = input.isMouseInEditorElement(this);

        if (!inElement) {
            return;
        }

        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
            input.getMouseDownDelta(this.mouse);
            if (this.mouse.lengthSquared() > 64) {
                input.getMouseDownPosition(this.mouse);
                let dragElement = EditorRuntime.getEditorElementAtPoint(this.mouse, HierarchyItem);
                if (!dragElement) {
                    return;
                }
                EditorRuntime.beginDragAction(new HierarchyItemDragAction(dragElement))
            }
        }

    }

    public onRendered() {
        setTimeout(function() {
            let element = new AppElement("Panel");
            element.addComponent(PanelComponent);
            let bg = element.addComponent(BackgroundComponent);
            bg.color = Color.White;
            let size = element.addComponent(SizingComponent);
            size.width = 100;
            size.height = 100;
            element.setPositionValues(10, 10, Space.Local);
            EditorRuntime.select(element);
            let element2 = new AppElement("Panel Child");
            element2.addComponent(PanelComponent);
            bg = element2.addComponent(BackgroundComponent);
            bg.color = Color.Blue;
            size = element2.addComponent(SizingComponent);
            size.width = 100;
            size.height = 100;
            element2.setParent(element);
            element2.setPositionValues(100, 100, Space.Local);
        }, 500);
        EditorRuntime.on(SelectionChanged, this);
        EditorRuntime.on(SceneLoaded, this);

        EditorRuntime.on(AppElementCreated, this);
        EditorRuntime.on(AppElementIndexChanged, this);
        // EditorRuntime.on(AppElementDestroyed, this);

        EditorRuntime.on(AppElementParentChanged, this);
        EditorRuntime.updateTree.add(this);
        this.onSceneLoaded(EditorRuntime.getScene());
    }

    @RuntimeEvent.on(AppElementCreated)
    public onAppElementCreated(appElement : AppElement) : void {
        const item = this.createHierarchyItem(appElement);
        const parentItem = this.elementMap.get(appElement.getParent()) || this;
        parentItem.getChildRoot().addChild(item);
    }

    public onAppElementIndexChanged(appElement : AppElement, newIndex : number) : void {
        const item = this.elementMap.get(appElement);
        item.parent.getChildRoot().insertChild(item, newIndex);
    }

    public onSceneLoaded(scene : Scene) : void {
        // const root = AppElement.Root;
        // const rootItem = this.createHierarchyItem(root);
        // this.getChildRoot().addChild(rootItem);
    }

    private destroyContextSelection() {
        const hierarchyItem = this.elementMap.get(this.contextSelection);
        if (!hierarchyItem) return;
        if (EditorRuntime.getSelection() === this.contextSelection) {
            EditorRuntime.select(null);
        }
        hierarchyItem.destroy();
        this.contextSelection.destroy();
        this.contextSelection = null;
    }

    private createNewElement() : void {
        new AppElement("Element", EditorRuntime.getSelection());
    }

    private createScrollElement() : void {
        const element = new AppElement("Scroll Container");
        element.addComponent(ScrollComponent);
        const sizing = element.addComponent(SizingComponent);
        // sizing.stretchBehavior = StretchBehavior.FillParent;
    }

    public createInitialStructure(children : Array<HTMLElement>) {
        return [
            <div class="hierarchy-top-bar">
                <Button onClick={ this.createNewElement }>Create</Button>
            </div>,
            <div x-child-root class="hierarchy-main-body"/>
        ]
    }

    private createContextMenu() : any {
        EditorRuntime.getInput().getMousePosition(this.mouse);
        const menu = new nw.Menu();

        menu.append(new nw.MenuItem({ label: "Create Empty", click: () => this.createNewElement() }));
        menu.append(new nw.MenuItem({ label: "Create", submenu: getCreationMenu(this.contextSelection) }));
        menu.append(new nw.MenuItem({ label: "Destroy", click: () => this.destroyContextSelection() }));

        menu.popup(this.mouse.x, this.mouse.y);
    }
}

createStyleSheet(`
<style>


.hierarchy-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}


</style>
`);