import {CommandInvoker, invokeCommandType} from "./_cmd_invoker";
import {CommandType} from "../../runtime/enums/e_command_type";

@invokeCommandType(CommandType.SetText)
class InvokeBrowserSetText extends CommandInvoker {

    private ruler : HTMLSpanElement;

    constructor() {
        super();
        this.ruler = document.createElement('span');
        this.ruler.style.visibility = "hidden";
        document.body.appendChild(this.ruler);
    }

    public invokeCommand(json : IJson, elementIdMap : IHTMLElementMap) : void {
        const el = elementIdMap.get(json.id);
        el.innerText = json.text;
        //ruler.fontSize = json.fontSize;
        //ruler.fontFamily = json.fontFamily;
        //ruler.innerText = json.text;
        //ruler.offsetWidth;
        //BrowserRuntime.sendCommand(MeasureText, json.text);
    }

}