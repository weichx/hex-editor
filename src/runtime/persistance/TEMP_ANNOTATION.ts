export const classMap = new Map<string, Function>();

export function serializeClass(target : Function) {
    classMap.set(target.name, target);
}

function setSerializer(typeName : string, serializer : (target : any) => any ) {

}

setSerializer("Map", function(target : Map<any, any>) {

    target.forEach(function(value : any, key : any) {
        //return {key: Serialize(key), value: Serialize(value)}
    });

});


function serialize() : any {
            
}

function Serialize(target : object) : void {

}