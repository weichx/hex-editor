import {EditorElement} from "../editor_element/editor_element";
import {IPoolable2, ObjectPool2} from "../object_pool";
import {ILifecycle} from "../editor/editor_runtime";

interface IXIfEval extends IPoolable2<EditorElement, () => boolean> {}

export class XIfEval implements IXIfEval, ILifecycle {

    public element : EditorElement;
    private getterFn : () => boolean;

    constructor() {
        this.element = null;
        this.getterFn = null;
    }

    public onUpdated() : void {
        this.element.setVisible(this.getterFn());
    }

    public onSpawn(element : EditorElement, getter : () => boolean) : void {
        this.element = element;
        this.getterFn = getter;
    }

    public onDespawn() : void {
        this.element = null;
        this.getterFn = null;
    }

    public static Pool = new ObjectPool2(XIfEval);

}
