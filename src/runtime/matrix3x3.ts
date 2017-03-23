import {Vector2} from "./vector2";
import {AngleUnit, MathUtil} from "../math_util";

/*
 * Layout
 * [ a  c  tx ]
 * [ b  d  ty ]
 * [ 0  0  1  ]
 *
 *
 * */
export class Matrix3x3 {

    public a : number;
    public b : number;
    public c : number;
    public d : number;
    public tx : number;
    public ty : number;

    constructor() {
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
    }

    public get m0() {
        return this.a;
    }

    public get m1() {
        return this.b;
    }

    public get m2() {
        return 0;
    }

    public get m3() {
        return this.c;
    }

    public get m4() {
        return this.d;
    }

    public get m5() {
        return 0
    }

    public get m6() {
        return this.tx;
    }

    public get m7() {
        return this.ty;
    }

    public get m8() {
        return 1;
    }

    public set(a : number, b : number, c : number, d : number, tx : number, ty : number) : this {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    }

    public identity() : Matrix3x3 {
        this.a = this.d = 1;
        this.b = this.c = this.tx = this.ty = 0;
        return this;
    }

    public translate(point : IVector2) : this {
        const x = point.x;
        const y = point.y;
        this.tx += x * this.a + y * this.c;
        this.ty += x * this.b + y * this.d;
        return this;
    }

    public scale(scale : IVector2, center? : IVector2) : this {
        if (center) {
            this.translate(center);
        }
        this.a *= scale.x;
        this.b *= scale.x;
        this.c *= scale.y;
        this.d *= scale.y;
        if (center) {
            this.translate(new Vector2(center.x * -1, center.y * -1));
        }
        return this;
    }

    //todo should translation be in here?
    public rotate(angle : number, center? : IVector2, angleUnit = AngleUnit.Radians) : this {
        if (angleUnit === AngleUnit.Degrees) {
            angle *= MathUtil.DegreesToRadians;
        }
        if (center) {
            var x = center.x;
            var y = center.y;
        }
        else {
            var x = this.tx;
            var y = this.ty;
        }

        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const tx = x - x * cos + y * sin;
        const ty = y - x * sin - y * cos;
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        this.a = cos * a + sin * c;
        this.b = cos * b + sin * d;
        this.c = -sin * a + cos * c;
        this.d = -sin * b + cos * d;
        this.tx += tx * a + ty * c;
        this.ty += tx * b + ty * d;
        return this;
    }

    public multiply(mx : Matrix3x3) {
        const a1 = this.a;
        const b1 = this.b;
        const c1 = this.c;
        const d1 = this.d;
        const a2 = mx.a;
        const b2 = mx.c;
        const c2 = mx.b;
        const d2 = mx.d;
        const tx2 = mx.tx;
        const ty2 = mx.ty;
        this.a = a2 * a1 + c2 * c1;
        this.c = b2 * a1 + d2 * c1;
        this.b = a2 * b1 + c2 * d1;
        this.d = b2 * b1 + d2 * d1;
        this.tx += tx2 * a1 + ty2 * c1;
        this.ty += tx2 * b1 + ty2 * d1;
        return this;
    }

    public invert() : this {
        var a = this.a,
            b = this.b,
            c = this.c,
            d = this.d,
            tx = this.tx,
            ty = this.ty,
            det = a * d - b * c,
            res = null;
        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
            this.a =  d / det;
            this.b = -b / det;
            this.c = -c / det;
            this.d = a / det;
            this.tx = (c * ty - d * tx) / det;
            this.ty = (b * tx - a * ty) / det;
            res = this;
        }
        return res;
    }

    public invertNew(out? : Matrix3x3) : Matrix3x3 {
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const tx = this.tx;
        const ty = this.ty;
        const det = a * d - b * c;
        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
            const retn = out || new Matrix3x3();
            retn.a = d / det;
            retn.b = -b / det;
            retn.c = -c / det;
            retn.d = a / det;
            retn.tx = (c * ty - d * tx) / det;
            retn.ty = (b * tx - a * ty) / det;
            return retn;
        }
        return null;
    }

    public isIdentity() {
        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1
            && this.tx === 0 && this.ty === 0;
    }

    public transformDirection(point : Vector2) : Vector2 {
        const x = point.x;
        const y = point.y;
        point.x = x * this.a + y * this.c;
        point.y = x * this.b + y * this.d;
        return point;
    }

    public transformPoint(point : Vector2) : Vector2 {
        const x = point.x;
        const y = point.y;
        point.x = x * this.a + y * this.c + this.tx;
        point.y = x * this.b + y * this.d + this.ty;
        return point;
    }

    public transformPointNew(point : IVector2) : Vector2 {
        const x = point.x;
        const y = point.y;
        return new Vector2(
            x * this.a + y * this.c + this.tx,
            x * this.b + y * this.d + this.ty
        );
    }

    public inverseTransform(point : IVector2) : Vector2 {
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const d = this.d;
        const tx = this.tx;
        const ty = this.ty;
        const det = a * d - b * c;
        let res = null;
        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
            const x = point.x - this.tx;
            const y = point.y - this.ty;
            res = new Vector2(
                (x * d - y * c) / det,
                (y * a - x * b) / det
            );

        }
        return res;
    }

    // public decompose() {
    //     var a = this.a;
    //     var b = this.b;
    //     var c = this.c;
    //     var d = this.d;
    //     var det = a * d - b * c;
    //     var sqrt = Math.sqrt;
    //     var degrees = 180 / Math.PI;
    //     var rotate;
    //     var scale = new Vector2();
    //
    //     if (a !== 0 || b !== 0) {
    //         var r = sqrt(a * a + b * b);
    //         rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
    //         scale.x = r;
    //         scale.y = det / r;
    //     } else if (c !== 0 || d !== 0) {
    //         var s = sqrt(c * c + d * d);
    //         rotate = Math.asin(c / s) * (d > 0 ? 1 : -1);
    //         scale.x = det / s;
    //         scale.y = s;
    //     } else { // a = b = c = d = 0
    //         rotate = 0;
    //         scale.x = 0;
    //         scale.y = 0;
    //     }
    //     return {
    //         translation: new Vector2(this.tx, this.ty),
    //         rotation: rotate * degrees,
    //         scale: scale
    //     };
    // }

    public getTranslation(out? : Vector2) {
        out = out || new Vector2();
        out.x = this.tx;
        out.y = this.ty;
        return out;
    }

    public getScale(out? : Vector2) {
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var det = a * d - b * c;
        out = out || new Vector2();

        if (a !== 0 || b !== 0) {
            var r = Math.sqrt(a * a + b * b);
            out.x = r;
            out.y = det / r;
        } else if (c !== 0 || d !== 0) {
            var s = Math.sqrt(c * c + d * d);
            out.x = det / s;
            out.y = s;
        } else { // a = b = c = d = 0
            out.x = 0;
            out.y = 0;
        }
        return out;
    }

    public getRotation(unitType = AngleUnit.Radians) {
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var rotation = 0;

        if (a !== 0 || b !== 0) {
            var r = Math.sqrt(a * a + b * b);
            rotation = Math.acos(a / r) * (b > 0 ? 1 : -1);
        } else if (c !== 0 || d !== 0) {
            var s = Math.sqrt(c * c + d * d);
            rotation = Math.asin(c / s) * (d > 0 ? 1 : -1);
        } else { // a = b = c = d = 0
            rotation = 0;
        }

        return unitType === AngleUnit.Degrees ? rotation * MathUtil.RadiansToDegrees : rotation;
    }

    public copy(other : Matrix3x3) : this {
        this.a = other.a;
        this.b = other.b;
        this.c = other.c;
        this.d = other.d;
        this.tx = other.tx;
        this.ty = other.ty;
        return this;
    }

    public equals(other : Matrix3x3) {
        return other.a === this.a && other.b === this.b && other.c === this.c &&
            other.d === this.d && other.tx === this.tx && other.ty === this.ty;
    }

    public clone(out? : Matrix3x3) {
        return (out || new Matrix3x3()).set(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }

    public static createIdentity() {
        return new Matrix3x3();
    }

    public static createRotation(radians : number, out? : Matrix3x3) {
        const result = out || new Matrix3x3();
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        result.a = cos;
        result.b = sin;
        result.c = -sin;
        result.d = cos;
        result.tx = 0;
        result.ty = 0;
        return result;
    }

    public static createScale(xScale : number, yScale : number, out? : Matrix3x3) {
        const result = out || new Matrix3x3();
        result.a = xScale;
        result.b = 0;
        result.d = yScale;
        result.c = 0;
        result.tx = 0;
        result.ty = 0;
        return result;
    }

    public static createTranslation(x : number, y : number, out? : Matrix3x3) {
        const result = out || new Matrix3x3();
        result.a = 1;
        result.b = 0;
        result.c = 0;
        result.d = 1;
        result.tx = x;
        result.ty = y;
        return result;
    }

    public static multiply(mat1 : Matrix3x3, mat2 : Matrix3x3, out? : Matrix3x3) : Matrix3x3 {
        out = out || new Matrix3x3();
        out.copy(mat1);
        out.multiply(mat2);
        return out;
    }

    public static scratch0 = new Matrix3x3();
    public static scratch1 = new Matrix3x3();
    public static scratch2 = new Matrix3x3();
    public static scratch3 = new Matrix3x3();
    public static scratch4 = new Matrix3x3();

}
