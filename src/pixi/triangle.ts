import {Shape} from "./shape";
import {Vector2} from "../runtime/vector2";
import {PixiStyle} from "./pixi_style";
import {Polygon} from "./polygon";
import {Transformable} from "../runtime/transformable";

const pointTransformArray = new Array<Vector2>(3);

export class Triangle extends Shape {

    constructor(p1 : Vector2, p2 : Vector2, p3 : Vector2, parent? : Transformable, style? : PixiStyle) {
        super(parent, style);
        this.points.push(p1, p2, p3);
    }

    public render(gfx : PIXI.Graphics) : void {
        if(!this.isEnabled) return;
        const fillColor = this.style.getFillColor();
        gfx.beginFill(this.style.getFillColor());
        const position = this.getPosition(Vector2.scratch0);
        const rotation = this.rotation.getRotationZ();
        const p1 = this.points[0].clone(Vector2.scratch1).rotate(rotation).addVector(position);
        const p2 = this.points[1].clone(Vector2.scratch2).rotate(rotation).addVector(position);
        const p3 = this.points[2].clone(Vector2.scratch3).rotate(rotation).addVector(position);
        gfx.lineStyle(this.style.lineWidth, this.style.getLineColor(), this.style.getLineAlpha());
        gfx.moveTo(p1.x, p1.y);
        gfx.lineTo(p2.x, p2.y);
        gfx.lineTo(p3.x, p3.y);
        gfx.lineTo(p1.x, p1.y);
        gfx.endFill();
    }

    public containsPoint(point : Vector2) : boolean {
        if(!this.isEnabled) return false;
        const rotation = this.rotation.getRotationZ();
        const position = this.getPosition(Vector2.scratch0);
        for(let i = 0; i < this.points.length; i++) {
            pointTransformArray[0] = this.points[0].clone(Vector2.scratch1).rotate(rotation).addVector(position);
            pointTransformArray[1] = this.points[1].clone(Vector2.scratch2).rotate(rotation).addVector(position);
            pointTransformArray[2] = this.points[2].clone(Vector2.scratch3).rotate(rotation).addVector(position);
        }
        return Polygon.contains(pointTransformArray, point);
    }

}