let blurListener : () => void = null;
let inputListener : () => void = null;

export const TextSelection = {

    moveCaretToEnd(node : HTMLElement): void {
        if(!node) return;
        node.focus();
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            var textNode = sel.focusNode;
            const nodeLength = (textNode) ? textNode.nodeValue.length : 0;
            var newOffset = sel.focusOffset + nodeLength;
            sel.collapse(textNode, Math.min(nodeLength, newOffset));
        }
    },

    makeEditable(node : HTMLElement, inputCallback : (content : string) => string, blurOnEnter = false) : void {
        node.setAttribute("contenteditable", "true");
        this.moveCaretToEnd(node);
        blurListener = () => {
            let text = node.innerText;
            text = text.replace(/\/n/g, "");
            blurListener = null;
            inputListener = null;
            this.removeEditable(node);
            node.innerText = inputCallback(text) || text;
        };
        inputListener = () => {
            let text = node.innerText;
            if(blurOnEnter && text.indexOf("\n") !== -1) {
                text = text.replace(/\/n/g, "");
                blurListener = null;
                inputListener = null;
                this.removeEditable(node);
                node.innerText = inputCallback(text);
            }
            // node.innerText = inputCallback(text) || text;
        };
        node.addEventListener("input", inputListener);
        node.addEventListener("blur", blurListener);
    },

    removeEditable(node : HTMLElement) : void {
        node.removeEventListener("input", inputListener);
        node.removeEventListener("blur", blurListener);
        node.removeAttribute("contenteditable");
    }
};