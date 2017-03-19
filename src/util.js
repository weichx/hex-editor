"use strict";
exports.__esModule = true;
function setDefault(value, defaultValue) {
    if (value === void 0 || typeof defaultValue !== typeof value) {
        return defaultValue;
    }
}
exports.setDefault = setDefault;
function traverse(node, fn) {
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
    fn(node);
}
exports.traverse = traverse;
function traverseRootFirst(node, fn) {
    fn(node);
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
}
exports.traverseRootFirst = traverseRootFirst;
function traverseChildrenFirst(node, fn) {
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
    fn(node);
}
exports.traverseChildrenFirst = traverseChildrenFirst;
function traverseChildren(node, fn) {
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverse(node.children[i], fn);
        }
    }
}
exports.traverseChildren = traverseChildren;
function clamp(value, min, max) {
    if (value > max)
        return max;
    if (value < min)
        return min;
    return value;
}
exports.clamp = clamp;
function clamp01(value) {
    if (value > 1)
        return 1;
    if (value < 0)
        return 0;
    return value;
}
exports.clamp01 = clamp01;
function titlize(input) {
    return input.replace(/([A-Z])/g, ' $1') // insert a space before all caps
        .replace(/^./, function (str) { return str.toUpperCase(); }); // uppercase the first character
}
exports.titlize = titlize;
var STRING_DASHERIZE_REGEXP = (/([a-z\d])([A-Z])/g);
function dasherize(str) {
    str = str.replace(/_/g, '-');
    return str.replace(STRING_DASHERIZE_REGEXP, '$1-$2').toLowerCase();
}
exports.dasherize = dasherize;
function hitTestRect(x, y, w, h, point) {
    return point.x >= x && x + w >= point.x && point.y >= y && y + h >= point.y;
}
exports.hitTestRect = hitTestRect;
function distanceTestPoint(x, y, point, radius) {
    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
}
exports.distanceTestPoint = distanceTestPoint;
function hitTestLine(x1, y1, x2, y2, point, threshold) {
    if (threshold === void 0) { threshold = 1; }
    return distanceSquaredToLineSegment(x1, y1, x2, y2, point.x, point.y) <= threshold * threshold;
}
exports.hitTestLine = hitTestLine;
function randomPositiveInteger() {
    return getRandomInt(0, Number.MAX_SAFE_INTEGER);
}
exports.randomPositiveInteger = randomPositiveInteger;
function getRandomInt(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInt = getRandomInt;
function distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py) {
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
    var lx = lx1 + t * ldx, ly = ly1 + t * ldy, dx = px - lx, dy = py - ly;
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
function distanceSquaredToLineSegment(lx1, ly1, lx2, ly2, px, py) {
    var ldx = lx2 - lx1, ldy = ly2 - ly1, lineLengthSquared = ldx * ldx + ldy * ldy;
    return distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py);
}
//used for rendering integer instead of float / double
var Integer = (function () {
    function Integer() {
    }
    return Integer;
}());
exports.Integer = Integer;
var Select = (function () {
    function Select() {
    }
    return Select;
}());
exports.Select = Select;
function Select1(options) {
}
exports.Select1 = Select1;
var EnumSelect = (function () {
    function EnumSelect() {
    }
    return EnumSelect;
}());
exports.EnumSelect = EnumSelect;
