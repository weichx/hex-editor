import {CommandType} from "../enums/e_command_type";
import {BackgroundComponent} from "../components/background_component";
import {Component} from "../component";
import {UIComponent} from "../components/ui_component";
import {IFont} from "../components/ui/text_component";

const ComponentCache = new Array<Component>();
const ColorCache = {};

Runtime.setCommandSerializer(CommandType.Create, function (id : any) {

    ComponentCache.length = 0;
    const appElement = Runtime.getAppElementById(id);
    const components = appElement.getAllComponents(ComponentCache);
    const serializedComponents = new Array<IJson>(components.length);

    for (let i = 0; i < components.length; i++) {
        serializedComponents[i] = components[i].serialize();
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

Runtime.setCommandSerializer(CommandType.SetText, function (data : { id : number, text : string, font : IFont }) {
    return data;
});

Runtime.setCommandSerializer(CommandType.SetImage, function (data : { id : number, image : string }) {
    return { id: data.id, image: data.image };
});

Runtime.setCommandSerializer(CommandType.SetPosition, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    const position = appElement.getLocalPosition();
    return { id: id, x: position.x | 0, y: position.y | 0 };
});

Runtime.setCommandSerializer(CommandType.SetDimensions, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    return { id: id, width: appElement.getWidth(), height: appElement.getHeight() }
});

Runtime.setCommandSerializer(CommandType.SetTransform, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    return { id: id, rotation: appElement.getRotation, scale: appElement.getScale() };
});

Runtime.setCommandSerializer(CommandType.PaintBackground, function (id : any) {
    const appElement = Runtime.getAppElementById(id);
    const background = appElement.getComponent(BackgroundComponent);
    return {
        id: id,
        color: (background as any).color.copyTo(ColorCache)
    };
});