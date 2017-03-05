import {EditorHTMLElement} from "../editor_element/editor_html_element";

interface ITextBoxWithIconAttr extends IHTMLAttribute {
    color? : string;
    iconSide? : "left" | "right";
    iconName : string;
    binding : string;
}

export class TextBoxWithIcon extends EditorHTMLElement<ITextBoxWithIconAttr> {

    protected getDomData() : IDomData {
        return {
            tagName: "div",
            classList: this.getClassList()
        }
    }

    protected getClassList() : string {
        return "inner-addon " + (this.attrs.iconSide === "left" ? "left-addon" : "right-addon");
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <i x-id="icon" class={"fa fa-" + this.attrs.iconName}/>,
            <input placeholder="search" type="text" class="text-with-icon"/>
        ]
    }

    public onMounted() : void {
        if (this.attrs.color) {
            this.getChildById("icon").getDomNode().style.color = this.attrs.color;
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
.inner-addon .fa {
  position: absolute;
  padding-right: 3px;
  padding-left: 3px;
  padding-top: 3px;
  pointer-events: none;
}

/* align icon */
.left-addon .fa  { left:  0;}
.right-addon .fa { right: 0;}

/* add padding  */
.left-addon input  { padding-left:  30px; }
.right-addon input { padding-right: 30px; }

</style>`);