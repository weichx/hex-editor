import {Shape} from "./shape";
import {PixiStyle} from "./pixi_style";
import {Transformable} from "../runtime/transformable";
import {Vector2} from "../runtime/vector2";

export class ShapeContainer extends Shape {

    constructor(parent : Transformable = null, style? : PixiStyle) {
        super(parent, style);
    }

    public render(gfx : PIXI.Graphics) : void {

        for(let i = 0; i < this.children.length; i++) {
            this.children[i].render(gfx);
        }

    }

    public containsPoint(point : Vector2) : boolean {
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i].containsPoint(point)) {
                return true;
            }
        }
        return false;
    }
}