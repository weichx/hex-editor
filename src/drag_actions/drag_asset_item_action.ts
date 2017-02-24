import {DragAction} from "./drag_action";

export class DragAssetItemAction extends DragAction {

    private asset : any;

    constructor(asset : any) {
        super();
        this.asset = asset;
    }

}