import {EditorElement} from "../editor_element/editor_element";

export class XIfEval {

    private element : EditorElement;
    private getterFn : () => boolean;

    constructor(element : EditorElement, fn : () => boolean) {
        this.element = element;
        this.getterFn = fn;
        this.element.setVisible(this.getterFn());
        EditorRuntime.addUpdater(this, 100);
    }

    public onUpdated() : void {
        if (this.element.isDestroyed) {
            EditorRuntime.removeUpdater(this);
            this.element = null;
            return;
        }
        this.element.setVisible(this.getterFn());
    }

    //todo handle destroy

}
