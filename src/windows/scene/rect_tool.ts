import {SceneTool} from "./scene_tool";
import {distanceTestPoint, hitTestLine, hitTestLine2} from "../../util";
import {AppElement, Space} from "../../runtime/app_element";
import {Vector2} from "../../runtime/vector2";
import {BoundingBox} from "../../runtime/bounding_box";
import {onFileDragLeave} from "../../editor_element/editor_element_annotations";
import {MathUtil} from "../../math_util";
import {Matrix3x3} from "../../runtime/matrix3x3";

enum DragSide {
    None, Center, Top, Left, Right, Bottom, TopRight, TopLeft, BottomRight, BottomLeft
}

export class SceneRectTool extends SceneTool {

    private draggedSide : DragSide = DragSide.None;
    private panning : boolean = false;

    public update() : void {

        const input = EditorRuntime.getInput();
        const selection = EditorRuntime.getSelection();
        const mouse = this.stageWindow.getStageMousePosition();
        const inElement = input.isMouseInEditorElement(this.stageBodyRoot);

        if (selection) {

            const rect = selection.getBoundingBox();

            if (input.isMouseDownThisFrame() && inElement) {

                this.draggedSide = SceneRectTool.hitTestDragSide(mouse, rect);
                if (this.draggedSide === DragSide.None) {
                    const element = EditorRuntime.getAppElementAtPoint(mouse);
                    if (element && element !== AppElement.Root && element !== selection) {
                        EditorRuntime.select(element);
                    }
                    else {
                        this.panning = true;
                    }
                }
                return;
            }
            else if (input.isMouseDown()) {
                if (this.draggedSide !== DragSide.None) {
                    this.updateDragSide(input.getMouseDelta(), selection);
                }
                else if (this.panning) {
                    this.stageWindow.pan(input.getMouseDelta());
                }
            }
            else if (input.isMouseUp()) {
                this.draggedSide = DragSide.None;
                this.panning = false;
            }

            if (this.draggedSide === DragSide.None) {
                this.setHoverCursor(SceneRectTool.hitTestDragSide(mouse, rect));
            }

        }
        else {
            EditorRuntime.setCursor('default');
            this.draggedSide = DragSide.None;

            if (!inElement || input.isMouseUp()) {
                this.panning = false;
                return;
            }

            if (input.isMouseDownThisFrame()) {
                this.panning = true;
            }

            if (this.panning) {
                this.stageWindow.pan(input.getMouseDelta());
            }
        }
    }

    private setHoverCursor(dragSide : DragSide) {
        switch (dragSide) {
            case DragSide.Top:
            case DragSide.Bottom:
                EditorRuntime.setCursor('ns-resize');
                break;
            case DragSide.Left:
            case DragSide.Right:
                EditorRuntime.setCursor('ew-resize');
                break;
            case DragSide.TopRight:
            case DragSide.BottomLeft:
                EditorRuntime.setCursor('nesw-resize');
                break;
            case DragSide.TopLeft:
            case DragSide.BottomRight:
                EditorRuntime.setCursor('nwse-resize');
                break;
            default:
                EditorRuntime.setCursor('default');
                break;
        }
    }

    private static hitTestDragSide(point : Vector2, bounds : BoundingBox) : DragSide {

        const topLeft = bounds.topLeft;
        const topRight = bounds.topRight;
        const bottomRight = bounds.bottomRight;
        const bottomLeft = bounds.bottomLeft;

        if (distanceTestPoint(topLeft, point, 5)) return DragSide.TopLeft;
        if (distanceTestPoint(topRight, point, 5)) return DragSide.TopRight;
        if (distanceTestPoint(bottomLeft, point, 5)) return DragSide.BottomLeft;
        if (distanceTestPoint(bottomRight, point, 5)) return DragSide.BottomRight;

        if (hitTestLine2(topLeft, topRight, point, 3)) return DragSide.Top;
        if (hitTestLine2(topLeft, bottomLeft, point, 3)) return DragSide.Left;
        if (hitTestLine2(bottomLeft, bottomRight, point, 3)) return DragSide.Bottom;
        if (hitTestLine2(topRight, bottomRight, point, 3)) return DragSide.Right;

        if (bounds.containsPoint(point)) return DragSide.Center;

        return DragSide.None;
    }

    private updateDragSide(delta : Vector2, appElement : AppElement) {
        //const p = appElement.getPosition();
        let width = appElement.getWidth();
        let height = appElement.getHeight();
        switch (this.draggedSide) {
            case DragSide.TopRight:
             //   p.y += delta.y;
                width += delta.x;
                height -= delta.y;
                break;
            case DragSide.TopLeft:
               // p.x += delta.x;
               // p.y += delta.y;
                width -= delta.x;
                height -= delta.y;
                break;
            case DragSide.BottomLeft:
            //    p.x += delta.x;
                width -= delta.x;
                height += delta.y;
                break;
            case DragSide.BottomRight:
                width += delta.x;
                height += delta.y;
                break;
            case DragSide.Top:
              //  p.y += delta.y;
                height -= delta.y;
                break;
            case DragSide.Left:
              //  p.x += delta.x;
                width -= delta.x;
                break;
            case DragSide.Right:
                width += delta.x;
                break;
            case DragSide.Bottom:
                height += delta.y;
                break;
            case DragSide.Center:
                //p.x += delta.x;
                //p.y += delta.y;
                var p = appElement.getPosition();
                // p.addInPlace(delta);
                p.x += delta.x;
                p.y += delta.y;
                // p = appElement.worldToLocal(p.addVectorNew(delta));
                appElement.setPosition(p, Space.World);
                 //appElement.setPosition(p.addVectorNew(delta), Space.World);
                break;
        }
        if (width < 1) width = 1;
        if (height < 1) height = 1;
        if (height === 1 && delta.y > 0) {
         //   p.y -= delta.y;
        }
        if (width === 1 && delta.x > 0) {
         //   p.x -= delta.x;
        }
        //appElement.setPositionValues(p.x, p.y);
        appElement.setDimensions(width, height);
    }

}