import {PrefabTemplate} from "../../prefab_template";
import {AssetSectionItem} from "./asset_item";
import {DragAction} from "../../editor/drag_actions/drag_action";
import {PrefabDragAction} from "../../editor/drag_actions/prefab_drag_action";

interface IPrefabAttrs {
    asset : PrefabTemplate
}

export class PrefabAssetItem extends AssetSectionItem<IPrefabAttrs> {

    public createDragAction() : DragAction {
        return new PrefabDragAction(this.attrs.asset);
    }

    public createInitialStructure(children : JSXElement) : JSXElement {
        return [
            <span>{this.attrs.asset.name}</span>
        ];
    }

}