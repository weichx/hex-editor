import {createGetter} from "./binding_compiler";
import {EditorElement} from "../editor_element/editor_element";

export class XBind {

    private element : EditorElement;
    private getterFn : (ctx : any) => any;
    private ctx : any;

    constructor(element : EditorElement, binding : { ctx : any, path : string }) {
        this.element = element;
        this.ctx = binding.ctx;
        this.getterFn = createGetter(binding.path.split("."));
        EditorRuntime.addUpdater(this, 200);
    }

    public onUpdated() : void {
        if (this.element.isDestroyed) {
            EditorRuntime.removeUpdater(this);
            this.element = null;
            this.getterFn = null;
        }
        else if (this.element.isRendered) {
            var value = this.getterFn(this.ctx);
            //this.element.setText(value);
        }
    }
}

