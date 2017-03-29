import {Shape} from "./shape";
import {PixiStyle} from "./pixi_style";
import {Transformable} from "../runtime/transformable";
import {Vector2} from "../runtime/vector2";

export class Circle extends Shape {

    public radius : number;

    constructor(center : IVector2, radius : number, parent : Transformable = null, style : PixiStyle = null) {
        super(parent, style);
        this.position.set(center.x, center.y);
        this.radius = radius;
        this.points.push(this.position);
    }

    public render(gfx : PIXI.Graphics) : void {
        if (!this.isEnabled) return;
        gfx.lineStyle(this.style.lineWidth, this.style.getLineColor(), this.style.getLineAlpha());
        gfx.beginFill(this.style.getFillColor());
        const position = this.getPosition(Vector2.scratch0);
        gfx.drawCircle(position.x, position.y, this.radius);
        gfx.endFill();
    }

    public containsPoint(point : IVector2) : boolean {
        if (!this.isEnabled) return false;
        return this.getPosition(Vector2.scratch0).distanceToSquared(point) <= this.radius * this.radius;
    }

}