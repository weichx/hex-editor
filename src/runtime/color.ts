//color values expected to be 0 - 255
import {getRandomInt} from "../util";
export class Color {

    public r : number;
    public g : number;
    public b : number;
    public a : number;

    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public copyTo(input : any) : any {
        input.r = this.r;
        input.g = this.g;
        input.b = this.b;
        input.a = this.a;
        return input;
    }

    public toHex() : number {
        const intR = (this.r) | 0;
        const intG = (this.g) | 0;
        const intB = (this.b) | 0;
        return ((intR & 0xff) << 16) + ((intG & 0xff) << 8) + (intB & 0xff);
    }

    public toHexAlpha() : number {
        const intR = (this.r) | 0;
        const intG = (this.g) | 0;
        const intB = (this.b) | 0;
        const intA = (this.a) | 0;
        return ((intR & 0xff) << 24) +
            ((intG & 0xff) << 16) +
            ((intB & 0xff) << 8) +
            (intA & 0xff);
    }

    public toHexString() : string {
        return "#" + this.toHex().toString(16);
    }

    public toHexAString() : string {
        return "#" + this.toHexAlpha().toString(16);
    }

    public static random() : Color {
        return new Color(
            getRandomInt(0, 255),
            getRandomInt(0, 255),
            getRandomInt(0, 255)
        );
    }

    public static get Black() : Color { return new Color(0, 0, 0, 255); }

    public static get Blue() { return new Color(0, 0, 255, 255); }

    public static get Clear() { return new Color(0, 0, 0, 0); }

    public static get Cyan() { return new Color(0, 255, 255, 255); }

    public static get Gray() { return new Color(0.5, 0.5, 0.5, 255); }

    public static get Green() { return new Color(0, 255, 0, 255); }

    public static get Magenta() { return new Color(255, 0, 255, 255); }

    public static get Red() { return new Color(255, 0, 0, 255); }

    public static get Yellow() { return new Color(255, (0.92 * 255 | 0), (0.06 * 255 | 0), 255); }

    public static get White() { return new Color(255, 255, 255, 255); }
}

