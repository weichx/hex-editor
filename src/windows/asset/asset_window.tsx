import {EditorWindowElement} from "../../chrome/editor_window_element";
import {AssetSection} from "./asset_folder";
import {Vector2} from "../../runtime/vector2";
import {DragAssetItemAction} from "../../drag_actions/drag_asset_item_action";
import {AssetSectionItem} from "./asset_item";
import {EditorElement} from "../../editor_element/editor_element";
import {createElement} from "../../editor_element/element_renderer";

interface IAssetWindowAttrs {
    title : string;
}

interface IAssetManifest {
    id : number;
    name : string;
    type : string;
    data : any;
}

export class AssetWindow extends EditorWindowElement<IAssetWindowAttrs> {

    private mouse : Vector2 = new Vector2();

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "asset-window" }
    }

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

    private loadAsset(asset : IAssetManifest) : any {
        const data = asset.data;
        switch (asset.type) {
            case "folder":
                const attrs = { name: asset.name, isOpen: data.isOpen as boolean };
                const children : Array<EditorElement> = [];
                data.contents.forEach((asset : IAssetManifest) => {
                    const child = this.loadAsset(asset);
                    if(child) {
                        children.push(child);
                    }
                });
                return createElement(AssetSection, attrs, children);
            case "image":
                return createElement(AssetSectionItem, data);
            case "prefab":
                break;
        }
        return null;
    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        if (!input.isMouseInEditorElement(this)) {
            return;
        }

        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
            input.getMouseDownDelta(this.mouse);
            if (this.mouse.lengthSquared() > 64) {
                input.getMouseDownPosition(this.mouse);
                let hoverElement = EditorRuntime.getEditorElementAtPoint(this.mouse, AssetSectionItem);
                if (!hoverElement) {
                    return;
                }
                const action = new DragAssetItemAction(hoverElement.getAsset());
                EditorRuntime.beginDragAction(action);
            }
        }

    }

    public startDraggingAsset(e : MouseEvent) : any {
        alert("DOWN");
    }

    public createInitialStructure() : JSXElement {
        return [
            // <AssetSection asset={ {name: "Asset 1"}}>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            // </AssetSection>,
            // <AssetSection asset={ {name: "Asset 1"}}>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            // </AssetSection>,
            // <AssetSection asset={ {name: "Asset 1"}}>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            //     <AssetSectionItem name="Text"/>
            // </AssetSection>
        ]
    }

}

createStyleSheet(`
<style>
.asset-window {
    overflow:scroll;
    width: 100%;
    height: 100%;
    background: mediumaquamarine;
}
</style>`);