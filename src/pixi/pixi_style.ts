import {Color} from "../runtime/color";
import {MathUtil} from "../math_util";

export class PixiStyle {

    public fillColor : Color;
    public lineWidth : number;
    public lineColor : Color;

    constructor(lineColor : Color = null, lineWidth : number = 1, fillColor : Color = null) {
        this.lineColor = lineColor || Color.Cyan;
        this.fillColor = fillColor || Color.Cyan;
        this.lineWidth = MathUtil.clamp(lineWidth, 1, 10);
    }

    public static readonly Inherit = new PixiStyle();

    public getFillColor() : number {
        return this.fillColor.toHex();
    }

    public getLineColor() : number {
        return this.lineColor.toHex();
    }

    public getLineAlpha() : number {
        return 1;
    }

}
