import {WindowResized} from "../editor_events/evt_window_resized";
import {createElement} from "../editor_element/element_renderer";
import {clamp01} from "../util";
import {EditorElement} from "../editor_element/editor_element";
import {EditorHTMLElement} from "../editor_element/editor_html_element";
import {EditorRuntimeImplementation} from "../editor/editor_runtime";

interface ISplitPaneAttrs extends IHTMLAttribute {
    axis? : SplitDirection;
    distribution? : number;
    minSize? : number;
}

class SplitPaneGutter extends EditorHTMLElement<{}> {

}

export class SplitPane extends EditorHTMLElement<ISplitPaneAttrs> {
    public element = this;
    protected content0Node : HTMLElement;
    protected content1Node : HTMLElement;
    protected gutterNode : HTMLElement;

    protected gutterSize : number = 4;

    protected c0Size : number;
    protected c1Size : number;

    protected content0Child : EditorElement;
    protected content1Child : EditorElement;

    protected totalSize : number;
    protected distribution : number;

    protected getDomData() : IDomData {
        let classList = "split-pane";
        if(!this.isVertical()) {
            classList += " horizontal";
        }
        return { tagName: "div", classList }
    }

    public onWindowResized() {
        this.computeDimensions();
    }

    public onRendered() {
        this.distribution = clamp01(this.attrs.distribution || 0.5);
        this.attrs.minSize = this.attrs.minSize || 200;
        this.content0Node = this.getChildById("content0").getDomNode();
        this.content1Node = this.getChildById("content1").getDomNode();
        this.gutterNode = this.getChildById("gutter").getDomNode();
        this.computeDimensions();
        EditorRuntime.on(WindowResized, this);

        let ticks = 0;
        const intervalId = setInterval(() => {
            ticks++;
            this.computeDimensions();
            if(ticks > 1000) {
                clearInterval(intervalId);
            }
        }, 16);
    }

    public onDestroyed() {
        EditorRuntime.off(WindowResized, this);
    }

    protected computeDimensions() {
        if (!this.isRendered) return;
        this.updateTotalSize();
        //todo handle case where no children exist
        if (!this.content0Child) {
            this.c0Size = 0;
            this.c1Size = this.totalSize;
            this.getChildById("gutter").setVisible(false);
        }
        if (!this.content1Child) {
            this.c0Size = this.totalSize;
            this.c1Size = 0;
            this.getChildById("gutter").setVisible(false);
        }
        if (this.content0Child && this.content1Child) {
            this.c0Size = (this.totalSize * this.distribution) - (this.gutterSize * 0.5);
            this.c1Size = this.totalSize - this.c0Size - this.gutterSize;
            this.getChildById("gutter").setVisible(true);
        }
        this.applySizeChanges()
    }

    public setPane0Content(element : EditorElement) : void {
        const container = this.getChildById("content0");
        container.orphanChildren();
        this.content0Child = element;
        if (element) {
            element.orphan();
            container.addChild(element)
        }
        this.computeDimensions();
    }

    public getPane0Content() : EditorElement {
        return this.content0Child;
    }

    public setPane1Content(element : EditorElement) : void {
        const container = this.getChildById("content1");
        container.orphanChildren();
        this.content1Child = element;
        if (element) {
            element.orphan();
            container.addChild(element)
        }
        this.computeDimensions();
    }

    public getPane1Content() : EditorElement {
        return this.content1Child;
    }

    public onUpdated() {
        const input = EditorRuntime.getInput();

        if (input.isMouseUp()) {
            EditorRuntime.updateTree.remove(this);
            return;
        }

        const delta = this.getMouseDelta();

        if (delta === 0) return;
        const total = this.c0Size + delta;
        const shrink = delta < 0 && total > this.attrs.minSize;
        const grow = delta > 0 && total < this.totalSize - this.attrs.minSize;

        if (shrink || grow) {
            this.c0Size += delta;
            this.c1Size -= delta;
            this.applySizeChanges();
            this.distribution = 1.0 - ((this.totalSize - this.c0Size) / this.totalSize);
            if (this.content0Child instanceof SplitPane) {
                this.content0Child.computeDimensions();
            }
            if (this.content1Child instanceof SplitPane) {
                this.content1Child.computeDimensions();
            }
        }

    }

    protected isVertical() : boolean {
        return this.attrs.axis === SplitDirection.Vertical;
    }

    protected startGutterDrag() {
        EditorRuntime.updateTree.add(this);
    }

    protected getMouseDelta() {
        if (this.isVertical()) {
            return EditorRuntime.getInput().getMouseDelta().x
        }
        else {
            return EditorRuntime.getInput().getMouseDelta().y
        }
    }

    protected updateTotalSize() {
        if (this.isVertical()) {
            this.totalSize = (this.parent.getDomNode().clientWidth - (this.gutterSize * 0.5) | 0);
        }
        else {
            this.totalSize = (this.parent.getDomNode().clientHeight - (this.gutterSize * 0.5) | 0);
        }
    }

    protected applySizeChanges() {
        if (this.isVertical()) {
            this.content0Node.style.width = (this.c0Size | 0) + "px";
            this.gutterNode.style.left = (this.c0Size | 0) + "px";
            this.content1Node.style.left = ((this.gutterSize + this.c0Size) | 0) + "px";
            this.content1Node.style.width = (this.c1Size | 0) + "px";
        }
        else {
            this.content0Node.style.height = this.c0Size + "px";
            this.gutterNode.style.top = this.c0Size + "px";
            this.content1Node.style.top = (this.gutterSize + this.c0Size) + "px";
            this.content1Node.style.height = this.c1Size + "px";
        }
    }

    protected ensureOrientation() {
        if (this.attrs.axis !== SplitDirection.Vertical
            && this.attrs.axis !== SplitDirection.Horizontal) {
            this.attrs.axis = SplitDirection.Vertical;
        }
    }

    public createInitialStructure(children : any) : JSXElement {
        this.content0Child = children[0];
        this.content1Child = children[1];
        this.ensureOrientation();
        let gutterClass = "gutter-";
        gutterClass += this.isVertical() ? "vertical" : "horizontal";
        return [
            <div x-id="content0" class="split-pane-panel">
                {children[0]}
            </div>,
            <div x-id="gutter"
                 class={gutterClass}
                 onMouseDown={ this.startGutterDrag } />,
            <div x-id="content1" class="split-pane-panel">
                {children[1]}
            </div>
        ]
    }

    public setAxis(axis : SplitDirection) : void {
        if (this.attrs.axis === axis) return;
        this.attrs.axis = axis;
        const gutterNode = this.getChildById("gutter").getDomNode();
        if (this.attrs.axis === SplitDirection.Vertical) {
            gutterNode.classList.remove("gutter-horizontal");
            gutterNode.classList.add("gutter-vertical");
            gutterNode.style.top = "0";
        }
        else {
            gutterNode.classList.remove("gutter-vertical");
            gutterNode.classList.add("gutter-horizontal");
            gutterNode.style.left = "0";
        }
        this.computeDimensions();
    }

    public setOrSplitPane0(element : EditorElement, axis = SplitDirection.Vertical, distribution : number = 0.5) : void {
        const contentContainer = this.getChildById("content0");

        if (this.content0Child) {
            const split = createElement(SplitPane, { axis: axis });
            const child = this.content0Child;
            split.setPane0Content(element);
            split.setPane1Content(child);
            this.setPane0Content(split);
            split.computeDimensions();
        }
        else {
            this.setAxis(axis);
            contentContainer.addChild(element);
            this.content0Child = element;
        }

        if (distribution) this.distribution = clamp01(distribution);

        this.computeDimensions();
    }

    public setOrSplitPane1(element : EditorElement, axis = SplitDirection.Vertical, distribution : number = 0.5) : void {
        const contentContainer = this.getChildById("content1");

        if (this.content1Child) {
            const split = createElement(SplitPane, { axis: axis });
            const child = this.content1Child;
            split.setPane0Content(child);
            split.setPane1Content(element);
            this.setPane1Content(split);
            split.computeDimensions();
        }
        else {
            this.setAxis(axis);
            contentContainer.addChild(element);
            this.content1Child = element;
        }

        if (distribution) this.distribution = clamp01(distribution);

        this.computeDimensions();
    }

}

export class VerticalSplitPane extends SplitPane {

    protected ensureOrientation() {
        this.attrs.axis = SplitDirection.Vertical;
    }

}

export class HorizontalSplitPane extends SplitPane {

    protected ensureOrientation() {
        this.attrs.axis = SplitDirection.Horizontal;
    }

}

createStyleSheet(`<style>

.split-pane {
    width: 100%;
    height: 100%;
    position:relative;
    overflow: hidden;
}

.split-pane .split-pane-panel {
    height: 100%;
}

.split-pane.horizontal .split-pane-panel {
    width: 100%;
}

.split-pane-panel {
    overflow:hidden;
    position:absolute;
}

.gutter-vertical {
    width: 4px;
    min-width:4px;
    height:100%;
    /*cursor: ew-resize;*/
    position:absolute;;
}

.gutter-horizontal{
    width: 100%;
    height: 4px;
    min-height:4px;
    /*cursor: ns-resize;*/
    position:absolute;;
}

</style>`);