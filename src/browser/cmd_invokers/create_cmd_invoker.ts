import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";

@invokeCommandType(CommandType.Create)
class InvokeCreateCommand extends CommandInvoker {

    public invokeCommand(json : IJson, elementIdMap : IHTMLElementMap) : void {
        const el = document.createElement(json["tagName"]);
        const id = json["id"];
        const parentId = json["parentId"];
        el.setAttribute("app-id", id);
        //todo add paint classes
        //todo add paint styles
        //todo add rect layout
        elementIdMap.set(id, el);
        elementIdMap.get(parentId).appendChild(el);
    }

}