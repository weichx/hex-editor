"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var rectangle_1 = require("./rectangle");
var vector2_1 = require("./vector2");
var e_lifecycle_flags_1 = require("./enums/e_lifecycle_flags");
var e_command_type_1 = require("./enums/e_command_type");
var util_1 = require("../util");
var TEMP_ANNOTATION_1 = require("./persistance/TEMP_ANNOTATION");
var idGenerator = 0;
var Space;
(function (Space) {
    Space[Space["Local"] = 0] = "Local";
    Space[Space["World"] = 1] = "World";
})(Space = exports.Space || (exports.Space = {}));
var AppElement = AppElement_1 = (function () {
    function AppElement(name, parent) {
        if (parent === void 0) { parent = null; }
        this.id = idGenerator++;
        this.name = name || "App Element";
        this.lifeCycleFlags = 0;
        this.parent = parent || AppElement_1.Root;
        this.children = [];
        this.components = [];
        this.localPosition = new vector2_1.Vector2();
        this.parentPosition = (this.parent) ? this.parent.getPosition() : new vector2_1.Vector2();
        if (this.parent) {
            this.parent.children.push(this);
        }
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.scale = new vector2_1.Vector2(1, 1);
        //todo don't allow components to be constructed outside of addComponent or this constructor
        Runtime.addElement(this);
    }
    AppElement.prototype.setScale = function (scale) {
        this.scale.x = scale.x;
        this.scale.y = scale.y;
        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
    };
    AppElement.prototype.getScale = function () {
        return this.scale.clone();
    };
    AppElement.prototype.getWidth = function () {
        return this.width;
    };
    AppElement.prototype.setWidth = function (width) {
        this.width = width;
        //todo get parent layout component and invoke layout
        //todo get layout component and invoke layout
        //todo use anchor settings
        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
    };
    AppElement.prototype.getHeight = function () {
        return this.height;
    };
    AppElement.prototype.setHeight = function (height) {
        this.height = height;
        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
    };
    AppElement.prototype.setDimensions = function (widthOrDimension, height) {
        if (height === void 0) { height = 0; }
        var dimension = widthOrDimension;
        if (typeof widthOrDimension === "object") {
            if (dimension.width !== void 0) {
                this.width = dimension.width;
                this.height = dimension.height;
            }
        }
        else {
            this.width = widthOrDimension;
            this.height = height;
        }
        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
    };
    AppElement.prototype.getRotation = function () {
        return this.rotation;
    };
    AppElement.prototype.setRotation = function (value) {
        this.rotation = value;
        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
    };
    AppElement.prototype.setPosition = function (position, relativeTo) {
        if (relativeTo === void 0) { relativeTo = Space.World; }
        this.setPositionValues(position.x, position.y, relativeTo);
    };
    AppElement.prototype.setPositionValues = function (x, y, relativeTo) {
        if (relativeTo === void 0) { relativeTo = Space.World; }
        if (relativeTo === Space.Local) {
            this.localPosition.x = x;
            this.localPosition.y = y;
        }
        else {
            this.localPosition.x = x - this.parentPosition.x;
            this.localPosition.y = y - this.parentPosition.y;
        }
        Runtime.sendCommand(e_command_type_1.CommandType.SetPosition, this.id);
        var worldX = this.localPosition.x + this.parentPosition.x;
        var worldY = this.localPosition.y + this.parentPosition.y;
        for (var i = 0; i < this.children.length; i++) {
            var position = this.children[i].parentPosition;
            position.x = worldX;
            position.y = worldY;
        }
    };
    AppElement.prototype.getLocalPosition = function () {
        return this.localPosition.clone();
    };
    AppElement.prototype.getPosition = function (positionCache) {
        if (positionCache) {
            positionCache.x = this.parentPosition.x + this.localPosition.x;
            positionCache.y = this.parentPosition.y + this.localPosition.y;
            return positionCache;
        }
        return this.localPosition.addVectorNew(this.parentPosition);
    };
    AppElement.prototype.getBoundingBox = function () {
        //todo axis aligned? handle rotation and scale
        var p = this.getPosition();
        return new rectangle_1.Rectangle(p.x, p.y, this.width, this.height);
    };
    AppElement.prototype.enable = function () {
        //Runtime.enable(this);
    };
    AppElement.prototype.setParent = function (parent, keepPosition) {
        if (keepPosition === void 0) { keepPosition = true; }
        if (parent && parent === this.parent)
            return;
        parent = parent || AppElement_1.Root;
        var oldParent = this.parent;
        var currentPosition = this.getPosition();
        this.parent = parent;
        //todo ancestor check
        if (oldParent) {
            oldParent.children.remove(this);
        }
        if (parent) {
            this.parent.children.push(this);
            var p = this.parent.getPosition();
            this.parentPosition.x = p.x;
            this.parentPosition.y = p.y;
        }
        else {
            this.parentPosition.x = 0;
            this.parentPosition.y = 0;
        }
        if (keepPosition) {
            this.setPosition(currentPosition);
        }
        Runtime.setParent(this, parent, oldParent);
    };
    AppElement.prototype.setSiblingIndex = function (index) {
        var parent = this.parent;
        if (!parent)
            return false;
        var children = this.parent.children;
        var currentIndex = children.indexOf(this);
        if (index === currentIndex || currentIndex === -1) {
            return false;
        }
        index = util_1.clamp(index, 0, children.length - 1);
        children.remove(this);
        children.insert(this, index);
        Runtime.setSiblingIndex(this, index, currentIndex);
        return true;
    };
    AppElement.prototype.getParent = function () {
        return this.parent;
    };
    AppElement.prototype.getChildAt = function (index) {
        return this.children[index];
    };
    AppElement.prototype.getChildCount = function () {
        return this.children.length;
    };
    AppElement.prototype.removeChild = function (child) {
        if (this.children.remove(child)) {
            child.setParent(null);
        }
    };
    AppElement.prototype.getDepth = function () {
        if (this === AppElement_1.Root)
            return 0;
        var ptr = this.parent;
        var depth = 1;
        while (ptr !== AppElement_1.Root) {
            depth++;
            ptr = ptr.parent;
        }
        return depth;
    };
    //todo component lifecycle
    AppElement.prototype.addComponent = function (componentType) {
        var component = new componentType(); //cast to avoid read-only access
        component.appElement = this;
        this.components.push(component);
        Runtime.addComponent(component);
        return component;
    };
    AppElement.prototype.getAllComponents = function (storage) {
        var retn = storage || new Array();
        for (var i = 0; i < this.components.length; i++) {
            retn.push(this.components[i]);
        }
        return retn;
    };
    AppElement.prototype.getComponent = function (type) {
        for (var i = 0; i < this.components.length; i++) {
            if (this.components[i] instanceof type) {
                return this.components[i]; //why do I need the cast?
            }
        }
        return null;
    };
    //Returns all components of Type type in the GameObject
    AppElement.prototype.getComponents = function (type, storage) {
        var retn = storage || new Array();
        for (var i = 0; i < this.components.length; i++) {
            if (this.components[i] instanceof type) {
                retn.push(this.components[i]);
            }
        }
        return retn;
    };
    AppElement.prototype.getComponentInChildren = function (type) {
        var cmp = this.getComponent(type);
        if (cmp)
            return cmp;
        var childCount = this.children.length;
        for (var i = 0; i < childCount; i++) {
            var child = this.children[i];
            var cmp_1 = child.getComponent(type);
            if (cmp_1)
                return cmp_1;
        }
        return null;
    };
    //Returns all components of Type in the AppElement in it's direct children
    AppElement.prototype.getComponentsInChildren = function (type, storage) {
        var retn = this.getComponents(type, storage);
        var childCount = this.children.length;
        for (var i = 0; i < childCount; i++) {
            var child = this.children[i];
            child.getComponents(type, retn);
        }
        return retn;
    };
    AppElement.prototype.getComponentsInDescendants = function (type, storage) {
        var retn = this.getComponents(type, storage);
        var childCount = this.children.length;
        for (var i = 0; i < childCount; i++) {
            var child = this.children[i];
            child.getComponentsInDescendants(type, retn);
        }
        return retn;
    };
    AppElement.prototype.getComponentInParent = function (type) {
        if (!this.parent)
            return null;
        return this.parent.getComponent(type);
    };
    AppElement.prototype.getComponentsInParent = function (type, storage) {
        if (!this.parent)
            return [];
        return this.parent.getComponents(type, storage);
    };
    AppElement.prototype.destroy = function () {
        if (!this.parent)
            return; //can't destroy root
        this.lifeCycleFlags |= e_lifecycle_flags_1.LifeCycleFlag.Destroyed;
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }
        for (var i = 0; i < this.components.length; i++) {
            this.components[i].destroy();
        }
        if (!this.parent.isDestroyed()) {
            this.parent.children.remove(this);
            var components = this.parent.components;
            for (var i = 0; i < components.length; i++) {
                components[i].onChildRemoved(this);
            }
            var childIds_1 = new Array();
            util_1.traverseChildren(this, function (child) {
                childIds_1.push(child.id);
            });
            Runtime.sendCommand(e_command_type_1.CommandType.Destroy, { id: this.id, childIds: childIds_1 });
        }
    };
    AppElement.prototype.destroyFromParent = function () {
        //don't fire handlers n stuff
    };
    /*** Accessors ***/
    AppElement.prototype.isRoot = function () {
        return this === AppElement_1.Root;
    };
    AppElement.prototype.isCreated = function () {
        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Created) !== 0;
    };
    AppElement.prototype.isEnabled = function () {
        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Enabled) !== 0;
    };
    AppElement.prototype.isDisabled = function () {
        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Enabled) === 0;
    };
    AppElement.prototype.isMounted = function () {
        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Mounted) !== 0;
    };
    AppElement.prototype.isDestroyed = function () {
        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Destroyed) !== 0;
    };
    /*** Helpers ***/
    AppElement.prototype.containsPoint = function (point) {
        var p = this.getPosition();
        var x = p.x;
        var y = p.y;
        var w = this.width;
        var h = this.height;
        var px = point.x;
        var py = point.y;
        return px >= x && x + w >= px && py >= y && y + h >= py;
    };
    //this might be backwards
    //todo account for rotation
    AppElement.prototype.containsRect = function (rect) {
        var p = this.getPosition();
        return rect.x + rect.width < (p.x + this.width)
            && (rect.x) > (p.x)
            && (rect.y) > (p.y)
            && (rect.y + rect.height) < (p.y + this.height);
    };
    //todo account for rotation -- probably want to use algorithm of overlapping polygons instead
    AppElement.prototype.overlapsRectangle = function (rect) {
        var p = this.getPosition();
        var minAx = p.x;
        var minAy = p.y;
        var maxAx = p.x + this.width;
        var maxAy = p.y + this.height;
        var minBx = rect.x;
        var minBy = rect.y;
        var maxBx = rect.x + rect.width;
        var maxBy = rect.y + rect.height;
        var aLeftOfB = maxAx < minBx;
        var aRightOfB = minAx > maxBx;
        var aAboveB = minAy > maxBy;
        var aBelowB = maxAy < minBy;
        return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
    };
    return AppElement;
}());
/*** Static ***/
AppElement.Root = null;
AppElement = AppElement_1 = __decorate([
    TEMP_ANNOTATION_1.serializeClass
], AppElement);
exports.AppElement = AppElement;
var AppElement_1;
