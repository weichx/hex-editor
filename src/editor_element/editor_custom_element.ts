import {EditorHTMLElement} from "./editor_html_element";

export abstract class EditorCustomElement<T extends IHTMLAttribute> extends EditorHTMLElement<T> {

    public onMouseDown(e? : MouseEvent) : void {}

    public onMouseUp(e? : MouseEvent) : void {}

    public onMouseMove(e? : MouseEvent) : void {}

    public onMouseEnter(e? : MouseEvent) : void {}

    public onMouseExit(e? : MouseEvent) : void {}

    public onMouseWheel(e? : MouseWheelEvent) : void {}

    public handleDragActionMouseEnter() : void { }

    public handleDragActionMouseOver() : void { }

    public handleDragActionMouseExit() : void { }

    public handleDragActionDrop() : void { }

}
