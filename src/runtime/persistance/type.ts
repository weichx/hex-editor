
const typeMap = new Map<string, Function>();

export function getTypeFromPath(path : string) : Function {
    return typeMap.get(path);
}

export function setTypePath(path : string) {
    return function(target : Function) {
        typeMap.set(path, target);
    }
}