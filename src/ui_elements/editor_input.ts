import {IEditorBinding, CreateBinding, EditorBinding} from "../editor/binding";
import {EditorHTMLElement} from "../editor_element/editor_html_element";

export interface IInputRendererAttrs<T> extends IHTMLAttribute {
    value : T|IEditorBinding<T>;
}

export class InputRenderer<T extends IInputRendererAttrs<U>, U> extends EditorHTMLElement<IInputRendererAttrs<U>> {

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

