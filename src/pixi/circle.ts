import {Shape} from "./shape";
import {PixiStyle} from "./pixi_style";

export class Circle extends Shape {

    public radius : number;

    constructor(center : IVector2, radius : number, style : PixiStyle = null) {
        super(style);
        this.position.set(center.x, center.y);
        this.radius = radius;
        this.points.push(this.position);
    }

    public render(gfx : PIXI.Graphics) : void {

        if(this.style) {
            gfx.lineStyle(this.style.lineWidth, this.style.getLineColor(), this.style.getLineAlpha());
            if(this.style.fillColor) {
                gfx.beginFill(this.style.getFillColor());
                gfx.drawCircle(this.position.x, this.position.y, this.radius);
                gfx.endFill();
            }
        }
        else {
            gfx.drawCircle(this.position.x, this.position.y, this.radius);
        }
    }

    public containsPoint(point : IVector2) : boolean {
        return this.position.distanceToSquared(point) < this.radius * this.radius;
    }

}