
//Vector4 class created for EulerAngle class conversion to Quaternion
import {Matrix} from "./matrix";
import {Vector3} from "./vector3";
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
