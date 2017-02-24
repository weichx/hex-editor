import {EditorWindowElement} from "../../chrome/editor_window_element";
import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {AssetSection} from "./asset_folder";
import {Vector2} from "../../runtime/vector2";
import {DragAssetItemAction} from "../../drag_actions/drag_asset_item_action";

interface IAssetWindowAttrs {
    title : string;
}

class AssetSectionItem extends EditorCustomElement<{name: string}> {

    public onRendered() : void {

    }

    public createInitialStructure(children : JSXElement) : JSXElement {
        return [
            <span>{this.attrs.name}</span>
        ];
    }
}

var assetManifest = {
    "Asset Type 1": [
        {
            type: "folder",
            contents: [
                "item 1",
                "item 2"
            ]
        },
        {
            type: "folder",
            contents: [
                "thing 1",
                "thing 2"
            ]
        },
        {
            type: "Asset",
            data: {

            }
        }
    ],
    "Asset 2": {

    }
};

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

    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        if(!input.isMouseInEditorElement(this)) {
            return;
        }

        if(!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
            input.getMouseDownDelta(this.mouse);
            if(this.mouse.lengthSquared() > 64) {
                input.getMouseDownPosition(this.mouse);
                let hoverElement = EditorRuntime.getEditorElementAtPoint(this.mouse);
                if(!hoverElement) {
                    return;
                }
                if(!(hoverElement instanceof AssetSectionItem)) {
                    hoverElement = hoverElement.getAncestorByType(AssetSectionItem);
                }
                if(!(hoverElement instanceof AssetSectionItem)) {
                    return;
                }

                const action = new DragAssetItemAction(hoverElement);
                EditorRuntime.beginDragAction(action);

            }
        }

    }

    public startDraggingAsset(e : MouseEvent) : any {
        alert("DOWN");
    }

    public createInitialStructure() : JSXElement {
        return [
            <AssetSection asset={ {name: "Asset 1"}}>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
            </AssetSection>,
            <AssetSection asset={ {name: "Asset 1"}}>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
            </AssetSection>,
            <AssetSection asset={ {name: "Asset 1"}}>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
                <AssetSectionItem name="Text"/>
            </AssetSection>
        ]
    }

}

createStyleSheet(`
<style>
.asset-window {
    width: 100%;
    height: 100%;
    background: mediumaquamarine;
}
</style>`);