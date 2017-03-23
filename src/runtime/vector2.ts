import {serializeClass} from "./persistance/TEMP_ANNOTATION";
import {Matrix3x3} from "./matrix3x3";

@serializeClass
export class Vector2 {

    public x : number;
    public y : number;

    constructor(x : number = 0, y : number = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x : number, y : number) : Vector2 {
        this.x = x;
        this.y = y;
        return this;
    }

    public scale(factor : number) : Vector2 {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    public scaleNew(factor : number) : Vector2 {
        return new Vector2(this.x * factor, this.y * factor);
    }

    public addScalar(scalar : number) : Vector2 {
        this.x += scalar;
        this.y += scalar;
        return this;
    }

    public addScalarNew(scalar : number) : Vector2 {
        return new Vector2(this.x + scalar, this.y + scalar);
    }

    public subScalar(scalar : number) : Vector2 {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }

    public divideScalar(scalar : number) : Vector2 {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
        return this;
    }

    public divideScalarNew(scalar : number) : Vector2 {
        if (scalar !== 0) {
            return new Vector2(this.x / scalar, this.y / scalar);
        }
        else {
            return new Vector2();
        }
    }

    public subScalarNew(scalar : number) : Vector2 {
        return new Vector2(this.x - scalar, this.y - scalar);
    }

    public invert() : Vector2 {
        this.x *= -1;
        this.y *= -1;
        return this;
    }

    public invertNew() : Vector2 {
        return new Vector2(this.x * -1, this.y * -1);
    }

    public lookAt(other : Vector2) : Vector2 {
        return this;
    }

    public clamp(length : number) : Vector2 {
        const lengthSq = this.lengthSquared();
        if (length * length > lengthSq) {
            this.normalize();
            this.scale(length);
        }
        return this;
    }

    public dot(other : { x : number, y : number }) : number {
        return this.x * other.x + this.y * other.y;
    }

    public cross(other : { x : number, y : number }) : number {
        return (this.x * other.y ) - (this.y * other.x );
    }

    public normalize() : this {
        var length = this.length();

        if (length === 0) {
            this.x = 1;
            this.y = 0;
        } else {
            this.x /= length;
            this.y /= length;
        }
        return this;
    }

    public normalizeNew() : Vector2 {
        const length = this.length();
        const retn = new Vector2();
        if (length === 0) {
            retn.x = 1;
            retn.y = 0;
        } else {
            retn.x = this.x / length;
            retn.y = this.y / length;
        }
        return this;
    }

    public length() : number {
        return Math.sqrt(this.lengthSquared());
    }

    public lengthSquared() : number {
        return this.x * this.x + this.y * this.y;
    }

    public addVector(other : { x : number, y : number }) : this {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    public subVector(other : { x : number, y : number }) : this {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    public addVectorNew(other : { x : number, y : number }) : Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    public subVectorNew(other : { x : number, y : number }) : Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    public horizontalAngle() : number {
        return Math.atan2(this.y, this.x);
    }

    public verticalAngle() : number {
        //noinspection JSSuspiciousNameCombination
        return Math.atan2(this.x, this.y);
    }

    public rotate(radians : number) : Vector2 {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const nx = (this.x * cos) - (this.y * sin);
        const ny = (this.x * sin) + (this.y * cos);
        this.x = nx;
        this.y = ny;
        return this;
    }

    public rotateNew(radians : number) : Vector2 {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        return new Vector2(
            (this.x * cos) - (this.y * sin),
            (this.x * sin) + (this.y * cos)
        );
    }

    public rotateAround(radians : number, pivot : ImmutableVector2) : Vector2 {
        let x = this.x - pivot.x;
        let y = this.y - pivot.y;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        this.x = ((x * cos) - (y * sin)) + pivot.x;
        this.y = ((x * sin) + (y * cos)) + pivot.y;
        return this;
    }

    public project(other : { x : number, y : number }) : Vector2 {
        const e = ( (this.x * other.x) + (this.y * other.y) ) / ((other.x * other.x) + (other.y * other.y));
        this.x = e * other.x;
        this.y = e * other.y;
        return this;
    }

    public projectNew(other : { x : number, y : number }) : Vector2 {
        const e = ( (this.x * other.x) + (this.y * other.y) ) / ((other.x * other.x) + (other.y * other.y));
        return new Vector2(e * other.x, e * other.y);
    }

    public distanceTo(other : { x : number, y : number }) : number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return dx * dx + dy * dy;
    }

    public copy(other : IVector2) : this {
        this.x = other.x;
        this.y = other.y;
        return this;
    }

    public clone() : Vector2 {
        return new Vector2(this.x, this.y);
    }

    public isZero() : boolean {
        return this.x === 0 && this.y === 0;
    }

    public isEqual(other : { x : number, y : number }) : boolean {
        return this.x === other.x && this.y === other.y;
    }

    public toString() : string {
        return `{x: ${this.x}, y: ${this.y}}`;
    }

    public static readonly up : ImmutableVector2  = new Vector2(0, 1);

    public static readonly right : ImmutableVector2  = new Vector2(1, 0);

    public static readonly down: ImmutableVector2 = new Vector2(0, -1);

    public static readonly left : ImmutableVector2 = new Vector2(-1, 0);

    public static transformCoordinates(vector : Vector2, matrix : Matrix3x3, out? : Vector2) : Vector2 {
        out = out || new Vector2();
        const x = vector.x;
        const y = vector.y;
        out.x = (x * matrix.a) + (y * matrix.c) + matrix.tx;
        out.y = (x * matrix.b) + (y * matrix.d) + matrix.ty;
        return out;
    }

    public static transformFloatCoordinates(x : number, y : number,  matrix : Matrix3x3, out? : Vector2) : Vector2 {
        out = out || new Vector2();
        out.x = (x * matrix.a) + (y * matrix.c) + matrix.tx;
        out.y = (x * matrix.b) + (y * matrix.d) + matrix.ty;
        return out;
    }

    public static transformDirection(vector : Vector2, matrix : Matrix3x3, out? : Vector2) : Vector2 {
        out = out || new Vector2();
        const x = vector.x;
        const y = vector.y;
        out.x = (x * matrix.a) + (y * matrix.c);
        out.y = (x * matrix.b) + (y * matrix.d);
        return out;
    }
}



export interface ImmutableVector2 {

    readonly x : number;
    readonly y : number;

    clone() : Vector2;
    isZero() : boolean;
    isEqual(other : IVector2) : boolean;
    distanceTo(other : IVector2) : number;
    lengthSquared() : number;
    length() : number;

    horizontalAngle() : number;
    verticalAngle() : number;

    invertNew() : Vector2;

}