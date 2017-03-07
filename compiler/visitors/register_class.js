"use strict";
exports.__esModule = true;
var ts = require("typescript");
var RegisterClass = (function () {
    function RegisterClass() {
    }
    RegisterClass.prototype.filter = function (node) {
        return node.kind === ts.SyntaxKind.ClassDeclaration;
    };
    RegisterClass.prototype.visit = function (node, context) {
        node.getLastToken();
        //context.insertLine(.getEnd(), "alert('hex yeah!')");
        return false;
    };
    return RegisterClass;
}());
exports.RegisterClass = RegisterClass;
