import {Vector2} from "./vector2";

export class Rectangle {

    public x : number;
    public y : number;
    public width : number;
    public height : number;

    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public containsRectangle(rect : Rectangle) : boolean {
        return false;
    }

    public overlapsRectangle(rect : Rectangle) : boolean {
        return false;
    }

    public containsPoint(point : Vector2) : boolean {
        return false;
    }

    public static pointInsideRect(point : Vector2, rect : Rectangle) {
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;
        const px = point.x;
        const py = point.y;
        return px >= x && x + w >= px && py >= y && y + h >= py;
    }

    public clone() : Rectangle {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    public static Zero = new Rectangle();

}