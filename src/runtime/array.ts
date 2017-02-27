declare global {
    interface Array<T> {
        add(item : T) : void;
        remove(item : T) : boolean;
        removeAt(index : number) : boolean;
        getFirst() : T;
        getLast() : T;
    }
}

Array.prototype.add = function<T>(item : T) {
    this[this.length] = item;
};

Array.prototype.getFirst = function () {
    return this[0];
};

Array.prototype.getLast = function () {
    return this[this.length - 1];
};

Array.prototype.remove = function<T>(item : T) : boolean {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (this[i] === item) {
            while (i < length) {
                this[i] = this[i + 1];
                i++
            }
            this.length--;
            return true;
        }
    }
    return false;
};

Array.prototype.removeAt = function (index : number) {
    let len = this.length;
    if (!len) { return false }
    while (index < len) {
        this[index] = this[index + 1];
        index++
    }
    this.length--;
    return true;
};

export default 0;