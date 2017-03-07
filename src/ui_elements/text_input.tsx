import {InputRenderer, IInputRendererAttrs} from "./editor_input";

interface ITextInput {
    onValueChanged? : (newValue? : string, oldValue? : string) => void;
}

export class TextInput extends InputRenderer<IInputRendererAttrs<string>, string> {

    protected htmlNode : HTMLInputElement;

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

        this.htmlNode.value = this.binding.get();

        this.binding.onChange(() => {
            this.htmlNode.value = this.binding.get();
        });

        this.htmlNode.addEventListener("input", (e : KeyboardEvent) => {
            const value = this.htmlNode.value || "";
            this.binding.set(value);
        });
    }

    public onValueChanged(newValue : string) : void {
        this.htmlNode.value = newValue || "";
    }

}