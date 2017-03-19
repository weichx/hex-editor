"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var TEMP_ANNOTATION_1 = require("./persistance/TEMP_ANNOTATION");
var Component = Component_1 = (function () {
    function Component() {
    }
    Component.prototype.getComponent = function (type) {
        return this.appElement.getComponent(type);
    };
    //Returns all components of Type type in the GameObject
    Component.prototype.getComponents = function (type) {
        return this.appElement.getComponents(type);
    };
    Component.prototype.getComponentInChildren = function (type) {
        return this.appElement.getComponentInChildren(type);
    };
    //Returns all components of Type in the AppElement in it's direct children
    Component.prototype.getComponentsInChildren = function (type) {
        return this.appElement.getComponentsInChildren(type);
    };
    //Returns all components of Type in the AppElement recursively in its children
    Component.prototype.getComponentsInDescendants = function (type) {
        return this.appElement.getComponentsInDescendants(type);
    };
    Component.prototype.getComponentInParent = function (type) {
        return this.appElement.getComponentInParent(type);
    };
    Component.prototype.getComponentsInParent = function (type) {
        return this.appElement.getComponentsInParent(type);
    };
    Component.prototype.onChildAdded = function (child) { };
    Component.prototype.onChildRemoved = function (child) { };
    Component.prototype.onCreated = function () { };
    Component.prototype.onMounted = function () { };
    Component.prototype.onEnabled = function () { };
    Component.prototype.onDisabled = function () { };
    Component.prototype.onDestroyed = function () { };
    Component.prototype.update = function (deltaTime) { };
    Component.prototype.destroy = function () {
        this.appElement = null;
    };
    Component.componentDecorator = function (path) {
        return function (target) {
            Component_1.types.set(path, target);
        };
    };
    Component.allowMultipleDecorator = function () {
        // return function(target : any) {
        //     Component.types.set(path, {
        //
        //     })
        // }
    };
    Component.requireComponent = function () {
    };
    Component.getComponentFromPath = function (path) {
        return Component_1.types.get(path);
    };
    Component.getComponentTypePathPairs = function () {
        var retn = new Array();
        Component_1.types.forEach(function (value, key) {
            retn.push({ type: value, path: key });
        });
        return retn;
    };
    Component.prototype.serialize = function () {
        return null;
    };
    Component.Serialize = function (component) {
        return {
            id: "blach", data: component.serialize()
        };
    };
    return Component;
}());
Component.types = new Map();
Component = Component_1 = __decorate([
    TEMP_ANNOTATION_1.serializeClass
], Component);
exports.Component = Component;
exports.allowMultiple = Component.allowMultipleDecorator;
exports.component = Component.componentDecorator;
exports.requireComponent = Component.requireComponent;
var Component_1;
