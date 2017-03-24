
import {Matrix} from "./matrix";
import {Vector3} from "./vector3";
export class Vector2 {
    /**
     * Creates a new Vector2 from the passed x and y coordinates.
     */
    constructor(public x : number, public y : number) {
    }

    /**
     * Returns a string with the Vector2 coordinates.
     */
    public toString() : string {
        return "{X: " + this.x + " Y:" + this.y + "}";
    }

    /**
     * Returns the string "Vector2"
     */
    public getClassName() : string {
        return "Vector2";
    }

    /**
     * Returns the Vector2 hash code as a number.
     */
    public getHashCode() : number {
        let hash = this.x || 0;
        hash = (hash * 397) ^ (this.y || 0);
        return hash;
    }

    // Operators
    /**
     * Sets the Vector2 coordinates in the passed array or Float32Array from the passed index.
     * Returns the Vector2.
     */
    public toArray(array : number[] | Float32Array, index : number = 0) : Vector2 {
        array[index] = this.x;
        array[index + 1] = this.y;
        return this;
    }

    /**
     * Returns a new array with 2 elements : the Vector2 coordinates.
     */
    public asArray() : number[] {
        var result : any = [];
        this.toArray(result, 0);
        return result;
    }

    /**
     *  Sets the Vector2 coordinates with the passed Vector2 coordinates.
     * Returns the updated Vector2.
     */
    public copyFrom(source : Vector2) : Vector2 {
        this.x = source.x;
        this.y = source.y;
        return this;
    }

    /**
     * Sets the Vector2 coordinates with the passed floats.
     * Returns the updated Vector2.
     */
    public copyFromFloats(x : number, y : number) : Vector2 {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * Sets the Vector2 coordinates with the passed floats.
     * Returns the updated Vector2.
     */
    public set(x : number, y : number) : Vector2 {
        return this.copyFromFloats(x, y);
    }

    /**
     * Returns a new Vector2 set with the addition of the current Vector2 and the passed one coordinates.
     */
    public add(otherVector : Vector2) : Vector2 {
        return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
    }

    /**
     * Sets the "result" coordinates with the addition of the current Vector2 and the passed one coordinates.
     * Returns the Vector2.
     */
    public addToRef(otherVector : Vector2, result : Vector2) : Vector2 {
        result.x = this.x + otherVector.x;
        result.y = this.y + otherVector.y;
        return this;
    }

    /**
     * Set the Vector2 coordinates by adding the passed Vector2 coordinates.
     * Returns the updated Vector2.
     */
    public addInPlace(otherVector : Vector2) : Vector2 {
        this.x += otherVector.x;
        this.y += otherVector.y;
        return this;
    }

    /**
     * Returns a new Vector2 by adding the current Vector2 coordinates to the passed Vector3 x, y coordinates.
     */
    public addVector3(otherVector : Vector3) : Vector2 {
        return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
    }

    /**
     * Returns a new Vector2 set with the subtracted coordinates of the passed one from the current Vector2.
     */
    public subtract(otherVector : Vector2) : Vector2 {
        return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
    }

    /**
     * Sets the "result" coordinates with the subtraction of the passed one from the current Vector2 coordinates.
     * Returns the Vector2.
     */
    public subtractToRef(otherVector : Vector2, result : Vector2) : Vector2 {
        result.x = this.x - otherVector.x;
        result.y = this.y - otherVector.y;
        return this;
    }

    /**
     * Sets the current Vector2 coordinates by subtracting from it the passed one coordinates.
     * Returns the updated Vector2.
     */
    public subtractInPlace(otherVector : Vector2) : Vector2 {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        return this;
    }

    /**
     * Multiplies in place the current Vector2 coordinates by the passed ones.
     * Returns the updated Vector2.
     */
    public multiplyInPlace(otherVector : Vector2) : Vector2 {
        this.x *= otherVector.x;
        this.y *= otherVector.y;
        return this;
    }

    /**
     * Returns a new Vector2 set with the multiplication of the current Vector2 and the passed one coordinates.
     */
    public multiply(otherVector : Vector2) : Vector2 {
        return new Vector2(this.x * otherVector.x, this.y * otherVector.y);
    }

    /**
     * Sets "result" coordinates with the multiplication of the current Vector2 and the passed one coordinates.
     * Returns the Vector2.
     */
    public multiplyToRef(otherVector : Vector2, result : Vector2) : Vector2 {
        result.x = this.x * otherVector.x;
        result.y = this.y * otherVector.y;
        return this;
    }

    /**
     * Returns a new Vector2 set with the Vector2 coordinates multiplied by the passed floats.
     */
    public multiplyByFloats(x : number, y : number) : Vector2 {
        return new Vector2(this.x * x, this.y * y);
    }

    /**
     * Returns a new Vector2 set with the Vector2 coordinates divided by the passed one coordinates.
     */
    public divide(otherVector : Vector2) : Vector2 {
        return new Vector2(this.x / otherVector.x, this.y / otherVector.y);
    }

    /**
     * Sets the "result" coordinates with the Vector2 divided by the passed one coordinates.
     * Returns the Vector2.
     */
    public divideToRef(otherVector : Vector2, result : Vector2) : Vector2 {
        result.x = this.x / otherVector.x;
        result.y = this.y / otherVector.y;
        return this;
    }

    /**
     * Returns a new Vector2 with current Vector2 negated coordinates.
     */
    public negate() : Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    /**
     * Multiply the Vector2 coordinates by scale.
     * Returns the updated Vector2.
     */
    public scaleInPlace(scale : number) : Vector2 {
        this.x *= scale;
        this.y *= scale;
        return this;
    }

    /**
     * Returns a new Vector2 scaled by "scale" from the current Vector2.
     */
    public scale(scale : number) : Vector2 {
        return new Vector2(this.x * scale, this.y * scale);
    }

    /**
     * Boolean : True if the passed vector coordinates strictly equal the current Vector2 ones.
     */
    public equals(otherVector : Vector2) : boolean {
        return otherVector && this.x === otherVector.x && this.y === otherVector.y;
    }

    // Properties
    /**
     * Returns the vector length (float).
     */
    public length() : number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns the vector squared length (float);
     */
    public lengthSquared() : number {
        return (this.x * this.x + this.y * this.y);
    }

    // Methods
    /**
     * Normalize the vector.
     * Returns the updated Vector2.
     */
    public normalize() : Vector2 {
        var len = this.length();

        if (len === 0)
            return this;

        var num = 1.0 / len;

        this.x *= num;
        this.y *= num;

        return this;
    }

    /**
     * Returns a new Vector2 copied from the Vector2.
     */
    public clone() : Vector2 {
        return new Vector2(this.x, this.y);
    }

    // Statics
    /**
     * Returns a new Vector2(0, 0)
     */
    public static Zero() : Vector2 {
        return new Vector2(0, 0);
    }

    /**
     * Returns a new Vector2 set from the passed index element of the passed array or Float32Array.
     */
    public static FromArray(array : number[] | Float32Array, offset : number = 0) : Vector2 {
        return new Vector2(array[offset], array[offset + 1]);
    }

    /**
     * Sets "result" from the passed index element of the passed array or Float32Array.
     * Returns the Vector2.
     */
    public static FromArrayToRef(array : number[] | Float32Array, offset : number, result : Vector2) : void {
        result.x = array[offset];
        result.y = array[offset + 1];
    }

    /**
     * Retuns a new Vector2 located for "amount" (float) on the CatmullRom  spline defined by the passed four Vector2.
     */
    public static CatmullRom(value1 : Vector2, value2 : Vector2, value3 : Vector2, value4 : Vector2, amount : number) : Vector2 {
        var squared = amount * amount;
        var cubed = amount * squared;

        var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) +
            (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) +
            ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));

        var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) +
            (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) +
            ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));

        return new Vector2(x, y);
    }

    /**
     * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
     * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
     * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate.
     */
    public static Clamp(value : Vector2, min : Vector2, max : Vector2) : Vector2 {
        var x = value.x;
        x = (x > max.x) ? max.x : x;
        x = (x < min.x) ? min.x : x;

        var y = value.y;
        y = (y > max.y) ? max.y : y;
        y = (y < min.y) ? min.y : y;

        return new Vector2(x, y);
    }

    /**
     * Returns a new Vecto2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2".
     */
    public static Hermite(value1 : Vector2, tangent1 : Vector2, value2 : Vector2, tangent2 : Vector2, amount : number) : Vector2 {
        var squared = amount * amount;
        var cubed = amount * squared;
        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        var part2 = (-2.0 * cubed) + (3.0 * squared);
        var part3 = (cubed - (2.0 * squared)) + amount;
        var part4 = cubed - squared;

        var x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
        var y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);

        return new Vector2(x, y);
    }

    /**
     * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
     */
    public static Lerp(start : Vector2, end : Vector2, amount : number) : Vector2 {
        var x = start.x + ((end.x - start.x) * amount);
        var y = start.y + ((end.y - start.y) * amount);
        return new Vector2(x, y);
    }

    /**
     * Returns the dot product (float) of the vector "left" and the vector "right".
     */
    public static Dot(left : Vector2, right : Vector2) : number {
        return left.x * right.x + left.y * right.y;
    }

    /**
     * Returns a new Vector2 equal to the normalized passed vector.
     */
    public static Normalize(vector : Vector2) : Vector2 {
        var newVector = vector.clone();
        newVector.normalize();
        return newVector;
    }

    /**
     * Returns a new Vecto2 set with the minimal coordinate values from the "left" and "right" vectors.
     */
    public static Minimize(left : Vector2, right : Vector2) : Vector2 {
        var x = (left.x < right.x) ? left.x : right.x;
        var y = (left.y < right.y) ? left.y : right.y;
        return new Vector2(x, y);
    }

    /**
     * Returns a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors.
     */
    public static Maximize(left : Vector2, right : Vector2) : Vector2 {
        var x = (left.x > right.x) ? left.x : right.x;
        var y = (left.y > right.y) ? left.y : right.y;
        return new Vector2(x, y);
    }

    /**
     * Returns a new Vecto2 set with the transformed coordinates of the passed vector by the passed transformation matrix.
     */
    public static Transform(vector : Vector2, transformation : Matrix) : Vector2 {
        let r = Vector2.Zero();
        Vector2.TransformToRef(vector, transformation, r);
        return r;
    }

    /**
     * Transforms the passed vector coordinates by the passed transformation matrix and stores the result in the vector "result" coordinates.
     */
    public static TransformToRef(vector : Vector2, transformation : Matrix, result : Vector2) {
        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + transformation.m[12];
        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + transformation.m[13];
        result.x = x;
        result.y = y;
    }

    /**
     * Boolean : True if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"
     */
    public static PointInTriangle(p : Vector2, p0 : Vector2, p1 : Vector2, p2 : Vector2) {
        let a = 1 / 2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
        let sign = a < 0 ? -1 : 1;
        let s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
        let t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;

        return s > 0 && t > 0 && (s + t) < 2 * a * sign;
    }

    /**
     * Returns the distance (float) between the vectors "value1" and "value2".
     */
    public static Distance(value1 : Vector2, value2 : Vector2) : number {
        return Math.sqrt(Vector2.DistanceSquared(value1, value2));
    }

    /**
     * Returns the squared distance (float) between the vectors "value1" and "value2".
     */
    public static DistanceSquared(value1 : Vector2, value2 : Vector2) : number {
        var x = value1.x - value2.x;
        var y = value1.y - value2.y;
        return (x * x) + (y * y);
    }

    /**
     * Returns a new Vecto2 located at the center of the vectors "value1" and "value2".
     */
    public static Center(value1 : Vector2, value2 : Vector2) : Vector2 {
        var center = value1.add(value2);
        center.scaleInPlace(0.5);
        return center;
    }

    /**
     * Returns the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
     */
    public static DistanceOfPointFromSegment(p : Vector2, segA : Vector2, segB : Vector2) : number {
        let l2 = Vector2.DistanceSquared(segA, segB);
        if (l2 === 0.0) {
            return Vector2.Distance(p, segA);
        }
        let v = segB.subtract(segA);
        let t = Math.max(0, Math.min(1, Vector2.Dot(p.subtract(segA), v) / l2));
        let proj = segA.add(v.multiplyByFloats(t, t));
        return Vector2.Distance(p, proj);
    }
}