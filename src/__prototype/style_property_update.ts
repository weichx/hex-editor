import {IPoolable2} from "../object_pool";

export class StylePropertyUpdate implements IPoolable2<string, string>{

    public propertyName : string;
    public value : string;

    constructor() {
        this.propertyName = "";
        this.value = "";
    }

    public onSpawn(propertyName : string, value : string) {
        this.propertyName = propertyName;
        this.value = value;
    }

    public onDespawn() {}

}