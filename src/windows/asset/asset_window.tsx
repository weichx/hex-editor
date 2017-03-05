import {EditorWindowElement} from "../../chrome/editor_window_element";
import {Vector2} from "../../runtime/vector2";
import {EditorAssetItem} from "./asset_item";
import {EditorElement} from "../../editor_element/editor_element";
import {createElement} from "../../editor_element/element_renderer";
import {PrefabAssetItem} from "../../asset_types/prefab_asset_item";
import {PrefabTemplate} from "../../asset_types/prefab_template";
import {onRightClick, onMouseDown} from "../../editor_element/editor_element_annotations";
import {EditorContextMenu} from "../../chrome/context_menu";
import {WindowColors} from "../../editor/editor_theme";
import {FolderAssetItem} from "../../asset_types/folder_asset_item";
import {FolderAsset} from "../../asset_types/folder_asset";
import {ToggleIcon} from "../../ui_elements/icon";

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
    }

    public loadAssets() : void {
        const manifest = require("../../_data/assets");
        manifest.forEach((data : any) => {
            this.getChildRoot().addChild(this.loadAsset(data));
        });
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
                    asset: new FolderAsset(assetDescription)
                }, ...children);
            case "image":
                return null;//createElement(AssetSectionItem, data);
            case "prefab":
                return createElement(PrefabAssetItem, {
                    asset: new PrefabTemplate(assetDescription)
                }, ...children);
        }
        return null;
    }

    @onMouseDown
    public select() : void {
        const input = EditorRuntime.getInput();
        input.getMousePosition(this.mouse);
        const mouseOver = EditorRuntime.getEditorElementAtPoint(this.mouse);
        if(mouseOver.getAncestorByType(ToggleIcon, true)) return;
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
        EditorRuntime.showContextMenu(this.createContextMenu());
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

    private createFolder() : void {
        let parent : EditorElement = this;
        if(this.selectedItem) {
            parent = this.selectedItem.getAncestorByType(FolderAssetItem, true) || this;
        }
        const path = (parent instanceof EditorAssetItem) ? parent.getPath() + "/" : "";
        const asset = new FolderAsset({ path: path + "New Folder" });
        const folder = createElement(FolderAssetItem, { asset });
        parent.getChildRoot().addChild(folder);
    }

    private renameAssetItem() : void {
        const target = this.selectedItem.getAncestorByType(EditorAssetItem, true);
        if (!target) return;
        target.beginRename();
    }

    private createContextMenu() : any {
        return createElement(EditorContextMenu, {
            options: [
                {
                    name: "Create Folder",
                    icon: "folder-o",
                    action: () => this.createFolder(),
                },
                {
                    name: "Rename",
                    icon: "i-cursor",
                    action: () => { this.renameAssetItem() }
                },
                {
                    name: "Delete",
                    icon: "remove",
                    action: () => {}
                }
            ]
        });
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