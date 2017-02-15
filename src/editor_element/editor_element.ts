
namespace HexEditor {

    import traverse = HexUtil.traverse;
    import traverseRootFirst = HexUtil.traverseRootFirst;

    export abstract class EditorElement {

        public children : Array<EditorElement>;
        private childIdMap : Indexable<EditorElement>;
        protected childRoot : EditorElement;
        public parent : EditorElement;
        private __childMountPoint : HTMLElement;
        public __mountPoint : HTMLElement;
        public __renderContext : EditorElement;

        //todo make flags
        public isMounted : boolean;
        public isRendered : boolean;
        public isStructured : boolean;
        public isEnabled : boolean;
        public isDestroyed : boolean;
        public isStatic : boolean; //ignore childRoot
        public isVisible : boolean;

        constructor() {
            this.children = [];
            this.parent = null;
            this.isVisible = true;
            this.childIdMap = {}; //todo make this global map?
            this.childRoot = null;
            this.__renderContext = null;
            this.__childMountPoint = null;
            this.__mountPoint = null;
            this.isMounted = false;
            this.isRendered = false;
            this.isStructured = false;
            this.isStatic = false;
            this.isEnabled = false;
            this.isDestroyed = false;
        }

        //if this is not an html appElement node, add listener to all child elements
        public addEventListener(event : string, fn : (e? : any) => void, bubble = false) : void {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].addEventListener(event, fn, bubble);
            }
        }

        public setChildIdAlias(id : string, element : EditorElement) {
            this.childIdMap[id] = element;
        }

        public setVisible(isVisible : boolean) {
            if (this.isVisible === isVisible) return;
            this.isVisible = isVisible;
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].setVisible(isVisible);
            }
        }

        public getVisible() : boolean {
            return this.isVisible;
        }

        public setPosition(x : number, y : number) : void {
            const dom = this.getDomNode();
            dom.style.left = x + "px";
            dom.style.top = y + "px";
        }

        public setRect(rect : Rectangle) : void {
            const dom = this.getDomNode();
            dom.style.left = rect.x + 'px';
            dom.style.top = rect.y + 'px';
            dom.style.width = rect.width + 'px';
            dom.style.height = rect.height + 'px';
        }

        public getClientBounds() {
            return (<any>this.getDomNode()).__editorElement.getClientBounds();
        }

        protected getMountPoint() : HTMLElement {
            if (this.parent === null) {
                return null;
            }
            return this.__mountPoint || this.parent.getMountPoint();
        }

        protected getChildMountPoint() : HTMLElement {
            // if (this.__childMountPoint) return this.__childMountPoint;
            if (!this.childRoot) throw new Error("Child Root null");
            this.__childMountPoint = this.childRoot.getChildMountPoint();
            return this.__childMountPoint;
        }

        //children belong to the node who is `addChild` is called on,
        //even if they are inserted elsewhere in the dom via 'child-root'
        public addChild<T>(child : EditorElement) : void {
            //todo throw if add called before structure finished
            if (Array.isArray(child)) {
                debugger; //todo see if we can remove this check
                for (let i = 0; i < child.length; i++) {
                    this.addChild(child[i]);
                }
                return;
            }
            if (!this.childRoot) {
                this.childRoot = child;
            }

            if (this.isAncestor(child)) {
                debugger;
            }
            if (this.isDescendant(child)) {
                debugger;
            }
            if (child.parent) {
                child.parent.removeChild(child);
            }

            child.parent = this;
            this.children.push(child);

            child.isStatic = !this.isStructured;

            if (this.isRendered) {
                if (this.childRoot === child) {
                    child.render(this.__mountPoint);
                }
                else {
                    child.render(this.getChildMountPoint());
                }
            }
            else if (this.isMounted) {
                //if child root is a direct child, mount it to the input point
                if (this.childRoot === child) {
                    child.mount(this.__mountPoint);
                }
                else {
                    //otherwise, mount all children onto the childRoot
                    child.mount(this.getChildMountPoint());
                }
            }
        }

        //todo this might not work -- child root kinda borks this
        public insertChild(child : EditorElement, index : number) : void {
            if (index >= this.children.length) index = this.children.length - 1;
            if (index < 0) index = 0;

            child.orphan();

            child.parent = this;

            //todo call onParentChanged()
            this.children.splice(index, 0, child);

            child.isStatic = !this.isStructured;

            if (this.isRendered) {
                if (this.childRoot === child) {
                    child.render(this.__mountPoint);
                }
                else {
                    child.render(this.getChildMountPoint());
                }
            }
            else if (this.isMounted) {
                //if child root is a direct child, mount it to the input point
                if (this.childRoot === child) {
                    child.mount(this.__mountPoint);
                }
                else {
                    //otherwise, mount all children onto the childRoot
                    child.mount(this.getChildMountPoint());
                }
            }
        }

        protected render(mountPoint : HTMLElement) : void {
            this.mount(mountPoint);

            traverse(this, function (element : EditorElement) {
                if (element.isRendered) {
                    element.onRerendered();
                }
                else {
                    element.isRendered = true;
                    element.onRendered();
                }
            });

            traverseRootFirst(this, function (element : EditorElement) {
                element.onParentRendered();
            });
        }

        public mount(mountPoint : HTMLElement) : void {
            this.__mountPoint = mountPoint;
            const wasMounted = this.isMounted;
            this.isMounted = true;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i];
                if (child.isStatic) {
                    child.mount(mountPoint);
                }
                else {
                    child.mount(this.getChildMountPoint());
                }
            }

            if (wasMounted) {
                this.onRemounted();
            }
            else {
                this.onMounted();
            }

        }

        public removeChild(child : EditorElement) : void {
            //todo check for dom root change
            const idx = this.children.indexOf(child);
            if (idx === -1) return;
            this.children.splice(idx, 1);
        }

        public orphan() : void {
            if (!this.isOrphaned()) {
                this.parent.removeChild(this);
                this.getDomNode().remove();
                this.parent = null;
            }
        }

        public isOrphaned() : boolean {
            return this.parent === null;
        }

        public orphanChildren() : void {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].getDomNode().remove();
                this.children[i].parent = null;
            }
            this.children.length = 0;
        }

        public clearChildren() : void {
            while (this.children.length) {
                this.children[0].destroy();
            }
            //in the case of child root being set to a node,
            //the children will belong to the parent but the dom
            //will belong to this node. Nuke it.
            const node = this.getDomNode();
            while (node.firstElementChild) {
                node.firstElementChild.remove();
            }
        }

        public getChildrenByType<T>(type : EditorElementConstructor<T>) : T[] {
            const retn = new Array<T>();
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i] instanceof type) {
                    retn.push(this.children[i] as any);
                }
            }
            return retn;
        }

        public getChildByType<T>(type : EditorElementConstructor<T>) : T {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i] instanceof type) {
                    return this.children[i] as any;
                }
            }
            return null;
        }

        public getAncestorByType<T extends EditorElement>(type : EditorElementConstructor<T>) : T {
            let ptr = this.parent as any;
            while (ptr) {
                if (ptr instanceof type) {
                    return ptr as T;
                }
                ptr = ptr.parent;
            }
            return null;
        }

        // public getElementInAncestry<T extends EditorElementBase>(target : HTMLElement|EditorElementBase, type : TypeOf<T>) : T {
        //     if (target instanceof EditorElementBase) {
        //         let ptr = target.parent;
        //         while (ptr) {
        //             if (ptr instanceof type) {
        //                 return ptr as T;
        //             }
        //             ptr = ptr.parent;
        //         }
        //         return null;
        //     }
        //     else {
        //         return getHTMLElementInAncestry(target, type);
        //     }
        //
        // }
        //
        // public getHTMLElementInAncestry<T>(target : HTMLElement, type : TypeOf<T>) : T {
        //     let ptr = target as any;
        //     while (ptr) {
        //         const cast = (<any>ptr);
        //         const editorElement = cast.__editorElement;
        //         if (editorElement instanceof type) {
        //             return editorElement;
        //         }
        //         ptr = ptr.parentElement;
        //     }
        //     return null;
        // }

        public getFirstOfTypeUpwards<T extends EditorElement>(type : EditorElementConstructor<T>) : T {
            if (this instanceof type) return this as any;
            return this.getAncestorByType(type);
        }

        public getDomNode() : HTMLElement {
            return this.children[0].getDomNode();
        }

        public getChildById<T extends EditorElement>(id : string) : T {
            return this.childIdMap[id] as T;
        }

        public setChildRoot(element : EditorElement) : void {
            this.childRoot = element;
        }

        public getChildRoot() : EditorElement {
            return this.childRoot;
        }

        public hasXId(idName : string) : boolean {
            const dom = this.getDomNode();
            return dom.getAttribute("x-id") === idName;
        }

        public hasCssClass(className : string) : boolean {
            const dom = this.getDomNode();
            return dom.classList.contains(className);
        }

        public isElementInHierarchy(element : Element) : boolean {
            const dom = this.getDomNode();
            let ptr = element.parentNode;
            while (ptr !== document.body) {
                if (ptr === dom) return true;
                ptr = ptr.parentNode;
            }
            return false;
        }

        public isAncestor(target : EditorElement) : boolean {
            let ptr = this.parent;
            while (ptr) {
                if (ptr === target) {
                    return true;
                }
                ptr = ptr.parent;
            }
            return false;
        }

        public isDescendant(target : EditorElement) : boolean {
            return target.isAncestor(this);
        }

        public getChildIndex(child : EditorElement) : number {
            return this.children.indexOf(child);
        }

        public destroy() {
            if (this.isDestroyed) return;
            this.isDestroyed = true;
            //maybe have 'isDestroyPending' flag
            //be careful with destroying the dom node since it is shared in a virtual tree
            this.onDestroyed();

            for (let i = 0; i < this.children.length; i++) {
                this.children[i].destroy();
            }

            if (this.parent) {
                if (!this.parent.isDestroyed) {
                    this.getDomNode().remove();
                    this.parent.removeChild(this);
                }
            }

            this.__mountPoint = null;
            this.__childMountPoint = null;
            this.__renderContext = null;
            this.parent = null;
            this.childRoot = null;
            this.childIdMap = null;
            this.children = null;

        }

        public onDestroyed() { }

        public onCreated() { }

        public onUpdated() { }

        public onRendered() { }

        public onRerendered() {}

        public onRemounted() {}

        public onParentRendered() { }

        public onMounted() { }

        public onDisabled() { }

        public onEnabled() { }

        public onStructured() { }

    }
}