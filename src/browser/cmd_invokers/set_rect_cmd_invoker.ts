import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";

@invokeCommandType(CommandType.SetRect)
class InvokeSetRect extends CommandInvoker {

    public invokeCommand(json : IJson,  elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        const rect = json.rect;
        const style = el.style;
        style.top = rect.x + "px";
        style.left = rect.y + "px";
        style.width = rect.width + "px";
        style.height = rect.height + "px";
    }

}