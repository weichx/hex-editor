import rotate180 = PIXI.GroupD8.rotate180;
class Serializer {

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
        if(this.objectIdMap.has(obj)) return;
        const id = this.getRefId(obj);
        this.storage[id] = this.serialize(obj);
    }

    public toJSON() : any {

    }

    public toString() : string {
        return JSON.stringify(this.toJSON());
    }

    private serialize(target : Indexable<any>) : any {
        const keys = Object.keys(target);
        for(let i = 0; i < keys.length; i++) {
            const field = target[keys[i]];
            //if object -> serialize object
            if(Array.isArray(field)) {

            }
            else if(typeof field === "object") {
                //add to map, enqueue
                this.getRefId(field);
                this.objectQueue.push(field);
            }
            else if(typeof field === "function") {
                //skip
            }
            else {
                //primitive
            }
        }
        for(let i = 0; i < this.objectQueue.length; i++) {

        }
    }

    private getRefId(target : object) : number {
        if (target == null) return -1;
        let id = this.objectIdMap.get(target);
        if(!id) {
            id = this.refId++;
            this.objectIdMap.set(target, id);
        }
        return id;
    }
}