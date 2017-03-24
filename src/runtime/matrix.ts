import {MathUtil} from "../math_util";
import {Quaternion} from "./quaternion";
import {Vector3} from "./vector3";
import {Vector4} from "./vector4";

export const ToGammaSpace = 1 / 2.2;
export const ToLinearSpace = 2.2;
export const Epsilon = 0.001;


export class Matrix {

    public m : Float32Array = new Float32Array(16);

    // Properties
    /**
     * Boolean : True is the matrix is the identity matrix
     */
    public isIdentity() : boolean {
        if (this.m[0] !== 1.0 || this.m[5] !== 1.0 || this.m[10] !== 1.0 || this.m[15] !== 1.0)
            return false;

        return !(this.m[1] !== 0.0 || this.m[2] !== 0.0 || this.m[3] !== 0.0 ||
        this.m[4] !== 0.0 || this.m[6] !== 0.0 || this.m[7] !== 0.0 ||
        this.m[8] !== 0.0 || this.m[9] !== 0.0 || this.m[11] !== 0.0 ||
        this.m[12] !== 0.0 || this.m[13] !== 0.0 || this.m[14] !== 0.0);

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
     * Sets the passed matrix "result" with the addition result of the current Matrix and the passed one.
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
            0, 0, 0, 1, internalScratch0);

        Quaternion.FromRotationMatrixToRef(internalScratch0, rotation);

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
        const m = internalScratch0;
        const m1 = internalScratch1;
        Matrix.FromValuesToRef(scale.x, 0, 0, 0,
            0, scale.y, 0, 0,
            0, 0, scale.z, 0,
            0, 0, 0, 1, internalScratch0);

        rotation.toRotationMatrix(internalScratch1);
        internalScratch0.multiplyToRef(internalScratch1, result);

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
        const q = new Quaternion();
        Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, q);
        q.toRotationMatrix(result);
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

    // public static getCSSMatrix(source : Matrix) {
    //     const m = source.m;
    //     // matrix.m[0], matrix.m[1], matrix.m[2],
    //     // matrix.m[4], matrix.m[5], matrix.m[6],
    //     // matrix.m[8], matrix.m[9], matrix.m[10]
    //     return {
    //         a: m[0],
    //         b: m[1],
    //         c: m[5],
    //         d: m[6],
    //         tx: m[12],
    //         ty: m[13]
    //     }
    // }
}

const internalScratch0 = new Matrix();
const internalScratch1 = new Matrix();