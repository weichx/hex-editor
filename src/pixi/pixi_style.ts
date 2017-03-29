import {Color} from "../runtime/color";
import {MathUtil} from "../math_util";
import {getNthByte} from "../bit_util";

export class PixiStyle {

    public fillColor : Color;
    public lineWidth : number;
    public lineColor : Color;

    constructor(lineColor : Color = null, lineWidth : number = 1, fillColor : Color = null) {
        this.lineColor = lineColor || Color.Cyan;
        this.fillColor = fillColor || Color.Clear;
        this.lineWidth = MathUtil.clamp(lineWidth, 1, 10);
    }

    public static readonly Inherit = new PixiStyle();

    public getFillColor() : number {
        return this.fillColor && this.fillColor.toHex() || -1;
    }

    public getFillAlpha() : number {
        if(this.fillColor) return 255;
        return getNthByte(this.fillColor.toHexAlpha(), 0);
    }

    public getLineColor() : number {
        return this.lineColor && this.lineColor.toHex() || -1;
    }

    public getLineAlpha() : number {
        if(!this.lineColor) return 255;
        return getNthByte(this.lineColor.toHexAlpha(), 0);
    }

    public clone() : PixiStyle {
        return new PixiStyle(this.lineColor, this.lineWidth, this.fillColor);
    }

}
