import {WindowColors} from "../editor/editor_theme";
import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
import {SceneTool} from "./scene/scene_tool";
import {AppElement, Space} from "../runtime/app_element";
import {SceneMetaBar} from "./scene/scene_meta_bar";
import {Vector2} from "../runtime/vector2";
import {Breakpoint, BreakpointType} from "../runtime/breakpoint";
import {clamp} from "../util";
import {DragAction} from "../editor/drag_actions/drag_action";
import {PrefabDragAction} from "../editor/drag_actions/prefab_drag_action";
import {SceneRectTool} from "./scene/rect_tool";
import {LayoutComponent} from "../runtime/components/layout/layout";

export class SceneWindow extends EditorWindowElement<IWindowAttrs> {

    private currentTool : SceneTool;
    private ctx : CanvasRenderingContext2D;
    private canvas : HTMLCanvasElement;
    public pixi : PIXI.WebGLRenderer;
    public stage : PIXI.Container;
    private width : number;
    private height : number;
    private dragThing : PIXI.Graphics;
    private frameOutline : PIXI.Graphics;
    private selectionOutline : PIXI.Graphics;
    public zoomLevel : number = 1;
    private panValue : Vector2;
    private baseYOffset : number = 12;
    private frameDimensions : Vector2;
    private isPaintQueued : boolean = false;
    private currentBreakpoint : BreakpointType = BreakpointType.Mobile;
    private scaledMousePosition : PIXI.Graphics;

    public getBreakpoint() : BreakpointType {
        return this.currentBreakpoint;
    }

    public setPreviewSize(breakpointType : BreakpointType) : void {
        this.currentBreakpoint = breakpointType;
        this.frameDimensions = Breakpoint.getDimensions(breakpointType);
        this.panValue.x = ((this.width * 0.5) - (this.frameDimensions.x * 0.5)) | 0;
        this.panValue.y = this.baseYOffset;

        AppElement.Root.setPosition(this.panValue);
        AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);

        this.drawFrameOutline();
        this.paintScene();
    }

    private paintScene() : void {
        this.isPaintQueued = true;
    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        if (input.isMouseInEditorElement(this.getChildRoot())) {
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
        // this.stage.position.set(this.panValue.x, this.panValue.y);
        this.paintBackground();
        this.drawFrameOutline();
        this.drawSelection();
        this.drawMouseScaled();
        this.pixi.render(this.stage);
    }

    public pan(delta : Vector2) : void {
        if (delta.isZero()) return;
        this.panValue.addVector(delta);
        AppElement.Root.setPosition(this.panValue);
        AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);
        this.paintScene();
    }

    private zoom(zoomDelta : number) : void {

        this.zoomLevel -= 0.05 * zoomDelta;
        this.zoomLevel = clamp(this.zoomLevel, 0.1, 4);
        // this.stage.scale.set(this.zoomLevel);

        if (zoomDelta !== 0) {
            const childRootDom = this.getChildRoot().getDomNode();
            const appRootDom = childRootDom.firstElementChild as HTMLElement;
            appRootDom.style.transformOrigin = "top left";
            appRootDom.style.transform = "scale(" + this.zoomLevel + ")";
        }

        this.paintScene();
    }

    private resetZoom() : void {
        this.zoomLevel = 1;
        const width = this.width;
        const breakpointWidth = this.frameDimensions.x;

        if (breakpointWidth > width) {
            this.zoomLevel = width / breakpointWidth;
            this.panValue.x = ((this.zoomLevel * breakpointWidth * 0.5) - (width * 0.5)) | 0;
            this.panValue.y = this.baseYOffset;
        }

        this.zoom(0);
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
        //todo swap tool based on layout type of parent of selection
        // this.currentTool = new SceneRectTool(this);
        this.panValue = new Vector2();
        this.canvas = this.getChildBySelector('canvas').getDomNode() as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        EditorRuntime.drawScene(".scene-render-root");
        EditorRuntime.updateTree.add(this);
        PIXI.utils.skipHello();
        this.stage = new PIXI.Container();
        this.pixi = new PIXI.WebGLRenderer(256, 256, {
            autoResize: true,
            antialias:true,
            transparent: true,
            view: this.getChildById('foreground-canvas').getDomNode() as HTMLCanvasElement
        });
        this.frameOutline = new PIXI.Graphics();
        this.dragThing = new PIXI.Graphics();
        this.selectionOutline = new PIXI.Graphics();
        this.scaledMousePosition = new PIXI.Graphics();
        this.stage.addChild(this.frameOutline);
        this.stage.addChild(this.dragThing);
        this.stage.addChild(this.selectionOutline);
        this.stage.addChild(this.scaledMousePosition);
        this.pixi.render(this.stage);
        this.setPreviewSize(this.currentBreakpoint);
    }

    public drawMouseScaled() {
        this.scaledMousePosition.clear();
        const relMP = EditorRuntime.getInput().getMouseRelativeToEditorElement(this.getChildById("foreground-canvas"));
        this.scaledMousePosition.lineStyle(1, 0x00FF00);
        this.scaledMousePosition.drawCircle(relMP.x * this.zoomLevel, relMP.y * this.zoomLevel, 5);
    }

    public drawDragThing() : void {
        // const input = EditorRuntime.getInput();
        // const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
        // const mouseOver = Runtime.getAppElementAtPoint(mouse);
        //
        // if (mouseOver) {
        //     //see if we are over a layout element
        //     //if we are, simulate adding this to the layout at some fixed width (20px or something smallish)
        //     //might not need to do an actual layout
        //     //might get away with just shifting elements absolutely temporarily
        //
        //     //if not in a layout element -- fill the current element
        //     //if in layout element within some gutter amount, do fancy preview
        //
        //     this.dragThing.clear();
        //     this.dragThing.beginFill(0x00FF00, 0.2);
        //     this.dragThing.lineStyle(1, 0x00FF00);
        //     const position = mouseOver.getPosition();
        //     const layout = mouseOver.getComponent(LayoutComponent);
        //     if (layout) {
        //
        //     }
        //     else {
        //         //todo lerp this for sexiness
        //         this.dragThing.drawRect(
        //             position.x,
        //             position.y - 1,
        //             mouseOver.getWidth(),
        //             mouseOver.getHeight()
        //         );
        //     }
        // }
        // else {
        //     this.dragThing.clear();
        //     this.dragThing.beginFill(0x00FF00, 0.2);
        //     this.dragThing.lineStyle(1, 0x00FF00);
        //     this.dragThing.drawRect(mouse.x - 50, mouse.y - 25, 100, 50);
        // }
        //
        // this.paintScene();
    }

    private drawFrameOutline() : void {
        this.frameOutline.clear();
        this.frameOutline.lineStyle(2, 0xFF00CD);
        this.frameOutline.drawRect(
            0, //this.panValue.x,
            0, //this.panValue.y - 1,
            this.frameDimensions.x,
            this.frameDimensions.y
        );
    }

    public drawSelection() : void {
        // this.selectionOutline.clear();
        // const selection = EditorRuntime.getSelection();
        // if (!selection) return;
        //
        // const position = selection.getLocalPosition();
        // const w = selection.getWidth();
        // const h = selection.getHeight();
        //
        // this.selectionOutline.lineStyle(1, 0xFFFFFFFF);
        // this.selectionOutline.rotation = selection.getRotation();
        //
        // this.selectionOutline.lineStyle(1, 0x000000);
        // this.selectionOutline.beginFill(0x87b0f2);
        // this.selectionOutline.drawCircle(position.x, position.y, 5);
        // this.selectionOutline.drawCircle(position.x + w, position.y, 5);
        // this.selectionOutline.drawCircle(position.x + w, position.y + h, 5);
        // this.selectionOutline.drawCircle(position.x, position.y + h, 5);
        //
        // this.selectionOutline.drawCircle(position.x + (w * 0.5), position.y, 5);
        // this.selectionOutline.drawCircle(position.x + w, position.y + ( 0.5 * h), 5);
        // this.selectionOutline.drawCircle(position.x, position.y + (0.5 * h), 5);
        // this.selectionOutline.drawCircle(position.x + (w * 0.5), position.y + h, 5);
        //
        // this.selectionOutline.endFill();
        // const parent = selection.getParent();
        // let parentPosition : Vector2 = null;
        // if (parent) {
        //     parentPosition = selection.getParent().getPosition();
        // }
        // else {
        //     parentPosition = selection.getPosition();
        // }
        //this.selectionOutline.position.set(parentPosition.x, parentPosition.y);
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <SceneMetaBar/>,
            <canvas x-id="background-canvas" class="overlay-canvas"/>,
            <div x-child-root class="scene-render-root"/>,
            <canvas x-id="foreground-canvas" class="overlay-canvas"/>,
        ]
    }

    @DragAction.MouseEnter(PrefabDragAction)
    public handleAssetDragEnter() : void {
        EditorRuntime.setCursor("-webkit-grabbing");
    }

    @DragAction.MouseOver(PrefabDragAction)
    public handleAssetDragHover() : void {
        this.drawDragThing();
    }

    @DragAction.MouseExit(PrefabDragAction)
    public handleAssetDragExit() : void {
        EditorRuntime.setCursor("default");
        this.dragThing.clear();
        this.paintScene();
    }

    @DragAction.Drop(PrefabDragAction)
    public handleAssetDrop(action : PrefabDragAction) : void {
        const input = EditorRuntime.getInput();
        const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
        const mouseOver = Runtime.getAppElementAtPoint(mouse);
        const appElement = action.template.create();
        if (mouseOver) {
            appElement.setParent(mouseOver);
            appElement.setPositionValues(0, 0, Space.Local);
            appElement.setDimensions(mouseOver.getWidth(), mouseOver.getHeight());
        }
        else {
            appElement.setParent(AppElement.Root);
            //todo handle pan value
            appElement.setPositionValues(
                mouse.x - 50,
                mouse.y - 25
            );
            appElement.setDimensions(100, 50);
        }
        EditorRuntime.select(appElement);
        this.dragThing.clear();
        this.paintScene();
    }

}
//
// createStyleSheet(`
// <style>
//
// .scene-window {
//     overflow:hidden;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     position: relative;
// }
//
// .scene-render-root {
//     position: relative;
// }
//
// .overlay-canvas {
//     position: absolute;
//     top:21px; /*position under meta bar */
//     left:0;
// }
//
// </style>`);