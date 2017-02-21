import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";

@invokeCommandType(CommandType.SetRect)
class InvokeSetRect extends CommandInvoker {

    public invokeCommand(json : IJson,  elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        const rect = json.rect;
        const style = el.style;
        style.top = (rect.y | 0) + "px";
        style.left = (rect.x | 0) + "px";
        style.width = (rect.width | 0) + "px";
        style.height = (rect.height | 0) + "px";
    }

}