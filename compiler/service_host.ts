import * as ts from "typescript";
import * as fs from "fs";

interface IFile {
    path? : string;
    snapshot? : ts.IScriptSnapshot;
    version : number;
}

export class ServiceHost implements ts.LanguageServiceHost {

    public fileList : string[];
    private cache : Map<string, IFile>;
    private registry : ts.DocumentRegistry;
    private options : ts.CompilerOptions;

    constructor(fileList : string[]) {
        this.fileList = fileList;
        this.cache = new Map<string, IFile>();
        this.registry = ts.createDocumentRegistry();
        this.options = this.getCompilationSettings();
    }

    //todo need to call the transpile function AFTER read from disk
    //todo this belongs on the compiler class
    public changeFile(path : string) : void {
        const file = this.cache.get(path);
        file.version++;
        const contents = fs.readFileSync(path).toString();
        const snapshot = ts.ScriptSnapshot.fromString(contents);
        file.snapshot = snapshot;
        this.registry.updateDocument(path, this.options, snapshot, file.version.toString());
    }

    public getCompilationSettings() : ts.CompilerOptions {
        if(this.options) return this.options;
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

    public getRegistry() : ts.DocumentRegistry {
        return this.registry;
    }

    public getScriptFileNames() : string[] {
        return this.fileList;
    }

    public getScriptVersionNumber(fileName : string) : number {
        return this.cache.get(fileName).version;
    }

    public getScriptVersion(fileName : string) : string {
        const file = this.cache.get(fileName);
        if (!file) return void 0;
        return file.version.toString();
    }

    public getScriptSnapshot(fileName : string) : ts.IScriptSnapshot|any {
        const cached = this.cache.get(fileName);
        if (cached) {
            return cached.snapshot;
        }
        if (fs.existsSync(fileName)) {
            const file : IFile = { version : 0 };
            const contents = fs.readFileSync(fileName).toString();
            file.snapshot = ts.ScriptSnapshot.fromString(contents);
            this.cache.set(fileName, file);
            return file.snapshot;
        }
        // else {
        //     console.log("bad", fileName);
        // }
        return void 0;
    }

    public getCurrentDirectory() : string {
        return process.cwd();
    }

    public getDefaultLibFileName(options : ts.CompilerOptions) : string {
        return ts.getDefaultLibFilePath(options);
    }

}