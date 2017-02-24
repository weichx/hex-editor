import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {Asset} from "../../runtime/asset";
import {IconNameToggleRow} from "../../ui_elements/toggle_icon_label_row";

export class AssetSectionItem extends EditorHTMLElement<{asset: Asset}> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "asset-item" }
    }

    public getAsset() : Asset {
        return this.attrs.asset;
    }

    public createInitialStructure(children : JSXElement) : JSXElement {
        return [
            <IconNameToggleRow iconName="search" label="asset"/>
        ];
    }
}

createStyleSheet(`<style>
    
    .asset-item {

    }
    
    .asset-item-name {
    
    }
    
`);