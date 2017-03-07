import * as ts from "typescript";
import {Visitor} from "../visitor";
import {VisitorContext} from "../visitor_context";

export class RegisterClass implements Visitor {

    public filter(node : ts.Node) : boolean {
        return node.kind === ts.SyntaxKind.ClassDeclaration;
    }

    public visit(node : ts.Node, context : VisitorContext) : boolean {
        node.getLastToken();
        //context.insertLine(.getEnd(), "alert('hex yeah!')");
        return false;
    }

}
