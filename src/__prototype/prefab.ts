
export class Prefab {

    public static create(p : any, args : any) : any {}

}

function Panel<T>(attrs : T)  {

}

const PrePanel = Prefab.create(Panel, []);

