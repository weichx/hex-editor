import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";

interface INumberInput {
    binding : any;
    onValueChanged? : (newValue : number, oldValue : number) => void;
}

export class NumberInput extends EditorCustomElement<INumberInput> {

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

    protected onAttrChanged(attrName : string, attrValue : number) : void {
        if(attrName === "binding") {
            //set html input
            //set last value == attrValue
        }
    }

    public onMounted() {
        /*


        for(var key in this.attrs) {
            if(typeof key !== Binding) {
                this.attrs[key] = new StaticBinding(this.attrs[key])
            }

        }


         */
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.htmlNode.addEventListener("input", (e : KeyboardEvent) => {

            let value = (this.htmlNode as HTMLInputElement).value || "";
            let parsedValue = this.formatNumber(value);
            if (!isNaN(parsedValue)) {
                //if(this.binding.set(parsedValue)) {
                //  this.attrs.onValueChanged()
                //  this.attrs.onValueChanged = "x";
                //  this.attrs.onValueChanged.isDirty()
                //  this.attrs.onValueChanged();

                // Object.defineProperty(this.attrs.prototype) {
                //
                //  get: function() { return this["some constant name"] }
                //  set: function() { this["some constant name"] = value }
                //
                // }
                //}
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
        //if(this.attrs.isDirty()) { this.htmlNoe.value = this.attrs.value }
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
