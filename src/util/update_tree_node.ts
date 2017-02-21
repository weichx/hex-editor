import {ITraversable} from "./update_tree";

export interface IUpdatable<T> {
    element : ITraversable<T>;
    onUpdate(delta? : number) : void;
}

export class ReferenceTreeNode<T> {

    public parent : ReferenceTreeNode<T>;
    public children : Array<ReferenceTreeNode<T>> = [];
    public updaters : Array<any>;
    public element : ITraversable<T>;

    constructor(updater : IUpdatable<T>) {
        this.element = updater.element;
        this.children = [];
        this.updaters = [ updater ];

        //find parent
        //if no parent, attach to root
        //if parent
        //foreach child of parent
        //if this is a parent of that childd
        //take that child
    }


    public traverse() : void {}

        // if(this.element.isDestroyed()) {
        //     //remove
        // }
        // for(let i = 0; i < this.updaters.length; i++) {
        //     if(this.element.isDestroyed()) {
        //
        //     }
        //     // else if(this.element.isDisabled()) {
        //     //break;
        //     //}
        //     else {
        //         this.updaters[i].onUpdated();
        //     }
        // }
        // //if(this.element.isActiveAndEnabled())
        // for(let i = 0; i < this.children.length; i++) {
        //     this.children[i].traverse();
        // }


}

// export class UpdateTreeNode extends ReferenceTreeNode<> {
//
// }