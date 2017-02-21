import {ReferenceTreeNode, IUpdatable} from "./update_tree_node";

export interface ITraversable<T> {
    parent : ITraversable<T>;
}

export class UpdateTree<T> {

    private nodeMap : Map<any, ReferenceTreeNode<T>>;
    private rootNodes : Array<ReferenceTreeNode<T>>;

    constructor() {
        this.nodeMap = new Map<any, ReferenceTreeNode<T>>();
        this.rootNodes = [];
    }

    public traverse() : void {
        for(let i = 0; i < this.rootNodes.length; i++) {
            this.rootNodes[i].traverse(); //todo -- how do I remove one?
        }
    }

    public add(updater : IUpdatable<T>) : void {
        let currentNode = this.nodeMap.get(updater.element);
        if(currentNode) {
            currentNode.updaters.add(updater);
            return;
        }

        currentNode = new ReferenceTreeNode(updater);
        this.insert(currentNode);
    }

    private insert(treeNode : ReferenceTreeNode<T>) : void {
        const parentTreeNode = this.findParent(treeNode);
        if(!parentTreeNode) return this.insertAtRoot(treeNode);

        for(let i = 0; i < parentTreeNode.children.length; i++) {
            const childNode = parentTreeNode.children[i];
            if(this.isDescendant(childNode, treeNode)) {
                treeNode.children.add(childNode);
                parentTreeNode.children.removeAt(i--);
            }
        }

    }

    private insertAtRoot(treeNode : ReferenceTreeNode<T>) : void {
        //if any root nodes should be children of this node, remove from root and add to new node
        for(let i = 0; i < this.rootNodes.length; i++) {
            const node = this.rootNodes[i];
            if(this.isDescendant(node, treeNode)) {
                treeNode.children.add(node);
                this.rootNodes.removeAt(--i);
            }
        }
        this.rootNodes.add(treeNode);
    }

    private isDescendant(possibleChild : any, parent : any) : boolean {
        if(possibleChild.parent === parent) return true;
        let ptr = possibleChild.parent;
        while(ptr) {
            if(ptr.parent === parent) return true;
            ptr = ptr.parent;
        }
        return false;
    }

    private findParent(treeNode : ReferenceTreeNode<T>) : ReferenceTreeNode<T> {
        let ptr = treeNode.element;
        while (ptr) {
            const node = this.nodeMap.get(ptr);
            if (node) return node;
            ptr = ptr.parent;
        }
        return null;
    }

}