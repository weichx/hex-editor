import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";

@invokeCommandType(CommandType.PaintBackground)
class InvokePaintBackground extends CommandInvoker {

    public invokeCommand(json : IJson, elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        const style = el.style;
        const c = json.background.color;
        style.background = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
    }

}