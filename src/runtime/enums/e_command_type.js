"use strict";
exports.__esModule = true;
var CommandType;
(function (CommandType) {
    CommandType[CommandType["Create"] = 0] = "Create";
    CommandType[CommandType["Destroy"] = 1] = "Destroy";
    CommandType[CommandType["SetRect"] = 2] = "SetRect";
    CommandType[CommandType["SetImage"] = 3] = "SetImage";
    CommandType[CommandType["SetPosition"] = 4] = "SetPosition";
    CommandType[CommandType["SetDimensions"] = 5] = "SetDimensions";
    CommandType[CommandType["SetTransform"] = 6] = "SetTransform";
    CommandType[CommandType["SetParent"] = 7] = "SetParent";
    CommandType[CommandType["SetSiblingIndex"] = 8] = "SetSiblingIndex";
    CommandType[CommandType["PaintBackground"] = 9] = "PaintBackground";
    CommandType[CommandType["SetText"] = 10] = "SetText";
    CommandType[CommandType["UpdateInput"] = 11] = "UpdateInput";
})(CommandType = exports.CommandType || (exports.CommandType = {}));
