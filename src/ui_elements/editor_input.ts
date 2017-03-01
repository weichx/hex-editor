import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {IEditorBinding, CreateBinding, EditorBinding} from "../editor/binding";

export interface IInputRendererAttrs<T> extends IHTMLAttribute {
    value : T|IEditorBinding<T>;
}

export class InputRenderer<T extends IInputRendererAttrs<U>, U> extends EditorCustomElement<IInputRendererAttrs<U>> {

    protected binding : EditorBinding<U>;

    public onCreated() : void {
        if(this.attrs.value instanceof EditorBinding) {
            this.binding = this.attrs.value;
            this.binding.setHost(this);
            this.binding.onChange((a : U, b : U) => {
                this.onValueChanged(a, b)
            });
        }
        else {
            //todo -- this should maybe just be fake / static
            this.binding = CreateBinding(this.attrs, "value") as EditorBinding<any>;
        }
    }

    protected onValueChanged(newValue? : U, oldValue? : U) : void {}

}

