import {Vector2} from "../../src/runtime/vector2";
import {AngleUnit, MathUtil} from "../../src/math_util";
import {Matrix3x3} from "../../src/runtime/matrix3x3";
describe("Vectors", function () {

    it("should rotate correctly", function () {
        const v = new Vector2(1, 1);
        v.rotate(MathUtil.DegreesToRadians * 45);
        expect(v.x).toBeCloseTo(0, 5);
        expect(v.y).toBeCloseTo(1.414214, 5);
        v.x = 5;
        v.y = 11;
        v.rotate(MathUtil.DegreesToRadians * 33);
        expect(v.x).toBeCloseTo(-1.797677, 5);
        expect(v.y).toBeCloseTo(11.948571, 5);
    });

});

describe("Matrix 3x3", function () {

    it("should transform a direction", function () {
        const m = new Matrix3x3();
        const rad = 33 * MathUtil.DegreesToRadians;
        m.rotate(45, null, AngleUnit.Degrees);
        expect(m.getRotation(AngleUnit.Degrees)).toBeCloseTo(45, 1);
        const v = new Vector2(1, 1);
        m.transformDirection(v);
        expect(v.x).toBeCloseTo(0, 5);
        expect(v.y).toBeCloseTo(1.414214, 5);
    });

});