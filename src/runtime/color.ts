
export class Color {

    public r : number;
    public g : number;
    public b : number;
    public a : number;

    constructor(r = 0, g = 0, b = 0, a = 1) {
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

