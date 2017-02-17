import {WindowColors} from "../editor_theme";
import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
import {EditorElement} from "../editor_element/editor_element";
import {SceneTool} from "./scene/scene_tool";
import {SceneRectTool} from "./scene/rect_tool";

export class SceneWindow extends EditorWindowElement<IWindowAttrs> {

    private currentTool : SceneTool;
    private ctx : CanvasRenderingContext2D;
    private canvas : HTMLCanvasElement;
    public highlighter : EditorElement;

    private width : number;
    private height : number;

    public onUpdated() : void {
        const clientRect = this.getChildById("scene-window-body").getDomNode().getBoundingClientRect();
        if(clientRect.width !== this.width || clientRect.height !== this.height) {
            this.width = clientRect.width;
            this.height = clientRect.height;
            AppElement.Root.setRect(new Rectangle(0, 0, this.width, this.height));
            this.paint();
        }
        this.currentTool.update();
    }

    public setCursor(cursorString : string) : void {
        this.getDomNode().style.cursor = cursorString;
    }

    private paint() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = WindowColors.sceneBackground;
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 0.5;
        this.ctx.globalAlpha = 0.2;
        this.ctx.beginPath();
        const spacing = 25;
        for (let i = 0; i < 100; i++) {
            const interval = i * spacing + 0.5;
            this.ctx.moveTo(0, interval);
            this.ctx.lineTo(this.width, interval);
            this.ctx.moveTo(interval, 0);
            this.ctx.lineTo(interval, this.height);
        }

        this.ctx.closePath();
        this.ctx.stroke();

    }

    public getDomData() : IDomData {
        return { tagName: "div", classList: "scene-window-root" }
    }

    public onRendered() {
        this.currentTool = new SceneRectTool(this);
        this.highlighter = this.getChildById("highlighter");
        this.canvas = this.getChildById("canvas").getDomNode() as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.paint();
        EditorRuntime.drawScene("scene-render-root");
        EditorRuntime.addUpdater(this);
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <canvas x-id="canvas"></canvas>,
            <div x-id="scene-window-body" class="scene-window-body">
                <div x-child-root id="scene-render-root" class="scene-render-root"></div>
                <div x-id="scene-viewport" class="scene-viewport"></div>
                <div x-id="highlighter" x-hidden class="highlighter">
                    <div x-id="hi-lite-top-right" class="highlight-corner top-right"></div>
                    <div x-id="hi-lite-top-left" class="highlight-corner top-left"></div>
                    <div x-id="hi-lite-bottom-right" class="highlight-corner bottom-right"></div>
                    <div x-id="hi-lite-bottom-left" class="highlight-corner bottom-left"></div>
                </div>
            </div>
        ]
    }
}

createStyleSheet(`
<style>

.scene-viewport {
position: absolute;
    border: 1px dashed white;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.highlighter {
    position: absolute;
    transform: translate(0, 0);
    width: 100px;
    height: 100px;
    border: 1px solid lightblue;
    top: 0;
    left:0;
}

.highlight-corner {
    position: absolute;
    background:lightblue;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 100;
}
        
.top-right {
    top: -5px;
    right: -5px;
}

.top-left{
    top: -5px;
    left: -5px;
}

.bottom-right {
    bottom: -5px;
    right: -5px;
}

.bottom-left {
    bottom: -5px;
    left: -5px;
}
        
.break-point-bounds {
    border: 1px dashed white;
    position: absolute;
    pointer-events: none;
    height: 500px;
    width: 200px;
    top: 0;
    left: 25%;
}

.scene-window-root {
    width: 100%;
    height: 100%;
    overflow:hidden;
    position: relative;
}

.scene-window-header {
    width: 100%;
    background: gray;
}

.scene-render-root {
    position: relative;
}

.scene-window-body {
    position: absolute;
    top:0; 
    left:0;
    width: 100%;
    height: calc(100% - 3.5em);
}

.scene-window-header .break-point-bar {
    display:flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
}

.break-point-bar > i {
    padding-right: 0.25em;
    cursor: pointer;
}
</style>`);