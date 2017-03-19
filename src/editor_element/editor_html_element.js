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
var editor_text_element_1 = require("./editor_text_element");
var util_1 = require("../util");
exports.InputEventAnnotationMap = new Map();
var EditorHTMLElement = (function (_super) {
    __extends(EditorHTMLElement, _super);
    function EditorHTMLElement(attrs, tagName) {
        if (tagName === void 0) { tagName = "div"; }
        var _this = _super.call(this) || this;
        _this.element = _this; //this is for the updateTree -- but I don't like it
        _this.attrs = attrs || {};
        _this.tagName = tagName;
        var eventAnnotations = exports.InputEventAnnotationMap.get(_this.constructor.prototype);
        if (eventAnnotations) {
            var _loop_1 = function (i) {
                var annotation = eventAnnotations[i];
                this_1.addEventListener(annotation.type, function (e) {
                    _this[annotation.methodName](e);
                    e.stopPropagation();
                    e.preventDefault();
                });
            };
            var this_1 = this;
            for (var i = 0; i < eventAnnotations.length; i++) {
                _loop_1(i);
            }
        }
        return _this;
        // todo -- handle events better, right now we never unsubscribe on destroy
        // todo -- better to handle events on a per instance basis
        // if (this.__runtime_events__) {
        //     this.__runtime_events__.forEach((value : any, key : any) => {
        //         EditorRuntime.on(value, this);
        //     });
        // }
    }
    EditorHTMLElement.prototype.getDomData = function () {
        if (this.constructor.name === "EditorHTMLElement") {
            return { tagName: this.tagName };
        }
        else {
            return {
                tagName: this.tagName,
                classList: util_1.dasherize(this.constructor.name)
            };
        }
    };
    EditorHTMLElement.prototype.hasClass = function (className) {
        return this.htmlNode.classList.contains(className);
    };
    EditorHTMLElement.prototype.addClass = function (className) {
        this.htmlNode.classList.add(className);
    };
    EditorHTMLElement.prototype.removeClass = function (className) {
        this.htmlNode.classList.remove(className);
    };
    EditorHTMLElement.prototype.toggleClass = function (className, force) {
        if (force === void 0) { force = false; }
        this.htmlNode.classList.toggle(className, force);
    };
    EditorHTMLElement.prototype.setStyle = function (styles) {
        var keys = Object.keys(styles);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            this.htmlNode.style[key] = styles[key];
        }
    };
    EditorHTMLElement.prototype.setText = function (text) {
        var textChild = this.children[0];
        if (!textChild) {
            this.addChild(new editor_text_element_1.EditorTextElement(text));
        }
        else if (textChild instanceof editor_text_element_1.EditorTextElement) {
            textChild.setText(text);
        }
        else {
            // no idea what to do here
        }
    };
    EditorHTMLElement.prototype.getText = function () {
        return this.htmlNode.innerText;
    };
    EditorHTMLElement.prototype.hasVisibleParentHTML = function () {
        var ptr = this.parent;
        while (ptr) {
            if (ptr instanceof EditorHTMLElement) {
                return ptr.isVisible;
            }
            ptr = ptr.parent;
        }
        return false;
    };
    EditorHTMLElement.prototype.createDomNode = function () {
        if (this.htmlNode)
            return this.htmlNode;
        var domData = this.getDomData();
        this.tagName = domData.tagName || "div";
        this.htmlNode = document.createElement(domData.tagName);
        this.htmlNode.__editorElement = this;
        if (domData.classList) {
            var className = domData.classList;
            var attrClass = this.attrs["class"];
            if (attrClass) {
                className += " " + attrClass;
            }
            this.htmlNode.className = className;
        }
        else if (this.attrs["class"]) {
            this.htmlNode.className = this.attrs["class"];
        }
        if (domData.style) {
            var attrStyle = this.attrs.style || "";
            this.htmlNode.setAttribute("style", domData.style + attrStyle);
        }
        else if (this.attrs.style) {
            this.htmlNode.setAttribute("style", this.attrs.style);
        }
        var attrs = domData.attributes;
        if (attrs) {
            for (var a in attrs) {
                if (a[0] === "x" && a[1] === "-")
                    continue;
                if (a.indexOf("on") === 0)
                    continue;
                this.htmlNode.setAttribute(a, attrs[a]);
            }
        }
        if (!this.isVisible()) {
            this.htmlNode.classList.add("hidden");
        }
        return this.htmlNode;
    };
    EditorHTMLElement.prototype.getChildBySelector = function (selector, type) {
        if (type === void 0) { type = null; }
        var node = this.htmlNode.querySelector(":scope " + selector);
        if (node && node.__editorElement) {
            return node.__editorElement;
        }
    };
    EditorHTMLElement.prototype.getChildrenBySelector = function (selector) {
        var retn = [];
        var nodes = this.htmlNode.querySelectorAll(":scope " + selector);
        for (var i = 0; i < nodes.length; i++) {
            var editorElement = nodes[i].__editorElement;
            if (editorElement) {
                retn.push(editorElement);
            }
        }
        return retn;
    };
    EditorHTMLElement.prototype.getDescendantsBySelector = function (selector) {
        var retn = [];
        var nodes = this.htmlNode.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            var editorElement = nodes[i].__editorElement;
            if (editorElement) {
                retn.push(editorElement);
            }
        }
        return retn;
    };
    return EditorHTMLElement;
}(editor_element_1.EditorElement));
exports.EditorHTMLElement = EditorHTMLElement;
