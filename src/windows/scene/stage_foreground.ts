import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {MathUtil} from "../../math_util";
import {Vector2} from "../../runtime/vector2";
import {Triangle} from "../../pixi/triangle";
import {Shape} from "../../pixi/shape";
import {ShapeContainer} from "../../pixi/shape_container";

export class StageForeground extends EditorHTMLElement<any> {

    protected stage : PIXI.Container;
    protected renderer : PIXI.WebGLRenderer;
    protected htmlNode : HTMLCanvasElement;
    protected selectionOutline : PIXI.Graphics;
    protected selectionContainer : PIXI.Container;
    protected powerFlower : Shape;

    protected getDomData() {
        return { tagName: "canvas", classList: "overlay-canvas" }
    }

    public onRendered() {
        this.powerFlower = new ShapeContainer();
        var rotation = 0;
        for(let i = 0; i < 8; i++) {
            const p0 = new Vector2();
            const p1 = new Vector2(-5, 15);
            const p2 = new Vector2(5, 15);
            const tri = new Triangle(p0, p1, p2);
            tri.rotate(rotation);
            rotation += MathUtil.PiOver4;
            tri.setParent(this.powerFlower);
        }
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
        this.powerFlower.setPosition(selection.getPosition(Vector2.scratch0));
        this.powerFlower.render(this.selectionOutline);

        // this.selectionOutline.lineStyle(1, 0xFF00CD);
        // this.selectionOutline.drawRect(aabb.x, aabb.y, aabb.width, aabb.height);
        //
        // this.selectionOutline.beginFill(0x87b0f2);
        // const circle = new Circle(boundingBox.topRight, circleSize * 2);
        // const container = new Transformable();
        // circle.setParent(container);
        // circle.render(this.selectionOutline);
        //
        // // this.selectionOutline.drawCircle(boundingBox.topRight.x, boundingBox.topRight.y, circleSize);
        // this.selectionOutline.drawCircle(boundingBox.bottomRight.x, boundingBox.bottomRight.y, circleSize);
        // this.selectionOutline.drawCircle(boundingBox.bottomLeft.x, boundingBox.bottomLeft.y, circleSize);
        //
        // this.selectionOutline.endFill();
        //
        // this.selectionOutline.beginFill(0xFF0000);
        // this.selectionOutline.drawCircle(boundingBox.topLeft.x, boundingBox.topLeft.y, circleSize);
        // this.selectionOutline.endFill();
        //
        // this.selectionOutline.lineStyle(1, 0xFF00CD);
        // this.selectionOutline.arc(aabb.centerX, aabb.centerY, aabb.outerRadius, 0, MathUtil.TwoPi);
        // const input = EditorRuntime.getInput();
        // const mouse = input.getMouseRelativeToEditorElement(this);
        // const dist = aabb.center.clone().subVector(mouse).length();
        // if (dist < aabb.outerRadius + 5 && dist > aabb.outerRadius - 5) {
        //     this.selectionOutline.beginFill(0xFF0000);
        //     this.selectionOutline.drawCircle(aabb.centerX, aabb.centerY, 5);
        //     this.selectionOutline.endFill();
        // }
        // this.selectionOutline.beginFill(0xFF0000);

    }

}