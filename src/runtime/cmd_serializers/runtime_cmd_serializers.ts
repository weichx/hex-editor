import {CommandType} from "../enums/e_command_type";
import {BackgroundComponent} from "../components/background_component";
import {Component} from "../component";
import {UIComponent} from "../components/ui_component";

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

    //outline
    //border
    //foreground color
    //background
    //shadow
    //foreach component
    //component.onCreate() or maybe onInitialize() or onMount()
    //maybe fire the response when we get it back
    //maybe only do that if in run mode
    //Component.Serialize(component)
    return {
        id: id,
        elementType : appElement.getComponent(UIComponent).getTypeName(),
        components: serializedComponents,
        parentId: appElement.getParent().id
    };
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