import {RuntimeBase} from "../shared/runtime_base";
import {BrowserInput} from "./browser_input";
import {CommandType} from "../runtime/enums/e_command_type";

export class BrowserRuntimeImpl extends RuntimeBase {

    private domElementIdMap : IHTMLElementMap;
    private worker : Worker;
    private input : BrowserInput;

    constructor(codeurl : string, mountTarget : HTMLElement = null) {
        super();
        this.pendingBuffers = [];
        this.input = new BrowserInput(mountTarget);
        this.domElementIdMap = new Map<number, HTMLElement>();
        const root = document.createElement("div");
        root.id = 'app-root-element';
        this.domElementIdMap.set(0, root);
        this.worker = new window.HexWorker(codeurl);
        this.worker.onmessage = (message : MessageEvent) =>  {
            this.onMessage(message);
        }
    }

    public update() : void {
        this.decodeCommandBuffers();
        this.sendCommandBuffer();
        this.input.update();
        runtimeGuard(() => {
            this.sendCommand(CommandType.UpdateInput, 0);
        });
    }

    public setDomNodeToElementId(id : number, node : HTMLElement) : void {
        this.domElementIdMap.set(id, node);
    }

    public elementIdToDomNode(elementId : number) : HTMLElement {
        return this.domElementIdMap.get(elementId);
    }

    protected postMessage(message : string) : void {
        this.worker.postMessage(message);
    }

    public getInput() : BrowserInput {
        return this.input;
    }

}