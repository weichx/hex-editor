

namespace HexEditor {

    export class InspectorBody extends EditorCustomElement<{}> {

        protected getDomData() : IDomData {
            return { tagName: "div", classList: "vertical" }
        }
    }

}