import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";

interface ICheckboxInput extends IHTMLAttribute {
    binding : any;
    onValueChanged? : (newValue : boolean, oldValue : boolean) => void;
}

export class CheckboxInput extends EditorCustomElement<ICheckboxInput> {
    public element = this;
    private ctx : any;
    private getterFn : (renderCtx : any) => any;
    private setterFn : (renderCtx : any, value : any) => void;
    private lastValue : boolean;

    protected getDomData() : IDomData {
        return {
            tagName: "input",
            attributes: { type: "checkbox" }
        }
    }

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.htmlNode.addEventListener("change", () => {
            const value = (this.htmlNode as HTMLInputElement).checked;
            this.setterFn(this.ctx, value);
            this.lastValue = value;
        }, true);
    }

    public onUpdated() {
        const value = Boolean(this.getterFn(this.ctx));
        if (this.lastValue !== value) {
            if(this.attrs.onValueChanged) {
                this.attrs.onValueChanged(value, this.lastValue);
            }
            this.lastValue = value;
            (this.htmlNode as HTMLInputElement).checked = value;
        }
    }

    public onRendered() {
        EditorRuntime.updateTree.add(this);
    }

}