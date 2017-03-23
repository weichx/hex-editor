import {EditorWindowElement, IWindowAttrs} from "../../chrome/editor_window_element";
import {SceneMetaBar} from "./scene_meta_bar";
import {StageBackground} from "./stage_background";
import {Breakpoint, BreakpointType} from "../../runtime/breakpoint";
import {AppElement} from "../../runtime/app_element";
import {Vector2} from "../../runtime/vector2";
import {StageForeground} from "./stage_foreground";
import {clamp} from "../../util";
import {SceneTool} from "./scene_tool";
import {SceneRectTool} from "./rect_tool";

export class StageWindow extends EditorWindowElement<IWindowAttrs> {

    private width : number;
    private height : number;
    public zoomLevel : number;
    private stageBackground : StageBackground;
    private stageForeground : StageForeground;
    private currentBreakpoint : BreakpointType;
    private frameSize : Vector2;
    private panValue : Vector2;
    private currentTool : SceneTool;

    public onCreated() {
        PIXI.utils.skipHello();
        this.zoomLevel = 1;
        this.frameSize = new Vector2();
        this.panValue = new Vector2();
        this.currentBreakpoint = BreakpointType.Mobile;
        this.currentTool = new SceneRectTool(this);
    }

    public onUpdated() {
        const input = EditorRuntime.getInput();
        if (input.isMouseInEditorElement(this.getChildRoot())) {
            this.zoom(input.getMouseWheelDelta().y);
        }

        //todo there is probably a way not to dirty check this
        const clientRect = this.getChildRoot().getDomNode().getBoundingClientRect();
        if (clientRect.width !== this.width || clientRect.height !== this.height) {
            this.width = clientRect.width;
            this.height = clientRect.height;
            this.setPreviewSize(this.currentBreakpoint);
            this.stageBackground.paint(this.width, this.height);
        }
        this.currentTool.update();
        this.stageForeground.paint(this.width, this.height);
    }

    public onRendered() {
        const container = this.getChildById("container");
        this.stageBackground = container.getChildByType(StageBackground);
        this.stageForeground = container.getChildByType(StageForeground);
        EditorRuntime.updateTree.add(this);
        EditorRuntime.drawScene(".scene-render-root");
    }

    public createInitialStructure() : JSXElement {
        return [
            <SceneMetaBar/>,
            <div x-id="container" class="stage-container">
                <StageBackground/>
                <div x-child-root class="scene-render-root"/>
                <StageForeground/>
            </div>
        ]
    }

    public pan(delta : Vector2) : void {
        if (delta.isZero()) return;
        this.panValue.addVector(delta);
        AppElement.Root.setPosition(this.panValue);
        AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y);
    }

    public getBreakpoint() : BreakpointType {
        return this.currentBreakpoint;
    }

    public setPreviewSize(breakpointType : BreakpointType) : void {
        this.currentBreakpoint = breakpointType;
        this.frameSize = Breakpoint.getDimensions(breakpointType);
        this.panValue.x = ((this.width * 0.5) - (this.frameSize.x * 0.5)) | 0;
        this.panValue.y = 1;

        AppElement.Root.setPosition(this.panValue);
        AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y);

    }

    public getStageMousePosition() {
        const mouse = EditorRuntime.getInput().getMouseRelativeToEditorElement(this);
        mouse.y -= 21; //bullshit css crap with sizing of meta-bar
        return mouse;
    }

    private zoom(zoomDelta : number) : void {

        this.zoomLevel -= 0.05 * zoomDelta;
        this.zoomLevel = clamp(this.zoomLevel, 0.1, 4);

        if (zoomDelta !== 0) {
            // AppElement.Root.setPivot(0.5, 0.5);
            AppElement.Root.setScale(new Vector2(this.zoomLevel, this.zoomLevel));
        }

    }
}

createStyleSheet(`<style>
        
.stage-window {
    overflow:hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.stage-container {
    width: 100%;
    height: calc(100% - 21px);
    position:relative;
}

.overlay-canvas {
    position: absolute;
    top:0;
    left:0;
}

</style>`);