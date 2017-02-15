namespace HexEditorInternal {

    import EditorHTMLElement = HexEditor.EditorHTMLElement;
    import EditorElement = HexEditor.EditorElement;
    import EditorTextElement = HexEditor.EditorTextElement;
    import traverseRootFirst = HexUtil.traverseRootFirst;
    import traverse = HexUtil.traverse;

    const smartAttributes = [
        IdAndEventsAttributes
    ];

    function createChildren(root : any, children : any) {
        if (typeof children === "string") {
            root.addChild(new EditorTextElement(children));
        }
        else if (typeof children === "boolean") {
            root.addChild(new EditorTextElement(children.toString()));
        }
        else if (typeof children === "number") {
            root.addChild(new EditorTextElement(children.toString()));

        }
        else if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                createChildren(root, children[i]);
            }
        }
        else if (children instanceof EditorElement) {
            root.addChild(children);
        }
    }

// created -> no children have been built
// structured -> static children have been built
// enabled
// mounted -> structure is built but not in dom, all children are present
// rendered -> structure in dom
// disabled
// destroyed

    function createHTMLElement(tag : string, attrs : any, children : any) {
        const retn = new EditorHTMLElement(attrs, tag);
        const renderContext = RenderContextStack.peek();
        retn.onCreated();
        createChildren(retn, children);
        if (attrs) {
            for (let i = 0; i < smartAttributes.length; i++) {
                smartAttributes[i](renderContext, retn, attrs);
            }
        }
        retn.isStructured = true;
        retn.__renderContext = renderContext;
        retn.onStructured();
        retn.onEnabled();
        return retn;
    }

    function createInstanceElement(type : TypeOf<EditorElement>, attrs : any, children : any) {
        const renderContext = RenderContextStack.peek();
        const retn = new type(attrs) as any;
        RenderContextStack.push(retn);
        retn.onCreated();
        const child = retn.createInitialStructure(children);
        child && createChildren(retn, child);
        if (attrs) {
            for (let i = 0; i < smartAttributes.length; i++) {
                smartAttributes[i](renderContext, retn, attrs);
            }
        }
        retn.isStructured = true;
        retn.__renderContext = renderContext;
        retn.onStructured();
        retn.onEnabled();
        RenderContextStack.pop();
        return retn;
    }

    export function createElement<T extends EditorElement,U>(type : string | TypeOf1<T, U>, attrs : U = null, ...children : any[]) : any {

        if (typeof type === "string") {
            return createHTMLElement(type, attrs, children);
        }
        else if (typeof type === "function") {
            return createInstanceElement(type, attrs, children);
        }

    }

    export function render(element : EditorElement, mountPoint : HTMLElement) {
        element.mount(mountPoint);

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

}