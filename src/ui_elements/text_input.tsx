import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {ILifecycle} from "../editor_runtime";

interface ITextInput {
    binding : any;
    onValueChanged? : (newValue? : string, oldValue? : string) => void;
}

//todo -- formatters

export class TextInput extends EditorCustomElement<ITextInput> implements ILifecycle {

    public element = this;
    private getterFn : (renderCtx : any) => any;
    private setterFn : (renderCtx : any, value : any) => void;
    private lastValue : any;
    private ctx : any;

    protected getDomData() : IDomData {
        return {
            tagName: "input",
            attributes: {
                type: "text",
                style: "width: 100%"
            }
        };
    }

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.htmlNode.addEventListener("input", (e : KeyboardEvent) => {
            const value = (this.htmlNode as HTMLInputElement).value || "";
            this.setterFn(this.ctx, value);
            this.lastValue = value;
        });
    }

    public onUpdated() {
        const value = this.getterFn(this.ctx) || "";
        if (this.lastValue !== value) {
            if(this.attrs.onValueChanged) {
                this.attrs.onValueChanged(value, this.lastValue);
            }
            this.lastValue = value;
            (this.htmlNode as HTMLInputElement).value = value;
        }
    }

    public onRendered() {
        EditorRuntime.updateTree.add(this);
    }

}