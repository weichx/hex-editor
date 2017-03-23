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
	__webpack_require__(57);
	module.exports = __webpack_require__(59);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(2);
	const editor_runtime_1 = __webpack_require__(3);
	const element_renderer_1 = __webpack_require__(7);
	const editor_binding_element_1 = __webpack_require__(54);
	const browser_runtime_1 = __webpack_require__(55);
	const editor_worker_1 = __webpack_require__(56);
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
	const e_command_type_1 = __webpack_require__(31);
	const component_1 = __webpack_require__(40);
	const vector2_1 = __webpack_require__(17);
	const drag_action_1 = __webpack_require__(41);
	const project_1 = __webpack_require__(42);
	const background_component_1 = __webpack_require__(49);
	const color_1 = __webpack_require__(50);
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
	        this.appElementRegistry[0] = app_element_1.AppElement.Root;
	        const bg = app_element_1.AppElement.Root.addComponent(background_component_1.BackgroundComponent);
	        bg.color = color_1.Color.Black;
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
	function distanceTestPoint(test, point, radius) {
	    const x = test.x;
	    const y = test.y;
	    return ((x - point.x) * (x - point.x)) + ((y - point.y) * (y - point.y)) < radius * radius;
	}
	exports.distanceTestPoint = distanceTestPoint;
	function hitTestLine2(p0, p1, point, threshold = 1) {
	    return hitTestLine(p0.x, p0.y, p1.x, p1.y, point, threshold);
	}
	exports.hitTestLine2 = hitTestLine2;
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
	    set(x, y) {
	        this.x = x;
	        this.y = y;
	        return this;
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
	        const sin = Math.sin(radians);
	        const cos = Math.cos(radians);
	        const nx = (this.x * cos) - (this.y * sin);
	        const ny = (this.x * sin) + (this.y * cos);
	        this.x = nx;
	        this.y = ny;
	        return this;
	    }
	    rotateNew(radians) {
	        const sin = Math.sin(radians);
	        const cos = Math.cos(radians);
	        return new Vector2_1((this.x * cos) - (this.y * sin), (this.x * sin) + (this.y * cos));
	    }
	    rotateAround(radians, pivot) {
	        let x = this.x - pivot.x;
	        let y = this.y - pivot.y;
	        const sin = Math.sin(radians);
	        const cos = Math.cos(radians);
	        this.x = ((x * cos) - (y * sin)) + pivot.x;
	        this.y = ((x * sin) + (y * cos)) + pivot.y;
	        return this;
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
	    static up() {
	        return new Vector2_1(0, 1);
	    }
	    static right() {
	        return new Vector2_1(1, 0);
	    }
	    static down() {
	        return new Vector2_1(0, -1);
	    }
	    static left() {
	        return new Vector2_1(-1, 0);
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
	const runtime_base_1 = __webpack_require__(36);
	const evt_app_element_parent_changed_1 = __webpack_require__(38);
	const e_command_type_1 = __webpack_require__(31);
	const evt_app_element_index_changed_1 = __webpack_require__(39);
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
	const vector2_1 = __webpack_require__(17);
	const e_lifecycle_flags_1 = __webpack_require__(30);
	const e_command_type_1 = __webpack_require__(31);
	const util_1 = __webpack_require__(16);
	const matrix3x3_1 = __webpack_require__(32);
	const bounding_box_1 = __webpack_require__(34);
	const math_util_1 = __webpack_require__(33);
	let idGenerator = 0;
	const scratchVector = new vector2_1.Vector2();
	var Space;
	(function (Space) {
	    Space[Space["Local"] = 0] = "Local";
	    Space[Space["World"] = 1] = "World";
	})(Space = exports.Space || (exports.Space = {}));
	var ElementDirtyFlag;
	(function (ElementDirtyFlag) {
	    ElementDirtyFlag[ElementDirtyFlag["Position"] = 1] = "Position";
	    ElementDirtyFlag[ElementDirtyFlag["Scale"] = 2] = "Scale";
	    ElementDirtyFlag[ElementDirtyFlag["Rotation"] = 4] = "Rotation";
	    ElementDirtyFlag[ElementDirtyFlag["Width"] = 8] = "Width";
	    ElementDirtyFlag[ElementDirtyFlag["Height"] = 16] = "Height";
	    ElementDirtyFlag[ElementDirtyFlag["WidthOrHeight"] = 24] = "WidthOrHeight";
	    ElementDirtyFlag[ElementDirtyFlag["Transform"] = 7] = "Transform";
	})(ElementDirtyFlag || (ElementDirtyFlag = {}));
	class AppElement {
	    constructor(name, parent = null) {
	        this.id = idGenerator++;
	        this.name = name || "App Element";
	        this.lifeCycleFlags = 0;
	        this.parent = parent || AppElement.Root;
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
	        this.dirtyFlags = 0;
	        this.scale = new vector2_1.Vector2(1, 1);
	        this.pivot = new vector2_1.Vector2();
	        this.boundingBox = new bounding_box_1.BoundingBox(this);
	        //todo don't allow components to be constructed outside of addComponent or this constructor
	        Runtime.addElement(this);
	    }
	    setPivot(x, y) {
	        this.pivot.x = util_1.clamp01(x);
	        this.pivot.y = util_1.clamp01(y);
	    }
	    getPivot(out = null) {
	        out = out || new vector2_1.Vector2();
	        out.x = this.pivot.x;
	        out.y = this.pivot.y;
	        return out;
	    }
	    getWorldMatrix() {
	        if (!this.parent)
	            return this.getMatrix();
	        return this.parent.getWorldMatrix().multiply(this.getMatrix());
	    }
	    getMatrix(out = null) {
	        if (out)
	            out.identity();
	        out = out || new matrix3x3_1.Matrix3x3();
	        // mat4 result = glm::translate(-pivot) *
	        // glm::scale(..) *
	        // glm::rotate(..) *
	        // glm::translate(pivot) *
	        // glm::translate(..);
	        return out.translate(this.localPosition).rotate(this.rotation, null, math_util_1.AngleUnit.Degrees).scale(this.scale);
	    }
	    setScale(scale) {
	        if (this.scale.isEqual(scale))
	            return;
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
	        if (width === this.width)
	            return;
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
	        if (this.height === height)
	            return;
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
	        if (this.rotation === value)
	            return;
	        this.rotation = value;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    setPosition(position, relativeTo = Space.World) {
	        this.setPositionValues(position.x, position.y, relativeTo);
	    }
	    setPositionValues(x, y, relativeTo = Space.World) {
	        const oldX = this.localPosition.x;
	        const oldY = this.localPosition.y;
	        if (relativeTo === Space.Local) {
	            this.localPosition.x = x;
	            this.localPosition.y = y;
	        }
	        else {
	            this.localPosition.x = x - this.parentPosition.x;
	            this.localPosition.y = y - this.parentPosition.y;
	        }
	        if (oldX !== this.localPosition.x || oldY !== this.localPosition.y) {
	            Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	            const worldX = this.localPosition.x + this.parentPosition.x;
	            const worldY = this.localPosition.y + this.parentPosition.y;
	            for (let i = 0; i < this.children.length; i++) {
	                const position = this.children[i].parentPosition;
	                position.x = worldX;
	                position.y = worldY;
	            }
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
	        this.boundingBox.update();
	        return this.boundingBox;
	    }
	    getAxisAlignedBoundingBox() {
	        this.boundingBox.update();
	        return this.boundingBox.getAxisAlignedBoundingBox();
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
	        parent = parent || AppElement.Root;
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
	        if (this === AppElement.Root)
	            return 0;
	        let ptr = this.parent;
	        let depth = 1;
	        while (ptr !== AppElement.Root) {
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
	        this.components = null;
	        this.boundingBox = null;
	        this.children = null;
	        this.parent = null;
	    }
	    destroyFromParent() {
	        //don't fire handlers n stuff
	    }
	    /*** Accessors ***/
	    isRoot() {
	        return this === AppElement.Root;
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
	}
	/*** Static ***/
	AppElement.Root = null;
	exports.AppElement = AppElement;


/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CommandType;
	(function (CommandType) {
	    CommandType[CommandType["Create"] = 0] = "Create";
	    CommandType[CommandType["Destroy"] = 1] = "Destroy";
	    CommandType[CommandType["SetRect"] = 2] = "SetRect";
	    CommandType[CommandType["SetImage"] = 3] = "SetImage";
	    CommandType[CommandType["SetDimensions"] = 4] = "SetDimensions";
	    CommandType[CommandType["SetTransform"] = 5] = "SetTransform";
	    CommandType[CommandType["SetParent"] = 6] = "SetParent";
	    CommandType[CommandType["SetSiblingIndex"] = 7] = "SetSiblingIndex";
	    CommandType[CommandType["PaintBackground"] = 8] = "PaintBackground";
	    CommandType[CommandType["SetText"] = 9] = "SetText";
	    CommandType[CommandType["UpdateInput"] = 10] = "UpdateInput";
	})(CommandType = exports.CommandType || (exports.CommandType = {}));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const math_util_1 = __webpack_require__(33);
	/*
	 * Layout
	 * [ a  c  tx ]
	 * [ b  d  ty ]
	 * [ 0  0  1  ]
	 *
	 *
	 * */
	class Matrix3x3 {
	    constructor() {
	        this.a = this.d = 1;
	        this.b = this.c = this.tx = this.ty = 0;
	    }
	    set(a, b, c, d, tx, ty) {
	        this.a = a;
	        this.b = b;
	        this.c = c;
	        this.d = d;
	        this.tx = tx;
	        this.ty = ty;
	        return this;
	    }
	    identity() {
	        this.a = this.d = 1;
	        this.b = this.c = this.tx = this.ty = 0;
	        return this;
	    }
	    translate(point) {
	        const x = point.x;
	        const y = point.y;
	        this.tx += x * this.a + y * this.c;
	        this.ty += x * this.b + y * this.d;
	        return this;
	    }
	    scale(scale, center = null) {
	        if (center) {
	            this.translate(center);
	        }
	        this.a *= scale.x;
	        this.b *= scale.x;
	        this.c *= scale.y;
	        this.d *= scale.y;
	        if (center) {
	            this.translate(new vector2_1.Vector2(center.x * -1, center.y * -1));
	        }
	        return this;
	    }
	    //todo should translation be in here?
	    rotate(angle, center = null, angleUnit = math_util_1.AngleUnit.Radians) {
	        if (angleUnit === math_util_1.AngleUnit.Degrees) {
	            angle *= math_util_1.MathUtil.DegreesToRadians;
	        }
	        if (center) {
	            var x = center.x;
	            var y = center.y;
	        }
	        else {
	            var x = this.tx;
	            var y = this.ty;
	        }
	        const cos = Math.cos(angle);
	        const sin = Math.sin(angle);
	        const tx = x - x * cos + y * sin;
	        const ty = y - x * sin - y * cos;
	        const a = this.a;
	        const b = this.b;
	        const c = this.c;
	        const d = this.d;
	        this.a = cos * a + sin * c;
	        this.b = cos * b + sin * d;
	        this.c = -sin * a + cos * c;
	        this.d = -sin * b + cos * d;
	        this.tx += tx * a + ty * c;
	        this.ty += tx * b + ty * d;
	        return this;
	    }
	    multiply(mx) {
	        const a1 = this.a;
	        const b1 = this.b;
	        const c1 = this.c;
	        const d1 = this.d;
	        const a2 = mx.a;
	        const b2 = mx.c;
	        const c2 = mx.b;
	        const d2 = mx.d;
	        const tx2 = mx.tx;
	        const ty2 = mx.ty;
	        this.a = a2 * a1 + c2 * c1;
	        this.c = b2 * a1 + d2 * c1;
	        this.b = a2 * b1 + c2 * d1;
	        this.d = b2 * b1 + d2 * d1;
	        this.tx += tx2 * a1 + ty2 * c1;
	        this.ty += tx2 * b1 + ty2 * d1;
	        return this;
	    }
	    invert() {
	        var a = this.a, b = this.b, c = this.c, d = this.d, tx = this.tx, ty = this.ty, det = a * d - b * c, res = null;
	        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
	            this.a = d / det;
	            this.b = -b / det;
	            this.c = -c / det;
	            this.d = a / det;
	            this.tx = (c * ty - d * tx) / det;
	            this.ty = (b * tx - a * ty) / det;
	            res = this;
	        }
	        return res;
	    }
	    isIdentity() {
	        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1
	            && this.tx === 0 && this.ty === 0;
	    }
	    transformDirection(point) {
	        return point.rotate(this.getRotation());
	    }
	    transformPoint(point) {
	        const x = point.x;
	        const y = point.y;
	        point.x = x * this.a + y * this.c + this.tx;
	        point.y = x * this.b + y * this.d + this.ty;
	        return point;
	    }
	    transformPointNew(point) {
	        const x = point.x;
	        const y = point.y;
	        return new vector2_1.Vector2(x * this.a + y * this.c + this.tx, x * this.b + y * this.d + this.ty);
	    }
	    inverseTransform(point) {
	        const a = this.a;
	        const b = this.b;
	        const c = this.c;
	        const d = this.d;
	        const tx = this.tx;
	        const ty = this.ty;
	        const det = a * d - b * c;
	        let res = null;
	        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
	            const x = point.x - this.tx;
	            const y = point.y - this.ty;
	            res = new vector2_1.Vector2((x * d - y * c) / det, (y * a - x * b) / det);
	        }
	        return res;
	    }
	    // public decompose() {
	    //     var a = this.a;
	    //     var b = this.b;
	    //     var c = this.c;
	    //     var d = this.d;
	    //     var det = a * d - b * c;
	    //     var sqrt = Math.sqrt;
	    //     var degrees = 180 / Math.PI;
	    //     var rotate;
	    //     var scale = new Vector2();
	    //
	    //     if (a !== 0 || b !== 0) {
	    //         var r = sqrt(a * a + b * b);
	    //         rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
	    //         scale.x = r;
	    //         scale.y = det / r;
	    //     } else if (c !== 0 || d !== 0) {
	    //         var s = sqrt(c * c + d * d);
	    //         rotate = Math.asin(c / s) * (d > 0 ? 1 : -1);
	    //         scale.x = det / s;
	    //         scale.y = s;
	    //     } else { // a = b = c = d = 0
	    //         rotate = 0;
	    //         scale.x = 0;
	    //         scale.y = 0;
	    //     }
	    //     return {
	    //         translation: new Vector2(this.tx, this.ty),
	    //         rotation: rotate * degrees,
	    //         scale: scale
	    //     };
	    // }
	    getTranslation(out = null) {
	        out = out || new vector2_1.Vector2();
	        out.x = this.tx;
	        out.y = this.ty;
	        return out;
	    }
	    getScale(out = null) {
	        var a = this.a;
	        var b = this.b;
	        var c = this.c;
	        var d = this.d;
	        var det = a * d - b * c;
	        out = out || new vector2_1.Vector2();
	        if (a !== 0 || b !== 0) {
	            var r = Math.sqrt(a * a + b * b);
	            out.x = r;
	            out.y = det / r;
	        }
	        else if (c !== 0 || d !== 0) {
	            var s = Math.sqrt(c * c + d * d);
	            out.x = det / s;
	            out.y = s;
	        }
	        else {
	            out.x = 0;
	            out.y = 0;
	        }
	        return out;
	    }
	    getRotation(unitType = math_util_1.AngleUnit.Radians) {
	        var a = this.a;
	        var b = this.b;
	        var c = this.c;
	        var d = this.d;
	        var rotation = 0;
	        if (a !== 0 || b !== 0) {
	            var r = Math.sqrt(a * a + b * b);
	            rotation = Math.acos(a / r) * (b > 0 ? 1 : -1);
	        }
	        else if (c !== 0 || d !== 0) {
	            var s = Math.sqrt(c * c + d * d);
	            rotation = Math.asin(c / s) * (d > 0 ? 1 : -1);
	        }
	        else {
	            rotation = 0;
	        }
	        return unitType === math_util_1.AngleUnit.Degrees ? rotation * math_util_1.MathUtil.RadiansToDegrees : rotation;
	    }
	    equals(other) {
	        return other.a === this.a && other.b === this.b && other.c === this.c &&
	            other.d === this.d && other.tx === this.tx && other.ty === this.ty;
	    }
	    clone() {
	        return new Matrix3x3().set(this.a, this.b, this.c, this.d, this.tx, this.ty);
	    }
	    static createIdentity() {
	        return new Matrix3x3();
	    }
	    static createRotation(radians) {
	        const result = new Matrix3x3();
	        const a = result.a;
	        const b = result.b;
	        const c = result.c;
	        const d = result.d;
	        const cos = Math.cos(radians);
	        const sin = Math.sin(radians);
	        result.a = cos * a + sin * c;
	        result.b = cos * b + sin * d;
	        result.c = -sin * a + cos * c;
	        result.d = -sin * b + cos * d;
	        return result;
	    }
	    static createScale(xScale, yScale) {
	        const result = new Matrix3x3();
	        result.a = xScale;
	        result.d = yScale;
	        return result;
	    }
	    static createTranslation(x, y) {
	        const result = new Matrix3x3();
	        result.tx = x;
	        result.ty = y;
	        return result;
	    }
	}
	exports.Matrix3x3 = Matrix3x3;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AngleUnit;
	(function (AngleUnit) {
	    AngleUnit[AngleUnit["Radians"] = 0] = "Radians";
	    AngleUnit[AngleUnit["Degrees"] = 1] = "Degrees";
	})(AngleUnit = exports.AngleUnit || (exports.AngleUnit = {}));
	exports.MathUtil = {
	    RadiansToDegrees: 57.2957795130823,
	    DegreesToRadians: 0.01745329251994,
	    E: Math.E,
	    Log2E: Math.LOG2E,
	    Log10E: Math.LOG10E,
	    Pi: Math.PI,
	    PiOver2: Math.PI / 2.0,
	    PiOver4: Math.PI / 4.0,
	    TwoPi: Math.PI * 2.0,
	    clamp(value, min, max) {
	        value = (value > max) ? max : value;
	        value = (value < min) ? min : value;
	        return value;
	    },
	    clamp01(value) {
	        value = (value > 1) ? 1 : value;
	        value = (value < 0) ? 0 : value;
	        return value;
	    },
	    distance(value1, value2) {
	        return Math.abs(value1 - value2);
	    },
	    barycentric(value1, value2, value3, amount1, amount2) {
	        return value1 + (value2 - value1) * amount1 + (value3 - value1) * amount2;
	    },
	    catmullRom(value1, value2, value3, value4, amount) {
	        // Using formula from http://www.mvps.org/directx/articles/catmull/
	        const amountSquared = amount * amount;
	        const amountCubed = amountSquared * amount;
	        return (0.5 * (2.0 * value2 +
	            (value3 - value1) * amount +
	            (2.0 * value1 - 5.0 * value2 + 4.0 * value3 - value4) * amountSquared +
	            (3.0 * value2 - value1 - 3.0 * value3 + value4) * amountCubed));
	    },
	    hermite(value1, tangent1, value2, tangent2, amount) {
	        let v1 = value1;
	        let v2 = value2;
	        let t1 = tangent1;
	        let t2 = tangent2;
	        let s = amount;
	        let result = 0;
	        let sCubed = s * s * s;
	        let sSquared = s * s;
	        if (amount == 0)
	            result = value1;
	        else if (amount == 1)
	            result = value2;
	        else
	            result = (2 * v1 - 2 * v2 + t2 + t1) * sCubed +
	                (3 * v2 - 3 * v1 - 2 * t1 - t2) * sSquared +
	                t1 * s +
	                v1;
	        return result;
	    },
	    lerp(value1, value2, amount) {
	        return ((1 - amount) * value1) + (value2 * amount);
	    },
	    smoothStep(value1, value2, amount) {
	        return this.hermite(value1, 0, value2, 0, this.clamp01(amount));
	    },
	    wrapAngle(angle) {
	        const PI = Math.PI;
	        const TwoPI = PI * 2;
	        if ((angle > -PI) && (angle <= PI)) {
	            return angle;
	        }
	        angle %= TwoPI;
	        if (angle <= -PI) {
	            return angle + TwoPI;
	        }
	        if (angle > PI) {
	            return angle - TwoPI;
	        }
	        return angle;
	    },
	    isPowerOf2(value) {
	        var int = value | 0;
	        if (value !== int)
	            return false;
	        return (int > 0) && ((int & (int - 1)) == 0);
	    }
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const rectangle_1 = __webpack_require__(35);
	class BoundingBox {
	    constructor(appElement) {
	        this.appElement = appElement;
	        this.topLeft = new vector2_1.Vector2();
	        this.topRight = new vector2_1.Vector2();
	        this.bottomLeft = new vector2_1.Vector2();
	        this.bottomRight = new vector2_1.Vector2();
	        this.points = [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
	        this.update();
	    }
	    update() {
	        const element = this.appElement;
	        const wm = element.getWorldMatrix();
	        const scale = wm.getScale();
	        const rotation = wm.getRotation() * (Math.PI / 180);
	        const theta = -rotation;
	        const position = element.getLocalPosition();
	        const pivot = element.getPivot();
	        const w = element.getWidth() * scale.x;
	        const h = element.getHeight() * scale.y;
	        const pivotPoint = new vector2_1.Vector2(pivot.x * w, pivot.y * h);
	        const parent = element.getParent();
	        if (parent) {
	            const p = parent.getPosition();
	            //maybe this needs to be done for all parents and get the result?
	            position.x = p.x + (position.x * scale.x);
	            position.y = p.y + (position.y * scale.y);
	        }
	        //should maybe rotate around parent position
	        //todo - when moving something, cant just add to its position, need to do equivelent of Transform.translate() or Transform.MoveTo()
	        // public void Translate(Vector3 translation, [DefaultValue("Space.Self")] Space relativeTo)
	        //     {
	        //         if (relativeTo == Space.World)
	        //             this.position += translation;
	        //         else
	        //             this.position += this.TransformDirection(translation);
	        //     }
	        this.topLeft.set(0, 0).rotateAround(theta, pivotPoint).addVector(position);
	        this.topRight.set(w, 0).rotateAround(theta, pivotPoint).addVector(position);
	        this.bottomRight.set(w, h).rotateAround(theta, pivotPoint).addVector(position);
	        this.bottomLeft.set(0, h).rotateAround(theta, pivotPoint).addVector(position);
	    }
	    containsPoint(point) {
	        const points = this.points;
	        let c = false;
	        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
	            const pointI = points[i];
	            const pointJ = points[j];
	            if (((pointI.y >= point.y) !== (pointJ.y >= point.y)) &&
	                (point.x <= (pointJ.x - pointI.x) * (point.y - pointI.y) / (pointJ.y - pointI.y) + pointI.x)) {
	                c = !c;
	            }
	        }
	        return c;
	    }
	    getAxisAlignedBoundingBox() {
	        let minX = this.topLeft.x;
	        let minY = this.topLeft.y;
	        let maxX = this.topLeft.x;
	        let maxY = this.topLeft.y;
	        for (let i = 0; i < this.points.length; i++) {
	            const v = this.points[i];
	            if (v.x > maxX) {
	                maxX = v.x;
	            }
	            if (v.x < minX) {
	                minX = v.x;
	            }
	            if (v.y > maxY) {
	                maxY = v.y;
	            }
	            if (v.y < minY) {
	                minY = v.y;
	            }
	        }
	        return new rectangle_1.Rectangle().setFromPoints(minX, minY, maxX, maxY);
	    }
	}
	exports.BoundingBox = BoundingBox;


/***/ },
/* 35 */
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
	    setFromPoints(minX, minY, maxX, maxY) {
	        this.x = minX;
	        this.y = minY;
	        this.width = maxX - minX;
	        this.height = maxY - minY;
	        return this;
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const e_command_type_1 = __webpack_require__(31);
	const event_emitter_1 = __webpack_require__(37);
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementParentChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementParentChanged(appElement, newParent, oldParent) { }
	}
	exports.AppElementParentChanged = AppElementParentChanged;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementIndexChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementIndexChanged(appElement, index, oldIndex) { }
	}
	exports.AppElementIndexChanged = AppElementIndexChanged;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	const e_lifecycle_flags_1 = __webpack_require__(30);
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
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_1 = __webpack_require__(43);
	const evt_asset_created_1 = __webpack_require__(44);
	//asset is just a file pointer with an icon and extension and defines an inspector
	//dragging an asset onto a field in the inspector just loads the asset
	//an importer is just an operation applied to the data before writing it to disk
	//there is only 1 kind of asset, no subclasses
	//in terms of adding to assets (prefabs mostly, maybe animations)
	//this can be done by the asset item itself and not via the project interface
	//scripts need to be tracked as assets also for scene dependencies
	//but they aren't (probably) loaded in the same way other assets are
	//runtime asset bundle -> database of asset data with function for loading them unrelated to the file system
	const fs = __webpack_require__(45);
	const File = __webpack_require__(46);
	const Path = __webpack_require__(47);
	const globby = __webpack_require__(48);
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AssetCreated extends runtime_event_1.RuntimeEvent {
	    onAssetCreated(asset) { }
	}
	exports.AssetCreated = AssetCreated;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("mz/fs");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("globby");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(40);
	const color_1 = __webpack_require__(50);
	const e_command_type_1 = __webpack_require__(31);
	const expose_as_1 = __webpack_require__(51);
	const cerialize_1 = __webpack_require__(52);
	let BackgroundComponent = class BackgroundComponent extends component_1.Component {
	    constructor() {
	        super(...arguments);
	        this._color = color_1.Color.White;
	    }
	    get color() {
	        return this._color;
	    }
	    set color(color) {
	        this._color.r = color.r;
	        this._color.g = color.g;
	        this._color.b = color.b;
	        this._color.a = color.a;
	        Runtime.sendCommand(e_command_type_1.CommandType.PaintBackground, { id: this.appElement.id, color: this._color });
	    }
	    onEnabled() {
	        Runtime.sendCommand(e_command_type_1.CommandType.PaintBackground, { id: this.appElement.id, color: this._color });
	    }
	    onDisabled() {
	        Runtime.sendCommand(e_command_type_1.CommandType.PaintBackground, { id: this.appElement.id, color: null });
	    }
	    static OnDeserialized(instance, json) {
	        instance.color = json.color;
	    }
	    serialize() {
	        return {
	            color: this.color.copyTo({})
	        };
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.inspector(color_1.Color),
	    cerialize_1.serializeAs(color_1.Color)
	], BackgroundComponent.prototype, "_color", void 0);
	BackgroundComponent = tslib_1.__decorate([
	    component_1.component("Paint/Background")
	], BackgroundComponent);
	exports.BackgroundComponent = BackgroundComponent;


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Color {
	    constructor(r = 0, g = 0, b = 0, a = 1) {
	        this.r = r;
	        this.g = g;
	        this.b = b;
	        this.a = a;
	    }
	    copyTo(input) {
	        input.r = this.r;
	        input.g = this.g;
	        input.b = this.b;
	        input.a = this.a;
	        return input;
	    }
	    static get Black() { return new Color(0, 0, 0, 255); }
	    static get Blue() { return new Color(0, 0, 255, 255); }
	    static get Clear() { return new Color(0, 0, 0, 0); }
	    static get Cyan() { return new Color(0, 255, 255, 255); }
	    static get Gray() { return new Color(0.5, 0.5, 0.5, 255); }
	    static get Green() { return new Color(0, 255, 0, 255); }
	    static get Magenta() { return new Color(255, 0, 255, 255); }
	    static get Red() { return new Color(255, 0, 0, 255); }
	    static get Yellow() { return new Color(255, (0.92 * 255 | 0), (0.06 * 255 | 0), 255); }
	    static get White() { return new Color(255, 255, 255, 255); }
	}
	exports.Color = Color;


/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	var win = null;
	try {
	    win = window;
	}
	catch (e) {
	    win = global;
	}
	//some other modules might want access to the serialization meta data, expose it here
	var TypeMap = win.__CerializeTypeMap = new Map();
	exports.__TypeMap = TypeMap;
	//convert strings like my_camel_string to myCamelString
	function CamelCase(str) {
	    var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);
	    return str.replace(STRING_CAMELIZE_REGEXP, function (match, separator, chr) {
	        return chr ? chr.toUpperCase() : '';
	    }).replace(/^([A-Z])/, function (match, separator, chr) {
	        return match.toLowerCase();
	    });
	}
	exports.CamelCase = CamelCase;
	//convert strings like MyCamelString to my_camel_string
	function SnakeCase(str) {
	    var STRING_DECAMELIZE_REGEXP = (/([a-z\d])([A-Z])/g);
	    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
	}
	exports.SnakeCase = SnakeCase;
	//convert strings like myCamelCase to my_camel_case
	function UnderscoreCase(str) {
	    var STRING_UNDERSCORE_REGEXP_1 = (/([a-z\d])([A-Z]+)/g);
	    var STRING_UNDERSCORE_REGEXP_2 = (/\-|\s+/g);
	    return str.replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2').replace(STRING_UNDERSCORE_REGEXP_2, '_').toLowerCase();
	}
	exports.UnderscoreCase = UnderscoreCase;
	//convert strings like my_camelCase to my-camel-case
	function DashCase(str) {
	    var STRING_DASHERIZE_REGEXP = (/([a-z\d])([A-Z])/g);
	    str = str.replace(/_/g, '-');
	    return str.replace(STRING_DASHERIZE_REGEXP, '$1-$2').toLowerCase();
	}
	exports.DashCase = DashCase;
	//gets meta data for a key name, creating a new meta data instance
	//if the input array doesn't already define one for the given keyName
	function getMetaData(array, keyName) {
	    for (var i = 0; i < array.length; i++) {
	        if (array[i].keyName === keyName) {
	            return array[i];
	        }
	    }
	    array.push(new MetaData(keyName));
	    return array[array.length - 1];
	}
	//helper for grabbing the type and keyname from a multi-type input variable
	function getTypeAndKeyName(keyNameOrType, keyName) {
	    var type = null;
	    var key = null;
	    if (typeof keyNameOrType === "string") {
	        key = keyNameOrType;
	    }
	    else if (keyNameOrType && typeof keyNameOrType === "function" || typeof keyNameOrType === "object") {
	        type = keyNameOrType;
	        key = keyName;
	    }
	    return { key: key, type: type };
	}
	//todo instance.constructor.prototype.__proto__ === parent class, maybe use this?
	//because types are stored in a JS Map keyed by constructor, serialization is not inherited by default
	//keeping this seperate by default also allows sub classes to serialize differently than their parent
	function inheritSerialization(parentType) {
	    return function (childType) {
	        var parentMetaData = TypeMap.get(parentType) || [];
	        var childMetaData = TypeMap.get(childType) || [];
	        for (var i = 0; i < parentMetaData.length; i++) {
	            var keyName = parentMetaData[i].keyName;
	            if (!MetaData.hasKeyName(childMetaData, keyName)) {
	                childMetaData.push(MetaData.clone(parentMetaData[i]));
	            }
	        }
	        TypeMap.set(childType, childMetaData);
	    };
	}
	exports.inheritSerialization = inheritSerialization;
	//an untyped serialization property annotation, gets existing meta data for the target or creates
	//a new one and assigns the serialization key for that type in the meta data
	function serialize(target, keyName) {
	    if (!target || !keyName)
	        return;
	    var metaDataList = TypeMap.get(target.constructor) || [];
	    var metadata = getMetaData(metaDataList, keyName);
	    metadata.serializedKey = keyName;
	    TypeMap.set(target.constructor, metaDataList);
	}
	exports.serialize = serialize;
	//an untyped deserialization property annotation, gets existing meta data for the target or creates
	//a new one and assigns the deserialization key for that type in the meta data
	function deserialize(target, keyName) {
	    if (!target || !keyName)
	        return;
	    var metaDataList = TypeMap.get(target.constructor) || [];
	    var metadata = getMetaData(metaDataList, keyName);
	    metadata.deserializedKey = keyName;
	    TypeMap.set(target.constructor, metaDataList);
	}
	exports.deserialize = deserialize;
	//this combines @serialize and @deserialize as defined above
	function autoserialize(target, keyName) {
	    if (!target || !keyName)
	        return;
	    var metaDataList = TypeMap.get(target.constructor) || [];
	    var metadata = getMetaData(metaDataList, keyName);
	    metadata.serializedKey = keyName;
	    metadata.deserializedKey = keyName;
	    TypeMap.set(target.constructor, metaDataList);
	}
	exports.autoserialize = autoserialize;
	//We dont actually need the type to serialize but I like the consistency with deserializeAs which definitely does
	//serializes a type using 1.) a custom key name, 2.) a custom type, or 3.) both custom key and type
	function serializeAs(keyNameOrType, keyName) {
	    if (!keyNameOrType)
	        return;
	    var _a = getTypeAndKeyName(keyNameOrType, keyName), key = _a.key, type = _a.type;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        metadata.serializedKey = (key) ? key : actualKeyName;
	        metadata.serializedType = type;
	        //this allows the type to be a stand alone function instead of a class
	        if (type !== Date && type !== RegExp && !TypeMap.get(type) && typeof type === "function") {
	            metadata.serializedType = {
	                Serialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.serializeAs = serializeAs;
	//Supports serializing of dictionary-like map objects, ie: { x: {}, y: {} }
	function serializeIndexable(type, keyName) {
	    if (!type)
	        return;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        metadata.serializedKey = (keyName) ? keyName : actualKeyName;
	        metadata.serializedType = type;
	        metadata.indexable = true;
	        //this allows the type to be a stand alone function instead of a class
	        if (type !== Date && type !== RegExp && !TypeMap.get(type) && typeof type === "function") {
	            metadata.serializedType = {
	                Serialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.serializeIndexable = serializeIndexable;
	//deserializes a type using 1.) a custom key name, 2.) a custom type, or 3.) both custom key and type
	function deserializeAs(keyNameOrType, keyName) {
	    if (!keyNameOrType)
	        return;
	    var _a = getTypeAndKeyName(keyNameOrType, keyName), key = _a.key, type = _a.type;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        metadata.deserializedKey = (key) ? key : actualKeyName;
	        metadata.deserializedType = type;
	        //this allows the type to be a stand alone function instead of a class
	        if (!TypeMap.get(type) && type !== Date && type !== RegExp && typeof type === "function") {
	            metadata.deserializedType = {
	                Deserialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.deserializeAs = deserializeAs;
	//Supports deserializing of dictionary-like map objects, ie: { x: {}, y: {} }
	function deserializeIndexable(type, keyName) {
	    if (!type)
	        return;
	    var key = keyName;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        metadata.deserializedKey = (key) ? key : actualKeyName;
	        metadata.deserializedType = type;
	        metadata.indexable = true;
	        if (!TypeMap.get(type) && type !== Date && type !== RegExp && typeof type === "function") {
	            metadata.deserializedType = {
	                Deserialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.deserializeIndexable = deserializeIndexable;
	//serializes and deserializes a type using 1.) a custom key name, 2.) a custom type, or 3.) both custom key and type
	function autoserializeAs(keyNameOrType, keyName) {
	    if (!keyNameOrType)
	        return;
	    var _a = getTypeAndKeyName(keyNameOrType, keyName), key = _a.key, type = _a.type;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        var serialKey = (key) ? key : actualKeyName;
	        metadata.deserializedKey = serialKey;
	        metadata.deserializedType = type;
	        metadata.serializedKey = serialKey;
	        metadata.serializedType = type;
	        if (!TypeMap.get(type) && type !== Date && type !== RegExp && typeof type === "function") {
	            metadata.deserializedType = {
	                Deserialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.autoserializeAs = autoserializeAs;
	//Supports serializing/deserializing of dictionary-like map objects, ie: { x: {}, y: {} }
	function autoserializeIndexable(type, keyName) {
	    if (!type)
	        return;
	    var key = keyName;
	    return function (target, actualKeyName) {
	        if (!target || !actualKeyName)
	            return;
	        var metaDataList = TypeMap.get(target.constructor) || [];
	        var metadata = getMetaData(metaDataList, actualKeyName);
	        var serialKey = (key) ? key : actualKeyName;
	        metadata.deserializedKey = serialKey;
	        metadata.deserializedType = type;
	        metadata.serializedKey = serialKey;
	        metadata.serializedType = type;
	        metadata.indexable = true;
	        if (!TypeMap.get(type) && type !== Date && type !== RegExp && typeof type === "function") {
	            metadata.deserializedType = {
	                Deserialize: type
	            };
	        }
	        TypeMap.set(target.constructor, metaDataList);
	    };
	}
	exports.autoserializeIndexable = autoserializeIndexable;
	//helper class to contain serialization meta data for a property, each property
	//in a type tagged with a serialization annotation will contain an array of these
	//objects each describing one property
	var MetaData = (function () {
	    function MetaData(keyName) {
	        this.keyName = keyName;
	        this.serializedKey = null;
	        this.deserializedKey = null;
	        this.deserializedType = null;
	        this.serializedType = null;
	        this.indexable = false;
	    }
	    //checks for a key name in a meta data array
	    MetaData.hasKeyName = function (metadataArray, key) {
	        for (var i = 0; i < metadataArray.length; i++) {
	            if (metadataArray[i].keyName === key)
	                return true;
	        }
	        return false;
	    };
	    //clone a meta data instance, used for inheriting serialization properties
	    MetaData.clone = function (data) {
	        var metadata = new MetaData(data.keyName);
	        metadata.deserializedKey = data.deserializedKey;
	        metadata.serializedKey = data.serializedKey;
	        metadata.serializedType = data.serializedType;
	        metadata.deserializedType = data.deserializedType;
	        metadata.indexable = data.indexable;
	        return metadata;
	    };
	    return MetaData;
	}());
	//merges two primitive objects recursively, overwriting or defining properties on
	//`instance` as they defined in `json`. Works on objects, arrays and primitives
	function mergePrimitiveObjects(instance, json) {
	    if (!json)
	        return instance; //if we dont have a json value, just use what the instance defines already
	    if (!instance)
	        return json; //if we dont have an instance value, just use the json
	    //for each key in the input json we need to do a merge into the instance object
	    Object.keys(json).forEach(function (key) {
	        var transformedKey = key;
	        if (typeof deserializeKeyTransform === "function") {
	            transformedKey = deserializeKeyTransform(key);
	        }
	        var jsonValue = json[key];
	        var instanceValue = instance[key];
	        if (Array.isArray(jsonValue)) {
	            //in the array case we reuse the items that exist already where possible
	            //so reset the instance array length (or make it an array if it isnt)
	            //then call mergePrimitiveObjects recursively
	            instanceValue = Array.isArray(instanceValue) ? instanceValue : [];
	            instanceValue.length = jsonValue.length;
	            for (var i = 0; i < instanceValue.length; i++) {
	                instanceValue[i] = mergePrimitiveObjects(instanceValue[i], jsonValue[i]);
	            }
	        }
	        else if (jsonValue && typeof jsonValue === "object") {
	            if (!instanceValue || typeof instanceValue !== "object") {
	                instanceValue = {};
	            }
	            instanceValue = mergePrimitiveObjects(instanceValue, jsonValue);
	        }
	        else {
	            //primitive case, just use straight assignment
	            instanceValue = jsonValue;
	        }
	        instance[transformedKey] = instanceValue;
	    });
	    return instance;
	}
	//takes an array defined in json and deserializes it into an array that ist stuffed with instances of `type`.
	//any instances already defined in `arrayInstance` will be re-used where possible to maintain referential integrity.
	function deserializeArrayInto(source, type, arrayInstance) {
	    if (!Array.isArray(arrayInstance)) {
	        arrayInstance = new Array(source.length);
	    }
	    //extend or truncate the target array to match the source array
	    arrayInstance.length = source.length;
	    for (var i = 0; i < source.length; i++) {
	        arrayInstance[i] = DeserializeInto(source[i], type, arrayInstance[i] || new type());
	    }
	    return arrayInstance;
	}
	//takes an object defined in json and deserializes it into a `type` instance or populates / overwrites
	//properties on `instance` if it is provided.
	function deserializeObjectInto(json, type, instance) {
	    var metadataArray = TypeMap.get(type);
	    //if we dont have an instance we need to create a new `type`
	    if (instance === null || instance === void 0) {
	        if (type) {
	            instance = new type();
	        }
	    }
	    //if we dont have any meta data and we dont have a type to inflate, just merge the objects
	    if (instance && !type && !metadataArray) {
	        return mergePrimitiveObjects(instance, json);
	    }
	    //if we dont have meta data just bail out and keep what we have
	    if (!metadataArray) {
	        invokeDeserializeHook(instance, json, type);
	        return instance;
	    }
	    //for each property in meta data, try to hydrate that property with its corresponding json value
	    for (var i = 0; i < metadataArray.length; i++) {
	        var metadata = metadataArray[i];
	        //these are not the droids we're looking for (to deserialize), moving along
	        if (!metadata.deserializedKey)
	            continue;
	        var serializedKey = metadata.deserializedKey;
	        if (metadata.deserializedKey === metadata.keyName) {
	            if (typeof deserializeKeyTransform === "function") {
	                serializedKey = deserializeKeyTransform(metadata.keyName);
	            }
	        }
	        var source = json[serializedKey];
	        if (source === void 0)
	            continue;
	        var keyName = metadata.keyName;
	        //if there is a custom deserialize function, use that
	        if (metadata.deserializedType && typeof metadata.deserializedType.Deserialize === "function") {
	            instance[keyName] = metadata.deserializedType.Deserialize(source);
	        }
	        else if (Array.isArray(source)) {
	            if (metadata.deserializedType) {
	                instance[keyName] = deserializeArrayInto(source, metadata.deserializedType, instance[keyName]);
	            }
	            else {
	                instance[keyName] = deserializeArray(source, null);
	            }
	        }
	        else if ((typeof source === "string" || source instanceof Date) && metadata.deserializedType === Date) {
	            var deserializedDate = new Date(source);
	            if (instance[keyName] instanceof Date) {
	                instance[keyName].setTime(deserializedDate.getTime());
	            }
	            else {
	                instance[keyName] = deserializedDate;
	            }
	        }
	        else if (typeof source === "string" && type === RegExp) {
	            instance[keyName] = new RegExp(source);
	        }
	        else if (source && typeof source === "object") {
	            if (metadata.indexable) {
	                instance[keyName] = deserializeIndexableObjectInto(source, metadata.deserializedType, instance[keyName]);
	            }
	            else {
	                instance[keyName] = deserializeObjectInto(source, metadata.deserializedType, instance[keyName]);
	            }
	        }
	        else {
	            instance[keyName] = source;
	        }
	    }
	    //invoke our after deserialized callback if provided
	    invokeDeserializeHook(instance, json, type);
	    return instance;
	}
	//deserializes a bit of json into a `type`
	function Deserialize(json, type) {
	    if (Array.isArray(json)) {
	        return deserializeArray(json, type);
	    }
	    else if (json && typeof json === "object") {
	        return deserializeObject(json, type);
	    }
	    else if ((typeof json === "string" || json instanceof Date) && type === Date) {
	        return new Date(json);
	    }
	    else if (typeof json === "string" && type === RegExp) {
	        return new RegExp(json);
	    }
	    else {
	        return json;
	    }
	}
	exports.Deserialize = Deserialize;
	//takes some json, a type, and a target object and deserializes the json into that object
	function DeserializeInto(source, type, target) {
	    if (Array.isArray(source)) {
	        return deserializeArrayInto(source, type, target || []);
	    }
	    else if (source && typeof source === "object") {
	        return deserializeObjectInto(source, type, target || new type());
	    }
	    else {
	        return target || (type && new type()) || null;
	    }
	}
	exports.DeserializeInto = DeserializeInto;
	//deserializes an array of json into an array of `type`
	function deserializeArray(source, type) {
	    var retn = new Array(source.length);
	    for (var i = 0; i < source.length; i++) {
	        retn[i] = Deserialize(source[i], type);
	    }
	    return retn;
	}
	function invokeDeserializeHook(instance, json, type) {
	    if (type && typeof (type).OnDeserialized === "function") {
	        type.OnDeserialized(instance, json);
	    }
	}
	function invokeSerializeHook(instance, json) {
	    if (typeof (instance.constructor).OnSerialized === "function") {
	        (instance.constructor).OnSerialized(instance, json);
	    }
	}
	//deserialize a bit of json into an instance of `type`
	function deserializeObject(json, type) {
	    var metadataArray = TypeMap.get(type);
	    //if we dont have meta data, just decode the json and use that
	    if (!metadataArray) {
	        var inst = null;
	        if (!type) {
	            inst = JSON.parse(JSON.stringify(json));
	        }
	        else {
	            inst = new type(); //todo this probably wrong
	            invokeDeserializeHook(inst, json, type);
	        }
	        return inst;
	    }
	    var instance = new type();
	    //for each tagged property on the source type, try to deserialize it
	    for (var i = 0; i < metadataArray.length; i++) {
	        var metadata = metadataArray[i];
	        if (!metadata.deserializedKey)
	            continue;
	        var serializedKey = metadata.deserializedKey;
	        if (metadata.deserializedKey === metadata.keyName) {
	            if (typeof deserializeKeyTransform === "function") {
	                serializedKey = deserializeKeyTransform(metadata.keyName);
	            }
	        }
	        var source = json[serializedKey];
	        var keyName = metadata.keyName;
	        if (source === void 0)
	            continue;
	        //if there is a custom deserialize function, use that
	        if (metadata.deserializedType && typeof metadata.deserializedType.Deserialize === "function") {
	            instance[keyName] = metadata.deserializedType.Deserialize(source);
	        }
	        else if (Array.isArray(source)) {
	            instance[keyName] = deserializeArray(source, metadata.deserializedType || null);
	        }
	        else if ((typeof source === "string" || source instanceof Date) && metadata.deserializedType === Date) {
	            instance[keyName] = new Date(source);
	        }
	        else if (typeof source === "string" && metadata.deserializedType === RegExp) {
	            instance[keyName] = new RegExp(json);
	        }
	        else if (source && typeof source === "object") {
	            if (metadata.indexable) {
	                instance[keyName] = deserializeIndexableObject(source, metadata.deserializedType);
	            }
	            else {
	                instance[keyName] = deserializeObject(source, metadata.deserializedType);
	            }
	        }
	        else {
	            instance[keyName] = source;
	        }
	    }
	    invokeDeserializeHook(instance, json, type);
	    return instance;
	}
	function deserializeIndexableObject(source, type) {
	    var retn = {};
	    //todo apply key transformation here?
	    Object.keys(source).forEach(function (key) {
	        retn[key] = deserializeObject(source[key], type);
	    });
	    return retn;
	}
	function deserializeIndexableObjectInto(source, type, instance) {
	    //todo apply key transformation here?
	    Object.keys(source).forEach(function (key) {
	        instance[key] = deserializeObjectInto(source[key], type, instance[key]);
	    });
	    return instance;
	}
	//take an array and spit out json
	function serializeArray(source, type) {
	    var serializedArray = new Array(source.length);
	    for (var j = 0; j < source.length; j++) {
	        serializedArray[j] = Serialize(source[j], type);
	    }
	    return serializedArray;
	}
	//take an instance of something and try to spit out json for it based on property annotaitons
	function serializeTypedObject(instance, type) {
	    var json = {};
	    var metadataArray;
	    if (type) {
	        metadataArray = TypeMap.get(type);
	    }
	    else {
	        metadataArray = TypeMap.get(instance.constructor);
	    }
	    for (var i = 0; i < metadataArray.length; i++) {
	        var metadata = metadataArray[i];
	        if (!metadata.serializedKey)
	            continue;
	        var serializedKey = metadata.serializedKey;
	        if (metadata.serializedKey === metadata.keyName) {
	            if (typeof serializeKeyTransform === "function") {
	                serializedKey = serializeKeyTransform(metadata.keyName);
	            }
	        }
	        var source = instance[metadata.keyName];
	        if (source === void 0)
	            continue;
	        if (Array.isArray(source)) {
	            json[serializedKey] = serializeArray(source);
	        }
	        else if (metadata.serializedType && typeof metadata.serializedType.Serialize === "function") {
	            //todo -- serializeIndexableObject probably isn't needed because of how serialize works
	            json[serializedKey] = metadata.serializedType.Serialize(source);
	        }
	        else {
	            var value = Serialize(source);
	            if (value !== void 0) {
	                json[serializedKey] = value;
	            }
	        }
	    }
	    invokeSerializeHook(instance, json);
	    return json;
	}
	//take an instance of something and spit out some json
	function Serialize(instance, type) {
	    if (instance === null || instance === void 0)
	        return null;
	    if (Array.isArray(instance)) {
	        return serializeArray(instance, type);
	    }
	    if (type && TypeMap.has(type)) {
	        return serializeTypedObject(instance, type);
	    }
	    if (instance.constructor && TypeMap.has(instance.constructor)) {
	        return serializeTypedObject(instance);
	    }
	    if (instance instanceof Date) {
	        return instance.toISOString();
	    }
	    if (instance instanceof RegExp) {
	        return instance.toString();
	    }
	    if (instance && typeof instance === 'object' || typeof instance === 'function') {
	        var keys = Object.keys(instance);
	        var json = {};
	        for (var i = 0; i < keys.length; i++) {
	            //todo this probably needs a key transform
	            json[keys[i]] = Serialize(instance[keys[i]]);
	        }
	        invokeSerializeHook(instance, json);
	        return json;
	    }
	    return instance;
	}
	exports.Serialize = Serialize;
	function GenericDeserialize(json, type) {
	    return Deserialize(json, type);
	}
	exports.GenericDeserialize = GenericDeserialize;
	function GenericDeserializeInto(json, type, instance) {
	    return DeserializeInto(json, type, instance);
	}
	exports.GenericDeserializeInto = GenericDeserializeInto;
	//these are used for transforming keys from one format to another
	var serializeKeyTransform = null;
	var deserializeKeyTransform = null;
	//setter for deserializing key transform
	function DeserializeKeysFrom(transform) {
	    deserializeKeyTransform = transform;
	}
	exports.DeserializeKeysFrom = DeserializeKeysFrom;
	//setter for serializing key transform
	function SerializeKeysTo(transform) {
	    serializeKeyTransform = transform;
	}
	exports.SerializeKeysTo = SerializeKeysTo;
	//this is kinda dumb but typescript doesnt treat enums as a type, but sometimes you still
	//want them to be serialized / deserialized, this does the trick but must be called after
	//the enum is defined.
	function SerializableEnumeration(e) {
	    e.Serialize = function (x) {
	        return e[x];
	    };
	    e.Deserialize = function (x) {
	        return e[x];
	    };
	}
	exports.SerializableEnumeration = SerializableEnumeration;
	//expose the type map


/***/ },
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_base_1 = __webpack_require__(36);
	const browser_input_1 = __webpack_require__(24);
	const e_command_type_1 = __webpack_require__(31);
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const project_1 = __webpack_require__(42);
	const fsp = __webpack_require__(58);
	const path = __webpack_require__(47);
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
/* 58 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const math_util_1 = __webpack_require__(33);
	const matrix3x3_1 = __webpack_require__(32);
	describe("Vectors", function () {
	    it("should rotate correctly", function () {
	        const v = new vector2_1.Vector2(1, 1);
	        v.rotate(math_util_1.MathUtil.DegreesToRadians * 45);
	        expect(v.x).toBeCloseTo(0, 5);
	        expect(v.y).toBeCloseTo(1.414214, 5);
	        v.x = 5;
	        v.y = 11;
	        v.rotate(math_util_1.MathUtil.DegreesToRadians * 33);
	        expect(v.x).toBeCloseTo(-1.797677, 5);
	        expect(v.y).toBeCloseTo(11.948571, 5);
	    });
	});
	describe("Matrix 3x3", function () {
	    it("should transform a direction", function () {
	        const m = new matrix3x3_1.Matrix3x3();
	        const rad = 33 * math_util_1.MathUtil.DegreesToRadians;
	        m.rotate(45, null, math_util_1.AngleUnit.Degrees);
	        expect(m.getRotation(math_util_1.AngleUnit.Degrees)).toBeCloseTo(45, 1);
	        const v = new vector2_1.Vector2(1, 1);
	        m.transformDirection(v);
	        expect(v.x).toBeCloseTo(0, 5);
	        expect(v.y).toBeCloseTo(1.414214, 5);
	    });
	});


/***/ }
/******/ ]);