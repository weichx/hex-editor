interface IEditorDataCtor {
    __editorData : EditorData;
    __proto__ : IEditorDataCtor;
}

class EditorData {

    public fieldMap : Map<string, IEditorAnnotationData>;

    constructor(ctor : IEditorDataCtor) {
        const ctorParent = ctor.__proto__ as any;
        this.fieldMap = new Map<string, IEditorAnnotationData>();
        if(typeof ctorParent === "function" && ctorParent.__editorData) {
            const parentFields = ctorParent.__editorData.fieldMap;
            parentFields.forEach(function(value : IEditorAnnotationData, key : string) {
                this.fieldMap.set(key, value);
            });
        }
    }
}

export function exposeAs(propertyType : any, ...propertyOptions : any[]) {
    return (target : Object, propertyName : string) => {
        const ctor = target.constructor as any;
        ctor.__editorData = ctor.__editorData || new EditorData(ctor);
        ctor.__editorData.fieldMap.set(propertyName, {propertyName, propertyType, propertyOptions});
    };
}