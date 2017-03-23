import {InputRenderer, IInputRendererAttrs} from "./editor_input";
import {KeyCode} from "../runtime/enums/e_keycode";
import {MathUtil} from "../math_util";

export class NumberInput extends InputRenderer<IInputRendererAttrs<number>, number> {

    protected htmlNode : HTMLInputElement;

    protected getDomData() : IDomData {
        return {
            tagName: "input",
            style: "width: 100%",
            attributes: {
                type: "text",
            }
        }
    }

    protected onKeyDown(e : KeyboardEvent) {
        if(e.keyCode === KeyCode.UpArrow) {
            this.binding.set(this.binding.get() + 1);
            e.preventDefault();
        }
        else if(e.keyCode == KeyCode.DownArrow) {
            this.binding.set(this.binding.get() - 1);
            e.preventDefault();
        }
    }

    public onMounted() {
        this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
        this.binding.onChange(() => {
            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
        });
        this.htmlNode.addEventListener("keydown", (e : KeyboardEvent) => {
           this.onKeyDown(e);
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

export class AngleInput extends NumberInput {

    protected onKeyDown(e : KeyboardEvent) {
        if(e.keyCode === KeyCode.UpArrow) {
            this.binding.set(MathUtil.wrapAngleDegrees(this.binding.get() + 1));
            e.preventDefault();
        }
        else if(e.keyCode == KeyCode.DownArrow) {
            this.binding.set(MathUtil.wrapAngleDegrees(this.binding.get() - 1));
            e.preventDefault();
        }
    }

    protected formatNumber(input : string) {
        return MathUtil.wrapAngleDegrees(parseFloat(input));
    }

}