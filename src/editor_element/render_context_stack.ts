
namespace HexEditorInternal {

    import EditorElement = HexEditor.EditorElement;

    const contextStack = new Array<EditorElement>();

    export var RenderContextStack = {

        peek() {
            return contextStack[contextStack.length - 1];
        },

        push(ctx : EditorElement): void {
            contextStack.push(ctx);
        },

        pop(): EditorElement {
            return contextStack.pop();
        }

    };
}