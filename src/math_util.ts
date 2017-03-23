export enum AngleUnit {
    Radians, Degrees
}

export const MathUtil = {
    RadiansToDegrees: 57.2957795130823,
    DegreesToRadians: 0.01745329251994,
    E: Math.E,
    Log2E: Math.LOG2E,
    Log10E: Math.LOG10E,
    Pi: Math.PI,
    PiOver2: Math.PI / 2.0,
    PiOver4: Math.PI / 4.0,
    TwoPi: Math.PI * 2.0,

    sign(value : number): number {
        if (value === 0 || isNaN(value))
            return value;

        return value > 0 ? 1 : -1;
    },

    clamp(value : number, min : number, max : number) {
        value = (value > max) ? max : value;
        value = (value < min) ? min : value;
        return value;
    },

    clamp01(value : number) {
        value = (value > 1) ? 1 : value;
        value = (value < 0) ? 0 : value;
        return value;
    },

    distance(value1 : number, value2 : number): number {
        return Math.abs(value1 - value2);
    },

    barycentric(value1 : number, value2 : number, value3 : number, amount1 : number, amount2 : number): number {
        return value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2;
    },

    catmullRom(value1 : number, value2 : number, value3 : number, value4 : number, amount : number): number {
        // Using formula from http://www.mvps.org/directx/articles/catmull/
        const amountSquared = amount * amount;
        const amountCubed = amountSquared * amount;
        return (0.5 * (2.0 * value2 +
        (value3 - value1) * amount +
        (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared +
        (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed));
    },

    hermite(value1 : number, tangent1 : number, value2 : number, tangent2 : number, amount : number) {
        let v1 = value1;
        let v2 = value2;
        let t1 = tangent1;
        let t2 = tangent2;
        let s = amount;
        let result = 0;
        let sCubed = s * s * s;
        let sSquared = s * s;

        if (amount == 0)
            result = value1;
        else if (amount == 1)
            result = value2;
        else
            result = (2 * v1 - 2 * v2 + t2 + t1) * sCubed +
                (3 * v2 - 3 * v1 - 2 * t1 - t2) * sSquared +
                t1 * s +
                v1;
        return result;
    },

    lerp(value1 : number, value2 : number, amount : number) {
        return ((1 - amount) * value1) + (value2 * amount);
    },

    smoothStep(value1 : number, value2 : number, amount : number): number {
        return this.hermite(value1, 0, value2, 0, this.clamp01(amount));
    },

    wrapAngleDegrees(angle : number) {
        let x = angle % 360;
        if (x < 0)
            x += 360;
        return x;
    },

    wrapAngle(angle : number) {
        const PI = Math.PI;
        const TwoPI = PI * 2;
        if ((angle > -PI) && (angle <= PI)) {
            return angle;
        }
        angle %= TwoPI;
        if (angle <= -PI) {
            return angle + TwoPI;
        }
        if (angle > PI) {
            return angle - TwoPI;
        }
        return angle;
    },

    normalizeAngle180(angle : number) {
        let x = (angle + 180) % 360;
        if (x < 0)
            x += 360;
        return x - 180;
    },

    isPowerOf2(value : number): boolean {
        var int = value | 0;
        if (value !== int) return false;
        return (int > 0) && ((int & (int - 1)) == 0);
    }

};