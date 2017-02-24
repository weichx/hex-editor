import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {EditorElement} from "../editor_element/editor_element";

interface IconAttrs {
    iconName : string;
    size? : "small" | "normal" | "large";
}

export abstract class BaseIcon extends EditorCustomElement<IconAttrs & IHTMLAttribute> {

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

export class FontIcon extends BaseIcon {

}

interface IToggleIconAttrs extends IHTMLAttribute {
    visibilityTarget? : () => EditorElement;
    open? : boolean;
    direction? : string;
    size?: "small" | "normal" | "large"
}

export class ToggleIcon extends EditorCustomElement<IToggleIconAttrs> {

    protected getDomData() : IDomData {
        return { tagName: "i",  classList: this.getClassList() };
    }

    public onMounted() {
        const attrs = this.attrs;
        const htmlNode = this.htmlNode;
        let direction = attrs.direction;

        attrs.visibilityTarget = attrs.visibilityTarget || (() => {
                return (this as any).renderContext.getChildRoot();
            });

        if (direction !== "right" && direction !== "left") {
            attrs.direction = direction = "right";
        }

        htmlNode.addEventListener('click', (e : MouseEvent) => {
            attrs.open = !attrs.open;
            const target = attrs.visibilityTarget();
            target.setVisible(attrs.open);
            if (attrs.open) {
                htmlNode.classList.remove("fa-chevron-" + direction);
                htmlNode.classList.add("fa-chevron-down");
            }
            else {
                htmlNode.classList.remove("fa-chevron-down");
                htmlNode.classList.add("fa-chevron-" + direction);
            }
            e.stopPropagation();
        }, false);
    }

    private getIconSize() : string {
        return " icon " + (this.attrs.size || "");
    }

    public getClassList() {
        const attrs = this.attrs;
        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);

        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
            this.attrs.direction = "right";
        }
        if (this.attrs.open) {
            return "fa fa-chevron-down" + this.getIconSize();
        }
        return "fa fa-chevron-" + this.attrs.direction + this.getIconSize();
    }

}

createStyleSheet(`<style>
    
    .icon.small {
        font-size: 0.7em;
    }

    .icon.large {
        font-size:1.25em;
    }
`);