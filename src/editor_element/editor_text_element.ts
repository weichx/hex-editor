namespace HexEditor {

    export class EditorTextElement extends EditorElement {

        public content : string;
        private textNode : Text;

        constructor(content : string) {
            super();
            this.content = content;
        }

        public getDomNode() : HTMLElement {
            return this.textNode as any;
        }

        protected getChildMountPoint() : HTMLElement {
            throw new Error("Text Nodes cannot have children");
        }

        public addChild(child : EditorElement) {
            throw new Error("Text Nodes cannot have children");
        }

        public mount(mountPoint : HTMLElement) : void {
            if (this.isMounted) return;
            this.__mountPoint = mountPoint;
            this.textNode = this.textNode || document.createTextNode(this.content);
            mountPoint.appendChild(this.textNode);
            this.isMounted = true;
        }

    }
}