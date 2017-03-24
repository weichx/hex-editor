import {Matrix} from "./matrix";
import {Vector3} from "./vector3";

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
        var rotMat = Matrix.Identity();
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