export type VoidFn = () => void;

export function setDefault<T>(value : any, defaultValue : T) : T {
   if(value === void 0 || typeof defaultValue !== typeof value) {
       return defaultValue;
   }
}

export function traverse(node : any, fn : (n : any) => void) {
    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
    fn(node);
}

export function traverseRootFirst(node : any, fn : (n : any) => void) : void {
    fn(node);
    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
}

export function traverseChildrenFirst(node : any, fn : (n : any) => void) : void {
    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
    fn(node);
}

export function traverseChildren(node : any, fn : (n : any) => void) {
    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
}

export function clamp(value : number, min : number, max : number) {
    if (value > max) return max;
    if (value < min) return min;
    return value;
}

export function clamp01(value : number) : number {
    if (value > 1) return 1;
    if (value < 0) return 0;
    return value;
}

export function titlize(input : string) : string {
    return input.replace(/([A-Z])/g, ' $1')// insert a space before all caps
        .replace(/^./, function (str) { return str.toUpperCase(); });   // uppercase the first character
}

var STRING_DASHERIZE_REGEXP = (/([a-z\d])([A-Z])/g);
export function dasherize(str : string) : string {
    str = str.replace(/_/g, '-');
    return str.replace(STRING_DASHERIZE_REGEXP, '$1-$2').toLowerCase();
}

export function hitTestRect(x : number, y : number, w : number, h : number, point : IVector2) {
    return point.x >= x && x + w >= point.x && point.y >= y && y + h >= point.y
}

export function distanceTestPoint(test : IVector2, point : IVector2, radius : number) {
    const x = test.x;
    const y = test.y;
    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
}

export function hitTestLine2(p0 : IVector2, p1 : IVector2, point : IVector2, threshold : number = 1) {
    return hitTestLine(p0.x, p0.y, p1.x, p1.y, point, threshold);
}

export function hitTestLine(x1 : number, y1 : number, x2 : number, y2 : number, point : IVector2, threshold = 1) {
    return distanceSquaredToLineSegment(x1, y1, x2, y2, point.x, point.y) <= threshold * threshold;
}

export function randomPositiveInteger() {
    return getRandomInt(0, Number.MAX_SAFE_INTEGER);
}

export function getRandomInt(min : number, max : number) : number {
    return ~~(Math.random() * (max - min + 1)) + min;
}

function distanceSquaredToLineSegment2(lx1 : number, ly1 : number, ldx : number, ldy : number, lineLengthSquared : number, px : number, py : number) {
    var t : number; // t===0 at line pt 1 and t ===1 at line pt 2
    if (!lineLengthSquared) {
        // 0-length line segment. Any t will return same result
        t = 0;
    }
    else {
        t = ((px - lx1) * ldx + (py - ly1) * ldy) / lineLengthSquared;

        if (t < 0)
            t = 0;
        else if (t > 1)
            t = 1;
    }

    var lx = lx1 + t * ldx,
        ly = ly1 + t * ldy,
        dx = px - lx,
        dy = py - ly;
    return dx * dx + dy * dy;
}

/**
 * Calculate the square of the distance between a finite line segment and a point.
 * @alias module:distance-to-line-segment.squared
 * @param {number} lx1 - x-coordinate of line segment's first point
 * @param {number} ly1 - y-coordinate of line segment's first point
 * @param {number} lx2 - x-coordinate of the line segment's second point
 * @param {number} ly2 - y-coordinate of the line segment's second point
 * @param {number} px - x coordinate of point
 * @param {number} py - y coordinate of point
 */

function distanceSquaredToLineSegment(lx1 : number, ly1 : number, lx2 : number, ly2 : number, px : number, py : number) {
    var ldx = lx2 - lx1,
        ldy = ly2 - ly1,
        lineLengthSquared = ldx * ldx + ldy * ldy;
    return distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py);
}

//used for rendering integer instead of float / double
export class Integer {}

export class Select {}

export function Select1(options : any[]) {

}

export class EnumSelect {}