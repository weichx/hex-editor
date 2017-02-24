
export interface ITraversable {
    parent : ITraversable;
}

export interface IElementReference {
    element : ITraversable;
}

export class ShadowTree<T extends ShadowTreeNode<U>, U extends IElementReference> {

    private nodeMap : Map<ITraversable, T>;
    private rootNodes : Array<T>;
    private nodeConstructor : { new(t : U) : T };

    constructor(nodeConstructor : { new(t : U) : T }) {
        this.nodeConstructor = nodeConstructor;
        this.nodeMap = new Map<ITraversable, T>();
        this.rootNodes = [];
    }

    public traverse() : void {
        for(let i = 0; i < this.rootNodes.length; i++) {
            if(this.rootNodes[i].traverse()) {
                this.rootNodes.removeAt(i);
            }
        }
    }

    public add(item : U) : void {
        let currentNode = this.nodeMap.get(item.element);
        if(currentNode) {
            currentNode.items.add(item);
            return;
        }
        currentNode = new this.nodeConstructor(item);
        this.insert(currentNode);
    }

    public remove(item : U) : void {
        let node = this.nodeMap.get(item.element);
        if(!node) return;
        this.nodeMap.delete(item.element);
        const rootIdx = this.rootNodes.indexOf(node);
        if(rootIdx !== -1) {
            this.rootNodes.removeAt(rootIdx);
            for(let i = 0; i < node.children.length; i++) {
                this.rootNodes.push(node.children[i] as T);
            }
            return;
        }

        const parentNode = this.nodeMap.get(item.element.parent);
        if(!parentNode) return;

        const nodeIdx = parentNode.children.indexOf(node);
        if(nodeIdx !== -1) {
            parentNode.children.removeAt(nodeIdx);
        }

        for(let i = 0; i < node.children.length; i++) {
            parentNode.children.add(node.children[i]);
        }

    }

    private insert(treeNode : T) : void {
        this.nodeMap.set(treeNode.element, treeNode);
        const parentTreeNode = this.findParent(treeNode);
        if(!parentTreeNode) return this.insertAtRoot(treeNode);

        for(let i = 0; i < parentTreeNode.children.length; i++) {
            const childNode = parentTreeNode.children[i];
            if(ShadowTree.isDescendant(childNode.element, treeNode.element)) {
                treeNode.children.add(childNode);
                parentTreeNode.children.splice(i--, 1);
            }
        }
        parentTreeNode.children.add(treeNode);
    }

    private insertAtRoot(treeNode : T) : void {
        //if any root nodes should be children of this node, remove from root and add to new node
        for(let i = 0; i < this.rootNodes.length; i++) {
            const node = this.rootNodes[i];
            if(ShadowTree.isDescendant(node.element, treeNode.element)) {
                treeNode.children.add(node);
                this.rootNodes.removeAt(i);
            }
        }
        this.rootNodes.add(treeNode);
    }

    private static isDescendant<T>(possibleChild : ITraversable, parent : ITraversable) : boolean {
        if(possibleChild.parent === parent) return true;
        let ptr = possibleChild.parent;
        while(ptr) {
            if(ptr.parent === parent) return true;
            ptr = ptr.parent;
        }
        return false;
    }

    private findParent(treeNode : T) : T {
        let ptr = treeNode.element.parent;
        while (ptr) {
            const node = this.nodeMap.get(ptr);
            if (node) return node;
            ptr = ptr.parent;
        }

        return null;
    }

}

export abstract class ShadowTreeNode<T extends IElementReference> {

    public readonly children : Array<ShadowTreeNode<T>>;
    public readonly items : Array<T>;
    public readonly element : ITraversable;

    constructor(updater : T) {
        this.element = updater.element;
        this.children = [];
        this.items = [ updater ];
    }

    public abstract traverse() : boolean;


}
