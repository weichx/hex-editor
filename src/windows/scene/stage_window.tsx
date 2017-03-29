import {EditorWindowElement, IWindowAttrs} from "../../chrome/editor_window_element";
import {SceneMetaBar} from "./scene_meta_bar";
import {StageBackground} from "./stage_background";
import {Breakpoint, BreakpointType} from "../../runtime/breakpoint";
import {AppElement, Space} from "../../runtime/app_element";
import {Vector2} from "../../runtime/vector2";
import {StageForeground} from "./stage_foreground";
import {clamp} from "../../util";
import {SceneTool} from "./scene_tool";
import {SceneRectTool} from "./rect_tool";
import {onRightClick} from "../../editor_element/editor_element_annotations";
import {getCreationMenu} from "../../menu_setup";
import {StateChart, StateChartBehavior} from "../../state_chart/state_chart";
import {PanelComponent} from "../../runtime/components/ui/panel_component";
import {BackgroundComponent} from "../../runtime/components/background_component";
import {KeyCode} from "../../runtime/enums/e_keycode";
import {DesignerRendered} from "../../editor_events/evt_designer_rendererd";
import {LengthUnit} from "../../runtime/components/layout/layout";

export class StageWindow extends EditorWindowElement<IWindowAttrs> {

    private width : number;
    private height : number;
    public zoomLevel : number;
    public stageBackground : StageBackground;
    public stageForeground : StageForeground;
    private currentBreakpoint : BreakpointType;
    private frameSize : Vector2;
    private panValue : Vector2;
    private currentTool : SceneTool;
    private stateChart : StateChart;

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

        //this.stateChart.update();
        // this.currentTool.update();
        EditorRuntime.emit(DesignerRendered, this.stageForeground.getGfxRoot(), this.getStageMousePosition());
        this.stageForeground.paint(this.width, this.height);
    }

    public onRendered() {
        const container = this.getChildById("container");
        this.stageBackground = container.getChildByType(StageBackground);
        this.stageForeground = container.getChildByType(StageForeground);
        EditorRuntime.updateTree.add(this);
        EditorRuntime.drawScene(".scene-render-root");
        this.stateChart = createStateChart(this);
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
        AppElement.Root.setPosition(new Vector2(this.panValue.x, this.panValue.y));
        AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y, LengthUnit.Pixel);
    }

    public getBreakpoint() : BreakpointType {
        return this.currentBreakpoint;
    }

    public setPreviewSize(breakpointType : BreakpointType) : void {
        this.currentBreakpoint = breakpointType;
        this.frameSize = Breakpoint.getDimensions(breakpointType);
        this.panValue.x = ((this.width * 0.5) - (this.frameSize.x * 0.5)) | 0;
        this.panValue.y = 1;

        AppElement.Root.setPosition(new Vector2(this.panValue.x, this.panValue.y));
        AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y, LengthUnit.Pixel);
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
            AppElement.Root.setScale(new Vector2(this.zoomLevel, this.zoomLevel));
        }

    }

    public drawPrimitive(selection : AppElement) {
        // this.stateChart.trigger(new Evt_PaintBox(selection));
    }

     @onRightClick
    public onContextClick() {
        // const selection = EditorRuntime.getSelection();
        // EditorRuntime.getInput().getMousePosition(Vector2.scratch0);
        // const menu = new nw.Menu();
        //
        // menu.append(new nw.MenuItem({ label: "Create", submenu: getCreationMenu(selection) }));
        // menu.append(new nw.MenuItem({ label: "Box", click: () => { this.drawPrimitive(selection) } }));
        // // menu.append(new nw.MenuItem({ label: "Destroy", click: () => this.destroyContextSelection() }));
        //
        // menu.popup(Vector2.scratch0.x, Vector2.scratch0.y);
    }
}

// class Evt_PaintBox extends StateChartEvent {
//
//     public selection : AppElement;
//
//     constructor(selection : AppElement) {
//         super();
//         this.selection = selection;
//     }
//
// }
//
// class Evt_PaintBox_Start extends StateChartEvent {}
// class Evt_PaintBox_Finish extends StateChartEvent {}
// class Evt_PaintBox_Cancel extends StateChartEvent {}

class PaintBoxBehavior extends StateChartBehavior {

    public stage : StageWindow;
    public graphic : PIXI.Graphics;

    constructor(stage : StageWindow) {
        super();
        this.stage = stage;
        this.graphic = new PIXI.Graphics();
    }

    public enter() {
        this.stage.stageForeground.getGfxRoot().addChild(this.graphic);
    }

    public update() {
        // const input = EditorRuntime.getInput();
        // const inStage = input.isMouseInEditorElement(this.stage.stageForeground);
        // this.graphic.clear();
        //
        // if (this.chart.isInState("paint-pending")) {
        //     if (inStage) {
        //         EditorRuntime.setCursor("crosshair");
        //         if (input.isMouseDownThisFrame()) {
        //             this.chart.trigger(new Evt_PaintBox_Start());
        //         }
        //     }
        //
        // }
        // else if (this.chart.isInState("paint-started")) {
        //     const md = input.getMouseDownRelativeToEditorElement(this.stage.stageForeground);
        //     const mouse = input.getMouseRelativeToEditorElement(this.stage.stageForeground);
        //     this.graphic.lineStyle(2, 0x0000FF);
        //     this.graphic.drawRect(md.x, md.y, mouse.x - md.x, mouse.y - md.y);
        //     if (input.isMouseUpThisFrame()) {
        //         const element = new AppElement("Box", EditorRuntime.getSelection());
        //         element.addComponent(PanelComponent);
        //         element.addComponent(BackgroundComponent);
        //         const minX = Math.min(mouse.x, md.x);
        //         const minY = Math.min(mouse.y, md.y);
        //         const maxX = Math.max(mouse.x, md.x);
        //         const maxY = Math.max(mouse.y, md.y);
        //         element.setPositionValues(minX, minY);
        //         element.setRotation(0, Space.World);
        //         element.setDimensions(maxX - minX, maxY - minY);
        //         this.chart.trigger(new Evt_PaintBox_Finish());
        //     }
        //     else if (input.isKeyDown(KeyCode.Escape)) {
        //         this.chart.trigger(new Evt_PaintBox_Cancel());
        //     }
        // }
    }

    public exit() {
        this.stage.stageForeground.getGfxRoot().removeChild(this.graphic);
        EditorRuntime.setCursor("default");
    }

}

function createStateChart(stage : StageWindow) {

    return new StateChart(function () {

        // state("default", function () {
        //
        // });
        //
        // state.parallel("base", function () {
        //
        //     state("selection", function () {
        //         state("selection-none");
        //         state("selection-single");
        //         state("selection-multiple");
        //     });
        //
        //     state("tool", function () {
        //
        //     });
        //
        // });
        //
        // state("paint-box", new PaintBoxBehavior(stage), function () {
        //
        //     state("paint-pending");
        //     state("paint-started");
        //
        //     event(Evt_PaintBox_Start, "paint-started");
        //     event(Evt_PaintBox_Finish, "default");
        //     event(Evt_PaintBox_Cancel, "default");
        //
        // });
        //
        // state("single-select");
        // state("multi-select");
        //
        // event(Evt_PaintBox, "paint-box");

    });

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