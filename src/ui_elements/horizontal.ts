
namespace HexEditor {

    export class HorizontalBase<T> extends EditorCustomElement<T> {

        protected getDomData() : IDomData {
            return HorizontalBase.DomData;
        }

        public static DomData = { tagName: "div", classList: "horizontal" };

    }

    export class Horizontal extends HorizontalBase<IHTMLAttribute> {}

}

createStyleSheet(`<style>
.horizontal {
    display:flex;
    flex-direction:row;
}
</style>`);