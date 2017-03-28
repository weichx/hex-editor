import {CommandType} from "../enums/e_command_type";
import {Component} from "../component";
import {UIComponent} from "../components/ui_component";
import {IFont} from "../components/ui/text_component";
import {Color} from "../color";

const ComponentCache = new Array<Component>();

Runtime.setCommandSerializer(CommandType.Create, function (id : any) {

    ComponentCache.length = 0;
    const appElement = Runtime.getAppElementById(id);
    const components = appElement.getAllComponents(ComponentCache);
    const serializedComponents = new Array<IJson>();
    for (let i = 0; i < components.length; i++) {
        const serialized = components[i].serialize();
        if (serialized) {
            serializedComponents.push(serialized);
        }
    }

    //todo -- call onCreate after we get the response buffer back

    //component.onCreate() or maybe onInitialize() or onMount()
    //maybe fire the response when we get it back
    //maybe only do that if in run mode
    //Component.Serialize(component)

    const uiComponent = appElement.getComponent(UIComponent);
    let elementType = "Panel"; //temp until we get meta-elements

    if (uiComponent) {
        elementType = uiComponent.getTypeName()
    }

    return {
        id: id,
        elementType: elementType,
        components: serializedComponents,
        parentId: appElement.getParent().id
    };
});

Runtime.setCommandSerializer(CommandType.Destroy, function (data : { id : number }) {
    return data;
});

Runtime.setCommandSerializer(CommandType.SetParent, function (data : { id : number, parentId : number }) {
    return data;
});

Runtime.setCommandSerializer(CommandType.SetSiblingIndex, function (data : { id : number, index : number }) {
    return data;
});

Runtime.setCommandSerializer(CommandType.SetText, function (data : { id : number, text : string, font : IFont }) {
    return data;
});

Runtime.setCommandSerializer(CommandType.SetImage, function (data : { id : number, image : string }) {
    return { id: data.id, image: data.image };
});


Runtime.setCommandSerializer(CommandType.SetDimensions, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    return { id: id, width: appElement.getWidth(), height: appElement.getHeight() }
});

Runtime.setCommandSerializer(CommandType.SetTransform, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    const m = appElement.getMatrix();
    let str = "matrix3d(";
    for(let i = 0; i < m.m.length - 1; i++) {
        str += m.m[i] + ",";
    }
    str += m.m[15] + ")";
    return { id: id, matrix: str };// origin: `${pivot.x}% ${pivot.y}%` };
});

Runtime.setCommandSerializer(CommandType.PaintBackground, function (data : { id : number, color : Color }) {
    return data;
});