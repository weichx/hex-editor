import * as ts from "typescript";
import {VisitorContext} from "./visitor_context";

export interface Visitor {

    filter(node : ts.Node) : boolean

    visit(node : ts.Node, context : VisitorContext) : boolean;

}