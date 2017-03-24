import {Transformable} from "../runtime/transformable";
import {PixiStyle} from "./pixi_style";
import {Vector2} from "../runtime/vector2";

export abstract class Shape extends Transformable {

    public style : PixiStyle;
    public children : Array<Shape>;

    protected points : Vector2[];

    constructor(style : PixiStyle) {
        super();
        this.style = style || PixiStyle.Inherit;
        this.points = [];
    }

    public beginRender(gfx : PIXI.Graphics) : void { }

    public abstract render(gfx : PIXI.Graphics) : void;

    public finishRender(gfx : PIXI.Graphics) : void { }

}
