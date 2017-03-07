"use strict";
exports.__esModule = true;
var mutable_source_code_1 = require("./mutable-source-code");
var mutable_source_code_2 = require("./mutable-source-code");
var mutable_source_code_3 = require("./mutable-source-code");
var mutable_source_code_4 = require("./mutable-source-code");
var VisitorContext = (function () {
    function VisitorContext(fileName, compiler) {
        this._halted = false;
        this._actions = [];
        this._diags = [];
        this._fileName = fileName;
        this.compiler = compiler;
    }
    VisitorContext.prototype.getCurrentFile = function () {
        return this.compiler.getCacheFile(this._fileName);
    };
    VisitorContext.prototype.cleanFilePath = function (input) {
        return input.replace(/[\`"'\s]/g, "");
    };
    VisitorContext.prototype.getFullPath = function (path) {
        return this.compiler.getModulePath(this._fileName, path);
    };
    VisitorContext.prototype.getTypeChecker = function () {
        return this.compiler.getProgram().getTypeChecker();
    };
    VisitorContext.prototype.isHalted = function () {
        return this._halted;
    };
    VisitorContext.prototype.insertLine = function (position, str) {
        this.insert(position, str + '\n');
    };
    VisitorContext.prototype.insert = function (position, str) {
        this._actions.push(new mutable_source_code_4.InsertAction(position, str));
    };
    VisitorContext.prototype.replace = function (start, end, str) {
        this._actions.push(new mutable_source_code_1.ReplaceAction(start, end, str));
    };
    VisitorContext.prototype.fastAppend = function (str) {
        this._actions.push(new mutable_source_code_2.FastAppendAction(str));
    };
    VisitorContext.prototype.fastRewrite = function (start, str) {
        this._actions.push(new mutable_source_code_3.FastRewriteAction(start, str));
    };
    VisitorContext.prototype.reportDiag = function (node, category, message, halt) {
        var diagnostic = {
            file: node.getSourceFile(),
            start: node.getStart(),
            length: node.getEnd() - node.getStart(),
            messageText: message,
            category: category,
            code: 0
        };
        this._diags.push(diagnostic);
        this._halted = this._halted || halt;
    };
    VisitorContext.prototype.pushDiag = function (diagnostic) {
        this._diags.push(diagnostic);
    };
    VisitorContext.prototype.getActions = function () {
        return this._actions;
    };
    VisitorContext.prototype.getDiags = function () {
        return this._diags;
    };
    VisitorContext.prototype.getHalted = function () {
        return this._halted;
    };
    VisitorContext.prototype.getFileName = function () {
        return this._fileName;
    };
    return VisitorContext;
}());
exports.VisitorContext = VisitorContext;
