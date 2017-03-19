"use strict";
exports.__esModule = true;
//todo this needs an overhaul
var EventEmitter = (function () {
    function EventEmitter() {
        this.listenerMap = new Map();
    }
    EventEmitter.prototype.hasListeners = function (evt) {
        var map = this.listenerMap.get(evt);
        return map && map.length > 0;
    };
    EventEmitter.prototype.on = function (type, handler) {
        var handlers = this.listenerMap.get(type) || [];
        var idx = handlers.indexOf(handler);
        if (idx === -1) {
            handlers.push(handler);
        }
        this.listenerMap.set(type, handlers);
    };
    EventEmitter.prototype.off = function (type, handler) {
        var handlers = this.listenerMap.get(type);
        if (!handlers)
            return;
        var idx = handlers.indexOf(handler);
        if (idx !== -1) {
            handlers.splice(idx, 1);
        }
    };
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handlers = this.listenerMap.get(type);
        if (!handlers || handlers.length === 0)
            return;
        var eventName = (type.eventName) ? type.eventName : "on" + type.name;
        for (var i = 0; i < handlers.length; i++) {
            handlers[i][eventName].apply(handlers[i], args);
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
