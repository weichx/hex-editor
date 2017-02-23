import {EditorWindowElement} from "./editor_window_element";
import {SplitPane} from "../ui_elements/split_pane";
import {EditorCustomElement} from "../editor_element/editor_custom_element";
import {WindowColors} from "../editor_theme";
import {createElement} from "../editor_element/element_renderer";
import {WindowFrameTab} from "./editor_window_tab";
import {Vector2} from "../runtime/vector2";

interface IWindowData {
    tab : WindowFrameTab;
    content : EditorWindowElement<IWindowAttributes>;
    parentWindow : WindowFrame;
}

interface IWindowAttributes {
    title : string;
    icon? : string;
}

//todo this is causing a problem with mouse selection -- quad tree fixes this
//this issue has to do with document.elementFromPoint not ignoring this element
const coverDiv = document.createElement('div');
coverDiv.style.position = "absolute";
coverDiv.style.zIndex = "400";
coverDiv.style.background = "magenta";

export class WindowFrame extends EditorCustomElement<{}> {

    private windows : Array<IWindowData>;
    private isCoverInDom : boolean;
    private draggedWindowData : IWindowData;
    private parentSplitPane : SplitPane;

    public onCreated() {
        this.windows = [];
        this.isCoverInDom = false;
        this.draggedWindowData = null;
    }

    protected getDomData() : IDomData {
        return {
            tagName: "div",
            classList: "window-frame"
        }
    }

    public onRendered() : void {
        this.setVisibleWindow(this.windows[0]);
        this.parentSplitPane = this.getAncestorByType(SplitPane) as SplitPane;
    }

    private setVisibleWindow(window : IWindowData) : void {
        for (let i = 0; i < this.windows.length; i++) {
            if (this.windows[i] === window) {
                this.windows[i].tab.setActive(true);
                this.windows[i].content.setVisible(true);
            }
            else {
                this.windows[i].tab.setActive(false);
                this.windows[i].content.setVisible(false);
            }
        }
    }

    public onUpdated() : void {
        const Input = EditorRuntime.getInput();

        if (Input.isMouseUp()) {
            this.isCoverInDom = false;
            coverDiv.remove();
            EditorRuntime.removeUpdater(this);
            const mouse = Input.getMousePosition();
            const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
            const windowFrame = hoverElement.getAncestorByType(WindowFrame);

            if (windowFrame) {
                const rect = windowFrame.getChildById("body").getClientBounds();
                if (WindowFrame.mouseOnLeft(mouse, rect)) {
                    const frame = createElement(WindowFrame);
                    this.parentSplitPane.setOrSplitPane0(frame, SplitDirection.Vertical);
                    frame.addExistingWindow(this.draggedWindowData);
                }
                else if (WindowFrame.mouseOnRight(mouse, rect)) {
                    const frame = createElement(WindowFrame);
                    this.parentSplitPane.setOrSplitPane1(frame, SplitDirection.Vertical);
                    frame.addExistingWindow(this.draggedWindowData);
                }
                else if (WindowFrame.mouseOnBottom(mouse, rect)) {
                    const frame = createElement(WindowFrame);
                    this.parentSplitPane.setOrSplitPane1(frame, SplitDirection.Horizontal);
                    frame.addExistingWindow(this.draggedWindowData);
                }
                else if (this === windowFrame) {

                }
                else {
                    windowFrame.addExistingWindow(this.draggedWindowData);
                }
                //if in the center, add to tab list and set active
                //if left or right, split the pane vertically
                //if bottom split pane horizontally

            }
            this.draggedWindowData = null;
            return;
        }

        const mouse = Input.getMousePosition();
        const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
        const windowFrame = hoverElement.getAncestorByType(WindowFrame);

        if (!windowFrame) {
            return;
        }

        const rect = windowFrame.getChildById("body").getClientBounds();

        if (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7)) {
            if (mouse.x > rect.left && mouse.x < rect.left + (0.3 * rect.width)) {
                coverDiv.style.left = rect.left + "px";
                coverDiv.style.top = rect.top + "px";
                coverDiv.style.width = (rect.width * 0.3) + "px";
                coverDiv.style.height = "100%";
                if (!this.isCoverInDom) {
                    this.isCoverInDom = true;
                    document.body.appendChild(coverDiv);
                }
            }
            else if (mouse.x > rect.left + (0.7 * rect.width) && mouse.x < rect.left + rect.width) {
                coverDiv.style.left = rect.left + (rect.width * 0.7) + "px";
                coverDiv.style.top = rect.top + "px";
                coverDiv.style.width = (rect.width * 0.3) + "px";
                coverDiv.style.height = "100%";
                if (!this.isCoverInDom) {
                    this.isCoverInDom = true;
                    document.body.appendChild(coverDiv);
                }
            }
            else if (this.isCoverInDom) {
                this.isCoverInDom = false;
                coverDiv.remove();
            }
        }
        else if (mouse.y > rect.top) {
            coverDiv.style.left = rect.left + "px";
            coverDiv.style.top = rect.top + (rect.height * 0.7) + "px";
            coverDiv.style.width = rect.width + "px";
            coverDiv.style.height = (rect.height * 0.7) + "px";
            if (!this.isCoverInDom) {
                this.isCoverInDom = true;
                document.body.appendChild(coverDiv);
            }
        }
    }

    private static mouseOnLeft(mouse : Vector2, rect : ClientRect) : boolean {
        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
            && (mouse.x > rect.left && mouse.x < rect.left + (0.3 * rect.width));
    }

    private static mouseOnRight(mouse : Vector2, rect : ClientRect) : boolean {
        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
            && (mouse.x > rect.left + (0.7 * rect.width) && mouse.x < rect.left + rect.width);
    }

    private static mouseOnBottom(mouse : Vector2, rect : ClientRect) : boolean {
        return !(mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7)) && mouse.y > rect.top;
    }

    private addExistingWindow(windowData : IWindowData) : void {
        const header = this.getChildById("header");
        const body = this.getChildById("body");
        const data = this.createWindowData(windowData.content);
        //can't reuse the tab because of the mouse listener context
        this.windows.push(data);
        header.addChild(data.tab);
        body.addChild(data.content);
        this.setVisibleWindow(data);
        windowData.parentWindow.removeWindow(windowData);
    }

    private removeWindow(windowData : IWindowData) : void {
        windowData.tab.destroy();
        if (this.windows.length === 1) {
            this.destroy();
            if (this.parentSplitPane.getPane0Content() === this) {
                this.parentSplitPane.setPane0Content(null);
            }
            else if (this.parentSplitPane.getPane1Content() === this) {
                this.parentSplitPane.setPane1Content(null);
            }
        }
        else {
            const idx = this.windows.indexOf(windowData);
            if (idx === -1) return;
            this.windows.splice(idx, 1);
            this.setVisibleWindow(this.windows[0]);
        }
    }

    private startTabDrag(windowData : IWindowData) : void {
        this.draggedWindowData = windowData;
        EditorRuntime.addUpdater(this);
    }

    private createWindowData(content : EditorWindowElement<IWindowAttributes>) {
        const windowData : IWindowData = {
            parentWindow: this,
            content: content,
            tab: createElement(WindowFrameTab, {
                title: content.attrs.title, onMouseDown: () => {
                    this.setVisibleWindow(windowData);
                    this.startTabDrag(windowData);
                }
            })
        };
        this.windows.push(windowData);
        return windowData;
    }

    public createInitialStructure(children : any) : JSXElement {
        const childWindows : Array<IWindowData> = children.map((child : EditorWindowElement<any>) => {
            return this.createWindowData(child);
        });
        return [

            <div x-id="header" class="window-frame-header">
                {childWindows.map((w) => w.tab)}
            </div>,

            <div x-id="body" x-child-root class="window-frame-body">
                {childWindows.map((w) => w.content)}
            </div>,
        ];

    }
}

createStyleSheet(`<style>

.editor-frame-container {
    width: 100%;
    height: 100%;
    background: gainsboro;
    position: relative;
}

.window-frame-header {
    background: ${WindowColors.backgroundGrey};
    margin: 0;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
}

.window-frame-header h3 {
    margin: 0;
}

.window-frame-body {
    overflow:auto;
    width:100%;
    height: 100%;
    border: 1px solid #828282;
}

.window-frame {
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
}


</style>`);