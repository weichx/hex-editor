import {getHigh16Bits, getLow16Bits, setHighLowBits} from "../bit_util";
import {Transformable} from "../runtime/transformable";
import {RenderDirtyFlags, UIElementType} from "./render_system";
import {TypeOf} from "../runtime/interfaces/i_typeof";
import {ProtoComponent} from "./component";
import {Transform} from "./transform";

export class AppEntity {

    private idField : number;
    public renderFlags : RenderDirtyFlags;
    private components : ProtoComponent[];

    constructor() {
        this.idField = setHighLowBits(0, ++AppEntity.Id);
    }

    public get id() : number {
        return getLow16Bits(this.components[0].__idField);
    }

    public get parentId() : number {
        return getHigh16Bits(this.components[0].__idField);
    }

    public get transform() : Transform {
        return this.components[0] as Transform;
    }

    public get dimensions() : any {
        return this.components[1];
    }

    public emit(evt : any, ...args : any[]) {
        //runtime.__emit(this, evt, args);
        //evt_batch_id -> to allocate less memory, batch array
    }

    public getComponent<T extends ProtoComponent>(type : TypeOf<T>) : T {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] instanceof type) {
                return this.components[i] as T; //why do I need the cast?
            }
        }
        return null;
    }

    public setParent(parent : AppEntity) {
        this.idField = setHighLowBits(parent.id, getLow16Bits(this.idField));
    }

    public getBaseUIElementType() : UIElementType {
        return UIElementType.Box;
    }

    private static Id : number = 0;

}