
namespace HexEditor {

    export interface IWindowAttrs {
        title : string;
        icon? : string;
    }

    export abstract class EditorWindowElement<T extends IWindowAttrs> extends EditorCustomElement<IWindowAttrs> {

    }

}