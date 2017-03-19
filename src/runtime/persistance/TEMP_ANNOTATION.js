"use strict";
exports.__esModule = true;
exports.classMap = new Map();
function serializeClass(target) {
    exports.classMap.set(target.name, target);
}
exports.serializeClass = serializeClass;
function setSerializer(typeName, serializer) {
}
setSerializer("Map", function (target) {
    target.forEach(function (value, key) {
        //return {key: Serialize(key), value: Serialize(value)}
    });
});
function serialize() {
}
function Serialize(target) {
}
