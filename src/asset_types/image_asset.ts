import {Asset} from "../runtime/asset";

function AssetExtension(str : string|string[]) : any {}

@AssetExtension([".jpg", ".png", "svg"])
export class ImageAsset extends Asset {



}
