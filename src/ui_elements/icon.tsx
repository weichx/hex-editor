import {EditorElement} from "../editor_element/editor_element";
import {EditorHTMLElement} from "../editor_element/editor_html_element";

interface IconAttrs {
    iconName : string;
    size? : "small" | "normal" | "large";
}

export class FontIcon extends EditorHTMLElement<IconAttrs & IHTMLAttribute> {

    public prefix = "fa";

    protected getDomData() : IDomData {
        return { tagName: "i", classList: this.getClassList() }
    }

    public getIconSize() : string {
        return " icon " + (this.attrs.size || "");
    }

    public getClassList() : string {
        return this.prefix
            + " "
            + this.getPrefixedIconName(this.attrs.iconName)
            + this.getIconSize();
    }

    protected getPrefixedIconName(iconName : string) : string {
        return this.prefix + "-" + iconName;
    };

    public setIcon(iconName : string) {
        const domNode = this.getDomNode();
        domNode.classList.remove(this.getPrefixedIconName(this.attrs.iconName));
        domNode.classList.add(this.getPrefixedIconName(iconName));
        this.attrs.iconName = iconName;
    }

}

interface IToggleIconAttrs extends IHTMLAttribute {
    onToggle? : (isOpen? : boolean) => void;
    visibilityTarget? : () => EditorElement;
    open? : boolean;
    size?: "small" | "normal" | "large"
}

export class ToggleIcon extends EditorHTMLElement<IToggleIconAttrs> {

    protected getDomData() : IDomData {
        return { tagName: "i",  classList: this.getClassList() };
    }

    public onMounted() {
        const attrs = this.attrs;
        const htmlNode = this.htmlNode;

        attrs.visibilityTarget = attrs.visibilityTarget || (() => {
                return (this as any).renderContext.getChildRoot();
            });

        htmlNode.addEventListener('click', (e : MouseEvent) => {
            attrs.open = !attrs.open;
            if(this.attrs.onToggle) {
                this.attrs.onToggle(attrs.open);
            } else {
                attrs.visibilityTarget().setVisible(attrs.open);
            }
            htmlNode.classList.toggle("fa-caret-down", attrs.open);
            htmlNode.classList.toggle("fa-caret-right", !attrs.open);

            e.stopPropagation();
        }, true);
    }

    public getClassList() {
        const attrs = this.attrs;
        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);
        return "toggle-icon fa " + (this.attrs.open ? "fa-caret-down" : "fa-caret-right");
    }

}

createStyleSheet(`<style>
    .toggle-icon {
        width: 18px;
        padding: 0 4px;
    }
`);