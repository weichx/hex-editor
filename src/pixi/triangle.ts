import {Shape} from "./shape";
import {Vector2} from "../runtime/vector2";
import {PixiStyle} from "./pixi_style";
import {Polygon} from "./polygon";

export class Triangle extends Shape {

    constructor(p1 : Vector2, p2 : Vector2, p3 : Vector2, style? : PixiStyle) {
        super(style);
        this.points.push(p1, p2, p3);
    }

    public render(gfx : PIXI.Graphics) : void {
        gfx.beginFill(this.style.getFillColor());
        const position = this.getPosition(Vector2.scratch0);
        const rotation = this.rotation.getRotationZ();
        const p1 = this.points[0].clone(Vector2.scratch1).addValues(0, 10).rotateAround(rotation, Vector2.Zero).addVector(position);
        const p2 = this.points[1].clone(Vector2.scratch2).addValues(0, 10).rotateAround(rotation, Vector2.Zero).addVector(position);
        const p3 = this.points[2].clone(Vector2.scratch3).addValues(0, 10).rotateAround(rotation, Vector2.Zero).addVector(position);
        gfx.lineStyle(1, this.style.getLineColor());
        gfx.moveTo(p1.x, p1.y);
        gfx.lineTo(p2.x, p2.y);
        gfx.lineTo(p3.x, p3.y);
        gfx.lineTo(p1.x, p1.y);
        gfx.endFill();
    }

    public containsPoint(point : IVector2) : boolean {
        return Polygon.contains(this.points, point);
    }

}