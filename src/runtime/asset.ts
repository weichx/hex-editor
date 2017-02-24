import {randomPositiveInteger} from "../util";

//todo this might not belong here
export class Asset {

    public readonly id : number;
    private pathSegments : string[];
    private path : string;

    constructor(path : string) {
        //todo -- use a better random or maybe a guid
        this.id = randomPositiveInteger();
        this.path = path;
        this.pathSegments = path.split("/");
    }

    public getName() : string {
        return this.pathSegments[this.pathSegments.length - 1];
    }



}