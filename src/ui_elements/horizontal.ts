import {EditorHTMLElement} from "../editor_element/editor_html_element";

export class HorizontalBase<T> extends EditorHTMLElement<T> {

    protected getDomData() : IDomData {
        return HorizontalBase.DomData;
    }

    public static DomData = { tagName: "div", classList: "horizontal" };

}

export class Horizontal extends HorizontalBase<IHTMLAttribute> {}

createStyleSheet(`<style>
.horizontal {
    display:flex;
    flex-direction:row;
}
</style>`);