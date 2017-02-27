import {setDefault} from "../../util";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {IconNameToggleRow} from "../../ui_elements/toggle_icon_label_row";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {DragAssetItemAction} from "../../editor/drag_actions/drag_asset_item_action";

interface IAssetFolder {
    name : string;
    isOpen? : boolean;
}

class AssetFolderNameRow extends IconNameToggleRow {

    @DragAction.MouseEnter(DragAssetItemAction)
    public dragEnter() : void {
        this.getDomNode().style.backgroundColor = "red";
    }

    @DragAction.MouseExit(DragAssetItemAction)
    public dragExit() : void {
        this.getDomNode().style.backgroundColor = null;
    }

}

export class AssetSection extends EditorHTMLElement<IAssetFolder> {

    public getDomData() : IDomData {
        return { tagName: "div", classList: "asset-folder" }
    }

    public createInitialStructure(children : JSXElement) : JSXElement {
        this.attrs.isOpen = setDefault(this.attrs.isOpen, true);
        const depth = 1;
        const padding = depth * 16;
        return [
            <AssetFolderNameRow toggleElementFn={() => this.getChildRoot()}
                                iconName="folder"
                                label="Label"/>,
            <div style={"padding-left: " + padding + "px"} x-child-root>{children}</div>
        ];
    }


}

createStyleSheet(`<style>
    
     .asset-folder {
        display:flex;
        flex-direction: column;
        width: 100%;
     }
     
 
         
`);