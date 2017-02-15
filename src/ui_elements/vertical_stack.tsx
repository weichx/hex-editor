namespace HexEditor {

    export class VerticalBase<T> extends EditorCustomElement<T> {

        protected getDomData() : IDomData {
            return VerticalBase.DomData;
        }

        public static DomData = { tagName: "div", classList: "vertical" };

    }

    export class Vertical extends VerticalBase<IHTMLAttribute> {}
}

createStyleSheet(`<style>

.vertical {
    display:flex;
    flex-direction:column;
}

</style>`);