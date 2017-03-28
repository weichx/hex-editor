import {IInputRendererAttrs, InputRenderer} from "./editor_input";

export class CheckboxInput extends InputRenderer<IInputRendererAttrs<boolean>, boolean> {

    protected htmlNode : HTMLInputElement;

    protected getDomData() : IDomData {
        return {
            tagName: "input",
            attributes: { type: "checkbox" }
        }
    }

    public onMounted() {
        this.onValueChanged(this.binding.get());
        this.binding.onChange(() => {
            this.htmlNode.checked = this.binding.get();
        });

        this.htmlNode.addEventListener("change", () => {
            this.binding.set(this.htmlNode.checked);
        }, true);

    }

    public onValueChanged(newValue : boolean) : void {
        this.htmlNode.checked = newValue;
    }

}