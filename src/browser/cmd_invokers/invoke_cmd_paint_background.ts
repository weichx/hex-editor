import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";
import {CommandType} from "../../runtime/enums/e_command_type";

@invokeCommandType(CommandType.PaintBackground)
class InvokePaintBackground extends CommandInvoker {

    public invokeCommand(json : IJson, elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        const c = json.background.color;
        el.style.background = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
    }

}