
export interface IPoolable {

    onSpawn() : void;
    onDespawn() : void;

}

export interface IPoolable1<T> {
    onSpawn(t : T) : void;
    onDespawn() : void;
}

export interface IPoolable2<T, U> {
    onSpawn(t : T, u : U) : void;
    onDespawn() : void;
}

export interface IPoolable3<T, U, V> {
    onSpawn(t : T, u : U, v : V) : void;
    onDespawn() : void;
}

abstract class BaseObjectPool<T extends {onDespawn: () => void}> {

    protected type : INewable<T>;
    protected list : Array<T>;

    constructor(type : INewable<T>, preload = 5) {
        this.type = type;
        this.list = [];
        if(preload > 0) {
            for(let i = 0; i < preload; i++) {
                this.list.add(new this.type());
            }
        }
    }

    protected getItem() : T {
        return this.list.length > 0 ? this.list.pop() : new this.type();

    }

    public despawn(item : T) : void {
        item.onDespawn();
        this.list.add(item);
    }

}

export class ObjectPool<T extends IPoolable> extends BaseObjectPool<T> {

    public spawn() : T {
        const item = this.getItem();
        item.onSpawn();
        return item;
    }

}

export class ObjectPool1<T extends IPoolable1<U>, U> extends BaseObjectPool<T> {

    public spawn(arg : U) : T {
        const item = this.getItem();
        item.onSpawn(arg);
        return item;
    }

}

export class ObjectPool2<T extends IPoolable2<U, V>, U, V> extends BaseObjectPool<T> {

    public spawn(arg0 : U, arg1 : V) : T {
        const item = this.getItem();
        item.onSpawn(arg0, arg1);
        return item;
    }

}

export class ObjectPool3<T extends IPoolable3<U, V, W>, U, V, W> extends BaseObjectPool<T> {

    public spawn(arg0 : U, arg1 : V, arg2 : W) : T {
        const item = this.getItem();
        item.onSpawn(arg0, arg1, arg2);
        return item;
    }

}