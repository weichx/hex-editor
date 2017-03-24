import {ImmutableVector2, Vector2} from "./vector2";

export class Rectangle {

    public x : number;
    public y : number;
    public width : number;
    public height : number;
    private _center : Vector2;
    private _min : Vector2;
    private _max: Vector2;

    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._center = null;
        this._min = null;
        this._max = null;
    }

    public get centerX() : number {
        return this.x + (this.width * 0.5);
    }

    public get centerY() : number {
        return this.y + (this.height * 0.5);
    }

    public get min() : ImmutableVector2 {
        if(!this._min) this._min = new Vector2();
        this._min.x = this.x;
        this._min.y = this.y;
        return this._min;
    }

    public get max() : ImmutableVector2 {
        if(!this._max) this._max = new Vector2();
        this._max.x = this.x + this.width;
        this._max.y = this.y + this.height;
        return this._max;
    }

    public get center() : ImmutableVector2 {
        if(!this._center) this._center = new Vector2();
        this._center.x = this.x + (this.width * 0.5);
        this._center.y = this.y + (this.height * 0.5);
        return this._center as ImmutableVector2;
    }

    public get outerRadius() : number {
        var min = Vector2.scratch0.set(this.x, this.y);
        var max = Vector2.scratch1.set(this.x + this.width, this.y + this.height);
        return max.subVector(min).length() * 0.5;
    }

    public setFromPoints(minX : number, minY : number, maxX : number, maxY : number) {
        this.x = minX;
        this.y = minY;
        this.width = maxX - minX;
        this.height = maxY - minY;
        return this;
    }

    public containsRectangle(rect : Rectangle) : boolean {
        return false;
    }

    public overlapsRectangle(rect : Rectangle) : boolean {
        return false;
    }

    public containsPoint(point : Vector2) : boolean {
        return Rectangle.pointInsideRect(point, this);
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

    public copyTo(input : {x : number, y: number, width: number, height: number}) : any {
        input.x = this.x;
        input.y = this.y;
        input.width = this.width;
        input.height = this.height;
        return input;
    }

    public static Zero = new Rectangle();

}