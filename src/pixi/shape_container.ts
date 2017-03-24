import {Shape} from "./shape";
import {PixiStyle} from "./pixi_style";

export class ShapeContainer extends Shape {

    constructor(style? : PixiStyle) {
        super(style);
    }

    public render(gfx : PIXI.Graphics) : void {

        for(let i = 0; i < this.children.length; i++) {
            this.children[i].render(gfx);
        }

    }

}