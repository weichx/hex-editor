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

    public static Black = new Color(0, 0, 0, 1);

    public static Blue = new Color(0, 0, 1, 1);

    public static Clear = new Color(0, 0, 0, 0);

    public static Cyan = new Color(0, 1, 1, 1);

    public static Gray = new Color(0.5, 0.5, 0.5, 1);

    public static Green = new Color(0, 1, 0, 1);

    public static Magenta = new Color(1, 0, 1, 1);

    public static Red = new Color(1, 0, 0, 1);

    public static White = new Color(1, 1, 1, 1);

    public static Yellow = new Color(1, 0.92, 0.016, 1);

}

