export class Vector2 {

    public x : number;
    public y : number;

    constructor(x : number = 0, y : number = 0) {
        this.x = x;
        this.y = y;
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

    public dot(other : Vector2) : number {
        return this.x * other.x + this.y * other.y;
    }

    public cross(other : Vector2) : number {
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

    public addVector(other : Vector2) : this {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    public subVector(other : Vector2) : this {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }

    public addVectorNew(other : Vector2) : Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    public subVectorNew(other : Vector2) : Vector2 {
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
        const nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
        const ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
        this.x = nx;
        this.y = ny;
        return this;
    }

    public rotateNew(radians : number) : Vector2 {
        const nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
        const ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
        return new Vector2(nx, ny);
    }

    public project(other : Vector2) : Vector2 {
        const e = ( (this.x * other.x) + (this.y * other.y) ) / ((other.x * other.x) + (other.y * other.y));
        this.x = e * other.x;
        this.y = e * other.y;
        return this;
    }

    public projectNew(other : Vector2) : Vector2 {
        const e = ( (this.x * other.x) + (this.y * other.y) ) / ((other.x * other.x) + (other.y * other.y));
        return new Vector2(e * other.x, e * other.y);
    }

    public distanceTo(other : Vector2) : number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return dx * dx + dy * dy;
    }

    public clone() : Vector2 {
        return new Vector2(this.x, this.y);
    }

    public isZero() : boolean {
        return this.x === 0 && this.y === 0;
    }

    public isEqual(other : Vector2) : boolean {
        return this.x === other.x && this.y === other.y;
    }

    public toString() : string {
        return `{x: ${this.x}, y: ${this.y}}`;
    }

}
