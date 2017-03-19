import {RuntimeEvent} from "./runtime_event";
import {Asset} from "../runtime/asset";

export class AssetCreated extends RuntimeEvent {

    public onAssetCreated(asset : Asset) : void {}

}

