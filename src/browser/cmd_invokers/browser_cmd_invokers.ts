import {CommandType} from "../../runtime/enums/e_command_type";

function DeserializeComponent(component : any, element : HTMLElement) : any {
    if (component.handler) {

    }
    if (component.commands) {
        const commands = component.commands;
        for (let i = 0; i < commands.length; i++) {
            //todo -- response buffer
            BrowserRuntime.invokeCommand(commands[i].type as CommandType, commands[i].data);
        }
    }
}

BrowserRuntime.setCommandInvoker(CommandType.SetText, (function () {
    var ruler = document.createElement('span');
    var style = ruler.style;
    style.wordWrap = "none";
    style.visibility = "hidden";
    document.body.appendChild(ruler);

    return function (payload : IJson) {
        const el = BrowserRuntime.elementIdToDomNode(payload.id);
        el.innerText = payload.text;
        style.fontSize = payload.fontSize;
        style.fontFamily = payload.fontFamily;
        style.fontWeight = payload.fontWeight;
        style.lineHeight = payload.lineHeight;
        style.textDecoration = payload.decoration;
        ruler.innerText = payload.text;
        return ruler.offsetWidth;
    }
})());

BrowserRuntime.setCommandInvoker(CommandType.Create, (function () {

    const elementTypeToTagName : any = {
        "Panel": "div",
        "Text": "div",
        "Button": "button",
        "Dropdown": "select",
        "Section": "section"
    };

    return function (payload : IJson) {
        const element = document.createElement(elementTypeToTagName[payload.elementType]);
        const parentId = payload.parentId;
        element.setAttribute("app-id", payload.id);
        BrowserRuntime.setDomNodeToElementId(payload.id, element);
        const components = payload.components;
        for (let i = 0; i < components.length; i++) {
            DeserializeComponent(components[i], element);
        }

        BrowserRuntime.elementIdToDomNode(parentId).appendChild(element);
    }
})());

BrowserRuntime.setCommandInvoker(CommandType.SetPosition, function (payload : IJson) {
    const el = BrowserRuntime.elementIdToDomNode(payload.id);
    const x = payload.x | 0;
    const y = payload.y | 0;
    el.style.top = y === 0 ? null : y + "px";
    el.style.left = x === 0 ? null : x + "px";
});

BrowserRuntime.setCommandInvoker(CommandType.SetDimensions, function (payload : IJson) {
    const el = BrowserRuntime.elementIdToDomNode(payload.id);
    el.style.width = (payload.width | 0) + "px";
    el.style.height = (payload.height | 0) + "px";
});

BrowserRuntime.setCommandInvoker(CommandType.SetTransform, function (payload : IJson) {

});

BrowserRuntime.setCommandInvoker(CommandType.SetRect, function (payload : IJson) {
    const el = BrowserRuntime.elementIdToDomNode(payload.id);
    const rect = payload.rect;
    const style = el.style;
    const x = rect.x | 0;
    const y = rect.y | 0;
    style.top = y === 0 ? null : y + "px";
    style.left = x === 0 ? null : x + "px";
    style.width = (rect.width | 0) + "px";
    style.height = (rect.height | 0) + "px";
});

BrowserRuntime.setCommandInvoker(CommandType.PaintBackground, function (payload : IJson) {
    const el = BrowserRuntime.elementIdToDomNode(payload.id);
    const c = payload.color;
    //todo = use a style cache to check for bg class
    el.style.background = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
});

BrowserRuntime.setCommandInvoker(-1, function (payload : IJson) {
    for (let i = 0; i < payload.components.length; i++) {
        const cmp = payload.components[i];
        //DeserializeComponent(cmp)
        //BrowserRuntime.invokeCommand(cmdType, cmp);
    }
});