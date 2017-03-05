import {titlize} from "../../util";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";

interface IInspectorRowAttr {
    label : string;
}

export class InspectorRow extends EditorHTMLElement<IInspectorRowAttr> {

    public onCreated() : void {
        this.attrs.label = titlize(this.attrs.label);
    }

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "horizontal" };
    }

    createInitialStructure(children : any) : JSXElement {
        return [
            <div class="inspector-label">{this.attrs.label}</div>,
            <div class="inspector-value">
                {children}
            </div>
        ];
    }

}

createStyleSheet(`<style>

    .inspector-label {
        padding-left: 1.8em;
        width: 175px;
    }
    
    .inspector-value {
        padding-right: 1em;
        flex: 2;
    }

`);