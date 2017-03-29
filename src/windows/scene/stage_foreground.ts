import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {StateChart, StateChartBuilder} from "../../state_chart/state_chart";
import {Vector2} from "../../runtime/vector2";
import {AppElement, Space} from "../../runtime/app_element";
import {BoundingBox} from "../../runtime/bounding_box";
import {distanceTestPoint, hitTestLine2} from "../../util";
import {LengthUnit} from "../../runtime/components/layout/layout";
import {MouseButtonState} from "../../runtime/enums/e_mouse_state";
import {AnchorFlower} from "../../renderers/anchor_flower";

export class StageForeground extends EditorHTMLElement<any> {

    protected stage : PIXI.Container;
    protected renderer : PIXI.WebGLRenderer;
    protected htmlNode : HTMLCanvasElement;
    protected selectionOutline : PIXI.Graphics;
    protected selectionContainer : PIXI.Container;
    protected anchorFlower : AnchorFlower;
    protected stateChart : StateChart;

    protected getDomData() {
        return { tagName: "canvas", classList: "overlay-canvas" }
    }

    public onUpdated() {
        this.anchorFlower.update();
        this.stateChart.update();
    }

    public onRendered() {
        this.stage = new PIXI.Container();
        this.anchorFlower = new AnchorFlower();
        this.selectionContainer = this.stage.addChild(new PIXI.Container());
        this.selectionOutline = this.selectionContainer.addChild(new PIXI.Graphics());
        this.selectionContainer.addChild(this.anchorFlower.getGfx());
        this.stateChart = this.getStateChart();
        EditorRuntime.updateTree.add(this);
        this.renderer = new PIXI.WebGLRenderer(256, 256, {
            autoResize: true,
            antialias: true,
            transparent: true,
            view: this.htmlNode
        });
    }

    public getGfxRoot() : PIXI.Container {
        return this.stage;
    }

    public paint(width : number, height : number) : void {
        if (this.renderer.width !== width || this.renderer.height !== height) {
            this.renderer.resize(width, height);
        }
        this.anchorFlower.render();
        this.renderer.render(this.stage);
    }

    private hitTestEdge(point : Vector2, bounds : BoundingBox) : SelectionEdge {

        const topLeft = bounds.topLeft;
        const topRight = bounds.topRight;
        const bottomRight = bounds.bottomRight;
        const bottomLeft = bounds.bottomLeft;

        if (distanceTestPoint(topLeft, point, 5)) return SelectionEdge.TopLeft;
        if (distanceTestPoint(topRight, point, 5)) return SelectionEdge.TopRight;
        if (distanceTestPoint(bottomLeft, point, 5)) return SelectionEdge.BottomLeft;
        if (distanceTestPoint(bottomRight, point, 5)) return SelectionEdge.BottomRight;

        if (hitTestLine2(topLeft, topRight, point, 3)) return SelectionEdge.Top;
        if (hitTestLine2(topLeft, bottomLeft, point, 3)) return SelectionEdge.Left;
        if (hitTestLine2(bottomLeft, bottomRight, point, 3)) return SelectionEdge.Bottom;
        if (hitTestLine2(topRight, bottomRight, point, 3)) return SelectionEdge.Right;

        if (bounds.containsPoint(point)) return SelectionEdge.Center;

        return SelectionEdge.None;
    }

    private updateDragSide(dragSide : SelectionEdge, delta : Vector2, appElement : AppElement) {
        const p = appElement.getPosition();
        let width = appElement.getWidth();
        let height = appElement.getHeight();
        if ((dragSide & SelectionEdge.Top) !== 0) {
            p.y += delta.y;
            height -= delta.y;
        }
        else if ((dragSide & SelectionEdge.Bottom) !== 0) {
            height += delta.y;
        }
        if ((dragSide & SelectionEdge.Left) !== 0) {
            p.x += delta.x;
            width -= delta.x;
        }
        else if ((dragSide & SelectionEdge.Right) !== 0) {
            width += delta.x;
        }
        if (width < 1) width = 1;
        if (height < 1) height = 1;
        if (height === 1 && delta.y > 0) p.y -= delta.y;
        if (width === 1 && delta.x > 0) p.x -= delta.x;
        appElement.setPositionValues(p.x, p.y, Space.World, true);
        appElement.setDimensions(width, height, LengthUnit.Pixel);
    }

    private paintSelectionEdges() {
        this.selectionOutline.clear();
        const selection = EditorRuntime.getSelection();
        if (!selection) return;

        const circleSize = 4;
        const boundingBox = selection.getBoundingBox();
        const aabb = selection.getAxisAlignedBoundingBox();

        this.selectionOutline.lineStyle(1, 0xFF00CD);
        this.selectionOutline.drawRect(aabb.x, aabb.y, aabb.width, aabb.height);

        this.selectionOutline.beginFill(0x87b0f2);

        this.selectionOutline.drawCircle(boundingBox.topRight.x, boundingBox.topRight.y, circleSize);
        this.selectionOutline.drawCircle(boundingBox.bottomRight.x, boundingBox.bottomRight.y, circleSize);
        this.selectionOutline.drawCircle(boundingBox.bottomLeft.x, boundingBox.bottomLeft.y, circleSize);

        this.selectionOutline.endFill();

        this.selectionOutline.beginFill(0xFF0000);
        this.selectionOutline.drawCircle(boundingBox.topLeft.x, boundingBox.topLeft.y, circleSize);
        this.selectionOutline.endFill();
    }

    private setHoverCursor(dragSide : SelectionEdge) {
        switch (dragSide) {
            case SelectionEdge.Top:
            case SelectionEdge.Bottom:
                EditorRuntime.setCursor('ns-resize');
                break;
            case SelectionEdge.Left:
            case SelectionEdge.Right:
                EditorRuntime.setCursor('ew-resize');
                break;
            case SelectionEdge.TopRight:
            case SelectionEdge.BottomLeft:
                EditorRuntime.setCursor('nesw-resize');
                break;
            case SelectionEdge.TopLeft:
            case SelectionEdge.BottomRight:
                EditorRuntime.setCursor('nwse-resize');
                break;
            default:
                EditorRuntime.setCursor('default');
                break;
        }
    }

    private getStateChart() {

        if (this.stateChart) return this.stateChart;


        const Evt_DragEdge = StateChart.createEvent();
        const Evt_DragAnchor = StateChart.createEvent();
        const Evt_StartPanning = StateChart.createEvent();
        const Evt_MouseUp = StateChart.createEvent<Vector2>();
        const Evt_MouseDown = StateChart.createEvent<Vector2>();
        const Evt_MouseDownOverSelection = StateChart.createEvent();
        const Evt_MouseDownOutsideSelection = StateChart.createEvent();
        const Evt_MouseDownOverSelectionEdge = StateChart.createEvent();
        const Evt_Selection = StateChart.createEvent();
        const Evt_SelectionCleared = StateChart.createEvent();

        return new StateChart((builder : StateChartBuilder) => {
            const input = EditorRuntime.getInput();
            const { state, event, transition, enter, exit, update, init, trigger, isInState } = builder.toDSL();
            let selection : AppElement = null;
            let anchorHit : boolean = false;
            let edgeHit : SelectionEdge = SelectionEdge.None;
            let mouse : Vector2;

            update(() => {
                const activeSelection = EditorRuntime.getSelection();
                mouse = input.getMouseRelativeToEditorElement(this);
                if (activeSelection !== selection) {
                    if (activeSelection) {
                        selection = activeSelection;
                        trigger(Evt_Selection, selection);
                    }
                    else {
                        trigger(Evt_SelectionCleared, selection);
                    }
                }
                if (input.isMouseUpThisFrame()) trigger(Evt_MouseUp, mouse);
                if (input.isMouseDownThisFrame()) trigger(Evt_MouseDown, mouse);
            });

            state("selection.none", () => {
                transition(Evt_Selection, "selection");
            });

            state("selection", () => {

                state.parallel("selection-single", () => {

                    state("manipulating", () => {

                        state("manipulating.none", () => {

                            update(() => {
                                if (!selection) return;
                                edgeHit = this.hitTestEdge(mouse, selection.getBoundingBox());
                                anchorHit = this.anchorFlower.hitTest(mouse);
                                this.paintSelectionEdges();
                                if(!anchorHit) this.setHoverCursor(edgeHit);
                            });

                            event(Evt_MouseDown, (mouse : Vector2) => {
                                if (input.isMouseButtonDown(MouseButtonState.Right)) {
                                    return trigger(Evt_StartPanning, null);
                                }
                                if (anchorHit) {
                                    return trigger(Evt_DragAnchor, anchorHit);
                                }
                                if (edgeHit === SelectionEdge.Center) {
                                    return trigger(Evt_MouseDownOverSelection, edgeHit)
                                }
                                if (edgeHit !== SelectionEdge.None) {
                                    return trigger(Evt_MouseDownOverSelectionEdge, edgeHit);
                                }
                                trigger(Evt_MouseDownOutsideSelection, null);
                            });

                            transition(Evt_StartPanning, "panning");
                            transition(Evt_MouseDownOverSelection, "translating");
                            transition(Evt_MouseDownOverSelectionEdge, "resizing");
                            transition(Evt_DragAnchor, "drag-anchors");

                        });

                        state("panning", () => {

                            update(() => {
                                const position = AppElement.Root.getPosition(Vector2.scratch0);
                                AppElement.Root.setPosition(position.addVector(input.getMouseDelta(Vector2.scratch1)));
                            });

                            transition(Evt_MouseUp, "manipulating.none")

                        });

                        state("translating", () => {

                            update(() => {
                                const selection = EditorRuntime.getSelection();
                                const delta = input.getMouseDelta(Vector2.scratch2);
                                const position = selection.getPosition(Vector2.scratch0);
                                position.addVector(delta);
                                selection.setPositionValues(position.x, position.y, Space.World);
                                this.paintSelectionEdges();
                            });

                            transition(Evt_MouseUp, "manipulating.none");
                        });

                        state("manipulating-rotating", () => {});

                        state("resizing", () => {

                            enter(() => {
                                this.setHoverCursor(edgeHit);
                            });

                            update(() => {
                                const delta = input.getMouseDelta(Vector2.scratch2);
                                this.updateDragSide(edgeHit, delta, selection);
                                this.paintSelectionEdges();
                            });

                            exit(() => {
                                this.setHoverCursor(SelectionEdge.None);
                            });

                            transition(Evt_MouseUp, "manipulating.none")

                        });

                        state("drag-anchors", () => {

                            enter(() => {
                                this.anchorFlower.startDrag();
                            });

                            exit(() => {
                                this.anchorFlower.endDrag();
                            });

                            transition(Evt_MouseUp, "manipulating.none");

                        });

                        state("manipulating-tethers", () => {});

                    });

                });

                transition(Evt_SelectionCleared, "selection.none");
            });

        });
    }

}

enum SelectionEdge {
    None = 1 << 0,
    Center = 1 << 1,
    Top = 1 << 2,
    Left = 1 << 3,
    Right = 1 << 4,
    Bottom = 1 << 5,
    TopRight = Top | Right,
    TopLeft = Top | Left,
    BottomRight = Bottom | Right,
    BottomLeft = Bottom | Left
}

