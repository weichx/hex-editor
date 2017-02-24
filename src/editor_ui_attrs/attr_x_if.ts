import {createGetter} from "./binding_compiler";
import {EditorElement} from "../editor_element/editor_element";
import {IPoolable2, ObjectPool2} from "../object_pool";
import {ILifecycle} from "../editor_runtime";

interface XIfBinding {
    ctx : any,
    path : string,
    invert : boolean
}

export class XIf implements IPoolable2<EditorElement, XIfBinding>, ILifecycle {

    public element : EditorElement;
    private ctx : any;
    private invert : boolean;
    private getterFn : (ctx : any) => any;

    public onSpawn(element : EditorElement, binding : XIfBinding) : void {
        this.element = element;
        this.ctx = binding.ctx;
        this.invert = binding.invert;
        this.getterFn = createGetter(binding.path.split("."));
    }

    public onDespawn() : void {
        this.element = null;
        this.ctx = null;
        this.invert = false;
    }

    public onUpdated() : void {
        if (this.element.isRendered()) {
            var value = this.getterFn(this.ctx);
            if (this.invert) value = !value;
            this.element.setVisible(value); //todo this should be setEnabled() instead
        }
    }

    public onDestroyed() : void {
        this.element = null;
        this.getterFn = null;
    }

    public static Pool = new ObjectPool2(XIf);

}
