import {randomPositiveInteger} from "../util";

export enum AssetType {
    Image, Prefab, JSON
}

//todo this might not belong here
export class Asset {

    public readonly id : number;
    public readonly type : AssetType;
    private pathSegments : string[];
    private path : string;

    constructor(path : string, type : AssetType) {
        //todo -- use a better random or maybe a guid
        this.id = randomPositiveInteger();
        this.type = type;
        this.path = path;
        this.pathSegments = path.split("/");
    }

    public getName() : string {
        return this.pathSegments[this.pathSegments.length - 1];
    }

    public isPrefab() : boolean {
        return this.type === AssetType.Prefab;
    }

}