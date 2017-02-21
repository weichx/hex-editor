
//todo maybe swap to array
let editorDataMap = new Map<any, Map<string, IEditorAnnotationData>>();
let fnPrototype = Object.getPrototypeOf(function(){});

export function getExposedFieldMap(target : any) : Map<string, IEditorAnnotationData> {
    let map : Map<string, IEditorAnnotationData> = null;
    let ptr = target.constructor;
    while(!map && ptr !== fnPrototype) {
        map = editorDataMap.get(ptr);
        if(map) return map;
        ptr = Object.getPrototypeOf(ptr);
    }
    return null;
}

export function exposeAs(propertyType : any, ...propertyOptions : any[]) {
    return (target : Object, propertyName : string) => {
        var fieldMap = editorDataMap.get(target.constructor);
        if(!fieldMap) {
            fieldMap = new Map<string, IEditorAnnotationData>();
            const parent = Object.getPrototypeOf(target.constructor);
            if (typeof parent === "function") {
                const parentFields = editorDataMap.get(parent);
                if(parentFields) {
                    parentFields.forEach(function (value : IEditorAnnotationData, key : string) {
                        this.fieldMap.set(key, value);
                    });
                }
            }
            editorDataMap.set(target.constructor, fieldMap);
        }
        fieldMap.set(propertyName, {propertyName, propertyType, propertyOptions});
    };
}