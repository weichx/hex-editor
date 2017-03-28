import {Transformable} from "../runtime/transformable";
import {PixiStyle} from "./pixi_style";
import {Vector2} from "../runtime/vector2";
import {Color} from "../runtime/color";
import {MathUtil} from "../math_util";

export abstract class Shape extends Transformable {

    public style : PixiStyle;
    public children : Array<Shape>;

    protected points : Vector2[];

    constructor(style : PixiStyle) {
        super();
        this.style = (style || PixiStyle.Inherit).clone();
        this.points = [];
    }

    public beginRender(gfx : PIXI.Graphics) : void { }

    public abstract render(gfx : PIXI.Graphics) : void;

    public finishRender(gfx : PIXI.Graphics) : void { }

    public setLineWidth(width : number) {
        width = MathUtil.clamp(width, 0.1, 100);
        this.style.lineWidth = width;
    }

    public setLineColor(color : Color) {
        this.style.lineColor = color;
    }

    public setFillColor(color : Color) {
        this.style.fillColor = color;
    }

    public setColor(color : Color) {
        this.setFillColor(color);
        this.setLineColor(color);
    }
}
