namespace HexEditorInternal {

    interface IWindowFrameTabAttrs extends IHTMLAttribute {
        title : string;
    }

    export class WindowFrameTab extends EditorCustomElement<IWindowFrameTabAttrs> {

        protected getDomData() : IDomData {
            return {
                tagName: "div",
                classList: "window-frame-tab"
            }
        }

        public setActive(isSelected : boolean) : void {
            if (isSelected) {
                this.getDomNode().classList.add('selected');
            }
            else {
                this.getDomNode().classList.remove('selected');
            }
        }

        public createInitialStructure(children : any) : JSXElement {
            return this.attrs.title;
        }

    }
}

createStyleSheet(`
<style>
.window-frame-tab {
    padding-left: 1em;
    padding-right: 1em;
    text-align: center;
    font-size: 0.9em;
    color: black;
    cursor: pointer;
}

.window-frame-tab.selected {
    background: ${HexEditorTheme.WindowColors.selectedTabBodyGrey};
    border: 1px solid ${HexEditorTheme.WindowColors.selectedTabBorderGrey};
    border-bottom:none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
</style>
`);