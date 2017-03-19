import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {AssetWindow} from "./asset_window";
import {FontIcon, ToggleIcon} from "../../ui_elements/icon";
import {TextSelection} from "../../text_selection";
import {Asset} from "../../runtime/asset";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {AssetDragAction} from "../../editor/drag_actions/asset_drag_action";

class AssetItemDropTarget extends EditorHTMLElement<{ insert : "before"|"after" }> {

    private target : EditorAssetItem<any>;

    public onMounted() {
        this.target = this.parent as EditorAssetItem<any>;
    }

    @DragAction.MouseEnter(AssetDragAction)
    public onDragEnter(action : AssetDragAction) : void {
        if(this.target.canNestAsset(action.asset)) {
            this.addClass("hover")
        }
    }

    @DragAction.MouseExit(AssetDragAction)
    public onDragExit() : void {
        this.removeClass("hover")
    }

    //@DragAction.Drop(AssetDragAction)
    public onDrop(action : AssetDragAction) : void {
        const grandParent = this.target.getAncestorByType(EditorAssetItem);

        if (!grandParent || !grandParent.canNestAsset(action.asset)) {
            return;
        }

        let idx = grandParent.getChildRoot().getChildIndex(this.target);
        if (this.attrs.insert === "after") idx++;

        grandParent.getChildRoot().insertChild(action.item, idx);

    }

    public createInitialStructure() : JSXElement {
        return <div class="hover-target-display"/>
    }
}

export class EditorAssetItem<T extends Asset> extends EditorHTMLElement<{ asset : T }> {

    protected asset : T;
    protected iconName : string;
    protected assetWindow : AssetWindow;

    public onCreated() : void {
        this.asset = this.attrs.asset;
        this.assetWindow = this.getAncestorByType(AssetWindow);
    }

    public setIconName(iconName : string) : void {
        this.iconName = iconName;
    }

    public canNestAsset(asset : Asset) : boolean {
        return true;
    }

    public createDragAction() : DragAction {
        return new AssetDragAction(this.asset, this);
    }

    public getIconName() : string {
        return this.iconName;
    }

    public beginRename() : void {
        const label = this.getChildBySelector(".name-label").getDomNode();
        TextSelection.makeEditable(label, (text : string) => {
            return this.asset.setName(text);
        }, true);
    }

    public select() : void {
        this.getChildBySelector('.asset-item-offset').addClass("selected");
    }

    public deselect() : void {
        this.getChildBySelector('.asset-item-offset').removeClass("selected");
    }

    public getPath() : string {
        return this.asset.getPath();
    }

    @DragAction.MouseEnter(AssetDragAction)
    protected onAssetDragEnter(action : AssetDragAction) : void {
        if(this.canNestAsset(action.asset)) {
            this.getChildBySelector('.asset-item-offset').addClass("hovered");
        }
    }

    @DragAction.MouseExit(AssetDragAction)
    protected onAssetDragExit() : void {
        this.getChildBySelector('.asset-item-offset').removeClass("hovered");
    }

    @DragAction.Drop(AssetDragAction)
    protected onAssetDrop(action : AssetDragAction) : void {
        if(!this.canNestAsset(action.asset)) return;
        this.getChildRoot().addChild(action.item);
        action.asset.move(this.asset.getPath());
        //todo check for unique names
    }

    public onParentChanged() : void {
        const parent = this.getAncestorByType(EditorAssetItem);
        parent.showToggleIcon(parent.getChildRoot().children.length > 0);
        parent.asset.addChild(this.asset);
        this.getChildBySelector(".asset-item-offset").setStyle({
            paddingLeft: (this.asset.getDepth() * 12) + "px"
        });
        parent.onChildAdded(this);
    }

    protected onChildAdded(item : EditorAssetItem<any>) : void {}

    protected showToggleIcon(shouldShow : boolean ) : void {
        this.getChildById("toggle").getDomNode().classList.toggle("invisible", !shouldShow);
    }

    protected setIcon(iconName : string) : void {
        this.getChildBySelector('.asset-icon', FontIcon).setIcon(iconName);
    }

    public createInitialStructure(children : JSXElement[]) : JSXElement {
        const depth = this.asset.getDepth();
        const paddingLeft = "padding-left:" + (depth * 12) + "px";
        return [
            <AssetItemDropTarget insert="before"/>,
            <div class="asset-item-offset" style={paddingLeft}>
                <ToggleIcon x-id="toggle" x-visible={ children.length > 0 } onToggle={ (isOpen : boolean) => this.toggle(isOpen) }/>
                <FontIcon class="asset-icon" iconName={ this.getIconName() }/>
                <div class="name-label"> { this.asset.getName() } </div>
            </div>,
            <AssetItemDropTarget insert="after"/>,
            <div x-child-root class="asset-item-children">
                {children}
            </div>,
        ]
    }

    public toggle(isOpen : boolean) : void {
        this.getChildRoot().setVisible(isOpen);
    }

}

createStyleSheet(`<style>
    
    .asset-item-drop-target {
        position:relative;
    }
    
    .asset-item-drop-target .hover-target-display {
        position: absolute;
        top: -2px;
        left: 0;
        height: 4px;
        width: 100%;
    }
    
    .asset-item-drop-target.hover .hover-target-display {
        background: aliceblue;
    }
    
    .asset-item-offset.selected {
        color:white;
        background: #62b4ff;
    }
    
    .asset-item-offset.hovered {
        background: #43ff5f;
    }
    
    .asset-item-offset {
        display:flex;
        flex-direction: row;
    }
        
    .asset-item-offset .name-label {
        flex:1;
        margin-right:2px;
        margin-left: 2px;
        padding-left:2px;
        padding-right:2px;
    }
    
    .asset-item-offset .icon {
        color: black;
    }
    
    .asset-item-offset [contenteditable] {
        outline: 1px solid black;
    }
    
`);