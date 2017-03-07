///<reference types="node"/>
import * as ts from "typescript";
import * as fs from "fs";
import {MutableSourceCode} from "./mutable-source-code";
import {VisitorContext} from "./visitor_context";
import {Visitor} from "./visitor";

function normalizePath(str : string) {
    return str.replace(/[\\\/]+/g, '/');
}

export class CacheFile {

    public path : string;
    public snapshot : ts.IScriptSnapshot;
    public version : number;
    public dependencies : Array<string>;
    public alias : string;

    constructor(path : string, snapshot : ts.IScriptSnapshot) {
        this.path = path;
        this.alias = path;
        this.snapshot = snapshot;
        this.dependencies = [];
        this.version = 0;
    }

    public update() : void {

    }

    public setAlias(alias : string) : void {
        this.alias = alias;
    }

    public addDependency(filePath : string) : void {
        const idx = this.dependencies.indexOf(filePath);
        if(idx === -1) {
            this.dependencies.push(filePath);
        }
    }

    public removeDependency(filePath : string) : void {
        const idx = this.dependencies.indexOf(filePath);
        if(idx !== -1) {
            this.dependencies.splice(idx, 1);
        }
    }

    public getDependencies() : string[] {
        return this.dependencies.slice(0);
    }

    public clearDependencies() : void {
        this.dependencies.length = 0;
    }

}

// export interface ICachedFile {
//     path : string;
//     snapshot : ts.IScriptSnapshot;
//     version : number;
//     dependencies : Array<string>;
//     alias : string;
// }

export class HexCompiler implements ts.LanguageServiceHost {

    private registry : ts.DocumentRegistry;
    private service : ts.LanguageService;
    private options : ts.CompilerOptions;
    private fileCache : Map<string, CacheFile>;
    private fileNames : string[];
    private visitors : Array<Visitor>;

    constructor(files? : string[], options? : ts.CompilerOptions) {
        this.fileNames = files || [];
        this.fileCache = new Map<string, CacheFile>();
        this.options = options || this.getCompilationSettings();
        this.registry = ts.createDocumentRegistry();
        this.service = ts.createLanguageService(this, this.registry);
        this.visitors = [];
    }

    public compile() {
        this.fileNames.forEach((fileName : string) => {
            this.transpile(fileName);
            this.logErrors(fileName);
        });
    }

    public getProgram() {
        return this.service.getProgram();
    }

    public getService() {
        return this.service;
    }

    public addVisitors(...visitors : Visitor[]) : void {
        this.visitors.push(...visitors);
    }

    public getCacheFile(fileName : string) : CacheFile {
        return this.fileCache.get(fileName);
    }
    
    public addFile(path : string) : ts.SourceFile {
        path = normalizePath(path);
        if (this.fileNames.indexOf(path) === -1) {
            this.fileNames.push(path);
        }
        return this.getProgram().getSourceFile(path);
    }

    public changeFile(path : string) : ts.SourceFile {
        path = normalizePath(path);
        return null;
    }

    public removeFile(path : string) : ts.SourceFile {
        return null;
    }

    public getCompilationSettings() : ts.CompilerOptions {
        if (this.options) return this.options;
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
    }

    public getScriptFileNames() : string[] {
        return this.fileNames;
    }

    public getScriptVersion(fileName : string) : string {
        const file = this.fileCache.get(fileName);
        if (!file) return void 0;
        return file.version.toString();
    }

    public getScriptSnapshot(fileName : string) : ts.IScriptSnapshot|any {
        const cached = this.fileCache.get(fileName);
        if (cached) {
            return cached.snapshot;
        }
        if (fs.existsSync(fileName)) {

            const contents = fs.readFileSync(fileName).toString();
            const snapshot = ts.ScriptSnapshot.fromString(contents);

            this.fileCache.set(fileName, new CacheFile(fileName, snapshot));

            return snapshot;
        }

        return void 0;
    }

    public getCurrentDirectory() : string {
        return process.cwd();
    }

    public getDefaultLibFileName(options : ts.CompilerOptions) : string {
        return ts.getDefaultLibFilePath(options);
    }

    public getModulePath(module : string, file : string) : string {
        type M = ts.ResolvedModuleWithFailedLookupLocations;
        const m = ts.resolveModuleName(module, file, this.options, this) as M;
        if (m && m.resolvedModule) {
            return m.resolvedModule.resolvedFileName;
        }
    }

    public readFile(path : string, encoding? : string) : string {
        return ts.sys.readFile(path, encoding);
    }

    public fileExists(path : string) : boolean {
        return ts.sys.fileExists(path);
    }

    // private getSourceFile(path : string) : ts.SourceFile {
    //     let file = this.fileCache.get(path);
    //     if (!file) {
    //         this.getScriptSnapshot(path);
    //     }
    //     file = this.fileCache.get(path);
    //     return this.registry.acquireDocument(path,
    //         this.options,
    //         file.snapshot,
    //         file.version.toString()
    //     );
    // }

    private logErrors(fileName : string) {
        const p = this.getProgram() as ts.Program;
        let allDiagnostics = p.getGlobalDiagnostics()
        .concat(this.service.getSyntacticDiagnostics(fileName))
        .concat(this.service.getSemanticDiagnostics(fileName));

        allDiagnostics.forEach(diagnostic => {
            let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            if (diagnostic.file) {
                let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
                console.log(`  Error ${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
            }
            else {
                console.log(`  Error: ${message}`);
            }
        });
    }

    private transpile(path : string) : void {

        const program = this.service.getProgram();
        const ast = program.getSourceFile(path);

        const d = (ast as any).parseDiagnostics;
        if(d) {
            console.log(d);
        }

        this.logErrors(path);
        // if(this.getDiagnostics()) {
        //     return
        // }

        let context = new VisitorContext(ast.fileName, this);

        for(let i = 0; i < this.visitors.length; i++) {
            const visitor = this.visitors[i];
            this.traverseAst(ast, visitor, context);
        }

        this.visitors.some((visitor : Visitor) => {
            this.traverseAst(ast, visitor, context);
            //todo try this on one line
            return context.getHalted();
        });

        if (!context.getHalted()) {
            const mutable = new MutableSourceCode(ast);
            mutable.execute(context.getActions());
            // serviceHost.changeFile();
            // console.log((mutable.getAst() as any).text);
        }
    }

    private traverseAst(root : ts.Node, visitor : Visitor, context : VisitorContext) : boolean {

        function traverse(node : ts.Node) : any {
            if (visitor.filter(node)) {
                const visitChildren = visitor.visit(node, context);
                return context.getHalted() || visitChildren && ts.forEachChild(node, traverse);
            }
            return ts.forEachChild(node, traverse);
        }

        return traverse(root);
    }

}

let str = `(function(modules) {
 	// The module cache
 	var installedModules = {};

 	// The require function
 	function require(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId])
 			return installedModules[moduleId].exports;

 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			exports: {},
 			id: moduleId,
 			loaded: false
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, require);

 		// Flag the module as loaded
 		module.loaded = true;

 		// Return the exports of the module
 		return module.exports;
 	}
 	
	return require(0);
})
([`;

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
