import {Input} from "../runtime/input";

export class BrowserInput extends Input {

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

        target.addEventListener("mousewheel", (evt : MouseWheelEvent) => {
            this.mouseWheelDeltaX = Input.normalizeWheelValue(evt.deltaX);
            this.mouseWheelDeltaY = Input.normalizeWheelValue(evt.deltaY);
        }, true);

        //todo make this get focus somehow
        target.addEventListener("keydown", (evt : KeyboardEvent) => {
            this.keyMapCurrent[evt.keyCode] = true;
        }, true);

        target.addEventListener("keyup", (evt : KeyboardEvent) => {
            this.keyMapCurrent[evt.keyCode] = false;
        }, true);
    }
}