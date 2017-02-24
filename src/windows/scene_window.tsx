///<reference path="../../node_modules/@types/pixi.js/index.d.ts"/>
import PIXI = require("pixi.js");
import {WindowColors} from "../editor_theme";
import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
import {EditorElement} from "../editor_element/editor_element";
import {SceneTool} from "./scene/scene_tool";
import {Rectangle} from "../runtime/rectangle";
import {AppElement} from "../runtime/app_element";
import {SceneMetaBar} from "./scene/scene_meta_bar";
import {Vector2} from "../runtime/vector2";
import {Breakpoint, BreakpointType} from "../runtime/breakpoint";
import {ScenePanTool} from "./scene/pan_tool";
import {clamp} from "../util";

export class SceneWindow extends EditorWindowElement<IWindowAttrs> {
    public element = this;
    private currentTool : SceneTool;
    private ctx : CanvasRenderingContext2D;
    private canvas : HTMLCanvasElement;
    public highlighter : EditorElement;
    public pixi : PIXI.WebGLRenderer;
    public stage : PIXI.Container;
    private width : number;
    private height : number;
    private frameOutline : PIXI.Graphics;
    public zoomLevel : number = 1;
    private panValue : Vector2;
    private baseYOffset : number = 12;
    private frameDimensions : Vector2;
    private isPaintQueued : boolean = false;
    private currentBreakpoint : BreakpointType = BreakpointType.Mobile;

    public getDomData() : IDomData {
        return { tagName: "div", classList: "scene-window-root" }
    }

    public getBreakpoint() : BreakpointType {
        return this.currentBreakpoint;
    }

    public setPreviewSize(breakpointType : BreakpointType) : void {
        this.currentBreakpoint = breakpointType;
        this.frameDimensions = Breakpoint.getDimensions(breakpointType);
        this.panValue.x = ((this.width * 0.5) - (this.frameDimensions.x * 0.5)) | 0;
        this.panValue.y = this.baseYOffset;

        AppElement.Root.setRectValues(
            this.panValue.x,
            this.panValue.y,
            this.frameDimensions.x,
            this.frameDimensions.y
        );
        this.resetZoom();
        this.drawFrameOutline();
        //invoke break point code
        this.paintScene();
    }

    private paintScene() : void {
        this.isPaintQueued = true;
    }

    private drawFrameOutline() : void {
        this.frameOutline.clear();
        this.frameOutline.lineStyle(1, 0xFF00CD);
        this.frameOutline.drawRect(
            this.panValue.x,
            this.panValue.y - 1,
            this.zoomLevel * this.frameDimensions.x,
            this.zoomLevel * this.frameDimensions.y
        );
    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        if(input.isMouseInEditorElement(this.getChildRoot())) {
            this.zoom(input.getMouseWheelDelta().y);
        }

        //todo there is probably a way not to dirty check this
        const clientRect = this.getDomNode().getBoundingClientRect();
        if (clientRect.width !== this.width || clientRect.height !== this.height) {
            this.width = clientRect.width;
            this.height = clientRect.height;
            const renderRootBounds = this.getChildRoot().getDomNode().getBoundingClientRect();
            const renderRootWidth = renderRootBounds.width;
            const renderRootHeight = renderRootBounds.height;
            this.pixi.resize(renderRootWidth, renderRootHeight);
            this.setPreviewSize(this.currentBreakpoint);
        }
        this.currentTool.update();
        if(this.isPaintQueued) {
            this.isPaintQueued = false;
            this.paintBackground();
            this.drawFrameOutline();
            this.pixi.render(this.stage);
        }
    }

    public pan(delta : Vector2) : void {
        this.panValue.addVector(delta);
        AppElement.Root.setRectValues(
            this.panValue.x,
            this.panValue.y,
            this.frameDimensions.x,
            this.frameDimensions.y
        );
        this.paintScene();
    }

    public setCursor(cursorString : string) : void {
        this.getDomNode().style.cursor = cursorString;
    }

    private zoom(zoomDelta : number) : void {
        if(zoomDelta === 0) return;
        const oldWidth = this.frameDimensions.x * this.zoomLevel;
        const oldHeight = this.frameDimensions.y * this.zoomLevel;
        this.zoomLevel -= 0.1 * zoomDelta;
        this.zoomLevel = clamp(this.zoomLevel, 0.1, 4);
        const newWidth = this.frameDimensions.x * this.zoomLevel;
        const newHeight = this.frameDimensions.y * this.zoomLevel;
        const diff = new Vector2(
            (oldWidth - newWidth) * 0.5,
            (oldHeight - newHeight) * 0.5
        );
        this.pan(diff);
        const childRootDom = this.getChildRoot().getDomNode();
        const appRootDom = childRootDom.firstElementChild as HTMLElement;
        appRootDom.style.transformOrigin = "top left";
        appRootDom.style.transform = "scale(" + this.zoomLevel + ")";
        this.paintScene();
    }

    private resetZoom() : void {
        this.zoomLevel = 1.1;
        const width = this.width;
        const breakpointWidth = this.frameDimensions.x;

        if(breakpointWidth > width) {
            this.zoomLevel =  width / breakpointWidth;
            this.panValue.x = ((this.zoomLevel * breakpointWidth * 0.5) - (width * 0.5)) | 0;
            this.panValue.y = this.baseYOffset;
        }

        this.zoom(1);
    }

    private paintBackground() {
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

    public onRendered() {
        this.currentTool = new ScenePanTool(this);
        this.panValue = new Vector2();
        this.canvas = this.getChildBySelector('canvas').getDomNode() as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        EditorRuntime.drawScene("scene-render-root");
        EditorRuntime.updateTree.add(this);
        PIXI.utils.skipHello();
        this.stage = new PIXI.Container();
        this.pixi = new PIXI.WebGLRenderer(256, 256, {
            autoResize: true,
            transparent: true
        });
        this.pixi.view.classList.add('overlay-canvas');
        this.frameOutline = new PIXI.Graphics();
        this.stage.addChild(this.frameOutline);
        this.pixi.render(this.stage);
        this.getDomNode().appendChild(this.pixi.view); //todo i might need to wrap this in an editor element
        this.setPreviewSize(this.currentBreakpoint);
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <SceneMetaBar/>,
            <canvas x-id="background-canvas" class="overlay-canvas" />,
            <div x-child-root class="scene-render-root"/>,
            <div x-id="highlighter" x-hidden class="highlighter">
                <div x-id="hi-lite-top-right" class="highlight-corner top-right"></div>
                <div x-id="hi-lite-top-left" class="highlight-corner top-left"></div>
                <div x-id="hi-lite-bottom-right" class="highlight-corner bottom-right"></div>
                <div x-id="hi-lite-bottom-left" class="highlight-corner bottom-left"></div>
            </div>
        ]
    }
}

createStyleSheet(`
<style>

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
        
.scene-window-root {
    overflow:hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.scene-render-root {
    position: relative;
}

.overlay-canvas {
    position: absolute;
    top:21px; /*position under meta bar */
    left:0;
}

</style>`);