import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";

interface INumberInput {
    binding : any;
    onValueChanged? : (newValue : number, oldValue : number) => void;
}

export class NumberInput extends EditorCustomElement<INumberInput> {
    public element = this;
    protected getterFn : (renderCtx : any) => any;
    protected setterFn : (renderCtx : any, value : any) => void;
    protected lastValue : any;
    protected ctx : any;

    protected getDomData() : IDomData {
        return {
            tagName: "input",
            attributes: {
                type: "text",
                style: "width: 100%"
            }
        }
    }

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.htmlNode.addEventListener("input", (e : KeyboardEvent) => {

            let value = (this.htmlNode as HTMLInputElement).value || "";
            let parsedValue = this.formatNumber(value);
            if (!isNaN(parsedValue)) {
                this.setterFn(this.ctx, parsedValue);
                if(this.attrs.onValueChanged) {
                    this.attrs.onValueChanged(parsedValue, this.lastValue);
                }
                this.lastValue = parsedValue;
            }
        });

        this.htmlNode.addEventListener("focusout", () => {
            (this.htmlNode as HTMLInputElement).value = this.formatNumber(this.lastValue).toString();
        });
    }

    public onUpdated() {
        const value = this.getterFn(this.ctx) || 0;
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

    protected formatNumber(input : string) : number {
        return parseFloat(input);
    }
}

export class IntegerInput extends NumberInput {

    protected formatNumber(input : string) : number {
        return parseInt(input);
    }

}
