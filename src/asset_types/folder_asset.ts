import {Asset} from "../runtime/asset";
import {IAssetManifest} from "../windows/asset/asset_window";

export class FolderAsset extends Asset {

    public isOpen : boolean;

    constructor(assetDefinition : IAssetManifest) {
        super(assetDefinition);
        const data = assetDefinition.data;
        this.isOpen = data ? data.isOpen : true;
    }

}