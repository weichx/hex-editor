
namespace HexEditor {

    export abstract class EditorCustomElement<T extends IHTMLAttribute> extends EditorHTMLElement<T> {

        protected getChildMountPoint() : HTMLElement {
            if (this.childRoot) {
                return this.childRoot.getDomNode()
            }
            return this.htmlNode;
        }

        protected getDomData() : IDomData {
            return { tagName: "div" };
        }

        public createDomNode() {
            const domData = this.getDomData();
            this.tagName = domData.tagName || "div";
            super.createDomNode();
            this.htmlNode.className = (domData.classList || "") + (this.attrs.class || "");
            const attrs = domData.attributes;
            if (attrs) {
                for (let a in attrs) {
                    this.htmlNode.setAttribute(a, attrs[a])
                }
            }
            this.onApplyStyles(this.htmlNode.style);
            return this.htmlNode;
        }

        public onApplyStyles(style : CSSStyleDeclaration) {
        }
    }
}