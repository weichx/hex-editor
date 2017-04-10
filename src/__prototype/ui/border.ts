import {Color} from "../../runtime/color";

export const enum BorderStyle {
    None,
    Dotted,
    Dashed,
    Solid,
    Double,
    Groove,
    Ridge,
    Inset,
    Outset
}

export class Border {

    private top : BorderSection;
    private bottom : BorderSection;
    private left : BorderSection;
    private right : BorderSection;
    private simple : boolean; //if simple is set, all borders are the same and we dont' need to allocate sub-sections

}

class BorderSection {

    private _radius : number;
    private _width : number;
    private _color : Color;
    private _style : BorderStyle;
    private _image : string;
    private _imageSlice : number;

}