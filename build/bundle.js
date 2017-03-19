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
	__webpack_require__(53);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(94);
	__webpack_require__(66);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(99);
	__webpack_require__(85);
	__webpack_require__(100);
	__webpack_require__(81);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(84);
	__webpack_require__(89);
	__webpack_require__(61);
	__webpack_require__(88);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(77);
	__webpack_require__(87);
	__webpack_require__(118);
	__webpack_require__(113);
	__webpack_require__(54);
	__webpack_require__(79);
	__webpack_require__(75);
	__webpack_require__(119);
	__webpack_require__(86);
	__webpack_require__(74);
	__webpack_require__(120);
	__webpack_require__(91);
	__webpack_require__(90);
	__webpack_require__(63);
	__webpack_require__(60);
	__webpack_require__(58);
	__webpack_require__(73);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(97);
	__webpack_require__(125);
	__webpack_require__(95);
	__webpack_require__(126);
	__webpack_require__(24);
	__webpack_require__(51);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(50);
	__webpack_require__(67);
	__webpack_require__(15);
	__webpack_require__(19);
	__webpack_require__(14);
	__webpack_require__(8);
	__webpack_require__(7);
	__webpack_require__(20);
	__webpack_require__(22);
	__webpack_require__(36);
	__webpack_require__(35);
	__webpack_require__(45);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(65);
	__webpack_require__(5);
	__webpack_require__(21);
	__webpack_require__(6);
	__webpack_require__(131);
	__webpack_require__(12);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(13);
	__webpack_require__(93);
	__webpack_require__(38);
	__webpack_require__(132);
	__webpack_require__(121);
	__webpack_require__(62);
	__webpack_require__(64);
	__webpack_require__(23);
	__webpack_require__(3);
	__webpack_require__(56);
	__webpack_require__(52);
	__webpack_require__(11);
	__webpack_require__(43);
	__webpack_require__(42);
	__webpack_require__(108);
	__webpack_require__(82);
	__webpack_require__(29);
	__webpack_require__(2);
	__webpack_require__(44);
	__webpack_require__(70);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(110);
	__webpack_require__(37);
	__webpack_require__(135);
	__webpack_require__(138);
	__webpack_require__(103);
	__webpack_require__(39);
	__webpack_require__(41);
	__webpack_require__(40);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(106);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(105);
	__webpack_require__(32);
	__webpack_require__(144);
	__webpack_require__(31);
	__webpack_require__(26);
	__webpack_require__(34);
	__webpack_require__(25);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(18);
	__webpack_require__(149);
	__webpack_require__(30);
	__webpack_require__(28);
	__webpack_require__(150);
	__webpack_require__(27);
	__webpack_require__(17);
	__webpack_require__(33);
	__webpack_require__(92);
	__webpack_require__(59);
	__webpack_require__(76);
	__webpack_require__(83);
	__webpack_require__(16);
	__webpack_require__(151);
	__webpack_require__(71);
	module.exports = __webpack_require__(72);


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
	const split_pane_1 = __webpack_require__(54);
	const editor_window_frame_1 = __webpack_require__(55);
	const hierarchy_window_1 = __webpack_require__(58);
	const scene_window_1 = __webpack_require__(68);
	const inspector_window_1 = __webpack_require__(73);
	const editor_theme_1 = __webpack_require__(56);
	const asset_window_1 = __webpack_require__(90);
	const editor_html_element_1 = __webpack_require__(19);
	class EditorApplication extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "editor-application" };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("input", { style: "display:none", id: "file-chooser", type: "file" }),
	            Hex.createElement(split_pane_1.SplitPane, { distribution: 0.2 },
	                Hex.createElement(split_pane_1.SplitPane, { axis: 1 /* Horizontal */ },
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(hierarchy_window_1.HierarchyWindow, { title: "Hierarchy", icon: "" })),
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(asset_window_1.AssetWindow, { title: "Assets", icon: "" }))),
	                Hex.createElement(split_pane_1.SplitPane, { distribution: 0.7, axis: 0 /* Vertical */ },
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(scene_window_1.SceneWindow, { title: "Scene", icon: "" })),
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(inspector_window_1.InspectorWindow, { title: "Inspector", icon: "" }))))
	        ];
	    }
	}
	exports.EditorApplication = EditorApplication;
	createStyleSheet(`<style>

	.editor-application {
	    overflow:hidden;
	    width: 100%;
	    height: 100%;
	    background: ${editor_theme_1.WindowColors.backgroundGrey};
	    position: relative;
	}
	</style>`);
	EditorRuntime.start(EditorApplication);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const evt_window_resized_1 = __webpack_require__(21);
	const element_renderer_1 = __webpack_require__(7);
	const util_1 = __webpack_require__(16);
	const editor_html_element_1 = __webpack_require__(19);
	class SplitPaneGutter extends editor_html_element_1.EditorHTMLElement {
	}
	class SplitPane extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	        this.gutterSize = 4;
	    }
	    getDomData() {
	        let classList = "split-pane";
	        if (!this.isVertical()) {
	            classList += " horizontal";
	        }
	        return { tagName: "div", classList };
	    }
	    onWindowResized() {
	        this.computeDimensions();
	    }
	    onRendered() {
	        this.distribution = util_1.clamp01(this.attrs.distribution || 0.5);
	        this.attrs.minSize = this.attrs.minSize || 200;
	        this.content0Node = this.getChildById("content0").getDomNode();
	        this.content1Node = this.getChildById("content1").getDomNode();
	        this.gutterNode = this.getChildById("gutter").getDomNode();
	        this.computeDimensions();
	        EditorRuntime.on(evt_window_resized_1.WindowResized, this);
	        let ticks = 0;
	        const intervalId = setInterval(() => {
	            ticks++;
	            this.computeDimensions();
	            if (ticks > 1000) {
	                clearInterval(intervalId);
	            }
	        }, 16);
	    }
	    onDestroyed() {
	        EditorRuntime.off(evt_window_resized_1.WindowResized, this);
	    }
	    computeDimensions() {
	        if (!this.isRendered)
	            return;
	        this.updateTotalSize();
	        //todo handle case where no children exist
	        if (!this.content0Child) {
	            this.c0Size = 0;
	            this.c1Size = this.totalSize;
	            this.getChildById("gutter").setVisible(false);
	        }
	        if (!this.content1Child) {
	            this.c0Size = this.totalSize;
	            this.c1Size = 0;
	            this.getChildById("gutter").setVisible(false);
	        }
	        if (this.content0Child && this.content1Child) {
	            this.c0Size = (this.totalSize * this.distribution) - (this.gutterSize * 0.5);
	            this.c1Size = this.totalSize - this.c0Size - this.gutterSize;
	            this.getChildById("gutter").setVisible(true);
	        }
	        this.applySizeChanges();
	    }
	    setPane0Content(element) {
	        const container = this.getChildById("content0");
	        container.orphanChildren();
	        this.content0Child = element;
	        if (element) {
	            element.orphan();
	            container.addChild(element);
	        }
	        this.computeDimensions();
	    }
	    getPane0Content() {
	        return this.content0Child;
	    }
	    setPane1Content(element) {
	        const container = this.getChildById("content1");
	        container.orphanChildren();
	        this.content1Child = element;
	        if (element) {
	            element.orphan();
	            container.addChild(element);
	        }
	        this.computeDimensions();
	    }
	    getPane1Content() {
	        return this.content1Child;
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (input.isMouseUp()) {
	            EditorRuntime.updateTree.remove(this);
	            return;
	        }
	        const delta = this.getMouseDelta();
	        if (delta === 0)
	            return;
	        const total = this.c0Size + delta;
	        const shrink = delta < 0 && total > this.attrs.minSize;
	        const grow = delta > 0 && total < this.totalSize - this.attrs.minSize;
	        if (shrink || grow) {
	            this.c0Size += delta;
	            this.c1Size -= delta;
	            this.applySizeChanges();
	            this.distribution = 1.0 - ((this.totalSize - this.c0Size) / this.totalSize);
	            if (this.content0Child instanceof SplitPane) {
	                this.content0Child.computeDimensions();
	            }
	            if (this.content1Child instanceof SplitPane) {
	                this.content1Child.computeDimensions();
	            }
	        }
	    }
	    isVertical() {
	        return this.attrs.axis === 0 /* Vertical */;
	    }
	    startGutterDrag() {
	        EditorRuntime.updateTree.add(this);
	    }
	    getMouseDelta() {
	        if (this.isVertical()) {
	            return EditorRuntime.getInput().getMouseDelta().x;
	        }
	        else {
	            return EditorRuntime.getInput().getMouseDelta().y;
	        }
	    }
	    updateTotalSize() {
	        if (this.isVertical()) {
	            this.totalSize = (this.parent.getDomNode().clientWidth - (this.gutterSize * 0.5) | 0);
	        }
	        else {
	            this.totalSize = (this.parent.getDomNode().clientHeight - (this.gutterSize * 0.5) | 0);
	        }
	    }
	    applySizeChanges() {
	        if (this.isVertical()) {
	            this.content0Node.style.width = (this.c0Size | 0) + "px";
	            this.gutterNode.style.left = (this.c0Size | 0) + "px";
	            this.content1Node.style.left = ((this.gutterSize + this.c0Size) | 0) + "px";
	            this.content1Node.style.width = (this.c1Size | 0) + "px";
	        }
	        else {
	            this.content0Node.style.height = this.c0Size + "px";
	            this.gutterNode.style.top = this.c0Size + "px";
	            this.content1Node.style.top = (this.gutterSize + this.c0Size) + "px";
	            this.content1Node.style.height = this.c1Size + "px";
	        }
	    }
	    ensureOrientation() {
	        if (this.attrs.axis !== 0 /* Vertical */
	            && this.attrs.axis !== 1 /* Horizontal */) {
	            this.attrs.axis = 0 /* Vertical */;
	        }
	    }
	    createInitialStructure(children) {
	        this.content0Child = children[0];
	        this.content1Child = children[1];
	        this.ensureOrientation();
	        let gutterClass = "gutter-";
	        gutterClass += this.isVertical() ? "vertical" : "horizontal";
	        return [
	            Hex.createElement("div", { "x-id": "content0", class: "split-pane-panel" }, children[0]),
	            Hex.createElement("div", { "x-id": "gutter", class: gutterClass, onMouseDown: this.startGutterDrag }),
	            Hex.createElement("div", { "x-id": "content1", class: "split-pane-panel" }, children[1])
	        ];
	    }
	    setAxis(axis) {
	        if (this.attrs.axis === axis)
	            return;
	        this.attrs.axis = axis;
	        const gutterNode = this.getChildById("gutter").getDomNode();
	        if (this.attrs.axis === 0 /* Vertical */) {
	            gutterNode.classList.remove("gutter-horizontal");
	            gutterNode.classList.add("gutter-vertical");
	            gutterNode.style.top = "0";
	        }
	        else {
	            gutterNode.classList.remove("gutter-vertical");
	            gutterNode.classList.add("gutter-horizontal");
	            gutterNode.style.left = "0";
	        }
	        this.computeDimensions();
	    }
	    setOrSplitPane0(element, axis = 0 /* Vertical */, distribution = 0.5) {
	        const contentContainer = this.getChildById("content0");
	        if (this.content0Child) {
	            const split = element_renderer_1.createElement(SplitPane, { axis: axis });
	            const child = this.content0Child;
	            split.setPane0Content(element);
	            split.setPane1Content(child);
	            this.setPane0Content(split);
	            split.computeDimensions();
	        }
	        else {
	            this.setAxis(axis);
	            contentContainer.addChild(element);
	            this.content0Child = element;
	        }
	        if (distribution)
	            this.distribution = util_1.clamp01(distribution);
	        this.computeDimensions();
	    }
	    setOrSplitPane1(element, axis = 0 /* Vertical */, distribution = 0.5) {
	        const contentContainer = this.getChildById("content1");
	        if (this.content1Child) {
	            const split = element_renderer_1.createElement(SplitPane, { axis: axis });
	            const child = this.content1Child;
	            split.setPane0Content(child);
	            split.setPane1Content(element);
	            this.setPane1Content(split);
	            split.computeDimensions();
	        }
	        else {
	            this.setAxis(axis);
	            contentContainer.addChild(element);
	            this.content1Child = element;
	        }
	        if (distribution)
	            this.distribution = util_1.clamp01(distribution);
	        this.computeDimensions();
	    }
	}
	exports.SplitPane = SplitPane;
	class VerticalSplitPane extends SplitPane {
	    ensureOrientation() {
	        this.attrs.axis = 0 /* Vertical */;
	    }
	}
	exports.VerticalSplitPane = VerticalSplitPane;
	class HorizontalSplitPane extends SplitPane {
	    ensureOrientation() {
	        this.attrs.axis = 1 /* Horizontal */;
	    }
	}
	exports.HorizontalSplitPane = HorizontalSplitPane;
	createStyleSheet(`<style>

	.split-pane {
	    width: 100%;
	    height: 100%;
	    position:relative;
	    overflow: hidden;
	}

	.split-pane .split-pane-panel {
	    height: 100%;
	}

	.split-pane.horizontal .split-pane-panel {
	    width: 100%;
	}

	.split-pane-panel {
	    overflow:hidden;
	    position:absolute;
	}

	.gutter-vertical {
	    width: 4px;
	    min-width:4px;
	    height:100%;
	    /*cursor: ew-resize;*/
	    position:absolute;;
	}

	.gutter-horizontal{
	    width: 100%;
	    height: 4px;
	    min-height:4px;
	    /*cursor: ns-resize;*/
	    position:absolute;;
	}

	</style>`);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const split_pane_1 = __webpack_require__(54);
	const editor_theme_1 = __webpack_require__(56);
	const element_renderer_1 = __webpack_require__(7);
	const editor_window_tab_1 = __webpack_require__(57);
	const editor_html_element_1 = __webpack_require__(19);
	//todo this is causing a problem with mouse selection -- quad tree fixes this
	//this issue has to do with document.elementFromPoint not ignoring this element
	const coverDiv = document.createElement('div');
	coverDiv.style.position = "absolute";
	coverDiv.style.zIndex = "400";
	coverDiv.style.background = "magenta";
	class WindowFrame extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	    }
	    onCreated() {
	        this.windows = [];
	        this.isCoverInDom = false;
	        this.draggedWindowData = null;
	    }
	    getDomData() {
	        return {
	            tagName: "div",
	            classList: "window-frame"
	        };
	    }
	    onRendered() {
	        this.setVisibleWindow(this.windows[0]);
	        this.parentSplitPane = this.getAncestorByType(split_pane_1.SplitPane);
	    }
	    setVisibleWindow(window) {
	        for (let i = 0; i < this.windows.length; i++) {
	            if (this.windows[i] === window) {
	                this.windows[i].tab.setActive(true);
	                this.windows[i].content.setVisible(true);
	            }
	            else {
	                this.windows[i].tab.setActive(false);
	                this.windows[i].content.setVisible(false);
	            }
	        }
	    }
	    onUpdated() {
	        const Input = EditorRuntime.getInput();
	        if (Input.isMouseUp()) {
	            this.isCoverInDom = false;
	            coverDiv.remove();
	            EditorRuntime.updateTree.remove(this);
	            const mouse = Input.getMousePosition();
	            const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
	            const windowFrame = hoverElement.getAncestorByType(WindowFrame);
	            if (windowFrame) {
	                const rect = windowFrame.getChildById("body").getClientBounds();
	                if (WindowFrame.mouseOnLeft(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane0(frame, 0 /* Vertical */);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (WindowFrame.mouseOnRight(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane1(frame, 0 /* Vertical */);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (WindowFrame.mouseOnBottom(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane1(frame, 1 /* Horizontal */);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (this === windowFrame) {
	                }
	                else {
	                    windowFrame.addExistingWindow(this.draggedWindowData);
	                }
	                //if in the center, add to tab list and set active
	                //if left or right, split the pane vertically
	                //if bottom split pane horizontally
	            }
	            this.draggedWindowData = null;
	            return;
	        }
	        const mouse = Input.getMousePosition();
	        const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
	        const windowFrame = hoverElement.getAncestorByType(WindowFrame);
	        if (!windowFrame) {
	            return;
	        }
	        const rect = windowFrame.getChildById("body").getClientBounds();
	        if (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7)) {
	            if (mouse.x > rect.left && mouse.x < rect.left + (0.3 * rect.width)) {
	                coverDiv.style.left = rect.left + "px";
	                coverDiv.style.top = rect.top + "px";
	                coverDiv.style.width = (rect.width * 0.3) + "px";
	                coverDiv.style.height = "100%";
	                if (!this.isCoverInDom) {
	                    this.isCoverInDom = true;
	                    document.body.appendChild(coverDiv);
	                }
	            }
	            else if (mouse.x > rect.left + (0.7 * rect.width) && mouse.x < rect.left + rect.width) {
	                coverDiv.style.left = rect.left + (rect.width * 0.7) + "px";
	                coverDiv.style.top = rect.top + "px";
	                coverDiv.style.width = (rect.width * 0.3) + "px";
	                coverDiv.style.height = "100%";
	                if (!this.isCoverInDom) {
	                    this.isCoverInDom = true;
	                    document.body.appendChild(coverDiv);
	                }
	            }
	            else if (this.isCoverInDom) {
	                this.isCoverInDom = false;
	                coverDiv.remove();
	            }
	        }
	        else if (mouse.y > rect.top) {
	            coverDiv.style.left = rect.left + "px";
	            coverDiv.style.top = rect.top + (rect.height * 0.7) + "px";
	            coverDiv.style.width = rect.width + "px";
	            coverDiv.style.height = (rect.height * 0.7) + "px";
	            if (!this.isCoverInDom) {
	                this.isCoverInDom = true;
	                document.body.appendChild(coverDiv);
	            }
	        }
	    }
	    static mouseOnLeft(mouse, rect) {
	        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
	            && (mouse.x > rect.left && mouse.x < rect.left + (0.3 * rect.width));
	    }
	    static mouseOnRight(mouse, rect) {
	        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
	            && (mouse.x > rect.left + (0.7 * rect.width) && mouse.x < rect.left + rect.width);
	    }
	    static mouseOnBottom(mouse, rect) {
	        return !(mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7)) && mouse.y > rect.top;
	    }
	    addExistingWindow(windowData) {
	        const header = this.getChildById("header");
	        const body = this.getChildById("body");
	        const data = this.createWindowData(windowData.content);
	        //can't reuse the tab because of the mouse listener context
	        this.windows.push(data);
	        header.addChild(data.tab);
	        body.addChild(data.content);
	        this.setVisibleWindow(data);
	        windowData.parentWindow.removeWindow(windowData);
	    }
	    removeWindow(windowData) {
	        windowData.tab.destroy();
	        if (this.windows.length === 1) {
	            this.destroy();
	            if (this.parentSplitPane.getPane0Content() === this) {
	                this.parentSplitPane.setPane0Content(null);
	            }
	            else if (this.parentSplitPane.getPane1Content() === this) {
	                this.parentSplitPane.setPane1Content(null);
	            }
	        }
	        else {
	            const idx = this.windows.indexOf(windowData);
	            if (idx === -1)
	                return;
	            this.windows.splice(idx, 1);
	            this.setVisibleWindow(this.windows[0]);
	        }
	    }
	    startTabDrag(windowData) {
	        this.draggedWindowData = windowData;
	        EditorRuntime.updateTree.add(this);
	    }
	    createWindowData(content) {
	        const windowData = {
	            parentWindow: this,
	            content: content,
	            tab: element_renderer_1.createElement(editor_window_tab_1.WindowFrameTab, {
	                title: content.attrs.title, onMouseDown: () => {
	                    this.setVisibleWindow(windowData);
	                    this.startTabDrag(windowData);
	                }
	            })
	        };
	        this.windows.push(windowData);
	        return windowData;
	    }
	    createInitialStructure(children) {
	        const childWindows = children.map((child) => {
	            return this.createWindowData(child);
	        });
	        return [
	            Hex.createElement("div", { "x-id": "header", class: "window-frame-header" }, childWindows.map((w) => w.tab)),
	            Hex.createElement("div", { "x-id": "body", "x-child-root": true, class: "window-frame-body" }, childWindows.map((w) => w.content)),
	        ];
	    }
	}
	exports.WindowFrame = WindowFrame;
	createStyleSheet(`<style>

	.editor-frame-container {
	    width: 100%;
	    height: 100%;
	    background: gainsboro;
	    position: relative;
	}

	.window-frame-header {
	    background: ${editor_theme_1.WindowColors.backgroundGrey};
	    margin: 0;
	    display:flex;
	    flex-direction: row;
	    align-items: flex-start;
	}

	.window-frame-header h3 {
	    margin: 0;
	}

	.window-frame-body {
	    overflow:auto;
	    width:100%;
	    height: 100%;
	    border: 1px solid #828282;
	}

	.window-frame {
	    width:100%;
	    height:100%;
	    display:flex;
	    flex-direction: column;
	}


	</style>`);


/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WindowColors = {
	    backgroundGrey: "#A2A2A2",
	    borderGrey: "#828282",
	    foregroundGrey: "#C2C2C2",
	    selectedTabBodyGrey: "#E4E4E4",
	    selectedTabBorderGrey: "#858585",
	    sceneBackground: "#5D5D5D"
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_theme_1 = __webpack_require__(56);
	const editor_html_element_1 = __webpack_require__(19);
	class WindowFrameTab extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return {
	            tagName: "div",
	            classList: "window-frame-tab"
	        };
	    }
	    setActive(isSelected) {
	        if (isSelected) {
	            this.getDomNode().classList.add('selected');
	        }
	        else {
	            this.getDomNode().classList.remove('selected');
	        }
	    }
	    createInitialStructure(children) {
	        return this.attrs.title;
	    }
	}
	exports.WindowFrameTab = WindowFrameTab;
	createStyleSheet(`
	<style>
	.window-frame-tab {
	    padding-left: 1em;
	    padding-right: 1em;
	    text-align: center;
	    font-size: 0.9em;
	    color: black;
	}

	.window-frame-tab.selected {
	    background: ${editor_theme_1.WindowColors.selectedTabBodyGrey};
	    border: 1px solid ${editor_theme_1.WindowColors.selectedTabBorderGrey};
	    border-bottom:none;
	    border-top-left-radius: 3px;
	    border-top-right-radius: 3px;
	}
	</style>
	`);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const button_1 = __webpack_require__(59);
	const hierarchy_item_1 = __webpack_require__(60);
	const evt_selection_changed_1 = __webpack_require__(5);
	const evt_scene_loaded_event_1 = __webpack_require__(65);
	const evt_app_element_created_1 = __webpack_require__(22);
	const element_renderer_1 = __webpack_require__(7);
	const editor_window_element_1 = __webpack_require__(66);
	const app_element_1 = __webpack_require__(29);
	const evt_app_element_parent_changed_1 = __webpack_require__(35);
	const drag_hierarchy_item_1 = __webpack_require__(62);
	const vector2_1 = __webpack_require__(17);
	const editor_element_annotations_1 = __webpack_require__(67);
	const icon_1 = __webpack_require__(61);
	const evt_app_element_index_changed_1 = __webpack_require__(36);
	const runtime_event_1 = __webpack_require__(6);
	const scroll_component_1 = __webpack_require__(140);
	const sizing_component_1 = __webpack_require__(40);
	const menu_setup_1 = __webpack_require__(152);
	class HierarchyWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.mouse = new vector2_1.Vector2();
	        this.elementMap = new Map();
	        this.contextSelection = null;
	    }
	    createHierarchyItem(element) {
	        const item = element_renderer_1.createElement(hierarchy_item_1.HierarchyItem, { element: element });
	        this.elementMap.set(element, item);
	        const childCount = element.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const appElement = element.getChildAt(i);
	            const childItem = this.createHierarchyItem(appElement);
	            item.getChildRoot().addChild(childItem);
	        }
	        return item;
	    }
	    onAppElementParentChanged(appElement, newParent) {
	        const targetItem = this.elementMap.get(appElement);
	        const newParentItem = this.elementMap.get(newParent);
	        newParentItem.getChildRoot().addChild(targetItem);
	        EditorRuntime.select(appElement);
	    }
	    onSelectionChanged(newSelection, oldSelection) {
	        if (oldSelection) {
	            const item = this.elementMap.get(oldSelection);
	            if (item) {
	                item.setSelected(false);
	            }
	        }
	        if (newSelection) {
	            const selectedItem = this.elementMap.get(newSelection);
	            if (selectedItem) {
	                selectedItem.setSelected(true);
	            }
	        }
	    }
	    select() {
	        const input = EditorRuntime.getInput();
	        input.getMousePosition(this.mouse);
	        let mouseOver = EditorRuntime.getEditorElementAtPoint(this.mouse);
	        if (!mouseOver || mouseOver.getAncestorByType(icon_1.ToggleIcon, true))
	            return;
	        let item = mouseOver.getAncestorByType(hierarchy_item_1.HierarchyItem, true);
	        if (!item) {
	            EditorRuntime.select(null);
	            return null;
	        }
	        EditorRuntime.select(item.attrs.element);
	        return item.attrs.element;
	    }
	    showContextMenu() {
	        this.contextSelection = this.select();
	        this.createContextMenu();
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        const inElement = input.isMouseInEditorElement(this);
	        if (!inElement) {
	            return;
	        }
	        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
	            input.getMouseDownDelta(this.mouse);
	            if (this.mouse.lengthSquared() > 64) {
	                input.getMouseDownPosition(this.mouse);
	                let dragElement = EditorRuntime.getEditorElementAtPoint(this.mouse, hierarchy_item_1.HierarchyItem);
	                if (!dragElement) {
	                    return;
	                }
	                EditorRuntime.beginDragAction(new drag_hierarchy_item_1.HierarchyItemDragAction(dragElement));
	            }
	        }
	    }
	    onRendered() {
	        EditorRuntime.on(evt_selection_changed_1.SelectionChanged, this);
	        EditorRuntime.on(evt_scene_loaded_event_1.SceneLoaded, this);
	        EditorRuntime.on(evt_app_element_created_1.AppElementCreated, this);
	        EditorRuntime.on(evt_app_element_index_changed_1.AppElementIndexChanged, this);
	        // EditorRuntime.on(AppElementDestroyed, this);
	        EditorRuntime.on(evt_app_element_parent_changed_1.AppElementParentChanged, this);
	        EditorRuntime.updateTree.add(this);
	        this.onSceneLoaded(EditorRuntime.getScene());
	    }
	    onAppElementCreated(appElement) {
	        const item = this.createHierarchyItem(appElement);
	        const parentItem = this.elementMap.get(appElement.getParent()) || this;
	        parentItem.getChildRoot().addChild(item);
	    }
	    onAppElementIndexChanged(appElement, newIndex) {
	        const item = this.elementMap.get(appElement);
	        item.parent.getChildRoot().insertChild(item, newIndex);
	    }
	    onSceneLoaded(scene) {
	        // const root = AppElement.Root;
	        // const rootItem = this.createHierarchyItem(root);
	        // this.getChildRoot().addChild(rootItem);
	    }
	    destroyContextSelection() {
	        const hierarchyItem = this.elementMap.get(this.contextSelection);
	        if (!hierarchyItem)
	            return;
	        if (EditorRuntime.getSelection() === this.contextSelection) {
	            EditorRuntime.select(null);
	        }
	        hierarchyItem.destroy();
	        this.contextSelection.destroy();
	        this.contextSelection = null;
	    }
	    createNewElement() {
	        new app_element_1.AppElement("Element", EditorRuntime.getSelection());
	    }
	    createScrollElement() {
	        const element = new app_element_1.AppElement("Scroll Container");
	        element.addComponent(scroll_component_1.ScrollComponent);
	        const sizing = element.addComponent(sizing_component_1.SizingComponent);
	        // sizing.stretchBehavior = StretchBehavior.FillParent;
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("div", { class: "hierarchy-top-bar" },
	                Hex.createElement(button_1.Button, { onClick: this.createNewElement }, "Create")),
	            Hex.createElement("div", { "x-child-root": true, class: "hierarchy-main-body" })
	        ];
	    }
	    createContextMenu() {
	        EditorRuntime.getInput().getMousePosition(this.mouse);
	        const menu = new nw.Menu();
	        const creationMenu = menu_setup_1.getCreationMenu();
	        menu.append(new nw.MenuItem({ label: "Create Empty", click: () => this.createNewElement() }));
	        menu.append(new nw.MenuItem({ label: "Create", submenu: creationMenu }));
	        menu.append(new nw.MenuItem({ label: "Destroy", click: () => this.destroyContextSelection() }));
	        menu.popup(this.mouse.x, this.mouse.y);
	    }
	}
	tslib_1.__decorate([
	    editor_element_annotations_1.onClick
	], HierarchyWindow.prototype, "select", null);
	tslib_1.__decorate([
	    editor_element_annotations_1.onRightClick
	], HierarchyWindow.prototype, "showContextMenu", null);
	tslib_1.__decorate([
	    runtime_event_1.RuntimeEvent.on(evt_app_element_created_1.AppElementCreated)
	], HierarchyWindow.prototype, "onAppElementCreated", null);
	exports.HierarchyWindow = HierarchyWindow;
	createStyleSheet(`
	<style>


	.hierarchy-window {
	    display: flex;
	    flex-direction: column;
	    height: 100%;
	    width: 100%;
	}


	</style>
	`);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class Button extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return {
	            tagName: "button",
	            classList: "btn"
	        };
	    }
	}
	exports.Button = Button;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const icon_1 = __webpack_require__(61);
	const drag_action_1 = __webpack_require__(38);
	const drag_hierarchy_item_1 = __webpack_require__(62);
	const editor_html_element_1 = __webpack_require__(19);
	const hierarchy_insert_target_1 = __webpack_require__(63);
	const binding_1 = __webpack_require__(13);
	const evt_app_element_parent_changed_1 = __webpack_require__(35);
	class HierarchyItem extends editor_html_element_1.EditorHTMLElement {
	    setSelected(isSelected) {
	        this.getChildBySelector(".hierarchy-item-offset").toggleClass("selected", isSelected);
	    }
	    onDestroyed() {
	        this.attrs.element = null;
	    }
	    mouseEnterDetails(action) {
	        if (!(action.item === this || action.item === this.parent)) {
	            this.getChildBySelector(".hierarchy-item-offset").addClass("hovered");
	        }
	    }
	    mouseExitDetails(item) {
	        this.getChildBySelector(".hierarchy-item-offset").removeClass("hovered");
	    }
	    mouseDragDrop(action) {
	        if (action.item === this || action.item === this.parent) {
	            return;
	        }
	        const elementParent = this.attrs.element;
	        action.appElement.setParent(elementParent);
	    }
	    onAppElementParentChanged(element) {
	        if (this.attrs.element !== element)
	            return;
	        const depth = element.getDepth();
	        this.getChildBySelector(".hierarchy-item-offset").setStyle({ paddingLeft: `${depth * 12}px` });
	    }
	    onRendered() {
	        EditorRuntime.on(evt_app_element_parent_changed_1.AppElementParentChanged, this);
	    }
	    createInitialStructure(children) {
	        const appElement = this.attrs.element;
	        const depth = this.attrs.element.getDepth();
	        const paddingLeft = "padding-left:" + (depth * 12) + "px";
	        const visBinding = binding_1.CreateBinding(appElement.children, "length");
	        return [
	            Hex.createElement(hierarchy_insert_target_1.HierarchyItemDropTarget, { insert: "before" }),
	            Hex.createElement("div", { class: "hierarchy-item-offset", style: paddingLeft },
	                Hex.createElement(icon_1.ToggleIcon, { "x-id": "toggle", "x-bind-class": { invisible: visBinding } }),
	                Hex.createElement("div", { class: "name-label" },
	                    " ",
	                    new window.EditorBindingElement(appElement, ["name"]),
	                    " ")),
	            Hex.createElement(hierarchy_insert_target_1.HierarchyItemDropTarget, { insert: "after" }),
	            Hex.createElement("div", { "x-child-root": true, class: "hierarchy-item-children" }, children),
	        ];
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItem.prototype, "mouseEnterDetails", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItem.prototype, "mouseExitDetails", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItem.prototype, "mouseDragDrop", null);
	exports.HierarchyItem = HierarchyItem;
	createStyleSheet(`<style>

	    .hierarchy-item-details.selected {
	        background: #c8f8ff;
	    }

	    .hierarchy-item-offset.selected {
	        color:white;
	        background: #62b4ff;
	    }
	    
	    .hierarchy-item-offset.hovered {
	        background: #43ff5f;
	    }
	    
	    .hierarchy-item-offset {
	        display:flex;
	        flex-direction: row;
	    }
	        
	    .hierarchy-item-offset .name-label {
	        flex:1;
	        margin-right:2px;
	        margin-left: 2px;
	        padding-left:2px;
	        padding-right:2px;
	    }
	    
	    .hierarchy-item-offset .icon {
	        color: black;
	    }
	    

	`);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class FontIcon extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.prefix = "fa";
	    }
	    getDomData() {
	        return { tagName: "i", classList: this.getClassList() };
	    }
	    getIconSize() {
	        return " icon " + (this.attrs.size || "");
	    }
	    getClassList() {
	        return this.prefix
	            + " "
	            + this.getPrefixedIconName(this.attrs.iconName)
	            + this.getIconSize();
	    }
	    getPrefixedIconName(iconName) {
	        return this.prefix + "-" + iconName;
	    }
	    ;
	    setIcon(iconName) {
	        const domNode = this.getDomNode();
	        domNode.classList.remove(this.getPrefixedIconName(this.attrs.iconName));
	        domNode.classList.add(this.getPrefixedIconName(iconName));
	        this.attrs.iconName = iconName;
	    }
	}
	exports.FontIcon = FontIcon;
	class ToggleIcon extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "i", classList: this.getClassList() };
	    }
	    onMounted() {
	        const attrs = this.attrs;
	        const htmlNode = this.htmlNode;
	        attrs.visibilityTarget = attrs.visibilityTarget || (() => {
	            return this.renderContext.getChildRoot();
	        });
	        htmlNode.addEventListener('click', (e) => {
	            attrs.open = !attrs.open;
	            if (this.attrs.onToggle) {
	                this.attrs.onToggle(attrs.open);
	            }
	            else {
	                attrs.visibilityTarget().setVisible(attrs.open);
	            }
	            htmlNode.classList.toggle("fa-caret-down", attrs.open);
	            htmlNode.classList.toggle("fa-caret-right", !attrs.open);
	            e.stopPropagation();
	        }, true);
	    }
	    getClassList() {
	        const attrs = this.attrs;
	        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);
	        return "toggle-icon fa " + (this.attrs.open ? "fa-caret-down" : "fa-caret-right");
	    }
	}
	exports.ToggleIcon = ToggleIcon;
	createStyleSheet(`<style>
	    .toggle-icon {
	        width: 18px;
	        padding: 0 4px;
	    }
	`);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(38);
	class HierarchyItemDragAction extends drag_action_1.DragAction {
	    constructor(item) {
	        super();
	        this.item = item;
	        this.appElement = item.attrs.element;
	    }
	}
	exports.HierarchyItemDragAction = HierarchyItemDragAction;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const hierarchy_item_1 = __webpack_require__(60);
	const drag_action_1 = __webpack_require__(38);
	const drag_hierarchy_item_1 = __webpack_require__(62);
	const prefab_drag_action_1 = __webpack_require__(64);
	class HierarchyItemDropTarget extends editor_html_element_1.EditorHTMLElement {
	    onMounted() {
	        this.target = this.parent;
	    }
	    onDragEnter(action) {
	        this.addClass("hover");
	    }
	    onDragExit() {
	        this.removeClass("hover");
	    }
	    onDrop(action) {
	        const grandParent = this.target.getAncestorByType(hierarchy_item_1.HierarchyItem);
	        if (!grandParent) {
	            return;
	        }
	        let idx = grandParent.getChildRoot().getChildIndex(this.target);
	        if (this.attrs.insert === "after")
	            idx++;
	        if (action instanceof prefab_drag_action_1.PrefabDragAction) {
	            //create
	        }
	        else if (action instanceof drag_hierarchy_item_1.HierarchyItemDragAction) {
	            //if shares parent, set index
	            //else, set parent then index
	            //action.appElement.setParent(this.target.attrs.element);
	            action.appElement.setSiblingIndex(idx);
	            grandParent.getChildRoot().insertChild(action.item, idx);
	        }
	    }
	    createInitialStructure() {
	        return Hex.createElement("div", { class: "hover-target-display" });
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(prefab_drag_action_1.PrefabDragAction),
	    drag_action_1.DragAction.MouseEnter(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItemDropTarget.prototype, "onDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(prefab_drag_action_1.PrefabDragAction),
	    drag_action_1.DragAction.MouseExit(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItemDropTarget.prototype, "onDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(prefab_drag_action_1.PrefabDragAction),
	    drag_action_1.DragAction.Drop(drag_hierarchy_item_1.HierarchyItemDragAction)
	], HierarchyItemDropTarget.prototype, "onDrop", null);
	exports.HierarchyItemDropTarget = HierarchyItemDropTarget;
	createStyleSheet(`<style>
	    
	    .hierarchy-item-drop-target {
	        position:relative;
	    }
	    
	    .hierarchy-item-drop-target .hover-target-display {
	        position: absolute;
	        top: -2px;
	        left: 0;
	        height: 4px;
	        width: 100%;
	    }
	    
	    .hierarchy-item-drop-target.hover .hover-target-display {
	        background: aliceblue;
	    }
	    
	`);


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(38);
	class PrefabDragAction extends drag_action_1.DragAction {
	    constructor(template) {
	        super();
	        this.template = template;
	    }
	}
	exports.PrefabDragAction = PrefabDragAction;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class SceneLoaded extends runtime_event_1.RuntimeEvent {
	}
	exports.SceneLoaded = SceneLoaded;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class EditorWindowElement extends editor_html_element_1.EditorHTMLElement {
	}
	exports.EditorWindowElement = EditorWindowElement;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	function onClick(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "click", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onClick = onClick;
	function onRightClick(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "contextmenu", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onRightClick = onRightClick;
	function onMouseDown(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "mousedown", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onMouseDown = onMouseDown;
	function onMouseUp(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "mouseup", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onMouseUp = onMouseUp;
	function onMouseMove(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "mousemove", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onMouseMove = onMouseMove;
	function onMouseEnter(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "mouseenter", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onMouseEnter = onMouseEnter;
	function onMouseExit(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "mouseleave", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onMouseExit = onMouseExit;
	function onBlur(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "blur", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onBlur = onBlur;
	function onFocus(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "focus", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFocus = onFocus;
	function onKeyDown(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "keydown", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onKeyDown = onKeyDown;
	function onKeyUp(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "keyup", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onKeyUp = onKeyUp;
	function onKeyPress(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "keypress", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onKeyPress = onKeyPress;
	function onFileDragEnter(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragenter", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragEnter = onFileDragEnter;
	function onFileDragExit(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragexit", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragExit = onFileDragExit;
	function onFileDragStart(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragstart", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragStart = onFileDragStart;
	function onFileDragEnd(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragend", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragEnd = onFileDragEnd;
	function onFileDrop(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "drop", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDrop = onFileDrop;
	function onFileDragLeave(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragleave", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragLeave = onFileDragLeave;
	function onFileDrag(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "drag", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDrag = onFileDrag;
	function onFileDragOver(target, propertyKey, descriptor) {
	    const array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
	    array.push({ type: "dragover", methodName: propertyKey });
	    editor_html_element_1.InputEventAnnotationMap.set(target, array);
	}
	exports.onFileDragOver = onFileDragOver;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_theme_1 = __webpack_require__(56);
	const editor_window_element_1 = __webpack_require__(66);
	const app_element_1 = __webpack_require__(29);
	const scene_meta_bar_1 = __webpack_require__(69);
	const vector2_1 = __webpack_require__(17);
	const breakpoint_1 = __webpack_require__(70);
	const drag_action_1 = __webpack_require__(38);
	const prefab_drag_action_1 = __webpack_require__(64);
	const rect_tool_1 = __webpack_require__(71);
	const layout_1 = __webpack_require__(41);
	class SceneWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	        this.zoomLevel = 1;
	        this.baseYOffset = 12;
	        this.isPaintQueued = false;
	        this.currentBreakpoint = breakpoint_1.BreakpointType.Mobile;
	    }
	    getDomData() {
	        return { tagName: "div", classList: "scene-window-root" };
	    }
	    getBreakpoint() {
	        return this.currentBreakpoint;
	    }
	    setPreviewSize(breakpointType) {
	        this.currentBreakpoint = breakpointType;
	        this.frameDimensions = breakpoint_1.Breakpoint.getDimensions(breakpointType);
	        this.panValue.x = ((this.width * 0.5) - (this.frameDimensions.x * 0.5)) | 0;
	        this.panValue.y = this.baseYOffset;
	        app_element_1.AppElement.Root.setPosition(this.panValue);
	        app_element_1.AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);
	        this.resetZoom();
	        this.drawFrameOutline();
	        //invoke break point code
	        this.paintScene();
	    }
	    paintScene() {
	        this.isPaintQueued = true;
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (input.isMouseInEditorElement(this.getChildRoot())) {
	            this.zoom(input.getMouseWheelDelta().y);
	        }
	        //todo there is probably a way not to dirty check this
	        const clientRect = this.getDomNode().getBoundingClientRect();
	        if (clientRect.width !== this.width || clientRect.height !== this.height) {
	            this.width = clientRect.width;
	            this.height = clientRect.height;
	            const renderRootBounds = this.getChildRoot().getDomNode().getBoundingClientRect();
	            const renderRootWidth = renderRootBounds.width;
	            const renderRootHeight = renderRootBounds.height;
	            this.pixi.resize(renderRootWidth, renderRootHeight);
	            this.setPreviewSize(this.currentBreakpoint);
	        }
	        this.currentTool.update();
	        //if(this.isPaintQueued) {
	        //    this.isPaintQueued = false;
	        this.paintBackground();
	        this.drawFrameOutline();
	        this.drawSelection();
	        this.pixi.render(this.stage);
	        //}
	    }
	    applyPanOffset(input) {
	        input.x += this.panValue.x;
	        input.y += this.panValue.y;
	    }
	    pan(delta) {
	        if (delta.isZero())
	            return;
	        this.panValue.addVector(delta);
	        app_element_1.AppElement.Root.setPosition(this.panValue);
	        app_element_1.AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);
	        this.paintScene();
	    }
	    zoom(zoomDelta) {
	        //todo -- disable until i have time to fix render scale
	        //todo -- try to just set the canvas context scale
	        // const oldWidth = this.frameDimensions.x * this.zoomLevel;
	        // const oldHeight = this.frameDimensions.y * this.zoomLevel;
	        // this.zoomLevel -= 0.05 * zoomDelta;
	        // this.zoomLevel = clamp(this.zoomLevel, 0.1, 4);
	        // const newWidth = this.frameDimensions.x * this.zoomLevel;
	        // const newHeight = this.frameDimensions.y * this.zoomLevel;
	        // const diff = new Vector2(
	        //     (oldWidth - newWidth) * 0.5,
	        //     (oldHeight - newHeight) * 0.5
	        // );
	        // this.pan(diff);
	        // if(zoomDelta !== 0) {
	        //     const childRootDom = this.getChildRoot().getDomNode();
	        //     const appRootDom = childRootDom.firstElementChild as HTMLElement;
	        //     appRootDom.style.transformOrigin = "top left";
	        //     appRootDom.style.transform = "scale(" + this.zoomLevel + ")";
	        // }
	        // this.paintScene();
	    }
	    resetZoom() {
	        this.zoomLevel = 1;
	        const width = this.width;
	        const breakpointWidth = this.frameDimensions.x;
	        if (breakpointWidth > width) {
	            this.zoomLevel = width / breakpointWidth;
	            this.panValue.x = ((this.zoomLevel * breakpointWidth * 0.5) - (width * 0.5)) | 0;
	            this.panValue.y = this.baseYOffset;
	        }
	        this.zoom(0);
	    }
	    paintBackground() {
	        this.canvas.width = this.width;
	        this.canvas.height = this.height;
	        this.ctx.clearRect(0, 0, this.width, this.height);
	        this.ctx.fillStyle = editor_theme_1.WindowColors.sceneBackground;
	        this.ctx.fillRect(0, 0, this.width, this.height);
	        this.ctx.strokeStyle = '#FFFFFF';
	        this.ctx.lineWidth = 0.5;
	        this.ctx.globalAlpha = 0.2;
	        this.ctx.beginPath();
	        const spacing = 25;
	        for (let i = 0; i < 100; i++) {
	            const interval = i * spacing + 0.5;
	            this.ctx.moveTo(0, interval);
	            this.ctx.lineTo(this.width, interval);
	            this.ctx.moveTo(interval, 0);
	            this.ctx.lineTo(interval, this.height);
	        }
	        this.ctx.closePath();
	        this.ctx.stroke();
	    }
	    onRendered() {
	        //todo swap tool based on layout type of parent of selection
	        this.currentTool = new rect_tool_1.SceneRectTool(this); //new ScenePanTool(this);
	        this.panValue = new vector2_1.Vector2();
	        this.canvas = this.getChildBySelector('canvas').getDomNode();
	        this.ctx = this.canvas.getContext("2d");
	        EditorRuntime.drawScene(".scene-render-root");
	        EditorRuntime.updateTree.add(this);
	        PIXI.utils.skipHello();
	        this.stage = new PIXI.Container();
	        this.pixi = new PIXI.WebGLRenderer(256, 256, {
	            autoResize: true,
	            transparent: true,
	            view: this.getChildById('foreground-canvas').getDomNode()
	        });
	        this.frameOutline = new PIXI.Graphics();
	        this.dragThing = new PIXI.Graphics();
	        this.selectionOutline = new PIXI.Graphics();
	        this.stage.addChild(this.frameOutline);
	        this.stage.addChild(this.dragThing);
	        this.stage.addChild(this.selectionOutline);
	        this.pixi.render(this.stage);
	        this.setPreviewSize(this.currentBreakpoint);
	    }
	    drawDragThing() {
	        const input = EditorRuntime.getInput();
	        const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
	        const mouseOver = Runtime.getAppElementAtPoint(mouse);
	        if (mouseOver) {
	            //see if we are over a layout element
	            //if we are, simulate adding this to the layout at some fixed width (20px or something smallish)
	            //might not need to do an actual layout
	            //might get away with just shifting elements absolutely temporarily
	            //if not in a layout element -- fill the current element
	            //if in layout element within some gutter amount, do fancy preview
	            this.dragThing.clear();
	            this.dragThing.beginFill(0x00FF00, 0.2);
	            this.dragThing.lineStyle(1, 0x00FF00);
	            const position = mouseOver.getPosition();
	            const layout = mouseOver.getComponent(layout_1.LayoutComponent);
	            if (layout) {
	                const slot = layout.getSlotAtPosition(mouse);
	                //if slot !== last slot -> Cancel animation
	                //draw layout position
	                // this.dragThing.drawRect(
	                //
	                // )
	            }
	            else {
	                //todo lerp this for sexiness
	                this.dragThing.drawRect(position.x, position.y - 1, mouseOver.getWidth(), mouseOver.getHeight());
	            }
	        }
	        else {
	            this.dragThing.clear();
	            this.dragThing.beginFill(0x00FF00, 0.2);
	            this.dragThing.lineStyle(1, 0x00FF00);
	            this.dragThing.drawRect(mouse.x - 50, mouse.y - 25, 100, 50);
	        }
	        this.paintScene();
	    }
	    drawFrameOutline() {
	        this.frameOutline.clear();
	        this.frameOutline.lineStyle(1, 0xFF00CD);
	        this.frameOutline.drawRect(this.panValue.x, this.panValue.y - 1, this.zoomLevel * (this.frameDimensions.x + 1), this.zoomLevel * (this.frameDimensions.y));
	    }
	    drawSelection() {
	        this.selectionOutline.clear();
	        const selection = EditorRuntime.getSelection();
	        if (!selection)
	            return;
	        const position = selection.getLocalPosition();
	        const w = selection.getWidth();
	        const h = selection.getHeight();
	        this.selectionOutline.lineStyle(1, 0xFFFFFFFF);
	        this.selectionOutline.rotation = selection.getRotation();
	        //probably need to scale pan diff,
	        //app root moves on zoom
	        this.selectionOutline.drawRect(position.x, position.y - 1, (this.zoomLevel * w) + 1, this.zoomLevel * h);
	        this.selectionOutline.lineStyle(1, 0x000000);
	        this.selectionOutline.beginFill(0x87b0f2);
	        this.selectionOutline.drawCircle(position.x, position.y, 5);
	        this.selectionOutline.drawCircle(position.x + w, position.y, 5);
	        this.selectionOutline.drawCircle(position.x + w, position.y + h, 5);
	        this.selectionOutline.drawCircle(position.x, position.y + h, 5);
	        this.selectionOutline.endFill();
	        const parent = selection.getParent();
	        let parentPosition = null;
	        if (parent) {
	            parentPosition = selection.getParent().getPosition();
	        }
	        else {
	            parentPosition = selection.getPosition();
	        }
	        this.selectionOutline.position.set(parentPosition.x, parentPosition.y);
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(scene_meta_bar_1.SceneMetaBar, null),
	            Hex.createElement("canvas", { "x-id": "background-canvas", class: "overlay-canvas" }),
	            Hex.createElement("div", { "x-child-root": true, class: "scene-render-root" }),
	            Hex.createElement("canvas", { "x-id": "foreground-canvas", class: "overlay-canvas" }),
	        ];
	    }
	    handleAssetDragEnter() {
	        EditorRuntime.setCursor("-webkit-grabbing");
	    }
	    handleAssetDragHover() {
	        this.drawDragThing();
	    }
	    handleAssetDragExit() {
	        EditorRuntime.setCursor("default");
	        this.dragThing.clear();
	        this.paintScene();
	    }
	    handleAssetDrop(action) {
	        const input = EditorRuntime.getInput();
	        const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
	        const mouseOver = Runtime.getAppElementAtPoint(mouse);
	        const appElement = action.template.create();
	        if (mouseOver) {
	            appElement.setParent(mouseOver);
	            appElement.setPositionValues(0, 0, app_element_1.Space.Local);
	            appElement.setDimensions(mouseOver.getWidth(), mouseOver.getHeight());
	        }
	        else {
	            appElement.setParent(app_element_1.AppElement.Root);
	            //todo handle pan value
	            appElement.setPositionValues(mouse.x - 50, mouse.y - 25);
	            appElement.setDimensions(100, 50);
	        }
	        EditorRuntime.select(appElement);
	        this.dragThing.clear();
	        this.paintScene();
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(prefab_drag_action_1.PrefabDragAction)
	], SceneWindow.prototype, "handleAssetDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseOver(prefab_drag_action_1.PrefabDragAction)
	], SceneWindow.prototype, "handleAssetDragHover", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(prefab_drag_action_1.PrefabDragAction)
	], SceneWindow.prototype, "handleAssetDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(prefab_drag_action_1.PrefabDragAction)
	], SceneWindow.prototype, "handleAssetDrop", null);
	exports.SceneWindow = SceneWindow;
	createStyleSheet(`
	<style>
	        
	.scene-window-root {
	    overflow:hidden;
	    width: 100%;
	    height: 100%;
	    display: flex;
	    flex-direction: column;
	    position: relative;
	}

	.scene-render-root {
	    position: relative;
	}

	.overlay-canvas {
	    position: absolute;
	    top:21px; /*position under meta bar */
	    left:0;
	}

	</style>`);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const button_1 = __webpack_require__(59);
	const scene_window_1 = __webpack_require__(68);
	const editor_theme_1 = __webpack_require__(56);
	const breakpoint_1 = __webpack_require__(70);
	const editor_html_element_1 = __webpack_require__(19);
	function round(places) {
	    return function (value) {
	        return value.toFixed(places);
	    };
	}
	class SceneMetaBar extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "scene-meta-bar" };
	    }
	    onRendered() {
	        this.scene = this.getAncestorByType(scene_window_1.SceneWindow);
	        this.sceneSizeButtons = this.getChildBySelector(".scene-size").getChildrenByType(button_1.Button);
	        this.setSelectedButton(this.scene.getBreakpoint());
	    }
	    createInitialStructure() {
	        return [
	            Hex.createElement("div", { class: "zoom-level" },
	                Hex.createElement("span", null,
	                    "Zoom Level \u00A0",
	                    new window.EditorBindingElement(this, ["scene", "zoomLevel"]).format(round(2)))),
	            Hex.createElement("div", { class: "scene-size" },
	                Hex.createElement(button_1.Button, { onClick: () => { this.setScreenSize(breakpoint_1.BreakpointType.Mobile); } }, "Mobile"),
	                Hex.createElement(button_1.Button, { onClick: () => { this.setScreenSize(breakpoint_1.BreakpointType.Tablet); } }, "Tablet"),
	                Hex.createElement(button_1.Button, { onClick: () => { this.setScreenSize(breakpoint_1.BreakpointType.Laptop); } }, "Laptop"),
	                Hex.createElement(button_1.Button, { onClick: () => { this.setScreenSize(breakpoint_1.BreakpointType.Desktop); } }, "Desktop"))
	        ];
	    }
	    setScreenSize(breakpointType) {
	        this.scene.setPreviewSize(breakpointType);
	        this.setSelectedButton(breakpointType);
	    }
	    setSelectedButton(breakpointType) {
	        this.sceneSizeButtons.forEach(function (button) {
	            button.toggleClass("selected", breakpoint_1.BreakpointType[breakpointType] === button.getText());
	        });
	    }
	}
	exports.SceneMetaBar = SceneMetaBar;
	createStyleSheet(`<style>

	.zoom-level {
	    position: absolute;
	    left: 12px;
	}

	.scene-meta-bar {
	    height: 21px;
	    width: 100%;
	    background: ${editor_theme_1.WindowColors.foregroundGrey};
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    justify-content: flex-end;
	    z-index:2;
	}

	.scene-size .btn {
	    background: none;
	    border: none;
	}

	.scene-size .selected {
	    background: aliceblue;
	    border-left: 1px solid grey;
	    border-right: 1px solid grey;
	}

	`);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const vector2_1 = __webpack_require__(17);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	var BreakpointType;
	(function (BreakpointType) {
	    BreakpointType[BreakpointType["Mobile"] = 0] = "Mobile";
	    BreakpointType[BreakpointType["Tablet"] = 1] = "Tablet";
	    BreakpointType[BreakpointType["Laptop"] = 2] = "Laptop";
	    BreakpointType[BreakpointType["Desktop"] = 3] = "Desktop";
	})(BreakpointType = exports.BreakpointType || (exports.BreakpointType = {}));
	var BreakpointOrientation;
	(function (BreakpointOrientation) {
	    BreakpointOrientation[BreakpointOrientation["Portrait"] = 0] = "Portrait";
	    BreakpointOrientation[BreakpointOrientation["Landscape"] = 1] = "Landscape";
	})(BreakpointOrientation = exports.BreakpointOrientation || (exports.BreakpointOrientation = {}));
	let Breakpoint = class Breakpoint {
	    //todo this is super basic
	    static getDimensions(name) {
	        switch (name) {
	            case BreakpointType.Mobile:
	                return new vector2_1.Vector2(375, 667); //iphone 7
	            case BreakpointType.Tablet:
	                return new vector2_1.Vector2(768, 1024); //ipad
	            case BreakpointType.Laptop:
	                return new vector2_1.Vector2(1280, 800); //macbook
	            case BreakpointType.Desktop:
	                return new vector2_1.Vector2(1920, 1080); //hd desktop monitor
	            default:
	                return new vector2_1.Vector2(-1, -1);
	        }
	    }
	};
	Breakpoint = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], Breakpoint);
	exports.Breakpoint = Breakpoint;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const scene_tool_1 = __webpack_require__(72);
	const util_1 = __webpack_require__(16);
	const app_element_1 = __webpack_require__(29);
	var DragSide;
	(function (DragSide) {
	    DragSide[DragSide["None"] = 0] = "None";
	    DragSide[DragSide["Center"] = 1] = "Center";
	    DragSide[DragSide["Top"] = 2] = "Top";
	    DragSide[DragSide["Left"] = 3] = "Left";
	    DragSide[DragSide["Right"] = 4] = "Right";
	    DragSide[DragSide["Bottom"] = 5] = "Bottom";
	    DragSide[DragSide["TopRight"] = 6] = "TopRight";
	    DragSide[DragSide["TopLeft"] = 7] = "TopLeft";
	    DragSide[DragSide["BottomRight"] = 8] = "BottomRight";
	    DragSide[DragSide["BottomLeft"] = 9] = "BottomLeft";
	})(DragSide || (DragSide = {}));
	class SceneRectTool extends scene_tool_1.SceneTool {
	    constructor() {
	        super(...arguments);
	        this.draggedSide = DragSide.None;
	        this.panning = false;
	    }
	    update() {
	        const input = EditorRuntime.getInput();
	        const selection = EditorRuntime.getSelection();
	        const mouse = input.getMouseRelativeToEditorElement(this.sceneBodyRoot);
	        const inElement = input.isMouseInEditorElement(this.sceneBodyRoot);
	        if (selection) {
	            let rect = selection.getBoundingBox();
	            if (input.isMouseDownThisFrame() && inElement) {
	                this.draggedSide = SceneRectTool.hitTestDragSide(mouse, rect);
	                if (this.draggedSide === DragSide.None) {
	                    const element = EditorRuntime.getAppElementAtPoint(mouse);
	                    if (element && element !== app_element_1.AppElement.Root && element !== selection) {
	                        EditorRuntime.select(element);
	                    }
	                    else {
	                        this.panning = true;
	                    }
	                }
	                return;
	            }
	            else if (input.isMouseDown()) {
	                if (this.draggedSide !== DragSide.None) {
	                    this.updateDragSide(input.getMouseDelta(), selection);
	                }
	                else if (this.panning) {
	                    this.sceneWindow.pan(input.getMouseDelta());
	                }
	            }
	            else if (input.isMouseUp()) {
	                this.draggedSide = DragSide.None;
	                this.panning = false;
	            }
	            if (this.draggedSide === DragSide.None) {
	                this.setHoverCursor(SceneRectTool.hitTestDragSide(mouse, rect));
	            }
	        }
	        else {
	            EditorRuntime.setCursor('default');
	            this.draggedSide = DragSide.None;
	            if (!inElement || input.isMouseUp()) {
	                this.panning = false;
	                return;
	            }
	            if (input.isMouseDownThisFrame()) {
	                this.panning = true;
	            }
	            if (this.panning) {
	                this.sceneWindow.pan(input.getMouseDelta());
	            }
	        }
	    }
	    setHoverCursor(dragSide) {
	        switch (dragSide) {
	            case DragSide.Top:
	            case DragSide.Bottom:
	                EditorRuntime.setCursor('ns-resize');
	                break;
	            case DragSide.Left:
	            case DragSide.Right:
	                EditorRuntime.setCursor('ew-resize');
	                break;
	            case DragSide.TopRight:
	            case DragSide.BottomLeft:
	                EditorRuntime.setCursor('nesw-resize');
	                break;
	            case DragSide.TopLeft:
	            case DragSide.BottomRight:
	                EditorRuntime.setCursor('nwse-resize');
	                break;
	            default:
	                EditorRuntime.setCursor('default');
	                break;
	        }
	    }
	    static hitTestDragSide(point, bounds) {
	        const x = bounds.x;
	        const y = bounds.y;
	        const xw = bounds.x + bounds.width;
	        const yh = bounds.y + bounds.height;
	        if (util_1.distanceTestPoint(x, y, point, 5))
	            return DragSide.TopLeft;
	        if (util_1.distanceTestPoint(xw, y, point, 5))
	            return DragSide.TopRight;
	        if (util_1.distanceTestPoint(x, yh, point, 5))
	            return DragSide.BottomLeft;
	        if (util_1.distanceTestPoint(xw, yh, point, 5))
	            return DragSide.BottomRight;
	        if (util_1.hitTestLine(x, y, xw, y, point, 3))
	            return DragSide.Top;
	        if (util_1.hitTestLine(x, y, x, yh, point, 3))
	            return DragSide.Left;
	        if (util_1.hitTestLine(x, yh, xw, yh, point, 3))
	            return DragSide.Bottom;
	        if (util_1.hitTestLine(xw, y, xw, yh, point, 3))
	            return DragSide.Right;
	        if (bounds.containsPoint(point))
	            return DragSide.Center;
	        return DragSide.None;
	    }
	    updateDragSide(delta, appElement) {
	        //todo may want this to be Axis-Aligned
	        const rect = appElement.getBoundingBox();
	        switch (this.draggedSide) {
	            case DragSide.TopRight:
	                rect.y += delta.y;
	                rect.width += delta.x;
	                rect.height -= delta.y;
	                break;
	            case DragSide.TopLeft:
	                rect.x += delta.x;
	                rect.y += delta.y;
	                rect.width -= delta.x;
	                rect.height -= delta.y;
	                break;
	            case DragSide.BottomLeft:
	                rect.x += delta.x;
	                rect.width -= delta.x;
	                rect.height += delta.y;
	                break;
	            case DragSide.BottomRight:
	                rect.width += delta.x;
	                rect.height += delta.y;
	                break;
	            case DragSide.Top:
	                rect.y += delta.y;
	                rect.height -= delta.y;
	                break;
	            case DragSide.Left:
	                rect.x += delta.x;
	                rect.width -= delta.x;
	                break;
	            case DragSide.Right:
	                rect.width += delta.x;
	                break;
	            case DragSide.Bottom:
	                rect.height += delta.y;
	                break;
	            case DragSide.Center:
	                rect.x += delta.x;
	                rect.y += delta.y;
	                break;
	        }
	        if (rect.width < 1)
	            rect.width = 1;
	        if (rect.height < 1)
	            rect.height = 1;
	        if (rect.height === 1 && delta.y > 0) {
	            rect.y -= delta.y;
	        }
	        if (rect.width === 1 && delta.x > 0) {
	            rect.x -= delta.x;
	        }
	        appElement.setPositionValues(rect.x, rect.y);
	        appElement.setDimensions(rect.width, rect.height);
	    }
	}
	exports.SceneRectTool = SceneRectTool;


/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class SceneTool {
	    constructor(sceneWindow) {
	        this.sceneWindow = sceneWindow;
	        this.sceneBodyRoot = this.sceneWindow.getChildRoot();
	    }
	    update() { }
	    enable() { }
	    disable() { }
	}
	exports.SceneTool = SceneTool;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vertical_stack_1 = __webpack_require__(74);
	const text_input_1 = __webpack_require__(75);
	const evt_selection_changed_1 = __webpack_require__(5);
	const editor_window_element_1 = __webpack_require__(66);
	const inspector_row_1 = __webpack_require__(77);
	const component_menu_1 = __webpack_require__(78);
	const editor_theme_1 = __webpack_require__(56);
	const component_renderer_1 = __webpack_require__(81);
	const element_renderer_1 = __webpack_require__(7);
	const app_element_inspector_1 = __webpack_require__(85);
	const binding_1 = __webpack_require__(13);
	const checkbox_input_1 = __webpack_require__(84);
	class InspectorWindow extends editor_window_element_1.EditorWindowElement {
	    onSelectionChanged(newSelection, oldSelection) {
	        this.selection = newSelection;
	        this.getChildRoot().clearChildren();
	        if (!this.selection)
	            return;
	        this.getChildRoot().addChild(element_renderer_1.createElement(app_element_inspector_1.TransformInspector, {
	            appElement: this.selection
	        }));
	        const components = newSelection.getAllComponents();
	        for (let i = 0; i < components.length; i++) {
	            this.createComponentDrawer(components[i]);
	        }
	        this.getChildRoot().addChild(element_renderer_1.createElement(component_menu_1.ComponentMenu));
	    }
	    onUpdated() {
	        if (!this.selection)
	            return;
	        this.proxy.isEnabled = this.selection.isEnabled();
	        const components = this.selection.getAllComponents();
	        for (let i = 0; i < components.length; i++) {
	            const cmp = components[i];
	            if (cmp.onInspectorUpdated) {
	                cmp.onInspectorUpdated();
	            }
	        }
	    }
	    onRendered() {
	        this.proxy = { isEnabled: true };
	        this.isEnabledBinding = binding_1.CreateBinding(this.proxy, "isEnabled").onChange((value) => {
	            if (this.selection) {
	                this.selection.setActive(value);
	            }
	        });
	        EditorRuntime.updateTree.add(this);
	        EditorRuntime.on(evt_selection_changed_1.SelectionChanged, this);
	        this.onSelectionChanged(EditorRuntime.getSelection(), null);
	    }
	    createInitialStructure(children) {
	        return Hex.createElement("div", { class: "inspector-window" },
	            Hex.createElement("div", { class: "inspector-header" },
	                Hex.createElement("div", { "x-if": { ctx: this, invert: false, path: "selection" }, class: "inspector-name-field" },
	                    Hex.createElement(inspector_row_1.InspectorRow, { label: "Name" },
	                        Hex.createElement(text_input_1.TextInput, { value: binding_1.CreateBinding(this, "selection", "name") })),
	                    Hex.createElement(inspector_row_1.InspectorRow, { label: "Active" },
	                        Hex.createElement(checkbox_input_1.CheckboxInput, { value: this.isEnabledBinding })))),
	            Hex.createElement(vertical_stack_1.Vertical, { "x-child-root": true }));
	    }
	    createComponentDrawer(component) {
	        const renderer = component_renderer_1.ComponentRenderer.get(component);
	        if (renderer) {
	            this.getChildRoot().addChild(renderer);
	        }
	    }
	}
	exports.InspectorWindow = InspectorWindow;
	createStyleSheet(`
	<style>

	.inspector-window {
	    width:100%;
	    overflow: auto;
	    display:flex;
	    flex-direction:column;
	}

	.inspector-header {
	    background: ${editor_theme_1.WindowColors.foregroundGrey};
	    border-bottom: 1px solid ${editor_theme_1.WindowColors.borderGrey};
	}
	  
	</style>`);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class VerticalBase extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return VerticalBase.DomData;
	    }
	}
	VerticalBase.DomData = { tagName: "div", classList: "vertical" };
	exports.VerticalBase = VerticalBase;
	class Vertical extends VerticalBase {
	}
	exports.Vertical = Vertical;
	createStyleSheet(`<style>

	.vertical {
	    display:flex;
	    flex-direction:column;
	}

	</style>`);


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(76);
	class TextInput extends editor_input_1.InputRenderer {
	    getDomData() {
	        return {
	            tagName: "input",
	            style: "width: 100%",
	            attributes: {
	                type: "text"
	            }
	        };
	    }
	    onMounted() {
	        this.htmlNode.value = this.binding.get();
	        this.binding.onChange(() => {
	            this.htmlNode.value = this.binding.get();
	        });
	        this.htmlNode.addEventListener("input", (e) => {
	            const value = this.htmlNode.value || "";
	            this.binding.set(value);
	        });
	    }
	    onValueChanged(newValue) {
	        this.htmlNode.value = newValue || "";
	    }
	}
	exports.TextInput = TextInput;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const binding_1 = __webpack_require__(13);
	const editor_html_element_1 = __webpack_require__(19);
	class InputRenderer extends editor_html_element_1.EditorHTMLElement {
	    onCreated() {
	        if (this.attrs.value instanceof binding_1.EditorBinding) {
	            this.binding = this.attrs.value;
	            this.binding.setHost(this);
	            this.binding.onChange((a, b) => {
	                this.onValueChanged(a, b);
	            });
	        }
	        else {
	            //todo -- this should maybe just be fake / static
	            this.binding = binding_1.CreateBinding(this.attrs, "value");
	        }
	    }
	    onValueChanged(newValue, oldValue) { }
	}
	exports.InputRenderer = InputRenderer;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const util_1 = __webpack_require__(16);
	const editor_html_element_1 = __webpack_require__(19);
	class InspectorRow extends editor_html_element_1.EditorHTMLElement {
	    onCreated() {
	        this.attrs.label = util_1.titlize(this.attrs.label);
	    }
	    getDomData() {
	        return { tagName: "div", classList: "horizontal" };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("div", { class: "inspector-label" }, this.attrs.label),
	            Hex.createElement("div", { class: "inspector-value" }, children)
	        ];
	    }
	}
	exports.InspectorRow = InspectorRow;
	createStyleSheet(`<style>

	    .inspector-label {
	        padding-left: 1.8em;
	        width: 175px;
	    }
	    
	    .inspector-value {
	        padding-right: 1em;
	        flex: 2;
	    }

	`);


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vertical_stack_1 = __webpack_require__(74);
	const text_box_icon_1 = __webpack_require__(79);
	const button_1 = __webpack_require__(59);
	const component_option_1 = __webpack_require__(80);
	const component_1 = __webpack_require__(37);
	const element_renderer_1 = __webpack_require__(7);
	const editor_html_element_1 = __webpack_require__(19);
	class ComponentMenu extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.showComponentSelection = false;
	    }
	    getDomData() {
	        return { tagName: "div", classList: "inspector-component-menu" };
	    }
	    onRendered() {
	        const componentPairs = component_1.Component.getComponentTypePathPairs();
	        componentPairs.sort(function (item1, item2) {
	            if (item1.path < item2.path)
	                return -1;
	            if (item1.path > item2.path)
	                return 1;
	            return 0;
	        });
	        for (let i = 0; i < componentPairs.length; i++) {
	            this.getChildRoot().addChild(element_renderer_1.createElement(component_option_1.ComponentOption, {
	                label: componentPairs[i].path,
	                onClick: () => this.addComponent(componentPairs[i].type)
	            }));
	        }
	    }
	    onUpdated() {
	        if (EditorRuntime.getInput().isMouseDown()) {
	            const mp = EditorRuntime.getInput().getMousePosition();
	            if (!this.isElementInHierarchy(document.elementFromPoint(mp.x, mp.y))) {
	                this.showComponentSelection = false;
	            }
	        }
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("h4", { class: "add-component-title", "x-if": { ctx: this, invert: false, path: "showComponentSelection" } }, "Add Component"),
	            Hex.createElement(button_1.Button, { "x-if-eval": () => !this.showComponentSelection, onClick: () => this.showComponentSelection = true }, "Add Component"),
	            Hex.createElement(vertical_stack_1.Vertical, { "x-if": { ctx: this, invert: false, path: "showComponentSelection" } },
	                Hex.createElement(text_box_icon_1.TextBoxWithIcon, { iconName: "search", color: "grey", binding: "searchString" }),
	                Hex.createElement(vertical_stack_1.Vertical, { "x-child-root": true }))
	        ];
	    }
	    addComponent(componentType) {
	        EditorRuntime.getSelection().addComponent(componentType);
	        this.showComponentSelection = false;
	    }
	}
	exports.ComponentMenu = ComponentMenu;
	createStyleSheet(`
	<style>

	.inspector-component-menu {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    margin: 1em;
	    border: 1px solid grey;
	}

	.inspector-component-menu .add-component-title {
	    margin: 0.2em; auto;
	}

	.inspector-component-menu .component-item:hover {
	    background: rgba(69,245,255,0.32);
	}

	</style>`);


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class TextBoxWithIcon extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return {
	            tagName: "div",
	            classList: this.getClassList()
	        };
	    }
	    getClassList() {
	        return "inner-addon " + (this.attrs.iconSide === "left" ? "left-addon" : "right-addon");
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("i", { "x-id": "icon", class: "fa fa-" + this.attrs.iconName }),
	            Hex.createElement("input", { placeholder: "search", type: "text", class: "text-with-icon" })
	        ];
	    }
	    onMounted() {
	        if (this.attrs.color) {
	            this.getChildById("icon").getDomNode().style.color = this.attrs.color;
	        }
	    }
	}
	exports.TextBoxWithIcon = TextBoxWithIcon;
	createStyleSheet(`<style>

	.inner-addon { 
	    position: relative; 
	}

	.text-with-icon {
	    width: 100%;
	}

	/* style icon */
	.inner-addon .fa {
	  position: absolute;
	  padding-right: 3px;
	  padding-left: 3px;
	  padding-top: 3px;
	  pointer-events: none;
	}

	/* align icon */
	.left-addon .fa  { left:  0;}
	.right-addon .fa { right: 0;}

	/* add padding  */
	.left-addon input  { padding-left:  30px; }
	.right-addon input { padding-right: 30px; }

	</style>`);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class ComponentOption extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "component-item" };
	    }
	    createInitialStructure() {
	        return this.attrs.label;
	    }
	}
	exports.ComponentOption = ComponentOption;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const property_renderer_1 = __webpack_require__(82);
	const horizontal_1 = __webpack_require__(83);
	const icon_1 = __webpack_require__(61);
	const element_renderer_1 = __webpack_require__(7);
	const checkbox_input_1 = __webpack_require__(84);
	const util_1 = __webpack_require__(16);
	const editor_theme_1 = __webpack_require__(56);
	const expose_as_1 = __webpack_require__(42);
	const editor_html_element_1 = __webpack_require__(19);
	const binding_1 = __webpack_require__(13);
	class ComponentRenderer extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.editorDataMap = expose_as_1.getExposedFieldMap(this.attrs.component);
	        this.component = this.attrs.component;
	    }
	    getDomData() {
	        return { tagName: "div", classList: "component-renderer" };
	    }
	    getRenderer(propertyName, attrs) {
	        const editorData = this.editorDataMap.get(propertyName);
	        return property_renderer_1.PropertyRenderer.get(this.attrs.component, editorData, attrs);
	    }
	    createInitialStructure(children) {
	        return [
	            this.createStandardHeaderStructure(),
	            this.createStandardBodyStructure(children)
	        ];
	    }
	    createStandardHeaderStructure() {
	        return Hex.createElement(horizontal_1.Horizontal, { style: "position:relative" },
	            Hex.createElement(icon_1.ToggleIcon, { class: "inspector-toggle", visibilityTarget: () => this.getChildRoot() }),
	            Hex.createElement(checkbox_input_1.CheckboxInput, { class: "enabled-input", value: binding_1.CreateBinding(this.component, "isEnabled") }),
	            Hex.createElement("span", { class: "component-name" }, this.getDisplayName(this.attrs.component.constructor.name)));
	    }
	    createStandardBodyStructure(children) {
	        return Hex.createElement("div", { "x-child-root": true, class: "component-renderer-child-root" }, children);
	    }
	    getDisplayName(input) {
	        const split = util_1.titlize(input).split(" ");
	        if (split[split.length - 1] === "Component") {
	            split.pop();
	        }
	        return split.join(" ");
	    }
	    static get(component) {
	        const type = component.constructor;
	        const rendererType = ComponentRenderer.rendererMap.get(type);
	        return element_renderer_1.createElement(rendererType || DefaultComponentRenderer, {
	            component: component
	        });
	    }
	    static annotation(component) {
	        return function (target) {
	            ComponentRenderer.rendererMap.set(component, target);
	        };
	    }
	}
	ComponentRenderer.rendererMap = new Map();
	exports.ComponentRenderer = ComponentRenderer;
	exports.renderer = ComponentRenderer.annotation;
	class DefaultComponentRenderer extends ComponentRenderer {
	    onRendered() {
	        if (!this.editorDataMap)
	            return;
	        const childRoot = this.getChildRoot();
	        this.editorDataMap.forEach((value) => {
	            let renderer = property_renderer_1.PropertyRenderer.get(this.attrs.component, value);
	            if (renderer) {
	                childRoot.addChild(renderer);
	            }
	        });
	    }
	}
	createStyleSheet(`<style>

	.component-renderer {
	    border-bottom: 1px solid ${editor_theme_1.WindowColors.borderGrey};
	    margin-bottom: 0.25em;
	    padding-bottom: 0.25em;
	}

	.component-renderer .inspector-toggle {
	    position: absolute;
	    top: 4px;
	    left: 1px;
	    font-size: 0.7em;
	}

	.component-renderer .enabled-input {
	    position: absolute;
	    left: 10px;
	}

	.component-renderer .component-name {
	    padding-left: 2em;
	    font-weight: 800;
	    font-size: 0.9em;
	}
	</style>`);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const element_renderer_1 = __webpack_require__(7);
	const editor_html_element_1 = __webpack_require__(19);
	class PropertyRenderer extends editor_html_element_1.EditorHTMLElement {
	    createInitialStructure(children) {
	        return children;
	    }
	    static set(type, renderer) {
	        PropertyRenderer.RendererMap.set(type, renderer);
	    }
	    static get(component, editorData, attrs = null) {
	        const rendererType = PropertyRenderer.RendererMap.get(editorData.propertyType);
	        return element_renderer_1.createElement(rendererType, Object.assign({ component, editorData }, attrs));
	    }
	}
	PropertyRenderer.RendererMap = new Map();
	exports.PropertyRenderer = PropertyRenderer;
	//change propogation
	//input -> notify upwards of changes
	//send every frame
	//check every frame


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class HorizontalBase extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return HorizontalBase.DomData;
	    }
	}
	HorizontalBase.DomData = { tagName: "div", classList: "horizontal" };
	exports.HorizontalBase = HorizontalBase;
	class Horizontal extends HorizontalBase {
	}
	exports.Horizontal = Horizontal;
	createStyleSheet(`<style>
	.horizontal {
	    display:flex;
	    flex-direction:row;
	}
	</style>`);


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(76);
	class CheckboxInput extends editor_input_1.InputRenderer {
	    getDomData() {
	        return {
	            tagName: "input",
	            attributes: { type: "checkbox" }
	        };
	    }
	    onMounted() {
	        this.binding.onChange(() => {
	            this.htmlNode.checked = Boolean(this.binding.get());
	        });
	        this.htmlNode.addEventListener("change", () => {
	            this.binding.set(this.htmlNode.checked);
	        }, true);
	    }
	    onValueChanged(newValue) {
	        this.htmlNode.checked = newValue;
	    }
	}
	exports.CheckboxInput = CheckboxInput;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	const inspector_row_1 = __webpack_require__(77);
	const vector2_input_1 = __webpack_require__(86);
	const binding_1 = __webpack_require__(13);
	const app_element_1 = __webpack_require__(29);
	const number_input_1 = __webpack_require__(87);
	const inline_field_1 = __webpack_require__(88);
	const editor_theme_1 = __webpack_require__(56);
	const dimension_input_1 = __webpack_require__(89);
	class TransformInspector extends editor_html_element_1.EditorHTMLElement {
	    onCreated() {
	        this.appElement = this.attrs.appElement;
	        this.proxy = {
	            localPosition: this.appElement.getLocalPosition(),
	            localRotation: this.appElement.getRotation(),
	            localScale: this.appElement.getScale(),
	            dimension: {
	                width: this.appElement.getWidth(),
	                height: this.appElement.getHeight()
	            }
	        };
	        this.localPositionBinding = binding_1.CreateBinding(this.proxy, "localPosition").onChange((newValue) => {
	            this.appElement.setPosition(newValue, app_element_1.Space.Local);
	        });
	        this.localRotationBinding = binding_1.CreateBinding(this.proxy, "localRotation").onChange((newValue) => {
	            this.appElement.setRotation(newValue);
	        });
	        this.localScaleBinding = binding_1.CreateBinding(this.proxy, "localScale").onChange((newValue) => {
	            this.appElement.setScale(newValue);
	        });
	        this.dimensionBinding = binding_1.CreateBinding(this.proxy, "dimension").onChange((newValue) => {
	            this.appElement.setWidth(newValue.width);
	            this.appElement.setHeight(newValue.height);
	        });
	        EditorRuntime.updateTree.add(this);
	    }
	    onUpdated() {
	        this.proxy.localPosition = this.appElement.getLocalPosition();
	        this.proxy.localRotation = this.appElement.getRotation();
	        this.proxy.localScale = this.appElement.getScale();
	        this.proxy.dimension.width = this.appElement.getWidth();
	        this.proxy.dimension.height = this.appElement.getHeight();
	    }
	    createInitialStructure() {
	        return [
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Position" },
	                Hex.createElement(vector2_input_1.Vector2Input, { value: this.localPositionBinding })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Scale" },
	                Hex.createElement(vector2_input_1.Vector2Input, { value: this.localScaleBinding })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Rotation" },
	                Hex.createElement(inline_field_1.InlineField, { label: "" },
	                    Hex.createElement(number_input_1.NumberInput, { value: this.localRotationBinding }))),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Dimensions" },
	                Hex.createElement(dimension_input_1.DimensionInput, { value: this.dimensionBinding }))
	        ];
	    }
	}
	exports.TransformInspector = TransformInspector;
	createStyleSheet(`<style>

	.transform-inspector {
	    border-bottom: 1px solid ${editor_theme_1.WindowColors.borderGrey};
	}

	`);


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const number_input_1 = __webpack_require__(87);
	const binding_1 = __webpack_require__(13);
	const editor_input_1 = __webpack_require__(76);
	const horizontal_1 = __webpack_require__(83);
	class Vector2Input extends editor_input_1.InputRenderer {
	    createInitialStructure(children) {
	        return Hex.createElement(horizontal_1.Horizontal, null,
	            Hex.createElement("div", { class: "field-row" },
	                Hex.createElement("span", { class: "field-label" }, "x = \u00A0"),
	                Hex.createElement(number_input_1.NumberInput, { style: `padding-left: ${24}px`, value: binding_1.CreateBinding(this.binding, "x") })),
	            Hex.createElement("div", { class: "field-row" },
	                Hex.createElement("span", { class: "field-label" }, "y = \u00A0"),
	                Hex.createElement(number_input_1.NumberInput, { style: `padding-left: ${24}px`, value: binding_1.CreateBinding(this.binding, "y") })));
	    }
	}
	exports.Vector2Input = Vector2Input;
	createStyleSheet(`<style>
	    .field-row {
	        position: relative;
	    }
	    
	    .field-label {
	        position: absolute;
	        left: 2px;
	    }
	`);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(76);
	class NumberInput extends editor_input_1.InputRenderer {
	    getDomData() {
	        return {
	            tagName: "input",
	            style: "width: 100%",
	            attributes: {
	                type: "text",
	            }
	        };
	    }
	    onMounted() {
	        this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
	        this.binding.onChange(() => {
	            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
	        });
	        this.htmlNode.addEventListener("input", (e) => {
	            let value = this.htmlNode.value || "0";
	            let parsedValue = this.formatNumber(value);
	            if (!isNaN(parsedValue)) {
	                this.binding.set(parsedValue);
	            }
	        });
	        this.htmlNode.addEventListener("focusout", () => {
	            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
	        });
	    }
	    onValueChanged(newValue) {
	        this.htmlNode.value = this.formatNumber(newValue).toString();
	    }
	    formatNumber(input) {
	        return parseFloat(input);
	    }
	}
	exports.NumberInput = NumberInput;
	class IntegerInput extends NumberInput {
	    formatNumber(input) {
	        return parseInt(input);
	    }
	}
	exports.IntegerInput = IntegerInput;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const horizontal_1 = __webpack_require__(83);
	class InlineField extends horizontal_1.HorizontalBase {
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("span", { class: "inline-label" }, this.attrs.label),
	            children
	        ];
	    }
	}
	exports.InlineField = InlineField;
	createStyleSheet(`<style>

	    .inline-label {
	        /*padding-left: 1.8em;*/
	        width: 125px;
	    }
	    
	`);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const number_input_1 = __webpack_require__(87);
	const binding_1 = __webpack_require__(13);
	const editor_input_1 = __webpack_require__(76);
	const horizontal_1 = __webpack_require__(83);
	class DimensionInput extends editor_input_1.InputRenderer {
	    createInitialStructure(children) {
	        return Hex.createElement(horizontal_1.Horizontal, null,
	            Hex.createElement("div", { class: "field-row" },
	                Hex.createElement("span", { class: "field-label" }, "width = \u00A0"),
	                Hex.createElement(number_input_1.NumberInput, { style: `padding-left: ${52}px`, value: binding_1.CreateBinding(this.binding, "width") })),
	            Hex.createElement("div", { class: "field-row" },
	                Hex.createElement("span", { class: "field-label" }, "height = \u00A0"),
	                Hex.createElement(number_input_1.NumberInput, { style: `padding-left: ${56}px`, value: binding_1.CreateBinding(this.binding, "height") })));
	    }
	}
	exports.DimensionInput = DimensionInput;
	createStyleSheet(`<style>
	    
	    .dimension-input .field-row {
	        position: relative;
	    }
	    
	    .dimension-input .field-label {
	        position: absolute;
	        left: 2px;
	    }
	`);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_window_element_1 = __webpack_require__(66);
	const vector2_1 = __webpack_require__(17);
	const asset_item_1 = __webpack_require__(91);
	const element_renderer_1 = __webpack_require__(7);
	const prefab_asset_item_1 = __webpack_require__(94);
	const editor_element_annotations_1 = __webpack_require__(67);
	const editor_theme_1 = __webpack_require__(56);
	const folder_asset_item_1 = __webpack_require__(96);
	const folder_asset_1 = __webpack_require__(97);
	const icon_1 = __webpack_require__(61);
	const drag_action_1 = __webpack_require__(38);
	const drag_hierarchy_item_1 = __webpack_require__(62);
	const evt_asset_created_1 = __webpack_require__(45);
	const image_asset_item_1 = __webpack_require__(98);
	class AssetWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.mouse = new vector2_1.Vector2();
	        this.selectedItem = null;
	    }
	    onRendered() {
	        this.loadAssets();
	        EditorRuntime.updateTree.add(this);
	        EditorRuntime.on(evt_asset_created_1.AssetCreated, this);
	    }
	    loadAssets() {
	        // const manifest = require("../../_data/assets");
	        // manifest.forEach((data : any) => {
	        //     this.getChildRoot().addChild(this.loadAsset(data));
	        // });
	    }
	    loadAsset(assetDescription, path = "") {
	        const name = assetDescription.name;
	        assetDescription.path = (path !== "") ? path + "/" + name : name;
	        const children = assetDescription.children.map((child) => {
	            return this.loadAsset(child, assetDescription.path);
	        });
	        switch (assetDescription.type) {
	            case "folder":
	                return element_renderer_1.createElement(folder_asset_item_1.FolderAssetItem, {
	                    asset: null //new FolderAsset(assetDescription)
	                }, ...children);
	            case "image":
	                return null; //createElement(AssetSectionItem, data);
	            case "prefab":
	                return element_renderer_1.createElement(prefab_asset_item_1.PrefabAssetItem, {
	                    asset: null //new PrefabTemplate(assetDescription)
	                }, ...children);
	        }
	        return null;
	    }
	    select() {
	        const input = EditorRuntime.getInput();
	        input.getMousePosition(this.mouse);
	        const mouseOver = EditorRuntime.getEditorElementAtPoint(this.mouse);
	        if (mouseOver.getAncestorByType(icon_1.ToggleIcon, true))
	            return;
	        if (this.selectedItem) {
	            this.selectedItem.deselect();
	        }
	        this.selectedItem = mouseOver.getAncestorByType(asset_item_1.EditorAssetItem, true);
	        if (this.selectedItem) {
	            this.selectedItem.select();
	        }
	    }
	    showContextMenu() {
	        this.select();
	        this.createContextMenu();
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        const inElement = input.isMouseInEditorElement(this);
	        if (!inElement) {
	            return;
	        }
	        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
	            input.getMouseDownDelta(this.mouse);
	            if (this.mouse.lengthSquared() > 64) {
	                input.getMouseDownPosition(this.mouse);
	                let hoverElement = EditorRuntime.getEditorElementAtPoint(this.mouse, asset_item_1.EditorAssetItem);
	                if (!hoverElement) {
	                    return;
	                }
	                EditorRuntime.beginDragAction(hoverElement.createDragAction());
	            }
	        }
	    }
	    createFolder() {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            let path = System.AssetRoot;
	            let parent = null;
	            if (this.selectedItem) {
	                parent = this.selectedItem.getAncestorByType(folder_asset_item_1.FolderAssetItem, true);
	                if (parent)
	                    path += parent.getPath() + "/";
	            }
	            path = FileSystem.createUniqueFilePath(path + "New Folder");
	            alert(path);
	            const asset = new folder_asset_1.FolderAsset(path);
	            yield FileSystem.createDirectory(path);
	            const folder = element_renderer_1.createElement(folder_asset_item_1.FolderAssetItem, { asset: new folder_asset_1.FolderAsset(path) });
	            (parent || this).getChildRoot().addChild(folder);
	        });
	    }
	    onHierarchyDragEnter() {
	        this.htmlNode.style.backgroundColor = "red";
	    }
	    onHierarchyDragExit() {
	        this.htmlNode.style.backgroundColor = null;
	    }
	    onHierarchyDrop(action) {
	        //const prefab = PrefabTemplate.createFromAppElement(action.appElement);
	        //this.getChildRoot().addChild(createElement(PrefabAssetItem, { asset: prefab }));
	    }
	    handleFileDrop(event) {
	        const project = EditorRuntime.getProject();
	        const files = event.dataTransfer.files;
	        const fn = Array.prototype.map;
	        project.importAll(fn.call(files, function (file) {
	            return file.path;
	        }));
	    }
	    onAssetCreated(asset) {
	        //create corresponding asset item at correct hierarchy point
	        const segments = asset.getPathSegments();
	        let ptr = this.getChildRoot();
	        let path = "";
	        for (let i = 0; i < segments.length - 1; i++) {
	            path += segments[i] + "/";
	            const next = this.getFolderByName(ptr, segments[i]);
	            if (!next) {
	                ptr.addChild(element_renderer_1.createElement(folder_asset_item_1.FolderAssetItem, { asset: new folder_asset_1.FolderAsset(path) }));
	            }
	            ptr = ptr.getChildRoot();
	        }
	        this.getChildRoot().addChild(this.createItemType(asset));
	    }
	    getFolderByName(target, name) {
	        const folders = target.getChildrenByType(folder_asset_item_1.FolderAssetItem);
	        for (let i = 0; i < folders.length; i++) {
	            // if(folders[i].getName() === name) {
	            //     return folders[i];
	            // }
	        }
	        return null;
	    }
	    onFolderCreated(folder) {
	    }
	    createItemType(asset) {
	        switch (asset.getExtension()) {
	            case "png":
	                return element_renderer_1.createElement(image_asset_item_1.ImageAssetItem, { asset });
	        }
	        return null;
	    }
	    onAssetMoved() {
	    }
	    renameAssetItem() {
	        const target = this.selectedItem.getAncestorByType(asset_item_1.EditorAssetItem, true);
	        if (!target)
	            return;
	        target.beginRename();
	    }
	    createScript() {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            //EditorRuntime.getProject().createAsset("Script");
	        });
	    }
	    createContextMenu() {
	        EditorRuntime.getInput().getMousePosition(this.mouse);
	        const menu = new nw.Menu();
	        menu.append(new nw.MenuItem({ label: "Create Folder", click: () => this.createFolder() }));
	        menu.append(new nw.MenuItem({ label: "Create Script", click: () => this.createScript() }));
	        menu.append(new nw.MenuItem({ label: "Rename", click: () => this.renameAssetItem() }));
	        menu.popup(this.mouse.x, this.mouse.y);
	    }
	}
	tslib_1.__decorate([
	    editor_element_annotations_1.onMouseDown
	], AssetWindow.prototype, "select", null);
	tslib_1.__decorate([
	    editor_element_annotations_1.onRightClick
	], AssetWindow.prototype, "showContextMenu", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(drag_hierarchy_item_1.HierarchyItemDragAction)
	], AssetWindow.prototype, "onHierarchyDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(drag_hierarchy_item_1.HierarchyItemDragAction)
	], AssetWindow.prototype, "onHierarchyDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(drag_hierarchy_item_1.HierarchyItemDragAction)
	], AssetWindow.prototype, "onHierarchyDrop", null);
	tslib_1.__decorate([
	    editor_element_annotations_1.onFileDrop
	], AssetWindow.prototype, "handleFileDrop", null);
	exports.AssetWindow = AssetWindow;
	createStyleSheet(`
	<style>

	.asset-window {
	    overflow:scroll;
	    width: 100%;
	    height: 100%;
	    position: relative;
	    padding-top: 4px;
	    padding-bottom: 4px;
	    background: ${editor_theme_1.WindowColors.backgroundGrey};
	}

	</style>`);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const asset_window_1 = __webpack_require__(90);
	const icon_1 = __webpack_require__(61);
	const text_selection_1 = __webpack_require__(92);
	const drag_action_1 = __webpack_require__(38);
	const asset_drag_action_1 = __webpack_require__(93);
	class AssetItemDropTarget extends editor_html_element_1.EditorHTMLElement {
	    onMounted() {
	        this.target = this.parent;
	    }
	    onDragEnter(action) {
	        if (this.target.canNestAsset(action.asset)) {
	            this.addClass("hover");
	        }
	    }
	    onDragExit() {
	        this.removeClass("hover");
	    }
	    //@DragAction.Drop(AssetDragAction)
	    onDrop(action) {
	        const grandParent = this.target.getAncestorByType(EditorAssetItem);
	        if (!grandParent || !grandParent.canNestAsset(action.asset)) {
	            return;
	        }
	        let idx = grandParent.getChildRoot().getChildIndex(this.target);
	        if (this.attrs.insert === "after")
	            idx++;
	        grandParent.getChildRoot().insertChild(action.item, idx);
	    }
	    createInitialStructure() {
	        return Hex.createElement("div", { class: "hover-target-display" });
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(asset_drag_action_1.AssetDragAction)
	], AssetItemDropTarget.prototype, "onDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(asset_drag_action_1.AssetDragAction)
	], AssetItemDropTarget.prototype, "onDragExit", null);
	class EditorAssetItem extends editor_html_element_1.EditorHTMLElement {
	    onCreated() {
	        this.asset = this.attrs.asset;
	        this.assetWindow = this.getAncestorByType(asset_window_1.AssetWindow);
	    }
	    setIconName(iconName) {
	        this.iconName = iconName;
	    }
	    canNestAsset(asset) {
	        return true;
	    }
	    createDragAction() {
	        return new asset_drag_action_1.AssetDragAction(this.asset, this);
	    }
	    getIconName() {
	        return this.iconName;
	    }
	    beginRename() {
	        const label = this.getChildBySelector(".name-label").getDomNode();
	        text_selection_1.TextSelection.makeEditable(label, (text) => {
	            return this.asset.setName(text);
	        }, true);
	    }
	    select() {
	        this.getChildBySelector('.asset-item-offset').addClass("selected");
	    }
	    deselect() {
	        this.getChildBySelector('.asset-item-offset').removeClass("selected");
	    }
	    getPath() {
	        return this.asset.getPath();
	    }
	    onAssetDragEnter(action) {
	        if (this.canNestAsset(action.asset)) {
	            this.getChildBySelector('.asset-item-offset').addClass("hovered");
	        }
	    }
	    onAssetDragExit() {
	        this.getChildBySelector('.asset-item-offset').removeClass("hovered");
	    }
	    onAssetDrop(action) {
	        if (!this.canNestAsset(action.asset))
	            return;
	        this.getChildRoot().addChild(action.item);
	        action.asset.move(this.asset.getPath());
	        //todo check for unique names
	    }
	    onParentChanged() {
	        const parent = this.getAncestorByType(EditorAssetItem);
	        parent.showToggleIcon(parent.getChildRoot().children.length > 0);
	        parent.asset.addChild(this.asset);
	        this.getChildBySelector(".asset-item-offset").setStyle({
	            paddingLeft: (this.asset.getDepth() * 12) + "px"
	        });
	        parent.onChildAdded(this);
	    }
	    onChildAdded(item) { }
	    showToggleIcon(shouldShow) {
	        this.getChildById("toggle").getDomNode().classList.toggle("invisible", !shouldShow);
	    }
	    setIcon(iconName) {
	        this.getChildBySelector('.asset-icon', icon_1.FontIcon).setIcon(iconName);
	    }
	    createInitialStructure(children) {
	        const depth = this.asset.getDepth();
	        const paddingLeft = "padding-left:" + (depth * 12) + "px";
	        return [
	            Hex.createElement(AssetItemDropTarget, { insert: "before" }),
	            Hex.createElement("div", { class: "asset-item-offset", style: paddingLeft },
	                Hex.createElement(icon_1.ToggleIcon, { "x-id": "toggle", "x-visible": children.length > 0, onToggle: (isOpen) => this.toggle(isOpen) }),
	                Hex.createElement(icon_1.FontIcon, { class: "asset-icon", iconName: this.getIconName() }),
	                Hex.createElement("div", { class: "name-label" },
	                    " ",
	                    this.asset.getName(),
	                    " ")),
	            Hex.createElement(AssetItemDropTarget, { insert: "after" }),
	            Hex.createElement("div", { "x-child-root": true, class: "asset-item-children" }, children),
	        ];
	    }
	    toggle(isOpen) {
	        this.getChildRoot().setVisible(isOpen);
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(asset_drag_action_1.AssetDragAction)
	], EditorAssetItem.prototype, "onAssetDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(asset_drag_action_1.AssetDragAction)
	], EditorAssetItem.prototype, "onAssetDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(asset_drag_action_1.AssetDragAction)
	], EditorAssetItem.prototype, "onAssetDrop", null);
	exports.EditorAssetItem = EditorAssetItem;
	createStyleSheet(`<style>
	    
	    .asset-item-drop-target {
	        position:relative;
	    }
	    
	    .asset-item-drop-target .hover-target-display {
	        position: absolute;
	        top: -2px;
	        left: 0;
	        height: 4px;
	        width: 100%;
	    }
	    
	    .asset-item-drop-target.hover .hover-target-display {
	        background: aliceblue;
	    }
	    
	    .asset-item-offset.selected {
	        color:white;
	        background: #62b4ff;
	    }
	    
	    .asset-item-offset.hovered {
	        background: #43ff5f;
	    }
	    
	    .asset-item-offset {
	        display:flex;
	        flex-direction: row;
	    }
	        
	    .asset-item-offset .name-label {
	        flex:1;
	        margin-right:2px;
	        margin-left: 2px;
	        padding-left:2px;
	        padding-right:2px;
	    }
	    
	    .asset-item-offset .icon {
	        color: black;
	    }
	    
	    .asset-item-offset [contenteditable] {
	        outline: 1px solid black;
	    }
	    
	`);


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	let blurListener = null;
	let inputListener = null;
	exports.TextSelection = {
	    moveCaretToEnd(node) {
	        if (!node)
	            return;
	        node.focus();
	        const sel = window.getSelection();
	        if (sel.rangeCount > 0) {
	            var textNode = sel.focusNode;
	            const nodeLength = (textNode) ? textNode.nodeValue.length : 0;
	            var newOffset = sel.focusOffset + nodeLength;
	            sel.collapse(textNode, Math.min(nodeLength, newOffset));
	        }
	    },
	    makeEditable(node, inputCallback, blurOnEnter = false) {
	        node.setAttribute("contenteditable", "true");
	        this.moveCaretToEnd(node);
	        blurListener = () => {
	            let text = node.innerText;
	            text = text.replace(/\/n/g, "");
	            blurListener = null;
	            inputListener = null;
	            this.removeEditable(node);
	            node.innerText = inputCallback(text) || text;
	        };
	        inputListener = () => {
	            let text = node.innerText;
	            if (blurOnEnter && text.indexOf("\n") !== -1) {
	                text = text.replace(/\/n/g, "");
	                blurListener = null;
	                inputListener = null;
	                this.removeEditable(node);
	                node.innerText = inputCallback(text);
	            }
	            // node.innerText = inputCallback(text) || text;
	        };
	        node.addEventListener("input", inputListener);
	        node.addEventListener("blur", blurListener);
	    },
	    removeEditable(node) {
	        node.removeEventListener("input", inputListener);
	        node.removeEventListener("blur", blurListener);
	        node.removeAttribute("contenteditable");
	    }
	};


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(38);
	class AssetDragAction extends drag_action_1.DragAction {
	    constructor(asset, item) {
	        super();
	        this.asset = asset;
	        this.item = item;
	    }
	}
	exports.AssetDragAction = AssetDragAction;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const prefab_asset_1 = __webpack_require__(95);
	const asset_item_1 = __webpack_require__(91);
	const drag_action_1 = __webpack_require__(38);
	const prefab_drag_action_1 = __webpack_require__(64);
	let PrefabAssetItem = class PrefabAssetItem extends asset_item_1.EditorAssetItem {
	    getIconName() {
	        return "object-group";
	    }
	    canNestAsset(asset) {
	        return asset instanceof prefab_asset_1.PrefabAsset;
	    }
	    createDragAction() {
	        return new prefab_drag_action_1.PrefabDragAction(this.asset);
	    }
	};
	PrefabAssetItem = tslib_1.__decorate([
	    drag_action_1.DragAction.Inherit
	], PrefabAssetItem);
	exports.PrefabAssetItem = PrefabAssetItem;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const app_element_1 = __webpack_require__(29);
	const asset_1 = __webpack_require__(44);
	class PrefabAsset extends asset_1.Asset {
	    constructor(filePath) {
	        super(filePath);
	    }
	    create() {
	        return new app_element_1.AppElement(this.getName());
	    }
	    static createFromAppElement(appElement) {
	        return null;
	    }
	}
	exports.PrefabAsset = PrefabAsset;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_item_1 = __webpack_require__(91);
	const icon_1 = __webpack_require__(61);
	const drag_action_1 = __webpack_require__(38);
	let FolderAssetItem = class FolderAssetItem extends asset_item_1.EditorAssetItem {
	    getIconName() {
	        return "folder-open-o";
	    }
	    getName() {
	        return this.attrs.asset.getName();
	    }
	    onRendered() {
	        if (this.getChildRoot().getChildCount() === 0) {
	            this.setIcon("folder-o");
	        }
	        else if (this.asset.isOpen) {
	            this.setIcon("folder-open-o");
	        }
	        else {
	            this.setIcon("folder-o");
	        }
	    }
	    onChildAdded() {
	        this.onRendered();
	    }
	    toggle(isOpen) {
	        super.toggle(isOpen);
	        const iconName = isOpen ? "folder-open-o" : "folder-o";
	        this.getChildBySelector('.asset-icon', icon_1.FontIcon).setIcon(iconName);
	    }
	};
	FolderAssetItem = tslib_1.__decorate([
	    drag_action_1.DragAction.Inherit
	], FolderAssetItem);
	exports.FolderAssetItem = FolderAssetItem;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const asset_1 = __webpack_require__(44);
	class FolderAsset extends asset_1.Asset {
	}
	exports.FolderAsset = FolderAsset;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_item_1 = __webpack_require__(91);
	const drag_action_1 = __webpack_require__(38);
	let ImageAssetItem = class ImageAssetItem extends asset_item_1.EditorAssetItem {
	    getIconName() {
	        return "object-group";
	    }
	};
	ImageAssetItem = tslib_1.__decorate([
	    drag_action_1.DragAction.Inherit
	], ImageAssetItem);
	exports.ImageAssetItem = ImageAssetItem;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const button_1 = __webpack_require__(59);
	const editor_html_element_1 = __webpack_require__(19);
	class Toolbar extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return {
	            tagName: "div",
	            classList: "editor-toolbar"
	        };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("div", { class: "button-group" },
	                Hex.createElement(button_1.Button, null, "Pan"),
	                Hex.createElement(button_1.Button, null, "Scale"),
	                Hex.createElement(button_1.Button, null, "Rotate"))
	        ];
	    }
	}
	exports.Toolbar = Toolbar;
	createStyleSheet(`
	<style>
	.editor-toolbar {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    width: 100%;
	    height: 2em;
	}

	.button-group {

	}

	.button-group:first-child {
	    border-bottom-right-radius: 0;
	    border-top-right-radius: 0;
	}
	</style>
	`);


/***/ },
/* 100 */
/***/ function(module, exports) {

	

/***/ },
/* 101 */
/***/ function(module, exports) {

	

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_renderer_1 = __webpack_require__(81);
	const sizing_component_1 = __webpack_require__(40);
	const default_sizing_component_1 = __webpack_require__(103);
	const inspector_row_1 = __webpack_require__(77);
	const number_input_1 = __webpack_require__(87);
	let SizingRenderer = class SizingRenderer extends component_renderer_1.ComponentRenderer {
	    createInitialStructure(children) {
	        const structure = [
	            this.getRenderer("sizingMode", {
	                onValueChanged: () => {
	                    this.onModeChanged();
	                }
	            }),
	            this.getBody()
	        ];
	        return [
	            this.createStandardHeaderStructure(),
	            this.createStandardBodyStructure(structure)
	        ];
	    }
	    onModeChanged() {
	        const childRoot = this.getChildRoot();
	        const length = childRoot.children.length;
	        //destroy all but first child
	        for (let i = 1; i < length; i++) {
	            childRoot.children[1].destroy();
	        }
	        const elements = this.getBody();
	        for (let i = 0; i < elements.length; i++) {
	            childRoot.addChild(elements[i]);
	        }
	    }
	    onWidthChanged(newValue, oldValue) {
	        console.log("Changed width");
	    }
	    onHeightChanged(newValue, oldValue) {
	        console.log("Changed height");
	    }
	    getAnchorBody() {
	        return [];
	    }
	    getPercentBody() {
	        return [];
	    }
	    getFixedBody() {
	        const widthChanged = (newValue, oldValue) => {
	            this.onWidthChanged(newValue, oldValue);
	        };
	        const heightChanged = (newValue, oldValue) => {
	            this.onHeightChanged(newValue, oldValue);
	        };
	        return [
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Width" },
	                Hex.createElement(number_input_1.NumberInput, { value: this.component.width })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Height" },
	                Hex.createElement(number_input_1.NumberInput, { value: this.component.height }))
	        ];
	    }
	    getFractionBody() {
	        const widthChanged = (newValue, oldValue) => {
	            this.onWidthChanged(newValue, oldValue);
	        };
	        const heightChanged = (newValue, oldValue) => {
	            this.onHeightChanged(newValue, oldValue);
	        };
	        return [
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Width" },
	                Hex.createElement(number_input_1.NumberInput, { value: this.component.width })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Height" },
	                Hex.createElement(number_input_1.NumberInput, { value: this.component.height }))
	        ];
	    }
	    getBody() {
	        switch (this.component.sizingMode) {
	            case sizing_component_1.SizingMode.Anchor:
	                return this.getAnchorBody();
	            case sizing_component_1.SizingMode.Fixed:
	                return this.getFixedBody();
	            case sizing_component_1.SizingMode.Fraction:
	                return this.getFractionBody();
	            case sizing_component_1.SizingMode.Percent:
	                return this.getPercentBody();
	            default:
	                break;
	        }
	    }
	};
	SizingRenderer = tslib_1.__decorate([
	    component_renderer_1.renderer(sizing_component_1.SizingComponent),
	    component_renderer_1.renderer(default_sizing_component_1.DefaultSizingComponent)
	], SizingRenderer);


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const sizing_component_1 = __webpack_require__(40);
	const component_1 = __webpack_require__(37);
	let DefaultSizingComponent = class DefaultSizingComponent extends sizing_component_1.SizingComponent {
	    onMounted() {
	    }
	};
	DefaultSizingComponent = tslib_1.__decorate([
	    component_1.component("Layout/Sizing/Default")
	], DefaultSizingComponent);
	exports.DefaultSizingComponent = DefaultSizingComponent;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_renderer_1 = __webpack_require__(81);
	const text_component_1 = __webpack_require__(105);
	const inspector_row_1 = __webpack_require__(77);
	const text_input_1 = __webpack_require__(75);
	const binding_1 = __webpack_require__(13);
	const number_input_1 = __webpack_require__(87);
	let TextComponentRenderer = class TextComponentRenderer extends component_renderer_1.ComponentRenderer {
	    onCreated() {
	        this.proxy = {
	            textContent: this.component.getTextContent(),
	            font: {
	                name: this.component.getFontName(),
	                size: this.component.getFontSize(),
	                lineHeight: 1,
	                weight: 400,
	                decoration: "none"
	            }
	        };
	        this.textBinding = binding_1.CreateBinding(this.proxy, "textContent").onChange(() => {
	            this.component.setTextAsync(this.proxy.textContent);
	        });
	        this.fontSizeBinding = binding_1.CreateBinding(this.proxy, "font", "size").onChange(() => {
	            this.component.setFontAsync(this.proxy.font);
	        });
	        this.fontNameBinding = binding_1.CreateBinding(this.proxy, "font", "name").onChange(() => {
	            this.component.setFontAsync(this.proxy.font);
	        });
	        this.textBinding.setHost(this);
	        this.fontNameBinding.setHost(this);
	        this.fontSizeBinding.setHost(this);
	        EditorRuntime.updateTree.add(this);
	    }
	    createInitialStructure() {
	        return [
	            this.createStandardHeaderStructure(),
	            this.createStandardBodyStructure([
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Text" },
	                    Hex.createElement(text_input_1.TextInput, { value: this.textBinding })),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Text" },
	                    Hex.createElement(text_input_1.TextInput, { value: this.fontNameBinding })),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Font Size" },
	                    Hex.createElement(number_input_1.NumberInput, { value: this.fontSizeBinding }))
	            ])
	        ];
	    }
	};
	TextComponentRenderer = tslib_1.__decorate([
	    component_renderer_1.renderer(text_component_1.TextComponent)
	], TextComponentRenderer);
	exports.TextComponentRenderer = TextComponentRenderer;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(37);
	const e_command_type_1 = __webpack_require__(32);
	const ui_component_1 = __webpack_require__(106);
	let TextComponent = class TextComponent extends ui_component_1.UIComponent {
	    constructor() {
	        super(...arguments);
	        this.textContent = "";
	        this.font = {
	            name: "Roboto",
	            size: 12,
	            lineHeight: 1,
	            weight: 400,
	            decoration: "none"
	        };
	    }
	    getFontSize() {
	        return this.font.size;
	    }
	    getFontName() {
	        return this.font.name;
	    }
	    getTextContent() {
	        return this.textContent;
	    }
	    setTextAsync(text) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return yield Runtime.awaitCommand(e_command_type_1.CommandType.SetText, {
	                id: this.appElement.id,
	                text: text,
	                font: this.font,
	                setFont: false
	            }).then((width) => {
	                this.textContent = text;
	                this.appElement.setWidth(width);
	                return this.textContent;
	            });
	        });
	    }
	    setFontAsync(font) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return yield Runtime.awaitCommand(e_command_type_1.CommandType.SetText, {
	                id: this.appElement.id,
	                text: this.textContent,
	                font: font,
	                setFont: true
	            }).then((width) => {
	                this.font = font;
	                this.appElement.setWidth(width);
	                return this.font;
	            });
	        });
	    }
	    static OnDeserialized(instance, json) {
	        instance.textContent = json.textContent;
	        //instance.font = json.font || instance.font;
	    }
	    serialize() {
	        return {
	            commands: [
	                {
	                    type: e_command_type_1.CommandType.SetText,
	                    data: {
	                        id: this.appElement.id,
	                        text: this.textContent,
	                        font: this.font
	                    }
	                }
	            ]
	        };
	    }
	};
	TextComponent = tslib_1.__decorate([
	    component_1.component("UI/Text")
	], TextComponent);
	exports.TextComponent = TextComponent;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(37);
	const e_command_type_1 = __webpack_require__(32);
	class Background {
	    constructor() {
	    }
	    serialize() {
	    }
	}
	exports.Background = Background;
	class Transform {
	}
	exports.Transform = Transform;
	let UIComponent = class UIComponent extends component_1.Component {
	    setBackground() {
	        Runtime.sendCommand(e_command_type_1.CommandType.PaintBackground, this.appElement.id);
	    }
	    getTypeName() {
	        return this.constructor.name.replace("Component", "");
	    }
	    getBackground() {
	        return this.background;
	    }
	    serialize() {
	        return {
	            commands: [
	                {
	                    type: e_command_type_1.CommandType.PaintBackground,
	                    data: {}
	                }
	            ],
	        };
	    }
	};
	UIComponent = tslib_1.__decorate([
	    component_1.component("UI")
	], UIComponent);
	exports.UIComponent = UIComponent;
	class TextComponent extends UIComponent {
	    serialize() {
	        const retn = super.serialize();
	        if (!retn.commands)
	            retn.commands = [];
	        retn.commands.push({
	            type: e_command_type_1.CommandType.SetText,
	            data: { text: "hello world", font: "some font" }
	        });
	        return retn;
	    }
	}
	//spacing component for margin/padding? 


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(108);
	const property_renderer_1 = __webpack_require__(82);
	const inspector_row_1 = __webpack_require__(77);
	const checkbox_input_1 = __webpack_require__(84);
	const binding_1 = __webpack_require__(13);
	let BooleanRenderer = class BooleanRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName },
	            Hex.createElement(checkbox_input_1.CheckboxInput, { value: binding_1.CreateBinding(component, propertyName) }));
	    }
	};
	BooleanRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(Boolean)
	], BooleanRenderer);
	exports.BooleanRenderer = BooleanRenderer;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const property_renderer_1 = __webpack_require__(82);
	function propertyDrawer(typeToDraw) {
	    return function (target) {
	        property_renderer_1.PropertyRenderer.set(typeToDraw, target);
	    };
	}
	exports.propertyDrawer = propertyDrawer;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_renderer_1 = __webpack_require__(82);
	const color_1 = __webpack_require__(110);
	const inspector_row_1 = __webpack_require__(77);
	const inline_field_1 = __webpack_require__(88);
	const number_input_1 = __webpack_require__(87);
	const property_drawer_1 = __webpack_require__(108);
	const binding_1 = __webpack_require__(13);
	const button_1 = __webpack_require__(59);
	const util_1 = __webpack_require__(16);
	let ColorRenderer = class ColorRenderer extends property_renderer_1.PropertyRenderer {
	    updateColor() {
	        const cmp = this.attrs.component; //temp! need to implement dirty checking
	        cmp.color = cmp.color;
	    }
	    randomize() {
	        const c = new color_1.Color();
	        c.r = util_1.getRandomInt(0, 255);
	        c.g = util_1.getRandomInt(0, 255);
	        c.b = util_1.getRandomInt(0, 255);
	        c.a = 1;
	        const cmp = this.attrs.component; //temp! need to implement dirty checking
	        cmp.color = c;
	    }
	    createInitialStructure() {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        const color = component[propertyName];
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName },
	            Hex.createElement(inline_field_1.InlineField, { label: "Red" },
	                Hex.createElement(number_input_1.NumberInput, { value: binding_1.CreateBinding(color, "r").onChange(() => this.updateColor()) })),
	            Hex.createElement(inline_field_1.InlineField, { label: "Green" },
	                Hex.createElement(number_input_1.NumberInput, { value: binding_1.CreateBinding(color, "g").onChange(() => this.updateColor()) })),
	            Hex.createElement(inline_field_1.InlineField, { label: "Blue" },
	                Hex.createElement(number_input_1.NumberInput, { value: binding_1.CreateBinding(color, "b").onChange(() => this.updateColor()) })),
	            Hex.createElement(inline_field_1.InlineField, { label: "Alpha" },
	                Hex.createElement(number_input_1.NumberInput, { value: binding_1.CreateBinding(color, "a").onChange(() => this.updateColor()) })),
	            Hex.createElement(button_1.Button, { onClick: this.randomize }, "Random"));
	    }
	};
	ColorRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(color_1.Color)
	], ColorRenderer);
	exports.ColorRenderer = ColorRenderer;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(18);
	let Color = Color_1 = class Color {
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
	    static get Black() { return new Color_1(0, 0, 0, 255); }
	    static get Blue() { return new Color_1(0, 0, 255, 255); }
	    static get Clear() { return new Color_1(0, 0, 0, 0); }
	    static get Cyan() { return new Color_1(0, 255, 255, 255); }
	    static get Gray() { return new Color_1(0.5, 0.5, 0.5, 255); }
	    static get Green() { return new Color_1(0, 255, 0, 255); }
	    static get Magenta() { return new Color_1(255, 0, 255, 255); }
	    static get Red() { return new Color_1(255, 0, 0, 255); }
	    static get Yellow() { return new Color_1(255, (0.92 * 255 | 0), (0.06 * 255 | 0), 255); }
	    static get White() {
	        return new Color_1(0, 0, 0, 255);
	    }
	};
	Color = Color_1 = tslib_1.__decorate([
	    TEMP_ANNOTATION_1.serializeClass
	], Color);
	exports.Color = Color;
	var Color_1;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(108);
	const property_renderer_1 = __webpack_require__(82);
	const util_1 = __webpack_require__(16);
	const number_input_1 = __webpack_require__(87);
	const inspector_row_1 = __webpack_require__(77);
	const binding_1 = __webpack_require__(13);
	let NumberRenderer = class NumberRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure() {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        let input = null;
	        if (editorData.propertyType === util_1.Integer) {
	            input = Hex.createElement(number_input_1.IntegerInput, { value: binding_1.CreateBinding(component, propertyName) });
	        }
	        else {
	            input = Hex.createElement(number_input_1.NumberInput, { value: binding_1.CreateBinding(component, propertyName) });
	        }
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName }, input);
	    }
	};
	NumberRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(Number),
	    property_drawer_1.propertyDrawer(util_1.Integer)
	], NumberRenderer);
	exports.NumberRenderer = NumberRenderer;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_renderer_1 = __webpack_require__(82);
	const property_drawer_1 = __webpack_require__(108);
	const util_1 = __webpack_require__(16);
	const inspector_row_1 = __webpack_require__(77);
	const select_input_1 = __webpack_require__(113);
	const binding_1 = __webpack_require__(13);
	let EnumSelectRenderer = class EnumSelectRenderer extends property_renderer_1.PropertyRenderer {
	    createOptions(e) {
	        const retn = new Array();
	        Object.keys(e).forEach(function (key) {
	            if (isNaN(key)) {
	                retn.push({ name: key, value: e[key] });
	            }
	        });
	        return retn;
	    }
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        const options = this.createOptions(editorData.propertyOptions[0]);
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName },
	            Hex.createElement(select_input_1.SelectInput, { class: "select-renderer", value: binding_1.CreateBinding(component, propertyName) }, options.map((option) => {
	                return Hex.createElement("option", { value: option.value, default: option.default }, option.name);
	            })));
	    }
	};
	EnumSelectRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(util_1.EnumSelect)
	], EnumSelectRenderer);
	exports.EnumSelectRenderer = EnumSelectRenderer;
	let SelectRenderer = class SelectRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName },
	            Hex.createElement(select_input_1.SelectInput, { class: "select-renderer", value: binding_1.CreateBinding(component, propertyName) }, editorData.propertyOptions[0].map((option) => {
	                return Hex.createElement("option", { value: option.value, default: option.default }, option.name);
	            })));
	    }
	};
	SelectRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(util_1.Select)
	], SelectRenderer);
	exports.SelectRenderer = SelectRenderer;
	createStyleSheet(`<style>

	.select-renderer {
	    color: black;
	    width: 100%;
	}

	</style>`);


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(76);
	class SelectInput extends editor_input_1.InputRenderer {
	    getDomData() {
	        return { tagName: "select" };
	    }
	    onMounted() {
	        this.htmlNode.addEventListener("change", () => {
	            const idx = this.htmlNode.selectedIndex;
	            const option = this.htmlNode.options[idx];
	            let value = option.value;
	            const target = this.children[idx];
	            if (target.attrs.value !== void 0) {
	                value = target.attrs.value;
	            }
	            this.binding.set(value);
	        }, true);
	    }
	    onValueChanged(newValue) {
	        for (var i = 0; i < this.children.length; i++) {
	            const child = this.children[i];
	            if (child.attrs.value === newValue) {
	                this.htmlNode.selectedIndex = i;
	                break;
	            }
	        }
	    }
	}
	exports.SelectInput = SelectInput;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(108);
	const property_renderer_1 = __webpack_require__(82);
	const inspector_row_1 = __webpack_require__(77);
	const text_input_1 = __webpack_require__(75);
	let StringRenderer = class StringRenderer extends property_renderer_1.PropertyRenderer {
	    onChange() {
	        // if(this.attrs.editorData.onValueChanged) {
	        //
	        // }
	        if (this.attrs.onValueChanged) {
	            this.attrs.onValueChanged("", "");
	        }
	    }
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const component = this.attrs.component;
	        const propertyName = editorData.propertyName;
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: editorData.propertyName },
	            Hex.createElement(text_input_1.TextInput, { value: component[propertyName] }));
	    }
	};
	StringRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(String)
	], StringRenderer);
	exports.StringRenderer = StringRenderer;


/***/ },
/* 115 */
/***/ function(module, exports) {

	// import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
	// import {EditorCustomElement} from "../editor_element/editor_custom_element";
	// import {ILifecycle} from "../editor/editor_runtime";
	// import {Repeat} from "./repeat";
	// import {EditorBindingElement} from "../editor_element/editor_binding_element";
	// import {NumberInput} from "./number_input";
	//
	// interface IArrayInput {
	//     binding : any;
	//     onValueChanged? : (newValue? : string, oldValue? : string) => void;
	// }
	//
	// //todo -- formatters
	//
	// class PropertyRenderer extends EditorCustomElement<any> {
	//
	//     constructor(attrs : any) {
	//         super(attrs);
	//         for(let key in attrs) {
	//             Object.defineProperty(attrs.prototype, key, {
	//                 get: function () {
	//                     return this._bindings(key).get();
	//                 },
	//                 set: function (value : any) {
	//                    this._bindings(key).set(value);
	//                    this.attributeChanged(key, value, null);
	//                 }
	//             })
	//         }
	//     }
	//
	//     protected isAttrDirty(check : any) : boolean {
	//         if(check instanceof Binding) {
	//             return check.isDirty();
	//         }
	//         return false;
	//     }
	//
	// }
	//
	//
	//
	// export class ArrayInput extends EditorCustomElement<IArrayInput> implements ILifecycle {
	//
	//     private getterFn : (renderCtx : any) => any;
	//     private setterFn : (renderCtx : any, value : any) => void;
	//     private lastValue : any;
	//     private ctx : any;
	//
	//     protected getDomData() : IDomData {
	//         return { tagName: "div" };
	//     }
	//
	//     public createInitialStructure() : JSXElement {
	//         return [
	//             <NumberInput binding="" value={ Binding<string>(this, "lastValue") }/>
	//             //<Repeat list={ Binding<string>(this.attrs.list) } itemFactory={null}></Repeat>
	//             // /*
	//             // *
	//             // * <Repeat list={this.list} itemBuilder={ (index : number) => this.buildItem(index) >
	//             // *     <Label> { Repeat.Index } </Label>
	//             // *     <Value> { GetInspectorForType(Repeat.CurrentItem) </Value>
	//             // * </Repeat>
	//             // *
	//             // * */
	//         ]
	//     }
	//
	//     public onMounted() {
	//         this.ctx = this.attrs.binding.ctx;
	//         this.getterFn = getGetter(this.attrs.binding.path);
	//         this.setterFn = getSetter(this.attrs.binding.path);
	//         const attrs = this.attrs as any;
	//         Object.keys(attrs).forEach((key : string) => {
	//             if(attrs[key] instanceof EditorBindingElement) {
	//                 attrs[key].onChange(() => {
	//
	//                 })
	//             }
	//         })
	//         // if(this.isBinding(this.attrs.value)) {
	//         //
	//         // }
	//     }
	//
	//     public onFieldDirty(fieldPath : any, value : any, oldValue : any) : void {
	//         if(fieldPath.ChangeSource === "Inspector") {
	//
	//         }
	//         if(fieldPath.fieldName === "x") {
	//
	//         }
	//     }
	//
	//     public onValueChanged() : void {
	//         //getParent(ValueRenderer)
	//         //if handler => handler.onValueChanged(this.path.slice(0).push(this.propertyName), value)
	//     }
	//
	//     public onUpdated() {
	//
	//         /*
	//
	//         ComponentRenderer
	//             FieldRenderer
	//                 NumberInput
	//
	//             FieldRenderer
	//                 ArrayRenderer
	//                     ObjectRenderer
	//                         FloatRenderer
	//                         FloatRenderer
	//                         ArrayRenderer
	//                             ObjectRender
	//                                 NumberRenderer
	//
	//         onInspectorFieldDirty(path, value, oldValue) {
	//             [Transform.Position.X]
	//             if(path.getReference() === this.transform.position) {
	//
	//             }
	//             if(path.propertyName === "x") {
	//
	//             }
	//
	//         }
	//
	//         object.things[i].name
	//         ObjectInspector
	//             ArrayInspector
	//                 IndexInspector
	//                     StringInput
	//
	//             function recursiveDirtyCheck(index, item) {
	//                 const child = getChildById(index)
	//                 child.recursiveDirtyCheck();
	//             }
	//
	//             foreach list item
	//                 if(recursive dirty check item) {
	//                     this.onValueChanged(index)
	//                 }
	//
	//          */
	//         // const value = this.getterFn(this.ctx) || "";
	//         // if (this.lastValue !== value) {
	//         //     if(this.attrs.onValueChanged) {
	//         //         this.attrs.onValueChanged(value, this.lastValue);
	//         //     }
	//         //     this.lastValue = value;
	//         //     (this.htmlNode as HTMLInputElement).value = value;
	//         // }
	//     }
	//
	//     public onRendered() {
	//         EditorRuntime.updateTree.add(this);
	//     }
	//
	// } 


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class InspectorBody extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "vertical" };
	    }
	}
	exports.InspectorBody = InspectorBody;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const icon_1 = __webpack_require__(61);
	const inspector_body_1 = __webpack_require__(116);
	const editor_html_element_1 = __webpack_require__(19);
	class InspectorHeader extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "horizontal" };
	    }
	    createInitialStructure() {
	        return [
	            Hex.createElement(icon_1.ToggleIcon, { visibilityTarget: () => this.parent.getChildByType(inspector_body_1.InspectorBody) }),
	            Hex.createElement("span", null, this.attrs.title),
	        ];
	    }
	}
	exports.InspectorHeader = InspectorHeader;


/***/ },
/* 118 */
/***/ function(module, exports) {

	// import {EditorHTMLElement} from "../editor_element/editor_html_element";
	class Repeat {
	}
	// export class Repeat<T> extends EditorHTMLElement<IRepeatAttrs<T>> {
	//
	//     public onUpdated() {
	//         if(DirtyCheck(this.attrs, "list")) {
	//             //teardown entire list, recycle children
	//             //this.children[i]
	//             //<RepeatItem>  My index is { new window.EditorBindingElement(Repeat, ["Index"]) } </RepeatItem>
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


/***/ },
/* 119 */
/***/ function(module, exports) {

	// import {FontIcon, ToggleIcon} from "./icon";
	// import {HorizontalBase} from "./horizontal";
	// import {EditorElement} from "../editor_element/editor_element";
	//
	// interface IAttrs {
	//     iconName : string;
	//     label : string;
	//     useBinding? : boolean;
	//     toggleElementFn?: () => EditorElement;
	// }
	//
	// export class IconNameToggleRow extends HorizontalBase<IAttrs> {
	//
	//     public createInitialStructure() : JSXElement {
	//         let label : any = null;
	//         if(this.attrs.useBinding) {
	//             label = new window.EditorBindingElement(this, ["attrs","label"]);
	//         }
	//         else {
	//             label = this.attrs.label;
	//         }
	//         let toggle : any = void 0;
	//         if(this.attrs.toggleElementFn) {
	//             toggle = <ToggleIcon visibilityTarget={ this.attrs.toggleElementFn } class="toggle" size="small"/>;
	//         }
	//         return [
	//             <div class="icon-container">
	//                 {toggle}
	//                 <FontIcon style="padding-left:4px" iconName={this.attrs.iconName}/>
	//             </div>,
	//             <span style="padding-left:4px">{ label }</span>
	//         ]
	//     }
	//
	// } 


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const drag_action_1 = __webpack_require__(38);
	const drag_asset_item_action_1 = __webpack_require__(121);
	class AssetDropTargetInsert extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "asset-drop-target-insert" };
	    }
	    onDragEnter(action) {
	    }
	    onDragExit(action) {
	    }
	    onDrop(action) {
	        debugger;
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(drag_asset_item_action_1.DragAssetItemAction)
	], AssetDropTargetInsert.prototype, "onDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(drag_asset_item_action_1.DragAssetItemAction)
	], AssetDropTargetInsert.prototype, "onDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(drag_asset_item_action_1.DragAssetItemAction)
	], AssetDropTargetInsert.prototype, "onDrop", null);
	exports.AssetDropTargetInsert = AssetDropTargetInsert;
	createStyleSheet(`<style>

	    .asset-drop-target-insert {
	        width: 100%;
	        height: 4px;
	        background: orange;
	    }

	`);


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(38);
	class DragAssetItemAction extends drag_action_1.DragAction {
	    constructor(asset) {
	        super();
	        this.asset = asset;
	    }
	}
	exports.DragAssetItemAction = DragAssetItemAction;


/***/ },
/* 122 */
/***/ function(module, exports) {

	class Stuff {
	}


/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class DefaultAssetImporter {
	}
	exports.DefaultAssetImporter = DefaultAssetImporter;


/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ImageImporter {
	}
	exports.ImageImporter = ImageImporter;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_1 = __webpack_require__(44);
	function AssetExtension(str) { }
	let ImageAsset = class ImageAsset extends asset_1.Asset {
	};
	ImageAsset = tslib_1.__decorate([
	    AssetExtension([".jpg", ".png", "svg"])
	], ImageAsset);
	exports.ImageAsset = ImageAsset;


/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function setUpperBits(field, value) {
	    value = value | 0;
	    if (value > 0xFFFF)
	        value = 0xFFFF;
	    return field;
	}
	exports.setUpperBits = setUpperBits;
	function getBits(value, offset, bitCount) {
	    return (value >> offset) & (1 << bitCount) - 1;
	}
	exports.getBits = getBits;
	//todo -- untested
	function getMask(start, end) {
	    return (~0 >> (32 - start - 1)) & (~0 << (32 - end));
	}
	function set1stByte(target, value) {
	    return (target & 0xffffff00) | (value & 0x000000ff);
	}
	exports.set1stByte = set1stByte;
	function setBytes(target, value, byteCount, offset) {
	    // int x = (number >> (8*n)) & 0xff;
	    return (target & 0xff000000) | (value & 0x00ffffff);
	}
	exports.setBytes = setBytes;
	function getNthByte(value, byteNumber) {
	    return (value >> (8 * byteNumber)) & 0xff;
	}
	exports.getNthByte = getNthByte;
	//todo -- untested
	function setBits(target, value, offset, bitCount) {
	    var mask = getMask(0, bitCount);
	    return (target & ~mask) | (value & mask);
	}
	exports.setBits = setBits;
	function setHighLowBits(high, low) {
	    return (high << 16) | (low & 0xffff);
	}
	exports.setHighLowBits = setHighLowBits;
	function getLow16Bits(value) {
	    return value & 0xFFFF;
	}
	exports.getLow16Bits = getLow16Bits;
	function getHigh16Bits(value) {
	    return (value >> 16) & (1 << 16) - 1;
	}
	exports.getHigh16Bits = getHigh16Bits;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(32);
	function DeserializeComponent(component, element) {
	    if (component.handler) {
	    }
	    if (component.commands) {
	        const commands = component.commands;
	        for (let i = 0; i < commands.length; i++) {
	            //todo -- response buffer
	            BrowserRuntime.invokeCommand(commands[i].type, commands[i].data);
	        }
	    }
	}
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetText, (function () {
	    var ruler = document.createElement('span');
	    var rulerStyle = ruler.style;
	    rulerStyle.wordWrap = "none";
	    rulerStyle.visibility = "hidden";
	    document.body.appendChild(ruler);
	    return function (payload) {
	        const element = BrowserRuntime.elementIdToDomNode(payload.id);
	        if (!element)
	            return;
	        element.innerText = payload.text;
	        const font = payload.font;
	        const style = element.style;
	        if (payload.setFont) {
	            style.fontSize = font.size + "px";
	            style.fontFamily = font.name;
	            style.fontWeight = font.weight;
	            style.lineHeight = font.lineHeight;
	            style.textDecoration = font.decoration;
	        }
	        //todo -- only measure when we need to
	        rulerStyle.fontSize = font.size + "px";
	        rulerStyle.fontFamily = font.name;
	        rulerStyle.fontWeight = font.weight;
	        rulerStyle.lineHeight = font.lineHeight;
	        rulerStyle.textDecoration = font.decoration;
	        ruler.innerText = payload.text;
	        return ruler.offsetWidth; //todo this should be queued so we do write then read
	    };
	})());
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.Create, (function () {
	    const elementTypeToTagName = {
	        "Panel": "div",
	        "Text": "p",
	        "Button": "button",
	        "Dropdown": "select",
	        "DropdownOption": "option",
	        "Image": "img",
	        "Checkbox": "checkbox",
	        "Slider": "slider",
	        "NumberInput": "input",
	        "TextInput": "text",
	        "TextArea": "textarea"
	    };
	    return function (payload) {
	        const element = document.createElement(elementTypeToTagName[payload.elementType]);
	        if (!element)
	            return;
	        const parentId = payload.parentId;
	        element.setAttribute("app-id", payload.id);
	        BrowserRuntime.setDomNodeToElementId(payload.id, element);
	        const components = payload.components;
	        for (let i = 0; i < components.length; i++) {
	            DeserializeComponent(components[i], element);
	        }
	        BrowserRuntime.elementIdToDomNode(parentId).appendChild(element);
	    };
	})());
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.Destroy, function (payload) {
	    const element = BrowserRuntime.elementIdToDomNode(payload.id);
	    element && element.remove();
	    BrowserRuntime.setDomNodeToElementId(payload.id, null);
	    for (let i = 0; i < payload.childIds; i++) {
	        BrowserRuntime.setDomNodeToElementId(payload.childIds[i], null);
	    }
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetParent, function (payload) {
	    const element = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!element)
	        return;
	    element.remove();
	    const parentElement = BrowserRuntime.elementIdToDomNode(payload.parentId);
	    parentElement.appendChild(element);
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetSiblingIndex, function (payload) {
	    const element = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!element)
	        return;
	    //todo -- unsure what goes here for now
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetImage, function (payload) {
	    //todo this needs work
	    //aspect ratio, width, height, stretch, filters, 9-slice, etc
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    el.setAttribute("src", payload.image);
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetPosition, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    const x = payload.x | 0;
	    const y = payload.y | 0;
	    el.style.top = y === 0 ? null : y + "px";
	    el.style.left = x === 0 ? null : x + "px";
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetDimensions, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    el.style.width = (payload.width | 0) + "px";
	    el.style.height = (payload.height | 0) + "px";
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetTransform, function (payload) {
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetRect, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    const rect = payload.rect;
	    const style = el.style;
	    const x = rect.x | 0;
	    const y = rect.y | 0;
	    style.top = y === 0 ? null : y + "px";
	    style.left = x === 0 ? null : x + "px";
	    style.width = (rect.width | 0) + "px";
	    style.height = (rect.height | 0) + "px";
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.PaintBackground, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    const c = payload.color;
	    if (c) {
	        //todo = use a style cache to check for bg class
	        el.style.backgroundColor = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
	    }
	    else {
	        el.style.backgroundColor = null;
	    }
	});
	BrowserRuntime.setCommandInvoker(-1, function (payload) {
	    for (let i = 0; i < payload.components.length; i++) {
	        const cmp = payload.components[i];
	        //DeserializeComponent(cmp)
	        //BrowserRuntime.invokeCommand(cmdType, cmp);
	    }
	});


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(32);
	BrowserRuntime.setCommandSerializer(e_command_type_1.CommandType.UpdateInput, function () {
	    return BrowserRuntime.getInput().serialize();
	});


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AssetImported extends runtime_event_1.RuntimeEvent {
	    onAssetImported(asset) { }
	}
	exports.AssetImported = AssetImported;


/***/ },
/* 130 */
/***/ function(module, exports) {

	//
	// export class BreakpointChanged {
	//
	//     public onBreakpointChanged(breakpoint : Breakpoint) : void {}
	//
	// }


/***/ },
/* 131 */
/***/ function(module, exports) {

	// import {createGetter} from "./binding_compiler";
	// import {EditorElement} from "../editor_element/editor_element";
	//
	// export class XBind {
	//
	//     public element : EditorElement;
	//     private getterFn : (ctx : any) => any;
	//     private ctx : any;
	//
	//     constructor(element : EditorElement, binding : { ctx : any, path : string }) {
	//         this.element = element;
	//         this.ctx = binding.ctx;
	//         this.getterFn = createGetter(binding.path.split("."));
	//         EditorRuntime.updateTree.add(this);
	//     }
	//
	//     public onUpdated() : void {
	//         if (this.element.isDestroyed) {
	//             EditorRuntime.removeUpdater(this);
	//             this.element = null;
	//             this.getterFn = null;
	//         }
	//         else if (this.element.isRendered) {
	//             var value = this.getterFn(this.ctx);
	//             //this.element.setText(value);
	//         }
	//     }
	// }
	//


/***/ },
/* 132 */
/***/ function(module, exports) {

	

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(32);
	Runtime.setCommandInvoker(e_command_type_1.CommandType.UpdateInput, function (data) {
	    Runtime.getInput().deserialize(data);
	});


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(32);
	const ui_component_1 = __webpack_require__(106);
	const ComponentCache = new Array();
	const ColorCache = {};
	Runtime.setCommandSerializer(e_command_type_1.CommandType.Create, function (id) {
	    ComponentCache.length = 0;
	    const appElement = Runtime.getAppElementById(id);
	    const components = appElement.getAllComponents(ComponentCache);
	    const serializedComponents = new Array();
	    for (let i = 0; i < components.length; i++) {
	        const serialized = components[i].serialize();
	        if (serialized) {
	            serializedComponents.push(serialized);
	        }
	    }
	    //todo -- call onCreate after we get the response buffer back
	    //component.onCreate() or maybe onInitialize() or onMount()
	    //maybe fire the response when we get it back
	    //maybe only do that if in run mode
	    //Component.Serialize(component)
	    const uiComponent = appElement.getComponent(ui_component_1.UIComponent);
	    let elementType = "Panel"; //temp until we get meta-elements
	    if (uiComponent) {
	        elementType = uiComponent.getTypeName();
	    }
	    return {
	        id: id,
	        elementType: elementType,
	        components: serializedComponents,
	        parentId: appElement.getParent().id
	    };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.Destroy, function (data) {
	    return data;
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetParent, function (data) {
	    return data;
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetSiblingIndex, function (data) {
	    return data;
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetText, function (data) {
	    return data;
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetImage, function (data) {
	    return { id: data.id, image: data.image };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetPosition, function (id) {
	    const appElement = Runtime.getAppElementById(id);
	    const position = appElement.getLocalPosition();
	    return { id: id, x: position.x | 0, y: position.y | 0 };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetDimensions, function (id) {
	    const appElement = Runtime.getAppElementById(id);
	    return { id: id, width: appElement.getWidth(), height: appElement.getHeight() };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetTransform, function (id) {
	    const appElement = Runtime.getAppElementById(id);
	    return { id: id, rotation: appElement.getRotation, scale: appElement.getScale() };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.PaintBackground, function (data) {
	    return data;
	});


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(37);
	const color_1 = __webpack_require__(110);
	const e_command_type_1 = __webpack_require__(32);
	const expose_as_1 = __webpack_require__(42);
	const cerialize_1 = __webpack_require__(136);
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137);

/***/ },
/* 137 */
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const sizing_component_1 = __webpack_require__(40);
	class FitContentSizeComponent extends sizing_component_1.SizingComponent {
	    onCreated() {
	        this.sizingMode = sizing_component_1.SizingMode.Fixed;
	        this.width = this.appElement.getWidth();
	        this.height = this.appElement.getHeight();
	    }
	    getPixelWidth(totalWidth, totalHeight) {
	        return this.appElement.getWidth();
	    }
	    getPixelHeight(totalWidth, totalHeight) {
	        return this.appElement.getHeight();
	    }
	}
	exports.FitContentSizeComponent = FitContentSizeComponent;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const sizing_component_1 = __webpack_require__(40);
	const layout_1 = __webpack_require__(41);
	const component_1 = __webpack_require__(37);
	const app_element_1 = __webpack_require__(29);
	let VerticalStackLayout = class VerticalStackLayout extends layout_1.LayoutComponent {
	    doLayout() {
	        var remainingSpace = this.appElement.getHeight();
	        const sizings = new Array(this.sizingComponents.length);
	        let totalFractions = 0;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const sizer = this.sizingComponents[i];
	            if (sizer) {
	                switch (sizer.sizingMode) {
	                    case sizing_component_1.SizingMode.Percent:
	                        const percentageValue = sizer.height * 0.01;
	                        sizings[i] = (percentageValue * this.appElement.getHeight()) | 0;
	                        remainingSpace -= sizings[i];
	                        break;
	                    case sizing_component_1.SizingMode.Fraction:
	                        totalFractions++;
	                        sizings[i] = sizer.height;
	                        break;
	                    case sizing_component_1.SizingMode.Fixed:
	                        //todo handle fixed-em
	                        sizings[i] = sizer.height;
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
	                    sizings[i] = pieceSize * (this.sizingComponents[i].height);
	                }
	            }
	        }
	        let allocatedSpace = 0;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const element = this.sizingComponents[i].appElement;
	            element.setPositionValues(0, allocatedSpace, app_element_1.Space.Local);
	            element.setDimensions(this.appElement.getWidth(), sizings[i]);
	            allocatedSpace += sizings[i];
	        }
	    }
	};
	VerticalStackLayout = tslib_1.__decorate([
	    component_1.component("Layout/VerticalStack")
	], VerticalStackLayout);
	exports.VerticalStackLayout = VerticalStackLayout;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	var ScrollBarVisibility;
	(function (ScrollBarVisibility) {
	    ScrollBarVisibility[ScrollBarVisibility["Never"] = 0] = "Never";
	    ScrollBarVisibility[ScrollBarVisibility["Always"] = 1] = "Always";
	    ScrollBarVisibility[ScrollBarVisibility["Auto"] = 2] = "Auto";
	})(ScrollBarVisibility = exports.ScrollBarVisibility || (exports.ScrollBarVisibility = {}));
	let ScrollComponent = class ScrollComponent extends ui_component_1.UIComponent {
	};
	ScrollComponent = tslib_1.__decorate([
	    component_1.component("UI/Scroll")
	], ScrollComponent);
	exports.ScrollComponent = ScrollComponent;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	class Font {
	}
	exports.Font = Font;
	class TypographyComponent extends ui_component_1.UIComponent {
	    setTextAsync(text) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            this.setTextPromise = new Promise((resolve) => {
	                // Runtime.sendCommand(CommandType.SetText, this.appElement.id, (rect : Rectangle) => {
	                //     this.appElement.setRect(rect);
	                //     resolve(text);
	                // });
	            });
	            return this.setTextPromise;
	        });
	    }
	    setFontAsync(font) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return null;
	        });
	    }
	}
	exports.TypographyComponent = TypographyComponent;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const expose_as_1 = __webpack_require__(42);
	const component_1 = __webpack_require__(37);
	const e_command_type_1 = __webpack_require__(32);
	let ImageComponent = class ImageComponent extends ui_component_1.UIComponent {
	    setImageAsync(image) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return null;
	        });
	    }
	    serialize() {
	        return {
	            elementType: "Image",
	            commands: [
	                {
	                    type: e_command_type_1.CommandType.SetImage,
	                    data: {
	                        id: this.appElement.id,
	                        image: "img/placeholder.svg"
	                    }
	                }
	            ]
	        };
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.inspector(String)
	], ImageComponent.prototype, "image", void 0);
	ImageComponent = tslib_1.__decorate([
	    component_1.component("UI/Image")
	], ImageComponent);
	exports.ImageComponent = ImageComponent;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let PanelComponent = class PanelComponent extends ui_component_1.UIComponent {
	    serialize() {
	        return {
	            elementType: "Panel"
	        };
	    }
	};
	PanelComponent = tslib_1.__decorate([
	    component_1.component("UI/Panel")
	], PanelComponent);
	exports.PanelComponent = PanelComponent;


/***/ },
/* 144 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var KeyCode;
	(function (KeyCode) {
	    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
	    KeyCode[KeyCode["Tab"] = 9] = "Tab";
	    KeyCode[KeyCode["Enter"] = 13] = "Enter";
	    KeyCode[KeyCode["Shift"] = 16] = "Shift";
	    KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
	    KeyCode[KeyCode["Alt"] = 18] = "Alt";
	    KeyCode[KeyCode["PauseBreak"] = 19] = "PauseBreak";
	    KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
	    KeyCode[KeyCode["Escape"] = 27] = "Escape";
	    KeyCode[KeyCode["Space"] = 32] = "Space";
	    KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
	    KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
	    KeyCode[KeyCode["End"] = 35] = "End";
	    KeyCode[KeyCode["Home"] = 36] = "Home";
	    KeyCode[KeyCode["LeftArrow"] = 37] = "LeftArrow";
	    KeyCode[KeyCode["UpArrow"] = 38] = "UpArrow";
	    KeyCode[KeyCode["RightArrow"] = 39] = "RightArrow";
	    KeyCode[KeyCode["DownArrow"] = 40] = "DownArrow";
	    KeyCode[KeyCode["Insert"] = 45] = "Insert";
	    KeyCode[KeyCode["Delete"] = 46] = "Delete";
	    KeyCode[KeyCode["Zero"] = 48] = "Zero";
	    KeyCode[KeyCode["One"] = 49] = "One";
	    KeyCode[KeyCode["Two"] = 50] = "Two";
	    KeyCode[KeyCode["Three"] = 51] = "Three";
	    KeyCode[KeyCode["Four"] = 52] = "Four";
	    KeyCode[KeyCode["Five"] = 53] = "Five";
	    KeyCode[KeyCode["Six"] = 54] = "Six";
	    KeyCode[KeyCode["Seven"] = 55] = "Seven";
	    KeyCode[KeyCode["Eight"] = 56] = "Eight";
	    KeyCode[KeyCode["Nine"] = 57] = "Nine";
	    KeyCode[KeyCode["A"] = 65] = "A";
	    KeyCode[KeyCode["B"] = 66] = "B";
	    KeyCode[KeyCode["C"] = 67] = "C";
	    KeyCode[KeyCode["D"] = 68] = "D";
	    KeyCode[KeyCode["E"] = 69] = "E";
	    KeyCode[KeyCode["F"] = 70] = "F";
	    KeyCode[KeyCode["G"] = 71] = "G";
	    KeyCode[KeyCode["H"] = 72] = "H";
	    KeyCode[KeyCode["I"] = 73] = "I";
	    KeyCode[KeyCode["J"] = 74] = "J";
	    KeyCode[KeyCode["K"] = 75] = "K";
	    KeyCode[KeyCode["L"] = 76] = "L";
	    KeyCode[KeyCode["M"] = 77] = "M";
	    KeyCode[KeyCode["N"] = 78] = "N";
	    KeyCode[KeyCode["O"] = 79] = "O";
	    KeyCode[KeyCode["P"] = 80] = "P";
	    KeyCode[KeyCode["Q"] = 81] = "Q";
	    KeyCode[KeyCode["R"] = 82] = "R";
	    KeyCode[KeyCode["S"] = 83] = "S";
	    KeyCode[KeyCode["T"] = 84] = "T";
	    KeyCode[KeyCode["U"] = 85] = "U";
	    KeyCode[KeyCode["V"] = 86] = "V";
	    KeyCode[KeyCode["W"] = 87] = "W";
	    KeyCode[KeyCode["X"] = 88] = "X";
	    KeyCode[KeyCode["Y"] = 89] = "Y";
	    KeyCode[KeyCode["Z"] = 90] = "Z";
	    KeyCode[KeyCode["LeftWindows"] = 91] = "LeftWindows";
	    KeyCode[KeyCode["RightWindows"] = 92] = "RightWindows";
	    KeyCode[KeyCode["Select"] = 93] = "Select";
	    KeyCode[KeyCode["Numpad0"] = 96] = "Numpad0";
	    KeyCode[KeyCode["Numpad1"] = 97] = "Numpad1";
	    KeyCode[KeyCode["Numpad2"] = 98] = "Numpad2";
	    KeyCode[KeyCode["Numpad3"] = 99] = "Numpad3";
	    KeyCode[KeyCode["Numpad4"] = 100] = "Numpad4";
	    KeyCode[KeyCode["Numpad5"] = 101] = "Numpad5";
	    KeyCode[KeyCode["Numpad6"] = 102] = "Numpad6";
	    KeyCode[KeyCode["Numpad7"] = 103] = "Numpad7";
	    KeyCode[KeyCode["Numpad8"] = 104] = "Numpad8";
	    KeyCode[KeyCode["Numpad9"] = 105] = "Numpad9";
	    KeyCode[KeyCode["Multiply"] = 106] = "Multiply";
	    KeyCode[KeyCode["Add"] = 107] = "Add";
	    KeyCode[KeyCode["Subtract"] = 109] = "Subtract";
	    KeyCode[KeyCode["Decimal"] = 110] = "Decimal";
	    KeyCode[KeyCode["Divide"] = 111] = "Divide";
	    KeyCode[KeyCode["F1"] = 112] = "F1";
	    KeyCode[KeyCode["F2"] = 113] = "F2";
	    KeyCode[KeyCode["F3"] = 114] = "F3";
	    KeyCode[KeyCode["F4"] = 115] = "F4";
	    KeyCode[KeyCode["F5"] = 116] = "F5";
	    KeyCode[KeyCode["F6"] = 117] = "F6";
	    KeyCode[KeyCode["F7"] = 118] = "F7";
	    KeyCode[KeyCode["F8"] = 119] = "F8";
	    KeyCode[KeyCode["F9"] = 120] = "F9";
	    KeyCode[KeyCode["F10"] = 121] = "F10";
	    KeyCode[KeyCode["F11"] = 122] = "F11";
	    KeyCode[KeyCode["F12"] = 123] = "F12";
	    KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
	    KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
	    KeyCode[KeyCode["SemiColon"] = 186] = "SemiColon";
	    KeyCode[KeyCode["Equal"] = 187] = "Equal";
	    KeyCode[KeyCode["Comma"] = 188] = "Comma";
	    KeyCode[KeyCode["Dash"] = 189] = "Dash";
	    KeyCode[KeyCode["Period"] = 190] = "Period";
	    KeyCode[KeyCode["ForwardSlash"] = 191] = "ForwardSlash";
	    KeyCode[KeyCode["GraveAccent"] = 192] = "GraveAccent";
	    KeyCode[KeyCode["OpenBracket"] = 219] = "OpenBracket";
	    KeyCode[KeyCode["BackSlash"] = 220] = "BackSlash";
	    KeyCode[KeyCode["CloseBracket"] = 221] = "CloseBracket";
	    KeyCode[KeyCode["SingleQuote"] = 222] = "SingleQuote";
	})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));


/***/ },
/* 145 */
/***/ function(module, exports) {

	

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ObjectId {
	    static generate() {
	        return ++ObjectId.value;
	    }
	    static seed(seed) {
	        ObjectId.value = seed;
	    }
	}
	ObjectId.value = 1;
	exports.ObjectId = ObjectId;


/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function isPrimitive(value) {
	    const type = typeof value;
	    return (type !== "object" && type !== "function");
	}
	class TypeSerializer {
	    serialize() {
	    }
	    deserialize() {
	        return null;
	    }
	}
	//todo most of this gets replaced by generated type information
	//@Serialize(Class)
	// names can be made unique in a single blob, then name refs are just start / end indices
	// thisisabiglistofstringsthatcanbehuffmancompressedandindexedinto
	//
	// //some flags can be combined, type, base type, interfaces for example
	// objetRef: {
	//     typeId: id,
	//     decorators: [id, id, id]
	//     fields: {id, accessFlag(public/readonly/etc), serializedFlag, name, type},
	//     methods: {id, static flag, overrideFlags, decoratorids, name, paramTypes, retnType}
	//     interfaces: [id, id, id]
	//     baseType: id
	// }
	//
	// objectRefid : id / fieldCount/ total bytes
	// fieldId: id / bytelength
	// bytes: bytes
	class Serializer {
	    constructor() {
	        this.refId = 1;
	        this.storage = {};
	        this.objectIdMap = new Map();
	        this.objectQueue = [];
	    }
	    add(obj) {
	        if (this.objectIdMap.has(obj))
	            return;
	        const id = this.getRefId(obj);
	        this.storage[id] = this.serialize(obj);
	    }
	    write() {
	        while (this.objectQueue.length) {
	            this.serialize(this.objectQueue.shift());
	        }
	        return "";
	    }
	    isSerializable(value) {
	        if (isPrimitive(value))
	            return true;
	        if (Array.isArray(value))
	            return true;
	    }
	    toJSON() {
	    }
	    toString() {
	        return JSON.stringify(this.toJSON());
	    }
	    serialize(target) {
	        const id = this.getRefId(target);
	        const keys = Object.keys(target);
	        //write type
	        var types = {};
	        types[id] = target.constructor.name;
	        const serializer = this.getSerializer(target.constructor);
	        /*

	        types: {
	            id: "some/path"
	        },
	        arrays: {
	        },
	        objects: {
	            id: [0] = typeId
	                [1...end] = fields
	                [%3] = 1 field

	            {
	                type: typeId,
	                fields: [
	                    {name: name, value: value, type: type} //dont need the object wrapper, can use array offset
	                ]
	            }
	        }
	        * */
	    }
	    getSerializer(target) {
	        if (Array.isArray(target)) {
	        }
	        else if (target instanceof Date) {
	        }
	        else if (target instanceof RegExp) {
	        }
	        else if (target instanceof Function) {
	        }
	        else {
	            return (target) => {
	                const keys = Object.keys(target);
	                const retn = [];
	                for (let i = 0; i < keys.length; i++) {
	                    const key = keys[i];
	                    const value = this.serializeValue(target[key]);
	                    const type = this.getType(value);
	                    retn.push(key, value, type);
	                }
	                return retn;
	            };
	        }
	    }
	    getType(target) {
	    }
	    serializeValue(target) {
	        if (isPrimitive(target))
	            return target;
	        if (Array.isArray(target)) {
	            //queue target
	        }
	    }
	    getRefId(target) {
	        if (target == null)
	            return -1;
	        let id = this.objectIdMap.get(target);
	        if (!id) {
	            id = this.refId++;
	            this.objectIdMap.set(target, id);
	        }
	        return id;
	    }
	}
	exports.Serializer = Serializer;


/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const typeMap = new Map();
	function getTypeFromPath(path) {
	    return typeMap.get(path);
	}
	exports.getTypeFromPath = getTypeFromPath;
	function setTypePath(path) {
	    return function (target) {
	        typeMap.set(path, target);
	    };
	}
	exports.setTypePath = setTypePath;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const app_element_1 = __webpack_require__(29);
	const component_1 = __webpack_require__(37);
	const util_1 = __webpack_require__(16);
	const type_1 = __webpack_require__(149);
	let Scene = class Scene {
	    constructor() {
	        this.sceneRoots = [];
	    }
	    save() {
	        var generateId = (function () {
	            let id = 1;
	            return function () {
	                return id++;
	            };
	        })();
	        function addToMap(o) {
	            if (objectIdMap.has(o))
	                return;
	            objectIdMap.set(o, generateId());
	        }
	        let json = {};
	        let objectIdMap = new Map();
	        //give all objects an id
	        util_1.traverseChildren(app_element_1.AppElement.Root, (child) => {
	            addToMap(child);
	            objectIdMap.set(child, generateId());
	            child.getAllComponents().forEach((component) => {
	                addToMap(child);
	                Object.keys(component).forEach((key) => {
	                    const value = component[key];
	                    if (value && typeof value === "object") {
	                        addToMap(child);
	                    }
	                });
	            });
	        });
	        util_1.traverseChildren(app_element_1.AppElement.Root, (child) => {
	            json[objectIdMap.get(child)] = {
	                id: child.id,
	                name: child.name,
	                parentId: child.getParent().id,
	                localPosition: child.getLocalPosition(),
	                localRotation: child.getRotation(),
	                scale: child.getScale(),
	                width: child.getWidth(),
	                height: child.getHeight(),
	                components: child.getAllComponents().forEach((component) => {
	                    json[objectIdMap.get(component)] = "";
	                })
	            };
	        });
	    }
	    destroy() {
	        //todo -- tear down existing scene
	    }
	    load(sceneDescription) {
	        // this.destroy();
	        // const elements = sceneDescription.elements;
	        // for(let i = 0; i < elements.length; i++) {
	        //     this.sceneRoots.push(this.hydrateElement(elements[i]));
	        // }
	    }
	    hydrateElement(definition, parent) {
	        const appElement = new app_element_1.AppElement(definition.name, parent);
	        for (let j = 0; j < definition.components.length; j++) {
	            const compDesc = definition.components[j];
	            const type = component_1.Component.getComponentFromPath(compDesc.type);
	            const cmp = appElement.addComponent(type);
	        }
	        for (let k = 0; k < definition.children.length; k++) {
	            this.hydrateElement(definition.children[k], appElement);
	        }
	        return appElement;
	    }
	    unload() {
	    }
	    addRootElement(element) {
	        this.sceneRoots.push(element);
	    }
	    getRootElements() {
	        return this.sceneRoots.slice(0);
	    }
	};
	Scene = tslib_1.__decorate([
	    type_1.setTypePath("Runtime/Scene")
	], Scene);
	exports.Scene = Scene;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const scene_tool_1 = __webpack_require__(72);
	class ScenePanTool extends scene_tool_1.SceneTool {
	    constructor() {
	        super(...arguments);
	        this.panning = false;
	    }
	    update() {
	        const input = EditorRuntime.getInput();
	        if (!input.isMouseInEditorElement(this.sceneBodyRoot)) {
	            this.panning = false;
	            return;
	        }
	        if (input.isMouseDownThisFrame()) {
	            this.panning = true;
	            this.sceneWindow.pan(input.getMouseDelta());
	        }
	        else if (this.panning && input.isMouseDown()) {
	            this.sceneWindow.pan(input.getMouseDelta());
	        }
	        else if (input.isMouseUp()) {
	            this.panning = false;
	        }
	    }
	}
	exports.ScenePanTool = ScenePanTool;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const app_element_1 = __webpack_require__(29);
	const text_component_1 = __webpack_require__(105);
	const panel_component_1 = __webpack_require__(143);
	const image_component_1 = __webpack_require__(142);
	const button_component_1 = __webpack_require__(153);
	const checkbox_component_1 = __webpack_require__(154);
	const slider_component_1 = __webpack_require__(155);
	const dropdown_component_1 = __webpack_require__(156);
	const text_input_component_1 = __webpack_require__(157);
	const number_input_component_1 = __webpack_require__(158);
	const text_area_component_1 = __webpack_require__(159);
	function createTextElement() {
	    const element = new app_element_1.AppElement("Text");
	    element.addComponent(text_component_1.TextComponent);
	    return element;
	}
	function createPanelElement() {
	    const element = new app_element_1.AppElement("Panel");
	    element.addComponent(panel_component_1.PanelComponent);
	    return element;
	}
	function createImageElement() {
	    const element = new app_element_1.AppElement("Image");
	    element.addComponent(image_component_1.ImageComponent);
	    return element;
	}
	function createButtonElement() {
	    const element = new app_element_1.AppElement("Button");
	    element.addComponent(button_component_1.ButtonComponent);
	    return element;
	}
	function createCheckboxElement() {
	    const element = new app_element_1.AppElement("Toggle");
	    element.addComponent(checkbox_component_1.CheckboxComponent);
	    return element;
	}
	function createSliderElement() {
	    const element = new app_element_1.AppElement("Slider");
	    element.addComponent(slider_component_1.SliderComponent);
	    return element;
	}
	function createDropdownElement() {
	    const element = new app_element_1.AppElement("Dropdown");
	    element.addComponent(dropdown_component_1.DropdownComponent);
	    return element;
	}
	function createTextInputElement() {
	    const element = new app_element_1.AppElement("Text Input");
	    element.addComponent(text_input_component_1.TextInputComponent);
	    return element;
	}
	function createNumberInputElement() {
	    const element = new app_element_1.AppElement("Number Input");
	    element.addComponent(number_input_component_1.NumberInputComponent);
	    return element;
	}
	function createTextAreaElement() {
	    const element = new app_element_1.AppElement("Text Area Input");
	    element.addComponent(text_area_component_1.TextAreaComponent);
	    return element;
	}
	function getCreationMenu() {
	    const creationMenu = new nw.Menu();
	    creationMenu.append(new nw.MenuItem({ label: "Text", click: createTextElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Panel", click: createPanelElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Image", click: createImageElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Button", click: createButtonElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Toggle", click: createCheckboxElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Slider", click: createSliderElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Dropdown", click: createDropdownElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Text Input", click: createTextInputElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Number Input", click: createNumberInputElement }));
	    creationMenu.append(new nw.MenuItem({ label: "Text Area", click: createTextAreaElement }));
	    return creationMenu;
	}
	exports.getCreationMenu = getCreationMenu;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let ButtonComponent = class ButtonComponent extends ui_component_1.UIComponent {
	};
	ButtonComponent = tslib_1.__decorate([
	    component_1.component("UI/Button")
	], ButtonComponent);
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let CheckboxComponent = class CheckboxComponent extends ui_component_1.UIComponent {
	};
	CheckboxComponent = tslib_1.__decorate([
	    component_1.component("UI/Checkbox")
	], CheckboxComponent);
	exports.CheckboxComponent = CheckboxComponent;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let SliderComponent = class SliderComponent extends ui_component_1.UIComponent {
	};
	SliderComponent = tslib_1.__decorate([
	    component_1.component("UI/Slider")
	], SliderComponent);
	exports.SliderComponent = SliderComponent;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let DropdownComponent = class DropdownComponent extends ui_component_1.UIComponent {
	};
	DropdownComponent = tslib_1.__decorate([
	    component_1.component("UI/Dropdown")
	], DropdownComponent);
	exports.DropdownComponent = DropdownComponent;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let TextInputComponent = class TextInputComponent extends ui_component_1.UIComponent {
	};
	TextInputComponent = tslib_1.__decorate([
	    component_1.component("UI/TextInput")
	], TextInputComponent);
	exports.TextInputComponent = TextInputComponent;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let NumberInputComponent = class NumberInputComponent extends ui_component_1.UIComponent {
	};
	NumberInputComponent = tslib_1.__decorate([
	    component_1.component("UI/NumberInput")
	], NumberInputComponent);
	exports.NumberInputComponent = NumberInputComponent;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(106);
	const component_1 = __webpack_require__(37);
	let TextAreaComponent = class TextAreaComponent extends ui_component_1.UIComponent {
	};
	TextAreaComponent = tslib_1.__decorate([
	    component_1.component("UI/TextArea")
	], TextAreaComponent);
	exports.TextAreaComponent = TextAreaComponent;


/***/ }
/******/ ]);