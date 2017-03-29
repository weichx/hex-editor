import {ShapeContainer} from "../pixi/shape_container";
import {Triangle} from "../pixi/triangle";
import {Circle} from "../pixi/circle";
import {Vector2} from "../runtime/vector2";
import {AppElement, Space} from "../runtime/app_element";
import {MathUtil} from "../math_util";
import {Shape} from "../pixi/shape";
import {Color} from "../runtime/color";
import {EditorRuntimeImplementation} from "../editor/editor_runtime";

export class AnchorFlower extends ShapeContainer {

    protected gfx : PIXI.Graphics;
    protected bottomLeft : Triangle;
    protected bottomRight : Triangle;
    protected topLeft : Triangle;
    protected topRight : Triangle;
    protected center : Circle;
    private appElement : AppElement;
    private activeChild : Shape;
    private dragging : boolean;

    constructor() {
        super();
        const p0 = new Vector2();
        const p1 = new Vector2(-5, 15);
        const p2 = new Vector2(5, 15);
        this.bottomRight = new Triangle(p0, p1, p2, this);
        this.bottomLeft = new Triangle(p0, p1, p2, this);
        this.topLeft = new Triangle(p0, p1, p2, this);
        this.topRight = new Triangle(p0, p1, p2, this);
        this.center = new Circle(p0, 5, this);
        this.bottomLeft.rotate(MathUtil.PiOver4);
        this.bottomRight.rotate(-MathUtil.PiOver4);
        this.topLeft.rotate(MathUtil.PiOver2 + MathUtil.PiOver4);
        this.topRight.rotate(-MathUtil.PiOver2 - MathUtil.PiOver4);
        this.appElement = null;
        this.activeChild = null;
        this.gfx = new PIXI.Graphics();
    }

    public startDrag() : void {
        this.dragging = true;
    }

    public update() : void {

        this.appElement = EditorRuntime.getSelection();
        if(!this.appElement) return;

        this.setPosition(this.appElement.getParent().getPosition(Vector2.scratch0));
        if(this.dragging) {
            const delta = EditorRuntime.getInput().getMouseDelta(Vector2.scratch0);
            if (this.activeChild === this.topLeft) {
                this.setFromRawAnchors(delta.x, delta.y, 0, 0);
            }
            else if (this.activeChild === this.topRight) {
                this.setFromRawAnchors(0, delta.y, delta.x, 0);
            }
            else if (this.activeChild === this.bottomLeft) {
                this.setFromRawAnchors(delta.x, 0, 0, delta.y);
            }
            else if (this.activeChild === this.bottomRight) {
                this.setFromRawAnchors(0, 0, delta.x, delta.y);
            }
            else if (this.activeChild === this.center) {
                this.setFromRawAnchors(delta.x, delta.y, 0, 0, true);
            }
        }
        else {
            this.setFromRawAnchors(0, 0, 0, 0);
        }
    }

    public endDrag() : void {
        this.dragging = false;
    }

    public getGfx() : PIXI.Graphics {
        return this.gfx;
    }

    public render() {
        if(!this.appElement) return;
        this.center.setLineColor(this.activeChild === this.center ? Color.Green : Color.Red);
        this.topLeft.setLineColor(this.activeChild === this.topLeft ? Color.Green : Color.Red);
        this.topRight.setLineColor(this.activeChild === this.topRight ? Color.Green : Color.Red);
        this.bottomLeft.setLineColor(this.activeChild === this.bottomLeft ? Color.Green : Color.Red);
        this.bottomRight.setLineColor(this.activeChild === this.bottomRight ? Color.Green : Color.Red);
        this.gfx.clear();
        super.render(this.gfx);
    }

    public setAppElement(appElement : AppElement) {
        this.appElement = appElement;
    }

    public hitTest(point : Vector2) : boolean {
        this.activeChild = this.internalHitTest(point);
        return Boolean(this.activeChild);
    }

    private internalHitTest(point : Vector2) {
        if (this.center.containsPoint(point)) return this.center;
        if (this.topLeft.containsPoint(point)) return this.topLeft;
        if (this.topRight.containsPoint(point)) return this.topRight;
        if (this.bottomLeft.containsPoint(point)) return this.bottomLeft;
        if (this.bottomRight.containsPoint(point)) return this.bottomRight;
        return null;
    }

    private setFromRawAnchors(deltaMinX : number, deltaMinY : number, deltaMaxX : number, deltaMaxY : number, center = false) {
        let width = Math.max(1, this.appElement.getParent().getScaledWidth());
        let height = Math.max(1, this.appElement.getParent().getScaledHeight());
        let anchorMin = this.appElement.anchorMin;
        let anchorMax = this.appElement.anchorMax;
        const rawAnchorMin = Vector2.scratch0.set(anchorMin.x * width, anchorMin.y * height);
        const rawAnchorMax = Vector2.scratch1.set(anchorMax.x * width, anchorMax.y * height);
        if (center) {
            rawAnchorMin.x = MathUtil.clamp(rawAnchorMin.x + deltaMinX, 0, width);
            rawAnchorMin.y = MathUtil.clamp(rawAnchorMin.y + deltaMinY, 0, height);
            rawAnchorMax.x = rawAnchorMin.x;
            rawAnchorMax.y = rawAnchorMin.y;
        }
        else {
            rawAnchorMin.x = MathUtil.clamp(rawAnchorMin.x + deltaMinX, 0, rawAnchorMax.x);
            rawAnchorMin.y = MathUtil.clamp(rawAnchorMin.y + deltaMinY, 0, rawAnchorMax.y);
            rawAnchorMax.x = MathUtil.clamp(rawAnchorMax.x + deltaMaxX, rawAnchorMin.x, width);
            rawAnchorMax.y = MathUtil.clamp(rawAnchorMax.y + deltaMaxY, rawAnchorMin.y, height);
        }
        this.topLeft.setPositionValues(rawAnchorMin.x, rawAnchorMin.y, Space.Local);
        this.topRight.setPositionValues(rawAnchorMax.x, rawAnchorMin.y, Space.Local);
        this.bottomLeft.setPositionValues(rawAnchorMin.x, rawAnchorMax.y, Space.Local);
        this.bottomRight.setPositionValues(rawAnchorMax.x, rawAnchorMax.y, Space.Local);
        this.center.setPositionValues(rawAnchorMin.x, rawAnchorMin.y, Space.Local);
        anchorMax.x = rawAnchorMax.x / width;
        anchorMax.y = rawAnchorMax.y / height;
        anchorMin.x = rawAnchorMin.x / width;
        anchorMin.y = rawAnchorMin.y / height;
        this.center.isEnabled = anchorMin.equals(anchorMax);
        //update anchor
    }

}