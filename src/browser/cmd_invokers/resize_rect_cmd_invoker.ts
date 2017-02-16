import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";

@invokeCommandType(CommandType.ResizeRect)
class InvokeResizeRect extends CommandInvoker {

    public invokeCommand(json : IJson,  elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        const rect = json.rect;
        const style = el.style;
        style.width = rect.width + "px";
        style.height = rect.height + "px";
    }

}