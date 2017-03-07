"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
var ServiceHost = (function () {
    function ServiceHost(fileList) {
        this.fileList = fileList;
        this.cache = new Map();
        this.registry = ts.createDocumentRegistry();
        this.options = this.getCompilationSettings();
    }
    //todo need to call the transpile function AFTER read from disk
    //todo this belongs on the compiler class
    ServiceHost.prototype.changeFile = function (path) {
        var file = this.cache.get(path);
        file.version++;
        var contents = fs.readFileSync(path).toString();
        var snapshot = ts.ScriptSnapshot.fromString(contents);
        file.snapshot = snapshot;
        this.registry.updateDocument(path, this.options, snapshot, file.version.toString());
    };
    ServiceHost.prototype.getCompilationSettings = function () {
        if (this.options)
            return this.options;
        return {
            target: ts.ScriptTarget.ES2016,
            module: ts.ModuleKind.CommonJS,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            noImplicitAny: true,
            importHelpers: true,
            jsx: ts.JsxEmit.React,
            reactNamespace: "Hex"
        };
    };
    ServiceHost.prototype.getRegistry = function () {
        return this.registry;
    };
    ServiceHost.prototype.getScriptFileNames = function () {
        return this.fileList;
    };
    ServiceHost.prototype.getScriptVersionNumber = function (fileName) {
        return this.cache.get(fileName).version;
    };
    ServiceHost.prototype.getScriptVersion = function (fileName) {
        var file = this.cache.get(fileName);
        if (!file)
            return void 0;
        return file.version.toString();
    };
    ServiceHost.prototype.getScriptSnapshot = function (fileName) {
        var cached = this.cache.get(fileName);
        if (cached) {
            return cached.snapshot;
        }
        if (fs.existsSync(fileName)) {
            var file = { version: 0 };
            var contents = fs.readFileSync(fileName).toString();
            file.snapshot = ts.ScriptSnapshot.fromString(contents);
            this.cache.set(fileName, file);
            return file.snapshot;
        }
        // else {
        //     console.log("bad", fileName);
        // }
        return void 0;
    };
    ServiceHost.prototype.getCurrentDirectory = function () {
        return process.cwd();
    };
    ServiceHost.prototype.getDefaultLibFileName = function (options) {
        return ts.getDefaultLibFilePath(options);
    };
    return ServiceHost;
}());
exports.ServiceHost = ServiceHost;
