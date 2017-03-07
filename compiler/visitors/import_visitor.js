"use strict";
exports.__esModule = true;
var ts = require("typescript");
var ImportVisitor = (function () {
    function ImportVisitor() {
        this.didVisit = false;
    }
    ImportVisitor.prototype.filter = function (node) {
        return node.kind == ts.SyntaxKind.RequireKeyword || node.kind === ts.SyntaxKind.ImportDeclaration;
    };
    ImportVisitor.prototype.visit = function (node, context) {
        for (var i = 0; i < node.getChildCount(); i++) {
            var child = node.getChildAt(i);
            if (child.kind === ts.SyntaxKind.StringLiteral) {
                var fileRef = context.cleanFilePath(child.getFullText());
                if (fileRef.indexOf("/") === -1) {
                }
                else {
                }
                //context.getCurrentFile().addDependency(fileRef);
                //context.replace(child.getStart(), child.getEnd(), "\"my/new/path\"");
            }
        }
        return false;
    };
    ImportVisitor.prototype.visitCompleted = function () {
    };
    return ImportVisitor;
}());
exports.ImportVisitor = ImportVisitor;
