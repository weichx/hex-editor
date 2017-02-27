import {EditorElement} from "../editor_element/editor_element";
import {Vector2} from "../runtime/vector2";
import {BrowserInput} from "../browser/browser_input";

//in the editor we use real dom input events, unlike in the runtime
//the problem is that when we do a sync from dom -> runtime,
//local (real dom) event handlers fire but the input update hasn't been
//sent to the runtime yet. To combat this, EditorInput just extends
//BrowserInput. This *shouldn't* be a problem when in run mode
//because events are't stemming from the dom in that environment
export class EditorInput extends BrowserInput {

    public isMouseInEditorElement(element : EditorElement|HTMLElement) : boolean {
        let dom = (element instanceof EditorElement) ? element.getDomNode() : element;
        const rect = dom.getBoundingClientRect();
        return (
            (this.x > rect.left && this.x < rect.left + rect.width) &&
            (this.y > rect.top && this.y < rect.top + rect.height)
        );
    }

    public getMouseRelativeToAppRootDom() : Vector2 {
        return this.getMouseRelativeToDom(EditorRuntime.getAppRootElementDomNode());
    }

    public getMouseRelativeToDom(domElement : HTMLElement) : Vector2 {
        const rect = domElement.getBoundingClientRect();
        return new Vector2(
            this.x - rect.left,
            this.y - rect.top
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