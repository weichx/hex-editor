import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {EditorElement} from "../editor_element/editor_element";

interface IconAttrs {
    iconName : string;
}

export abstract class BaseIcon extends EditorCustomElement<IconAttrs> {

    protected abstract getIconClass() : string;

    protected abstract getIconPrefix() : string;

    public setIcon(iconName : string) {
        const domNode = this.getDomNode();
        domNode.classList.remove(this.getIconPrefix() + this.attrs.iconName);
        domNode.classList.add(this.getIconPrefix() + iconName);
        this.attrs.iconName = iconName;
    }

    public createInitialStructure() {
        return <i class={this.getIconClass() + " " + this.getIconPrefix() + this.attrs.iconName}></i>
    }
}

export class FontIcon extends BaseIcon {

    protected getIconClass() : string {
        return "fa fa-lg";
    }

    protected getIconPrefix() : string {
        return "fa-";
    }

    public onMounted() {
        this.getDomNode().style.lineHeight = "1";
    }
}

interface IToggleIconAttrs extends IHTMLAttribute {
    visibilityTarget? : () => EditorElement;
    open? : boolean;
    direction? : string;
}


export class ToggleIcon extends EditorCustomElement<IToggleIconAttrs> {

    protected getDomData() : IDomData {
        return {
            tagName: "i",
            classList: this.getClassList()
        };
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

    public getClassList() {
        const attrs = this.attrs;
        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);

        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
            this.attrs.direction = "right";
        }
        if (this.attrs.open) {
            return "fa fa-chevron-down";
        }
        return "fa fa-chevron-" + this.attrs.direction;
    }

}
