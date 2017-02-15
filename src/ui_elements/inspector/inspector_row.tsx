namespace HexEditor {

    interface IInspectorRowAttr {
        label : string;
    }

    export class InspectorRow extends EditorCustomElement<IInspectorRowAttr> {

        protected getDomData() : IDomData {
            return { tagName: "div", classList: "horizontal" };
        }

        createInitialStructure(children : any) : JSXElement {
            return [
                <div class="inspector-label">{this.attrs.label}</div>,
                <div class="inspector-value">
                    {children}
                </div>
            ];
        }

    }
}

createStyleSheet(`<style>

    .inspector-label {
        padding-left: 1em;
        width: 175px;
    }
    
    .inspector-value {
        padding-right: 1em;
        flex: 2;
    }

`);