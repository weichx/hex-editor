import {RuntimeEvent} from "./runtime_event";
import {Asset} from "../runtime/asset";

export class AssetImported extends RuntimeEvent {

    public onAssetImported(asset : Asset) : void {}

}

