namespace HexEditor {

    import getSetter = HexEditorInternal.getSetter;
    import getGetter = HexEditorInternal.getGetter;

    interface ICheckboxInput extends IHTMLAttribute {
        binding : any;
    }

    export class CheckboxInput extends EditorCustomElement<ICheckboxInput> {

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
                this.lastValue = value;
                (this.htmlNode as HTMLInputElement).checked = value;
            }
        }

        public onRendered() {
            EditorRuntime.addUpdater(this);
        }

        public onDestroyed() {
            EditorRuntime.removeUpdater(this);
        }

    }
}