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

interface IToggleIconAttrs {
    visibilityTarget? : () => EditorElement;
    open? : boolean;
    direction? : string;
}

export class ToggleIcon extends EditorCustomElement<IToggleIconAttrs> {

    protected getDomData() : IDomData {
        return {
            tagName: "i",
            attributes: {
                style: "font-size: 0.8em",
            },
            classList: this.getClassList()
        };
    }

    public onMounted() {
        this.attrs.visibilityTarget = this.attrs.visibilityTarget || (() => {
                return this.__renderContext.getChildRoot();
            });
        this.attrs.open = this.attrs.open === void 0 ? true : Boolean(this.attrs.open);
        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
            this.attrs.direction = "right";
        }
        this.htmlNode.className = this.getClassList();
        this.htmlNode.addEventListener('click', () => {
            this.attrs.open = !this.attrs.open;
            this.attrs.visibilityTarget().setVisible(this.attrs.open);
            if (this.attrs.open) {
                this.htmlNode.classList.remove("fa-chevron-" + this.attrs.direction);
                this.htmlNode.classList.add("fa-chevron-down");
            }
            else {
                this.htmlNode.classList.remove("fa-chevron-down");
                this.htmlNode.classList.add("fa-chevron-" + this.attrs.direction);
            }
        });
    }

    public getClassList() {
        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
            this.attrs.direction = "right";
        }
        if (this.attrs.open) {
            return "fa fa-chevron-down";
        }
        return "fa fa-chevron-" + this.attrs.direction;
    }

}
