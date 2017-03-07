import {Visitor} from "../visitor";
import * as ts from "typescript";
import {VisitorContext} from "../visitor_context";

export class ImportVisitor implements Visitor {

    public didVisit = false;

    public filter(node : ts.Node) {
        return node.kind == ts.SyntaxKind.RequireKeyword || node.kind === ts.SyntaxKind.ImportDeclaration;
    }

    public visit(node : ts.Node, context : VisitorContext) : boolean {
        for(let i = 0; i < node.getChildCount(); i++) {
            const child = node.getChildAt(i);
            if(child.kind === ts.SyntaxKind.StringLiteral) {
                let fileRef = context.cleanFilePath(child.getFullText());
                if(fileRef.indexOf("/") === -1) {

                }
                else {
                }
                //context.getCurrentFile().addDependency(fileRef);
                //context.replace(child.getStart(), child.getEnd(), "\"my/new/path\"");
            }
        }
        return false;
    }

    public visitCompleted() : void {

    }

}