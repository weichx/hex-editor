import {InputRenderer, IInputRendererAttrs} from "./editor_input";

export class NumberInput extends InputRenderer<IInputRendererAttrs<number>, number> {

    protected htmlNode : HTMLInputElement;

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
        this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
        this.binding.onChange(() => {
            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
        });
        this.htmlNode.addEventListener("input", (e : KeyboardEvent) => {
            let value = this.htmlNode.value || "0";
            let parsedValue = this.formatNumber(value);
            if (!isNaN(parsedValue)) {
               this.binding.set(parsedValue);
            }
        });

        this.htmlNode.addEventListener("focusout", () => {
            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
        });
    }

    public onValueChanged(newValue : number) : void {
        this.htmlNode.value = this.formatNumber(newValue).toString();
    }

    protected formatNumber(input : string|number) : number {
        return parseFloat(input as string);
    }
}

export class IntegerInput extends NumberInput {

    protected formatNumber(input : string) : number {
        return parseInt(input);
    }

}
