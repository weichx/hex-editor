import {classMap} from "./TEMP_ANNOTATION";

function isPrimitive(value : any) : boolean {
    const type = typeof value;
    return (type !== "object" && type !== "function");
}

class TypeSerializer<T> {

    public serialize() : any {

    }

    public deserialize() : T {
        return null;
    }

}

//todo most of this gets replaced by generated type information

//@Serialize(Class)

// names can be made unique in a single blob, then name refs are just start / end indices
// thisisabiglistofstringsthatcanbehuffmancompressedandindexedinto
//
// //some flags can be combined, type, base type, interfaces for example
// objetRef: {
//     typeId: id,
//     decorators: [id, id, id]
//     fields: {id, accessFlag(public/readonly/etc), serializedFlag, name, type},
//     methods: {id, static flag, overrideFlags, decoratorids, name, paramTypes, retnType}
//     interfaces: [id, id, id]
//     baseType: id
// }
//
// objectRefid : id / fieldCount/ total bytes
// fieldId: id / bytelength
// bytes: bytes

export class Serializer {

    private storage : Indexable<any>;
    private objectIdMap : Map<object, number>;
    private types : Map<Function, string>;
    private refId : number;
    private objectQueue : Array<object>;

    constructor() {
        this.refId = 1;
        this.storage = {};
        this.objectIdMap = new Map<object, number>();
        this.objectQueue = [];
    }

    public add(obj : object) : void {
        if (this.objectIdMap.has(obj)) return;
        const id = this.getRefId(obj);
        this.storage[id] = this.serialize(obj);
    }

    public write() : string {

        while (this.objectQueue.length) {
            this.serialize(this.objectQueue.shift());
        }

        return "";
    }

    private isSerializable(value : any) : boolean {
        if (isPrimitive(value)) return true;
        if (Array.isArray(value)) return true;

    }

    public toJSON() : any {

    }

    public toString() : string {
        return JSON.stringify(this.toJSON());
    }

    private serialize(target : Indexable<any>) : any {
        const id = this.getRefId(target);
        const keys = Object.keys(target);
        //write type
        var types : any = {};

        types[id] = target.constructor.name;

        const serializer = this.getSerializer(target.constructor);

        /*

        types: {
            id: "some/path"
        },
        arrays: {
        },
        objects: {
            id: [0] = typeId
                [1...end] = fields
                [%3] = 1 field

            {
                type: typeId,
                fields: [
                    {name: name, value: value, type: type} //dont need the object wrapper, can use array offset
                ]
            }
        }
        * */
    }

    private getSerializer(target : object) : any {
        if (Array.isArray(target)) {

        }
        else if (target instanceof Date) {

        }
        else if (target instanceof RegExp) {

        }
        else if (target instanceof Function) {

        }
        else {
            return (target : Indexable<any>) => {
                const keys = Object.keys(target);
                const retn : any = [];
                for(let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const value = this.serializeValue(target[key]);
                    const type = this.getType(value);
                    retn.push(key, value, type);
                }
                return retn;
            }
        }
    }

    private getType(target : any) : any {

    }

    private serializeValue(target : any) : any {
        if(isPrimitive(target)) return target;
        if(Array.isArray(target)) {
            //queue target
        }
    }

    private getRefId(target : object) : number {
        if (target == null) return -1;
        let id = this.objectIdMap.get(target);
        if (!id) {
            id = this.refId++;
            this.objectIdMap.set(target, id);
        }
        return id;
    }
}