import {EditorAssetItem} from "../windows/asset/asset_item";
import {FolderAsset} from "./folder_asset";
import {FontIcon} from "../ui_elements/icon";
import {DragAction} from "../editor/drag_actions/drag_action";

@DragAction.Inherit
export class FolderAssetItem extends EditorAssetItem<FolderAsset> {

    public getIconName() : string {
        return "folder-open-o";
    }

    public onRendered() : void {
        if (this.getChildRoot().getChildCount() === 0) {
            this.setIcon("folder-o");
        }
        else if(this.asset.isOpen) {
            this.setIcon("folder-open-o");
        }
        else {
            this.setIcon("folder-o");
        }
    }

    protected onChildAdded() : void {
        this.onRendered();
    }

    public toggle(isOpen : boolean) : void {
        super.toggle(isOpen);
        const iconName = isOpen ? "folder-open-o" : "folder-o";
        this.getChildBySelector('.asset-icon', FontIcon).setIcon(iconName);
    }

}

createStyleSheet(`<style>

         
`);