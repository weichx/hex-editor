import {SceneTool} from "./scene_tool";
import {distanceTestPoint, hitTestLine} from "../../util";
import {Rectangle} from "../../runtime/rectangle";
import {AppElement} from "../../runtime/app_element";
import {Vector2} from "../../runtime/vector2";

enum DragSide {
    None, Center, Top, Left, Right, Bottom, TopRight, TopLeft, BottomRight, BottomLeft
}

export class SceneRectTool extends SceneTool {

    private draggedSide : DragSide = DragSide.None;
    private panning : boolean = false;

    public update() : void {

        const input = EditorRuntime.getInput();
        const selection = EditorRuntime.getSelection();
        const mouse = input.getMouseRelativeToEditorElement(this.sceneBodyRoot);
        const inElement = input.isMouseInEditorElement(this.sceneBodyRoot);

        if (selection) {

            let rect = selection.getBoundingBox();

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
                    this.sceneWindow.pan(input.getMouseDelta());
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
                this.sceneWindow.pan(input.getMouseDelta());
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

    private static hitTestDragSide(point : Vector2, bounds : Rectangle) : DragSide {
        const x = bounds.x;
        const y = bounds.y;
        const xw = bounds.x + bounds.width;
        const yh = bounds.y + bounds.height;

        if (distanceTestPoint(x, y, point, 5)) return DragSide.TopLeft;
        if (distanceTestPoint(xw, y, point, 5)) return DragSide.TopRight;
        if (distanceTestPoint(x, yh, point, 5)) return DragSide.BottomLeft;
        if (distanceTestPoint(xw, yh, point, 5)) return DragSide.BottomRight;

        if (hitTestLine(x, y, xw, y, point, 3)) return DragSide.Top;
        if (hitTestLine(x, y, x, yh, point, 3)) return DragSide.Left;
        if (hitTestLine(x, yh, xw, yh, point, 3)) return DragSide.Bottom;
        if (hitTestLine(xw, y, xw, yh, point, 3)) return DragSide.Right;

        if (bounds.containsPoint(point)) return DragSide.Center;

        return DragSide.None;
    }

    private updateDragSide(delta : Vector2, appElement : AppElement) {
        //todo may want this to be Axis-Aligned
        const rect = appElement.getBoundingBox();
        switch (this.draggedSide) {
            case DragSide.TopRight:
                rect.y += delta.y;
                rect.width += delta.x;
                rect.height -= delta.y;
                break;
            case DragSide.TopLeft:
                rect.x += delta.x;
                rect.y += delta.y;
                rect.width -= delta.x;
                rect.height -= delta.y;
                break;
            case DragSide.BottomLeft:
                rect.x += delta.x;
                rect.width -= delta.x;
                rect.height += delta.y;
                break;
            case DragSide.BottomRight:
                rect.width += delta.x;
                rect.height += delta.y;
                break;
            case DragSide.Top:
                rect.y += delta.y;
                rect.height -= delta.y;
                break;
            case DragSide.Left:
                rect.x += delta.x;
                rect.width -= delta.x;
                break;
            case DragSide.Right:
                rect.width += delta.x;
                break;
            case DragSide.Bottom:
                rect.height += delta.y;
                break;
            case DragSide.Center:
                rect.x += delta.x;
                rect.y += delta.y;
                break;
        }
        if (rect.width < 1) rect.width = 1;
        if (rect.height < 1) rect.height = 1;
        if (rect.height === 1 && delta.y > 0) {
            rect.y -= delta.y;
        }
        if (rect.width === 1 && delta.x > 0) {
            rect.x -= delta.x;
        }
        appElement.setPositionValues(rect.x, rect.y);
        appElement.setDimensions(rect.width, rect.height);
    }

}