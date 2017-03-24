import {Quaternion} from "./quaternion";
import {Matrix} from "./matrix";

export class Vector3 {

    public x : number;
    public y : number;
    public z : number;

    constructor(x : number = 0, y : number = 0, z : number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Returns a string with the Vector3 coordinates.
     */
    public toString() : string {
        return "{x: " + this.x + " y:" + this.y + " z:" + this.z + "}";
    }

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
    public minimize(other : Vector3) : Vector3 {
        if (other.x < this.x) this.x = other.x;
        if (other.y < this.y) this.y = other.y;
        if (other.z < this.z) this.z = other.z;
        return this;
    }

    /**
     * Updates the current Vector3 with the maximal coordinate values between its and the passed vector ones.
     * Returns the updated Vector3.
     */
    public maximize(other : Vector3) : Vector3 {
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
    public clone(out? : Vector3) : Vector3 {
        out = out || new Vector3();
        out.x = this.x;
        out.y = this.y;
        out.z = this.z;
        return out;
    }

    /**
     * Copies the passed vector coordinates to the current Vector3 ones.
     * Returns the updated Vector3.
     */
    public copy(source : Vector3) : Vector3 {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        return this;
    }

    /**
     * Copies the passed floats to the current Vector3 coordinates.
     * Returns the updated Vector3.
     */
    public set(x : number, y : number, z : number) : Vector3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

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
        result.x = left.y * right.z - left.z * right.y;
        result.y = left.z * right.x - left.x * right.z;
        result.z = left.x * right.y - left.y * right.x;
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
        result.copy(vector);
        result.normalize();
    }

    public static minimize(left : Vector3, right : Vector3) : Vector3 {
        var min = left.clone();
        min.minimize(right);
        return min;
    }

    public static Maximize(left : Vector3, right : Vector3) : Vector3 {
        var max = left.clone();
        max.maximize(right);
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
        var quat = Quaternion.Identity();
        Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
        quat.toEulerAnglesToRef(ref);
    }
}
