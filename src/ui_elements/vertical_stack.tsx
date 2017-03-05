import {EditorHTMLElement} from "../editor_element/editor_html_element";

export class VerticalBase<T> extends EditorHTMLElement<T> {

    protected getDomData() : IDomData {
        return VerticalBase.DomData;
    }

    public static DomData = { tagName: "div", classList: "vertical" };

}

export class Vertical extends VerticalBase<IHTMLAttribute> {}

createStyleSheet(`<style>

.vertical {
    display:flex;
    flex-direction:column;
}

</style>`);