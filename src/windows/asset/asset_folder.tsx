import {ToggleIcon, FontIcon} from "../../ui_elements/icon";
import { HorizontalBase} from "../../ui_elements/horizontal";

interface IAssetFolder {
    asset: { name : string }
}

export class AssetSection extends HorizontalBase<IAssetFolder> {

    public getDomData() : IDomData {
        const parent = super.getDomData();
        parent.classList += " asset-folder";
        return parent;
    }

    public createInitialStructure(children : JSXElement) : JSXElement {
        return [
            <ToggleIcon/>,
            <FontIcon iconName="folder"/>,
            <div>
                {this.attrs.asset.name}
                <div x-child-root>{children}</div>
            </div>,
        ];
    }

    public onMouseDown() : void {
        alert("Down on a thing");
    }

}

createStyleSheet(`<style>
 
 .asset-folder > * { 
    padding-left: 0.3em;
 }
 
`);