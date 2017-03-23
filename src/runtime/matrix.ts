import {MathUtil} from "../math_util";

export const ToGammaSpace = 1 / 2.2;
export const ToLinearSpace = 2.2;
export const Epsilon = 0.001;

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

export class Vector3 {
    /**
     * Creates a new Vector3 object from the passed x, y, z (floats) coordinates.
     * A Vector3 is the main object used in 3D geometry.
     * It can represent etiher the coordinates of a point the space, either a direction.
     */
    constructor(public x : number, public y : number, public z : number) {
    }

    /**
     * Returns a string with the Vector3 coordinates.
     */
    public toString() : string {
        return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "}";
    }

    /**
     * Returns the string "Vector3"
     */
    public getClassName() : string {
        return "Vector3";
    }

    /**
     * Returns the Vector hash code.
     */
    public getHashCode() : number {
        let hash = this.x || 0;
        hash = (hash * 397) ^ (this.y || 0);
        hash = (hash * 397) ^ (this.z || 0);
        return hash;
    }

    // Operators
    /**
     * Returns a new array with three elements : the coordinates the Vector3.
     */
    public asArray() : number[] {
        var result : number[] = [];
        this.toArray(result, 0);
        return result;
    }

    /**
     * Populates the passed array or Float32Array from the passed index with the successive coordinates of the Vector3.
     * Returns the Vector3.
     */
    public toArray(array : number[] | Float32Array, index : number = 0) : Vector3 {
        array[index] = this.x;
        array[index + 1] = this.y;
        array[index + 2] = this.z;
        return this;
    }

    /**
     * Returns a new Quaternion object, computed from the Vector3 coordinates.
     */
    public toQuaternion() : Quaternion {
        var result = new Quaternion(0.0, 0.0, 0.0, 1.0);

        var cosxPlusz = Math.cos((this.x + this.z) * 0.5);
        var sinxPlusz = Math.sin((this.x + this.z) * 0.5);
        var coszMinusx = Math.cos((this.z - this.x) * 0.5);
        var sinzMinusx = Math.sin((this.z - this.x) * 0.5);
        var cosy = Math.cos(this.y * 0.5);
        var siny = Math.sin(this.y * 0.5);

        result.x = coszMinusx * siny;
        result.y = -sinzMinusx * siny;
        result.z = sinxPlusz * cosy;
        result.w = cosxPlusz * cosy;
        return result;
    }

    /**
     * Adds the passed vector to the current Vector3.
     * Returns the updated Vector3.
     */
    public addInPlace(otherVector : Vector3) : Vector3 {
        this.x += otherVector.x;
        this.y += otherVector.y;
        this.z += otherVector.z;
        return this;
    }

    /**
     * Returns a new Vector3, result of the addition the current Vector3 and the passed vector.
     */
    public add(otherVector : Vector3) : Vector3 {
        return new Vector3(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
    }

    /**
     * Adds the current Vector3 to the passed one and stores the result in the vector "result".
     * Returns the current Vector3.
     */
    public addToRef(otherVector : Vector3, result : Vector3) : Vector3 {
        result.x = this.x + otherVector.x;
        result.y = this.y + otherVector.y;
        result.z = this.z + otherVector.z;
        return this;
    }

    /**
     * Subtract the passed vector from the current Vector3.
     * Returns the updated Vector3.
     */
    public subtractInPlace(otherVector : Vector3) : Vector3 {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        this.z -= otherVector.z;
        return this;
    }

    /**
     * Returns a new Vector3, result of the subtraction of the passed vector from the current Vector3.
     */
    public subtract(otherVector : Vector3) : Vector3 {
        return new Vector3(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
    }

    /**
     * Subtracts the passed vector from the current Vector3 and stores the result in the vector "result".
     * Returns the current Vector3.
     */
    public subtractToRef(otherVector : Vector3, result : Vector3) : Vector3 {
        result.x = this.x - otherVector.x;
        result.y = this.y - otherVector.y;
        result.z = this.z - otherVector.z;
        return this;
    }

    /**
     * Returns a new Vector3 set with the subtraction of the passed floats from the current Vector3 coordinates.
     */
    public subtractFromFloats(x : number, y : number, z : number) : Vector3 {
        return new Vector3(this.x - x, this.y - y, this.z - z);
    }

    /**
     * Subtracts the passed floats from the current Vector3 coordinates and set the passed vector "result" with this result.
     * Returns the current Vector3.
     */
    public subtractFromFloatsToRef(x : number, y : number, z : number, result : Vector3) : Vector3 {
        result.x = this.x - x;
        result.y = this.y - y;
        result.z = this.z - z;
        return this;
    }

    /**
     * Returns a new Vector3 set with the current Vector3 negated coordinates.
     */
    public negate() : Vector3 {
        return new Vector3(-this.x, -this.y, -this.z);
    }

    /**
     * Multiplies the Vector3 coordinates by the float "scale".
     * Returns the updated Vector3.
     */
    public scaleInPlace(scale : number) : Vector3 {
        this.x *= scale;
        this.y *= scale;
        this.z *= scale;
        return this;
    }

    /**
     * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale".
     */
    public scale(scale : number) : Vector3 {
        return new Vector3(this.x * scale, this.y * scale, this.z * scale);
    }

    /**
     * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the passed vector "result" coordinates.
     * Returns the current Vector3.
     */
    public scaleToRef(scale : number, result : Vector3) : Vector3 {
        result.x = this.x * scale;
        result.y = this.y * scale;
        result.z = this.z * scale;
        return this;
    }

    /**
     * Boolean : True if the current Vector3 and the passed vector coordinates are strictly equal.
     */
    public equals(otherVector : Vector3) : boolean {
        return otherVector && this.x === otherVector.x && this.y === otherVector.y && this.z === otherVector.z;
    }

    /**
     * Boolean : True if the current Vector3 coordinate equal the passed floats.
     */
    public equalsToFloats(x : number, y : number, z : number) : boolean {
        return this.x === x && this.y === y && this.z === z;
    }

    /**
     * Muliplies the current Vector3 coordinates by the passed ones.
     * Returns the updated Vector3.
     */
    public multiplyInPlace(otherVector : Vector3) : Vector3 {
        this.x *= otherVector.x;
        this.y *= otherVector.y;
        this.z *= otherVector.z;
        return this;
    }

    /**
     * Returns a new Vector3, result of the multiplication of the current Vector3 by the passed vector.
     */
    public multiply(otherVector : Vector3) : Vector3 {
        return new Vector3(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z);
    }

    /**
     * Multiplies the current Vector3 by the passed one and stores the result in the passed vector "result".
     * Returns the current Vector3.
     */
    public multiplyToRef(otherVector : Vector3, result : Vector3) : Vector3 {
        result.x = this.x * otherVector.x;
        result.y = this.y * otherVector.y;
        result.z = this.z * otherVector.z;
        return this;
    }

    /**
     * Returns a new Vector3 set witth the result of the mulliplication of the current Vector3 coordinates by the passed floats.
     */
    public multiplyByFloats(x : number, y : number, z : number) : Vector3 {
        return new Vector3(this.x * x, this.y * y, this.z * z);
    }

    /**
     * Returns a new Vector3 set witth the result of the division of the current Vector3 coordinates by the passed ones.
     */
    public divide(otherVector : Vector3) : Vector3 {
        return new Vector3(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z);
    }

    /**
     * Divides the current Vector3 coordinates by the passed ones and stores the result in the passed vector "result".
     * Returns the current Vector3.
     */
    public divideToRef(otherVector : Vector3, result : Vector3) : Vector3 {
        result.x = this.x / otherVector.x;
        result.y = this.y / otherVector.y;
        result.z = this.z / otherVector.z;
        return this;
    }

    /**
     * Updates the current Vector3 with the minimal coordinate values between its and the passed vector ones.
     * Returns the updated Vector3.
     */
    public MinimizeInPlace(other : Vector3) : Vector3 {
        if (other.x < this.x) this.x = other.x;
        if (other.y < this.y) this.y = other.y;
        if (other.z < this.z) this.z = other.z;
        return this;
    }

    /**
     * Updates the current Vector3 with the maximal coordinate values between its and the passed vector ones.
     * Returns the updated Vector3.
     */
    public MaximizeInPlace(other : Vector3) : Vector3 {
        if (other.x > this.x) this.x = other.x;
        if (other.y > this.y) this.y = other.y;
        if (other.z > this.z) this.z = other.z;
        return this;
    }

    // Properties
    /**
     * Returns the length of the Vector3 (float).
     */
    public length() : number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Returns the squared length of the Vector3 (float).
     */
    public lengthSquared() : number {
        return (this.x * this.x + this.y * this.y + this.z * this.z);
    }

    // Methods
    /**
     * Normalize the current Vector3.
     * Returns the updated Vector3.
     */
    public normalize() : Vector3 {
        var len = this.length();
        if (len === 0 || len === 1.0)
            return this;

        var num = 1.0 / len;
        this.x *= num;
        this.y *= num;
        this.z *= num;
        return this;
    }

    /**
     * Returns a new Vector3 copied from the current Vector3.
     */
    public clone() : Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * Copies the passed vector coordinates to the current Vector3 ones.
     * Returns the updated Vector3.
     */
    public copyFrom(source : Vector3) : Vector3 {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        return this;
    }

    /**
     * Copies the passed floats to the current Vector3 coordinates.
     * Returns the updated Vector3.
     */
    public copyFromFloats(x : number, y : number, z : number) : Vector3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * Copies the passed floats to the current Vector3 coordinates.
     * Returns the updated Vector3.
     */
    public set(x : number, y : number, z : number) : Vector3 {
        return this.copyFromFloats(x, y, z);
    }

    // Statics
    /**
     *
     */
    public static GetClipFactor(vector0 : Vector3, vector1 : Vector3, axis : Vector3, size : number) {
        var d0 = Vector3.Dot(vector0, axis) - size;
        var d1 = Vector3.Dot(vector1, axis) - size;

        return d0 / (d0 - d1);
    }

    /**
     * Returns a new Vector3 set from the index "offset" of the passed array or Float32Array.
     */
    public static FromArray(array : number[] | Float32Array, offset? : number) : Vector3 {
        if (!offset) {
            offset = 0;
        }
        return new Vector3(array[offset], array[offset + 1], array[offset + 2]);
    }

    /**
     * Returns a new Vector3 set from the index "offset" of the passed Float32Array.
     */
    public static FromFloatArray(array : Float32Array, offset? : number) : Vector3 {
        if (!offset) {
            offset = 0;
        }

        return new Vector3(array[offset], array[offset + 1], array[offset + 2]);
    }

    /**
     * Sets the passed vector "result" with the element values from the index "offset" of the passed array or Float32Array.
     */
    public static FromArrayToRef(array : number[] | Float32Array, offset : number, result : Vector3) : void {
        result.x = array[offset];
        result.y = array[offset + 1];
        result.z = array[offset + 2];
    }

    /**
     * Sets the passed vector "result" with the element values from the index "offset" of the passed Float32Array.
     */
    public static FromFloatArrayToRef(array : Float32Array, offset : number, result : Vector3) : void {
        result.x = array[offset];
        result.y = array[offset + 1];
        result.z = array[offset + 2];
    }

    /**
     * Sets the passed vector "result" with the passed floats.
     */
    public static FromFloatsToRef(x : number, y : number, z : number, result : Vector3) : void {
        result.x = x;
        result.y = y;
        result.z = z;
    }

    /**
     * Returns a new Vector3 set to (0.0, 0.0, 0.0).
     */
    public static Zero() : Vector3 {
        return new Vector3(0.0, 0.0, 0.0);
    }

    /**
     * Returns a new Vector3 set to (0.0, 1.0, 0.0)
     */
    public static Up() : Vector3 {
        return new Vector3(0.0, 1.0, 0.0);
    }

    /**
     * Returns a new Vector3 set to (0.0, 0.0, 1.0)
     */
    public static Forward() : Vector3 {
        return new Vector3(0.0, 0.0, 1.0);
    }

    /**
     * Returns a new Vector3 set to (1.0, 0.0, 0.0)
     */
    public static Right() : Vector3 {
        return new Vector3(1.0, 0.0, 0.0);
    }

    /**
     * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
     */
    public static Left() : Vector3 {
        return new Vector3(-1.0, 0.0, 0.0);
    }

    /**
     * Returns a new Vector3 set with the result of the transformation by the passed matrix of the passed vector.
     * This method computes tranformed coordinates only, not transformed direction vectors.
     */
    public static TransformCoordinates(vector : Vector3, transformation : Matrix) : Vector3 {
        var result = Vector3.Zero();
        Vector3.TransformCoordinatesToRef(vector, transformation, result);
        return result;
    }

    /**
     * Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed vector.
     * This method computes tranformed coordinates only, not transformed direction vectors.
     */
    public static TransformCoordinatesToRef(vector : Vector3, transformation : Matrix, result : Vector3) : void {
        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]) + transformation.m[12];
        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]) + transformation.m[13];
        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]) + transformation.m[14];
        var w = (vector.x * transformation.m[3]) + (vector.y * transformation.m[7]) + (vector.z * transformation.m[11]) + transformation.m[15];

        result.x = x / w;
        result.y = y / w;
        result.z = z / w;
    }

    /**
     * Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed floats (x, y, z).
     * This method computes tranformed coordinates only, not transformed direction vectors.
     */
    public static TransformCoordinatesFromFloatsToRef(x : number, y : number, z : number, transformation : Matrix, result : Vector3) : void {
        var rx = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]) + transformation.m[12];
        var ry = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]) + transformation.m[13];
        var rz = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]) + transformation.m[14];
        var rw = (x * transformation.m[3]) + (y * transformation.m[7]) + (z * transformation.m[11]) + transformation.m[15];

        result.x = rx / rw;
        result.y = ry / rw;
        result.z = rz / rw;
    }

    /**
     * Returns a new Vector3 set with the result of the normal transformation by the passed matrix of the passed vector.
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormal(vector : Vector3, transformation : Matrix) : Vector3 {
        var result = Vector3.Zero();
        Vector3.TransformNormalToRef(vector, transformation, result);
        return result;
    }

    /**
     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormalToRef(vector : Vector3, transformation : Matrix, result : Vector3) : void {
        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]);
        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]);
        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]);
        result.x = x;
        result.y = y;
        result.z = z;
    }

    /**
     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z).
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormalFromFloatsToRef(x : number, y : number, z : number, transformation : Matrix, result : Vector3) : void {
        result.x = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]);
        result.y = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]);
        result.z = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]);
    }

    /**
     * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4".
     */
    public static CatmullRom(value1 : Vector3, value2 : Vector3, value3 : Vector3, value4 : Vector3, amount : number) : Vector3 {
        var squared = amount * amount;
        var cubed = amount * squared;

        var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) +
            (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) +
            ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));

        var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) +
            (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) +
            ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));

        var z = 0.5 * ((((2.0 * value2.z) + ((-value1.z + value3.z) * amount)) +
            (((((2.0 * value1.z) - (5.0 * value2.z)) + (4.0 * value3.z)) - value4.z) * squared)) +
            ((((-value1.z + (3.0 * value2.z)) - (3.0 * value3.z)) + value4.z) * cubed));

        return new Vector3(x, y, z);
    }

    /**
     * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max".
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one.
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one.
     */
    public static Clamp(value : Vector3, min : Vector3, max : Vector3) : Vector3 {
        var x = value.x;
        x = (x > max.x) ? max.x : x;
        x = (x < min.x) ? min.x : x;

        var y = value.y;
        y = (y > max.y) ? max.y : y;
        y = (y < min.y) ? min.y : y;

        var z = value.z;
        z = (z > max.z) ? max.z : z;
        z = (z < min.z) ? min.z : z;

        return new Vector3(x, y, z);
    }

    /**
     * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2".
     */
    public static Hermite(value1 : Vector3, tangent1 : Vector3, value2 : Vector3, tangent2 : Vector3, amount : number) : Vector3 {
        var squared = amount * amount;
        var cubed = amount * squared;
        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        var part2 = (-2.0 * cubed) + (3.0 * squared);
        var part3 = (cubed - (2.0 * squared)) + amount;
        var part4 = cubed - squared;

        var x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
        var y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);
        var z = (((value1.z * part1) + (value2.z * part2)) + (tangent1.z * part3)) + (tangent2.z * part4);
        return new Vector3(x, y, z);
    }

    /**
     * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end".
     */
    public static Lerp(start : Vector3, end : Vector3, amount : number) : Vector3 {
        var result = new Vector3(0, 0, 0);
        Vector3.LerpToRef(start, end, amount, result);
        return result;
    }

    /**
     * Sets the passed vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end".
     */
    public static LerpToRef(start : Vector3, end : Vector3, amount : number, result : Vector3) : void {
        result.x = start.x + ((end.x - start.x) * amount);
        result.y = start.y + ((end.y - start.y) * amount);
        result.z = start.z + ((end.z - start.z) * amount);
    }

    /**
     * Returns the dot product (float) between the vectors "left" and "right".
     */
    public static Dot(left : Vector3, right : Vector3) : number {
        return (left.x * right.x + left.y * right.y + left.z * right.z);
    }

    /**
     * Returns a new Vector3 as the cross product of the vectors "left" and "right".
     * The cross product is then orthogonal to both "left" and "right".
     */
    public static Cross(left : Vector3, right : Vector3) : Vector3 {
        var result = Vector3.Zero();
        Vector3.CrossToRef(left, right, result);
        return result;
    }

    /**
     * Sets the passed vector "result" with the cross product of "left" and "right".
     * The cross product is then orthogonal to both "left" and "right".
     */
    public static CrossToRef(left : Vector3, right : Vector3, result : Vector3) : void {
        MathTmp.Vector3[0].x = left.y * right.z - left.z * right.y;
        MathTmp.Vector3[0].y = left.z * right.x - left.x * right.z;
        MathTmp.Vector3[0].z = left.x * right.y - left.y * right.x;
        result.copyFrom(MathTmp.Vector3[0]);
    }

    /**
     * Returns a new Vector3 as the normalization of the passed vector.
     */
    public static Normalize(vector : Vector3) : Vector3 {
        var result = Vector3.Zero();
        Vector3.NormalizeToRef(vector, result);
        return result;
    }

    /**
     * Sets the passed vector "result" with the normalization of the passed first vector.
     */
    public static NormalizeToRef(vector : Vector3, result : Vector3) : void {
        result.copyFrom(vector);
        result.normalize();
    }

    private static _viewportMatrixCache : Matrix;
    private static _matrixCache : Matrix;

    public static Minimize(left : Vector3, right : Vector3) : Vector3 {
        var min = left.clone();
        min.MinimizeInPlace(right);
        return min;
    }

    public static Maximize(left : Vector3, right : Vector3) : Vector3 {
        var max = left.clone();
        max.MaximizeInPlace(right);
        return max;
    }

    /**
     * Returns the distance (float) between the vectors "value1" and "value2".
     */
    public static Distance(value1 : Vector3, value2 : Vector3) : number {
        return Math.sqrt(Vector3.DistanceSquared(value1, value2));
    }

    /**
     * Returns the squared distance (float) between the vectors "value1" and "value2".
     */
    public static DistanceSquared(value1 : Vector3, value2 : Vector3) : number {
        var x = value1.x - value2.x;
        var y = value1.y - value2.y;
        var z = value1.z - value2.z;

        return (x * x) + (y * y) + (z * z);
    }

    /**
     * Returns a new Vector3 located at the center between "value1" and "value2".
     */
    public static Center(value1 : Vector3, value2 : Vector3) : Vector3 {
        var center = value1.add(value2);
        center.scaleInPlace(0.5);
        return center;
    }

    /**
     * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
     * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
     * to something in order to rotate it from its local system to the given target system.
     * Note : axis1, axis2 and axis3 are normalized during this operation.
     * Returns a new Vector3.
     */
    public static RotationFromAxis(axis1 : Vector3, axis2 : Vector3, axis3 : Vector3) : Vector3 {
        var rotation = Vector3.Zero();
        Vector3.RotationFromAxisToRef(axis1, axis2, axis3, rotation);
        return rotation;
    }

    /**
     * The same than RotationFromAxis but updates the passed ref Vector3 parameter instead of returning a new Vector3.
     */
    public static RotationFromAxisToRef(axis1 : Vector3, axis2 : Vector3, axis3 : Vector3, ref : Vector3) : void {
        var quat = MathTmp.Quaternion[0];
        Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
        quat.toEulerAnglesToRef(ref);
    }
}

//Vector4 class created for EulerAngle class conversion to Quaternion
export class Vector4 {
    /**
     * Creates a Vector4 object from the passed floats.
     */
    constructor(public x : number, public y : number, public z : number, public w : number) { }

    /**
     * Returns the string with the Vector4 coordinates.
     */
    public toString() : string {
        return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}";
    }

    /**
     * Returns the string "Vector4".
     */
    public getClassName() : string {
        return "Vector4";
    }

    /**
     * Returns the Vector4 hash code.
     */
    public getHashCode() : number {
        let hash = this.x || 0;
        hash = (hash * 397) ^ (this.y || 0);
        hash = (hash * 397) ^ (this.z || 0);
        hash = (hash * 397) ^ (this.w || 0);
        return hash;
    }

    // Operators
    /**
     * Returns a new array populated with 4 elements : the Vector4 coordinates.
     */
    public asArray() : number[] {
        var result : any = [];

        this.toArray(result, 0);

        return result;
    }

    /**
     * Populates the passed array from the passed index with the Vector4 coordinates.
     * Returns the Vector4.
     */
    public toArray(array : number[], index? : number) : Vector4 {
        if (index === undefined) {
            index = 0;
        }
        array[index] = this.x;
        array[index + 1] = this.y;
        array[index + 2] = this.z;
        array[index + 3] = this.w;
        return this;
    }

    /**
     * Adds the passed vector to the current Vector4.
     * Returns the updated Vector4.
     */
    public addInPlace(otherVector : Vector4) : Vector4 {
        this.x += otherVector.x;
        this.y += otherVector.y;
        this.z += otherVector.z;
        this.w += otherVector.w;
        return this;
    }

    /**
     * Returns a new Vector4 as the result of the addition of the current Vector4 and the passed one.
     */
    public add(otherVector : Vector4) : Vector4 {
        return new Vector4(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z, this.w + otherVector.w);
    }

    /**
     * Updates the passed vector "result" with the result of the addition of the current Vector4 and the passed one.
     * Returns the current Vector4.
     */
    public addToRef(otherVector : Vector4, result : Vector4) : Vector4 {
        result.x = this.x + otherVector.x;
        result.y = this.y + otherVector.y;
        result.z = this.z + otherVector.z;
        result.w = this.w + otherVector.w;
        return this;
    }

    /**
     * Subtract in place the passed vector from the current Vector4.
     * Returns the updated Vector4.
     */
    public subtractInPlace(otherVector : Vector4) : Vector4 {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        this.z -= otherVector.z;
        this.w -= otherVector.w;
        return this;
    }

    /**
     * Returns a new Vector4 with the result of the subtraction of the passed vector from the current Vector4.
     */
    public subtract(otherVector : Vector4) : Vector4 {
        return new Vector4(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z, this.w - otherVector.w);
    }

    /**
     * Sets the passed vector "result" with the result of the subtraction of the passed vector from the current Vector4.
     * Returns the current Vector4.
     */
    public subtractToRef(otherVector : Vector4, result : Vector4) : Vector4 {
        result.x = this.x - otherVector.x;
        result.y = this.y - otherVector.y;
        result.z = this.z - otherVector.z;
        result.w = this.w - otherVector.w;
        return this;
    }

    /**
     * Returns a new Vector4 set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
     */
    public subtractFromFloats(x : number, y : number, z : number, w : number) : Vector4 {
        return new Vector4(this.x - x, this.y - y, this.z - z, this.w - w);
    }

    /**
     * Sets the passed vector "result" set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
     * Returns the current Vector4.
     */
    public subtractFromFloatsToRef(x : number, y : number, z : number, w : number, result : Vector4) : Vector4 {
        result.x = this.x - x;
        result.y = this.y - y;
        result.z = this.z - z;
        result.w = this.w - w;
        return this;
    }

    /**
     * Returns a new Vector4 set with the current Vector4 negated coordinates.
     */
    public negate() : Vector4 {
        return new Vector4(-this.x, -this.y, -this.z, -this.w);
    }

    /**
     * Multiplies the current Vector4 coordinates by scale (float).
     * Returns the updated Vector4.
     */
    public scaleInPlace(scale : number) : Vector4 {
        this.x *= scale;
        this.y *= scale;
        this.z *= scale;
        this.w *= scale;
        return this;
    }

    /**
     * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
     */
    public scale(scale : number) : Vector4 {
        return new Vector4(this.x * scale, this.y * scale, this.z * scale, this.w * scale);
    }

    /**
     * Sets the passed vector "result" with the current Vector4 coordinates multiplied by scale (float).
     * Returns the current Vector4.
     */
    public scaleToRef(scale : number, result : Vector4) : Vector4 {
        result.x = this.x * scale;
        result.y = this.y * scale;
        result.z = this.z * scale;
        result.w = this.w * scale;
        return this;
    }

    /**
     * Boolean : True if the current Vector4 coordinates are stricly equal to the passed ones.
     */
    public equals(otherVector : Vector4) : boolean {
        return otherVector && this.x === otherVector.x && this.y === otherVector.y && this.z === otherVector.z && this.w === otherVector.w;
    }

    /**
     * Boolean : True if the passed floats are strictly equal to the current Vector4 coordinates.
     */
    public equalsToFloats(x : number, y : number, z : number, w : number) : boolean {
        return this.x === x && this.y === y && this.z === z && this.w === w;
    }

    /**
     * Multiplies in place the current Vector4 by the passed one.
     * Returns the updated Vector4.
     */
    public multiplyInPlace(otherVector : Vector4) : Vector4 {
        this.x *= otherVector.x;
        this.y *= otherVector.y;
        this.z *= otherVector.z;
        this.w *= otherVector.w;
        return this;
    }

    /**
     * Returns a new Vector4 set with the multiplication result of the current Vector4 and the passed one.
     */
    public multiply(otherVector : Vector4) : Vector4 {
        return new Vector4(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z, this.w * otherVector.w);
    }

    /**
     * Updates the passed vector "result" with the multiplication result of the current Vector4 and the passed one.
     * Returns the current Vector4.
     */
    public multiplyToRef(otherVector : Vector4, result : Vector4) : Vector4 {
        result.x = this.x * otherVector.x;
        result.y = this.y * otherVector.y;
        result.z = this.z * otherVector.z;
        result.w = this.w * otherVector.w;
        return this;
    }

    /**
     * Returns a new Vector4 set with the multiplication result of the passed floats and the current Vector4 coordinates.
     */
    public multiplyByFloats(x : number, y : number, z : number, w : number) : Vector4 {
        return new Vector4(this.x * x, this.y * y, this.z * z, this.w * w);
    }

    /**
     * Returns a new Vector4 set with the division result of the current Vector4 by the passed one.
     */
    public divide(otherVector : Vector4) : Vector4 {
        return new Vector4(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z, this.w / otherVector.w);
    }

    /**
     * Updates the passed vector "result" with the division result of the current Vector4 by the passed one.
     * Returns the current Vector4.
     */
    public divideToRef(otherVector : Vector4, result : Vector4) : Vector4 {
        result.x = this.x / otherVector.x;
        result.y = this.y / otherVector.y;
        result.z = this.z / otherVector.z;
        result.w = this.w / otherVector.w;
        return this;
    }

    /**
     * Updates the Vector4 coordinates with the minimum values between its own and the passed vector ones.
     */
    public MinimizeInPlace(other : Vector4) : Vector4 {
        if (other.x < this.x) this.x = other.x;
        if (other.y < this.y) this.y = other.y;
        if (other.z < this.z) this.z = other.z;
        if (other.w < this.w) this.w = other.w;
        return this;
    }

    /**
     * Updates the Vector4 coordinates with the maximum values between its own and the passed vector ones.
     */
    public MaximizeInPlace(other : Vector4) : Vector4 {
        if (other.x > this.x) this.x = other.x;
        if (other.y > this.y) this.y = other.y;
        if (other.z > this.z) this.z = other.z;
        if (other.w > this.w) this.w = other.w;
        return this;
    }

    // Properties
    /**
     * Returns the Vector4 length (float).
     */
    public length() : number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Returns the Vector4 squared length (float).
     */
    public lengthSquared() : number {
        return (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    // Methods
    /**
     * Normalizes in place the Vector4.
     * Returns the updated Vector4.
     */
    public normalize() : Vector4 {
        var len = this.length();

        if (len === 0)
            return this;

        var num = 1.0 / len;

        this.x *= num;
        this.y *= num;
        this.z *= num;
        this.w *= num;

        return this;
    }

    /**
     * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
     */
    public toVector3() : Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * Returns a new Vector4 copied from the current one.
     */
    public clone() : Vector4 {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    /**
     * Updates the current Vector4 with the passed one coordinates.
     * Returns the updated Vector4.
     */
    public copyFrom(source : Vector4) : Vector4 {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        this.w = source.w;
        return this;
    }

    /**
     * Updates the current Vector4 coordinates with the passed floats.
     * Returns the updated Vector4.
     */
    public copyFromFloats(x : number, y : number, z : number, w : number) : Vector4 {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }

    /**
     * Updates the current Vector4 coordinates with the passed floats.
     * Returns the updated Vector4.
     */
    public set(x : number, y : number, z : number, w : number) : Vector4 {
        return this.copyFromFloats(x, y, z, w);
    }

    // Statics
    /**
     * Returns a new Vector4 set from the starting index of the passed array.
     */
    public static FromArray(array : number[] | Float32Array, offset? : number) : Vector4 {
        if (!offset) {
            offset = 0;
        }
        return new Vector4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }

    /**
     * Updates the passed vector "result" from the starting index of the passed array.
     */
    public static FromArrayToRef(array : number[] | Float32Array, offset : number, result : Vector4) : void {
        result.x = array[offset];
        result.y = array[offset + 1];
        result.z = array[offset + 2];
        result.w = array[offset + 3];
    }

    /**
     * Updates the passed vector "result" from the starting index of the passed Float32Array.
     */
    public static FromFloatArrayToRef(array : Float32Array, offset : number, result : Vector4) : void {
        result.x = array[offset];
        result.y = array[offset + 1];
        result.z = array[offset + 2];
        result.w = array[offset + 3];
    }

    /**
     * Updates the passed vector "result" coordinates from the passed floats.
     */
    public static FromFloatsToRef(x : number, y : number, z : number, w : number, result : Vector4) : void {
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
    }

    /**
     * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
     */
    public static Zero() : Vector4 {
        return new Vector4(0.0, 0.0, 0.0, 0.0);
    }

    /**
     * Returns a new normalized Vector4 from the passed one.
     */
    public static Normalize(vector : Vector4) : Vector4 {
        var result = Vector4.Zero();
        Vector4.NormalizeToRef(vector, result);
        return result;
    }

    /**
     * Updates the passed vector "result" from the normalization of the passed one.
     */
    public static NormalizeToRef(vector : Vector4, result : Vector4) : void {
        result.copyFrom(vector);
        result.normalize();
    }

    public static Minimize(left : Vector4, right : Vector4) : Vector4 {
        var min = left.clone();
        min.MinimizeInPlace(right);
        return min;
    }

    public static Maximize(left : Vector4, right : Vector4) : Vector4 {
        var max = left.clone();
        max.MaximizeInPlace(right);
        return max;
    }

    /**
     * Returns the distance (float) between the vectors "value1" and "value2".
     */
    public static Distance(value1 : Vector4, value2 : Vector4) : number {
        return Math.sqrt(Vector4.DistanceSquared(value1, value2));
    }

    /**
     * Returns the squared distance (float) between the vectors "value1" and "value2".
     */
    public static DistanceSquared(value1 : Vector4, value2 : Vector4) : number {
        var x = value1.x - value2.x;
        var y = value1.y - value2.y;
        var z = value1.z - value2.z;
        var w = value1.w - value2.w;

        return (x * x) + (y * y) + (z * z) + (w * w);
    }

    /**
     * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
     */
    public static Center(value1 : Vector4, value2 : Vector4) : Vector4 {
        var center = value1.add(value2);
        center.scaleInPlace(0.5);
        return center;
    }

    /**
     * Returns a new Vector4 set with the result of the normal transformation by the passed matrix of the passed vector.
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormal(vector : Vector4, transformation : Matrix) : Vector4 {
        var result = Vector4.Zero();
        Vector4.TransformNormalToRef(vector, transformation, result);
        return result;
    }

    /**
     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormalToRef(vector : Vector4, transformation : Matrix, result : Vector4) : void {
        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]);
        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]);
        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]);
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = vector.w;
    }

    /**
     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z, w).
     * This methods computes transformed normalized direction vectors only.
     */
    public static TransformNormalFromFloatsToRef(x : number, y : number, z : number, w : number, transformation : Matrix, result : Vector4) : void {
        result.x = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]);
        result.y = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]);
        result.z = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]);
        result.w = w;
    }
}

export interface ISize {
    width : number;
    height : number;
}

export class Size implements ISize {
    width : number;
    height : number;

    /**
     * Creates a Size object from the passed width and height (floats).
     */
    public constructor(width : number, height : number) {
        this.width = width;
        this.height = height;
    }

    // Returns a string with the Size width and height.
    public toString() : string {
        return `{W: ${this.width}, H: ${this.height}}`;
    }

    /**
     * Returns the string "Size"
     */
    public getClassName() : string {
        return "Size";
    }

    /**
     * Returns the Size hash code.
     */
    public getHashCode() : number {
        let hash = this.width || 0;
        hash = (hash * 397) ^ (this.height || 0);
        return hash;
    }

    /**
     * Updates the current size from the passed one.
     * Returns the updated Size.
     */
    public copyFrom(src : Size) {
        this.width = src.width;
        this.height = src.height;
    }

    /**
     * Updates in place the current Size from the passed floats.
     * Returns the updated Size.
     */
    public copyFromFloats(width : number, height : number) : Size {
        this.width = width;
        this.height = height;
        return this;
    }

    /**
     * Updates in place the current Size from the passed floats.
     * Returns the updated Size.
     */
    public set(width : number, height : number) : Size {
        return this.copyFromFloats(width, height);
    }

    /**
     * Returns a new Size set with the multiplication result of the current Size and the passed floats.
     */
    public multiplyByFloats(w : number, h : number) : Size {
        return new Size(this.width * w, this.height * h);
    }

    /**
     * Returns a new Size copied from the passed one.
     */
    public clone() : Size {
        return new Size(this.width, this.height);
    }

    /**
     * Boolean : True if the current Size and the passed one width and height are strictly equal.
     */
    public equals(other : Size) : boolean {
        if (!other) {
            return false;
        }
        return (this.width === other.width) && (this.height === other.height);
    }

    /**
     * Returns the surface of the Size : width * height (float).
     */
    public get surface() : number {
        return this.width * this.height;
    }

    /**
     * Returns a new Size set to (0.0, 0.0)
     */
    public static Zero() : Size {
        return new Size(0.0, 0.0);
    }

    /**
     * Returns a new Size set as the addition result of the current Size and the passed one.
     */
    public add(otherSize : Size) : Size {
        return new Size(this.width + otherSize.width, this.height + otherSize.height);
    }

    /**
     * Returns a new Size set as the subtraction result of  the passed one from the current Size.
     */
    public subtract(otherSize : Size) : Size {
        return new Size(this.width - otherSize.width, this.height - otherSize.height);
    }

    /**
     * Returns a new Size set at the linear interpolation "amount" between "start" and "end".
     */
    public static Lerp(start : Size, end : Size, amount : number) : Size {
        var w = start.width + ((end.width - start.width) * amount);
        var h = start.height + ((end.height - start.height) * amount);

        return new Size(w, h);
    }

}

export class Quaternion {
    /**
     * Creates a new Quaternion from the passed floats.
     */
    constructor(public x : number = 0.0, public y : number = 0.0, public z : number = 0.0, public w : number = 1.0) {
    }

    /**
     * Returns a string with the Quaternion coordinates.
     */
    public toString() : string {
        return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}";
    }

    /**
     * Returns the string "Quaternion".
     */
    public getClassName() : string {
        return "Quaternion";
    }

    /**
     * Returns the Quaternion hash code.
     */
    public getHashCode() : number {
        let hash = this.x || 0;
        hash = (hash * 397) ^ (this.y || 0);
        hash = (hash * 397) ^ (this.z || 0);
        hash = (hash * 397) ^ (this.w || 0);
        return hash;
    }

    /**
     * Returns a new array populated with 4 elements : the Quaternion coordinates.
     */
    public asArray() : number[] {
        return [this.x, this.y, this.z, this.w];
    }

    /**
     * Boolean : True if the current Quaterion and the passed one coordinates are strictly equal.
     */
    public equals(otherQuaternion : Quaternion) : boolean {
        return otherQuaternion && this.x === otherQuaternion.x && this.y === otherQuaternion.y && this.z === otherQuaternion.z && this.w === otherQuaternion.w;
    }

    /**
     * Returns a new Quaternion copied from the current one.
     */
    public clone() : Quaternion {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }

    /**
     * Updates the current Quaternion from the passed one coordinates.
     * Returns the updated Quaterion.
     */
    public copyFrom(other : Quaternion) : Quaternion {
        this.x = other.x;
        this.y = other.y;
        this.z = other.z;
        this.w = other.w;
        return this;
    }

    /**
     * Updates the current Quaternion from the passed float coordinates.
     * Returns the updated Quaterion.
     */
    public copyFromFloats(x : number, y : number, z : number, w : number) : Quaternion {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }

    /**
     * Updates the current Quaternion from the passed float coordinates.
     * Returns the updated Quaterion.
     */
    public set(x : number, y : number, z : number, w : number) : Quaternion {
        return this.copyFromFloats(x, y, z, w);
    }

    /**
     * Returns a new Quaternion as the addition result of the passed one and the current Quaternion.
     */
    public add(other : Quaternion) : Quaternion {
        return new Quaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
    }

    /**
     * Returns a new Quaternion as the subtraction result of the passed one from the current Quaternion.
     */
    public subtract(other : Quaternion) : Quaternion {
        return new Quaternion(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
    }

    /**
     * Returns a new Quaternion set by multiplying the current Quaterion coordinates by the float "scale".
     */
    public scale(value : number) : Quaternion {
        return new Quaternion(this.x * value, this.y * value, this.z * value, this.w * value);
    }

    /**
     * Returns a new Quaternion set as the quaternion mulplication result of the current one with the passed one "q1".
     */
    public multiply(q1 : Quaternion) : Quaternion {
        var result = new Quaternion(0, 0, 0, 1.0);
        this.multiplyToRef(q1, result);
        return result;
    }

    /**
     * Sets the passed "result" as the quaternion mulplication result of the current one with the passed one "q1".
     * Returns the current Quaternion.
     */
    public multiplyToRef(q1 : Quaternion, result : Quaternion) : Quaternion {
        var x = this.x * q1.w + this.y * q1.z - this.z * q1.y + this.w * q1.x;
        var y = -this.x * q1.z + this.y * q1.w + this.z * q1.x + this.w * q1.y;
        var z = this.x * q1.y - this.y * q1.x + this.z * q1.w + this.w * q1.z;
        var w = -this.x * q1.x - this.y * q1.y - this.z * q1.z + this.w * q1.w;
        result.copyFromFloats(x, y, z, w);
        return this;
    }

    /**
     * Updates the current Quaternion with the quaternion mulplication result of itself with the passed one "q1".
     * Returns the updated Quaternion.
     */
    public multiplyInPlace(q1 : Quaternion) : Quaternion {
        this.multiplyToRef(q1, this);
        return this;
    }

    /**
     * Sets the passed "ref" with the conjugation of the current Quaternion.
     * Returns the current Quaternion.
     */
    public conjugateToRef(ref : Quaternion) : Quaternion {
        ref.copyFromFloats(-this.x, -this.y, -this.z, this.w);
        return this;
    }

    /**
     * Conjugates in place the current Quaternion.
     * Returns the updated Quaternion.
     */
    public conjugateInPlace() : Quaternion {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this;
    }

    /**
     * Returns a new Quaternion as the conjugate of the current Quaternion.
     */
    public conjugate() : Quaternion {
        var result = new Quaternion(-this.x, -this.y, -this.z, this.w);
        return result;
    }

    /**
     * Returns the Quaternion length (float).
     */
    public length() : number {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w));
    }

    /**
     * Normalize in place the current Quaternion.
     * Returns the updated Quaternion.
     */
    public normalize() : Quaternion {
        var length = 1.0 / this.length();
        this.x *= length;
        this.y *= length;
        this.z *= length;
        this.w *= length;
        return this;
    }

    /**
     * Returns a new Vector3 set with the Euler angles translated from the current Quaternion.
     */
    public toEulerAngles(order = "YZX") : Vector3 {
        var result = Vector3.Zero();
        this.toEulerAnglesToRef(result, order);
        return result;
    }

    /**
     * Sets the passed vector3 "result" with the Euler angles translated from the current Quaternion.
     * Returns the current Quaternion.
     */
    public toEulerAnglesToRef(result : Vector3, order = "YZX") : Quaternion {

        var qz = this.z;
        var qx = this.x;
        var qy = this.y;
        var qw = this.w;

        var sqw = qw * qw;
        var sqz = qz * qz;
        var sqx = qx * qx;
        var sqy = qy * qy;

        var zAxisY = qy * qz - qx * qw;
        var limit = .4999999;

        if (zAxisY < -limit) {
            result.y = 2 * Math.atan2(qy, qw);
            result.x = Math.PI / 2;
            result.z = 0;
        } else if (zAxisY > limit) {
            result.y = 2 * Math.atan2(qy, qw);
            result.x = -Math.PI / 2;
            result.z = 0;
        } else {
            result.z = Math.atan2(2.0 * (qx * qy + qz * qw), (-sqz - sqx + sqy + sqw));
            result.x = Math.asin(-2.0 * (qz * qy - qx * qw));
            result.y = Math.atan2(2.0 * (qz * qx + qy * qw), (sqz - sqx - sqy + sqw));
        }

        return this;

    }

    /**
     * Updates the passed rotation matrix with the current Quaternion values.
     * Returns the current Quaternion.
     */
    public toRotationMatrix(result : Matrix) : Quaternion {
        var xx = this.x * this.x;
        var yy = this.y * this.y;
        var zz = this.z * this.z;
        var xy = this.x * this.y;
        var zw = this.z * this.w;
        var zx = this.z * this.x;
        var yw = this.y * this.w;
        var yz = this.y * this.z;
        var xw = this.x * this.w;

        result.m[0] = 1.0 - (2.0 * (yy + zz));
        result.m[1] = 2.0 * (xy + zw);
        result.m[2] = 2.0 * (zx - yw);
        result.m[3] = 0;
        result.m[4] = 2.0 * (xy - zw);
        result.m[5] = 1.0 - (2.0 * (zz + xx));
        result.m[6] = 2.0 * (yz + xw);
        result.m[7] = 0;
        result.m[8] = 2.0 * (zx + yw);
        result.m[9] = 2.0 * (yz - xw);
        result.m[10] = 1.0 - (2.0 * (yy + xx));
        result.m[11] = 0;
        result.m[12] = 0;
        result.m[13] = 0;
        result.m[14] = 0;
        result.m[15] = 1.0;
        return this;
    }

    /**
     * Updates the current Quaternion from the passed rotation matrix values.
     * Returns the updated Quaternion.
     */
    public fromRotationMatrix(matrix : Matrix) : Quaternion {
        Quaternion.FromRotationMatrixToRef(matrix, this);
        return this;
    }

    // Statics
    /**
     * Returns a new Quaternion set from the passed rotation matrix values.
     */
    public static FromRotationMatrix(matrix : Matrix) : Quaternion {
        var result = new Quaternion();
        Quaternion.FromRotationMatrixToRef(matrix, result);
        return result;
    }

    /**
     * Updates the passed quaternion "result" with the passed rotation matrix values.
     */
    public static FromRotationMatrixToRef(matrix : Matrix, result : Quaternion) : void {
        var data = matrix.m;
        var m11 = data[0], m12 = data[4], m13 = data[8];
        var m21 = data[1], m22 = data[5], m23 = data[9];
        var m31 = data[2], m32 = data[6], m33 = data[10];
        var trace = m11 + m22 + m33;
        var s;

        if (trace > 0) {

            s = 0.5 / Math.sqrt(trace + 1.0);

            result.w = 0.25 / s;
            result.x = (m32 - m23) * s;
            result.y = (m13 - m31) * s;
            result.z = (m21 - m12) * s;
        } else if (m11 > m22 && m11 > m33) {

            s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);

            result.w = (m32 - m23) / s;
            result.x = 0.25 * s;
            result.y = (m12 + m21) / s;
            result.z = (m13 + m31) / s;
        } else if (m22 > m33) {

            s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);

            result.w = (m13 - m31) / s;
            result.x = (m12 + m21) / s;
            result.y = 0.25 * s;
            result.z = (m23 + m32) / s;
        } else {

            s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);

            result.w = (m21 - m12) / s;
            result.x = (m13 + m31) / s;
            result.y = (m23 + m32) / s;
            result.z = 0.25 * s;
        }
    }

    /**
     * Returns a new Quaternion set to (0.0, 0.0, 0.0).
     */
    public static Zero() : Quaternion {
        return new Quaternion(0.0, 0.0, 0.0, 0.0);
    }

    /**
     * Returns a new Quaternion as the inverted current Quaternion.
     */
    public static Inverse(q : Quaternion) : Quaternion {
        return new Quaternion(-q.x, -q.y, -q.z, q.w);
    }

    /**
     * Returns the identity Quaternion.
     */
    public static Identity() : Quaternion {
        return new Quaternion(0.0, 0.0, 0.0, 1.0);
    }

    public static IsIdentity(quaternion : Quaternion) {
        return quaternion && quaternion.x === 0 && quaternion.y === 0 && quaternion.z === 0 && quaternion.w === 1;
    }

    /**
     * Returns a new Quaternion set from the passed axis (Vector3) and angle in radians (float).
     */
    public static RotationAxis(axis : Vector3, angle : number) : Quaternion {
        return Quaternion.RotationAxisToRef(axis, angle, new Quaternion());
    }

    /**
     * Sets the passed quaternion "result" from the passed axis (Vector3) and angle in radians (float).
     */
    public static RotationAxisToRef(axis : Vector3, angle : number, result : Quaternion) : Quaternion {
        var sin = Math.sin(angle / 2);
        axis.normalize();
        result.w = Math.cos(angle / 2);
        result.x = axis.x * sin;
        result.y = axis.y * sin;
        result.z = axis.z * sin;
        return result;
    }

    /**
     * Retuns a new Quaternion set from the starting index of the passed array.
     */
    public static FromArray(array : number[], offset? : number) : Quaternion {
        if (!offset) {
            offset = 0;
        }
        return new Quaternion(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }

    /**
     * Returns a new Quaternion set from the passed Euler float angles (y, x, z).
     */
    public static RotationYawPitchRoll(yaw : number, pitch : number, roll : number) : Quaternion {
        var q = new Quaternion();
        Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, q);
        return q;
    }

    /**
     * Sets the passed quaternion "result" from the passed float Euler angles (y, x, z).
     */
    public static RotationYawPitchRollToRef(yaw : number, pitch : number, roll : number, result : Quaternion) : void {
        // Produces a quaternion from Euler angles in the z-y-x orientation (Tait-Bryan angles)
        var halfRoll = roll * 0.5;
        var halfPitch = pitch * 0.5;
        var halfYaw = yaw * 0.5;

        var sinRoll = Math.sin(halfRoll);
        var cosRoll = Math.cos(halfRoll);
        var sinPitch = Math.sin(halfPitch);
        var cosPitch = Math.cos(halfPitch);
        var sinYaw = Math.sin(halfYaw);
        var cosYaw = Math.cos(halfYaw);

        result.x = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
        result.y = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
        result.z = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
        result.w = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);
    }

    /**
     * Returns a new Quaternion from the passed float Euler angles expressed in z-x-z orientation
     */
    public static RotationAlphaBetaGamma(alpha : number, beta : number, gamma : number) : Quaternion {
        var result = new Quaternion();
        Quaternion.RotationAlphaBetaGammaToRef(alpha, beta, gamma, result);
        return result;
    }

    /**
     * Sets the passed quaternion "result" from the passed float Euler angles expressed in z-x-z orientation
     */
    public static RotationAlphaBetaGammaToRef(alpha : number, beta : number, gamma : number, result : Quaternion) : void {
        // Produces a quaternion from Euler angles in the z-x-z orientation
        var halfGammaPlusAlpha = (gamma + alpha) * 0.5;
        var halfGammaMinusAlpha = (gamma - alpha) * 0.5;
        var halfBeta = beta * 0.5;

        result.x = Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta);
        result.y = Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta);
        result.z = Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta);
        result.w = Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta);
    }

    /**
     * Returns a new Quaternion as the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.
     * cf to Vector3.RotationFromAxis() documentation.
     * Note : axis1, axis2 and axis3 are normalized during this operation.
     */
    public static RotationQuaternionFromAxis(axis1 : Vector3, axis2 : Vector3, axis3 : Vector3, ref : Quaternion) : Quaternion {
        var quat = new Quaternion(0.0, 0.0, 0.0, 0.0);
        Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
        return quat;
    }

    /**
     * Sets the passed quaternion "ref" with the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.
     * cf to Vector3.RotationFromAxis() documentation.
     * Note : axis1, axis2 and axis3 are normalized during this operation.
     */
    public static RotationQuaternionFromAxisToRef(axis1 : Vector3, axis2 : Vector3, axis3 : Vector3, ref : Quaternion) : void {
        var rotMat = MathTmp.Matrix[0];
        Matrix.FromXYZAxesToRef(axis1.normalize(), axis2.normalize(), axis3.normalize(), rotMat);
        Quaternion.FromRotationMatrixToRef(rotMat, ref);
    }

    public static Slerp(left : Quaternion, right : Quaternion, amount : number) : Quaternion {

        var result = Quaternion.Identity();

        Quaternion.SlerpToRef(left, right, amount, result);

        return result;

    }

    public static SlerpToRef(left : Quaternion, right : Quaternion, amount : number, result : Quaternion) : void {
        var num2;
        var num3;
        var num = amount;
        var num4 = (((left.x * right.x) + (left.y * right.y)) + (left.z * right.z)) + (left.w * right.w);
        var flag = false;

        if (num4 < 0) {
            flag = true;
            num4 = -num4;
        }

        if (num4 > 0.999999) {
            num3 = 1 - num;
            num2 = flag ? -num : num;
        }
        else {
            var num5 = Math.acos(num4);
            var num6 = (1.0 / Math.sin(num5));
            num3 = (Math.sin((1.0 - num) * num5)) * num6;
            num2 = flag ? ((-Math.sin(num * num5)) * num6) : ((Math.sin(num * num5)) * num6);
        }

        result.x = (num3 * left.x) + (num2 * right.x);
        result.y = (num3 * left.y) + (num2 * right.y);
        result.z = (num3 * left.z) + (num2 * right.z);
        result.w = (num3 * left.w) + (num2 * right.w);

    }
}

export class Matrix {
    private static _tempQuaternion : Quaternion = new Quaternion();
    private static _xAxis : Vector3 = Vector3.Zero();
    private static _yAxis : Vector3 = Vector3.Zero();
    private static _zAxis : Vector3 = Vector3.Zero();

    public m : Float32Array = new Float32Array(16);

    // Properties
    /**
     * Boolean : True is the matrix is the identity matrix
     */
    public isIdentity() : boolean {
        if (this.m[0] !== 1.0 || this.m[5] !== 1.0 || this.m[10] !== 1.0 || this.m[15] !== 1.0)
            return false;

        if (this.m[1] !== 0.0 || this.m[2] !== 0.0 || this.m[3] !== 0.0 ||
            this.m[4] !== 0.0 || this.m[6] !== 0.0 || this.m[7] !== 0.0 ||
            this.m[8] !== 0.0 || this.m[9] !== 0.0 || this.m[11] !== 0.0 ||
            this.m[12] !== 0.0 || this.m[13] !== 0.0 || this.m[14] !== 0.0)
            return false;

        return true;
    }

    /**
     * Returns the matrix determinant (float).
     */
    public determinant() : number {
        var temp1 = (this.m[10] * this.m[15]) - (this.m[11] * this.m[14]);
        var temp2 = (this.m[9] * this.m[15]) - (this.m[11] * this.m[13]);
        var temp3 = (this.m[9] * this.m[14]) - (this.m[10] * this.m[13]);
        var temp4 = (this.m[8] * this.m[15]) - (this.m[11] * this.m[12]);
        var temp5 = (this.m[8] * this.m[14]) - (this.m[10] * this.m[12]);
        var temp6 = (this.m[8] * this.m[13]) - (this.m[9] * this.m[12]);

        return ((((this.m[0] * (((this.m[5] * temp1) - (this.m[6] * temp2)) + (this.m[7] * temp3))) - (this.m[1] * (((this.m[4] * temp1) -
        (this.m[6] * temp4)) + (this.m[7] * temp5)))) + (this.m[2] * (((this.m[4] * temp2) - (this.m[5] * temp4)) + (this.m[7] * temp6)))) -
        (this.m[3] * (((this.m[4] * temp3) - (this.m[5] * temp5)) + (this.m[6] * temp6))));
    }

    // Methods
    /**
     * Returns the matrix underlying array.
     */
    public toArray() : Float32Array {
        return this.m;
    }

    /**
     * Returns the matrix underlying array.
     */
    public asArray() : Float32Array {
        return this.toArray();
    }

    /**
     * Inverts in place the Matrix.
     * Returns the Matrix inverted.
     */
    public invert() : Matrix {
        this.invertToRef(this);
        return this;
    }

    /**
     * Sets all the matrix elements to zero.
     * Returns the Matrix.
     */
    public reset() : Matrix {
        for (var index = 0; index < 16; index++) {
            this.m[index] = 0.0;
        }

        return this;
    }

    /**
     * Returns a new Matrix as the addition result of the current Matrix and the passed one.
     */
    public add(other : Matrix) : Matrix {
        var result = new Matrix();
        this.addToRef(other, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" with the ddition result of the current Matrix and the passed one.
     * Returns the Matrix.
     */
    public addToRef(other : Matrix, result : Matrix) : Matrix {
        for (var index = 0; index < 16; index++) {
            result.m[index] = this.m[index] + other.m[index];
        }
        return this;
    }

    /**
     * Adds in place the passed matrix to the current Matrix.
     * Returns the updated Matrix.
     */
    public addToSelf(other : Matrix) : Matrix {
        for (var index = 0; index < 16; index++) {
            this.m[index] += other.m[index];
        }
        return this;
    }

    /**
     * Sets the passed matrix with the current inverted Matrix.
     * Returns the unmodified current Matrix.
     */
    public invertToRef(other : Matrix) : Matrix {
        var l1 = this.m[0];
        var l2 = this.m[1];
        var l3 = this.m[2];
        var l4 = this.m[3];
        var l5 = this.m[4];
        var l6 = this.m[5];
        var l7 = this.m[6];
        var l8 = this.m[7];
        var l9 = this.m[8];
        var l10 = this.m[9];
        var l11 = this.m[10];
        var l12 = this.m[11];
        var l13 = this.m[12];
        var l14 = this.m[13];
        var l15 = this.m[14];
        var l16 = this.m[15];
        var l17 = (l11 * l16) - (l12 * l15);
        var l18 = (l10 * l16) - (l12 * l14);
        var l19 = (l10 * l15) - (l11 * l14);
        var l20 = (l9 * l16) - (l12 * l13);
        var l21 = (l9 * l15) - (l11 * l13);
        var l22 = (l9 * l14) - (l10 * l13);
        var l23 = ((l6 * l17) - (l7 * l18)) + (l8 * l19);
        var l24 = -(((l5 * l17) - (l7 * l20)) + (l8 * l21));
        var l25 = ((l5 * l18) - (l6 * l20)) + (l8 * l22);
        var l26 = -(((l5 * l19) - (l6 * l21)) + (l7 * l22));
        var l27 = 1.0 / ((((l1 * l23) + (l2 * l24)) + (l3 * l25)) + (l4 * l26));
        var l28 = (l7 * l16) - (l8 * l15);
        var l29 = (l6 * l16) - (l8 * l14);
        var l30 = (l6 * l15) - (l7 * l14);
        var l31 = (l5 * l16) - (l8 * l13);
        var l32 = (l5 * l15) - (l7 * l13);
        var l33 = (l5 * l14) - (l6 * l13);
        var l34 = (l7 * l12) - (l8 * l11);
        var l35 = (l6 * l12) - (l8 * l10);
        var l36 = (l6 * l11) - (l7 * l10);
        var l37 = (l5 * l12) - (l8 * l9);
        var l38 = (l5 * l11) - (l7 * l9);
        var l39 = (l5 * l10) - (l6 * l9);

        other.m[0] = l23 * l27;
        other.m[4] = l24 * l27;
        other.m[8] = l25 * l27;
        other.m[12] = l26 * l27;
        other.m[1] = -(((l2 * l17) - (l3 * l18)) + (l4 * l19)) * l27;
        other.m[5] = (((l1 * l17) - (l3 * l20)) + (l4 * l21)) * l27;
        other.m[9] = -(((l1 * l18) - (l2 * l20)) + (l4 * l22)) * l27;
        other.m[13] = (((l1 * l19) - (l2 * l21)) + (l3 * l22)) * l27;
        other.m[2] = (((l2 * l28) - (l3 * l29)) + (l4 * l30)) * l27;
        other.m[6] = -(((l1 * l28) - (l3 * l31)) + (l4 * l32)) * l27;
        other.m[10] = (((l1 * l29) - (l2 * l31)) + (l4 * l33)) * l27;
        other.m[14] = -(((l1 * l30) - (l2 * l32)) + (l3 * l33)) * l27;
        other.m[3] = -(((l2 * l34) - (l3 * l35)) + (l4 * l36)) * l27;
        other.m[7] = (((l1 * l34) - (l3 * l37)) + (l4 * l38)) * l27;
        other.m[11] = -(((l1 * l35) - (l2 * l37)) + (l4 * l39)) * l27;
        other.m[15] = (((l1 * l36) - (l2 * l38)) + (l3 * l39)) * l27;

        return this;
    }

    /**
     * Inserts the translation vector (using 3 x floats) in the current Matrix.
     * Returns the updated Matrix.
     */
    public setTranslationFromFloats(x : number, y : number, z : number) : Matrix {
        this.m[12] = x;
        this.m[13] = y;
        this.m[14] = z;
        return this;
    }

    /**
     * Inserts the translation vector in the current Matrix.
     * Returns the updated Matrix.
     */
    public setTranslation(vector3 : Vector3) : Matrix {
        this.m[12] = vector3.x;
        this.m[13] = vector3.y;
        this.m[14] = vector3.z;
        return this;
    }

    /**
     * Returns a new Vector3 as the extracted translation from the Matrix.
     */
    public getTranslation() : Vector3 {
        return new Vector3(this.m[12], this.m[13], this.m[14]);
    }

    /**
     * Fill a Vector3 with the extracted translation from the Matrix.
     */
    public getTranslationToRef(result : Vector3) : Matrix {
        result.x = this.m[12];
        result.y = this.m[13];
        result.z = this.m[14];

        return this;
    }

    /**
     * Remove rotation and scaling part from the Matrix.
     * Returns the updated Matrix.
     */
    public removeRotationAndScaling() : Matrix {
        this.setRowFromFloats(0, 1, 0, 0, 0);
        this.setRowFromFloats(1, 0, 1, 0, 0);
        this.setRowFromFloats(2, 0, 0, 1, 0);
        return this;
    }

    /**
     * Returns a new Matrix set with the multiplication result of the current Matrix and the passed one.
     */
    public multiply(other : Matrix) : Matrix {
        var result = new Matrix();
        this.multiplyToRef(other, result);
        return result;
    }

    /**
     * Updates the current Matrix from the passed one values.
     * Returns the updated Matrix.
     */
    public copyFrom(other : Matrix) : Matrix {
        for (var index = 0; index < 16; index++) {
            this.m[index] = other.m[index];
        }
        return this;
    }

    /**
     * Populates the passed array from the starting index with the Matrix values.
     * Returns the Matrix.
     */
    public copyToArray(array : Float32Array, offset : number = 0) : Matrix {
        for (var index = 0; index < 16; index++) {
            array[offset + index] = this.m[index];
        }
        return this;
    }

    /**
     * Sets the passed matrix "result" with the multiplication result of the current Matrix and the passed one.
     */
    public multiplyToRef(other : Matrix, result : Matrix) : Matrix {
        this.multiplyToArray(other, result.m, 0);
        return this;
    }

    /**
     * Sets the Float32Array "result" from the passed index "offset" with the multiplication result of the current Matrix and the passed one.
     */
    public multiplyToArray(other : Matrix, result : Float32Array, offset : number) : Matrix {
        var tm0 = this.m[0];
        var tm1 = this.m[1];
        var tm2 = this.m[2];
        var tm3 = this.m[3];
        var tm4 = this.m[4];
        var tm5 = this.m[5];
        var tm6 = this.m[6];
        var tm7 = this.m[7];
        var tm8 = this.m[8];
        var tm9 = this.m[9];
        var tm10 = this.m[10];
        var tm11 = this.m[11];
        var tm12 = this.m[12];
        var tm13 = this.m[13];
        var tm14 = this.m[14];
        var tm15 = this.m[15];

        var om0 = other.m[0];
        var om1 = other.m[1];
        var om2 = other.m[2];
        var om3 = other.m[3];
        var om4 = other.m[4];
        var om5 = other.m[5];
        var om6 = other.m[6];
        var om7 = other.m[7];
        var om8 = other.m[8];
        var om9 = other.m[9];
        var om10 = other.m[10];
        var om11 = other.m[11];
        var om12 = other.m[12];
        var om13 = other.m[13];
        var om14 = other.m[14];
        var om15 = other.m[15];

        result[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
        result[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
        result[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
        result[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;

        result[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
        result[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
        result[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
        result[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;

        result[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
        result[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
        result[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
        result[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;

        result[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
        result[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
        result[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
        result[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;

        return this;
    }

    /**
     * Boolean : True is the current Matrix and the passed one values are strictly equal.
     */
    public equals(value : Matrix) : boolean {
        return value &&
            (this.m[0] === value.m[0] && this.m[1] === value.m[1] && this.m[2] === value.m[2] && this.m[3] === value.m[3] &&
            this.m[4] === value.m[4] && this.m[5] === value.m[5] && this.m[6] === value.m[6] && this.m[7] === value.m[7] &&
            this.m[8] === value.m[8] && this.m[9] === value.m[9] && this.m[10] === value.m[10] && this.m[11] === value.m[11] &&
            this.m[12] === value.m[12] && this.m[13] === value.m[13] && this.m[14] === value.m[14] && this.m[15] === value.m[15]);
    }

    /**
     * Returns a new Matrix from the current Matrix.
     */
    public clone() : Matrix {
        return Matrix.FromValues(this.m[0], this.m[1], this.m[2], this.m[3],
            this.m[4], this.m[5], this.m[6], this.m[7],
            this.m[8], this.m[9], this.m[10], this.m[11],
            this.m[12], this.m[13], this.m[14], this.m[15]);
    }

    /**
     * Returns the string "Matrix"
     */
    public getClassName() : string {
        return "Matrix";
    }

    /**
     * Returns the Matrix hash code.
     */
    public getHashCode() : number {
        let hash = this.m[0] || 0;
        for (let i = 1; i < 16; i++) {
            hash = (hash * 397) ^ (this.m[i] || 0);
        }
        return hash;
    }

    /**
     * Decomposes the current Matrix into :
     * - a scale vector3 passed as a reference to update,
     * - a rotation quaternion passed as a reference to update,
     * - a translation vector3 passed as a reference to update.
     * Returns the boolean `true`.
     */
    public decompose(scale : Vector3, rotation : Quaternion, translation : Vector3) : boolean {
        translation.x = this.m[12];
        translation.y = this.m[13];
        translation.z = this.m[14];

        var xs = MathUtil.sign(this.m[0] * this.m[1] * this.m[2] * this.m[3]) < 0 ? -1 : 1;
        var ys = MathUtil.sign(this.m[4] * this.m[5] * this.m[6] * this.m[7]) < 0 ? -1 : 1;
        var zs = MathUtil.sign(this.m[8] * this.m[9] * this.m[10] * this.m[11]) < 0 ? -1 : 1;

        scale.x = xs * Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2]);
        scale.y = ys * Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6]);
        scale.z = zs * Math.sqrt(this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10]);

        if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
            rotation.x = 0;
            rotation.y = 0;
            rotation.z = 0;
            rotation.w = 1;
            return false;
        }

        Matrix.FromValuesToRef(
            this.m[0] / scale.x, this.m[1] / scale.x, this.m[2] / scale.x, 0,
            this.m[4] / scale.y, this.m[5] / scale.y, this.m[6] / scale.y, 0,
            this.m[8] / scale.z, this.m[9] / scale.z, this.m[10] / scale.z, 0,
            0, 0, 0, 1, MathTmp.Matrix[0]);

        Quaternion.FromRotationMatrixToRef(MathTmp.Matrix[0], rotation);

        return true;
    }

    /**
     * Returns a new Matrix as the extracted rotation matrix from the current one.
     */
    public getRotationMatrix() : Matrix {
        var result = Matrix.Identity();
        this.getRotationMatrixToRef(result);
        return result;
    }

    /**
     * Extracts the rotation matrix from the current one and sets it as the passed "result".
     * Returns the current Matrix.
     */
    public getRotationMatrixToRef(result : Matrix) : Matrix {
        var m = this.m;

        var xs = m[0] * m[1] * m[2] * m[3] < 0 ? -1 : 1;
        var ys = m[4] * m[5] * m[6] * m[7] < 0 ? -1 : 1;
        var zs = m[8] * m[9] * m[10] * m[11] < 0 ? -1 : 1;

        var sx = xs * Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
        var sy = ys * Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6]);
        var sz = zs * Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10]);

        Matrix.FromValuesToRef(
            m[0] / sx, m[1] / sx, m[2] / sx, 0,
            m[4] / sy, m[5] / sy, m[6] / sy, 0,
            m[8] / sz, m[9] / sz, m[10] / sz, 0,
            0, 0, 0, 1, result);
        return this;
    }

    // Statics
    /**
     * Returns a new Matrix set from the starting index of the passed array.
     */
    public static FromArray(array : number[], offset? : number) : Matrix {
        var result = new Matrix();

        if (!offset) {
            offset = 0;
        }
        Matrix.FromArrayToRef(array, offset, result);
        return result;
    }

    /**
     * Sets the passed "result" matrix from the starting index of the passed array.
     */
    public static FromArrayToRef(array : number[], offset : number, result : Matrix) {
        for (var index = 0; index < 16; index++) {
            result.m[index] = array[index + offset];
        }
    }

    /**
     * Sets the passed "result" matrix from the starting index of the passed Float32Array by multiplying each element by the float "scale".
     */
    public static FromFloat32ArrayToRefScaled(array : Float32Array, offset : number, scale : number, result : Matrix) {
        for (var index = 0; index < 16; index++) {
            result.m[index] = array[index + offset] * scale;
        }
    }

    /**
     * Sets the passed matrix "result" with the 16 passed floats.
     */
    public static FromValuesToRef(initialM11 : number, initialM12 : number, initialM13 : number, initialM14 : number,
                                  initialM21 : number, initialM22 : number, initialM23 : number, initialM24 : number,
                                  initialM31 : number, initialM32 : number, initialM33 : number, initialM34 : number,
                                  initialM41 : number, initialM42 : number, initialM43 : number, initialM44 : number, result : Matrix) : void {

        result.m[0] = initialM11;
        result.m[1] = initialM12;
        result.m[2] = initialM13;
        result.m[3] = initialM14;
        result.m[4] = initialM21;
        result.m[5] = initialM22;
        result.m[6] = initialM23;
        result.m[7] = initialM24;
        result.m[8] = initialM31;
        result.m[9] = initialM32;
        result.m[10] = initialM33;
        result.m[11] = initialM34;
        result.m[12] = initialM41;
        result.m[13] = initialM42;
        result.m[14] = initialM43;
        result.m[15] = initialM44;
    }

    /**
     * Returns the index-th row of the current matrix as a new Vector4.
     */
    public getRow(index : number) : Vector4 {
        if (index < 0 || index > 3) {
            return null;
        }
        var i = index * 4;
        return new Vector4(this.m[i + 0], this.m[i + 1], this.m[i + 2], this.m[i + 3]);
    }

    /**
     * Sets the index-th row of the current matrix with the passed Vector4 values.
     * Returns the updated Matrix.
     */
    public setRow(index : number, row : Vector4) : Matrix {
        if (index < 0 || index > 3) {
            return this;
        }
        var i = index * 4;
        this.m[i + 0] = row.x;
        this.m[i + 1] = row.y;
        this.m[i + 2] = row.z;
        this.m[i + 3] = row.w;
        return this;
    }

    /**
     * Sets the index-th row of the current matrix with the passed 4 x float values.
     * Returns the updated Matrix.
     */
    public setRowFromFloats(index : number, x : number, y : number, z : number, w : number) : Matrix {
        if (index < 0 || index > 3) {
            return this;
        }
        var i = index * 4;
        this.m[i + 0] = x;
        this.m[i + 1] = y;
        this.m[i + 2] = z;
        this.m[i + 3] = w;
        return this;
    }

    /**
     * Returns a new Matrix set from the 16 passed floats.
     */
    public static FromValues(initialM11 : number, initialM12 : number, initialM13 : number, initialM14 : number,
                             initialM21 : number, initialM22 : number, initialM23 : number, initialM24 : number,
                             initialM31 : number, initialM32 : number, initialM33 : number, initialM34 : number,
                             initialM41 : number, initialM42 : number, initialM43 : number, initialM44 : number) : Matrix {

        var result = new Matrix();

        result.m[0] = initialM11;
        result.m[1] = initialM12;
        result.m[2] = initialM13;
        result.m[3] = initialM14;
        result.m[4] = initialM21;
        result.m[5] = initialM22;
        result.m[6] = initialM23;
        result.m[7] = initialM24;
        result.m[8] = initialM31;
        result.m[9] = initialM32;
        result.m[10] = initialM33;
        result.m[11] = initialM34;
        result.m[12] = initialM41;
        result.m[13] = initialM42;
        result.m[14] = initialM43;
        result.m[15] = initialM44;

        return result;
    }

    /**
     * Returns a new Matrix composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
     */
    public static Compose(scale : Vector3, rotation : Quaternion, translation : Vector3) : Matrix {
        var result = Matrix.Identity();
        Matrix.ComposeToRef(scale, rotation, translation, result);
        return result;
    }

    /**
     * Update a Matrix with values composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
     */
    public static ComposeToRef(scale : Vector3, rotation : Quaternion, translation : Vector3, result : Matrix) : void {
        Matrix.FromValuesToRef(scale.x, 0, 0, 0,
            0, scale.y, 0, 0,
            0, 0, scale.z, 0,
            0, 0, 0, 1, MathTmp.Matrix[1]);

        rotation.toRotationMatrix(MathTmp.Matrix[0]);
        MathTmp.Matrix[1].multiplyToRef(MathTmp.Matrix[0], result);

        result.setTranslation(translation);
    }

    /**
     * Returns a new indentity Matrix.
     */
    public static Identity() : Matrix {
        return Matrix.FromValues(1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0);
    }

    /**
     * Sets the passed "result" as an identity matrix.
     */
    public static IdentityToRef(result : Matrix) : void {
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0, result);
    }

    /**
     * Returns a new zero Matrix.
     */
    public static Zero() : Matrix {
        return Matrix.FromValues(0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0,
            0.0, 0.0, 0.0, 0.0);
    }

    /**
     * Returns a new rotation matrix for "angle" radians around the X axis.
     */
    public static RotationX(angle : number) : Matrix {
        var result = new Matrix();
        Matrix.RotationXToRef(angle, result);
        return result;
    }

    /**
     * Returns a new Matrix as the passed inverted one.
     */
    public static Invert(source : Matrix) : Matrix {
        var result = new Matrix();
        source.invertToRef(result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the X axis.
     */
    public static RotationXToRef(angle : number, result : Matrix) : void {
        var s = Math.sin(angle);
        var c = Math.cos(angle);

        result.m[0] = 1.0;
        result.m[15] = 1.0;

        result.m[5] = c;
        result.m[10] = c;
        result.m[9] = -s;
        result.m[6] = s;

        result.m[1] = 0.0;
        result.m[2] = 0.0;
        result.m[3] = 0.0;
        result.m[4] = 0.0;
        result.m[7] = 0.0;
        result.m[8] = 0.0;
        result.m[11] = 0.0;
        result.m[12] = 0.0;
        result.m[13] = 0.0;
        result.m[14] = 0.0;
    }

    /**
     * Returns a new rotation matrix for "angle" radians around the Y axis.
     */
    public static RotationY(angle : number) : Matrix {
        var result = new Matrix();
        Matrix.RotationYToRef(angle, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Y axis.
     */
    public static RotationYToRef(angle : number, result : Matrix) : void {
        var s = Math.sin(angle);
        var c = Math.cos(angle);

        result.m[5] = 1.0;
        result.m[15] = 1.0;

        result.m[0] = c;
        result.m[2] = -s;
        result.m[8] = s;
        result.m[10] = c;

        result.m[1] = 0.0;
        result.m[3] = 0.0;
        result.m[4] = 0.0;
        result.m[6] = 0.0;
        result.m[7] = 0.0;
        result.m[9] = 0.0;
        result.m[11] = 0.0;
        result.m[12] = 0.0;
        result.m[13] = 0.0;
        result.m[14] = 0.0;
    }

    /**
     * Returns a new rotation matrix for "angle" radians around the Z axis.
     */
    public static RotationZ(angle : number) : Matrix {
        var result = new Matrix();
        Matrix.RotationZToRef(angle, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Z axis.
     */
    public static RotationZToRef(angle : number, result : Matrix) : void {
        var s = Math.sin(angle);
        var c = Math.cos(angle);

        result.m[10] = 1.0;
        result.m[15] = 1.0;

        result.m[0] = c;
        result.m[1] = s;
        result.m[4] = -s;
        result.m[5] = c;

        result.m[2] = 0.0;
        result.m[3] = 0.0;
        result.m[6] = 0.0;
        result.m[7] = 0.0;
        result.m[8] = 0.0;
        result.m[9] = 0.0;
        result.m[11] = 0.0;
        result.m[12] = 0.0;
        result.m[13] = 0.0;
        result.m[14] = 0.0;
    }

    /**
     * Returns a new rotation matrix for "angle" radians around the passed axis.
     */
    public static RotationAxis(axis : Vector3, angle : number) : Matrix {
        var result = Matrix.Zero();
        Matrix.RotationAxisToRef(axis, angle, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the passed axis.
     */
    public static RotationAxisToRef(axis : Vector3, angle : number, result : Matrix) : void {
        var s = Math.sin(-angle);
        var c = Math.cos(-angle);
        var c1 = 1 - c;

        axis.normalize();

        result.m[0] = (axis.x * axis.x) * c1 + c;
        result.m[1] = (axis.x * axis.y) * c1 - (axis.z * s);
        result.m[2] = (axis.x * axis.z) * c1 + (axis.y * s);
        result.m[3] = 0.0;

        result.m[4] = (axis.y * axis.x) * c1 + (axis.z * s);
        result.m[5] = (axis.y * axis.y) * c1 + c;
        result.m[6] = (axis.y * axis.z) * c1 - (axis.x * s);
        result.m[7] = 0.0;

        result.m[8] = (axis.z * axis.x) * c1 - (axis.y * s);
        result.m[9] = (axis.z * axis.y) * c1 + (axis.x * s);
        result.m[10] = (axis.z * axis.z) * c1 + c;
        result.m[11] = 0.0;

        result.m[15] = 1.0;
    }

    /**
     * Returns a new Matrix as a rotation matrix from the Euler angles (y, x, z).
     */
    public static RotationYawPitchRoll(yaw : number, pitch : number, roll : number) : Matrix {
        var result = new Matrix();
        Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a rotation matrix from the Euler angles (y, x, z).
     */
    public static RotationYawPitchRollToRef(yaw : number, pitch : number, roll : number, result : Matrix) : void {
        Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, this._tempQuaternion);
        this._tempQuaternion.toRotationMatrix(result);
    }

    /**
     * Returns a new Matrix as a scaling matrix from the passed floats (x, y, z).
     */
    public static Scaling(x : number, y : number, z : number) : Matrix {
        var result = Matrix.Zero();
        Matrix.ScalingToRef(x, y, z, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a scaling matrix from the passed floats (x, y, z).
     */
    public static ScalingToRef(x : number, y : number, z : number, result : Matrix) : void {
        result.m[0] = x;
        result.m[1] = 0.0;
        result.m[2] = 0.0;
        result.m[3] = 0.0;
        result.m[4] = 0.0;
        result.m[5] = y;
        result.m[6] = 0.0;
        result.m[7] = 0.0;
        result.m[8] = 0.0;
        result.m[9] = 0.0;
        result.m[10] = z;
        result.m[11] = 0.0;
        result.m[12] = 0.0;
        result.m[13] = 0.0;
        result.m[14] = 0.0;
        result.m[15] = 1.0;
    }

    /**
     * Returns a new Matrix as a translation matrix from the passed floats (x, y, z).
     */
    public static Translation(x : number, y : number, z : number) : Matrix {
        var result = Matrix.Identity();
        Matrix.TranslationToRef(x, y, z, result);
        return result;
    }

    /**
     * Sets the passed matrix "result" as a translation matrix from the passed floats (x, y, z).
     */
    public static TranslationToRef(x : number, y : number, z : number, result : Matrix) : void {
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            x, y, z, 1.0, result);
    }

    /**
     * Returns a new Matrix whose values are the interpolated values for "gradien" (float) between the ones of the matrices "startValue" and "endValue".
     */
    public static Lerp(startValue : Matrix, endValue : Matrix, gradient : number) : Matrix {
        var result = Matrix.Zero();
        for (var index = 0; index < 16; index++) {
            result.m[index] = startValue.m[index] * (1.0 - gradient) + endValue.m[index] * gradient;
        }
        return result;
    }

    /**
     * Returns a new Matrix whose values are computed by :
     * - decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices,
     * - interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end,
     * - recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices.
     */
    public static DecomposeLerp(startValue : Matrix, endValue : Matrix, gradient : number) : Matrix {
        var startScale = new Vector3(0, 0, 0);
        var startRotation = new Quaternion();
        var startTranslation = new Vector3(0, 0, 0);
        startValue.decompose(startScale, startRotation, startTranslation);

        var endScale = new Vector3(0, 0, 0);
        var endRotation = new Quaternion();
        var endTranslation = new Vector3(0, 0, 0);
        endValue.decompose(endScale, endRotation, endTranslation);

        var resultScale = Vector3.Lerp(startScale, endScale, gradient);
        var resultRotation = Quaternion.Slerp(startRotation, endRotation, gradient);
        var resultTranslation = Vector3.Lerp(startTranslation, endTranslation, gradient);

        return Matrix.Compose(resultScale, resultRotation, resultTranslation);
    }

    /**
     * Returns a new rotation Matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
     * This methods works for a Left-Handed system.
     */
    public static LookAtLH(eye : Vector3, target : Vector3, up : Vector3) : Matrix {
        var result = Matrix.Zero();
        Matrix.LookAtLHToRef(eye, target, up, result);
        return result;
    }

    /**
     * Sets the passed "result" Matrix as a rotation matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
     * This methods works for a Left-Handed system.
     */
    public static LookAtLHToRef(eye : Vector3, target : Vector3, up : Vector3, result : Matrix) : void {
        // Z axis
        target.subtractToRef(eye, this._zAxis);
        this._zAxis.normalize();

        // X axis
        Vector3.CrossToRef(up, this._zAxis, this._xAxis);

        if (this._xAxis.lengthSquared() === 0) {
            this._xAxis.x = 1.0;
        } else {
            this._xAxis.normalize();
        }

        // Y axis
        Vector3.CrossToRef(this._zAxis, this._xAxis, this._yAxis);
        this._yAxis.normalize();

        // Eye angles
        var ex = -Vector3.Dot(this._xAxis, eye);
        var ey = -Vector3.Dot(this._yAxis, eye);
        var ez = -Vector3.Dot(this._zAxis, eye);

        return Matrix.FromValuesToRef(this._xAxis.x, this._yAxis.x, this._zAxis.x, 0,
            this._xAxis.y, this._yAxis.y, this._zAxis.y, 0,
            this._xAxis.z, this._yAxis.z, this._zAxis.z, 0,
            ex, ey, ez, 1, result);
    }

    /**
     * Returns a new rotation Matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
     * This methods works for a Right-Handed system.
     */
    public static LookAtRH(eye : Vector3, target : Vector3, up : Vector3) : Matrix {
        var result = Matrix.Zero();
        Matrix.LookAtRHToRef(eye, target, up, result);
        return result;
    }

    /**
     * Sets the passed "result" Matrix as a rotation matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
     * This methods works for a Left-Handed system.
     */
    public static LookAtRHToRef(eye : Vector3, target : Vector3, up : Vector3, result : Matrix) : void {
        // Z axis
        eye.subtractToRef(target, this._zAxis);
        this._zAxis.normalize();

        // X axis
        Vector3.CrossToRef(up, this._zAxis, this._xAxis);

        if (this._xAxis.lengthSquared() === 0) {
            this._xAxis.x = 1.0;
        } else {
            this._xAxis.normalize();
        }

        // Y axis
        Vector3.CrossToRef(this._zAxis, this._xAxis, this._yAxis);
        this._yAxis.normalize();

        // Eye angles
        var ex = -Vector3.Dot(this._xAxis, eye);
        var ey = -Vector3.Dot(this._yAxis, eye);
        var ez = -Vector3.Dot(this._zAxis, eye);

        return Matrix.FromValuesToRef(this._xAxis.x, this._yAxis.x, this._zAxis.x, 0,
            this._xAxis.y, this._yAxis.y, this._zAxis.y, 0,
            this._xAxis.z, this._yAxis.z, this._zAxis.z, 0,
            ex, ey, ez, 1, result);
    }

    /**
     * Returns a new Matrix as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
     */
    public static OrthoLH(width : number, height : number, znear : number, zfar : number) : Matrix {
        var matrix = Matrix.Zero();
        Matrix.OrthoLHToRef(width, height, znear, zfar, matrix);
        return matrix;
    }

    /**
     * Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
     */
    public static OrthoLHToRef(width : number, height : number, znear : number, zfar : number, result : Matrix) : void {
        let n = znear;
        let f = zfar;

        let a = 2.0 / width;
        let b = 2.0 / height;
        let c = 2.0 / (f - n);
        let d = -(f + n) / (f - n);

        Matrix.FromValuesToRef(
            a, 0.0, 0.0, 0.0,
            0.0, b, 0.0, 0.0,
            0.0, 0.0, c, 0.0,
            0.0, 0.0, d, 1.0,
            result
        );
    }

    /**
     * Returns a new Matrix as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
     */
    public static OrthoOffCenterLH(left : number, right : number, bottom : number, top : number, znear : number, zfar : number) : Matrix {
        var matrix = Matrix.Zero();

        Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, matrix);

        return matrix;
    }

    /**
     * Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
     */
    public static OrthoOffCenterLHToRef(left : number, right : number, bottom : number, top : number, znear : number, zfar : number, result : Matrix) : void {
        let n = znear;
        let f = zfar;

        let a = 2.0 / (right - left);
        let b = 2.0 / (top - bottom);
        let c = 2.0 / (f - n);
        let d = -(f + n) / (f - n);
        let i0 = (left + right) / (left - right);
        let i1 = (top + bottom) / (bottom - top);

        Matrix.FromValuesToRef(
            a, 0.0, 0.0, 0.0,
            0.0, b, 0.0, 0.0,
            0.0, 0.0, c, 0.0,
            i0, i1, d, 1.0,
            result
        );
    }

    /**
     * Returns a new Matrix as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
     */
    public static OrthoOffCenterRH(left : number, right : number, bottom : number, top : number, znear : number, zfar : number) : Matrix {
        var matrix = Matrix.Zero();
        Matrix.OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, matrix);
        return matrix;
    }

    /**
     * Sets the passed matrix "result" as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
     */
    public static OrthoOffCenterRHToRef(left : number, right : number, bottom : number, top : number, znear : number, zfar : number, result : Matrix) : void {
        Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result);
        result.m[10] *= -1.0;
    }

    /**
     * Returns a new Matrix as a left-handed perspective projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
     */
    public static PerspectiveLH(width : number, height : number, znear : number, zfar : number) : Matrix {
        var matrix = Matrix.Zero();

        let n = znear;
        let f = zfar;

        let a = 2.0 * n / width;
        let b = 2.0 * n / height;
        let c = (f + n) / (f - n);
        let d = -2.0 * f * n / (f - n);

        Matrix.FromValuesToRef(
            a, 0.0, 0.0, 0.0,
            0.0, b, 0.0, 0.0,
            0.0, 0.0, c, 1.0,
            0.0, 0.0, d, 0.0,
            matrix
        );

        return matrix;
    }

    /**
     * Returns a new Matrix as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
     */
    public static PerspectiveFovLH(fov : number, aspect : number, znear : number, zfar : number) : Matrix {
        var matrix = Matrix.Zero();
        Matrix.PerspectiveFovLHToRef(fov, aspect, znear, zfar, matrix);
        return matrix;
    }

    /**
     * Sets the passed matrix "result" as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
     */
    public static PerspectiveFovLHToRef(fov : number, aspect : number, znear : number, zfar : number, result : Matrix, isVerticalFovFixed = true) : void {
        let n = znear;
        let f = zfar;

        let t = 1.0 / (Math.tan(fov * 0.5));
        let a = isVerticalFovFixed ? (t / aspect) : t;
        let b = isVerticalFovFixed ? t : (t * aspect);
        let c = (f + n) / (f - n);
        let d = -2.0 * f * n / (f - n);

        Matrix.FromValuesToRef(
            a, 0.0, 0.0, 0.0,
            0.0, b, 0.0, 0.0,
            0.0, 0.0, c, 1.0,
            0.0, 0.0, d, 0.0,
            result
        );
    }

    /**

     /**
     * Returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the passed Matrix.
     */
    public static GetAsMatrix2x2(matrix : Matrix) : Float32Array {
        return new Float32Array([
            matrix.m[0], matrix.m[1],
            matrix.m[4], matrix.m[5]
        ]);
    }

    /**
     * Returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the passed Matrix.
     */
    public static GetAsMatrix3x3(matrix : Matrix) : Float32Array {
        return new Float32Array([
            matrix.m[0], matrix.m[1], matrix.m[2],
            matrix.m[4], matrix.m[5], matrix.m[6],
            matrix.m[8], matrix.m[9], matrix.m[10]
        ]);
    }

    /**
     * Compute the transpose of the passed Matrix.
     * Returns a new Matrix.
     */
    public static Transpose(matrix : Matrix) : Matrix {
        var result = new Matrix();

        result.m[0] = matrix.m[0];
        result.m[1] = matrix.m[4];
        result.m[2] = matrix.m[8];
        result.m[3] = matrix.m[12];

        result.m[4] = matrix.m[1];
        result.m[5] = matrix.m[5];
        result.m[6] = matrix.m[9];
        result.m[7] = matrix.m[13];

        result.m[8] = matrix.m[2];
        result.m[9] = matrix.m[6];
        result.m[10] = matrix.m[10];
        result.m[11] = matrix.m[14];

        result.m[12] = matrix.m[3];
        result.m[13] = matrix.m[7];
        result.m[14] = matrix.m[11];
        result.m[15] = matrix.m[15];

        return result;
    }

    /**
     * Sets the passed matrix "mat" as a rotation matrix composed from the 3 passed  left handed axis.
     */
    public static FromXYZAxesToRef(xaxis : Vector3, yaxis : Vector3, zaxis : Vector3, mat : Matrix) {

        mat.m[0] = xaxis.x;
        mat.m[1] = xaxis.y;
        mat.m[2] = xaxis.z;

        mat.m[3] = 0.0;

        mat.m[4] = yaxis.x;
        mat.m[5] = yaxis.y;
        mat.m[6] = yaxis.z;

        mat.m[7] = 0.0;

        mat.m[8] = zaxis.x;
        mat.m[9] = zaxis.y;
        mat.m[10] = zaxis.z;

        mat.m[11] = 0.0;

        mat.m[12] = 0.0;
        mat.m[13] = 0.0;
        mat.m[14] = 0.0;

        mat.m[15] = 1.0;

    }

    /**
     * Sets the passed matrix "result" as a rotation matrix according to the passed quaternion.
     */
    public static FromQuaternionToRef(quat : Quaternion, result : Matrix) {

        var xx = quat.x * quat.x;
        var yy = quat.y * quat.y;
        var zz = quat.z * quat.z;
        var xy = quat.x * quat.y;
        var zw = quat.z * quat.w;
        var zx = quat.z * quat.x;
        var yw = quat.y * quat.w;
        var yz = quat.y * quat.z;
        var xw = quat.x * quat.w;

        result.m[0] = 1.0 - (2.0 * (yy + zz));
        result.m[1] = 2.0 * (xy + zw);
        result.m[2] = 2.0 * (zx - yw);
        result.m[3] = 0.0;
        result.m[4] = 2.0 * (xy - zw);
        result.m[5] = 1.0 - (2.0 * (zz + xx));
        result.m[6] = 2.0 * (yz + xw);
        result.m[7] = 0.0;
        result.m[8] = 2.0 * (zx + yw);
        result.m[9] = 2.0 * (yz - xw);
        result.m[10] = 1.0 - (2.0 * (yy + xx));
        result.m[11] = 0.0;

        result.m[12] = 0.0;
        result.m[13] = 0.0;
        result.m[14] = 0.0;

        result.m[15] = 1.0;
    }
}

export enum Space {
    LOCAL = 0,
    WORLD = 1,
    BONE = 2
}

export enum Orientation {
    CW = 0,
    CCW = 1
}

// Temporary pre-allocated objects for engine internal use
// usage in any internal function :
// var tmp = Tmp.Vector3[0];   <= gets access to the first pre-created Vector3
// There's a Tmp array per object type : int, float, Vector2, Vector3, Vector4, Quaternion, Matrix
export class Tmp {
    public static Vector2 : Vector2[] = [Vector2.Zero(), Vector2.Zero(), Vector2.Zero()];  // 3 temp Vector2 at once should be enough
    public static Vector3 : Vector3[] = [Vector3.Zero(), Vector3.Zero(), Vector3.Zero(),
        Vector3.Zero(), Vector3.Zero(), Vector3.Zero(), Vector3.Zero(), Vector3.Zero(), Vector3.Zero()];    // 9 temp Vector3 at once should be enough
    public static Vector4 : Vector4[] = [Vector4.Zero(), Vector4.Zero(), Vector4.Zero()];  // 3 temp Vector4 at once should be enough
    public static Quaternion : Quaternion[] = [Quaternion.Zero(), Quaternion.Zero()];                // 2 temp Quaternion at once should be enough
    public static Matrix : Matrix[] = [Matrix.Zero(), Matrix.Zero(),
        Matrix.Zero(), Matrix.Zero(),
        Matrix.Zero(), Matrix.Zero(),
        Matrix.Zero(), Matrix.Zero()];                      // 6 temp Matrices at once should be enough
}
// Same as Tmp but not exported to keep it onyl for math functions to avoid conflicts
class MathTmp {
    public static Vector3 : Vector3[] = [Vector3.Zero()];
    public static Matrix : Matrix[] = [Matrix.Zero(), Matrix.Zero()];
    public static Quaternion : Quaternion[] = [Quaternion.Zero()];
}

