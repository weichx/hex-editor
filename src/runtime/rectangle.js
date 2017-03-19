"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var TEMP_ANNOTATION_1 = require("./persistance/TEMP_ANNOTATION");
var Rectangle = Rectangle_1 = (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.containsRectangle = function (rect) {
        return false;
    };
    Rectangle.prototype.overlapsRectangle = function (rect) {
        return false;
    };
    Rectangle.prototype.containsPoint = function (point) {
        return Rectangle_1.pointInsideRect(point, this);
    };
    Rectangle.pointInsideRect = function (point, rect) {
        var x = rect.x;
        var y = rect.y;
        var w = rect.width;
        var h = rect.height;
        var px = point.x;
        var py = point.y;
        return px >= x && x + w >= px && py >= y && y + h >= py;
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle_1(this.x, this.y, this.width, this.height);
    };
    Rectangle.prototype.copyTo = function (input) {
        input.x = this.x;
        input.y = this.y;
        input.width = this.width;
        input.height = this.height;
        return input;
    };
    return Rectangle;
}());
Rectangle.Zero = new Rectangle_1();
Rectangle = Rectangle_1 = __decorate([
    TEMP_ANNOTATION_1.serializeClass
], Rectangle);
exports.Rectangle = Rectangle;
var Rectangle_1;
