"use strict";
exports.__esModule = true;
///<reference types="node"/>
var ts = require("typescript");
var fs = require("fs");
var mutable_source_code_1 = require("./mutable-source-code");
var visitor_context_1 = require("./visitor_context");
function normalizePath(str) {
    return str.replace(/[\\\/]+/g, '/');
}
var HexCompiler = (function () {
    function HexCompiler(files, options) {
        this.fileNames = files || [];
        this.fileCache = new Map();
        this.options = options || this.getCompilationSettings();
        this.registry = ts.createDocumentRegistry();
        this.service = ts.createLanguageService(this, this.registry);
        this.visitors = [];
    }
    HexCompiler.prototype.compile = function () {
        var _this = this;
        this.fileNames.forEach(function (fileName) {
            _this.transpile(fileName);
            _this.logErrors(fileName);
        });
    };
    HexCompiler.prototype.getProgram = function () {
        return this.service.getProgram();
    };
    HexCompiler.prototype.getService = function () {
        return this.service;
    };
    HexCompiler.prototype.addVisitors = function () {
        var visitors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            visitors[_i] = arguments[_i];
        }
        (_a = this.visitors).push.apply(_a, visitors);
        var _a;
    };
    HexCompiler.prototype.addFile = function (path) {
        path = normalizePath(path);
        if (this.fileNames.indexOf(path) === -1) {
            this.fileNames.push(path);
        }
        return this.getProgram().getSourceFile(path);
    };
    HexCompiler.prototype.changeFile = function (path) {
        path = normalizePath(path);
        return null;
    };
    HexCompiler.prototype.removeFile = function (path) {
        return null;
    };
    HexCompiler.prototype.getCompilationSettings = function () {
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
    HexCompiler.prototype.getScriptFileNames = function () {
        return this.fileNames;
    };
    HexCompiler.prototype.getScriptVersion = function (fileName) {
        var file = this.fileCache.get(fileName);
        if (!file)
            return void 0;
        return file.version.toString();
    };
    HexCompiler.prototype.getScriptSnapshot = function (fileName) {
        var cached = this.fileCache.get(fileName);
        if (cached) {
            return cached.snapshot;
        }
        if (fs.existsSync(fileName)) {
            var contents = fs.readFileSync(fileName).toString();
            var snapshot = ts.ScriptSnapshot.fromString(contents);
            this.fileCache.set(fileName, {
                version: 0,
                path: fileName,
                snapshot: snapshot
            });
            return snapshot;
        }
        return void 0;
    };
    HexCompiler.prototype.getCurrentDirectory = function () {
        return process.cwd();
    };
    HexCompiler.prototype.getDefaultLibFileName = function (options) {
        return ts.getDefaultLibFilePath(options);
    };
    HexCompiler.prototype.getModulePath = function (module, file) {
        var m = ts.resolveModuleName(module, file, this.options, this);
        if (m && m.resolvedModule) {
            return m.resolvedModule.resolvedFileName;
        }
    };
    HexCompiler.prototype.readFile = function (path, encoding) {
        return ts.sys.readFile(path, encoding);
    };
    HexCompiler.prototype.fileExists = function (path) {
        return ts.sys.fileExists(path);
    };
    HexCompiler.prototype.getSourceFile = function (path) {
        var file = this.fileCache.get(path);
        if (!file) {
            this.getScriptSnapshot(path);
        }
        file = this.fileCache.get(path);
        return this.registry.acquireDocument(path, this.options, file.snapshot, file.version.toString());
    };
    HexCompiler.prototype.logErrors = function (fileName) {
        var p = this.getProgram();
        var allDiagnostics = p.getGlobalDiagnostics();
        // .concat(this.service.getSyntacticDiagnostics())
        // .concat(this.service.getSemanticDiagnostics());
        allDiagnostics.forEach(function (diagnostic) {
            var message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            if (diagnostic.file) {
                var _a = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start), line = _a.line, character = _a.character;
                console.log("  Error " + diagnostic.file.fileName + " (" + (line + 1) + "," + (character + 1) + "): " + message);
            }
            else {
                console.log("  Error: " + message);
            }
        });
    };
    HexCompiler.prototype.transpile = function (path) {
        var _this = this;
        var program = this.service.getProgram();
        var ast = program.getSourceFile(path);
        // if(this.getDiagnostics()) {
        //     return
        // }
        var context = new visitor_context_1.VisitorContext(ast.fileName, this);
        this.visitors.some(function (visitor) {
            _this.traverseAst(ast, visitor, context);
            //todo try this on one line
            return context.getHalted();
        });
        if (!context.getHalted()) {
            var mutable = new mutable_source_code_1.MutableSourceCode(ast);
            mutable.execute(context.getActions());
            // serviceHost.changeFile();
            // console.log((mutable.getAst() as any).text);
        }
    };
    HexCompiler.prototype.traverseAst = function (root, visitor, context) {
        function traverse(node) {
            if (visitor.filter(node)) {
                var visitChildren = visitor.visit(node, context);
                return context.getHalted() || visitChildren && ts.forEachChild(node, traverse);
            }
            return ts.forEachChild(node, traverse);
        }
        return traverse(root);
    };
    return HexCompiler;
}());
exports.HexCompiler = HexCompiler;
var str = "(function(modules) {\n \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction require(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId])\n \t\t\treturn installedModules[moduleId].exports;\n\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\texports: {},\n \t\t\tid: moduleId,\n \t\t\tloaded: false\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, require);\n\n \t\t// Flag the module as loaded\n \t\tmodule.loaded = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n \t\n\treturn require(0);\n})\n([";
// watcher.on('change', path => {
//     path = normalizePath(path);
//     console.log("change", path);
//     let ast = p.getSourceFile(path);
//     const d = p.getGlobalDiagnostics()
//         .concat(p.getSemanticDiagnostics())
//         .concat(p.getDeclarationDiagnostics())
//         .concat(p.getOptionsDiagnostics());
//     if(d && d.length > 0) {
//         console.log(d);
//     }
//
//     serviceHost.changeFile(path);
//      let context = new VisitorContext(ast.fileName, p.getTypeChecker());
//     visitors.some((visitor : Visitor) => {
//         traverseAst(ast, visitor, context);
//         return context.getHalted();
//     });
//         if(!context.getHalted()) {
//             const mutable = new MutableSourceCode(ast);
//             mutable.execute(context.getActions());
//             console.log(registry.reportStats());
//             registry.updateDocument(mutable.getAst().fileName, options, ts.ScriptSnapshot.fromString(mutable.getAst().text), Math.random().toString());
//         }
//     //     const output = services.getEmitOutput(path);
//     //     const files = output.outputFiles;
//     //     console.log(mutable.getAst().text);
//     //
//     //     // for(let i = 0; i < files.length;i++) {
//     //     //     console.log(files[i]);
//     //     // }
//     // }
// });
//
// for (let i = 0; i < serviceHost.fileList.length; i++) {
//     const output = services.getEmitOutput(serviceHost.fileList[i]);
//     const files = output.outputFiles;
//     for (let j = 0; j < files.length; j++) {
//         if (!map[files[j].name]) {
//             count++;
//             map[files[j].name] = true;
//             str += wrap(files[j].text);
//         }
//     }
// }
//
// // let o = transpile(serviceHost.fileList[10]);
//
// function wrap(code : string) : string {
//     return `function(module, exports, require) {
//     ${code}
//     },`
// }
//
// str += "]";
//
// // fs.writeFileSync(path.join(__dirname, "./build/bundle.js"), str, {encoding: "UTF-8"});
//
// function descend(node : ts.Node, context : VisitorContext) {
//     return function visit(...visitors : Visitor[]) : void {
//         visitors.forEach(visitor => {
//             traverseAst(node, visitor, context);
//         });
//     }
// }
//
// export function traverseAst(root : ts.Node, visitor : Visitor, context : VisitorContext) : boolean {
//
//     function traverse(node : ts.Node) : any {
//         if (visitor.filter(node)) {
//             const visitChildren = visitor.visit(node, context);
//             return context.getHalted() || visitChildren && ts.forEachChild(node, traverse);
//         }
//         return ts.forEachChild(node, traverse);
//     }
//
//     return traverse(root);
// }
