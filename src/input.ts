import {EditorElement} from "./editor_element/editor_element";

export class EditorInput extends Input {

    constructor(target : HTMLElement = document.body) {
        super();
        target.addEventListener("mousemove", (evt : MouseEvent) => {
            this.x = evt.pageX;
            this.y = evt.pageY;
        }, true);

        target.addEventListener("mousedown", (evt : MouseEvent) => {
            this.x = evt.pageX;
            this.y = evt.pageY;
            this.mouseButtonState = evt.buttons;
            this.mouseDownPosition.x = this.x;
            this.mouseDownPosition.y = this.y;
        }, true);

        target.addEventListener("mouseup", (evt : MouseEvent) => {
            this.x = evt.pageX;
            this.y = evt.pageY;
            this.mouseButtonState = evt.buttons;
        }, true);

        //todo make this get focus somehow
        target.addEventListener("keydown", (evt : KeyboardEvent) => {
            this.keyMapCurrent[evt.keyCode] = true;
        }, true);

        target.addEventListener("keyup", (evt : KeyboardEvent) => {
            this.keyMapCurrent[evt.keyCode] = false;
        }, true);
    }

    public isMouseInEditorElement(element : EditorElement|HTMLElement) : boolean {
        let dom = (element instanceof EditorElement) ? element.getDomNode() : element;
        const rect = dom.getBoundingClientRect();
        return (
            (this.x > rect.left && this.x < rect.left + rect.width) &&
            (this.y > rect.top && this.y < rect.top + rect.height)
        );
    }

    public getMouseRelativeToEditorElement(element : EditorElement|HTMLElement) : Vector2 {
        let dom = (element instanceof EditorElement) ? element.getDomNode() : element;
        const rect = dom.getBoundingClientRect();
        return new Vector2(
            this.x - rect.left,
            this.y - rect.top
        );
    }

    public getMouseDownRelativeToEditorElement(element : EditorElement|HTMLElement) {
        let dom = (element instanceof EditorElement) ? element.getDomNode() : element;
        const rect = dom.getBoundingClientRect();
        return new Vector2(
            this.mouseDownPosition.x - rect.left,
            this.mouseDownPosition.y - rect.top
        );
    }

}