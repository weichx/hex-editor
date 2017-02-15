namespace HexEditor {
    interface ITextBoxWithIconAttr extends IHTMLAttribute {
        color? : string;
        iconSide? : "left" | "right";
        iconName : string;
        binding : string;
    }

    export class TextBoxWithIcon extends EditorCustomElement<ITextBoxWithIconAttr> {

        protected getDomData() : IDomData {
            return {
                tagName: "div",
                classList: this.getClassList()
            }
        }

        protected getClassList() : string {
            return "inner-addon " + (this.attrs.iconSide === "left" ? "left-addon" : "right-addon");
        }

        public createInitialStructure(children : any) : JSX.Element<{}> {
            return [
                <i x-id="icon" class={"glyphicon glyphicon-" + this.attrs.iconName}></i>,
                <input type="text" class="text-with-icon"/>
            ]
        }

        public onMounted() : void {
            if (this.attrs.color) {
                this.getChildById("icon").getDomNode().style.color = this.attrs.color;
            }
        }
    }
}

createStyleSheet(`<style>

.inner-addon { 
    position: relative; 
}

.text-with-icon {
    width: 100%;
}

/* style icon */
.inner-addon .glyphicon {
  position: absolute;
  padding-right: 3px;
  padding-left: 3px;
  padding-top: 3px;
  pointer-events: none;
}

/* align icon */
.left-addon .glyphicon  { left:  0;}
.right-addon .glyphicon { right: 0;}

/* add padding  */
.left-addon input  { padding-left:  30px; }
.right-addon input { padding-right: 30px; }

</style>`);