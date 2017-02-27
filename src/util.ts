
export function getBits(value : number, offset : number, bitCount : number) : number {
    return (value >> offset) & (1 << bitCount) - 1;
}

//todo -- untested
function getMask(start :number, end : number) : number {
    return (~0 >> (32 - start - 1)) & (~0 << (32 - end))
}

export function set1stByte(target : number, value : number) {
    return (target & 0xffffff00) | (value & 0x000000ff);
}

export function setBytes(target : number, value : number, byteCount : number, offset : number) : number {
    // int x = (number >> (8*n)) & 0xff;
    return (target & 0xff000000) | (value & 0x00ffffff)
}

export function getNthByte(value : number, byteNumber : number) : number {
    return (value >> (8* byteNumber)) & 0xff;
}

//todo -- untested
export function setBits(target : number, value : number, offset : number, bitCount : number) : number {
    var mask = getMask(0, bitCount);
    return (target & ~mask) | (value & mask);
}

export function setHighLowBits(high : number, low : number) : number {
    return (high << 16) | (low & 0xffff);
}

export function getLow16Bits(value : number) : number {
    return value & 0xFFFF;
}

export function getHigh16Bits(value : number) : number {
    return (value >> 16) & ( 1 << 16) - 1;
}

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

export function hitTestRect(x : number, y : number, w : number, h : number, point : {x: number, y : number}) {
    return point.x >= x && x + w >= point.x && point.y >= y && y + h >= point.y
}

export function distanceTestPoint(x : number, y : number, point : {x: number, y : number}, radius : number) {
    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
}

export function hitTestLine(x1 : number, y1 : number, x2 : number, y2 : number, point : {x: number, y : number}, threshold = 1) {
    return distanceSquaredToLineSegment(x1, y1, x2, y2, point.x, point.y) <= threshold * threshold;
}

export function randomPositiveInteger() {
    return ~~(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function titlize(input : string) : string {
    return input.replace(/([A-Z])/g, ' $1')// insert a space before all caps
        .replace(/^./, function (str) { return str.toUpperCase(); });   // uppercase the first character
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