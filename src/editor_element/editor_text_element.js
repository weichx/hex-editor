"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var editor_element_1 = require("./editor_element");
var EditorTextElement = (function (_super) {
    __extends(EditorTextElement, _super);
    function EditorTextElement(content) {
        var _this = _super.call(this) || this;
        _this.content = content;
        return _this;
    }
    EditorTextElement.prototype.getDomNode = function () {
        return this.textNode;
    };
    EditorTextElement.prototype.addChild = function (child) {
        throw new Error("Text Nodes cannot have children");
    };
    EditorTextElement.prototype.mount = function (mountPoint) {
        this.textNode = this.textNode || this.createDomNode();
        mountPoint.appendChild(this.textNode);
    };
    EditorTextElement.prototype.createDomNode = function () {
        return document.createTextNode(this.content);
    };
    EditorTextElement.prototype.setText = function (text) {
        this.content = text;
        this.textNode.nodeValue = text;
    };
    return EditorTextElement;
}(editor_element_1.EditorElement));
exports.EditorTextElement = EditorTextElement;
