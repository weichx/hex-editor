import {IPoolable1, ObjectPool2} from "../object_pool";
import {StylePropertyUpdate} from "./style_property_update";

const StylePropertyUpdatePool = new ObjectPool2(StylePropertyUpdate);

export class StyleBatch implements IPoolable1<number>{

    public updates : Array<any>;
    public entityId : number;
    private idx : number;

    constructor() {
        this.updates = [];
        this.entityId = null;
        this.idx = 0;
    }

    public add(propertyName : keyof CSSStyleDeclaration, value : string) : void {
        this.updates[this.idx++] = StylePropertyUpdatePool.spawn(propertyName, value);
    }

    public onSpawn(entityId : number) {
        this.entityId = entityId;
        this.idx = 0;
    }

    public onDespawn() {
        for(let i = 0; i < this.idx; i++) {
            StylePropertyUpdatePool.despawn(this.updates[this.idx]);
        }
    }

}