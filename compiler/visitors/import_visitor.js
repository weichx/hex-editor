"use strict";
exports.__esModule = true;
var ts = require("typescript");
var path = require("path");
var ImportVisitor = (function () {
    function ImportVisitor() {
    }
    ImportVisitor.prototype.filter = function (node) {
        return node.kind == ts.SyntaxKind.RequireKeyword || node.kind === ts.SyntaxKind.ImportDeclaration;
    };
    ImportVisitor.prototype.visit = function (node, context) {
        // console.log(node.getFullText(), node.getText());
        for (var i = 0; i < node.getChildCount(); i++) {
            var child = node.getChildAt(i);
            if (child.kind === ts.SyntaxKind.StringLiteral) {
                var fileRef = child.getFullText().replace(/[\`"'\s]/g, "");
                console.log(path.resolve(fileRef));
                //ts.resolveModuleName("module_path", node.getSourceFile().fileName, services.);
                context.replace(child.getStart(), child.getEnd(), "\"my/new/path\"");
            }
        }
        return false;
    };
    return ImportVisitor;
}());
exports.ImportVisitor = ImportVisitor;
