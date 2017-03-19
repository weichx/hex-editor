import {EditorWindowElement} from "../../chrome/editor_window_element";
import {Vector2} from "../../runtime/vector2";
import {EditorAssetItem} from "./asset_item";
import {EditorElement} from "../../editor_element/editor_element";
import {createElement} from "../../editor_element/element_renderer";
import {PrefabAssetItem} from "../../asset_items/prefab_asset_item";
import {onRightClick, onMouseDown, onFileDrop} from "../../editor_element/editor_element_annotations";
import {WindowColors} from "../../editor/editor_theme";
import {FolderAssetItem} from "../../asset_items/folder_asset_item";
import {FolderAsset} from "../../asset_types/folder_asset";
import {ToggleIcon} from "../../ui_elements/icon";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {HierarchyItemDragAction} from "../../editor/drag_actions/drag_hierarchy_item";
import {Asset} from "../../runtime/asset";
import {AssetCreated} from "../../editor_events/evt_asset_created";
import {ImageAssetItem} from "../../asset_items/image_asset_item";

interface IAssetWindowAttrs {
    title : string;
}

export interface IAssetManifest {
    id? : number;
    data? : any;
    name? : string;
    type? : string;
    path : string;
    children? : IAssetManifest[],
}

export class AssetWindow extends EditorWindowElement<IAssetWindowAttrs> {

    private mouse : Vector2 = new Vector2();
    private selectedItem : EditorAssetItem<any> = null;

    public onRendered() : void {
        this.loadAssets();
        EditorRuntime.updateTree.add(this);
        EditorRuntime.on(AssetCreated, this);
    }

    public loadAssets() : void {
        // const manifest = require("../../_data/assets");
        // manifest.forEach((data : any) => {
        //     this.getChildRoot().addChild(this.loadAsset(data));
        // });
    }

    private loadAsset(assetDescription : IAssetManifest, path = "") : any {
        const name = assetDescription.name;
        assetDescription.path = (path !== "") ? path + "/" + name : name;

        const children = assetDescription.children.map((child : IAssetManifest) => {
            return this.loadAsset(child, assetDescription.path);
        });

        switch (assetDescription.type) {
            case "folder":
                return createElement(FolderAssetItem, {
                    asset: null//new FolderAsset(assetDescription)
                }, ...children);
            case "image":
                return null;//createElement(AssetSectionItem, data);
            case "prefab":
                return createElement(PrefabAssetItem, {
                    asset: null//new PrefabTemplate(assetDescription)
                }, ...children);
        }
        return null;
    }

    @onMouseDown
    public select() : void {
        const input = EditorRuntime.getInput();
        input.getMousePosition(this.mouse);
        const mouseOver = EditorRuntime.getEditorElementAtPoint(this.mouse);
        if (mouseOver.getAncestorByType(ToggleIcon, true)) return;
        if (this.selectedItem) {
            this.selectedItem.deselect();
        }
        this.selectedItem = mouseOver.getAncestorByType(EditorAssetItem, true);
        if (this.selectedItem) {
            this.selectedItem.select();
        }
    }

    @onRightClick
    public showContextMenu() : void {
        this.select();
        this.createContextMenu();
    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        const inElement = input.isMouseInEditorElement(this);

        if (!inElement) {
            return;
        }

        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
            input.getMouseDownDelta(this.mouse);
            if (this.mouse.lengthSquared() > 64) {
                input.getMouseDownPosition(this.mouse);
                let hoverElement = EditorRuntime.getEditorElementAtPoint(this.mouse, EditorAssetItem);
                if (!hoverElement) {
                    return;
                }
                EditorRuntime.beginDragAction(hoverElement.createDragAction());
            }
        }

    }

    private async createFolder() : Promise<void> {
        let path = System.AssetRoot;
        let parent : FolderAssetItem = null;
        if (this.selectedItem) {
            parent = this.selectedItem.getAncestorByType(FolderAssetItem, true);
            if(parent) path += parent.getPath() + "/";
        }
        path = FileSystem.createUniqueFilePath(path + "New Folder");
        alert(path);
        const asset = new FolderAsset(path);
        await FileSystem.createDirectory(path);

        const folder = createElement(FolderAssetItem, { asset: new FolderAsset(path) });
        (parent || this).getChildRoot().addChild(folder);
    }

    @DragAction.MouseEnter(HierarchyItemDragAction)
    public onHierarchyDragEnter() {
        this.htmlNode.style.backgroundColor = "red";
    }

    @DragAction.MouseExit(HierarchyItemDragAction)
    public onHierarchyDragExit() {
        this.htmlNode.style.backgroundColor = null;
    }

    @DragAction.Drop(HierarchyItemDragAction)
    public onHierarchyDrop(action : HierarchyItemDragAction) {
        //const prefab = PrefabTemplate.createFromAppElement(action.appElement);
        //this.getChildRoot().addChild(createElement(PrefabAssetItem, { asset: prefab }));
    }

    @onFileDrop
    private handleFileDrop(event : DragEvent) {
        const project = EditorRuntime.getProject();
        const files = event.dataTransfer.files;
        const fn = Array.prototype.map;
        project.importAll(fn.call(files, function (file : File) {
            return file.path;
        }));
    }

    public onAssetCreated(asset : Asset) {
        //create corresponding asset item at correct hierarchy point
        const segments = asset.getPathSegments();
        let ptr = this.getChildRoot();
        let path = "";
        for (let i = 0; i < segments.length - 1; i++) {
            path += segments[i] + "/";
            const next = this.getFolderByName(ptr, segments[i]);
            if (!next) {
                ptr.addChild(createElement(FolderAssetItem, { asset: new FolderAsset(path) }));
            }
            ptr = ptr.getChildRoot();
        }
        this.getChildRoot().addChild(this.createItemType(asset));
    }

    private getFolderByName(target : EditorElement, name : string) : any {
        const folders = target.getChildrenByType(FolderAssetItem);
        for (let i = 0; i < folders.length; i++) {
            // if(folders[i].getName() === name) {
            //     return folders[i];
            // }
        }
        return null;
    }

    public onFolderCreated(folder : FolderAsset) {

    }

    private createItemType(asset : Asset) : EditorAssetItem<Asset> {
        switch (asset.getExtension()) {
            case "png":
                return createElement(ImageAssetItem, { asset });
        }
        return null;
    }

    private onAssetMoved() {

    }

    private renameAssetItem() : void {
        const target = this.selectedItem.getAncestorByType(EditorAssetItem, true);
        if (!target) return;
        target.beginRename();
    }

    private async createScript() : Promise<void> {
       //EditorRuntime.getProject().createAsset("Script");
    }

    private createContextMenu() : void {
        EditorRuntime.getInput().getMousePosition(this.mouse);
        const menu = new nw.Menu();
        menu.append(new nw.MenuItem({ label: "Create Folder", click: () => this.createFolder() }));
        menu.append(new nw.MenuItem({ label: "Create Script", click: () => this.createScript() }));
        menu.append(new nw.MenuItem({ label: "Rename", click: () => this.renameAssetItem() }));
        menu.popup(this.mouse.x, this.mouse.y);
    }

}

createStyleSheet(`
<style>

.asset-window {
    overflow:scroll;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 4px;
    padding-bottom: 4px;
    background: ${WindowColors.backgroundGrey};
}

</style>`);