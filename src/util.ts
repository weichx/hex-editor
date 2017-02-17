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

export function hitTestRect(x : number, y : number, w : number, h : number, point : Vector2) {
    return point.x >= x && x + w >= point.x && point.y >= y && y + h >= point.y
}

export function distanceTestPoint(x : number, y : number, point : Vector2, radius : number) {
    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
}

export function hitTestLine(x1 : number, y1 : number, x2 : number, y2 : number, point : Vector2, threshold = 1) {
    return distanceSquaredToLineSegment(x1, y1, x2, y2, point.x, point.y) <= threshold * threshold;
}

export function randomPositiveInteger() {
    return ~~(Math.random() * 9999999 + 1);
}

function distanceSquaredToLineSegment2(lx1 : number, ly1 : number, ldx : number, ldy : number, lineLengthSquared : number, px : number, py : number) {
    var t; // t===0 at line pt 1 and t ===1 at line pt 2
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

export class EnumSelect {}