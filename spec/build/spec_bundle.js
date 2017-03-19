/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(53);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(2);
	const editor_runtime_1 = __webpack_require__(3);
	const element_renderer_1 = __webpack_require__(7);
	const editor_binding_element_1 = __webpack_require__(50);
	const browser_runtime_1 = __webpack_require__(51);
	const editor_worker_1 = __webpack_require__(52);
	window.AppRootElementId = 0;
	window.Runtime = null;
	window.HexEnvironmentFlag = 0;
	window.EmptyFunction = function () { };
	window.EditorBindingElement = editor_binding_element_1.EditorBindingElement;
	window.runtimeGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 1 /* RuntimeActive */) !== 0)
	        fn();
	};
	window.editorGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 2 /* EditorActive */) !== 0)
	        fn();
	};
	window.developmentGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 4 /* DevelopmentEnv */) !== 0)
	        fn();
	};
	window.productionGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 16 /* TestEnvironment */) !== 0)
	        fn();
	};
	window.productionGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 8 /* ProductionEnv */) !== 0)
	        fn();
	};
	const DocumentHead = document.head || document.getElementsByTagName('head')[0];
	window.createStyleSheet = function (css) {
	    css = css.replace('<style>', "").replace("</style>", "");
	    const styleTag = document.createElement('style');
	    styleTag.type = 'text/css';
	    if (styleTag.styleSheet) {
	        styleTag.styleSheet.cssText = css;
	    }
	    else {
	        styleTag.appendChild(document.createTextNode(css));
	    }
	    DocumentHead.appendChild(styleTag);
	    return styleTag;
	};
	window.Bind = function (ctx, path) {
	    return { ctx: ctx, path: path };
	};
	window.System = global.System;
	window.FileSystem = global.FileSystem;
	window.Hex = { createElement: element_renderer_1.createElement };
	window.self = new editor_worker_1.EditorWorkerContext();
	window.HexWorker = editor_worker_1.EditorWorker;
	window.HexEnvironmentFlag |= 2 /* EditorActive */;
	window.BrowserRuntime = new browser_runtime_1.BrowserRuntimeImpl("todo --- code url here", document.body);
	window.EditorRuntime = new editor_runtime_1.EditorRuntimeImplementation();
	window.Runtime = EditorRuntime;
	function loop(delta) {
	    BrowserRuntime.update(delta);
	    EditorRuntime.update(delta);
	    requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	Array.prototype.contains = function (item) {
	    const length = this.length;
	    for (let i = 0; i < length; i++) {
	        if (this[i] === item)
	            return true;
	    }
	    return false;
	};
	Array.prototype.getFirst = function () {
	    return this[0];
	};
	Array.prototype.getLast = function () {
	    return this[this.length - 1];
	};
	Array.prototype.remove = function (item) {
	    const length = this.length;
	    for (let i = 0; i < length; i++) {
	        if (this[i] === item) {
	            while (i < length) {
	                this[i] = this[i + 1];
	                i++;
	            }
	            this.length--;
	            return true;
	        }
	    }
	    return false;
	};
	Array.prototype.removeAt = function (index) {
	    let len = this.length;
	    if (!len) {
	        return false;
	    }
	    while (index < len) {
	        this[index] = this[index + 1];
	        index++;
	    }
	    this.length--;
	    return true;
	};
	Array.prototype.insert = function (item, index) {
	    let i = this.length;
	    this.length++;
	    if (index >= this.length) {
	        this[this.length - 1] = item;
	        return;
	    }
	    while (i != index) {
	        this[i] = this[--i];
	    }
	    this[index] = item;
	};
	exports.default = 0;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const evt_selection_changed_1 = __webpack_require__(5);
	const element_renderer_1 = __webpack_require__(7);
	const evt_window_resized_1 = __webpack_require__(21);
	const evt_app_element_created_1 = __webpack_require__(22);
	const editor_element_1 = __webpack_require__(15);
	const editor_input_1 = __webpack_require__(23);
	const tree_1 = __webpack_require__(27);
	const runtime_1 = __webpack_require__(28);
	const app_element_1 = __webpack_require__(29);
	const e_command_type_1 = __webpack_require__(32);
	const component_1 = __webpack_require__(37);
	const vector2_1 = __webpack_require__(17);
	const drag_action_1 = __webpack_require__(38);
	const horizontal_stack_layout_1 = __webpack_require__(39);
	const project_1 = __webpack_require__(43);
	let mouseCache = new vector2_1.Vector2();
	class UpdateNode extends tree_1.ShadowTreeNode {
	    traverse() {
	        const element = this.element;
	        if (element.isDestroyed()) {
	            return true;
	        }
	        //todo or disabled
	        for (let i = 0; i < this.items.length; i++) {
	            this.items[i].onUpdated();
	            if (element.isDestroyed()) {
	                for (let j = 0; j < this.items.length; j++) {
	                    const ctor = this.items[i].constructor;
	                    const pool = ctor.Pool;
	                    if (pool) {
	                        pool.despawn(this.items[i]);
	                    }
	                }
	                return true;
	            }
	        }
	        for (let i = 0; i < this.children.length; i++) {
	            const removeChild = this.children[i].traverse();
	            if (removeChild) {
	                this.children.removeAt(--i);
	            }
	        }
	        return this.items.length === 0;
	    }
	}
	class EditorRuntimeImplementation extends runtime_1.RuntimeImpl {
	    constructor() {
	        super();
	        this.project = null;
	        this.selectedElement = null;
	        this.editorApplicationRoot = null;
	        this.input = new editor_input_1.EditorInput();
	        this.updateTree = new tree_1.ShadowTree(UpdateNode);
	        this.draggedAction = null;
	        this.lastEnteredElement = null;
	        this.rootDomNode = null;
	    }
	    setCursor(cursorString) {
	        document.body.style.cursor = cursorString;
	    }
	    getAppRootElementDomNode() {
	        return this.rootDomNode;
	    }
	    loadProject(pathToProject) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (pathToProject) {
	                this.project = new project_1.Project("New Project", pathToProject);
	            }
	            else {
	                this.project = new project_1.Project("Scratch", "C:\\Users\\matth\\WebstormProjects\\hex-editor\\test_project\\project.hex");
	            }
	            return this.project.load();
	            // const project = Hex.loadProject();
	            // if (!this.scene) this.scene = new Scene();
	            // this.scene.load(sceneDescription);
	            // const elements = sceneDescription.elements;
	            // const parentMap : Indexable<number> = {};
	            // //todo use an instance id for elements?
	            // this.suppressAddElement(() => {
	            //     const ids = Object.keys(elements);
	            //     for (let i = 0; i < ids.length; i++) {
	            //         const id = ids[i];
	            //         const elementDesc = elements[id];
	            //         const appElement = new AppElement(elementDesc.name) as any;
	            //         appElement.id = parseInt(id);
	            //         this.appElementRegistry[id] = appElement;
	            //         parentMap[id] = elementDesc.parentId;
	            //     }
	            //     const appElementIds = Object.keys(this.appElementRegistry);
	            //     for (let i = 0; i < appElementIds.length; i++) {
	            //         const appElement = this.appElementRegistry[appElementIds[i]] as any;
	            //         if (appElement.id === 0) continue;
	            //         const parentId = parentMap[appElement.id] || 0;
	            //         appElement.setParent(this.appElementRegistry[parentId]);
	            //     }
	            //     for (let i = 0; i < ids.length; i++) {
	            //         const appElement = this.appElementRegistry[ids[i]];
	            //         if (appElement === AppElement.Root) continue;
	            //         const componentDescriptors = elements[ids[i]].components;
	            //         this.sendCommand(CommandType.Create, appElement.id);
	            //         this.createComponents(appElement, componentDescriptors);
	            //     }
	            // });
	            // this.emit(SceneLoaded, this.scene);
	        });
	    }
	    createComponents(appElement, componentDescriptors) {
	        for (let i = 0; i < componentDescriptors.length; i++) {
	            const desc = componentDescriptors[i];
	            const type = component_1.Component.getComponentFromPath(desc.type);
	            if (type) {
	                const cmp = appElement.addComponent(type);
	                if (type.OnDeserialized) {
	                    type.OnDeserialized(cmp, desc.data); //temp until i optimize cerialize for hex
	                }
	            }
	        }
	    }
	    select(newSelection) {
	        const oldSelection = this.selectedElement;
	        this.selectedElement = newSelection;
	        this.emit(evt_selection_changed_1.SelectionChanged, newSelection, oldSelection);
	    }
	    beginDragAction(dragAction) {
	        if (!dragAction)
	            return;
	        if (this.draggedAction) {
	            throw new Error("Cannot initiate another drag action while one exists!");
	        }
	        this.draggedAction = dragAction;
	        this.draggedAction.onDragStart();
	    }
	    getCurrentDragAction() {
	        return this.draggedAction;
	    }
	    getSelection() {
	        return this.selectedElement;
	    }
	    update(timeStamp) {
	        this.decodeCommandBuffers();
	        for (let i = 0; i < this.pendingComponents.length; i++) {
	            const cmp = this.pendingComponents[i];
	            cmp.onMounted();
	            //todo handle on editor gui
	            // if(typeof cmp.onEditorUpdate === "function") {
	            //
	            // }
	        }
	        this.pendingComponents.length = 0;
	        if (this.draggedAction) {
	            const mouse = this.input.getMousePosition(mouseCache);
	            const element = this.getEditorElementAtPoint(mouse);
	            this.draggedAction.onUpdate();
	            if (element) {
	                if (element !== this.lastEnteredElement) {
	                    if (this.lastEnteredElement) {
	                        drag_action_1.DragAction.invokeExitHandlers(this.lastEnteredElement, this.draggedAction);
	                    }
	                    this.lastEnteredElement = element;
	                    drag_action_1.DragAction.invokeEnterHandlers(this.lastEnteredElement, this.draggedAction);
	                }
	                else {
	                    drag_action_1.DragAction.invokeHoverHandlers(this.lastEnteredElement, this.draggedAction);
	                }
	            }
	            if (this.input.isMouseUp()) {
	                this.draggedAction.onDrop(element);
	                drag_action_1.DragAction.invokeExitHandlers(element, this.draggedAction);
	                drag_action_1.DragAction.invokeDropHandlers(element, this.draggedAction);
	                this.draggedAction = null;
	            }
	        }
	        this.updateTree.traverse();
	        for (let i = 0; i < this.layoutQueue.length; i++) {
	            this.layoutQueue[i].doLayout();
	        }
	        this.layoutQueue.length = 0;
	        //the real runtime implementation of buffer building lives
	        // on a worker thread and is decoded on a UI thread
	        this.sendCommandBuffer();
	        // this.decodeCommandBuffer(commandBuffer);
	        this.input.update();
	    }
	    //todo hide this in the api
	    addElement(appElement) {
	        //root element has null parent, it is pre-created
	        if (appElement.getParent() === null)
	            return;
	        //todo destroy this when element is nuked
	        this.appElementRegistry[appElement.id] = appElement;
	        //get UI Element
	        this.emit(evt_app_element_created_1.AppElementCreated, appElement);
	        this.sendCommand(e_command_type_1.CommandType.Create, appElement.id);
	        const parent = appElement.getParent();
	        if (parent) {
	            //todo -- only if they are tagged for editor calls
	            const components = parent.getAllComponents();
	            for (let i = 0; i < components.length; i++) {
	                components[i].onChildAdded(appElement);
	            }
	        }
	    }
	    addComponent(component) {
	        const appElement = component.appElement;
	        this.pendingComponents.push(component);
	        if (this.getSelection() === appElement) {
	            this.emit(evt_selection_changed_1.SelectionChanged, appElement);
	        }
	    }
	    drawScene(selector) {
	        this.rootDomNode = BrowserRuntime.elementIdToDomNode(0);
	        document.querySelector(selector).appendChild(this.rootDomNode);
	    }
	    getEditorElementAtPoint(point, type = null) {
	        if (!type)
	            type = editor_element_1.EditorElement;
	        //todo find a better way to find elements
	        const element = document.elementFromPoint(point.x, point.y).__editorElement;
	        if (!element)
	            return null;
	        return element.getAncestorByType(type, true);
	    }
	    start(appRoot, attrs = {}) {
	        this.createMenuBar();
	        this.createRoot(appRoot, attrs);
	        this.loadProject();
	        this.initListeners();
	    }
	    getProject() {
	        return this.project;
	    }
	    getInput() {
	        return this.input;
	    }
	    initListeners() {
	        // prevent default behavior from changing page on dropped file
	        window.ondragover = function (e) { e.preventDefault(); return false; };
	        // NOTE: ondrop events WILL NOT WORK if you do not "preventDefault" in the ondragover event!!
	        window.ondrop = function (e) { e.preventDefault(); return false; };
	        window.addEventListener("resize", () => {
	            this.emit(evt_window_resized_1.WindowResized, window.innerWidth, window.innerHeight);
	        });
	        var win = nw.Window.get();
	        win.on("resize", (width, height) => {
	            this.emit(evt_window_resized_1.WindowResized, width, height);
	        });
	        win.on("maximize", (width, height) => {
	            this.emit(evt_window_resized_1.WindowResized, width, height);
	        });
	    }
	    createRoot(appRoot, attrs) {
	        app_element_1.AppElement.Root = new app_element_1.AppElement("__Root__");
	        app_element_1.AppElement.Root.addComponent(horizontal_stack_layout_1.HorizontalStackLayout);
	        this.appElementRegistry[0] = app_element_1.AppElement.Root;
	        this.editorApplicationRoot = element_renderer_1.createElement(appRoot, attrs);
	        element_renderer_1.render(this.editorApplicationRoot, document.getElementById('root'));
	    }
	    createMenuBar() {
	        var win = nw.Window.get();
	        var menu = new nw.Menu({ type: 'menubar' });
	        var submenu = new nw.Menu();
	        submenu.append(new nw.MenuItem({
	            label: "New",
	            click: () => {
	                nw.Window.open("file_selector.html", (win) => {
	                    win.setAlwaysOnTop(true);
	                    win.on("closed", () => {
	                    });
	                });
	            }
	        }));
	        submenu.append(new nw.MenuItem({
	            label: 'Save', click: function () {
	                EditorRuntime.getScene().save();
	            }
	        }));
	        submenu.append(new nw.MenuItem({
	            label: 'Load', click: function () {
	            }
	        }));
	        menu.append(new nw.MenuItem({
	            label: 'File',
	            submenu: submenu,
	            click: function () {
	            },
	        }));
	        win.menu = menu;
	    }
	}
	exports.EditorRuntimeImplementation = EditorRuntimeImplementation;


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("tslib");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class SelectionChanged extends runtime_event_1.RuntimeEvent {
	}
	exports.SelectionChanged = SelectionChanged;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class RuntimeEvent {
	    static on(eventType) {
	        return function (target, propertyKey, descriptor) {
	            const proto = target;
	            proto.__runtime_events__ = proto.__runtime_events__ || new Map();
	            const eventMap = proto.__runtime_events__;
	            eventMap.set(eventType, propertyKey);
	        };
	    }
	}
	exports.RuntimeEvent = RuntimeEvent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const element_attribute_1 = __webpack_require__(8);
	const editor_text_element_1 = __webpack_require__(14);
	const editor_html_element_1 = __webpack_require__(19);
	const render_context_stack_1 = __webpack_require__(20);
	const editor_element_1 = __webpack_require__(15);
	const smartAttributes = [
	    element_attribute_1.IdAndEventsAttributes
	];
	function createChildren(root, children) {
	    if (typeof children === "string") {
	        root.addChild(new editor_text_element_1.EditorTextElement(children));
	    }
	    else if (typeof children === "boolean") {
	        root.addChild(new editor_text_element_1.EditorTextElement(children.toString()));
	    }
	    else if (typeof children === "number") {
	        root.addChild(new editor_text_element_1.EditorTextElement(children.toString()));
	    }
	    else if (Array.isArray(children)) {
	        for (let i = 0; i < children.length; i++) {
	            createChildren(root, children[i]);
	        }
	    }
	    else if (children instanceof editor_element_1.EditorElement) {
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
	function createHTMLElement(tag, attrs, children) {
	    const retn = new editor_html_element_1.EditorHTMLElement(attrs, tag);
	    const renderContext = render_context_stack_1.RenderContextStack.peek();
	    retn.onCreated();
	    createChildren(retn, children);
	    if (attrs) {
	        for (let i = 0; i < smartAttributes.length; i++) {
	            smartAttributes[i](renderContext, retn, attrs);
	        }
	    }
	    retn.renderContext = renderContext;
	    retn.onEnabled();
	    return retn;
	}
	function createInstanceElement(type, attrs, children) {
	    const renderContext = render_context_stack_1.RenderContextStack.peek();
	    const retn = new type(attrs);
	    render_context_stack_1.RenderContextStack.push(retn);
	    retn.onCreated();
	    const child = retn.createInitialStructure(children);
	    child && createChildren(retn, child);
	    if (attrs) {
	        for (let i = 0; i < smartAttributes.length; i++) {
	            smartAttributes[i](renderContext, retn, attrs);
	        }
	    }
	    retn.renderContext = renderContext;
	    retn.onEnabled();
	    render_context_stack_1.RenderContextStack.pop();
	    return retn;
	}
	function createElement(type, attrs = null, ...children) {
	    if (typeof type === "string") {
	        return createHTMLElement(type, attrs, children);
	    }
	    else if (typeof type === "function") {
	        return createInstanceElement(type, attrs, children);
	    }
	}
	exports.createElement = createElement;
	function render(editorElement, mountPoint) {
	    editorElement.render(mountPoint);
	}
	exports.render = render;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const attr_x_if_1 = __webpack_require__(9);
	const attr_x_if_eval_1 = __webpack_require__(12);
	const binding_1 = __webpack_require__(13);
	function IdAndEventsAttributes(context, element, attributes) {
	    if (attributes['x-id']) {
	        context.setChildIdAlias(attributes["x-id"], element);
	    }
	    if (attributes['x-if'] !== void 0) {
	        const binding = attributes['x-if'];
	        const xif = attr_x_if_1.XIf.Pool.spawn(element, binding);
	        EditorRuntime.updateTree.add(xif);
	    }
	    if (attributes['x-if-eval'] !== void 0) {
	        const binding = attributes['x-if-eval'];
	        const xif = attr_x_if_eval_1.XIfEval.Pool.spawn(element, binding);
	        EditorRuntime.updateTree.add(xif);
	    }
	    if (attributes['x-hidden'] !== void 0) {
	        element.setVisible(!attributes['x-hidden']);
	    }
	    if (attributes['x-visible'] !== void 0) {
	        if (attributes['x-visible'])
	            return;
	        attributes['class'] = attributes['class'] || "";
	        attributes['class'] = "invisible " + attributes['class'];
	    }
	    if (attributes['x-invisible'] !== void 0) {
	        if (!attributes['x-invisible'])
	            return;
	        attributes['class'] = attributes['class'] || "";
	        attributes['class'] = "invisible " + attributes['class'];
	    }
	    if (attributes['x-bind-class']) {
	        const attr = attributes['x-bind-class'];
	        const keys = Object.keys(attr);
	        for (let i = 0; i < keys.length; i++) {
	            const className = keys[i];
	            const binding = attr[className];
	            if (binding instanceof binding_1.EditorBinding) {
	                binding.setHost(element);
	                binding.onChange(function (newValue) {
	                    element.getDomNode().classList.toggle(className, !Boolean(newValue));
	                });
	            }
	        }
	    }
	    if (attributes['x-child-root']) {
	        context.setChildRoot(element);
	    }
	    if (attributes['x-bind-style']) {
	        const attr = attributes['x-bind-style'];
	        const keys = Object.keys(attr);
	        for (let i = 0; i < keys.length; i++) {
	            const styleName = keys[i];
	            const binding = attr[styleName];
	            if (binding instanceof binding_1.EditorBinding) {
	                binding.setHost(element);
	                binding.onChange(function (newValue) {
	                    element.getDomNode().style[styleName] = newValue;
	                });
	            }
	        }
	    }
	    if (attributes['onClick']) {
	        const fn = attributes["onClick"];
	        if (typeof fn === "function") {
	            element.addEventListener("click", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            }, true);
	        }
	    }
	    if (attributes['onRightClick']) {
	        const fn = attributes["onRightClick"];
	        if (typeof fn === "function") {
	            element.addEventListener("contextmenu", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	                e.preventDefault();
	            }, true);
	        }
	    }
	    if (attributes['onMouseDown']) {
	        const fn = attributes["onMouseDown"];
	        if (typeof fn === "function") {
	            element.addEventListener("mousedown", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes['onMouseUp']) {
	        const fn = attributes["onMouseUp"];
	        if (typeof fn === "function") {
	            element.addEventListener("mouseup", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes['onMouseMove']) {
	        const fn = attributes["onMouseMove"];
	        if (typeof fn === "function") {
	            element.addEventListener("mousemove", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes['onMouseEnter']) {
	        const fn = attributes["onMouseEnter"];
	        if (typeof fn === "function") {
	            element.addEventListener("mouseenter", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes['onMouseExit']) {
	        const fn = attributes["onMouseExit"];
	        if (typeof fn === "function") {
	            element.addEventListener("mouseleave", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onBlur"]) {
	        const fn = attributes["onBlur"];
	        if (typeof fn === "function") {
	            element.addEventListener("blur", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onFocus"]) {
	        const fn = attributes["onFocus"];
	        if (typeof fn === "function") {
	            element.addEventListener("focus", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onKeyDown"]) {
	        const fn = attributes["onKeyDown"];
	        if (typeof fn === "function") {
	            element.addEventListener("keydown", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onKeyUp"]) {
	        const fn = attributes["onKeyUp"];
	        if (typeof fn === "function") {
	            element.addEventListener("keyup", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onKeyPress"]) {
	        const fn = attributes["onKeyPress"];
	        if (typeof fn === "function") {
	            element.addEventListener("keypress", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	    if (attributes["onInput"]) {
	        const fn = attributes["onInput"];
	        if (typeof fn === "function") {
	            element.addEventListener("input", function (e) {
	                fn.call(context, e);
	                e.stopPropagation();
	            });
	        }
	    }
	}
	exports.IdAndEventsAttributes = IdAndEventsAttributes;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const binding_compiler_1 = __webpack_require__(10);
	const object_pool_1 = __webpack_require__(11);
	class XIf {
	    onSpawn(element, binding) {
	        this.element = element;
	        this.ctx = binding.ctx;
	        this.invert = binding.invert;
	        this.getterFn = binding_compiler_1.getGetter(binding.path.split('.'));
	    }
	    onDespawn() {
	        this.element = null;
	        this.ctx = null;
	        this.invert = false;
	    }
	    onUpdated() {
	        if (this.element.isRendered()) {
	            var value = this.getterFn(this.ctx);
	            if (this.invert)
	                value = !value;
	            this.element.setVisible(value); //todo this should be setEnabled() instead
	        }
	    }
	    onDestroyed() {
	        this.element = null;
	        this.getterFn = null;
	    }
	}
	XIf.Pool = new object_pool_1.ObjectPool2(XIf);
	exports.XIf = XIf;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const GetterCache = new Map();
	const SetterCache = new Map();
	function getGetter(path) {
	    const pathString = Array.isArray(path) ? path.join(".") : path;
	    const retn = GetterCache.get(pathString);
	    if (retn)
	        return retn;
	    const body = genCode(path);
	    const fn = new Function("ctx", body);
	    GetterCache.set(pathString, fn);
	    return fn;
	}
	exports.getGetter = getGetter;
	function getSetter(path) {
	    const pathString = Array.isArray(path) ? path.join(".") : path;
	    let retn = SetterCache.get(pathString);
	    if (retn)
	        return retn;
	    const body = genCode(path, true);
	    const fn = new Function("ctx", "val", body);
	    SetterCache.set(pathString, fn);
	    return fn;
	}
	exports.getSetter = getSetter;
	function genSimpleGetter(fieldName) {
	    return "return ctx." + fieldName;
	}
	exports.genSimpleGetter = genSimpleGetter;
	function genCode(groups, isSetter = false, varChar = 'a') {
	    let code = "";
	    if (!Array.isArray(groups)) {
	        if (isSetter) {
	            return `ctx.${groups} = val;`;
	        }
	        else {
	            return `return ctx.${groups}`;
	        }
	    }
	    if (groups.length === 1 && varChar === 'a') {
	        if (Array.isArray(groups[0])) {
	            if (isSetter) {
	                return `ctx.${groups[0][0]} = val;`;
	            }
	            else {
	                return `return ctx.${groups[0][0]}`;
	            }
	        }
	        else {
	            if (isSetter) {
	                return `ctx.${groups[0]} = val;`;
	            }
	            else {
	                return `return ctx.${groups[0]}`;
	            }
	        }
	    }
	    let nextVarChar = String.fromCharCode(varChar.charCodeAt(0) + 1);
	    code += `var ${varChar} = ctx.${groups[0]};\n`;
	    code += `if (!${varChar}) return null\n\n`;
	    for (let i = 1; i < groups.length; i++) {
	        if (i === groups.length - 1 && varChar === 'a') {
	            if (isSetter) {
	                code += `${varChar}.${groups[groups.length - 1]} = val;\n`;
	            }
	            else {
	                code += `return ${varChar}.${groups[groups.length - 1]};\n`;
	            }
	            break;
	        }
	        if (Array.isArray(groups[i])) {
	            code += "\n" + genCode(groups[i], isSetter, nextVarChar) + "\n";
	            code += `${varChar} = ${varChar}.${nextVarChar};\n`;
	            code += `if (!${varChar}) return null;\n`;
	        }
	        else {
	            code += `${varChar} = ${varChar}.${groups[i]};\n`;
	            code += `if (!${varChar}) return null;\n`;
	        }
	    }
	    return code;
	}
	exports.genCode = genCode;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class BaseObjectPool {
	    constructor(type, preload = 5) {
	        this.type = type;
	        this.list = [];
	        if (preload > 0) {
	            for (let i = 0; i < preload; i++) {
	                this.list.push(new this.type());
	            }
	        }
	    }
	    getItem() {
	        return this.list.length > 0 ? this.list.pop() : new this.type();
	    }
	    despawn(item) {
	        item.onDespawn();
	        this.list.push(item);
	    }
	}
	class ObjectPool extends BaseObjectPool {
	    spawn() {
	        const item = this.getItem();
	        item.onSpawn();
	        return item;
	    }
	}
	exports.ObjectPool = ObjectPool;
	class ObjectPool1 extends BaseObjectPool {
	    spawn(arg) {
	        const item = this.getItem();
	        item.onSpawn(arg);
	        return item;
	    }
	}
	exports.ObjectPool1 = ObjectPool1;
	class ObjectPool2 extends BaseObjectPool {
	    spawn(arg0, arg1) {
	        const item = this.getItem();
	        item.onSpawn(arg0, arg1);
	        return item;
	    }
	}
	exports.ObjectPool2 = ObjectPool2;
	class ObjectPool3 extends BaseObjectPool {
	    spawn(arg0, arg1, arg2) {
	        const item = this.getItem();
	        item.onSpawn(arg0, arg1, arg2);
	        return item;
	    }
	}
	exports.ObjectPool3 = ObjectPool3;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const object_pool_1 = __webpack_require__(11);
	class XIfEval {
	    constructor() {
	        this.element = null;
	        this.getterFn = null;
	    }
	    onUpdated() {
	        this.element.setVisible(this.getterFn());
	    }
	    onSpawn(element, getter) {
	        this.element = element;
	        this.getterFn = getter;
	    }
	    onDespawn() {
	        this.element = null;
	        this.getterFn = null;
	    }
	}
	XIfEval.Pool = new object_pool_1.ObjectPool2(XIfEval);
	exports.XIfEval = XIfEval;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const binding_compiler_1 = __webpack_require__(10);
	function CreateBinding(context, one, two, three, four) {
	    const path = Array.prototype.slice.call(arguments, 1);
	    if (context instanceof EditorBinding) {
	        return new EditorSubBinding(context, path);
	    }
	    return new EditorBinding(context, path);
	}
	exports.CreateBinding = CreateBinding;
	class EditorBinding {
	    constructor(context, path) {
	        this.element = null;
	        this.context = context;
	        this.getterFn = binding_compiler_1.getGetter(path);
	        this.setterFn = binding_compiler_1.getSetter(path);
	        this.value = void 0; //this.getterFn(this.context);
	        this.changeHandlers = [];
	    }
	    onUpdated() {
	        const value = this.getterFn(this.context);
	        if (value !== this.value) {
	            const oldValue = this.value;
	            this.value = value;
	            this.sendChanges(this.value, oldValue);
	        }
	    }
	    set(value) {
	        if (value === this.value)
	            return;
	        this.setterFn(this.context, value);
	        const oldValue = this.value;
	        this.value = value;
	        this.sendChanges(this.value, oldValue);
	    }
	    get() {
	        return this.value;
	    }
	    onChange(fn) {
	        this.changeHandlers.push(fn);
	        return this;
	    }
	    offChange(fn) {
	        this.changeHandlers.remove(fn);
	        return this;
	    }
	    setHost(host) {
	        if (this.element) {
	            EditorRuntime.updateTree.remove(this);
	        }
	        this.element = host;
	        if (this.element) {
	            EditorRuntime.updateTree.add(this);
	        }
	        return this;
	    }
	    destroy() {
	        this.context = null;
	        this.changeHandlers = null;
	        EditorRuntime.updateTree.remove(this);
	        this.getterFn = null;
	        this.setterFn = null;
	        this.value = null;
	        this.element = null;
	    }
	    sendChanges(newValue, oldValue) {
	        for (let i = 0; i < this.changeHandlers.length; i++) {
	            this.changeHandlers[i](newValue, oldValue);
	        }
	    }
	}
	exports.EditorBinding = EditorBinding;
	class EditorSubBinding extends EditorBinding {
	    set(value) {
	        if (value === this.value)
	            return;
	        this.setterFn(this.context.get(), value);
	        const oldValue = this.value;
	        this.value = value;
	        this.sendChanges(this.value, oldValue);
	    }
	    onUpdated() {
	        const value = this.getterFn(this.context.get());
	        if (value !== this.value) {
	            const oldValue = this.value;
	            this.value = value;
	            this.sendChanges(this.value, oldValue);
	        }
	    }
	    sendChanges(newValue, oldValue) {
	        super.sendChanges(newValue, oldValue);
	        const parentValue = this.context.get();
	        const parentContext = this.context;
	        parentContext.sendChanges(parentValue, parentValue);
	    }
	}
	exports.EditorSubBinding = EditorSubBinding;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_element_1 = __webpack_require__(15);
	class EditorTextElement extends editor_element_1.EditorElement {
	    constructor(content) {
	        super();
	        this.content = content;
	    }
	    getDomNode() {
	        return this.textNode;
	    }
	    addChild(child) {
	        throw new Error("Text Nodes cannot have children");
	    }
	    mount(mountPoint) {
	        this.textNode = this.textNode || this.createDomNode();
	        mountPoint.appendChild(this.textNode);
	    }
	    createDomNode() {
	        return document.createTextNode(this.content);
	    }
	    setText(text) {
	        this.content = text;
	        this.textNode.nodeValue = text;
	    }
	}
	exports.EditorTextElement = EditorTextElement;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const util_1 = __webpack_require__(16);
	const vector2_1 = __webpack_require__(17);
	var EditorElementFlags;
	(function (EditorElementFlags) {
	    EditorElementFlags[EditorElementFlags["Rendered"] = 2] = "Rendered";
	    EditorElementFlags[EditorElementFlags["Enabled"] = 4] = "Enabled";
	    EditorElementFlags[EditorElementFlags["Destroyed"] = 8] = "Destroyed";
	    EditorElementFlags[EditorElementFlags["Visible"] = 16] = "Visible";
	})(EditorElementFlags = exports.EditorElementFlags || (exports.EditorElementFlags = {}));
	const pendingEventMap = new WeakMap();
	const activeEventMap = new WeakMap();
	let idGenerator = 0;
	class EditorElement {
	    constructor() {
	        this.id = ++idGenerator;
	        this.children = [];
	        this.parent = null;
	        this.flags = EditorElementFlags.Visible | EditorElementFlags.Enabled;
	        this.childIdMap = null; //todo make this global map?
	        this.childRoot = null;
	        this.renderContext = null;
	        this.childRoot = this;
	    }
	    setChildIdAlias(id, element) {
	        this.childIdMap = this.childIdMap || {};
	        this.childIdMap[id] = element;
	    }
	    setVisible(isVisible) {
	        if (isVisible === this.isVisible()) {
	            return;
	        }
	        this.flags ^= EditorElementFlags.Visible;
	        if (this.htmlNode) {
	            this.htmlNode.classList.toggle("hidden", !isVisible);
	        }
	        // this.onVisibilityChanged(isVisible);
	    }
	    setPosition(x, y) {
	        const dom = this.getDomNode();
	        dom.style.left = x + "px";
	        dom.style.top = y + "px";
	    }
	    getClientBounds() {
	        return (this.htmlNode) ? this.htmlNode.getBoundingClientRect() : null;
	    }
	    addChild(child) {
	        return this.insertChild(child, this.children.length);
	    }
	    insertChild(child, index) {
	        if (!child)
	            return;
	        if (index < 0)
	            index = 0;
	        if (index > this.children.length)
	            index = this.children.length;
	        if (this.children[index] === child)
	            return;
	        if (this.isAncestor(child)) {
	            return false;
	        }
	        const oldParent = child.parent;
	        const current = this.children[index];
	        const moved = child.parent === this;
	        if (child.parent) {
	            child.parent.children.remove(child);
	        }
	        this.children.insert(child, index);
	        child.parent = this;
	        if (this.isMounted() && child.isMounted()) {
	            if (current) {
	                this.htmlNode.insertBefore(child.htmlNode, current.htmlNode);
	            }
	            else {
	                this.htmlNode.appendChild(child.htmlNode);
	            }
	        }
	        else if (!child.isRendered() && this.isRendered()) {
	            child.render(this.htmlNode);
	        }
	        else if (!child.isMounted() && this.isMounted()) {
	            child.mount(this.htmlNode);
	        }
	        if (!moved && oldParent && child.parent && child.isMounted()) {
	            child.onParentChanged(this, oldParent);
	        }
	        if (moved)
	            child.onMoved(index);
	        return true;
	    }
	    render(mountPoint) {
	        this.mount(mountPoint);
	        //todo get rid of onRerendered
	        util_1.traverse(this, function (element) {
	            if (element.isRendered()) {
	                element.onRerendered();
	            }
	            else {
	                element.flags |= EditorElementFlags.Rendered;
	                element.onRendered();
	            }
	        });
	    }
	    mount(mountPoint) {
	        this.htmlNode = this.htmlNode || this.createDomNode();
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].mount(this.htmlNode);
	        }
	        this.attachEvents();
	        mountPoint.appendChild(this.htmlNode);
	        this.onMounted();
	    }
	    attachEvents() {
	        const pendingEvents = pendingEventMap.get(this);
	        if (pendingEvents) {
	            const activeEvents = activeEventMap.get(this) || [];
	            for (let i = 0; i < pendingEvents.length; i++) {
	                const handler = pendingEvents[i];
	                activeEvents.push(handler);
	                this.addEventListener(handler.type, handler.fn, handler.bubble);
	            }
	            pendingEvents.length = 0;
	            pendingEventMap.set(this, null);
	            activeEventMap.set(this, activeEvents);
	        }
	    }
	    createDomNode() {
	        throw new Error("Not Implemented, use a subclass");
	    }
	    orphan() {
	        if (!this.isOrphaned()) {
	            this.parent.children.remove(this);
	            this.getDomNode().remove();
	            this.parent = null;
	        }
	    }
	    isOrphaned() {
	        return this.parent === null;
	    }
	    orphanChildren() {
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].getDomNode().remove();
	            this.children[i].parent = null;
	        }
	        this.children.length = 0;
	    }
	    clearChildren() {
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].destroy();
	        }
	        const node = this.getDomNode();
	        while (node.firstElementChild) {
	            node.firstElementChild.remove();
	        }
	    }
	    getChildrenByType(type) {
	        const retn = new Array();
	        for (let i = 0; i < this.children.length; i++) {
	            if (this.children[i] instanceof type) {
	                retn.push(this.children[i]);
	            }
	        }
	        return retn;
	    }
	    getChildByType(type) {
	        for (let i = 0; i < this.children.length; i++) {
	            if (this.children[i] instanceof type) {
	                return this.children[i];
	            }
	        }
	        return null;
	    }
	    getAncestorByType(type, allowSelf = false) {
	        if (allowSelf && this instanceof type)
	            return this; //why do I need a cast and why can't it be T?
	        let ptr = this.parent;
	        while (ptr) {
	            if (ptr instanceof type) {
	                return ptr;
	            }
	            ptr = ptr.parent;
	        }
	        return null;
	    }
	    getFirstOfTypeUpwards(type) {
	        if (this instanceof type)
	            return this;
	        return this.getAncestorByType(type);
	    }
	    getDomNode() {
	        return this.htmlNode;
	    }
	    getChildById(id) {
	        if (!this.childIdMap)
	            return null;
	        return this.childIdMap[id];
	    }
	    setChildRoot(element) {
	        //todo assert child root is a child
	        this.childRoot = element;
	        if (!this.childRoot)
	            this.childRoot = this;
	    }
	    getChildRoot() {
	        return this.childRoot;
	    }
	    getChildCount() {
	        return this.children.length;
	    }
	    hasXId(idName) {
	        const dom = this.getDomNode();
	        return dom.getAttribute("x-id") === idName;
	    }
	    isElementInHierarchy(element) {
	        const dom = this.getDomNode();
	        let ptr = element.parentNode;
	        while (ptr !== document.body) {
	            if (ptr === dom)
	                return true;
	            ptr = ptr.parentNode;
	        }
	        return false;
	    }
	    isAncestor(target) {
	        let ptr = this.parent;
	        while (ptr) {
	            if (ptr === target) {
	                return true;
	            }
	            ptr = ptr.parent;
	        }
	        return false;
	    }
	    isDescendant(target) {
	        return target.isAncestor(this);
	    }
	    getChildIndex(child) {
	        return this.children.indexOf(child);
	    }
	    //todo need to remove all event handlers
	    destroy() {
	        if (this.isDestroyed())
	            return;
	        this.flags |= EditorElementFlags.Destroyed;
	        //maybe have 'isDestroyPending' flag
	        //be careful with destroying the dom node since it is shared in a virtual tree
	        this.onDestroyed();
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].destroy();
	        }
	        if (this.parent) {
	            if (!this.parent.isDestroyed()) {
	                this.getDomNode().remove();
	                this.parent.children.remove(this);
	            }
	        }
	        this.renderContext = null;
	        this.parent = null;
	        this.childRoot = null;
	        this.childIdMap = null;
	        this.children = null;
	    }
	    pointToLocalSpace(point) {
	        const rect = this.htmlNode.getBoundingClientRect();
	        return new vector2_1.Vector2(point.x - rect.left, point.y - rect.top);
	    }
	    pointToWorldSpace(point) {
	        const rect = this.htmlNode.getBoundingClientRect();
	        return new vector2_1.Vector2(point.x + rect.left, point.y + rect.top);
	    }
	    isDestroyed() {
	        return (this.flags & EditorElementFlags.Destroyed) !== 0;
	    }
	    isMounted() {
	        return Boolean(this.htmlNode);
	    }
	    isRendered() {
	        return (this.flags & EditorElementFlags.Rendered) !== 0;
	    }
	    isVisible() {
	        return (this.flags & EditorElementFlags.Visible) !== 0;
	    }
	    addEventListener(evtName, fn, bubble = false) {
	        if (this.htmlNode) {
	            const evtList = activeEventMap.get(this) || [];
	            evtList.push({ type: evtName, fn: fn, bubble: bubble });
	            this.htmlNode.addEventListener(evtName, fn, false);
	            activeEventMap.set(this, evtList);
	        }
	        else {
	            const evtList = pendingEventMap.get(this) || [];
	            evtList.push({ type: evtName, fn, bubble });
	            pendingEventMap.set(this, evtList);
	        }
	    }
	    removeEventListener(evtName, fn) {
	        const evtList = pendingEventMap.get(this);
	        if (!evtList)
	            return;
	        for (let i = 0; i < evtList.length; i++) {
	            const evt = evtList[i];
	            if (evt.type === evtName && evt.fn === fn) {
	                if (this.htmlNode) {
	                    this.htmlNode.removeEventListener(evtName, fn);
	                }
	                evtList.removeAt(i);
	                return true;
	            }
	        }
	    }
	    createInitialStructure(children) {
	        return children;
	    }
	    onDestroyed() { }
	    onCreated() { }
	    onUpdated() { }
	    onRendered() { }
	    onRerendered() { }
	    onParentChanged(newParent, oldParent) { }
	    onMounted() { }
	    onDisabled() { }
	    onEnabled() { }
	    onMoved(index) { }
	}
	exports.EditorElement = EditorElement;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function setDefault(value, defaultValue) {
	    if (value === void 0 || typeof defaultValue !== typeof value) {
	        return defaultValue;
	    }
	}
	exports.setDefault = setDefault;
	function traverse(node, fn) {
	    if (node.children) {
	        for (let i = 0; i < node.children.length; i++) {
	            traverse(node.children[i], fn);
	        }
	    }
	    fn(node);
	}
	exports.traverse = traverse;
	function traverseRootFirst(node, fn) {
	    fn(node);
	    if (node.children) {
	        for (let i = 0; i < node.children.length; i++) {
	            traverse(node.children[i], fn);
	        }
	    }
	}
	exports.traverseRootFirst = traverseRootFirst;
	function traverseChildrenFirst(node, fn) {
	    if (node.children) {
	        for (let i = 0; i < node.children.length; i++) {
	            traverse(node.children[i], fn);
	        }
	    }
	    fn(node);
	}
	exports.traverseChildrenFirst = traverseChildrenFirst;
	function traverseChildren(node, fn) {
	    if (node.children) {
	        for (let i = 0; i < node.children.length; i++) {
	            traverse(node.children[i], fn);
	        }
	    }
	}
	exports.traverseChildren = traverseChildren;
	function clamp(value, min, max) {
	    if (value > max)
	        return max;
	    if (value < min)
	        return min;
	    return value;
	}
	exports.clamp = clamp;
	function clamp01(value) {
	    if (value > 1)
	        return 1;
	    if (value < 0)
	        return 0;
	    return value;
	}
	exports.clamp01 = clamp01;
	function titlize(input) {
	    return input.replace(/([A-Z])/g, ' $1') // insert a space before all caps
	        .replace(/^./, function (str) { return str.toUpperCase(); }); // uppercase the first character
	}
	exports.titlize = titlize;
	var STRING_DASHERIZE_REGEXP = (/([a-z\d])([A-Z])/g);
	function dasherize(str) {
	    str = str.replace(/_/g, '-');
	    return str.replace(STRING_DASHERIZE_REGEXP, '$1-$2').toLowerCase();
	}
	exports.dasherize = dasherize;
	function hitTestRect(x, y, w, h, point) {
	    return point.x >= x && x + w >= point.x && point.y >= y && y + h >= point.y;
	}
	exports.hitTestRect = hitTestRect;
	function distanceTestPoint(x, y, point, radius) {
	    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
	}
	exports.distanceTestPoint = distanceTestPoint;
	function hitTestLine(x1, y1, x2, y2, point, threshold = 1) {
	    return distanceSquaredToLineSegment(x1, y1, x2, y2, point.x, point.y) <= threshold * threshold;
	}
	exports.hitTestLine = hitTestLine;
	function randomPositiveInteger() {
	    return getRandomInt(0, Number.MAX_SAFE_INTEGER);
	}
	exports.randomPositiveInteger = randomPositiveInteger;
	function getRandomInt(min, max) {
	    return ~~(Math.random() * (max - min + 1)) + min;
	}
	exports.getRandomInt = getRandomInt;
	function distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py) {
	    var t; // t===0 at line pt 1 and t ===1 at line pt 2
	    if (!lineLengthSquared) {
	        // 0-length line segment. Any t will return same result
	        t = 0;
	    }
	    else {
	        t = ((px - lx1) * ldx + (py - ly1) * ldy) / lineLengthSquared;
	        if (t < 0)
	            t = 0;
	        else if (t > 1)
	            t = 1;
	    }
	    var lx = lx1 + t * ldx, ly = ly1 + t * ldy, dx = px - lx, dy = py - ly;
	    return dx * dx + dy * dy;
	}
	/**
	 * Calculate the square of the distance between a finite line segment and a point.
	 * @alias module:distance-to-line-segment.squared
	 * @param {number} lx1 - x-coordinate of line segment's first point
	 * @param {number} ly1 - y-coordinate of line segment's first point
	 * @param {number} lx2 - x-coordinate of the line segment's second point
	 * @param {number} ly2 - y-coordinate of the line segment's second point
	 * @param {number} px - x coordinate of point
	 * @param {number} py - y coordinate of point
	 */
	function distanceSquaredToLineSegment(lx1, ly1, lx2, ly2, px, py) {
	    var ldx = lx2 - lx1, ldy = ly2 - ly1, lineLengthSquared = ldx * ldx + ldy * ldy;
	    return distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py);
	}
	//used for rendering integer instead of float / double
	class Integer {
	}
	exports.Integer = Integer;
	class Select {
	}
	exports.Select = Select;
	function Select1(options) {
	}
	exports.Select1 = Select1;
	class EnumSelect {
	}
	exports.EnumSelect = EnumSelect;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	let Vector2 = Vector2_1 = class Vector2 {
	    constructor(x = 0, y = 0) {
	        this.x = x;
	        this.y = y;
	    }
	    scale(factor) {
	        this.x *= factor;
	        this.y *= factor;
	        return this;
	    }
	    scaleNew(factor) {
	        return new Vector2_1(this.x * factor, this.y * factor);
	    }
	    addScalar(scalar) {
	        this.x += scalar;
	        this.y += scalar;
	        return this;
	    }
	    addScalarNew(scalar) {
	        return new Vector2_1(this.x + scalar, this.y + scalar);
	    }
	    subScalar(scalar) {
	        this.x -= scalar;
	        this.y -= scalar;
	        return this;
	    }
	    divideScalar(scalar) {
	        if (scalar !== 0) {
	            this.x /= scalar;
	            this.y /= scalar;
	        }
	        else {
	            this.x = 0;
	            this.y = 0;
	        }
	        return this;
	    }
	    divideScalarNew(scalar) {
	        if (scalar !== 0) {
	            return new Vector2_1(this.x / scalar, this.y / scalar);
	        }
	        else {
	            return new Vector2_1();
	        }
	    }
	    subScalarNew(scalar) {
	        return new Vector2_1(this.x - scalar, this.y - scalar);
	    }
	    invert() {
	        this.x *= -1;
	        this.y *= -1;
	        return this;
	    }
	    invertNew() {
	        return new Vector2_1(this.x * -1, this.y * -1);
	    }
	    lookAt(other) {
	        return this;
	    }
	    clamp(length) {
	        const lengthSq = this.lengthSquared();
	        if (length * length > lengthSq) {
	            this.normalize();
	            this.scale(length);
	        }
	        return this;
	    }
	    dot(other) {
	        return this.x * other.x + this.y * other.y;
	    }
	    cross(other) {
	        return (this.x * other.y) - (this.y * other.x);
	    }
	    normalize() {
	        var length = this.length();
	        if (length === 0) {
	            this.x = 1;
	            this.y = 0;
	        }
	        else {
	            this.x /= length;
	            this.y /= length;
	        }
	        return this;
	    }
	    normalizeNew() {
	        const length = this.length();
	        const retn = new Vector2_1();
	        if (length === 0) {
	            retn.x = 1;
	            retn.y = 0;
	        }
	        else {
	            retn.x = this.x / length;
	            retn.y = this.y / length;
	        }
	        return this;
	    }
	    length() {
	        return Math.sqrt(this.lengthSquared());
	    }
	    lengthSquared() {
	        return this.x * this.x + this.y * this.y;
	    }
	    addVector(other) {
	        this.x += other.x;
	        this.y += other.y;
	        return this;
	    }
	    subVector(other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        return this;
	    }
	    addVectorNew(other) {
	        return new Vector2_1(this.x + other.x, this.y + other.y);
	    }
	    subVectorNew(other) {
	        return new Vector2_1(this.x - other.x, this.y - other.y);
	    }
	    horizontalAngle() {
	        return Math.atan2(this.y, this.x);
	    }
	    verticalAngle() {
	        //noinspection JSSuspiciousNameCombination
	        return Math.atan2(this.x, this.y);
	    }
	    rotate(radians) {
	        const nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
	        const ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
	        this.x = nx;
	        this.y = ny;
	        return this;
	    }
	    rotateNew(radians) {
	        const nx = (this.x * Math.cos(radians)) - (this.y * Math.sin(radians));
	        const ny = (this.x * Math.sin(radians)) + (this.y * Math.cos(radians));
	        return new Vector2_1(nx, ny);
	    }
	    project(other) {
	        const e = ((this.x * other.x) + (this.y * other.y)) / ((other.x * other.x) + (other.y * other.y));
	        this.x = e * other.x;
	        this.y = e * other.y;
	        return this;
	    }
	    projectNew(other) {
	        const e = ((this.x * other.x) + (this.y * other.y)) / ((other.x * other.x) + (other.y * other.y));
	        return new Vector2_1(e * other.x, e * other.y);
	    }
	    distanceTo(other) {
	        const dx = this.x - other.x;
	        const dy = this.y - other.y;
	        return dx * dx + dy * dy;
	    }
	    clone() {
	        return new Vector2_1(this.x, this.y);
	    }
	    isZero() {
	        return this.x === 0 && this.y === 0;
	    }
	    isEqual(other) {
	        return this.x === other.x && this.y === other.y;
	    }
	    toString() {
	        return `{x: ${this.x}, y: ${this.y}}`;
	    }
	};
	Vector2 = Vector2_1 = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], Vector2);
	exports.Vector2 = Vector2;
	var Vector2_1;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.classMap = new Map();
	function serializeClass(target) {
	    exports.classMap.set(target.name, target);
	}
	exports.serializeClass = serializeClass;
	function setSerializer(typeName, serializer) {
	}
	setSerializer("Map", function (target) {
	    target.forEach(function (value, key) {
	        //return {key: Serialize(key), value: Serialize(value)}
	    });
	});
	function serialize() {
	}
	function Serialize(target) {
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_element_1 = __webpack_require__(15);
	const editor_text_element_1 = __webpack_require__(14);
	const util_1 = __webpack_require__(16);
	exports.InputEventAnnotationMap = new Map();
	class EditorHTMLElement extends editor_element_1.EditorElement {
	    constructor(attrs, tagName = "div") {
	        super();
	        this.element = this; //this is for the updateTree -- but I don't like it
	        this.attrs = attrs || {};
	        this.tagName = tagName;
	        const eventAnnotations = exports.InputEventAnnotationMap.get(this.constructor.prototype);
	        if (eventAnnotations) {
	            for (let i = 0; i < eventAnnotations.length; i++) {
	                const annotation = eventAnnotations[i];
	                this.addEventListener(annotation.type, (e) => {
	                    this[annotation.methodName](e);
	                    e.stopPropagation();
	                    e.preventDefault();
	                });
	            }
	        }
	        // todo -- handle events better, right now we never unsubscribe on destroy
	        // todo -- better to handle events on a per instance basis
	        // if (this.__runtime_events__) {
	        //     this.__runtime_events__.forEach((value : any, key : any) => {
	        //         EditorRuntime.on(value, this);
	        //     });
	        // }
	    }
	    getDomData() {
	        if (this.constructor.name === "EditorHTMLElement") {
	            return { tagName: this.tagName };
	        }
	        else {
	            return {
	                tagName: this.tagName,
	                classList: util_1.dasherize(this.constructor.name)
	            };
	        }
	    }
	    hasClass(className) {
	        return this.htmlNode.classList.contains(className);
	    }
	    addClass(className) {
	        this.htmlNode.classList.add(className);
	    }
	    removeClass(className) {
	        this.htmlNode.classList.remove(className);
	    }
	    toggleClass(className, force = false) {
	        this.htmlNode.classList.toggle(className, force);
	    }
	    setStyle(styles) {
	        const keys = Object.keys(styles);
	        for (let i = 0; i < keys.length; i++) {
	            const key = keys[i];
	            this.htmlNode.style[key] = styles[key];
	        }
	    }
	    setText(text) {
	        const textChild = this.children[0];
	        if (!textChild) {
	            this.addChild(new editor_text_element_1.EditorTextElement(text));
	        }
	        else if (textChild instanceof editor_text_element_1.EditorTextElement) {
	            textChild.setText(text);
	        }
	        else {
	            // no idea what to do here
	        }
	    }
	    getText() {
	        return this.htmlNode.innerText;
	    }
	    hasVisibleParentHTML() {
	        let ptr = this.parent;
	        while (ptr) {
	            if (ptr instanceof EditorHTMLElement) {
	                return ptr.isVisible();
	            }
	            ptr = ptr.parent;
	        }
	        return false;
	    }
	    createDomNode() {
	        if (this.htmlNode)
	            return this.htmlNode;
	        const domData = this.getDomData();
	        this.tagName = domData.tagName || "div";
	        this.htmlNode = document.createElement(domData.tagName);
	        this.htmlNode.__editorElement = this;
	        if (domData.classList) {
	            let className = domData.classList;
	            const attrClass = this.attrs.class;
	            if (attrClass) {
	                className += " " + attrClass;
	            }
	            this.htmlNode.className = className;
	        }
	        else if (this.attrs.class) {
	            this.htmlNode.className = this.attrs.class;
	        }
	        if (domData && domData.style) {
	            const attrStyle = this.attrs.style || "";
	            this.htmlNode.setAttribute("style", domData.style + ";" + attrStyle);
	        }
	        else if (this.attrs.style) {
	            this.htmlNode.setAttribute("style", this.attrs.style);
	        }
	        const attrs = domData.attributes;
	        if (attrs) {
	            for (let a in attrs) {
	                if (a[0] === "x" && a[1] === "-")
	                    continue;
	                if (a.indexOf("on") === 0)
	                    continue;
	                this.htmlNode.setAttribute(a, attrs[a]);
	            }
	        }
	        for (let a in this.attrs) {
	            if (typeof this.attrs[a] !== "string")
	                continue;
	            if (a.indexOf("x-") === 0)
	                continue;
	            if (a.indexOf("on") === 0)
	                continue;
	            if (a === "style" || a === "class")
	                continue;
	            this.htmlNode.setAttribute(a, this.attrs[a]);
	        }
	        if (!this.isVisible()) {
	            this.htmlNode.classList.add("hidden");
	        }
	        return this.htmlNode;
	    }
	    getChildBySelector(selector, type = null) {
	        const node = this.htmlNode.querySelector(":scope " + selector);
	        if (node && node.__editorElement) {
	            return node.__editorElement;
	        }
	    }
	    getChildrenBySelector(selector) {
	        const retn = [];
	        const nodes = this.htmlNode.querySelectorAll(":scope " + selector);
	        for (let i = 0; i < nodes.length; i++) {
	            const editorElement = nodes[i].__editorElement;
	            if (editorElement) {
	                retn.push(editorElement);
	            }
	        }
	        return retn;
	    }
	    getDescendantsBySelector(selector) {
	        const retn = [];
	        const nodes = this.htmlNode.querySelectorAll(selector);
	        for (let i = 0; i < nodes.length; i++) {
	            const editorElement = nodes[i].__editorElement;
	            if (editorElement) {
	                retn.push(editorElement);
	            }
	        }
	        return retn;
	    }
	}
	exports.EditorHTMLElement = EditorHTMLElement;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const contextStack = new Array();
	exports.RenderContextStack = {
	    peek() {
	        return contextStack[contextStack.length - 1];
	    },
	    push(ctx) {
	        contextStack.push(ctx);
	    },
	    pop() {
	        return contextStack.pop();
	    }
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class WindowResized extends runtime_event_1.RuntimeEvent {
	}
	exports.WindowResized = WindowResized;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementCreated extends runtime_event_1.RuntimeEvent {
	    onAppElementCreated(appElement) { }
	}
	exports.AppElementCreated = AppElementCreated;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_element_1 = __webpack_require__(15);
	const vector2_1 = __webpack_require__(17);
	const browser_input_1 = __webpack_require__(24);
	//in the editor we use real dom input events, unlike in the runtime
	//the problem is that when we do a sync from dom -> runtime,
	//local (real dom) event handlers fire but the input update hasn't been
	//sent to the runtime yet. To combat this, EditorInput just extends
	//BrowserInput. This *shouldn't* be a problem when in run mode
	//because events are't stemming from the dom in that environment
	class EditorInput extends browser_input_1.BrowserInput {
	    isMouseInEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return ((this.x > rect.left && this.x < rect.left + rect.width) &&
	            (this.y > rect.top && this.y < rect.top + rect.height));
	    }
	    getMouseRelativeToAppRootDom() {
	        return this.getMouseRelativeToDom(EditorRuntime.getAppRootElementDomNode());
	    }
	    getMouseRelativeToDom(domElement) {
	        const rect = domElement.getBoundingClientRect();
	        return new vector2_1.Vector2(this.x - rect.left, this.y - rect.top);
	    }
	    getMouseRelativeToEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return new vector2_1.Vector2(this.x - rect.left, this.y - rect.top);
	    }
	    getMouseDownRelativeToEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return new vector2_1.Vector2(this.mouseDownPosition.x - rect.left, this.mouseDownPosition.y - rect.top);
	    }
	}
	exports.EditorInput = EditorInput;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const input_1 = __webpack_require__(25);
	class BrowserInput extends input_1.Input {
	    constructor(target = document.body) {
	        super();
	        target.addEventListener("mousemove", (evt) => {
	            this.x = evt.pageX;
	            this.y = evt.pageY;
	        }, true);
	        target.addEventListener("mousedown", (evt) => {
	            this.x = evt.pageX;
	            this.y = evt.pageY;
	            this.mouseButtonState = evt.buttons;
	            this.mouseDownPosition.x = this.x;
	            this.mouseDownPosition.y = this.y;
	        }, true);
	        target.addEventListener("mouseup", (evt) => {
	            this.x = evt.pageX;
	            this.y = evt.pageY;
	            this.mouseButtonState = evt.buttons;
	        }, true);
	        target.addEventListener("mousewheel", (evt) => {
	            this.mouseWheelDeltaX = input_1.Input.normalizeWheelValue(evt.deltaX);
	            this.mouseWheelDeltaY = input_1.Input.normalizeWheelValue(evt.deltaY);
	        }, true);
	        //todo make this get focus somehow
	        target.addEventListener("keydown", (evt) => {
	            this.keyMapCurrent[evt.keyCode] = true;
	        }, true);
	        target.addEventListener("keyup", (evt) => {
	            this.keyMapCurrent[evt.keyCode] = false;
	        }, true);
	    }
	}
	exports.BrowserInput = BrowserInput;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const e_mouse_state_1 = __webpack_require__(26);
	class Input {
	    constructor() {
	        this.x = 0;
	        this.y = 0;
	        this.lastX = 0;
	        this.lastY = 0;
	        this.lastMouseButtonState = 0;
	        this.mouseButtonState = 0;
	        this.keyMapCurrent = new Array(222);
	        this.keyMapPrevious = new Array(222);
	        this.mouseDownPosition = new vector2_1.Vector2(-1, -1);
	        this.mouseWheelDeltaX = 0;
	        this.mouseWheelDeltaY = 0;
	    }
	    update() {
	        this.lastX = this.x;
	        this.lastY = this.y;
	        this.lastMouseButtonState = this.mouseButtonState;
	        this.mouseWheelDeltaX = 0;
	        this.mouseWheelDeltaY = 0;
	        for (let i = 8; i < 222; i++) {
	            this.keyMapPrevious[i] = this.keyMapCurrent[i];
	        }
	    }
	    wasMouseDown() {
	        return (this.lastMouseButtonState & e_mouse_state_1.MouseButtonState.AnyButton) !== 0;
	    }
	    isMouseDown() {
	        return (this.mouseButtonState & e_mouse_state_1.MouseButtonState.AnyButton) !== 0;
	    }
	    isMouseUp() {
	        return (this.mouseButtonState & e_mouse_state_1.MouseButtonState.AnyButton) === 0;
	    }
	    isMouseDownThisFrame() {
	        return !this.wasMouseButtonDown(e_mouse_state_1.MouseButtonState.AnyButton) && this.isMouseButtonDown(e_mouse_state_1.MouseButtonState.AnyButton);
	    }
	    isMouseUpThisFrame() {
	        return !this.wasMouseButtonUp(e_mouse_state_1.MouseButtonState.AnyButton) && this.isMouseButtonUp(e_mouse_state_1.MouseButtonState.AnyButton);
	    }
	    isMouseButtonDownThisFrame(button) {
	        return !this.wasMouseButtonDown(button) && this.isMouseButtonDown(button);
	    }
	    isMouseButtonUpThisFrame(button) {
	        return this.wasMouseButtonUp(button) && !this.isMouseButtonUp(button);
	    }
	    isMouseButtonDown(button) {
	        return (this.mouseButtonState & button) !== 0;
	    }
	    isMouseButtonUp(button) {
	        return (this.mouseButtonState & button) === 0;
	    }
	    wasMouseButtonDown(button) {
	        return (this.lastMouseButtonState & button) !== 0;
	    }
	    wasMouseButtonUp(button) {
	        return (this.lastMouseButtonState & button) === 0;
	    }
	    isKeyDown(key) {
	        return this.keyMapCurrent[key];
	    }
	    isKeyUp(key) {
	        return !this.keyMapCurrent[key];
	    }
	    isKeyDownThisFrame(key) {
	        return !this.keyMapPrevious[key] && this.keyMapCurrent[key];
	    }
	    isKeyUpThisFrame(key) {
	        return this.keyMapPrevious[key] && !this.keyMapCurrent[key];
	    }
	    getMouseDelta(cache) {
	        if (cache) {
	            cache.x = this.x - this.lastX;
	            cache.y = this.y - this.lastY;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.x - this.lastX, this.y - this.lastY);
	    }
	    getMouseDownDelta(cache) {
	        if (cache) {
	            cache.x = this.x - this.mouseDownPosition.x;
	            cache.y = this.y - this.mouseDownPosition.y;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.x - this.mouseDownPosition.x, this.y - this.mouseDownPosition.y);
	    }
	    getMouseWheelDelta(cache) {
	        if (cache) {
	            cache.x = this.mouseWheelDeltaX;
	            cache.y = this.mouseWheelDeltaY;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.mouseWheelDeltaX, this.mouseWheelDeltaY);
	    }
	    getMousePosition(cache) {
	        if (cache) {
	            cache.x = this.x;
	            cache.y = this.y;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.x, this.y);
	    }
	    getMouseDownPosition(cache) {
	        if (cache) {
	            cache.x = this.mouseDownPosition.x;
	            cache.y = this.mouseDownPosition.y;
	            return cache;
	        }
	        return this.mouseDownPosition.clone();
	    }
	    isMouseInAppElement(element) {
	        return element.containsPoint(new vector2_1.Vector2(this.x, this.y));
	    }
	    getMouseRelative(element, cache) {
	        const rect = element.rect;
	        if (cache) {
	            cache.x = this.x - rect.x;
	            cache.y = this.y - rect.y;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.x - rect.x, this.y - rect.y);
	    }
	    getMouseDownRelative(element, cache) {
	        const rect = element.rect;
	        if (cache) {
	            cache.x = this.mouseDownPosition.x - rect.x;
	            cache.y = this.mouseDownPosition.y - rect.y;
	            return cache;
	        }
	        return new vector2_1.Vector2(this.mouseDownPosition.x - rect.x, this.mouseDownPosition.y - rect.y);
	    }
	    deserialize(data) {
	        this.x = data.x;
	        this.y = data.y;
	        this.lastX = data.lastX;
	        this.lastY = data.lastY;
	        this.lastMouseButtonState = data.lastMouseButtonState;
	        this.mouseButtonState = data.mouseButtonState;
	        this.mouseDownPosition.x = data.mouseDownPositionX;
	        this.mouseDownPosition.y = data.mouseDownPositionY;
	        this.mouseWheelDeltaX = data.mouseWheelDeltaX;
	        this.mouseWheelDeltaY = data.mouseWheelDeltaY;
	        //todo - keyboard input
	    }
	    serialize() {
	        return {
	            x: this.x,
	            y: this.y,
	            lastX: this.lastX,
	            lastY: this.lastY,
	            lastMouseButtonState: this.lastMouseButtonState,
	            mouseButtonState: this.mouseButtonState,
	            mouseDownPositionX: this.mouseDownPosition.x,
	            mouseDownPositionY: this.mouseDownPosition.y,
	            mouseWheelDeltaX: this.mouseWheelDeltaX,
	            mouseWheelDeltaY: this.mouseWheelDeltaY
	        };
	        // for(let i = 8; i < 222; i++) {
	        //     input.keyMapPrevious[i] = this.keyMapPrevious[i];
	        //     input.keyMapCurrent[i] = this.keyMapCurrent[i];
	        // }
	    }
	    static normalizeWheelValue(value) {
	        if (value === 0)
	            return 0;
	        if (value > 0)
	            return 1;
	        return -1;
	    }
	}
	exports.Input = Input;


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var MouseButtonState;
	(function (MouseButtonState) {
	    MouseButtonState[MouseButtonState["None"] = 0] = "None";
	    MouseButtonState[MouseButtonState["Left"] = 1] = "Left";
	    MouseButtonState[MouseButtonState["Right"] = 2] = "Right";
	    MouseButtonState[MouseButtonState["Middle"] = 4] = "Middle";
	    MouseButtonState[MouseButtonState["AnyButton"] = 7] = "AnyButton";
	    MouseButtonState[MouseButtonState["LeftOrRight"] = 3] = "LeftOrRight";
	})(MouseButtonState = exports.MouseButtonState || (exports.MouseButtonState = {}));


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ShadowTree {
	    constructor(nodeConstructor) {
	        this.nodeConstructor = nodeConstructor;
	        this.nodeMap = new Map();
	        this.rootNodes = [];
	    }
	    traverse() {
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            if (this.rootNodes[i].traverse()) {
	                this.rootNodes.removeAt(i);
	            }
	        }
	    }
	    add(item) {
	        let currentNode = this.nodeMap.get(item.element);
	        if (currentNode) {
	            currentNode.items.push(item);
	            return;
	        }
	        currentNode = new this.nodeConstructor(item);
	        this.insert(currentNode);
	    }
	    remove(item) {
	        let node = this.nodeMap.get(item.element);
	        if (!node)
	            return;
	        this.nodeMap.delete(item.element);
	        const rootIdx = this.rootNodes.indexOf(node);
	        if (rootIdx !== -1) {
	            this.rootNodes.removeAt(rootIdx);
	            for (let i = 0; i < node.children.length; i++) {
	                this.rootNodes.push(node.children[i]);
	            }
	            return;
	        }
	        const parentNode = this.nodeMap.get(item.element.parent);
	        if (!parentNode)
	            return;
	        const nodeIdx = parentNode.children.indexOf(node);
	        if (nodeIdx !== -1) {
	            parentNode.children.removeAt(nodeIdx);
	        }
	        for (let i = 0; i < node.children.length; i++) {
	            parentNode.children.push(node.children[i]);
	        }
	    }
	    insert(treeNode) {
	        this.nodeMap.set(treeNode.element, treeNode);
	        const parentTreeNode = this.findParent(treeNode);
	        if (!parentTreeNode)
	            return this.insertAtRoot(treeNode);
	        for (let i = 0; i < parentTreeNode.children.length; i++) {
	            const childNode = parentTreeNode.children[i];
	            if (ShadowTree.isDescendant(childNode.element, treeNode.element)) {
	                treeNode.children.push(childNode);
	                parentTreeNode.children.splice(i--, 1);
	            }
	        }
	        parentTreeNode.children.push(treeNode);
	    }
	    insertAtRoot(treeNode) {
	        //if any root nodes should be children of this node, remove from root and push to new node
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            const node = this.rootNodes[i];
	            if (ShadowTree.isDescendant(node.element, treeNode.element)) {
	                treeNode.children.push(node);
	                this.rootNodes.removeAt(i);
	            }
	        }
	        this.rootNodes.push(treeNode);
	    }
	    static isDescendant(possibleChild, parent) {
	        if (possibleChild.parent === parent)
	            return true;
	        let ptr = possibleChild.parent;
	        while (ptr) {
	            if (ptr.parent === parent)
	                return true;
	            ptr = ptr.parent;
	        }
	        return false;
	    }
	    findParent(treeNode) {
	        let ptr = treeNode.element.parent;
	        while (ptr) {
	            const node = this.nodeMap.get(ptr);
	            if (node)
	                return node;
	            ptr = ptr.parent;
	        }
	        return null;
	    }
	}
	exports.ShadowTree = ShadowTree;
	class ShadowTreeNode {
	    constructor(updater) {
	        this.element = updater.element;
	        this.children = [];
	        this.items = [updater];
	    }
	}
	exports.ShadowTreeNode = ShadowTreeNode;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const input_1 = __webpack_require__(25);
	const app_element_1 = __webpack_require__(29);
	const runtime_base_1 = __webpack_require__(33);
	const evt_app_element_parent_changed_1 = __webpack_require__(35);
	const e_command_type_1 = __webpack_require__(32);
	const evt_app_element_index_changed_1 = __webpack_require__(36);
	class RuntimeImpl extends runtime_base_1.RuntimeBase {
	    constructor() {
	        super();
	        this.input = new input_1.Input();
	        this.rootElementCandidates = [];
	        this.pendingComponents = [];
	        this.appElementRegistry = {};
	        this.commandQueue = [];
	        this.layoutQueue = [];
	        self.onmessage = (message) => {
	            this.onMessage(message);
	        };
	    }
	    getAppElementById(id) {
	        return this.appElementRegistry[id];
	    }
	    postMessage(data) {
	        self.postMessage(data, void 0);
	    }
	    queueLayout(layoutComponent) {
	        const idx = this.layoutQueue.indexOf(layoutComponent);
	        //todo this should be sorted top to bottom, use a shadow/skip tree
	        if (!this.layoutQueue.contains(layoutComponent)) {
	            this.layoutQueue.push(layoutComponent);
	        }
	    }
	    getScene() {
	        return this.scene;
	    }
	    getAppElementAtPoint(point) {
	        const childCount = app_element_1.AppElement.Root.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const hit = this.appElementAtPointStep(app_element_1.AppElement.Root.getChildAt(i), point);
	            if (hit) {
	                return hit;
	            }
	        }
	        if (app_element_1.AppElement.Root.containsPoint(point))
	            return app_element_1.AppElement.Root;
	        return null;
	    }
	    //todo this could be more optimized
	    //todo this doesn't handle z-ordering at all
	    //todo replace with range tree of 4d points http://stackoverflow.com/questions/17651215/storing-rectangles-circles-triangles-in-a-kd-tree
	    appElementAtPointStep(test, point) {
	        const childCount = test.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const hit = this.appElementAtPointStep(test.getChildAt(i), point);
	            if (hit) {
	                return hit;
	            }
	        }
	        return test;
	    }
	    addElement(appElement) {
	        this.rootElementCandidates.push(appElement);
	        //todo remove this when destroying app element
	        this.appElementRegistry[appElement.id] = appElement;
	    }
	    addComponent(component) {
	        this.pendingComponents.push(component);
	    }
	    //todo -- internalize
	    setParent(appElement, newParent, oldParent) {
	        const storage = new Array();
	        if (oldParent) {
	            oldParent.getAllComponents(storage);
	            for (let i = 0; i < storage.length; i++) {
	                storage[i].onChildRemoved(appElement);
	            }
	            storage.length = 0;
	        }
	        if (newParent) {
	            newParent.getAllComponents(storage);
	            for (let i = 0; i < storage.length; i++) {
	                storage[i].onChildAdded(appElement);
	            }
	        }
	        this.emit(evt_app_element_parent_changed_1.AppElementParentChanged, appElement, newParent, oldParent);
	        this.sendCommand(e_command_type_1.CommandType.SetParent, { id: appElement.id, parentId: newParent.id });
	    }
	    //todo -- internalize
	    setSiblingIndex(appElement, index, oldIndex) {
	        this.emit(evt_app_element_index_changed_1.AppElementIndexChanged, appElement, index, oldIndex);
	        this.sendCommand(e_command_type_1.CommandType.SetSiblingIndex, { id: appElement.id, index });
	    }
	    destroyElement(appElement) {
	        if (appElement.isDestroyed())
	            return;
	        appElement.destroy();
	        // this.emit(AppElementDestroyed, appElement);
	    }
	    update(delta) {
	        // for(let i = 0; i < this.layoutQueue.length; i++) {
	        //     this.layoutQueue[i].doLayout();
	        // }
	    }
	    getInput() {
	        return this.input;
	    }
	}
	exports.RuntimeImpl = RuntimeImpl;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const rectangle_1 = __webpack_require__(30);
	const vector2_1 = __webpack_require__(17);
	const e_lifecycle_flags_1 = __webpack_require__(31);
	const e_command_type_1 = __webpack_require__(32);
	const util_1 = __webpack_require__(16);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	let idGenerator = 0;
	var Space;
	(function (Space) {
	    Space[Space["Local"] = 0] = "Local";
	    Space[Space["World"] = 1] = "World";
	})(Space = exports.Space || (exports.Space = {}));
	let AppElement = AppElement_1 = class AppElement {
	    constructor(name, parent = null) {
	        this.id = idGenerator++;
	        this.name = name || "App Element";
	        this.lifeCycleFlags = 0;
	        this.parent = parent || AppElement_1.Root;
	        this.children = [];
	        this.components = [];
	        this.localPosition = new vector2_1.Vector2();
	        this.parentPosition = (this.parent) ? this.parent.getPosition() : new vector2_1.Vector2();
	        if (this.parent) {
	            this.parent.children.push(this);
	        }
	        this.width = 0;
	        this.height = 0;
	        this.rotation = 0;
	        this.scale = new vector2_1.Vector2(1, 1);
	        //todo don't allow components to be constructed outside of addComponent or this constructor
	        Runtime.addElement(this);
	    }
	    setScale(scale) {
	        this.scale.x = scale.x;
	        this.scale.y = scale.y;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    getScale() {
	        return this.scale.clone();
	    }
	    getWidth() {
	        return this.width;
	    }
	    setWidth(width) {
	        this.width = width;
	        //todo get parent layout component and invoke layout
	        //todo get layout component and invoke layout
	        //todo use anchor settings
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    getHeight() {
	        return this.height;
	    }
	    setHeight(height) {
	        this.height = height;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    setDimensions(widthOrDimension, height = 0) {
	        const dimension = widthOrDimension;
	        if (typeof widthOrDimension === "object") {
	            if (dimension.width !== void 0) {
	                this.width = dimension.width;
	                this.height = dimension.height;
	            }
	        }
	        else {
	            this.width = widthOrDimension;
	            this.height = height;
	        }
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    getRotation() {
	        return this.rotation;
	    }
	    setRotation(value) {
	        this.rotation = value;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    setPosition(position, relativeTo = Space.World) {
	        this.setPositionValues(position.x, position.y, relativeTo);
	    }
	    setPositionValues(x, y, relativeTo = Space.World) {
	        if (relativeTo === Space.Local) {
	            this.localPosition.x = x;
	            this.localPosition.y = y;
	        }
	        else {
	            this.localPosition.x = x - this.parentPosition.x;
	            this.localPosition.y = y - this.parentPosition.y;
	        }
	        Runtime.sendCommand(e_command_type_1.CommandType.SetPosition, this.id);
	        const worldX = this.localPosition.x + this.parentPosition.x;
	        const worldY = this.localPosition.y + this.parentPosition.y;
	        for (let i = 0; i < this.children.length; i++) {
	            const position = this.children[i].parentPosition;
	            position.x = worldX;
	            position.y = worldY;
	        }
	    }
	    getLocalPosition() {
	        return this.localPosition.clone();
	    }
	    getPosition(positionCache) {
	        if (positionCache) {
	            positionCache.x = this.parentPosition.x + this.localPosition.x;
	            positionCache.y = this.parentPosition.y + this.localPosition.y;
	            return positionCache;
	        }
	        return this.localPosition.addVectorNew(this.parentPosition);
	    }
	    getBoundingBox() {
	        //todo axis aligned? handle rotation and scale
	        const p = this.getPosition();
	        return new rectangle_1.Rectangle(p.x, p.y, this.width, this.height);
	    }
	    setActive(isActive) {
	        if (this.isEnabled() === isActive)
	            return;
	        this.lifeCycleFlags ^= e_lifecycle_flags_1.LifeCycleFlag.Enabled;
	        if (isActive) {
	            //on enable
	        }
	        else {
	            //on disable
	        }
	    }
	    enable() {
	        //Runtime.enable(this);
	    }
	    setParent(parent, keepPosition = true) {
	        if (parent && parent === this.parent)
	            return;
	        parent = parent || AppElement_1.Root;
	        const oldParent = this.parent;
	        let currentPosition = this.getPosition();
	        this.parent = parent;
	        //todo ancestor check
	        if (oldParent) {
	            oldParent.children.remove(this);
	        }
	        if (parent) {
	            this.parent.children.push(this);
	            const p = this.parent.getPosition();
	            this.parentPosition.x = p.x;
	            this.parentPosition.y = p.y;
	        }
	        else {
	            this.parentPosition.x = 0;
	            this.parentPosition.y = 0;
	        }
	        if (keepPosition) {
	            this.setPosition(currentPosition);
	        }
	        Runtime.setParent(this, parent, oldParent);
	    }
	    setSiblingIndex(index) {
	        const parent = this.parent;
	        if (!parent)
	            return false;
	        const children = this.parent.children;
	        const currentIndex = children.indexOf(this);
	        if (index === currentIndex || currentIndex === -1) {
	            return false;
	        }
	        index = util_1.clamp(index, 0, children.length - 1);
	        children.remove(this);
	        children.insert(this, index);
	        Runtime.setSiblingIndex(this, index, currentIndex);
	        return true;
	    }
	    getParent() {
	        return this.parent;
	    }
	    getChildAt(index) {
	        return this.children[index];
	    }
	    getChildCount() {
	        return this.children.length;
	    }
	    removeChild(child) {
	        if (this.children.remove(child)) {
	            child.setParent(null);
	        }
	    }
	    getDepth() {
	        if (this === AppElement_1.Root)
	            return 0;
	        let ptr = this.parent;
	        let depth = 1;
	        while (ptr !== AppElement_1.Root) {
	            depth++;
	            ptr = ptr.parent;
	        }
	        return depth;
	    }
	    //todo component lifecycle
	    addComponent(componentType) {
	        const component = new componentType(); //cast to avoid read-only access
	        component.appElement = this;
	        this.components.push(component);
	        Runtime.addComponent(component);
	        return component;
	    }
	    getAllComponents(storage) {
	        const retn = storage || new Array();
	        for (let i = 0; i < this.components.length; i++) {
	            retn.push(this.components[i]);
	        }
	        return retn;
	    }
	    getComponent(type) {
	        for (let i = 0; i < this.components.length; i++) {
	            if (this.components[i] instanceof type) {
	                return this.components[i]; //why do I need the cast?
	            }
	        }
	        return null;
	    }
	    //Returns all components of Type type in the GameObject
	    getComponents(type, storage) {
	        const retn = storage || new Array();
	        for (let i = 0; i < this.components.length; i++) {
	            if (this.components[i] instanceof type) {
	                retn.push(this.components[i]);
	            }
	        }
	        return retn;
	    }
	    getComponentInChildren(type) {
	        const cmp = this.getComponent(type);
	        if (cmp)
	            return cmp;
	        const childCount = this.children.length;
	        for (let i = 0; i < childCount; i++) {
	            const child = this.children[i];
	            const cmp = child.getComponent(type);
	            if (cmp)
	                return cmp;
	        }
	        return null;
	    }
	    //Returns all components of Type in the AppElement in it's direct children
	    getComponentsInChildren(type, storage) {
	        const retn = this.getComponents(type, storage);
	        const childCount = this.children.length;
	        for (let i = 0; i < childCount; i++) {
	            const child = this.children[i];
	            child.getComponents(type, retn);
	        }
	        return retn;
	    }
	    getComponentsInDescendants(type, storage) {
	        const retn = this.getComponents(type, storage);
	        const childCount = this.children.length;
	        for (let i = 0; i < childCount; i++) {
	            const child = this.children[i];
	            child.getComponentsInDescendants(type, retn);
	        }
	        return retn;
	    }
	    getComponentInParent(type) {
	        if (!this.parent)
	            return null;
	        return this.parent.getComponent(type);
	    }
	    getComponentsInParent(type, storage) {
	        if (!this.parent)
	            return [];
	        return this.parent.getComponents(type, storage);
	    }
	    destroy() {
	        if (!this.parent)
	            return; //can't destroy root
	        this.lifeCycleFlags |= e_lifecycle_flags_1.LifeCycleFlag.Destroyed;
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].destroy();
	        }
	        for (let i = 0; i < this.components.length; i++) {
	            this.components[i].destroy();
	        }
	        if (!this.parent.isDestroyed()) {
	            this.parent.children.remove(this);
	            const components = this.parent.components;
	            for (let i = 0; i < components.length; i++) {
	                components[i].onChildRemoved(this);
	            }
	            const childIds = new Array();
	            util_1.traverseChildren(this, (child) => {
	                childIds.push(child.id);
	            });
	            Runtime.sendCommand(e_command_type_1.CommandType.Destroy, { id: this.id, childIds });
	        }
	    }
	    destroyFromParent() {
	        //don't fire handlers n stuff
	    }
	    /*** Accessors ***/
	    isRoot() {
	        return this === AppElement_1.Root;
	    }
	    isCreated() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Created) !== 0;
	    }
	    isEnabled() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Enabled) !== 0;
	    }
	    isDisabled() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Enabled) === 0;
	    }
	    isMounted() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Mounted) !== 0;
	    }
	    isDestroyed() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Destroyed) !== 0;
	    }
	    /*** Helpers ***/
	    containsPoint(point) {
	        const p = this.getPosition();
	        const x = p.x;
	        const y = p.y;
	        const w = this.width;
	        const h = this.height;
	        const px = point.x;
	        const py = point.y;
	        return px >= x && x + w >= px && py >= y && y + h >= py;
	    }
	    //this might be backwards
	    //todo account for rotation
	    containsRect(rect) {
	        const p = this.getPosition();
	        return rect.x + rect.width < (p.x + this.width)
	            && (rect.x) > (p.x)
	            && (rect.y) > (p.y)
	            && (rect.y + rect.height) < (p.y + this.height);
	    }
	    //todo account for rotation -- probably want to use algorithm of overlapping polygons instead
	    overlapsRectangle(rect) {
	        const p = this.getPosition();
	        const minAx = p.x;
	        const minAy = p.y;
	        const maxAx = p.x + this.width;
	        const maxAy = p.y + this.height;
	        const minBx = rect.x;
	        const minBy = rect.y;
	        const maxBx = rect.x + rect.width;
	        const maxBy = rect.y + rect.height;
	        const aLeftOfB = maxAx < minBx;
	        const aRightOfB = minAx > maxBx;
	        const aAboveB = minAy > maxBy;
	        const aBelowB = maxAy < minBy;
	        return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);
	    }
	};
	/*** Static ***/
	AppElement.Root = null;
	AppElement = AppElement_1 = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], AppElement);
	exports.AppElement = AppElement;
	var AppElement_1;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	let Rectangle = Rectangle_1 = class Rectangle {
	    constructor(x = 0, y = 0, width = 0, height = 0) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	    }
	    containsRectangle(rect) {
	        return false;
	    }
	    overlapsRectangle(rect) {
	        return false;
	    }
	    containsPoint(point) {
	        return Rectangle_1.pointInsideRect(point, this);
	    }
	    static pointInsideRect(point, rect) {
	        const x = rect.x;
	        const y = rect.y;
	        const w = rect.width;
	        const h = rect.height;
	        const px = point.x;
	        const py = point.y;
	        return px >= x && x + w >= px && py >= y && y + h >= py;
	    }
	    clone() {
	        return new Rectangle_1(this.x, this.y, this.width, this.height);
	    }
	    copyTo(input) {
	        input.x = this.x;
	        input.y = this.y;
	        input.width = this.width;
	        input.height = this.height;
	        return input;
	    }
	};
	Rectangle.Zero = new Rectangle_1();
	Rectangle = Rectangle_1 = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], Rectangle);
	exports.Rectangle = Rectangle;
	var Rectangle_1;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var LifeCycleFlag;
	(function (LifeCycleFlag) {
	    LifeCycleFlag[LifeCycleFlag["Invalid"] = 1] = "Invalid";
	    LifeCycleFlag[LifeCycleFlag["Created"] = 2] = "Created";
	    LifeCycleFlag[LifeCycleFlag["Enabled"] = 4] = "Enabled";
	    LifeCycleFlag[LifeCycleFlag["Disabled"] = 8] = "Disabled";
	    LifeCycleFlag[LifeCycleFlag["Rendered"] = 16] = "Rendered";
	    LifeCycleFlag[LifeCycleFlag["Mounted"] = 32] = "Mounted";
	    LifeCycleFlag[LifeCycleFlag["Destroyed"] = 64] = "Destroyed";
	    LifeCycleFlag[LifeCycleFlag["Structured"] = 128] = "Structured";
	})(LifeCycleFlag = exports.LifeCycleFlag || (exports.LifeCycleFlag = {}));


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CommandType;
	(function (CommandType) {
	    CommandType[CommandType["Create"] = 0] = "Create";
	    CommandType[CommandType["Destroy"] = 1] = "Destroy";
	    CommandType[CommandType["SetRect"] = 2] = "SetRect";
	    CommandType[CommandType["SetImage"] = 3] = "SetImage";
	    CommandType[CommandType["SetPosition"] = 4] = "SetPosition";
	    CommandType[CommandType["SetDimensions"] = 5] = "SetDimensions";
	    CommandType[CommandType["SetTransform"] = 6] = "SetTransform";
	    CommandType[CommandType["SetParent"] = 7] = "SetParent";
	    CommandType[CommandType["SetSiblingIndex"] = 8] = "SetSiblingIndex";
	    CommandType[CommandType["PaintBackground"] = 9] = "PaintBackground";
	    CommandType[CommandType["SetText"] = 10] = "SetText";
	    CommandType[CommandType["UpdateInput"] = 11] = "UpdateInput";
	})(CommandType = exports.CommandType || (exports.CommandType = {}));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const e_command_type_1 = __webpack_require__(32);
	const event_emitter_1 = __webpack_require__(34);
	const object_pool_1 = __webpack_require__(11);
	class RuntimeCommand {
	    constructor() {
	        this.id = ++idGenerator;
	    }
	    onSpawn(type, data, resolve) {
	        this.type = type;
	        this.data = data;
	        this.resolve = resolve;
	    }
	    onDespawn() {
	        this.type = -1;
	        this.data = null;
	        this.resolve = null;
	    }
	}
	exports.RuntimeCommand = RuntimeCommand;
	let idGenerator = 0;
	let __cacheSerializeContainer = {};
	class RuntimeBase extends event_emitter_1.EventEmitter {
	    constructor() {
	        super();
	        this.invokers = {};
	        this.serializers = {};
	        this.commandQueue = [];
	        this.pendingBuffers = [];
	        this.awaitedCommands = [];
	        this.commandPool = new object_pool_1.ObjectPool3(RuntimeCommand);
	    }
	    sendCommand(commandType, data) {
	        //todo - dedup this, FIFO
	        const command = this.commandPool.spawn(commandType, data, null);
	        this.commandQueue.push(command);
	    }
	    awaitCommand(commandType, payload) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            //todo -- de-dup this w/ array of await fns
	            return new Promise((resolve) => {
	                const command = this.commandPool.spawn(commandType, payload, resolve);
	                this.awaitedCommands.push(command);
	                this.commandQueue.push(command);
	            });
	        });
	    }
	    onMessage(message) {
	        this.pendingBuffers.push(message.data);
	    }
	    sendCommandBuffer() {
	        //todo using json for now but later will use a
	        //format that doesn't need to use json.stringify/parse
	        if (this.commandQueue.length === 0)
	            return;
	        var length = this.commandQueue.length;
	        var buffer = '{ "type": "CommandBuffer", "data": [';
	        for (let i = 0; i < length; i++) {
	            const command = this.commandQueue[i];
	            buffer += this.serializeCommand(command);
	            buffer += (i === length - 1) ? "]}" : ",";
	            //if command has resolvers then we can't despawn it yet
	            if (!command.resolve)
	                this.commandPool.despawn(command);
	        }
	        this.commandQueue.length = 0;
	        this.postMessage(buffer);
	    }
	    serializeCommand(command) {
	        const serializer = this.serializers[command.type];
	        //using short names so less data gets serialized
	        __cacheSerializeContainer.id = command.id;
	        __cacheSerializeContainer.r = command.resolve !== null;
	        __cacheSerializeContainer.ct = command.type;
	        __cacheSerializeContainer.d = serializer(command.data);
	        return JSON.stringify(__cacheSerializeContainer);
	    }
	    invokeCommand(commandType, data) {
	        return this.invokers[commandType](data);
	    }
	    decodeCommandBuffers() {
	        if (this.pendingBuffers.length === 0)
	            return;
	        const responses = new Array();
	        for (let i = 0; i < this.pendingBuffers.length; i++) {
	            const buffer = this.pendingBuffers[i];
	            const json = JSON.parse(buffer);
	            if (json.type === "CommandBuffer") {
	                const data = json.data;
	                for (let j = 0; j < data.length; j++) {
	                    let response = void 0;
	                    const command = data[j];
	                    const commandInvoker = this.invokers[command.ct];
	                    if (!commandInvoker)
	                        console.log("Cannot find invoker for", e_command_type_1.CommandType[command.ct]);
	                    response = commandInvoker(command.d);
	                    if (command.r) {
	                        responses.push({ id: command.id, data: response });
	                    }
	                }
	            }
	            if (json.type === "ResponseBuffer") {
	                const data = json.data;
	                for (let j = 0; j < data.length; j++) {
	                    const response = data[j];
	                    //using an array because I don't expect this to have a size
	                    //large enough for a map to make sense.
	                    const idx = this.awaitedCommands.findIndex(a => a.id === response.id);
	                    if (idx !== -1) {
	                        const awaitedCommand = this.awaitedCommands[idx];
	                        awaitedCommand.resolve(response.data);
	                        this.commandPool.despawn(awaitedCommand);
	                        this.awaitedCommands.removeAt(idx);
	                    }
	                }
	            }
	        }
	        this.pendingBuffers.length = 0;
	        this.sendResponseBuffer(responses);
	    }
	    sendResponseBuffer(response) {
	        if (response.length === 0)
	            return;
	        //this.postMessage();
	    }
	    setCommandSerializer(commandType, serializer) {
	        this.serializers[commandType] = serializer;
	    }
	    ;
	    setCommandInvoker(commandType, invoker) {
	        this.invokers[commandType] = invoker;
	    }
	}
	exports.RuntimeBase = RuntimeBase;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	//todo this needs an overhaul
	class EventEmitter {
	    constructor() {
	        this.listenerMap = new Map();
	    }
	    hasListeners(evt) {
	        const map = this.listenerMap.get(evt);
	        return map && map.length > 0;
	    }
	    on(type, handler) {
	        const handlers = this.listenerMap.get(type) || [];
	        const idx = handlers.indexOf(handler);
	        if (idx === -1) {
	            handlers.push(handler);
	        }
	        this.listenerMap.set(type, handlers);
	    }
	    off(type, handler) {
	        const handlers = this.listenerMap.get(type);
	        if (!handlers)
	            return;
	        const idx = handlers.indexOf(handler);
	        if (idx !== -1) {
	            handlers.splice(idx, 1);
	        }
	    }
	    emit(type, ...args) {
	        const handlers = this.listenerMap.get(type);
	        if (!handlers || handlers.length === 0)
	            return;
	        const eventName = (type.eventName) ? type.eventName : "on" + type.name;
	        for (let i = 0; i < handlers.length; i++) {
	            handlers[i][eventName].apply(handlers[i], args);
	        }
	    }
	}
	exports.EventEmitter = EventEmitter;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementParentChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementParentChanged(appElement, newParent, oldParent) { }
	}
	exports.AppElementParentChanged = AppElementParentChanged;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementIndexChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementIndexChanged(appElement, index, oldIndex) { }
	}
	exports.AppElementIndexChanged = AppElementIndexChanged;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	const e_lifecycle_flags_1 = __webpack_require__(31);
	let Component = Component_1 = class Component {
	    constructor() {
	        this.lifeCycleFlags = e_lifecycle_flags_1.LifeCycleFlag.Enabled;
	    }
	    get isEnabled() {
	        return (this.lifeCycleFlags & e_lifecycle_flags_1.LifeCycleFlag.Enabled) !== 0;
	    }
	    //todo -- need to incorporate 'ActiveAndEnabled'
	    set isEnabled(value) {
	        if (this.isEnabled === value)
	            return;
	        if (value) {
	            this.lifeCycleFlags |= e_lifecycle_flags_1.LifeCycleFlag.Enabled;
	            this.onEnabled();
	        }
	        else {
	            this.lifeCycleFlags ^= e_lifecycle_flags_1.LifeCycleFlag.Enabled;
	            this.onDisabled();
	        }
	    }
	    getComponent(type) {
	        return this.appElement.getComponent(type);
	    }
	    //Returns all components of Type type in the GameObject
	    getComponents(type) {
	        return this.appElement.getComponents(type);
	    }
	    getComponentInChildren(type) {
	        return this.appElement.getComponentInChildren(type);
	    }
	    //Returns all components of Type in the AppElement in it's direct children
	    getComponentsInChildren(type) {
	        return this.appElement.getComponentsInChildren(type);
	    }
	    //Returns all components of Type in the AppElement recursively in its children
	    getComponentsInDescendants(type) {
	        return this.appElement.getComponentsInDescendants(type);
	    }
	    getComponentInParent(type) {
	        return this.appElement.getComponentInParent(type);
	    }
	    getComponentsInParent(type) {
	        return this.appElement.getComponentsInParent(type);
	    }
	    onChildAdded(child) { }
	    onChildRemoved(child) { }
	    onCreated() { }
	    onMounted() { }
	    onEnabled() { }
	    onDisabled() { }
	    onDestroyed() { }
	    update(deltaTime) { }
	    destroy() {
	        this.appElement = null;
	    }
	    static componentDecorator(path) {
	        return function (target) {
	            Component_1.types.set(path, target);
	        };
	    }
	    static allowMultipleDecorator() {
	        // return function(target : any) {
	        //     Component.types.set(path, {
	        //
	        //     })
	        // }
	    }
	    static requireComponent() {
	    }
	    static getComponentFromPath(path) {
	        return Component_1.types.get(path);
	    }
	    static getComponentTypePathPairs() {
	        const retn = new Array();
	        Component_1.types.forEach(function (value, key) {
	            retn.push({ type: value, path: key });
	        });
	        return retn;
	    }
	    serialize() {
	        return null;
	    }
	    static Serialize(component) {
	        return {
	            id: "blach", data: component.serialize()
	        };
	    }
	};
	Component.types = new Map();
	Component = Component_1 = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], Component);
	exports.Component = Component;
	exports.allowMultiple = Component.allowMultipleDecorator;
	exports.component = Component.componentDecorator;
	exports.requireComponent = Component.requireComponent;
	var Component_1;


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const DragAnnotationMap = new Map();
	class DragAction {
	    onDragStart() { }
	    onUpdate() { }
	    onDrop(editorElement) { }
	    //todo -- would be nicer to have drag actions live on a prototype
	    static Inherit(target) {
	        const handlers = DragAnnotationMap.get(target.__proto__);
	        if (!handlers)
	            return;
	        DragAnnotationMap.set(target, handlers.clone());
	    }
	    static invokeDropHandlers(element, action) {
	        DragAction.invoke(element, action, "drop");
	    }
	    static invokeEnterHandlers(element, action) {
	        DragAction.invoke(element, action, "enter");
	    }
	    static invokeExitHandlers(element, action) {
	        DragAction.invoke(element, action, "exit");
	    }
	    static invokeHoverHandlers(element, action) {
	        DragAction.invoke(element, action, "hover");
	    }
	    static invoke(element, action, eventType) {
	        const actionType = action.constructor;
	        //todo -- use shadow tree to make this faster
	        while (element) {
	            var handler = DragAnnotationMap.get(element.constructor);
	            if (handler && handler.typeSet.has(actionType)) {
	                handler.invoke(element, action, eventType);
	                return;
	            }
	            element = element.parent;
	        }
	    }
	}
	DragAction.MouseEnter = onDragActionMouseEnter;
	DragAction.MouseExit = onDragActionMouseExit;
	DragAction.MouseOver = onDragActionMouseOver;
	DragAction.Drop = onDragActionDrop;
	exports.DragAction = DragAction;
	class DragAnnotationHandler {
	    constructor() {
	        this.handlers = [];
	        this.typeSet = new Set();
	    }
	    add(eventType, actionType, methodName) {
	        this.typeSet.add(actionType);
	        this.handlers.push({ eventType, actionType, methodName });
	    }
	    invoke(element, action, eventType) {
	        const actionType = action.constructor;
	        for (let i = 0; i < this.handlers.length; i++) {
	            const annotation = this.handlers[i];
	            if (annotation.actionType === actionType && annotation.eventType === eventType) {
	                element[annotation.methodName](action);
	            }
	        }
	    }
	    clone() {
	        const retn = new DragAnnotationHandler();
	        retn.handlers = this.handlers.slice(0);
	        this.typeSet.forEach(function (t) {
	            retn.typeSet.add(t);
	        });
	        return retn;
	    }
	}
	function onDragActionMouseEnter(actionType) {
	    return function (target, propertyKey, descriptor) {
	        target = target.constructor;
	        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
	        handler.add("enter", actionType, propertyKey);
	        DragAnnotationMap.set(target, handler);
	    };
	}
	function onDragActionMouseExit(actionType) {
	    return function (target, propertyKey, descriptor) {
	        target = target.constructor;
	        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
	        handler.add("exit", actionType, propertyKey);
	        DragAnnotationMap.set(target, handler);
	    };
	}
	function onDragActionDrop(actionType) {
	    return function (target, propertyKey, descriptor) {
	        target = target.constructor;
	        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
	        handler.add("drop", actionType, propertyKey);
	        DragAnnotationMap.set(target, handler);
	    };
	}
	function onDragActionMouseOver(actionType) {
	    return function (target, propertyKey, descriptor) {
	        target = target.constructor;
	        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
	        handler.add("hover", actionType, propertyKey);
	        DragAnnotationMap.set(target, handler);
	    };
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const sizing_component_1 = __webpack_require__(40);
	const layout_1 = __webpack_require__(41);
	const expose_as_1 = __webpack_require__(42);
	const component_1 = __webpack_require__(37);
	const app_element_1 = __webpack_require__(29);
	let HorizontalStackLayout = class HorizontalStackLayout extends layout_1.LayoutComponent {
	    constructor() {
	        super(...arguments);
	        this.wrap = false;
	        //I set text
	        //I ask for height
	        //block? that sucks
	        //await this.element.getHeight()
	        //this.setRect(rect)
	        // -> do layout async?
	        //what needs its layout computed?
	        //only when width / height changes does anything change, position does not, unless set to stretch and child leaves bounds
	        //const width = sizer.getWidthInPixels();
	        //static sizing can be in percentages / fractions / or pixels (ignore ems for now)
	        //defaults to 1 fr
	        //fr will need a min size of some sort for overflow right?
	        //static or tethered elements are not part of layout logic, the effectively 'float'
	        //can have min/max/preferred sizes
	        //get only non tethered children?
	        //get only non static children?
	        //each box has stretch behavior in each direction
	        //all overflows are hidden outside of scroll elements
	        // 'fit content' is tricky
	        //in each dimension
	        //each element gets the sum of all of it's (non static/non tethered) immediate children
	        //default behavior is clamp width, stretch height
	        //lets see how this works --
	        //for fr sizes when the container scrolls
	        //option 1: size them as though they get a proportional fraction of space left after percent + fixed
	        //option 2: size them as though the total fractional space is equal to percent + fixed
	        //option 3: require explicit min sizing with fr (bad)
	        //option 4: add setting on container around how to handle fr, using option 1 or 2, or by including a fixed fr value
	        //onLayoutRectChanged
	        //parent -> Stretch Fit Children
	        //parent -> Fixed
	        //child -> Fill Parent
	        //setTextAsync("Text")
	        //-> Queues a text update
	        //-> Does NOT update the rect value
	        //-> Next Frame Rect is updated
	        //-> getRect() still refers to original
	        //await setTextAsync("text")
	        //do stuff here, by now layout has occurred
	        //two kinds of layout
	        //-> top down = parent resize triggers child layout
	        //-> bottom up = child resize triggers parent layout
	    }
	    doLayout() {
	        //todo -- assuming height stretches to highest child for now, allow other clamp modes later
	        var remainingSpace = this.appElement.getWidth();
	        const sizings = new Array(this.sizingComponents.length);
	        let totalFractions = 0;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const sizer = this.sizingComponents[i];
	            if (sizer) {
	                switch (sizer.sizingMode) {
	                    case sizing_component_1.SizingMode.Percent:
	                        const percentageValue = sizer.width * 0.01;
	                        sizings[i] = (percentageValue * this.appElement.getWidth()) | 0;
	                        remainingSpace -= sizings[i];
	                        break;
	                    case sizing_component_1.SizingMode.Fraction:
	                        totalFractions++;
	                        sizings[i] = sizer.width;
	                        break;
	                    case sizing_component_1.SizingMode.Fixed:
	                        //todo handle fixed-em
	                        sizings[i] = sizer.width;
	                        remainingSpace -= sizings[i];
	                        break;
	                }
	            }
	            else {
	                sizings[i] = -1;
	            }
	        }
	        if (totalFractions > 0) {
	            const pieceSize = remainingSpace / totalFractions;
	            for (let i = 0; i < sizings.length; i++) {
	                if (this.sizingComponents[i].sizingMode === sizing_component_1.SizingMode.Fraction) {
	                    sizings[i] = pieceSize * (this.sizingComponents[i].width);
	                }
	            }
	        }
	        let allocatedSpace = 0;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const element = this.sizingComponents[i].appElement;
	            element.setPositionValues(allocatedSpace, 0, app_element_1.Space.Local);
	            element.setDimensions(sizings[i], this.appElement.getHeight());
	            allocatedSpace += sizings[i];
	        }
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Boolean)
	], HorizontalStackLayout.prototype, "wrap", void 0);
	HorizontalStackLayout = tslib_1.__decorate([
	    component_1.component("Layout/HorizontalStack")
	], HorizontalStackLayout);
	exports.HorizontalStackLayout = HorizontalStackLayout;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const layout_1 = __webpack_require__(41);
	const expose_as_1 = __webpack_require__(42);
	const util_1 = __webpack_require__(16);
	const component_1 = __webpack_require__(37);
	var SizingMode;
	(function (SizingMode) {
	    SizingMode[SizingMode["Fixed"] = 0] = "Fixed";
	    SizingMode[SizingMode["Percent"] = 1] = "Percent";
	    SizingMode[SizingMode["Fraction"] = 2] = "Fraction";
	    SizingMode[SizingMode["Anchor"] = 3] = "Anchor";
	})(SizingMode = exports.SizingMode || (exports.SizingMode = {}));
	let SizingComponent = class SizingComponent extends component_1.Component {
	    constructor() {
	        super(...arguments);
	        this.sizingMode = SizingMode.Fraction;
	        this.width = 1;
	        this.height = 1;
	    }
	    setLayoutRect(rect) {
	    }
	    onLayoutRectChanged(layoutRect) {
	    }
	    onMounted() {
	        const layout = this.getComponentInParent(layout_1.LayoutComponent);
	        if (layout) {
	            layout.addSizingComponent(this);
	        }
	    }
	    onDestroyed() {
	        if (!this.appElement.isDestroyed()) {
	            const layout = this.getComponentInParent(layout_1.LayoutComponent);
	            if (layout) {
	                layout.removeSizingComponent(this);
	            }
	        }
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.exposeAs(util_1.EnumSelect, SizingMode)
	], SizingComponent.prototype, "sizingMode", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "width", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "height", void 0);
	SizingComponent = tslib_1.__decorate([
	    component_1.component("Layout/Sizing")
	], SizingComponent);
	exports.SizingComponent = SizingComponent;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const sizing_component_1 = __webpack_require__(40);
	const component_1 = __webpack_require__(37);
	class DefaultSizer {
	    constructor(appElement) {
	        this.appElement = appElement;
	        this.width = 1;
	        this.height = 1;
	        this.sizingMode = sizing_component_1.SizingMode.Fraction;
	    }
	}
	exports.DefaultSizer = DefaultSizer;
	class LayoutComponent extends component_1.Component {
	    constructor() {
	        super(...arguments);
	        this.sizingComponents = [];
	    }
	    doLayout() { }
	    onMounted() {
	        const childCount = this.appElement.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const child = this.appElement.getChildAt(i);
	            let sizing = child.getComponent(sizing_component_1.SizingComponent) || new DefaultSizer(child);
	            this.sizingComponents.push(sizing);
	        }
	        Runtime.queueLayout(this);
	    }
	    getSlotAtPosition(position) {
	        if (this.sizingComponents.length === 0)
	            return;
	    }
	    onChildAdded(child) {
	        const sizer = child.getComponent(sizing_component_1.SizingComponent) || new DefaultSizer(child);
	        this.sizingComponents.push(sizer);
	        Runtime.queueLayout(this);
	    }
	    onChildRemoved(child) {
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            if (this.sizingComponents[i].appElement === child) {
	                this.sizingComponents.removeAt(i);
	                break;
	            }
	        }
	        Runtime.queueLayout(this);
	    }
	    onChildMoved(child) {
	        //maybe just rebuild sizing component list
	    }
	    addSizingComponent(sizingComponent) {
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const cmp = this.sizingComponents[i];
	            if (cmp.appElement === sizingComponent.appElement) {
	                this.sizingComponents[i] = sizingComponent;
	                return;
	            }
	        }
	        Runtime.queueLayout(this);
	    }
	    removeSizingComponent(sizingComponent) {
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const cmp = this.sizingComponents[i];
	            if (cmp.appElement === sizingComponent.appElement) {
	                this.sizingComponents[i] = new DefaultSizer(sizingComponent.appElement);
	                return;
	            }
	        }
	        Runtime.queueLayout(this);
	    }
	}
	exports.LayoutComponent = LayoutComponent;
	//Margin -> Space Outside border
	//Padding -> Space Inside border
	//SetRect -> ComputeContentRect(Margin/Padding/Offset/Stretch/Anchor) -> DoLayout
	//SetRect -> Stretch/Anchor -> Margin -> Border -> Padding -> Content -> Layout
	//items that are laid out are allocated a given rect
	//they can choose to ignore this rect, default behavior is to fill it
	//could also fill in one direction, or apply margin / padding to it
	//before filling it. Could also use this for centering / alignment / offsetting
	//how are animation triggers handled? possibly using this layout rect
	//tethers -> Sticky positioning based on screen size and tether point within some element (not only parent)
	//anchors -> Stretch width/height based on anchor points on parent
	//tether and anchor are mutually exclusive
	//anchor drives size
	//it is a subclass of SizingComponent
	//Tether is a subclass of Layout?
	//adjusting sizes
	//layout items are locked
	//sizing
	//anchor
	//percent of parent remaining
	//percent of parent total space
	//fraction of parent remaining space
	//fraction of parent total space based on # of siblings
	//min / max / preferred
	//fit child content width
	//fit child content height
	//fill parent
	//stretch left
	//stretch right
	//stretch up
	//stretch down
	//stretch to sibling
	//margin / padding / border -> Ignored for layout, layout only deals with total width / height
	//margin / padding / border -> Optionally collapsible
	//onLayoutSet()
	//onLayoutChanged()
	//anything with an anchor is NOT part of layout children
	//anything with a tether is NOT part of layout children
	//absolute width / height
	//position
	//possible to use layout meta-elements that can declare sizing for their child
	//these elements can have only 1 child but many components
	//auto generated when attaching to child of layout


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	//todo maybe swap to array
	let editorDataMap = new Map();
	let fnPrototype = Object.getPrototypeOf(function () { });
	function getExposedFieldMap(target) {
	    let map = null;
	    let ptr = target.constructor;
	    while (!map && ptr !== fnPrototype) {
	        map = editorDataMap.get(ptr);
	        if (map)
	            return map;
	        ptr = Object.getPrototypeOf(ptr);
	    }
	    return null;
	}
	exports.getExposedFieldMap = getExposedFieldMap;
	function inspector(propertyType, ...propertyOptions) {
	    return (target, propertyName) => {
	        var fieldMap = editorDataMap.get(target.constructor);
	        if (!fieldMap) {
	            fieldMap = new Map();
	            const parent = Object.getPrototypeOf(target.constructor);
	            if (typeof parent === "function") {
	                const parentFields = editorDataMap.get(parent);
	                if (parentFields) {
	                    parentFields.forEach(function (value, key) {
	                        fieldMap.set(key, value);
	                    });
	                }
	            }
	            editorDataMap.set(target.constructor, fieldMap);
	        }
	        fieldMap.set(propertyName, { propertyName, propertyType, propertyOptions });
	    };
	}
	exports.inspector = inspector;
	function exposeAs(propertyType, ...propertyOptions) {
	    return (target, propertyName) => {
	        var fieldMap = editorDataMap.get(target.constructor);
	        if (!fieldMap) {
	            fieldMap = new Map();
	            const parent = Object.getPrototypeOf(target.constructor);
	            if (typeof parent === "function") {
	                const parentFields = editorDataMap.get(parent);
	                if (parentFields) {
	                    parentFields.forEach(function (value, key) {
	                        fieldMap.set(key, value);
	                    });
	                }
	            }
	            editorDataMap.set(target.constructor, fieldMap);
	        }
	        fieldMap.set(propertyName, { propertyName, propertyType, propertyOptions });
	    };
	}
	exports.exposeAs = exposeAs;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_1 = __webpack_require__(44);
	const evt_asset_created_1 = __webpack_require__(45);
	//asset is just a file pointer with an icon and extension and defines an inspector
	//dragging an asset onto a field in the inspector just loads the asset
	//an importer is just an operation applied to the data before writing it to disk
	//there is only 1 kind of asset, no subclasses
	//in terms of adding to assets (prefabs mostly, maybe animations)
	//this can be done by the asset item itself and not via the project interface
	//scripts need to be tracked as assets also for scene dependencies
	//but they aren't (probably) loaded in the same way other assets are
	//runtime asset bundle -> database of asset data with function for loading them unrelated to the file system
	const fs = __webpack_require__(46);
	const File = __webpack_require__(47);
	const Path = __webpack_require__(48);
	const globby = __webpack_require__(49);
	function walkSync(dir, fileList = [], fileStats = []) {
	    const files = File.readdirSync(dir);
	    for (let i = 0; i < files.length; i++) {
	        const fileName = Path.join(dir, files[i]);
	        const stat = File.lstatSync(fileName);
	        fileList.push(fileName);
	        fileStats.push(stat);
	        if (stat.isDirectory()) {
	            walkSync(fileName, fileList, fileStats);
	        }
	    }
	    return { fileList, fileStats };
	}
	class Project {
	    constructor(name, projectRoot) {
	        this.name = name;
	        this.projectRoot = projectRoot;
	        this.assetDatabase = {};
	        const pathToProject = Path.resolve(projectRoot);
	        if (Path.basename(pathToProject) !== "project.hex") {
	            throw new Error("Projects must be created from a project.hex file, " + projectRoot + " does not point to a project.hex file");
	        }
	        if (!File.existsSync(pathToProject)) {
	            throw new Error("Cannot find file at " + pathToProject);
	        }
	        this.projectRoot = Path.dirname(pathToProject);
	        this.assetPath = Path.join(this.projectRoot, "assets");
	        this.projectFilePath = Path.join(this.projectRoot, "project.hex");
	    }
	    getAssetRoot() {
	        return this.assetPath;
	    }
	    pathToGuid(path) {
	        return null;
	    }
	    guidToPath(guid) {
	        const assetEntry = this.assetDatabase[guid];
	        if (!assetEntry)
	            return null;
	        return assetEntry.filePath;
	    }
	    getAssetByGUID(guid) {
	        return null;
	    }
	    getAssetAtPath(path, type) {
	        return null;
	    }
	    createDirectory(pathToFolder) {
	        // FileSystem.createDirectory(pathToFolder);
	        return "Folder Name";
	    }
	    createAsset(pathToAsset, data) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!this.isPathInProject(pathToAsset))
	                throw new Error("Path " + pathToAsset + " must be inside project root");
	            const path = Path.resolve(pathToAsset);
	            //const asset = Asset.create(path, data);
	            return null;
	        });
	    }
	    isPathInProject(path) {
	        return Path.resolve(path).indexOf(this.projectRoot) === 0;
	    }
	    //dest path is relative to asset root if it is not an absolute path
	    importAsset(pathToAsset, destinationPath) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            pathToAsset = FileSystem.resolvePath(pathToAsset);
	            let dest = FileSystem.resolvePath(destinationPath || System.AssetRoot + FileSystem.getFileName(pathToAsset));
	            dest = FileSystem.getRelativePath(System.AssetRoot, dest);
	            dest = FileSystem.createUniqueFilePath(dest);
	            console.log(System.AssetRoot + dest);
	            yield FileSystem.createDirectoriesInPath(System.AssetRoot + dest);
	            const content = yield FileSystem.readFile(pathToAsset);
	            if (!content) {
	                return Promise.resolve(null);
	            }
	            const asset = yield asset_1.Asset.create(dest, content);
	            EditorRuntime.emit(evt_asset_created_1.AssetCreated, asset);
	            return Promise.resolve(asset);
	        });
	    }
	    importAll(paths, relativeDestRoot = null) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            if (!relativeDestRoot)
	                relativeDestRoot = this.assetPath;
	            for (let i = 0; i < paths.length; i++) {
	                this.importAsset(paths[i], relativeDestRoot);
	            }
	        });
	    }
	    refresh() {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return Promise.resolve(this);
	        });
	    }
	    load() {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            //find files for all assets
	            //if cant find by path, check by inode
	            //if still can't find it, mark it as missing
	            const fileList = [];
	            const fileStats = [];
	            walkSync(this.assetPath, fileList, fileStats);
	            const projectData = this.loadProjectFile();
	            const assetDatabase = projectData.assetDatabase || {};
	            const assetGUIDS = Object.keys(assetDatabase);
	            const missingAssets = new Array();
	            const assetsByFileName = {};
	            for (let i = 0; i < assetGUIDS.length; i++) {
	                const guid = assetGUIDS[i];
	                const assetData = assetDatabase[guid];
	                assetData.guid = guid;
	                let resolvedPath = Path.join(this.projectRoot, assetData.filePath);
	                const fileIndex = fileList.indexOf(resolvedPath);
	                const statIndex = fileStats.findIndex(function (value) {
	                    return value.ino === assetData.inode;
	                });
	                if (fileIndex === -1) {
	                    if (statIndex === void 0) {
	                        missingAssets.push(assetData);
	                        continue;
	                    }
	                    else {
	                        assetData.filePath = Path.relative(this.projectRoot, fileList[statIndex]);
	                    }
	                }
	                //we have the file but the inode is wrong
	                if (statIndex === void 0) {
	                    const stat = File.lstatSync(resolvedPath);
	                    assetData.inode = stat.ino;
	                }
	                assetDatabase[guid] = assetData;
	                assetsByFileName[assetData.filePath] = assetData;
	            }
	            for (let i = 0; i < fileList.length; i++) {
	                const fileName = Path.relative(this.projectRoot, fileList[i]);
	                const match = assetsByFileName[fileName];
	                if (!match) {
	                    //todo -- import this new file
	                    const guid = System.createGUID();
	                    assetDatabase[guid] = {
	                        filePath: fileName,
	                        inode: fs.lstatSync(fileList[i]).ino,
	                        guid: guid,
	                        data: {}
	                    };
	                }
	            }
	            //todo -- what happens with missing assets?
	            this.assetDatabase = assetDatabase;
	            return Promise.resolve(this);
	        });
	    }
	    save() {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const output = {
	                name: this.name,
	                assetDatabase: {}
	            };
	            const assetGUIDS = Object.keys(this.assetDatabase);
	            for (let i = 0; i < assetGUIDS.length; i++) {
	                const guid = assetGUIDS[i];
	                const assetEntry = this.assetDatabase[guid];
	                output.assetDatabase[guid] = {
	                    filePath: assetEntry.filePath,
	                    inode: assetEntry.inode,
	                    data: assetEntry.data
	                };
	            }
	            return File.writeFile(this.projectFilePath, JSON.stringify(output));
	        });
	    }
	    getAssetCount() {
	        return Object.keys(this.assetDatabase).length;
	    }
	    loadProjectFile() {
	        return JSON.parse(File.readFileSync(this.projectFilePath).toString());
	    }
	}
	exports.Project = Project;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	class Asset {
	    constructor(path) {
	        this.parent = null;
	        this.children = [];
	        this.guid = System.createGUID();
	        this.pathSegments = FileSystem.getRelativePath(System.AssetRoot, path).split("/");
	    }
	    addChild(childAsset) {
	        if (childAsset.parent === this)
	            return;
	        if (childAsset.parent) {
	            childAsset.parent.removeChild(childAsset);
	        }
	        this.children.push(childAsset);
	        const path = this.pathSegments.slice(0);
	        path.push(childAsset.getName());
	        childAsset.pathSegments = path;
	    }
	    removeChild(childAsset) {
	        this.children.remove(childAsset);
	    }
	    move(path) {
	        const name = this.getName();
	        this.pathSegments = path.split("/");
	        this.pathSegments.push(name);
	    }
	    setName(name) {
	        name = name.replace(/\n/g, "");
	        this.pathSegments[this.pathSegments.length - 1] = name;
	        return name;
	    }
	    getName() {
	        return FileSystem.getFileName(this.pathSegments[this.pathSegments.length - 1]);
	    }
	    getExtension() {
	        return FileSystem.getExtension(this.getName());
	    }
	    getPath() {
	        return this.pathSegments.join("/");
	    }
	    getPathSegments() {
	        return this.pathSegments.slice(0);
	    }
	    getFullPath() {
	        return System.AssetRoot + this.getPath();
	    }
	    getDepth() {
	        return this.pathSegments.length - 1;
	    }
	    getWritableData() {
	        return null;
	    }
	    static create(path, data) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return yield Asset.getImporter(FileSystem.getExtension(path)).import(path, data);
	        });
	    }
	    static getImporter(extension) {
	        return Asset.importers[extension] || Asset.defaultImporter;
	    }
	}
	Asset.importers = {};
	Asset.defaultImporter = {
	    import(path, data) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            const asset = new Asset(path);
	            return FileSystem.writeFile(asset.getPath(), data).then(function () {
	                return asset;
	            });
	        });
	    }
	};
	exports.Asset = Asset;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AssetCreated extends runtime_event_1.RuntimeEvent {
	    onAssetCreated(asset) { }
	}
	exports.AssetCreated = AssetCreated;


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("mz/fs");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("globby");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const binding_compiler_1 = __webpack_require__(10);
	const editor_element_1 = __webpack_require__(15);
	class EditorBindingElement extends editor_element_1.EditorElement {
	    constructor(ctx, path) {
	        super();
	        this.element = this;
	        this.ctx = ctx;
	        this.getterFn = binding_compiler_1.getGetter(path);
	        this.formatters = null;
	    }
	    onUpdated() {
	        const newValue = this.getterFn(this.ctx);
	        if (this.lastContent !== newValue) {
	            this.textNode.nodeValue = this.applyFormatters(newValue);
	            this.lastContent = newValue;
	        }
	    }
	    applyFormatters(value) {
	        if (!this.formatters)
	            return value;
	        for (let i = 0; i < this.formatters.length; i++) {
	            value = this.formatters[i](value);
	        }
	        return value;
	    }
	    getDomNode() {
	        return this.textNode;
	    }
	    addChild(child) {
	        throw new Error("Bind Nodes cannot have children");
	    }
	    mount(mountPoint) {
	        this.textNode = this.createDomNode();
	        mountPoint.appendChild(this.textNode);
	        EditorRuntime.updateTree.add(this);
	    }
	    createDomNode() {
	        return document.createTextNode(this.getterFn(this.ctx));
	    }
	    format(formatter) {
	        this.formatters = this.formatters || [];
	        this.formatters.push(formatter);
	        return this;
	    }
	}
	exports.EditorBindingElement = EditorBindingElement;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_base_1 = __webpack_require__(33);
	const browser_input_1 = __webpack_require__(24);
	const e_command_type_1 = __webpack_require__(32);
	class BrowserRuntimeImpl extends runtime_base_1.RuntimeBase {
	    constructor(codeurl, mountTarget = null) {
	        super();
	        this.pendingBuffers = [];
	        this.input = new browser_input_1.BrowserInput(mountTarget);
	        this.domElementIdMap = new Map();
	        const root = document.createElement("div");
	        root.id = 'app-root-element';
	        this.domElementIdMap.set(0, root);
	        this.worker = new window.HexWorker(codeurl);
	        this.worker.onmessage = (message) => {
	            this.onMessage(message);
	        };
	    }
	    update() {
	        this.decodeCommandBuffers();
	        this.sendCommandBuffer();
	        this.input.update();
	        runtimeGuard(() => {
	            this.sendCommand(e_command_type_1.CommandType.UpdateInput, 0);
	        });
	    }
	    setDomNodeToElementId(id, node) {
	        this.domElementIdMap.set(id, node);
	    }
	    elementIdToDomNode(elementId) {
	        return this.domElementIdMap.get(elementId);
	    }
	    postMessage(message) {
	        this.worker.postMessage(message);
	    }
	    getInput() {
	        return this.input;
	    }
	}
	exports.BrowserRuntimeImpl = BrowserRuntimeImpl;


/***/ },
/* 52 */
/***/ function(module, exports) {

	//polyfill for webworker while in editor mode
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class EditorWorker {
	    postMessage(message, ports) {
	        if (!self.onmessage)
	            return;
	        setTimeout(function () {
	            //sending to fake worker context instance
	            self.onmessage({ origin: "", data: message });
	        }, 0);
	    }
	    terminate() { }
	    addEventListener(type, listener, useCapture) {
	    }
	    ;
	    dispatchEvent(evt) { return true; }
	    ;
	    removeEventListener(type, listener, useCapture) {
	    }
	    ;
	}
	exports.EditorWorker = EditorWorker;
	class EditorWorkerContext {
	    postMessage(message) {
	        BrowserRuntime.worker.onmessage({
	            data: message
	        });
	    }
	}
	exports.EditorWorkerContext = EditorWorkerContext;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const project_1 = __webpack_require__(43);
	const fsp = __webpack_require__(54);
	const path = __webpack_require__(48);
	describe("Project Tests", function () {
	    it("should create a project with a proper hex reference", function () {
	        expect(new project_1.Project("Spec Project", path.join("test_project1", "project.hex"))).toBeTruthy();
	    });
	    it("should not create a project with a bad hex file", function () {
	        expect(function () {
	            new project_1.Project("Spec Project", "pzae.hex");
	        }).toThrow();
	    });
	    it("should not create a project without an existing project.hex file", function () {
	        expect(function () {
	            new project_1.Project("Spec Project", path.join("test_project_not_here", "project.hex"));
	        }).toThrow();
	    });
	    it("should load existing files in the project", function (done) {
	        const project = new project_1.Project("Spec Project", path.join("test_project1", "project.hex"));
	        const filePath = path.join("assets", "test_file1.png");
	        project.load().then(function () {
	            expect(project.getAssetCount()).toBe(1);
	            expect(project.assetDatabase["SOME_GUID"]).toEqual({
	                guid: "SOME_GUID",
	                filePath: filePath,
	                inode: fsp.lstatSync(path.resolve(path.join("test_project1", filePath))).ino,
	                data: {}
	            });
	            done();
	        });
	    });
	    it("should realize a file was renamed", function (done) {
	        const basePath = path.resolve(path.join("test_project1", "assets"));
	        const originalName = path.join(basePath, "test_file1.png");
	        const changedName = path.join(basePath, "test_file_changed.png");
	        fsp.renameSync(originalName, changedName);
	        const project = new project_1.Project("Spec Project", path.join("test_project1", "project.hex"));
	        project.load().then(() => {
	            expect(project.getAssetCount()).toBe(1);
	            expect(project.assetDatabase["SOME_GUID"]).toBeTruthy();
	            fsp.renameSync(changedName, originalName);
	            done();
	        }).catch(() => {
	            fsp.renameSync(changedName, originalName);
	        });
	    });
	    it("should handle new files", function (done) {
	        let project = null;
	        const filePath = path.resolve(path.join("test_project1", "assets", "somefile.txt"));
	        fsp.writeFile(filePath, "some text").then(() => {
	            project = new project_1.Project("Spec Project", path.join("test_project1", "project.hex"));
	            return project.load();
	        }).then(() => {
	            expect(project.getAssetCount()).toBe(2);
	            fsp.remove(filePath);
	            done();
	        }).catch((e) => {
	            fsp.remove(filePath);
	        });
	    });
	});


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ }
/******/ ]);