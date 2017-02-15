
namespace HexEditor {

    interface IAssetWindowAttrs {
        title : string;
    }

    export class AssetWindow extends EditorCustomElement<IAssetWindowAttrs> {

        protected getDomData() : IDomData {
            return {
                tagName: "div", classList: "asset-window"
            }
        }

        public createInitialStructure(children : any) : JSXElement {
            return [
                <h1>Hello Assets</h1>
            ]
        }

    }
}

createStyleSheet(`
<style>
.asset-window {
    width: 100%;
    height: 100%;
    background: mediumaquamarine;
}
</style>`);