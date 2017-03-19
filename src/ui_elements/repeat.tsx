// import {EditorHTMLElement} from "../editor_element/editor_html_element";

interface IRepeatAttrs<T> {
    list : Array<T>;
    itemFactory : (item? : T, index? : number, list? : Array<T>) => JSXElement;
}

declare var DirtyCheck : any;

class Repeat {}

// export class Repeat<T> extends EditorHTMLElement<IRepeatAttrs<T>> {
//
//     public onUpdated() {
//         if(DirtyCheck(this.attrs, "list")) {
//             //teardown entire list, recycle children
//             //this.children[i]
//             //<RepeatItem>  My index is { Bind(Repeat.Index) } </RepeatItem>
//             //
//             //  for each child
//             //      get binding
//             //      if binding
//             //          change value
//             //      recurse
//             //
//         }
//     }
//
//     public createInitialStructure(children : JSXElement) : JSXElement {
//         return [];
//     }
//
// }