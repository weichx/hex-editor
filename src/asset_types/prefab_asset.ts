import {AppElement} from "../runtime/app_element";
import {Asset} from "../runtime/asset";

export class PrefabAsset extends Asset {

    constructor(filePath : string) {
        super(filePath);
    }

    public create() : AppElement {
        return  new AppElement(this.getName());
    }

    public static createFromAppElement(appElement : AppElement) : PrefabAsset {
        return null;
    }

}