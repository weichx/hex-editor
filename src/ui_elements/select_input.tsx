import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";

interface ISelectInput extends IHTMLAttribute {
    binding : IBinding;
    options? : Array<ISelectOption>;
}

export class SelectInput extends EditorCustomElement<ISelectInput> {

    private ctx : any;
    private getterFn : (renderCtx : any) => any;
    private setterFn : (renderCtx : any, value : any) => void;
    private lastValue : any;

    protected getDomData() : IDomData {
        return {
            tagName: "select"
        };
    }

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.htmlNode.addEventListener("change", () => {
            const select = (this.htmlNode as HTMLSelectElement);
            let value = select.options[select.selectedIndex].value;
            const target = this.children[select.selectedIndex] as any;
            if (target.attrs.value !== void 0) {
                value = target.attrs.value;
            }
            this.setterFn(this.ctx, value);
            this.lastValue = value;
        }, true);
    }

    public onUpdated() {
        const value = this.getterFn(this.ctx);
        if (this.lastValue !== value) {
            this.lastValue = value;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i] as any;
                if (child.attrs.value === value) {
                    (this.htmlNode as HTMLSelectElement).selectedIndex = i;
                    break;
                }
            }
        }
    }

    public onRendered() {
        EditorRuntime.addUpdater(this);
    }

    public onDestroyed() {
        EditorRuntime.removeUpdater(this);
    }

}
