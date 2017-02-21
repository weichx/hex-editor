import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {ILifecycle} from "../runtime";

interface ISelectInput extends IHTMLAttribute {
    binding : IBinding;
    options? : Array<ISelectOption>;
    onValueChanged? : (newValue? : any, oldValue? : any) => void;
}

export class SelectInput extends EditorCustomElement<ISelectInput> implements ILifecycle {

    public element = this;
    private ctx : any;
    private getterFn : (renderCtx : any) => any;
    private setterFn : (renderCtx : any, value : any) => void;
    private lastValue : any;

    protected getDomData() : IDomData {
        return { tagName: "select" };
    }

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        this.setterFn = getSetter(this.attrs.binding.path);
        this.lastValue = this.getterFn(this.ctx);
        this.htmlNode.addEventListener("change", () => {
            const select = (this.htmlNode as HTMLSelectElement);
            let value = select.options[select.selectedIndex].value;
            const target = this.children[select.selectedIndex] as any;
            if (target.attrs.value !== void 0) {
                value = target.attrs.value;
            }
            this.setterFn(this.ctx, value);
            const lastValue = this.lastValue;
            this.lastValue = value;
            if (this.attrs.onValueChanged) {
                this.attrs.onValueChanged(value, lastValue);
            }
        }, true);
    }

    public onUpdated() {
        const value = this.getterFn(this.ctx);
        const lastValue = this.lastValue;
        if (this.lastValue !== value) {
            this.lastValue = value;
            if (this.attrs.onValueChanged) {
                this.attrs.onValueChanged(value, lastValue);
                if(this.isDestroyed()) return;
            }
            for (var i = 0; i < this.children.length; i++) {
                const child = this.children[i] as any;
                if (child.attrs.value === value) {
                    (this.htmlNode as HTMLSelectElement).selectedIndex = i;
                    break;
                }
            }
        }
    }

    public onRendered() {
        EditorRuntime.updateTree.add(this);
    }



}
