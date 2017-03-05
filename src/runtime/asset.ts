import {randomPositiveInteger} from "../util";
import {IAssetManifest} from "../windows/asset/asset_window";

export class Asset {

    public readonly id : number;
    private pathSegments : string[];

    constructor(assetDescription : IAssetManifest) {
        //todo -- use a better random or maybe a guid
        this.id = randomPositiveInteger();
        this.pathSegments = assetDescription.path.split("/");
    }

    public move(path : string) : void {
        const name = this.getName();
        this.pathSegments = path.split("/");
        this.pathSegments.push(name);
    }

    public setName(name : string) : string {
        name = name.replace(/\n/g, "");
        this.pathSegments[this.pathSegments.length - 1] = name;
        return name;
    }

    public getName() : string {
        return this.pathSegments[this.pathSegments.length - 1];
    }

    public getPath() : string {
        return this.pathSegments.join("/");
    }

    public getPathSegments() : string[] {
        return this.pathSegments.slice(0);
    }

    public getDepth() : number {
        return this.pathSegments.length - 1;
    }

}