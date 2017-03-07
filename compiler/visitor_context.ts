import ts = require('typescript');
import {Action, ReplaceAction} from './mutable-source-code';
import {FastAppendAction} from './mutable-source-code';
import {FastRewriteAction} from './mutable-source-code';
import {InsertAction} from './mutable-source-code';
import {HexCompiler} from "./hex_compiler";

export class VisitorContext {

    private _halted = false;
    private _actions : Action[] = [];
    private _diags : ts.Diagnostic[] = [];
    private _fileName : string;
    private compiler : HexCompiler;

    constructor(fileName : string, compiler : HexCompiler) {
        this._fileName = fileName;
        this.compiler = compiler;
    }

    public cleanFilePath(input : string) : string {
        return input.replace(/[\`"'\s]/g, "");
    }

    public getFullPath(path : string) : string {
        return this.compiler.getModulePath(this._fileName, path);
    }

    public getTypeChecker() : ts.TypeChecker {
        return this.compiler.getProgram().getTypeChecker();
    }

    isHalted() : boolean {
        return this._halted;
    }

    insertLine(position : number, str : string) : void {
        this.insert(position, str + '\n');
    }

    insert(position : number, str : string) : void {
        this._actions.push(new InsertAction(position, str));
    }

    replace(start : number, end : number, str : string) : void {
        this._actions.push(new ReplaceAction(start, end, str));
    }

    fastAppend(str : string) : void {
        this._actions.push(new FastAppendAction(str));
    }

    fastRewrite(start : number, str : string) : void {
        this._actions.push(new FastRewriteAction(start, str));
    }

    reportDiag(node : ts.Node, category : ts.DiagnosticCategory, message : string, halt? : boolean) : void {
        let diagnostic : ts.Diagnostic = {
            file: node.getSourceFile(),
            start: node.getStart(),
            length: node.getEnd() - node.getStart(),
            messageText: message,
            category: category,
            code: 0
        };
        this._diags.push(diagnostic);
        this._halted = this._halted || halt;
    }

    pushDiag(diagnostic : ts.Diagnostic) : void {
        this._diags.push(diagnostic);
    }

    getActions() : Action[] {
        return this._actions;
    }

    getDiags() : ts.Diagnostic[] {
        return this._diags;
    }

    getHalted() : boolean {
        return this._halted;
    }

    getFileName() : string {
        return this._fileName;
    }

}