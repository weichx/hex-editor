import {Visitor} from "../visitor";
import * as ts from "typescript";
import {VisitorContext} from "../visitor_context";
import * as path from "path";

export class ImportVisitor implements Visitor {

    public filter(node : ts.Node) {
        return node.kind == ts.SyntaxKind.RequireKeyword || node.kind === ts.SyntaxKind.ImportDeclaration;
    }

    public visit(node : ts.Node, context : VisitorContext) : boolean {
        for(let i = 0; i < node.getChildCount(); i++) {
            const child = node.getChildAt(i);
            if(child.kind === ts.SyntaxKind.StringLiteral) {
                let fileRef = context.cleanFilePath(child.getFullText());
                if(fileRef.indexOf("/") === -1) {
                    context.getFile().addDependency();
                }
                context.replace(child.getStart(), child.getEnd(), "\"my/new/path\"");
            }
        }
        return false;
    }

}