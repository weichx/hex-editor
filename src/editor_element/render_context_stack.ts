import {EditorElement} from "./editor_element";

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
