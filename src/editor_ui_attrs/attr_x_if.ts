namespace HexEditorInternal {

    import EditorElement = HexEditor.EditorElement;

    export class XIf {

        private element : EditorElement;
        private getterFn : (ctx : any) => any;
        private ctx : any;
        private invert : boolean;

        constructor(element : EditorElement, binding : { ctx : any, path : string, invert : boolean }) {
            this.element = element;
            this.ctx = binding.ctx;
            this.invert = binding.invert;
            this.getterFn = createGetter(binding.path.split("."));
            EditorRuntime.addUpdater(this, 100);
        }

        public onUpdated() : void {
            if (this.element.isDestroyed) {
                EditorRuntime.removeUpdater(this);
                this.element = null;
                this.getterFn = null;
            }
            else if (this.element.isRendered) {
                var value = this.getterFn(this.ctx);
                if (this.invert) value = !value;
                this.element.setVisible(value); //todo this should be setEnabled() instead
            }
        }

    }
}
