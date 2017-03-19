"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var TEMP_ANNOTATION_1 = require("./persistance/TEMP_ANNOTATION");
var AppElement = require("./app_element");
var app_element_1 = require("./app_element");
debugger;
console.log(AppElement, app_element_1.AppElement);
var Vector2 = Vector2_1 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.scale = function (factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    };
    Vector2.prototype.scaleNew = function (factor) {
        return new Vector2_1(this.x * factor, this.y * factor);
    };
    Vector2.prototype.addScalar = function (scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    };
    Vector2.prototype.addScalarNew = function (scalar) {
        return new Vector2_1(this.x + scalar, this.y + scalar);
    };
    Vector2.prototype.subScalar = function (scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    };
    Vector2.prototype.divideScalar = function (scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
        return this;
    };
    Vector2.prototype.divideScalarNew = function (scalar) {
        if (scalar !== 0) {
            return new Vector2_1(this.x / scalar, this.y / scalar);
        }
        else {
            return new Vector2_1();
        }
    };
    Vector2.prototype.subScalarNew = function (scalar) {
        return new Vector2_1(this.x - scalar, this.y - scalar);
    };
    Vector2.prototype.invert = function () {
        this.x *= -1;
        this.y *= -1;
        return this;
    };
    Vector2.prototype.invertNew = function () {
        return new Vector2_1(this.x * -1, this.y * -1);
    };
    Vector2.prototype.lookAt = function (other) {
        return this;
    };
    Vector2.prototype.clamp = function (length) {
        var lengthSq = this.lengthSquared();
        if (length * length > lengthSq) {
            this.normalize();
            this.scale(length);
        }
        return this;
    };
    Vector2.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y;
    };
    Vector2.prototype.cross = function (other) {
        return (this.x * other.y) - (this.y * other.x);
    };
    Vector2.prototype.normalize = function () {
        var length = this.length();
        if (length === 0) {
            this.x = 1;
            this.y = 0;
        }
        else {
            this.x /= length;
            this.y /= length;
        }
        return this;
    };
    Vector2.prototype.normalizeNew = function () {
        var length = this.length();
        var retn = new Vector2_1();
        if (length === 0) {
            retn.x = 1;
            retn.y = 0;
        }
        else {
            retn.x = this.x / length;
            retn.y = this.y / length;
        }
        return this;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.lengthSquared());
    };
    Vector2.prototype.lengthSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    Vector2.prototype.addVector = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Vector2.prototype.subVector = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Vector2.prototype.addVectorNew = function (other) {
        return new Vector2_1(this.x + other.x, this.y + other.y);
    };
    Vector2.prototype.subVectorNew = function (other) {
        return new Vector2_1(this.x - other.x, this.y - other.y);
    };
    Vector2.prototype.horizontalAngle = function () {
        return Math.atan2(this.y, this.x);
    };
    Vector2.prototype.verticalAngle = function () {
        //noinspection JSSuspiciousNameCombination
        return Math.atan2(this.x, this.y);
    };
    Vector2.prototype.rotate = function (radians) {
        var nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
        var ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
        this.x = nx;
        this.y = ny;
        return this;
    };
    Vector2.prototype.rotateNew = function (radians) {
        var nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
        var ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
        return new Vector2_1(nx, ny);
    };
    Vector2.prototype.project = function (other) {
        var e = ((this.x * other.x) + (this.y * other.y)) / ((other.x * other.x) + (other.y * other.y));
        this.x = e * other.x;
        this.y = e * other.y;
        return this;
    };
    Vector2.prototype.projectNew = function (other) {
        var e = ((this.x * other.x) + (this.y * other.y)) / ((other.x * other.x) + (other.y * other.y));
        return new Vector2_1(e * other.x, e * other.y);
    };
    Vector2.prototype.distanceTo = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return dx * dx + dy * dy;
    };
    Vector2.prototype.clone = function () {
        return new Vector2_1(this.x, this.y);
    };
    Vector2.prototype.isZero = function () {
        return this.x === 0 && this.y === 0;
    };
    Vector2.prototype.isEqual = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    Vector2.prototype.toString = function () {
        return "{x: " + this.x + ", y: " + this.y + "}";
    };
    return Vector2;
}());
Vector2 = Vector2_1 = __decorate([
    TEMP_ANNOTATION_1.serializeClass
], Vector2);
exports.Vector2 = Vector2;
var Vector2_1;
