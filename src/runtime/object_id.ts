
export class ObjectId {

    private static value : number = 1;

    public static generate() : number {
        return ++ObjectId.value;
    }

    public static seed(seed : number) : void {
        ObjectId.value = seed;
    }

}