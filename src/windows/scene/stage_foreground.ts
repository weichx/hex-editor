import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {Vector2} from "../../runtime/vector2";
import {AngleUnit, MathUtil} from "../../math_util";
import {Matrix3x3} from "../../runtime/matrix3x3";

export class StageForeground extends EditorHTMLElement<any> {

    protected stage : PIXI.Container;
    protected renderer : PIXI.WebGLRenderer;
    protected htmlNode : HTMLCanvasElement;
    protected selectionOutline : PIXI.Graphics;
    protected selectionContainer : PIXI.Container;

    protected getDomData() {
        return { tagName: "canvas", classList: "overlay-canvas" }
    }

    public onRendered() {
        this.stage = new PIXI.Container();
        this.selectionContainer = this.stage.addChild(new PIXI.Container());
        this.selectionOutline = this.selectionContainer.addChild(new PIXI.Graphics());
        this.renderer = new PIXI.WebGLRenderer(256, 256, {
            autoResize: true,
            antialias: true,
            transparent: true,
            view: this.htmlNode
        });
    }

    public paint(width : number, height : number) : void {
        if (this.renderer.width !== width || this.renderer.height !== height) {
            this.renderer.resize(width, height);
        }
        this.drawSelection();
        this.renderer.render(this.stage);
    }

    private drawSelection() {
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
        this.selectionOutline.lineStyle(1, 0xFF00CD);
        this.selectionOutline.arc(aabb.centerX, aabb.centerY, aabb.outerRadius, 0, MathUtil.TwoPi);
        const input = EditorRuntime.getInput();
        const mouse = input.getMouseRelativeToEditorElement(this);
        const dist = aabb.center.clone().subVector(mouse).length();
        if(dist < aabb.outerRadius + 5 && dist > aabb.outerRadius - 5) {
            this.selectionOutline.beginFill(0xFF0000);
            this.selectionOutline.drawCircle(aabb.centerX, aabb.centerY, 5);
            this.selectionOutline.endFill();
        }
    }

}