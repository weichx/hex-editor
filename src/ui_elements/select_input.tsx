import {InputRenderer, IInputRendererAttrs} from "./editor_input";

interface ISelectInput extends IInputRendererAttrs<any> {
    options? : Array<ISelectOption>;
}

export class SelectInput extends InputRenderer<ISelectInput, any> {

    protected htmlNode : HTMLSelectElement;

    protected getDomData() : IDomData {
        return { tagName: "select" };
    }

    public onMounted() {

        this.htmlNode.addEventListener("change", () => {
            const idx = this.htmlNode.selectedIndex;
            const option = this.htmlNode.options[idx] as HTMLOptionElement;
            let value = option.value;
            const target = this.children[idx] as any;
            if (target.attrs.value !== void 0) {
                value = target.attrs.value;
            }
            this.binding.set(value);
        }, true);
    }

    public onValueChanged(newValue : any) : void {
        for (var i = 0; i < this.children.length; i++) {
            const child = this.children[i] as any;
            if (child.attrs.value === newValue) {
                this.htmlNode.selectedIndex = i;
                break;
            }
        }
    }

}
