
import {Transformable} from "../runtime/transformable";
import {ProtoComponent} from "./component";
type Constructor<T> = new(...args: any[]) => T;

function T<T extends Constructor<{}>>(Base: T) {
    return class extends Base {
        _tag: string;
        constructor(...args: any[]) {
            super(...args);
            this._tag = "";
        }
    }
}

export class Transform extends T(ProtoComponent) {

}

