"use strict";
exports.__esModule = true;
var util_1 = require("../util");
var vector2_1 = require("../runtime/vector2");
var EditorElementFlags;
(function (EditorElementFlags) {
    EditorElementFlags[EditorElementFlags["Rendered"] = 2] = "Rendered";
    EditorElementFlags[EditorElementFlags["Enabled"] = 4] = "Enabled";
    EditorElementFlags[EditorElementFlags["Destroyed"] = 8] = "Destroyed";
    EditorElementFlags[EditorElementFlags["Visible"] = 16] = "Visible";
})(EditorElementFlags = exports.EditorElementFlags || (exports.EditorElementFlags = {}));
var pendingEventMap = new WeakMap();
var activeEventMap = new WeakMap();
var idGenerator = 0;
var EditorElement = (function () {
    function EditorElement() {
        this.id = ++idGenerator;
        this.children = [];
        this.parent = null;
        this.flags = EditorElementFlags.Visible | EditorElementFlags.Enabled;
        this.childIdMap = null; //todo make this global map?
        this.childRoot = null;
        this.renderContext = null;
        this.childRoot = this;
    }
    EditorElement.prototype.setChildIdAlias = function (id, element) {
        this.childIdMap = this.childIdMap || {};
        this.childIdMap[id] = element;
    };
    EditorElement.prototype.setVisible = function (isVisible) {
        if (isVisible === this.isVisible()) {
            return;
        }
        this.flags ^= EditorElementFlags.Visible;
        if (this.htmlNode) {
            this.htmlNode.classList.toggle("hidden", !isVisible);
        }
        // this.onVisibilityChanged(isVisible);
    };
    EditorElement.prototype.setPosition = function (x, y) {
        var dom = this.getDomNode();
        dom.style.left = x + "px";
        dom.style.top = y + "px";
    };
    EditorElement.prototype.getClientBounds = function () {
        return (this.htmlNode) ? this.htmlNode.getBoundingClientRect() : null;
    };
    EditorElement.prototype.addChild = function (child) {
        return this.insertChild(child, this.children.length);
    };
    EditorElement.prototype.insertChild = function (child, index) {
        if (!child)
            return;
        if (index < 0)
            index = 0;
        if (index > this.children.length)
            index = this.children.length;
        if (this.children[index] === child)
            return;
        if (this.isAncestor(child)) {
            return false;
        }
        var oldParent = child.parent;
        var current = this.children[index];
        var moved = child.parent === this;
        if (child.parent) {
            child.parent.children.remove(child);
        }
        this.children.insert(child, index);
        child.parent = this;
        if (this.isMounted() && child.isMounted()) {
            if (current) {
                this.htmlNode.insertBefore(child.htmlNode, current.htmlNode);
            }
            else {
                this.htmlNode.appendChild(child.htmlNode);
            }
        }
        else if (!child.isRendered() && this.isRendered()) {
            child.render(this.htmlNode);
        }
        else if (!child.isMounted() && this.isMounted()) {
            child.mount(this.htmlNode);
        }
        if (!moved && oldParent && child.parent && child.isMounted()) {
            child.onParentChanged(this, oldParent);
        }
        if (moved)
            child.onMoved(index);
        return true;
    };
    EditorElement.prototype.render = function (mountPoint) {
        this.mount(mountPoint);
        //todo get rid of onRerendered
        util_1.traverse(this, function (element) {
            if (element.isRendered()) {
                element.onRerendered();
            }
            else {
                element.flags |= EditorElementFlags.Rendered;
                element.onRendered();
            }
        });
        util_1.traverseRootFirst(this, function (element) {
            element.onParentRendered();
        });
    };
    EditorElement.prototype.mount = function (mountPoint) {
        this.htmlNode = this.htmlNode || this.createDomNode();
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].mount(this.htmlNode);
        }
        this.attachEvents();
        mountPoint.appendChild(this.htmlNode);
        this.onMounted();
    };
    EditorElement.prototype.attachEvents = function () {
        var pendingEvents = pendingEventMap.get(this);
        if (pendingEvents) {
            var activeEvents = activeEventMap.get(this) || [];
            for (var i = 0; i < pendingEvents.length; i++) {
                var handler = pendingEvents[i];
                activeEvents.push(handler);
                this.addEventListener(handler.type, handler.fn, handler.bubble);
            }
            pendingEvents.length = 0;
            pendingEventMap.set(this, null);
            activeEventMap.set(this, activeEvents);
        }
    };
    EditorElement.prototype.createDomNode = function () {
        throw new Error("Not Implemented, use a subclass");
    };
    EditorElement.prototype.orphan = function () {
        if (!this.isOrphaned()) {
            this.parent.children.remove(this);
            this.getDomNode().remove();
            this.parent = null;
        }
    };
    EditorElement.prototype.isOrphaned = function () {
        return this.parent === null;
    };
    EditorElement.prototype.orphanChildren = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].getDomNode().remove();
            this.children[i].parent = null;
        }
        this.children.length = 0;
    };
    EditorElement.prototype.clearChildren = function () {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }
        var node = this.getDomNode();
        while (node.firstElementChild) {
            node.firstElementChild.remove();
        }
    };
    EditorElement.prototype.getChildrenByType = function (type) {
        var retn = new Array();
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof type) {
                retn.push(this.children[i]);
            }
        }
        return retn;
    };
    EditorElement.prototype.getChildByType = function (type) {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof type) {
                return this.children[i];
            }
        }
        return null;
    };
    EditorElement.prototype.getAncestorByType = function (type, allowSelf) {
        if (allowSelf === void 0) { allowSelf = false; }
        if (allowSelf && this instanceof type)
            return this; //why do I need a cast and why can't it be T?
        var ptr = this.parent;
        while (ptr) {
            if (ptr instanceof type) {
                return ptr;
            }
            ptr = ptr.parent;
        }
        return null;
    };
    EditorElement.prototype.getFirstOfTypeUpwards = function (type) {
        if (this instanceof type)
            return this;
        return this.getAncestorByType(type);
    };
    EditorElement.prototype.getDomNode = function () {
        return this.htmlNode;
    };
    EditorElement.prototype.getChildById = function (id) {
        if (!this.childIdMap)
            return null;
        return this.childIdMap[id];
    };
    EditorElement.prototype.setChildRoot = function (element) {
        //todo assert child root is a child
        this.childRoot = element;
        if (!this.childRoot)
            this.childRoot = this;
    };
    EditorElement.prototype.getChildRoot = function () {
        return this.childRoot;
    };
    EditorElement.prototype.getChildCount = function () {
        return this.children.length;
    };
    EditorElement.prototype.hasXId = function (idName) {
        var dom = this.getDomNode();
        return dom.getAttribute("x-id") === idName;
    };
    EditorElement.prototype.isElementInHierarchy = function (element) {
        var dom = this.getDomNode();
        var ptr = element.parentNode;
        while (ptr !== document.body) {
            if (ptr === dom)
                return true;
            ptr = ptr.parentNode;
        }
        return false;
    };
    EditorElement.prototype.isAncestor = function (target) {
        var ptr = this.parent;
        while (ptr) {
            if (ptr === target) {
                return true;
            }
            ptr = ptr.parent;
        }
        return false;
    };
    EditorElement.prototype.isDescendant = function (target) {
        return target.isAncestor(this);
    };
    EditorElement.prototype.getChildIndex = function (child) {
        return this.children.indexOf(child);
    };
    //todo need to remove all event handlers
    EditorElement.prototype.destroy = function () {
        if (this.isDestroyed())
            return;
        this.flags |= EditorElementFlags.Destroyed;
        //maybe have 'isDestroyPending' flag
        //be careful with destroying the dom node since it is shared in a virtual tree
        this.onDestroyed();
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].destroy();
        }
        if (this.parent) {
            if (!this.parent.isDestroyed()) {
                this.getDomNode().remove();
                this.parent.children.remove(this);
            }
        }
        this.renderContext = null;
        this.parent = null;
        this.childRoot = null;
        this.childIdMap = null;
        this.children = null;
    };
    EditorElement.prototype.pointToLocalSpace = function (point) {
        var rect = this.htmlNode.getBoundingClientRect();
        return new vector2_1.Vector2(point.x - rect.left, point.y - rect.top);
    };
    EditorElement.prototype.pointToWorldSpace = function (point) {
        var rect = this.htmlNode.getBoundingClientRect();
        return new vector2_1.Vector2(point.x + rect.left, point.y + rect.top);
    };
    EditorElement.prototype.isDestroyed = function () {
        return (this.flags & EditorElementFlags.Destroyed) !== 0;
    };
    EditorElement.prototype.isMounted = function () {
        return Boolean(this.htmlNode);
    };
    EditorElement.prototype.isRendered = function () {
        return (this.flags & EditorElementFlags.Rendered) !== 0;
    };
    EditorElement.prototype.isVisible = function () {
        return (this.flags & EditorElementFlags.Visible) !== 0;
    };
    EditorElement.prototype.addEventListener = function (evtName, fn, bubble) {
        if (bubble === void 0) { bubble = false; }
        if (this.htmlNode) {
            var evtList = activeEventMap.get(this) || [];
            evtList.push({ type: evtName, fn: fn, bubble: bubble });
            this.htmlNode.addEventListener(evtName, fn, false);
            activeEventMap.set(this, evtList);
        }
        else {
            var evtList = pendingEventMap.get(this) || [];
            evtList.push({ type: evtName, fn: fn, bubble: bubble });
            pendingEventMap.set(this, evtList);
        }
    };
    EditorElement.prototype.removeEventListener = function (evtName, fn) {
        var evtList = pendingEventMap.get(this);
        if (!evtList)
            return;
        for (var i = 0; i < evtList.length; i++) {
            var evt = evtList[i];
            if (evt.type === evtName && evt.fn === fn) {
                if (this.htmlNode) {
                    this.htmlNode.removeEventListener(evtName, fn);
                }
                evtList.removeAt(i);
                return true;
            }
        }
    };
    EditorElement.prototype.createInitialStructure = function (children) {
        return children;
    };
    EditorElement.prototype.onDestroyed = function () { };
    EditorElement.prototype.onCreated = function () { };
    EditorElement.prototype.onUpdated = function () { };
    EditorElement.prototype.onRendered = function () { };
    EditorElement.prototype.onRerendered = function () { };
    EditorElement.prototype.onParentRendered = function () { };
    EditorElement.prototype.onParentChanged = function (newParent, oldParent) { };
    EditorElement.prototype.onMounted = function () { };
    EditorElement.prototype.onDisabled = function () { };
    EditorElement.prototype.onEnabled = function () { };
    EditorElement.prototype.onMoved = function (index) { };
    return EditorElement;
}());
exports.EditorElement = EditorElement;
