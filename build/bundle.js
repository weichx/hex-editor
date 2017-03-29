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
	__webpack_require__(58);
	__webpack_require__(121);
	__webpack_require__(123);
	__webpack_require__(119);
	__webpack_require__(71);
	__webpack_require__(60);
	__webpack_require__(62);
	__webpack_require__(131);
	__webpack_require__(94);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(99);
	__webpack_require__(134);
	__webpack_require__(136);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(97);
	__webpack_require__(102);
	__webpack_require__(66);
	__webpack_require__(137);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(90);
	__webpack_require__(100);
	__webpack_require__(145);
	__webpack_require__(140);
	__webpack_require__(59);
	__webpack_require__(92);
	__webpack_require__(88);
	__webpack_require__(146);
	__webpack_require__(103);
	__webpack_require__(87);
	__webpack_require__(147);
	__webpack_require__(116);
	__webpack_require__(115);
	__webpack_require__(68);
	__webpack_require__(65);
	__webpack_require__(63);
	__webpack_require__(86);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(149);
	__webpack_require__(125);
	__webpack_require__(124);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(122);
	__webpack_require__(153);
	__webpack_require__(120);
	__webpack_require__(110);
	__webpack_require__(24);
	__webpack_require__(56);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(55);
	__webpack_require__(72);
	__webpack_require__(15);
	__webpack_require__(19);
	__webpack_require__(14);
	__webpack_require__(8);
	__webpack_require__(7);
	__webpack_require__(20);
	__webpack_require__(22);
	__webpack_require__(41);
	__webpack_require__(40);
	__webpack_require__(47);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(98);
	__webpack_require__(70);
	__webpack_require__(5);
	__webpack_require__(21);
	__webpack_require__(6);
	__webpack_require__(158);
	__webpack_require__(12);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(13);
	__webpack_require__(118);
	__webpack_require__(44);
	__webpack_require__(159);
	__webpack_require__(148);
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(23);
	__webpack_require__(3);
	__webpack_require__(61);
	__webpack_require__(57);
	__webpack_require__(18);
	__webpack_require__(75);
	__webpack_require__(11);
	__webpack_require__(113);
	__webpack_require__(160);
	__webpack_require__(109);
	__webpack_require__(112);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(111);
	__webpack_require__(45);
	__webpack_require__(105);
	__webpack_require__(54);
	__webpack_require__(135);
	__webpack_require__(95);
	__webpack_require__(29);
	__webpack_require__(2);
	__webpack_require__(46);
	__webpack_require__(32);
	__webpack_require__(126);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(53);
	__webpack_require__(42);
	__webpack_require__(52);
	__webpack_require__(104);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(78);
	__webpack_require__(84);
	__webpack_require__(77);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(76);
	__webpack_require__(83);
	__webpack_require__(31);
	__webpack_require__(101);
	__webpack_require__(30);
	__webpack_require__(26);
	__webpack_require__(39);
	__webpack_require__(25);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(36);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(43);
	__webpack_require__(168);
	__webpack_require__(35);
	__webpack_require__(33);
	__webpack_require__(28);
	__webpack_require__(169);
	__webpack_require__(108);
	__webpack_require__(27);
	__webpack_require__(17);
	__webpack_require__(34);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(114);
	__webpack_require__(117);
	__webpack_require__(64);
	__webpack_require__(89);
	__webpack_require__(96);
	__webpack_require__(16);
	__webpack_require__(170);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(127);
	__webpack_require__(128);
	module.exports = __webpack_require__(171);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(2);
	const editor_runtime_1 = __webpack_require__(3);
	const element_renderer_1 = __webpack_require__(7);
	const editor_binding_element_1 = __webpack_require__(55);
	const browser_runtime_1 = __webpack_require__(56);
	const editor_worker_1 = __webpack_require__(57);
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
	const component_1 = __webpack_require__(42);
	const vector2_1 = __webpack_require__(17);
	const drag_action_1 = __webpack_require__(44);
	const project_1 = __webpack_require__(45);
	const background_component_1 = __webpack_require__(52);
	const color_1 = __webpack_require__(53);
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
	        this.value = this.getterFn(this.context);
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
	    EditorElementFlags[EditorElementFlags["ClearingChildren"] = 32] = "ClearingChildren";
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
	        this.flags ^= EditorElementFlags.ClearingChildren;
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].destroy();
	        }
	        this.flags ^= EditorElementFlags.ClearingChildren;
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
	    destroy() {
	        if (this.isDestroyed())
	            return;
	        this.flags |= EditorElementFlags.Destroyed;
	        this.onDestroyed();
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].destroy();
	        }
	        //todo this can be done async somehow
	        const evtList = pendingEventMap.get(this);
	        if (evtList) {
	            for (let i = 0; i < evtList.length; i++) {
	                const evt = evtList[i];
	                if (this.htmlNode) {
	                    this.htmlNode.removeEventListener(evt.type, evt.fn, evt.bubble);
	                }
	            }
	            pendingEventMap.delete(this);
	        }
	        if (this.parent && !this.parent.isDestroyed()) {
	            this.getDomNode().remove();
	            if ((this.parent.flags & EditorElementFlags.ClearingChildren) === 0) {
	                this.parent.children.remove(this);
	            }
	        }
	        this.htmlNode = null;
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
	const math_util_1 = __webpack_require__(18);
	class Vector2 {
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
	        return new Vector2(this.x * factor, this.y * factor);
	    }
	    addScalar(scalar) {
	        this.x += scalar;
	        this.y += scalar;
	        return this;
	    }
	    addScalarNew(scalar) {
	        return new Vector2(this.x + scalar, this.y + scalar);
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
	            return new Vector2(this.x / scalar, this.y / scalar);
	        }
	        else {
	            return new Vector2();
	        }
	    }
	    subScalarNew(scalar) {
	        return new Vector2(this.x - scalar, this.y - scalar);
	    }
	    invert() {
	        this.x *= -1;
	        this.y *= -1;
	        return this;
	    }
	    invertNew() {
	        return new Vector2(this.x * -1, this.y * -1);
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
	    clampToVector0(vector) {
	        this.x = math_util_1.MathUtil.clamp(this.x, 0, vector.x);
	        this.y = math_util_1.MathUtil.clamp(this.y, 0, vector.y);
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
	        const retn = new Vector2();
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
	    addValues(x, y) {
	        this.x += x;
	        this.y += y;
	        return this;
	    }
	    subVector(other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        return this;
	    }
	    subValues(x, y) {
	        this.x -= x;
	        this.y -= y;
	        return this;
	    }
	    addVectorNew(other, out) {
	        return (out || new Vector2()).set(this.x + other.x, this.y + other.y);
	    }
	    subVectorNew(other, out) {
	        return (out || new Vector2()).set(this.x - other.x, this.y - other.y);
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
	        return new Vector2((this.x * cos) - (this.y * sin), (this.x * sin) + (this.y * cos));
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
	        return new Vector2(e * other.x, e * other.y);
	    }
	    distanceTo(other) {
	        const dx = this.x - other.x;
	        const dy = this.y - other.y;
	        return Math.sqrt(dx * dx + dy * dy);
	    }
	    distanceToSquared(other) {
	        const dx = this.x - other.x;
	        const dy = this.y - other.y;
	        return dx * dx + dy * dy;
	    }
	    copy(other) {
	        this.x = other.x;
	        this.y = other.y;
	        return this;
	    }
	    clone(out) {
	        return (out || new Vector2()).set(this.x, this.y);
	    }
	    isZero() {
	        return this.x === 0 && this.y === 0;
	    }
	    equals(other) {
	        return this.x === other.x && this.y === other.y;
	    }
	    toString() {
	        return `{x: ${this.x}, y: ${this.y}}`;
	    }
	    static lerp(start, end, amount, out) {
	        out = out || new Vector2();
	        var x = start.x + ((end.x - start.x) * amount);
	        var y = start.y + ((end.y - start.y) * amount);
	        return out.set(x, y);
	    }
	    static catmullRom(value1, value2, value3, value4, amount, out) {
	        out = out || new Vector2();
	        var squared = amount * amount;
	        var cubed = amount * squared;
	        var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) +
	            (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) +
	            ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));
	        var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) +
	            (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) +
	            ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));
	        out.x = x;
	        out.y = y;
	        return out;
	    }
	    /**
	     * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
	     * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
	     * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate.
	     */
	    static clamp(value, min, max, out) {
	        out = out || new Vector2();
	        var x = value.x;
	        x = (x > max.x) ? max.x : x;
	        x = (x < min.x) ? min.x : x;
	        var y = value.y;
	        y = (y > max.y) ? max.y : y;
	        y = (y < min.y) ? min.y : y;
	        out.x = x;
	        out.y = y;
	        return out;
	    }
	    /**
	     * Returns a new Vecto2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2".
	     */
	    static hermite(value1, tangent1, value2, tangent2, amount, out) {
	        out = out || new Vector2();
	        var squared = amount * amount;
	        var cubed = amount * squared;
	        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
	        var part2 = (-2.0 * cubed) + (3.0 * squared);
	        var part3 = (cubed - (2.0 * squared)) + amount;
	        var part4 = cubed - squared;
	        var x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
	        var y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);
	        out.x = x;
	        out.y = y;
	        return out;
	    }
	    static dot(left, right) {
	        return left.x * right.x + left.y * right.y;
	    }
	    static transformCoordinates(vector, matrix, out) {
	        out = out || new Vector2();
	        const x = vector.x;
	        const y = vector.y;
	        out.x = (x * matrix.a) + (y * matrix.c) + matrix.tx;
	        out.y = (x * matrix.b) + (y * matrix.d) + matrix.ty;
	        return out;
	    }
	    static transformFloatCoordinates(x, y, matrix, out) {
	        out = out || new Vector2();
	        out.x = (x * matrix.a) + (y * matrix.c) + matrix.tx;
	        out.y = (x * matrix.b) + (y * matrix.d) + matrix.ty;
	        return out;
	    }
	    static transformDirection(vector, matrix, out) {
	        out = out || new Vector2();
	        const x = vector.x;
	        const y = vector.y;
	        out.x = (x * matrix.a) + (y * matrix.c);
	        out.y = (x * matrix.b) + (y * matrix.d);
	        return out;
	    }
	}
	Vector2.up = new Vector2(0, 1);
	Vector2.right = new Vector2(1, 0);
	Vector2.down = new Vector2(0, -1);
	Vector2.left = new Vector2(-1, 0);
	Vector2.Zero = new Vector2();
	Vector2.scratch0 = new Vector2();
	Vector2.scratch1 = new Vector2();
	Vector2.scratch2 = new Vector2();
	Vector2.scratch3 = new Vector2();
	Vector2.scratch4 = new Vector2();
	Vector2.scratchArray0 = new Array();
	Vector2.scratchArray1 = new Array();
	exports.Vector2 = Vector2;


/***/ },
/* 18 */
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
	    sign(value) {
	        if (value === 0 || isNaN(value))
	            return value;
	        return value > 0 ? 1 : -1;
	    },
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
	    wrapAngleDegrees(angle) {
	        let x = angle % 360;
	        if (x < 0)
	            x += 360;
	        return x;
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
	    normalizeAngle180(angle) {
	        let x = (angle + 180) % 360;
	        if (x < 0)
	            x += 360;
	        return x - 180;
	    },
	    isPowerOf2(value) {
	        var int = value | 0;
	        if (value !== int)
	            return false;
	        return (int > 0) && ((int & (int - 1)) == 0);
	    }
	};


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
	const runtime_base_1 = __webpack_require__(38);
	const evt_app_element_parent_changed_1 = __webpack_require__(40);
	const e_command_type_1 = __webpack_require__(31);
	const evt_app_element_index_changed_1 = __webpack_require__(41);
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
	const e_lifecycle_flags_1 = __webpack_require__(30);
	const e_command_type_1 = __webpack_require__(31);
	const util_1 = __webpack_require__(16);
	const bounding_box_1 = __webpack_require__(32);
	const math_util_1 = __webpack_require__(18);
	const matrix_1 = __webpack_require__(36);
	const quaternion_1 = __webpack_require__(35);
	const vector2_1 = __webpack_require__(17);
	const vector3_1 = __webpack_require__(34);
	const layout_1 = __webpack_require__(104);
	let idGenerator = 0;
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
	        if (this.parent) {
	            this.parent.children.push(this);
	        }
	        this.width = 0;
	        this.height = 0;
	        this.rotation = 0;
	        this.dirtyFlags = 0;
	        this.scale = new vector2_1.Vector2(1, 1);
	        this.pivot = new vector2_1.Vector2();
	        this.position = new vector2_1.Vector2();
	        this.localMatrix = new matrix_1.Matrix();
	        this.worldMatrix = new matrix_1.Matrix();
	        this.boundingBox = new bounding_box_1.BoundingBox(this);
	        this.anchorMin = new vector2_1.Vector2();
	        this.anchorMax = new vector2_1.Vector2();
	        this.width = 1;
	        this.height = 1;
	        this.widthUnit = layout_1.LengthUnit.Percent;
	        this.heightUnit = layout_1.LengthUnit.Percent;
	        //todo don't allow components to be constructed outside of addComponent or this constructor
	        Runtime.addElement(this);
	    }
	    // public setPivot(x : number, y : number) : void {
	    //     this.pivot.x = clamp01(x);
	    //     this.pivot.y = clamp01(y);
	    // }
	    getPivot() {
	        const out = new vector2_1.Vector2();
	        out.x = this.pivot.x;
	        out.y = this.pivot.y;
	        return out;
	    }
	    getWorldMatrix(out) {
	        return this.updateWorldMatrix().clone(out);
	    }
	    updateWorldMatrix() {
	        //mat 0 = rotation matrix
	        //mat 1 = scale matrix
	        //mat 2 = translation matrix
	        //mat 4 = pivot * scale
	        //mat 5 = mat4 * rotation
	        //local world = mat5 * translation
	        //worldMatrix = parent.getWorldMatrix() * localWorld
	        const scaling = matrix_1.Matrix.scratch0;
	        const rotation = matrix_1.Matrix.scratch1;
	        const translate = matrix_1.Matrix.scratch2;
	        const rotationAndScale = matrix_1.Matrix.scratch3;
	        const radians = this.rotation * math_util_1.MathUtil.DegreesToRadians;
	        quaternion_1.Quaternion.RotationAxis(vector3_1.Vector3.Forward, radians).toRotationMatrix(rotation);
	        matrix_1.Matrix.CreateScale(this.scale.x, this.scale.y, 1, scaling);
	        matrix_1.Matrix.CreateTranslation(this.position.x, this.position.y, 0, translate);
	        matrix_1.Matrix.Multiply(scaling, rotation, rotationAndScale);
	        matrix_1.Matrix.Multiply(rotationAndScale, translate, this.localMatrix);
	        if (this.parent) {
	            matrix_1.Matrix.Multiply(this.localMatrix, this.parent.getWorldMatrix(), this.worldMatrix);
	        }
	        else {
	            this.worldMatrix.copy(this.localMatrix);
	        }
	        return this.worldMatrix;
	    }
	    getMatrix(out) {
	        this.updateWorldMatrix();
	        return this.localMatrix.clone();
	    }
	    setScale(scale) {
	        if (this.scale.equals(scale))
	            return;
	        this.scale.x = scale.x;
	        this.scale.y = scale.y;
	        this.dirtyFlags |= ElementDirtyFlag.Scale;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    getScale(out) {
	        return this.scale.clone(out);
	    }
	    getWidth() {
	        switch (this.widthUnit) {
	            case layout_1.LengthUnit.Pixel:
	                return this.width;
	            case layout_1.LengthUnit.Percent:
	                if (!this.parent) {
	                    return 0;
	                }
	                return this.width * this.parent.getWidth();
	            case layout_1.LengthUnit.Flex:
	                return 0;
	        }
	        return this.width;
	    }
	    getScaledWidth() {
	        return this.width * this.getWorldMatrix(matrix_1.Matrix.scratch4).getScaleX();
	    }
	    setWidth(width, unit) {
	        if (width === this.width && this.widthUnit === unit)
	            return;
	        this.width = math_util_1.MathUtil.clamp(width, 0, Number.MAX_VALUE);
	        this.widthUnit = unit;
	        this.dirtyFlags |= ElementDirtyFlag.Width;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    getHeight() {
	        switch (this.heightUnit) {
	            case layout_1.LengthUnit.Pixel:
	                return this.height;
	            case layout_1.LengthUnit.Percent:
	                if (!this.parent) {
	                    return 0;
	                }
	                return this.height * this.parent.getHeight();
	            case layout_1.LengthUnit.Flex:
	                return 0;
	        }
	        return this.height;
	    }
	    getScaledHeight() {
	        return this.height * this.getWorldMatrix(matrix_1.Matrix.scratch4).getScaleY();
	    }
	    setHeight(height, unit) {
	        if (this.height === height && this.heightUnit === unit)
	            return;
	        this.height = math_util_1.MathUtil.clamp(height, 0, Number.MAX_VALUE);
	        this.heightUnit = unit;
	        this.dirtyFlags |= ElementDirtyFlag.Height;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    setDimensions(width, height, unit) {
	        this.widthUnit = unit;
	        this.heightUnit = unit;
	        this.width = math_util_1.MathUtil.clamp(width, 0, Number.MAX_VALUE);
	        this.height = math_util_1.MathUtil.clamp(height, 0, Number.MAX_VALUE);
	        this.dirtyFlags |= ElementDirtyFlag.WidthOrHeight;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetDimensions, this.id);
	    }
	    getRotation() {
	        return this.rotation;
	    }
	    setRotation(value, space = Space.Local) {
	        if (this.rotation === value && space === Space.Local)
	            return;
	        if (space === Space.World) {
	            let ptr = this.parent;
	            let worldRot = 0;
	            while (ptr) {
	                worldRot += ptr.rotation;
	                ptr = ptr.parent;
	            }
	            this.rotation = -worldRot + value;
	        }
	        else {
	            this.rotation = value;
	        }
	        this.dirtyFlags |= ElementDirtyFlag.Rotation;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    setPosition(position, relativeTo = Space.World, keepChildPositions = false) {
	        this.setPositionValues(position.x, position.y, relativeTo, keepChildPositions);
	    }
	    setPositionValues(x, y, relativeTo = Space.World, keepChildPositions = false) {
	        if (keepChildPositions) {
	            vector2_1.Vector2.scratchArray0.length = this.children.length;
	            for (let i = 0; i < this.children.length; i++) {
	                vector2_1.Vector2.scratchArray0[i] = this.children[i].getPosition();
	            }
	            this.setPositionValues(x, y, relativeTo);
	        }
	        if (this.parent && relativeTo === Space.World) {
	            var invertParentWorldMatrix = this.parent.getWorldMatrix(matrix_1.Matrix.scratch0);
	            invertParentWorldMatrix.invert();
	            const scratch = vector3_1.Vector3.scratch0.set(x, y, 0);
	            vector3_1.Vector3.TransformCoordinates(scratch, invertParentWorldMatrix, scratch);
	            this.position.x = scratch.x;
	            this.position.y = scratch.y;
	        }
	        else {
	            this.position.x = x;
	            this.position.y = y;
	        }
	        if (keepChildPositions) {
	            for (let i = 0; i < this.children.length; i++) {
	                this.children[i].setPosition(vector2_1.Vector2.scratchArray0[i]);
	            }
	        }
	        this.dirtyFlags |= ElementDirtyFlag.Position;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetTransform, this.id);
	    }
	    getLocalPosition(out) {
	        return this.position.clone(out);
	    }
	    getPosition(out) {
	        this.updateWorldMatrix();
	        return (out || new vector2_1.Vector2()).set(this.worldMatrix.m[12], this.worldMatrix.m[13]);
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
	    setParent(parent, keepPosition = true) {
	        if (parent && parent === this.parent)
	            return;
	        parent = parent || AppElement.Root;
	        const oldParent = this.parent;
	        let currentPosition = this.getPosition(vector2_1.Vector2.scratch0);
	        this.parent = parent;
	        //todo ancestor check
	        if (oldParent) {
	            oldParent.children.remove(this);
	        }
	        if (parent) {
	            this.parent.children.push(this);
	        }
	        if (keepPosition) {
	            this.setPositionValues(currentPosition.x, currentPosition.y, Space.World);
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
	    getChildren(storage) {
	        storage = storage || [];
	        storage.length = this.children.length;
	        for (let i = 0; i < this.children.length; i++) {
	            storage[i] = this.children[i];
	        }
	        return storage;
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
	    containsPoint(point) {
	        return false;
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
	const rectangle_1 = __webpack_require__(33);
	const vector3_1 = __webpack_require__(34);
	const quaternion_1 = __webpack_require__(35);
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
	        const scale = new vector3_1.Vector3();
	        const rotation = new quaternion_1.Quaternion();
	        const position = new vector3_1.Vector3();
	        wm.decompose(scale, rotation, position);
	        const theta = rotation.toEulerAngles().z;
	        const pivot = element.getPivot();
	        const w = element.getWidth() * scale.x;
	        const h = element.getHeight() * scale.y;
	        const pivotPoint = new vector2_1.Vector2(pivot.x * w, pivot.y * h);
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	class Rectangle {
	    constructor(x = 0, y = 0, width = 0, height = 0) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this._center = null;
	        this._min = null;
	        this._max = null;
	    }
	    get centerX() {
	        return this.x + (this.width * 0.5);
	    }
	    get centerY() {
	        return this.y + (this.height * 0.5);
	    }
	    get min() {
	        if (!this._min)
	            this._min = new vector2_1.Vector2();
	        this._min.x = this.x;
	        this._min.y = this.y;
	        return this._min;
	    }
	    get max() {
	        if (!this._max)
	            this._max = new vector2_1.Vector2();
	        this._max.x = this.x + this.width;
	        this._max.y = this.y + this.height;
	        return this._max;
	    }
	    get center() {
	        if (!this._center)
	            this._center = new vector2_1.Vector2();
	        this._center.x = this.x + (this.width * 0.5);
	        this._center.y = this.y + (this.height * 0.5);
	        return this._center;
	    }
	    get outerRadius() {
	        var min = vector2_1.Vector2.scratch0.set(this.x, this.y);
	        var max = vector2_1.Vector2.scratch1.set(this.x + this.width, this.y + this.height);
	        return max.subVector(min).length() * 0.5;
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
	        return Rectangle.pointInsideRect(point, this);
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
	        return new Rectangle(this.x, this.y, this.width, this.height);
	    }
	    copyTo(input) {
	        input.x = this.x;
	        input.y = this.y;
	        input.width = this.width;
	        input.height = this.height;
	        return input;
	    }
	}
	Rectangle.Zero = new Rectangle();
	exports.Rectangle = Rectangle;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const quaternion_1 = __webpack_require__(35);
	class Vector3 {
	    constructor(x = 0, y = 0, z = 0) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	    }
	    toString() {
	        return "{x: " + this.x + " y:" + this.y + " z:" + this.z + "}";
	    }
	    getHashCode() {
	        let hash = this.x || 0;
	        hash = (hash * 397) ^ (this.y || 0);
	        hash = (hash * 397) ^ (this.z || 0);
	        return hash;
	    }
	    toQuaternion(out) {
	        var result = out || new quaternion_1.Quaternion(0.0, 0.0, 0.0, 1.0);
	        var cosxPlusz = Math.cos((this.x + this.z) * 0.5);
	        var sinxPlusz = Math.sin((this.x + this.z) * 0.5);
	        var coszMinusx = Math.cos((this.z - this.x) * 0.5);
	        var sinzMinusx = Math.sin((this.z - this.x) * 0.5);
	        var cosy = Math.cos(this.y * 0.5);
	        var siny = Math.sin(this.y * 0.5);
	        result.x = coszMinusx * siny;
	        result.y = -sinzMinusx * siny;
	        result.z = sinxPlusz * cosy;
	        result.w = cosxPlusz * cosy;
	        return result;
	    }
	    addVector(otherVector) {
	        this.x += otherVector.x;
	        this.y += otherVector.y;
	        this.z += otherVector.z;
	        return this;
	    }
	    addVectorNew(other, out) {
	        return (out || new Vector3()).set(this.x + other.x, this.y + other.y, this.z + other.z);
	    }
	    subVector(other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        this.z -= other.z;
	        return this;
	    }
	    subVectorNew(other, out) {
	        return (out || new Vector3()).set(this.x - other.x, this.y - other.y, this.z - other.z);
	    }
	    subValues(x, y, z) {
	        this.x -= x;
	        this.y -= y;
	        this.z -= z;
	        return this;
	    }
	    invert() {
	        this.x = -this.x;
	        this.y = -this.y;
	        this.z = -this.z;
	        return this;
	    }
	    invertNew(out) {
	        return (out || new Vector3()).set(-this.x, -this.y, -this.z);
	    }
	    scale(scale) {
	        this.x *= scale;
	        this.y *= scale;
	        this.z *= scale;
	        return this;
	    }
	    scaleNew(scale, out) {
	        return (out || new Vector3()).set(this.x * scale, this.y * scale, this.z * scale);
	    }
	    equals(other) {
	        return other && this.x === other.x && this.y === other.y && this.z === other.z;
	    }
	    hasValues(x, y, z) {
	        return this.x === x && this.y === y && this.z === z;
	    }
	    multiply(other) {
	        this.x *= other.x;
	        this.y *= other.y;
	        this.z *= other.z;
	        return this;
	    }
	    multiplyNew(other, out) {
	        out = out || new Vector3();
	        out.x = this.x * other.x;
	        out.y = this.y * other.y;
	        out.z = this.z * other.z;
	        return this;
	    }
	    multiplyValues(x, y, z) {
	        this.x *= x;
	        this.y *= y;
	        this.z *= z;
	        return this;
	    }
	    divide(other) {
	        this.x /= other.x;
	        this.y /= other.y;
	        this.z /= other.z;
	        return this;
	    }
	    divideNew(otherVector, result) {
	        result = result || new Vector3();
	        result.x = this.x / otherVector.x;
	        result.y = this.y / otherVector.y;
	        result.z = this.z / otherVector.z;
	        return result;
	    }
	    minimize(other) {
	        if (other.x < this.x)
	            this.x = other.x;
	        if (other.y < this.y)
	            this.y = other.y;
	        if (other.z < this.z)
	            this.z = other.z;
	        return this;
	    }
	    maximize(other) {
	        if (other.x > this.x)
	            this.x = other.x;
	        if (other.y > this.y)
	            this.y = other.y;
	        if (other.z > this.z)
	            this.z = other.z;
	        return this;
	    }
	    length() {
	        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	    }
	    lengthSquared() {
	        return (this.x * this.x + this.y * this.y + this.z * this.z);
	    }
	    normalize() {
	        var len = this.length();
	        if (len === 0 || len === 1.0)
	            return this;
	        var num = 1.0 / len;
	        this.x *= num;
	        this.y *= num;
	        this.z *= num;
	        return this;
	    }
	    clone(out) {
	        out = out || new Vector3();
	        out.x = this.x;
	        out.y = this.y;
	        out.z = this.z;
	        return out;
	    }
	    copy(source) {
	        this.x = source.x;
	        this.y = source.y;
	        this.z = source.z;
	        return this;
	    }
	    set(x, y, z) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        return this;
	    }
	    static GetClipFactor(vector0, vector1, axis, size) {
	        var d0 = Vector3.Dot(vector0, axis) - size;
	        var d1 = Vector3.Dot(vector1, axis) - size;
	        return d0 / (d0 - d1);
	    }
	    //Transforms coordiantes into matrix's space, does not transform direction
	    static TransformCoordinates(vector, transformation, out) {
	        var result = out || new Vector3();
	        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]) + transformation.m[12];
	        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]) + transformation.m[13];
	        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]) + transformation.m[14];
	        var w = (vector.x * transformation.m[3]) + (vector.y * transformation.m[7]) + (vector.z * transformation.m[11]) + transformation.m[15];
	        result.x = x / w;
	        result.y = y / w;
	        result.z = z / w;
	        return result;
	    }
	    //Transforms coordiantes into matrix's space, does not transform direction
	    static TransformCoordinatesFromFloats(x, y, z, transformation, result) {
	        result = result || new Vector3();
	        var rx = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]) + transformation.m[12];
	        var ry = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]) + transformation.m[13];
	        var rz = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]) + transformation.m[14];
	        var rw = (x * transformation.m[3]) + (y * transformation.m[7]) + (z * transformation.m[11]) + transformation.m[15];
	        result.x = rx / rw;
	        result.y = ry / rw;
	        result.z = rz / rw;
	        return result;
	    }
	    /**
	     * Returns a new Vector3 set with the result of the normal transformation by the passed matrix of the passed vector.
	     * This methods computes transformed normalized direction vectors only.
	     */
	    static TransformNormal(vector, transformation, out) {
	        var result = out || new Vector3();
	        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]);
	        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]);
	        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]);
	        result.x = x;
	        result.y = y;
	        result.z = z;
	        return result;
	    }
	    /**
	     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z).
	     * This methods computes transformed normalized direction vectors only.
	     */
	    static TransformNormalFromFloats(x, y, z, transformation, result) {
	        result = result || new Vector3();
	        result.x = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]);
	        result.y = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]);
	        result.z = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]);
	        return result;
	    }
	    /**
	     * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4".
	     */
	    static CatmullRom(value1, value2, value3, value4, amount, result) {
	        result = result || new Vector3();
	        var squared = amount * amount;
	        var cubed = amount * squared;
	        var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) +
	            (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) +
	            ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));
	        var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) +
	            (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) +
	            ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));
	        var z = 0.5 * ((((2.0 * value2.z) + ((-value1.z + value3.z) * amount)) +
	            (((((2.0 * value1.z) - (5.0 * value2.z)) + (4.0 * value3.z)) - value4.z) * squared)) +
	            ((((-value1.z + (3.0 * value2.z)) - (3.0 * value3.z)) + value4.z) * cubed));
	        result.x = x;
	        result.y = y;
	        result.z = z;
	        return result;
	    }
	    /**
	     * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max".
	     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one.
	     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one.
	     */
	    static Clamp(value, min, max, out) {
	        out = out || new Vector3();
	        var x = value.x;
	        x = (x > max.x) ? max.x : x;
	        x = (x < min.x) ? min.x : x;
	        var y = value.y;
	        y = (y > max.y) ? max.y : y;
	        y = (y < min.y) ? min.y : y;
	        var z = value.z;
	        z = (z > max.z) ? max.z : z;
	        z = (z < min.z) ? min.z : z;
	        out.x = x;
	        out.y = y;
	        out.z = z;
	        return out;
	    }
	    static Hermite(value1, tangent1, value2, tangent2, amount, out) {
	        out = out || new Vector3();
	        var squared = amount * amount;
	        var cubed = amount * squared;
	        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
	        var part2 = (-2.0 * cubed) + (3.0 * squared);
	        var part3 = (cubed - (2.0 * squared)) + amount;
	        var part4 = cubed - squared;
	        out.x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
	        out.y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);
	        out.z = (((value1.z * part1) + (value2.z * part2)) + (tangent1.z * part3)) + (tangent2.z * part4);
	        return out;
	    }
	    static Lerp(start, end, amount, out) {
	        var result = out || new Vector3(0, 0, 0);
	        result.x = start.x + ((end.x - start.x) * amount);
	        result.y = start.y + ((end.y - start.y) * amount);
	        result.z = start.z + ((end.z - start.z) * amount);
	        return result;
	    }
	    static Dot(left, right) {
	        return (left.x * right.x + left.y * right.y + left.z * right.z);
	    }
	    static Cross(left, right, out) {
	        var result = out || new Vector3();
	        result.x = left.y * right.z - left.z * right.y;
	        result.y = left.z * right.x - left.x * right.z;
	        result.z = left.x * right.y - left.y * right.x;
	        return result;
	    }
	    static Normalize(vector, out) {
	        var result = out || new Vector3();
	        out.x = vector.x;
	        out.y = vector.y;
	        out.z = vector.z;
	        return out.normalize();
	    }
	    static minimize(left, right) {
	        var min = left.clone();
	        min.minimize(right);
	        return min;
	    }
	    static Maximize(left, right) {
	        var max = left.clone();
	        max.maximize(right);
	        return max;
	    }
	    static Distance(value1, value2) {
	        return Math.sqrt(Vector3.DistanceSquared(value1, value2));
	    }
	    static DistanceSquared(value1, value2) {
	        var x = value1.x - value2.x;
	        var y = value1.y - value2.y;
	        var z = value1.z - value2.z;
	        return (x * x) + (y * y) + (z * z);
	    }
	    static Center(value1, value2, out) {
	        return value1.addVectorNew(value2, out).scale(0.5);
	    }
	    /**
	     * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
	     * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
	     * to something in order to rotate it from its local system to the given target system.
	     * Note : axis1, axis2 and axis3 are normalized during this operation.
	     * Returns a new Vector3.
	     */
	    static RotationFromAxis(axis1, axis2, axis3, out) {
	        out = out || new Vector3();
	        quaternion_1.Quaternion.RotationQuaternionFromAxis(axis1, axis2, axis3, quaternion_1.Quaternion.scratch0);
	        return quaternion_1.Quaternion.scratch0.toEulerAngles(out);
	    }
	}
	Vector3.Zero = new Vector3();
	Vector3.Up = new Vector3(0.0, 1.0, 0.0);
	Vector3.Forward = new Vector3(0.0, 0.0, 1.0);
	Vector3.Right = new Vector3(1.0, 0.0, 0.0);
	Vector3.Left = new Vector3(-1.0, 0.0, 0.0);
	Vector3.scratch0 = new Vector3();
	Vector3.scratch1 = new Vector3();
	Vector3.scratch2 = new Vector3();
	Vector3.scratch3 = new Vector3();
	Vector3.scratch4 = new Vector3();
	exports.Vector3 = Vector3;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const matrix_1 = __webpack_require__(36);
	const vector3_1 = __webpack_require__(34);
	class Quaternion {
	    constructor(x = 0.0, y = 0.0, z = 0.0, w = 1.0) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        this.w = w;
	    }
	    clone(out) {
	        return (out || new Quaternion()).set(this.x, this.y, this.z, this.w);
	    }
	    copy(other) {
	        this.x = other.x;
	        this.y = other.y;
	        this.z = other.z;
	        this.w = other.w;
	        return this;
	    }
	    set(x, y, z, w) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        this.w = w;
	        return this;
	    }
	    addQuaternion(other) {
	        this.x += other.x;
	        this.y += other.y;
	        this.z += other.z;
	        this.w += other.w;
	        return this;
	    }
	    subQuaternion(other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        this.z -= other.z;
	        this.w -= other.w;
	        return this;
	    }
	    scale(value) {
	        this.x *= value;
	        this.y *= value;
	        this.z *= value;
	        this.w *= value;
	        return this;
	    }
	    multiply(q1) {
	        return Quaternion.Multiply(this, q1, this);
	    }
	    conjugate() {
	        return Quaternion.Conjugate(this, this);
	    }
	    length() {
	        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w));
	    }
	    normalize() {
	        var length = 1.0 / this.length();
	        this.x *= length;
	        this.y *= length;
	        this.z *= length;
	        this.w *= length;
	        return this;
	    }
	    toEulerAngles(out) {
	        const result = out || new vector3_1.Vector3();
	        const qz = this.z;
	        const qx = this.x;
	        const qy = this.y;
	        const qw = this.w;
	        const sqw = qw * qw;
	        const sqz = qz * qz;
	        const sqx = qx * qx;
	        const sqy = qy * qy;
	        const zAxisY = qy * qz - qx * qw;
	        const limit = .4999999;
	        if (zAxisY < -limit) {
	            result.y = 2 * Math.atan2(qy, qw);
	            result.x = Math.PI / 2;
	            result.z = 0;
	        }
	        else if (zAxisY > limit) {
	            result.y = 2 * Math.atan2(qy, qw);
	            result.x = -Math.PI / 2;
	            result.z = 0;
	        }
	        else {
	            result.z = Math.atan2(2.0 * (qx * qy + qz * qw), (-sqz - sqx + sqy + sqw));
	            result.x = Math.asin(-2.0 * (qz * qy - qx * qw));
	            result.y = Math.atan2(2.0 * (qz * qx + qy * qw), (sqz - sqx - sqy + sqw));
	        }
	        return result;
	    }
	    getRotationX() {
	        const qz = this.z;
	        const qx = this.x;
	        const qy = this.y;
	        const qw = this.w;
	        const zAxisY = qy * qz - qx * qw;
	        const limit = .4999999;
	        if (zAxisY < -limit) {
	            return Math.PI / 2;
	        }
	        else if (zAxisY > limit) {
	            return -Math.PI / 2;
	        }
	        else {
	            return Math.asin(-2.0 * (qz * qy - qx * qw));
	        }
	    }
	    getRotationY() {
	        const qz = this.z;
	        const qx = this.x;
	        const qy = this.y;
	        const qw = this.w;
	        const sqw = qw * qw;
	        const sqz = qz * qz;
	        const sqx = qx * qx;
	        const sqy = qy * qy;
	        const zAxisY = qy * qz - qx * qw;
	        const limit = .4999999;
	        if (zAxisY < -limit) {
	            return 2 * Math.atan2(qy, qw);
	        }
	        else if (zAxisY > limit) {
	            return 2 * Math.atan2(qy, qw);
	        }
	        else {
	            return Math.atan2(2.0 * (qz * qx + qy * qw), (sqz - sqx - sqy + sqw));
	        }
	    }
	    getRotationZ() {
	        const qz = this.z;
	        const qx = this.x;
	        const qy = this.y;
	        const qw = this.w;
	        const sqw = qw * qw;
	        const sqz = qz * qz;
	        const sqx = qx * qx;
	        const sqy = qy * qy;
	        const zAxisY = qy * qz - qx * qw;
	        const limit = .4999999;
	        if (zAxisY < -limit || zAxisY > limit) {
	            return 0;
	        }
	        else {
	            return Math.atan2(2.0 * (qx * qy + qz * qw), (-sqz - sqx + sqy + sqw));
	        }
	    }
	    toRotationMatrix(result) {
	        result = result || new matrix_1.Matrix();
	        var xx = this.x * this.x;
	        var yy = this.y * this.y;
	        var zz = this.z * this.z;
	        var xy = this.x * this.y;
	        var zw = this.z * this.w;
	        var zx = this.z * this.x;
	        var yw = this.y * this.w;
	        var yz = this.y * this.z;
	        var xw = this.x * this.w;
	        result.m[0] = 1.0 - (2.0 * (yy + zz));
	        result.m[1] = 2.0 * (xy + zw);
	        result.m[2] = 2.0 * (zx - yw);
	        result.m[3] = 0;
	        result.m[4] = 2.0 * (xy - zw);
	        result.m[5] = 1.0 - (2.0 * (zz + xx));
	        result.m[6] = 2.0 * (yz + xw);
	        result.m[7] = 0;
	        result.m[8] = 2.0 * (zx + yw);
	        result.m[9] = 2.0 * (yz - xw);
	        result.m[10] = 1.0 - (2.0 * (yy + xx));
	        result.m[11] = 0;
	        result.m[12] = 0;
	        result.m[13] = 0;
	        result.m[14] = 0;
	        result.m[15] = 1.0;
	        return result;
	    }
	    fromRotationMatrix(matrix) {
	        return Quaternion.FromRotationMatrix(matrix, this);
	    }
	    toString() {
	        return "{x: " + this.x + " y:" + this.y + " z:" + this.z + " w:" + this.w + "}";
	    }
	    getHashCode() {
	        let hash = this.x || 0;
	        hash = (hash * 397) ^ (this.y || 0);
	        hash = (hash * 397) ^ (this.z || 0);
	        hash = (hash * 397) ^ (this.w || 0);
	        return hash;
	    }
	    equals(otherQuaternion) {
	        return otherQuaternion && this.x === otherQuaternion.x && this.y === otherQuaternion.y && this.z === otherQuaternion.z && this.w === otherQuaternion.w;
	    }
	    static Conjugate(q0, out) {
	        out = out || new Quaternion();
	        out.x = -q0.x;
	        out.y = -q0.y;
	        out.z = -q0.z;
	        return out;
	    }
	    static Multiply(q0, q1, out) {
	        out = out || new Quaternion();
	        var x = q0.x * q1.w + q0.y * q1.z - q0.z * q1.y + q0.w * q1.x;
	        var y = -q0.x * q1.z + q0.y * q1.w + q0.z * q1.x + q0.w * q1.y;
	        var z = q0.x * q1.y - q0.y * q1.x + q0.z * q1.w + q0.w * q1.z;
	        var w = -q0.x * q1.x - q0.y * q1.y - q0.z * q1.z + q0.w * q1.w;
	        out.x = x;
	        out.y = y;
	        out.z = z;
	        out.w = w;
	        return out;
	    }
	    static FromRotationMatrix(matrix, out) {
	        var result = out || new Quaternion();
	        var data = matrix.m;
	        var m11 = data[0], m12 = data[4], m13 = data[8];
	        var m21 = data[1], m22 = data[5], m23 = data[9];
	        var m31 = data[2], m32 = data[6], m33 = data[10];
	        var trace = m11 + m22 + m33;
	        var s;
	        if (trace > 0) {
	            s = 0.5 / Math.sqrt(trace + 1.0);
	            result.w = 0.25 / s;
	            result.x = (m32 - m23) * s;
	            result.y = (m13 - m31) * s;
	            result.z = (m21 - m12) * s;
	        }
	        else if (m11 > m22 && m11 > m33) {
	            s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
	            result.w = (m32 - m23) / s;
	            result.x = 0.25 * s;
	            result.y = (m12 + m21) / s;
	            result.z = (m13 + m31) / s;
	        }
	        else if (m22 > m33) {
	            s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
	            result.w = (m13 - m31) / s;
	            result.x = (m12 + m21) / s;
	            result.y = 0.25 * s;
	            result.z = (m23 + m32) / s;
	        }
	        else {
	            s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
	            result.w = (m21 - m12) / s;
	            result.x = (m13 + m31) / s;
	            result.y = (m23 + m32) / s;
	            result.z = 0.25 * s;
	        }
	        return result;
	    }
	    static Invert(q, out) {
	        return (out || new Quaternion()).set(-q.x, -q.y, -q.z, q.w);
	    }
	    static IsIdentity(quaternion) {
	        return quaternion && quaternion.x === 0 && quaternion.y === 0 && quaternion.z === 0 && quaternion.w === 1;
	    }
	    static RotationAxis(axis, angle, out) {
	        out = out || new Quaternion();
	        var sin = Math.sin(angle * 0.5);
	        axis.normalize();
	        out.w = Math.cos(angle * 0.5);
	        out.x = axis.x * sin;
	        out.y = axis.y * sin;
	        out.z = axis.z * sin;
	        return out;
	    }
	    static RotationYawPitchRoll(yaw, pitch, roll, out) {
	        out = out || new Quaternion();
	        var halfRoll = roll * 0.5;
	        var halfPitch = pitch * 0.5;
	        var halfYaw = yaw * 0.5;
	        var sinRoll = Math.sin(halfRoll);
	        var cosRoll = Math.cos(halfRoll);
	        var sinPitch = Math.sin(halfPitch);
	        var cosPitch = Math.cos(halfPitch);
	        var sinYaw = Math.sin(halfYaw);
	        var cosYaw = Math.cos(halfYaw);
	        out.x = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
	        out.y = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
	        out.z = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
	        out.w = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);
	        return out;
	    }
	    static RotationAlphaBetaGamma(alpha, beta, gamma, out) {
	        var out = out || new Quaternion();
	        var halfGammaPlusAlpha = (gamma + alpha) * 0.5;
	        var halfGammaMinusAlpha = (gamma - alpha) * 0.5;
	        var halfBeta = beta * 0.5;
	        out.x = Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta);
	        out.y = Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta);
	        out.z = Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta);
	        out.w = Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta);
	        return out;
	    }
	    //returns rotation value to reach the target orientation
	    static RotationQuaternionFromAxis(axis1, axis2, axis3, out) {
	        out = out || new Quaternion();
	        var rotMat = matrix_1.Matrix.Identity(matrix_1.Matrix.scratch0);
	        matrix_1.Matrix.FromXYZAxesToRef(axis1.normalize(), axis2.normalize(), axis3.normalize(), rotMat);
	        Quaternion.FromRotationMatrix(rotMat, out);
	        return out;
	    }
	    static Slerp(left, right, amount, out) {
	        out = out || new Quaternion();
	        var num2;
	        var num3;
	        var num = amount;
	        var num4 = (((left.x * right.x) + (left.y * right.y)) + (left.z * right.z)) + (left.w * right.w);
	        var flag = false;
	        if (num4 < 0) {
	            flag = true;
	            num4 = -num4;
	        }
	        if (num4 > 0.999999) {
	            num3 = 1 - num;
	            num2 = flag ? -num : num;
	        }
	        else {
	            var num5 = Math.acos(num4);
	            var num6 = (1.0 / Math.sin(num5));
	            num3 = (Math.sin((1.0 - num) * num5)) * num6;
	            num2 = flag ? ((-Math.sin(num * num5)) * num6) : ((Math.sin(num * num5)) * num6);
	        }
	        out.x = (num3 * left.x) + (num2 * right.x);
	        out.y = (num3 * left.y) + (num2 * right.y);
	        out.z = (num3 * left.z) + (num2 * right.z);
	        out.w = (num3 * left.w) + (num2 * right.w);
	        return out;
	    }
	}
	Quaternion.Zero = new Quaternion(0, 0, 0, 0);
	Quaternion.Identity = new Quaternion(0.0, 0.0, 0.0, 1.0);
	Quaternion.scratch0 = new Quaternion();
	Quaternion.scratch1 = new Quaternion();
	Quaternion.scratch2 = new Quaternion();
	Quaternion.scratch3 = new Quaternion();
	exports.Quaternion = Quaternion;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const math_util_1 = __webpack_require__(18);
	const quaternion_1 = __webpack_require__(35);
	const vector3_1 = __webpack_require__(34);
	const vector4_1 = __webpack_require__(37);
	exports.Epsilon = 0.001;
	class Matrix {
	    constructor() {
	        this.m = new Float32Array(16);
	    }
	    isIdentity() {
	        if (this.m[0] !== 1.0 || this.m[5] !== 1.0 || this.m[10] !== 1.0 || this.m[15] !== 1.0)
	            return false;
	        return !(this.m[1] !== 0.0 || this.m[2] !== 0.0 || this.m[3] !== 0.0 ||
	            this.m[4] !== 0.0 || this.m[6] !== 0.0 || this.m[7] !== 0.0 ||
	            this.m[8] !== 0.0 || this.m[9] !== 0.0 || this.m[11] !== 0.0 ||
	            this.m[12] !== 0.0 || this.m[13] !== 0.0 || this.m[14] !== 0.0);
	    }
	    /**
	     * Returns the matrix determinant (float).
	     */
	    determinant() {
	        var temp1 = (this.m[10] * this.m[15]) - (this.m[11] * this.m[14]);
	        var temp2 = (this.m[9] * this.m[15]) - (this.m[11] * this.m[13]);
	        var temp3 = (this.m[9] * this.m[14]) - (this.m[10] * this.m[13]);
	        var temp4 = (this.m[8] * this.m[15]) - (this.m[11] * this.m[12]);
	        var temp5 = (this.m[8] * this.m[14]) - (this.m[10] * this.m[12]);
	        var temp6 = (this.m[8] * this.m[13]) - (this.m[9] * this.m[12]);
	        return ((((this.m[0] * (((this.m[5] * temp1) - (this.m[6] * temp2)) + (this.m[7] * temp3))) - (this.m[1] * (((this.m[4] * temp1) -
	            (this.m[6] * temp4)) + (this.m[7] * temp5)))) + (this.m[2] * (((this.m[4] * temp2) - (this.m[5] * temp4)) + (this.m[7] * temp6)))) -
	            (this.m[3] * (((this.m[4] * temp3) - (this.m[5] * temp5)) + (this.m[6] * temp6))));
	    }
	    invert() {
	        this.invertToRef(this);
	        return this;
	    }
	    /**
	     * Sets all the matrix elements to zero.
	     * Returns the Matrix.
	     */
	    reset() {
	        for (var index = 0; index < 16; index++) {
	            this.m[index] = 0.0;
	        }
	        return this;
	    }
	    /**
	     * Returns a new Matrix as the addition result of the current Matrix and the passed one.
	     */
	    add(other) {
	        var result = new Matrix();
	        this.addToRef(other, result);
	        return result;
	    }
	    /**
	     * Sets the passed matrix "result" with the addition result of the current Matrix and the passed one.
	     * Returns the Matrix.
	     */
	    addToRef(other, result) {
	        for (var index = 0; index < 16; index++) {
	            result.m[index] = this.m[index] + other.m[index];
	        }
	        return this;
	    }
	    /**
	     * Adds in place the passed matrix to the current Matrix.
	     * Returns the updated Matrix.
	     */
	    addToSelf(other) {
	        for (var index = 0; index < 16; index++) {
	            this.m[index] += other.m[index];
	        }
	        return this;
	    }
	    /**
	     * Sets the passed matrix with the current inverted Matrix.
	     * Returns the unmodified current Matrix.
	     */
	    invertToRef(other) {
	        var l1 = this.m[0];
	        var l2 = this.m[1];
	        var l3 = this.m[2];
	        var l4 = this.m[3];
	        var l5 = this.m[4];
	        var l6 = this.m[5];
	        var l7 = this.m[6];
	        var l8 = this.m[7];
	        var l9 = this.m[8];
	        var l10 = this.m[9];
	        var l11 = this.m[10];
	        var l12 = this.m[11];
	        var l13 = this.m[12];
	        var l14 = this.m[13];
	        var l15 = this.m[14];
	        var l16 = this.m[15];
	        var l17 = (l11 * l16) - (l12 * l15);
	        var l18 = (l10 * l16) - (l12 * l14);
	        var l19 = (l10 * l15) - (l11 * l14);
	        var l20 = (l9 * l16) - (l12 * l13);
	        var l21 = (l9 * l15) - (l11 * l13);
	        var l22 = (l9 * l14) - (l10 * l13);
	        var l23 = ((l6 * l17) - (l7 * l18)) + (l8 * l19);
	        var l24 = -(((l5 * l17) - (l7 * l20)) + (l8 * l21));
	        var l25 = ((l5 * l18) - (l6 * l20)) + (l8 * l22);
	        var l26 = -(((l5 * l19) - (l6 * l21)) + (l7 * l22));
	        var l27 = 1.0 / ((((l1 * l23) + (l2 * l24)) + (l3 * l25)) + (l4 * l26));
	        var l28 = (l7 * l16) - (l8 * l15);
	        var l29 = (l6 * l16) - (l8 * l14);
	        var l30 = (l6 * l15) - (l7 * l14);
	        var l31 = (l5 * l16) - (l8 * l13);
	        var l32 = (l5 * l15) - (l7 * l13);
	        var l33 = (l5 * l14) - (l6 * l13);
	        var l34 = (l7 * l12) - (l8 * l11);
	        var l35 = (l6 * l12) - (l8 * l10);
	        var l36 = (l6 * l11) - (l7 * l10);
	        var l37 = (l5 * l12) - (l8 * l9);
	        var l38 = (l5 * l11) - (l7 * l9);
	        var l39 = (l5 * l10) - (l6 * l9);
	        other.m[0] = l23 * l27;
	        other.m[4] = l24 * l27;
	        other.m[8] = l25 * l27;
	        other.m[12] = l26 * l27;
	        other.m[1] = -(((l2 * l17) - (l3 * l18)) + (l4 * l19)) * l27;
	        other.m[5] = (((l1 * l17) - (l3 * l20)) + (l4 * l21)) * l27;
	        other.m[9] = -(((l1 * l18) - (l2 * l20)) + (l4 * l22)) * l27;
	        other.m[13] = (((l1 * l19) - (l2 * l21)) + (l3 * l22)) * l27;
	        other.m[2] = (((l2 * l28) - (l3 * l29)) + (l4 * l30)) * l27;
	        other.m[6] = -(((l1 * l28) - (l3 * l31)) + (l4 * l32)) * l27;
	        other.m[10] = (((l1 * l29) - (l2 * l31)) + (l4 * l33)) * l27;
	        other.m[14] = -(((l1 * l30) - (l2 * l32)) + (l3 * l33)) * l27;
	        other.m[3] = -(((l2 * l34) - (l3 * l35)) + (l4 * l36)) * l27;
	        other.m[7] = (((l1 * l34) - (l3 * l37)) + (l4 * l38)) * l27;
	        other.m[11] = -(((l1 * l35) - (l2 * l37)) + (l4 * l39)) * l27;
	        other.m[15] = (((l1 * l36) - (l2 * l38)) + (l3 * l39)) * l27;
	        return other;
	    }
	    /**
	     * Inserts the translation vector (using 3 x floats) in the current Matrix.
	     * Returns the updated Matrix.
	     */
	    setTranslationFromFloats(x, y, z) {
	        this.m[12] = x;
	        this.m[13] = y;
	        this.m[14] = z;
	        return this;
	    }
	    /**
	     * Inserts the translation vector in the current Matrix.
	     * Returns the updated Matrix.
	     */
	    setTranslation(vector3) {
	        this.m[12] = vector3.x;
	        this.m[13] = vector3.y;
	        this.m[14] = vector3.z;
	        return this;
	    }
	    /**
	     * Returns a new Vector3 as the extracted translation from the Matrix.
	     */
	    getTranslation() {
	        return new vector3_1.Vector3(this.m[12], this.m[13], this.m[14]);
	    }
	    /**
	     * Fill a Vector3 with the extracted translation from the Matrix.
	     */
	    getTranslationToRef(result) {
	        result.x = this.m[12];
	        result.y = this.m[13];
	        result.z = this.m[14];
	        return this;
	    }
	    /**
	     * Remove rotation and scaling part from the Matrix.
	     * Returns the updated Matrix.
	     */
	    removeRotationAndScaling() {
	        this.setRowFromFloats(0, 1, 0, 0, 0);
	        this.setRowFromFloats(1, 0, 1, 0, 0);
	        this.setRowFromFloats(2, 0, 0, 1, 0);
	        return this;
	    }
	    multiply(other) {
	        return Matrix.Multiply(this, other, this);
	        //this.multiplyToRef(other, result);
	    }
	    copy(other) {
	        for (var index = 0; index < 16; index++) {
	            this.m[index] = other.m[index];
	        }
	        return this;
	    }
	    multiplyToRef(other, result) {
	        this.multiplyToArray(other, result.m, 0);
	        return this;
	    }
	    /**
	     * Sets the Float32Array "result" from the passed index "offset" with the multiplication result of the current Matrix and the passed one.
	     */
	    multiplyToArray(other, result, offset) {
	        var tm0 = this.m[0];
	        var tm1 = this.m[1];
	        var tm2 = this.m[2];
	        var tm3 = this.m[3];
	        var tm4 = this.m[4];
	        var tm5 = this.m[5];
	        var tm6 = this.m[6];
	        var tm7 = this.m[7];
	        var tm8 = this.m[8];
	        var tm9 = this.m[9];
	        var tm10 = this.m[10];
	        var tm11 = this.m[11];
	        var tm12 = this.m[12];
	        var tm13 = this.m[13];
	        var tm14 = this.m[14];
	        var tm15 = this.m[15];
	        var om0 = other.m[0];
	        var om1 = other.m[1];
	        var om2 = other.m[2];
	        var om3 = other.m[3];
	        var om4 = other.m[4];
	        var om5 = other.m[5];
	        var om6 = other.m[6];
	        var om7 = other.m[7];
	        var om8 = other.m[8];
	        var om9 = other.m[9];
	        var om10 = other.m[10];
	        var om11 = other.m[11];
	        var om12 = other.m[12];
	        var om13 = other.m[13];
	        var om14 = other.m[14];
	        var om15 = other.m[15];
	        result[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
	        result[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
	        result[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
	        result[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;
	        result[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
	        result[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
	        result[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
	        result[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;
	        result[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
	        result[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
	        result[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
	        result[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;
	        result[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
	        result[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
	        result[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
	        result[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;
	        return this;
	    }
	    /**
	     * Boolean : True is the current Matrix and the passed one values are strictly equal.
	     */
	    equals(value) {
	        return value &&
	            (this.m[0] === value.m[0] && this.m[1] === value.m[1] && this.m[2] === value.m[2] && this.m[3] === value.m[3] &&
	                this.m[4] === value.m[4] && this.m[5] === value.m[5] && this.m[6] === value.m[6] && this.m[7] === value.m[7] &&
	                this.m[8] === value.m[8] && this.m[9] === value.m[9] && this.m[10] === value.m[10] && this.m[11] === value.m[11] &&
	                this.m[12] === value.m[12] && this.m[13] === value.m[13] && this.m[14] === value.m[14] && this.m[15] === value.m[15]);
	    }
	    /**
	     * Returns a new Matrix from the current Matrix.
	     */
	    clone(out) {
	        out = out || new Matrix();
	        return Matrix.FromValuesToRef(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15], out);
	    }
	    /**
	     * Returns the string "Matrix"
	     */
	    getClassName() {
	        return "Matrix";
	    }
	    /**
	     * Returns the Matrix hash code.
	     */
	    getHashCode() {
	        let hash = this.m[0] || 0;
	        for (let i = 1; i < 16; i++) {
	            hash = (hash * 397) ^ (this.m[i] || 0);
	        }
	        return hash;
	    }
	    /**
	     * Decomposes the current Matrix into :
	     * - a scale vector3 passed as a reference to update,
	     * - a rotation quaternion passed as a reference to update,
	     * - a translation vector3 passed as a reference to update.
	     * Returns the boolean `true`.
	     */
	    decompose(scale, rotation, translation) {
	        translation.x = this.m[12];
	        translation.y = this.m[13];
	        translation.z = this.m[14];
	        var xs = math_util_1.MathUtil.sign(this.m[0] * this.m[1] * this.m[2] * this.m[3]) < 0 ? -1 : 1;
	        var ys = math_util_1.MathUtil.sign(this.m[4] * this.m[5] * this.m[6] * this.m[7]) < 0 ? -1 : 1;
	        var zs = math_util_1.MathUtil.sign(this.m[8] * this.m[9] * this.m[10] * this.m[11]) < 0 ? -1 : 1;
	        scale.x = xs * Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2]);
	        scale.y = ys * Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6]);
	        scale.z = zs * Math.sqrt(this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10]);
	        if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
	            rotation.x = 0;
	            rotation.y = 0;
	            rotation.z = 0;
	            rotation.w = 1;
	            return false;
	        }
	        Matrix.FromValuesToRef(this.m[0] / scale.x, this.m[1] / scale.x, this.m[2] / scale.x, 0, this.m[4] / scale.y, this.m[5] / scale.y, this.m[6] / scale.y, 0, this.m[8] / scale.z, this.m[9] / scale.z, this.m[10] / scale.z, 0, 0, 0, 0, 1, internalScratch0);
	        quaternion_1.Quaternion.FromRotationMatrix(internalScratch0, rotation);
	        return true;
	    }
	    getScaleVector(out) {
	        out = out || new vector3_1.Vector3();
	        var xs = math_util_1.MathUtil.sign(this.m[0] * this.m[1] * this.m[2] * this.m[3]) < 0 ? -1 : 1;
	        var ys = math_util_1.MathUtil.sign(this.m[4] * this.m[5] * this.m[6] * this.m[7]) < 0 ? -1 : 1;
	        var zs = math_util_1.MathUtil.sign(this.m[8] * this.m[9] * this.m[10] * this.m[11]) < 0 ? -1 : 1;
	        out.x = xs * Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2]);
	        out.y = ys * Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6]);
	        out.z = zs * Math.sqrt(this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10]);
	        return out;
	    }
	    getScaleX() {
	        var xs = math_util_1.MathUtil.sign(this.m[0] * this.m[1] * this.m[2] * this.m[3]) < 0 ? -1 : 1;
	        return xs * Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1] + this.m[2] * this.m[2]);
	    }
	    getScaleY() {
	        var ys = math_util_1.MathUtil.sign(this.m[4] * this.m[5] * this.m[6] * this.m[7]) < 0 ? -1 : 1;
	        return ys * Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5] + this.m[6] * this.m[6]);
	    }
	    getScaleZ() {
	        var zs = math_util_1.MathUtil.sign(this.m[8] * this.m[9] * this.m[10] * this.m[11]) < 0 ? -1 : 1;
	        return zs * Math.sqrt(this.m[8] * this.m[8] + this.m[9] * this.m[9] + this.m[10] * this.m[10]);
	    }
	    /**
	     * Returns a new Matrix as the extracted rotation matrix from the current one.
	     */
	    getRotationMatrix() {
	        var result = Matrix.Identity();
	        this.getRotationMatrixToRef(result);
	        return result;
	    }
	    /**
	     * Extracts the rotation matrix from the current one and sets it as the passed "result".
	     * Returns the current Matrix.
	     */
	    getRotationMatrixToRef(result) {
	        var m = this.m;
	        var xs = m[0] * m[1] * m[2] * m[3] < 0 ? -1 : 1;
	        var ys = m[4] * m[5] * m[6] * m[7] < 0 ? -1 : 1;
	        var zs = m[8] * m[9] * m[10] * m[11] < 0 ? -1 : 1;
	        var sx = xs * Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
	        var sy = ys * Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6]);
	        var sz = zs * Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10]);
	        Matrix.FromValuesToRef(m[0] / sx, m[1] / sx, m[2] / sx, 0, m[4] / sy, m[5] / sy, m[6] / sy, 0, m[8] / sz, m[9] / sz, m[10] / sz, 0, 0, 0, 0, 1, result);
	        return this;
	    }
	    // Statics
	    /**
	     * Returns a new Matrix set from the starting index of the passed array.
	     */
	    static FromArray(array, offset) {
	        var result = new Matrix();
	        if (!offset) {
	            offset = 0;
	        }
	        Matrix.FromArrayToRef(array, offset, result);
	        return result;
	    }
	    /**
	     * Sets the passed "result" matrix from the starting index of the passed array.
	     */
	    static FromArrayToRef(array, offset, result) {
	        for (var index = 0; index < 16; index++) {
	            result.m[index] = array[index + offset];
	        }
	    }
	    /**
	     * Sets the passed "result" matrix from the starting index of the passed Float32Array by multiplying each element by the float "scale".
	     */
	    static FromFloat32ArrayToRefScaled(array, offset, scale, result) {
	        for (var index = 0; index < 16; index++) {
	            result.m[index] = array[index + offset] * scale;
	        }
	    }
	    /**
	     * Sets the passed matrix "result" with the 16 passed floats.
	     */
	    static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) {
	        result.m[0] = initialM11;
	        result.m[1] = initialM12;
	        result.m[2] = initialM13;
	        result.m[3] = initialM14;
	        result.m[4] = initialM21;
	        result.m[5] = initialM22;
	        result.m[6] = initialM23;
	        result.m[7] = initialM24;
	        result.m[8] = initialM31;
	        result.m[9] = initialM32;
	        result.m[10] = initialM33;
	        result.m[11] = initialM34;
	        result.m[12] = initialM41;
	        result.m[13] = initialM42;
	        result.m[14] = initialM43;
	        result.m[15] = initialM44;
	        return result;
	    }
	    /**
	     * Returns the index-th row of the current matrix as a new Vector4.
	     */
	    getRow(index) {
	        if (index < 0 || index > 3) {
	            return null;
	        }
	        var i = index * 4;
	        return new vector4_1.Vector4(this.m[i + 0], this.m[i + 1], this.m[i + 2], this.m[i + 3]);
	    }
	    /**
	     * Sets the index-th row of the current matrix with the passed Vector4 values.
	     * Returns the updated Matrix.
	     */
	    setRow(index, row) {
	        if (index < 0 || index > 3) {
	            return this;
	        }
	        var i = index * 4;
	        this.m[i + 0] = row.x;
	        this.m[i + 1] = row.y;
	        this.m[i + 2] = row.z;
	        this.m[i + 3] = row.w;
	        return this;
	    }
	    /**
	     * Sets the index-th row of the current matrix with the passed 4 x float values.
	     * Returns the updated Matrix.
	     */
	    setRowFromFloats(index, x, y, z, w) {
	        if (index < 0 || index > 3) {
	            return this;
	        }
	        var i = index * 4;
	        this.m[i + 0] = x;
	        this.m[i + 1] = y;
	        this.m[i + 2] = z;
	        this.m[i + 3] = w;
	        return this;
	    }
	    /**
	     * Returns a new Matrix set from the 16 passed floats.
	     */
	    static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) {
	        var result = new Matrix();
	        result.m[0] = initialM11;
	        result.m[1] = initialM12;
	        result.m[2] = initialM13;
	        result.m[3] = initialM14;
	        result.m[4] = initialM21;
	        result.m[5] = initialM22;
	        result.m[6] = initialM23;
	        result.m[7] = initialM24;
	        result.m[8] = initialM31;
	        result.m[9] = initialM32;
	        result.m[10] = initialM33;
	        result.m[11] = initialM34;
	        result.m[12] = initialM41;
	        result.m[13] = initialM42;
	        result.m[14] = initialM43;
	        result.m[15] = initialM44;
	        return result;
	    }
	    /**
	     * Returns a new Matrix composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
	     */
	    static Compose(scale, rotation, translation) {
	        var result = Matrix.Identity();
	        Matrix.ComposeToRef(scale, rotation, translation, result);
	        return result;
	    }
	    /**
	     * Update a Matrix with values composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
	     */
	    static ComposeToRef(scale, rotation, translation, result) {
	        const m = internalScratch0;
	        const m1 = internalScratch1;
	        Matrix.FromValuesToRef(scale.x, 0, 0, 0, 0, scale.y, 0, 0, 0, 0, scale.z, 0, 0, 0, 0, 1, internalScratch0);
	        rotation.toRotationMatrix(internalScratch1);
	        internalScratch0.multiplyToRef(internalScratch1, result);
	        result.setTranslation(translation);
	    }
	    /**
	     * Returns a new indentity Matrix.
	     */
	    static Identity(out) {
	        out = out || new Matrix();
	        return Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, out);
	    }
	    /**
	     * Returns a new zero Matrix.
	     */
	    static Zero() {
	        return Matrix.FromValues(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
	    }
	    /**
	     * Returns a new rotation matrix for "angle" radians around the X axis.
	     */
	    static RotationX(angle) {
	        var result = new Matrix();
	        Matrix.RotationXToRef(angle, result);
	        return result;
	    }
	    /**
	     * Returns a new Matrix as the passed inverted one.
	     */
	    static Invert(source) {
	        var result = new Matrix();
	        source.invertToRef(result);
	        return result;
	    }
	    static Multiply(mat0, mat1, result) {
	        result = result || new Matrix();
	        const retnArray = result.m;
	        const mat0Array = mat0.m;
	        const mat1Array = mat1.m;
	        const tm0 = mat0Array[0];
	        const tm1 = mat0Array[1];
	        const tm2 = mat0Array[2];
	        const tm3 = mat0Array[3];
	        const tm4 = mat0Array[4];
	        const tm5 = mat0Array[5];
	        const tm6 = mat0Array[6];
	        const tm7 = mat0Array[7];
	        const tm8 = mat0Array[8];
	        const tm9 = mat0Array[9];
	        const tm10 = mat0Array[10];
	        const tm11 = mat0Array[11];
	        const tm12 = mat0Array[12];
	        const tm13 = mat0Array[13];
	        const tm14 = mat0Array[14];
	        const tm15 = mat0Array[15];
	        const om0 = mat1Array[0];
	        const om1 = mat1Array[1];
	        const om2 = mat1Array[2];
	        const om3 = mat1Array[3];
	        const om4 = mat1Array[4];
	        const om5 = mat1Array[5];
	        const om6 = mat1Array[6];
	        const om7 = mat1Array[7];
	        const om8 = mat1Array[8];
	        const om9 = mat1Array[9];
	        const om10 = mat1Array[10];
	        const om11 = mat1Array[11];
	        const om12 = mat1Array[12];
	        const om13 = mat1Array[13];
	        const om14 = mat1Array[14];
	        const om15 = mat1Array[15];
	        retnArray[0] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
	        retnArray[1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
	        retnArray[2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
	        retnArray[3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;
	        retnArray[4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
	        retnArray[5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
	        retnArray[6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
	        retnArray[7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;
	        retnArray[8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
	        retnArray[9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
	        retnArray[10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
	        retnArray[11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;
	        retnArray[12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
	        retnArray[13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
	        retnArray[14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
	        retnArray[15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;
	        return result;
	    }
	    /**
	     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the X axis.
	     */
	    static RotationXToRef(angle, result) {
	        var s = Math.sin(angle);
	        var c = Math.cos(angle);
	        result.m[0] = 1.0;
	        result.m[15] = 1.0;
	        result.m[5] = c;
	        result.m[10] = c;
	        result.m[9] = -s;
	        result.m[6] = s;
	        result.m[1] = 0.0;
	        result.m[2] = 0.0;
	        result.m[3] = 0.0;
	        result.m[4] = 0.0;
	        result.m[7] = 0.0;
	        result.m[8] = 0.0;
	        result.m[11] = 0.0;
	        result.m[12] = 0.0;
	        result.m[13] = 0.0;
	        result.m[14] = 0.0;
	    }
	    /**
	     * Returns a new rotation matrix for "angle" radians around the Y axis.
	     */
	    static RotationY(angle) {
	        var result = new Matrix();
	        Matrix.RotationYToRef(angle, result);
	        return result;
	    }
	    /**
	     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Y axis.
	     */
	    static RotationYToRef(angle, result) {
	        var s = Math.sin(angle);
	        var c = Math.cos(angle);
	        result.m[5] = 1.0;
	        result.m[15] = 1.0;
	        result.m[0] = c;
	        result.m[2] = -s;
	        result.m[8] = s;
	        result.m[10] = c;
	        result.m[1] = 0.0;
	        result.m[3] = 0.0;
	        result.m[4] = 0.0;
	        result.m[6] = 0.0;
	        result.m[7] = 0.0;
	        result.m[9] = 0.0;
	        result.m[11] = 0.0;
	        result.m[12] = 0.0;
	        result.m[13] = 0.0;
	        result.m[14] = 0.0;
	    }
	    /**
	     * Returns a new rotation matrix for "angle" radians around the Z axis.
	     */
	    static RotationZ(angle) {
	        var result = new Matrix();
	        Matrix.RotationZToRef(angle, result);
	        return result;
	    }
	    /**
	     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Z axis.
	     */
	    static RotationZToRef(angle, result) {
	        var s = Math.sin(angle);
	        var c = Math.cos(angle);
	        result.m[10] = 1.0;
	        result.m[15] = 1.0;
	        result.m[0] = c;
	        result.m[1] = s;
	        result.m[4] = -s;
	        result.m[5] = c;
	        result.m[2] = 0.0;
	        result.m[3] = 0.0;
	        result.m[6] = 0.0;
	        result.m[7] = 0.0;
	        result.m[8] = 0.0;
	        result.m[9] = 0.0;
	        result.m[11] = 0.0;
	        result.m[12] = 0.0;
	        result.m[13] = 0.0;
	        result.m[14] = 0.0;
	    }
	    /**
	     * Returns a new rotation matrix for "angle" radians around the passed axis.
	     */
	    static RotationAxis(axis, angle) {
	        var result = Matrix.Zero();
	        Matrix.RotationAxisToRef(axis, angle, result);
	        return result;
	    }
	    /**
	     * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the passed axis.
	     */
	    static RotationAxisToRef(axis, angle, result) {
	        var s = Math.sin(-angle);
	        var c = Math.cos(-angle);
	        var c1 = 1 - c;
	        axis.normalize();
	        result.m[0] = (axis.x * axis.x) * c1 + c;
	        result.m[1] = (axis.x * axis.y) * c1 - (axis.z * s);
	        result.m[2] = (axis.x * axis.z) * c1 + (axis.y * s);
	        result.m[3] = 0.0;
	        result.m[4] = (axis.y * axis.x) * c1 + (axis.z * s);
	        result.m[5] = (axis.y * axis.y) * c1 + c;
	        result.m[6] = (axis.y * axis.z) * c1 - (axis.x * s);
	        result.m[7] = 0.0;
	        result.m[8] = (axis.z * axis.x) * c1 - (axis.y * s);
	        result.m[9] = (axis.z * axis.y) * c1 + (axis.x * s);
	        result.m[10] = (axis.z * axis.z) * c1 + c;
	        result.m[11] = 0.0;
	        result.m[15] = 1.0;
	    }
	    /**
	     * Returns a new Matrix as a rotation matrix from the Euler angles (y, x, z).
	     */
	    static RotationYawPitchRoll(yaw, pitch, roll, out) {
	        out = out || new Matrix();
	        const q = quaternion_1.Quaternion.scratch0;
	        quaternion_1.Quaternion.RotationYawPitchRoll(yaw, pitch, roll, q);
	        return q.toRotationMatrix(out);
	    }
	    static CreateScale(x, y, z, result) {
	        result = result || new Matrix();
	        result.m[0] = x;
	        result.m[1] = 0.0;
	        result.m[2] = 0.0;
	        result.m[3] = 0.0;
	        result.m[4] = 0.0;
	        result.m[5] = y;
	        result.m[6] = 0.0;
	        result.m[7] = 0.0;
	        result.m[8] = 0.0;
	        result.m[9] = 0.0;
	        result.m[10] = z;
	        result.m[11] = 0.0;
	        result.m[12] = 0.0;
	        result.m[13] = 0.0;
	        result.m[14] = 0.0;
	        result.m[15] = 1.0;
	        return result;
	    }
	    static CreateTranslation(x, y, z, out) {
	        return Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0, out || new Matrix());
	    }
	    /**
	     * Returns a new Matrix whose values are the interpolated values for "gradien" (float) between the ones of the matrices "startValue" and "endValue".
	     */
	    static Lerp(startValue, endValue, gradient) {
	        var result = Matrix.Zero();
	        for (var index = 0; index < 16; index++) {
	            result.m[index] = startValue.m[index] * (1.0 - gradient) + endValue.m[index] * gradient;
	        }
	        return result;
	    }
	    /**
	     * Returns a new Matrix whose values are computed by :
	     * - decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices,
	     * - interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end,
	     * - recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices.
	     */
	    static DecomposeLerp(startValue, endValue, gradient) {
	        var startScale = new vector3_1.Vector3(0, 0, 0);
	        var startRotation = new quaternion_1.Quaternion();
	        var startTranslation = new vector3_1.Vector3(0, 0, 0);
	        startValue.decompose(startScale, startRotation, startTranslation);
	        var endScale = new vector3_1.Vector3(0, 0, 0);
	        var endRotation = new quaternion_1.Quaternion();
	        var endTranslation = new vector3_1.Vector3(0, 0, 0);
	        endValue.decompose(endScale, endRotation, endTranslation);
	        var resultScale = vector3_1.Vector3.Lerp(startScale, endScale, gradient);
	        var resultRotation = quaternion_1.Quaternion.Slerp(startRotation, endRotation, gradient);
	        var resultTranslation = vector3_1.Vector3.Lerp(startTranslation, endTranslation, gradient);
	        return Matrix.Compose(resultScale, resultRotation, resultTranslation);
	    }
	    /**
	    * Returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the passed Matrix.
	    */
	    static GetAsMatrix2x2(matrix) {
	        return new Float32Array([
	            matrix.m[0], matrix.m[1],
	            matrix.m[4], matrix.m[5]
	        ]);
	    }
	    /**
	     * Returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the passed Matrix.
	     */
	    static GetAsMatrix3x3(matrix) {
	        return new Float32Array([
	            matrix.m[0], matrix.m[1], matrix.m[2],
	            matrix.m[4], matrix.m[5], matrix.m[6],
	            matrix.m[8], matrix.m[9], matrix.m[10]
	        ]);
	    }
	    /**
	     * Compute the transpose of the passed Matrix.
	     * Returns a new Matrix.
	     */
	    static Transpose(matrix) {
	        var result = new Matrix();
	        result.m[0] = matrix.m[0];
	        result.m[1] = matrix.m[4];
	        result.m[2] = matrix.m[8];
	        result.m[3] = matrix.m[12];
	        result.m[4] = matrix.m[1];
	        result.m[5] = matrix.m[5];
	        result.m[6] = matrix.m[9];
	        result.m[7] = matrix.m[13];
	        result.m[8] = matrix.m[2];
	        result.m[9] = matrix.m[6];
	        result.m[10] = matrix.m[10];
	        result.m[11] = matrix.m[14];
	        result.m[12] = matrix.m[3];
	        result.m[13] = matrix.m[7];
	        result.m[14] = matrix.m[11];
	        result.m[15] = matrix.m[15];
	        return result;
	    }
	    /**
	     * Sets the passed matrix "mat" as a rotation matrix composed from the 3 passed  left handed axis.
	     */
	    static FromXYZAxesToRef(xaxis, yaxis, zaxis, mat) {
	        mat.m[0] = xaxis.x;
	        mat.m[1] = xaxis.y;
	        mat.m[2] = xaxis.z;
	        mat.m[3] = 0.0;
	        mat.m[4] = yaxis.x;
	        mat.m[5] = yaxis.y;
	        mat.m[6] = yaxis.z;
	        mat.m[7] = 0.0;
	        mat.m[8] = zaxis.x;
	        mat.m[9] = zaxis.y;
	        mat.m[10] = zaxis.z;
	        mat.m[11] = 0.0;
	        mat.m[12] = 0.0;
	        mat.m[13] = 0.0;
	        mat.m[14] = 0.0;
	        mat.m[15] = 1.0;
	    }
	    /**
	     * Sets the passed matrix "result" as a rotation matrix according to the passed quaternion.
	     */
	    static FromQuaternionToRef(quat, result) {
	        var xx = quat.x * quat.x;
	        var yy = quat.y * quat.y;
	        var zz = quat.z * quat.z;
	        var xy = quat.x * quat.y;
	        var zw = quat.z * quat.w;
	        var zx = quat.z * quat.x;
	        var yw = quat.y * quat.w;
	        var yz = quat.y * quat.z;
	        var xw = quat.x * quat.w;
	        result.m[0] = 1.0 - (2.0 * (yy + zz));
	        result.m[1] = 2.0 * (xy + zw);
	        result.m[2] = 2.0 * (zx - yw);
	        result.m[3] = 0.0;
	        result.m[4] = 2.0 * (xy - zw);
	        result.m[5] = 1.0 - (2.0 * (zz + xx));
	        result.m[6] = 2.0 * (yz + xw);
	        result.m[7] = 0.0;
	        result.m[8] = 2.0 * (zx + yw);
	        result.m[9] = 2.0 * (yz - xw);
	        result.m[10] = 1.0 - (2.0 * (yy + xx));
	        result.m[11] = 0.0;
	        result.m[12] = 0.0;
	        result.m[13] = 0.0;
	        result.m[14] = 0.0;
	        result.m[15] = 1.0;
	    }
	}
	Matrix.scratch0 = new Matrix;
	Matrix.scratch1 = new Matrix;
	Matrix.scratch2 = new Matrix;
	Matrix.scratch3 = new Matrix;
	Matrix.scratch4 = new Matrix;
	Matrix.scratch5 = new Matrix;
	exports.Matrix = Matrix;
	const internalScratch0 = new Matrix();
	const internalScratch1 = new Matrix();


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector3_1 = __webpack_require__(34);
	class Vector4 {
	    /**
	     * Creates a Vector4 object from the passed floats.
	     */
	    constructor(x, y, z, w) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        this.w = w;
	    }
	    /**
	     * Returns the string with the Vector4 coordinates.
	     */
	    toString() {
	        return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}";
	    }
	    /**
	     * Returns the string "Vector4".
	     */
	    getClassName() {
	        return "Vector4";
	    }
	    /**
	     * Returns the Vector4 hash code.
	     */
	    getHashCode() {
	        let hash = this.x || 0;
	        hash = (hash * 397) ^ (this.y || 0);
	        hash = (hash * 397) ^ (this.z || 0);
	        hash = (hash * 397) ^ (this.w || 0);
	        return hash;
	    }
	    // Operators
	    /**
	     * Returns a new array populated with 4 elements : the Vector4 coordinates.
	     */
	    asArray() {
	        var result = [];
	        this.toArray(result, 0);
	        return result;
	    }
	    /**
	     * Populates the passed array from the passed index with the Vector4 coordinates.
	     * Returns the Vector4.
	     */
	    toArray(array, index) {
	        if (index === undefined) {
	            index = 0;
	        }
	        array[index] = this.x;
	        array[index + 1] = this.y;
	        array[index + 2] = this.z;
	        array[index + 3] = this.w;
	        return this;
	    }
	    /**
	     * Adds the passed vector to the current Vector4.
	     * Returns the updated Vector4.
	     */
	    addInPlace(otherVector) {
	        this.x += otherVector.x;
	        this.y += otherVector.y;
	        this.z += otherVector.z;
	        this.w += otherVector.w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 as the result of the addition of the current Vector4 and the passed one.
	     */
	    add(otherVector) {
	        return new Vector4(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z, this.w + otherVector.w);
	    }
	    /**
	     * Updates the passed vector "result" with the result of the addition of the current Vector4 and the passed one.
	     * Returns the current Vector4.
	     */
	    addToRef(otherVector, result) {
	        result.x = this.x + otherVector.x;
	        result.y = this.y + otherVector.y;
	        result.z = this.z + otherVector.z;
	        result.w = this.w + otherVector.w;
	        return this;
	    }
	    /**
	     * Subtract in place the passed vector from the current Vector4.
	     * Returns the updated Vector4.
	     */
	    subtractInPlace(otherVector) {
	        this.x -= otherVector.x;
	        this.y -= otherVector.y;
	        this.z -= otherVector.z;
	        this.w -= otherVector.w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 with the result of the subtraction of the passed vector from the current Vector4.
	     */
	    subtract(otherVector) {
	        return new Vector4(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z, this.w - otherVector.w);
	    }
	    /**
	     * Sets the passed vector "result" with the result of the subtraction of the passed vector from the current Vector4.
	     * Returns the current Vector4.
	     */
	    subtractToRef(otherVector, result) {
	        result.x = this.x - otherVector.x;
	        result.y = this.y - otherVector.y;
	        result.z = this.z - otherVector.z;
	        result.w = this.w - otherVector.w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
	     */
	    subtractFromFloats(x, y, z, w) {
	        return new Vector4(this.x - x, this.y - y, this.z - z, this.w - w);
	    }
	    /**
	     * Sets the passed vector "result" set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
	     * Returns the current Vector4.
	     */
	    subtractFromFloatsToRef(x, y, z, w, result) {
	        result.x = this.x - x;
	        result.y = this.y - y;
	        result.z = this.z - z;
	        result.w = this.w - w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 set with the current Vector4 negated coordinates.
	     */
	    negate() {
	        return new Vector4(-this.x, -this.y, -this.z, -this.w);
	    }
	    /**
	     * Multiplies the current Vector4 coordinates by scale (float).
	     * Returns the updated Vector4.
	     */
	    scaleInPlace(scale) {
	        this.x *= scale;
	        this.y *= scale;
	        this.z *= scale;
	        this.w *= scale;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
	     */
	    scale(scale) {
	        return new Vector4(this.x * scale, this.y * scale, this.z * scale, this.w * scale);
	    }
	    /**
	     * Sets the passed vector "result" with the current Vector4 coordinates multiplied by scale (float).
	     * Returns the current Vector4.
	     */
	    scaleToRef(scale, result) {
	        result.x = this.x * scale;
	        result.y = this.y * scale;
	        result.z = this.z * scale;
	        result.w = this.w * scale;
	        return this;
	    }
	    /**
	     * Boolean : True if the current Vector4 coordinates are stricly equal to the passed ones.
	     */
	    equals(otherVector) {
	        return otherVector && this.x === otherVector.x && this.y === otherVector.y && this.z === otherVector.z && this.w === otherVector.w;
	    }
	    /**
	     * Boolean : True if the passed floats are strictly equal to the current Vector4 coordinates.
	     */
	    equalsToFloats(x, y, z, w) {
	        return this.x === x && this.y === y && this.z === z && this.w === w;
	    }
	    /**
	     * Multiplies in place the current Vector4 by the passed one.
	     * Returns the updated Vector4.
	     */
	    multiplyInPlace(otherVector) {
	        this.x *= otherVector.x;
	        this.y *= otherVector.y;
	        this.z *= otherVector.z;
	        this.w *= otherVector.w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 set with the multiplication result of the current Vector4 and the passed one.
	     */
	    multiply(otherVector) {
	        return new Vector4(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z, this.w * otherVector.w);
	    }
	    /**
	     * Updates the passed vector "result" with the multiplication result of the current Vector4 and the passed one.
	     * Returns the current Vector4.
	     */
	    multiplyToRef(otherVector, result) {
	        result.x = this.x * otherVector.x;
	        result.y = this.y * otherVector.y;
	        result.z = this.z * otherVector.z;
	        result.w = this.w * otherVector.w;
	        return this;
	    }
	    /**
	     * Returns a new Vector4 set with the multiplication result of the passed floats and the current Vector4 coordinates.
	     */
	    multiplyByFloats(x, y, z, w) {
	        return new Vector4(this.x * x, this.y * y, this.z * z, this.w * w);
	    }
	    /**
	     * Returns a new Vector4 set with the division result of the current Vector4 by the passed one.
	     */
	    divide(otherVector) {
	        return new Vector4(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z, this.w / otherVector.w);
	    }
	    /**
	     * Updates the passed vector "result" with the division result of the current Vector4 by the passed one.
	     * Returns the current Vector4.
	     */
	    divideToRef(otherVector, result) {
	        result.x = this.x / otherVector.x;
	        result.y = this.y / otherVector.y;
	        result.z = this.z / otherVector.z;
	        result.w = this.w / otherVector.w;
	        return this;
	    }
	    /**
	     * Updates the Vector4 coordinates with the minimum values between its own and the passed vector ones.
	     */
	    MinimizeInPlace(other) {
	        if (other.x < this.x)
	            this.x = other.x;
	        if (other.y < this.y)
	            this.y = other.y;
	        if (other.z < this.z)
	            this.z = other.z;
	        if (other.w < this.w)
	            this.w = other.w;
	        return this;
	    }
	    /**
	     * Updates the Vector4 coordinates with the maximum values between its own and the passed vector ones.
	     */
	    MaximizeInPlace(other) {
	        if (other.x > this.x)
	            this.x = other.x;
	        if (other.y > this.y)
	            this.y = other.y;
	        if (other.z > this.z)
	            this.z = other.z;
	        if (other.w > this.w)
	            this.w = other.w;
	        return this;
	    }
	    // Properties
	    /**
	     * Returns the Vector4 length (float).
	     */
	    length() {
	        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	    }
	    /**
	     * Returns the Vector4 squared length (float).
	     */
	    lengthSquared() {
	        return (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	    }
	    // Methods
	    /**
	     * Normalizes in place the Vector4.
	     * Returns the updated Vector4.
	     */
	    normalize() {
	        var len = this.length();
	        if (len === 0)
	            return this;
	        var num = 1.0 / len;
	        this.x *= num;
	        this.y *= num;
	        this.z *= num;
	        this.w *= num;
	        return this;
	    }
	    /**
	     * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
	     */
	    toVector3() {
	        return new vector3_1.Vector3(this.x, this.y, this.z);
	    }
	    /**
	     * Returns a new Vector4 copied from the current one.
	     */
	    clone() {
	        return new Vector4(this.x, this.y, this.z, this.w);
	    }
	    /**
	     * Updates the current Vector4 with the passed one coordinates.
	     * Returns the updated Vector4.
	     */
	    copyFrom(source) {
	        this.x = source.x;
	        this.y = source.y;
	        this.z = source.z;
	        this.w = source.w;
	        return this;
	    }
	    /**
	     * Updates the current Vector4 coordinates with the passed floats.
	     * Returns the updated Vector4.
	     */
	    copyFromFloats(x, y, z, w) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        this.w = w;
	        return this;
	    }
	    /**
	     * Updates the current Vector4 coordinates with the passed floats.
	     * Returns the updated Vector4.
	     */
	    set(x, y, z, w) {
	        return this.copyFromFloats(x, y, z, w);
	    }
	    // Statics
	    /**
	     * Returns a new Vector4 set from the starting index of the passed array.
	     */
	    static FromArray(array, offset) {
	        if (!offset) {
	            offset = 0;
	        }
	        return new Vector4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
	    }
	    /**
	     * Updates the passed vector "result" from the starting index of the passed array.
	     */
	    static FromArrayToRef(array, offset, result) {
	        result.x = array[offset];
	        result.y = array[offset + 1];
	        result.z = array[offset + 2];
	        result.w = array[offset + 3];
	    }
	    /**
	     * Updates the passed vector "result" from the starting index of the passed Float32Array.
	     */
	    static FromFloatArrayToRef(array, offset, result) {
	        result.x = array[offset];
	        result.y = array[offset + 1];
	        result.z = array[offset + 2];
	        result.w = array[offset + 3];
	    }
	    /**
	     * Updates the passed vector "result" coordinates from the passed floats.
	     */
	    static FromFloatsToRef(x, y, z, w, result) {
	        result.x = x;
	        result.y = y;
	        result.z = z;
	        result.w = w;
	    }
	    /**
	     * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
	     */
	    static Zero() {
	        return new Vector4(0.0, 0.0, 0.0, 0.0);
	    }
	    /**
	     * Returns a new normalized Vector4 from the passed one.
	     */
	    static Normalize(vector) {
	        var result = Vector4.Zero();
	        Vector4.NormalizeToRef(vector, result);
	        return result;
	    }
	    /**
	     * Updates the passed vector "result" from the normalization of the passed one.
	     */
	    static NormalizeToRef(vector, result) {
	        result.copyFrom(vector);
	        result.normalize();
	    }
	    static Minimize(left, right) {
	        var min = left.clone();
	        min.MinimizeInPlace(right);
	        return min;
	    }
	    static Maximize(left, right) {
	        var max = left.clone();
	        max.MaximizeInPlace(right);
	        return max;
	    }
	    /**
	     * Returns the distance (float) between the vectors "value1" and "value2".
	     */
	    static Distance(value1, value2) {
	        return Math.sqrt(Vector4.DistanceSquared(value1, value2));
	    }
	    /**
	     * Returns the squared distance (float) between the vectors "value1" and "value2".
	     */
	    static DistanceSquared(value1, value2) {
	        var x = value1.x - value2.x;
	        var y = value1.y - value2.y;
	        var z = value1.z - value2.z;
	        var w = value1.w - value2.w;
	        return (x * x) + (y * y) + (z * z) + (w * w);
	    }
	    /**
	     * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
	     */
	    static Center(value1, value2) {
	        var center = value1.add(value2);
	        center.scaleInPlace(0.5);
	        return center;
	    }
	    /**
	     * Returns a new Vector4 set with the result of the normal transformation by the passed matrix of the passed vector.
	     * This methods computes transformed normalized direction vectors only.
	     */
	    static TransformNormal(vector, transformation) {
	        var result = Vector4.Zero();
	        Vector4.TransformNormalToRef(vector, transformation, result);
	        return result;
	    }
	    /**
	     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.
	     * This methods computes transformed normalized direction vectors only.
	     */
	    static TransformNormalToRef(vector, transformation, result) {
	        var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]);
	        var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]);
	        var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]);
	        result.x = x;
	        result.y = y;
	        result.z = z;
	        result.w = vector.w;
	    }
	    /**
	     * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z, w).
	     * This methods computes transformed normalized direction vectors only.
	     */
	    static TransformNormalFromFloatsToRef(x, y, z, w, transformation, result) {
	        result.x = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]);
	        result.y = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]);
	        result.z = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]);
	        result.w = w;
	    }
	}
	exports.Vector4 = Vector4;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const e_command_type_1 = __webpack_require__(31);
	const event_emitter_1 = __webpack_require__(39);
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementParentChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementParentChanged(appElement, newParent, oldParent) { }
	}
	exports.AppElementParentChanged = AppElementParentChanged;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AppElementIndexChanged extends runtime_event_1.RuntimeEvent {
	    onAppElementIndexChanged(appElement, index, oldIndex) { }
	}
	exports.AppElementIndexChanged = AppElementIndexChanged;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const TEMP_ANNOTATION_1 = __webpack_require__(43);
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_1 = __webpack_require__(46);
	const evt_asset_created_1 = __webpack_require__(47);
	//asset is just a file pointer with an icon and extension and defines an inspector
	//dragging an asset onto a field in the inspector just loads the asset
	//an importer is just an operation applied to the data before writing it to disk
	//there is only 1 kind of asset, no subclasses
	//in terms of adding to assets (prefabs mostly, maybe animations)
	//this can be done by the asset item itself and not via the project interface
	//scripts need to be tracked as assets also for scene dependencies
	//but they aren't (probably) loaded in the same way other assets are
	//runtime asset bundle -> database of asset data with function for loading them unrelated to the file system
	const fs = __webpack_require__(48);
	const File = __webpack_require__(49);
	const Path = __webpack_require__(50);
	const globby = __webpack_require__(51);
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AssetCreated extends runtime_event_1.RuntimeEvent {
	    onAssetCreated(asset) { }
	}
	exports.AssetCreated = AssetCreated;


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("mz/fs");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("globby");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(42);
	const color_1 = __webpack_require__(53);
	const e_command_type_1 = __webpack_require__(31);
	const expose_as_1 = __webpack_require__(54);
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
	            commands: [
	                {
	                    type: e_command_type_1.CommandType.PaintBackground,
	                    data: {
	                        id: this.appElement.id,
	                        color: this._color
	                    }
	                }
	            ]
	        };
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.inspector(color_1.Color)
	], BackgroundComponent.prototype, "_color", void 0);
	BackgroundComponent = tslib_1.__decorate([
	    component_1.component("Paint/Background")
	], BackgroundComponent);
	exports.BackgroundComponent = BackgroundComponent;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	//color values expected to be 0 - 255
	const util_1 = __webpack_require__(16);
	class Color {
	    constructor(r = 0, g = 0, b = 0, a = 255) {
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
	    toHex() {
	        const intR = (this.r) | 0;
	        const intG = (this.g) | 0;
	        const intB = (this.b) | 0;
	        return ((intR & 0xff) << 16) + ((intG & 0xff) << 8) + (intB & 0xff);
	    }
	    toHexAlpha() {
	        const intR = (this.r) | 0;
	        const intG = (this.g) | 0;
	        const intB = (this.b) | 0;
	        const intA = (this.a) | 0;
	        return ((intR & 0xff) << 24) +
	            ((intG & 0xff) << 16) +
	            ((intB & 0xff) << 8) +
	            (intA & 0xff);
	    }
	    toHexString() {
	        return "#" + this.toHex().toString(16);
	    }
	    toHexAString() {
	        return "#" + this.toHexAlpha().toString(16);
	    }
	    static random() {
	        return new Color(util_1.getRandomInt(0, 255), util_1.getRandomInt(0, 255), util_1.getRandomInt(0, 255));
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_base_1 = __webpack_require__(38);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const split_pane_1 = __webpack_require__(59);
	const editor_window_frame_1 = __webpack_require__(60);
	const hierarchy_window_1 = __webpack_require__(63);
	const inspector_window_1 = __webpack_require__(86);
	const editor_theme_1 = __webpack_require__(61);
	const asset_window_1 = __webpack_require__(115);
	const editor_html_element_1 = __webpack_require__(19);
	const stage_window_1 = __webpack_require__(124);
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
	                        Hex.createElement(hierarchy_window_1.HierarchyWindow, { titleString: "Hierarchy", icon: "" })),
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(asset_window_1.AssetWindow, { titleString: "Assets", icon: "" }))),
	                Hex.createElement(split_pane_1.SplitPane, { distribution: 0.7, axis: 0 /* Vertical */ },
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(stage_window_1.StageWindow, { titleString: "Stage", icon: "" })),
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(inspector_window_1.InspectorWindow, { titleString: "Inspector", icon: "" }))))
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
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const split_pane_1 = __webpack_require__(59);
	const editor_theme_1 = __webpack_require__(61);
	const element_renderer_1 = __webpack_require__(7);
	const editor_window_tab_1 = __webpack_require__(62);
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
	                title: content.attrs.titleString, onMouseDown: () => {
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_theme_1 = __webpack_require__(61);
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const button_1 = __webpack_require__(64);
	const hierarchy_item_1 = __webpack_require__(65);
	const evt_selection_changed_1 = __webpack_require__(5);
	const evt_scene_loaded_event_1 = __webpack_require__(70);
	const evt_app_element_created_1 = __webpack_require__(22);
	const element_renderer_1 = __webpack_require__(7);
	const editor_window_element_1 = __webpack_require__(71);
	const app_element_1 = __webpack_require__(29);
	const evt_app_element_parent_changed_1 = __webpack_require__(40);
	const drag_hierarchy_item_1 = __webpack_require__(67);
	const vector2_1 = __webpack_require__(17);
	const editor_element_annotations_1 = __webpack_require__(72);
	const icon_1 = __webpack_require__(66);
	const evt_app_element_index_changed_1 = __webpack_require__(41);
	const runtime_event_1 = __webpack_require__(6);
	const scroll_component_1 = __webpack_require__(73);
	const menu_setup_1 = __webpack_require__(75);
	const color_1 = __webpack_require__(53);
	const background_component_1 = __webpack_require__(52);
	const panel_component_1 = __webpack_require__(77);
	const layout_1 = __webpack_require__(104);
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
	        setTimeout(function () {
	            let element = new app_element_1.AppElement("Panel", app_element_1.AppElement.Root);
	            element.addComponent(panel_component_1.PanelComponent);
	            let bg = element.addComponent(background_component_1.BackgroundComponent);
	            bg.color = color_1.Color.White;
	            element.setPositionValues(100, 100, app_element_1.Space.Local);
	            element.setDimensions(100, 40, layout_1.LengthUnit.Pixel);
	            EditorRuntime.select(element);
	            let element2 = new app_element_1.AppElement("Panel Child", element);
	            element2.addComponent(panel_component_1.PanelComponent);
	            bg = element2.addComponent(background_component_1.BackgroundComponent);
	            bg.color = color_1.Color.Blue;
	            element2.setPositionValues(100, 100, app_element_1.Space.Local);
	            element2.setDimensions(100, 40, layout_1.LengthUnit.Pixel);
	        }, 500);
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
	        // const sizing = element.addComponent(SizingComponent);
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
	        menu.append(new nw.MenuItem({ label: "Create Empty", click: () => this.createNewElement() }));
	        menu.append(new nw.MenuItem({ label: "Create", submenu: menu_setup_1.getCreationMenu(this.contextSelection) }));
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const icon_1 = __webpack_require__(66);
	const drag_action_1 = __webpack_require__(44);
	const drag_hierarchy_item_1 = __webpack_require__(67);
	const editor_html_element_1 = __webpack_require__(19);
	const hierarchy_insert_target_1 = __webpack_require__(68);
	const binding_1 = __webpack_require__(13);
	const evt_app_element_parent_changed_1 = __webpack_require__(40);
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(44);
	class HierarchyItemDragAction extends drag_action_1.DragAction {
	    constructor(item) {
	        super();
	        this.item = item;
	        this.appElement = item.attrs.element;
	    }
	}
	exports.HierarchyItemDragAction = HierarchyItemDragAction;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const hierarchy_item_1 = __webpack_require__(65);
	const drag_action_1 = __webpack_require__(44);
	const drag_hierarchy_item_1 = __webpack_require__(67);
	const prefab_drag_action_1 = __webpack_require__(69);
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(44);
	class PrefabDragAction extends drag_action_1.DragAction {
	    constructor(template) {
	        super();
	        this.template = template;
	    }
	}
	exports.PrefabDragAction = PrefabDragAction;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class SceneLoaded extends runtime_event_1.RuntimeEvent {
	}
	exports.SceneLoaded = SceneLoaded;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	class EditorWindowElement extends editor_html_element_1.EditorHTMLElement {
	}
	exports.EditorWindowElement = EditorWindowElement;


/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(42);
	let UIComponent = class UIComponent extends component_1.Component {
	    getTypeName() {
	        return this.constructor.name.replace("Component", "");
	    }
	    serialize() {
	        return {
	            commands: [],
	        };
	    }
	};
	UIComponent = tslib_1.__decorate([
	    component_1.component("UI")
	], UIComponent);
	exports.UIComponent = UIComponent;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const app_element_1 = __webpack_require__(29);
	const text_component_1 = __webpack_require__(76);
	const panel_component_1 = __webpack_require__(77);
	const image_component_1 = __webpack_require__(78);
	const button_component_1 = __webpack_require__(79);
	const checkbox_component_1 = __webpack_require__(80);
	const slider_component_1 = __webpack_require__(81);
	const dropdown_component_1 = __webpack_require__(82);
	const text_input_component_1 = __webpack_require__(83);
	const number_input_component_1 = __webpack_require__(84);
	const text_area_component_1 = __webpack_require__(85);
	const background_component_1 = __webpack_require__(52);
	const color_1 = __webpack_require__(53);
	const layout_1 = __webpack_require__(104);
	function createTextElement(parent = null) {
	    const element = new app_element_1.AppElement("Text", parent);
	    const text = element.addComponent(text_component_1.TextComponent);
	    text.setTextAsync("Enter Text Here");
	    return element;
	}
	function createPanelElement(parent = null) {
	    const element = new app_element_1.AppElement("Panel", parent);
	    element.addComponent(panel_component_1.PanelComponent);
	    const bg = element.addComponent(background_component_1.BackgroundComponent);
	    bg.color = color_1.Color.random();
	    element.setDimensions(100, 40, layout_1.LengthUnit.Pixel);
	    return element;
	}
	function createImageElement(parent = null) {
	    const element = new app_element_1.AppElement("Image", parent);
	    element.addComponent(image_component_1.ImageComponent);
	    return element;
	}
	function createButtonElement(parent = null) {
	    const element = new app_element_1.AppElement("Button", parent);
	    element.addComponent(button_component_1.ButtonComponent);
	    // const size = element.addComponent(SizingComponent);
	    // size.width = 100;
	    // size.height = 20;
	    return element;
	}
	function createCheckboxElement(parent = null) {
	    const element = new app_element_1.AppElement("Toggle", parent);
	    element.addComponent(checkbox_component_1.CheckboxComponent);
	    return element;
	}
	function createSliderElement(parent = null) {
	    const element = new app_element_1.AppElement("Slider", parent);
	    element.addComponent(slider_component_1.SliderComponent);
	    return element;
	}
	function createDropdownElement(parent = null) {
	    const element = new app_element_1.AppElement("Dropdown", parent);
	    element.addComponent(dropdown_component_1.DropdownComponent);
	    return element;
	}
	function createTextInputElement(parent = null) {
	    const element = new app_element_1.AppElement("Text Input", parent);
	    element.addComponent(text_input_component_1.TextInputComponent);
	    return element;
	}
	function createNumberInputElement(parent = null) {
	    const element = new app_element_1.AppElement("Number Input", parent);
	    element.addComponent(number_input_component_1.NumberInputComponent);
	    return element;
	}
	function createTextAreaElement(parent = null) {
	    const element = new app_element_1.AppElement("Text Area Input", parent);
	    element.addComponent(text_area_component_1.TextAreaComponent);
	    return element;
	}
	function getCreationMenu(selection = null) {
	    const creationMenu = new nw.Menu();
	    creationMenu.append(new nw.MenuItem({ label: "Text", click: function () { createTextElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Panel", click: function () { createPanelElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Image", click: function () { createImageElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Button", click: function () { createButtonElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Toggle", click: function () { createCheckboxElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Slider", click: function () { createSliderElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Dropdown", click: function () { createDropdownElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Text Input", click: function () { createTextInputElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Number Input", click: function () { createNumberInputElement(selection); } }));
	    creationMenu.append(new nw.MenuItem({ label: "Text Area", click: function () { createTextAreaElement(selection); } }));
	    return creationMenu;
	}
	exports.getCreationMenu = getCreationMenu;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(42);
	const e_command_type_1 = __webpack_require__(31);
	const ui_component_1 = __webpack_require__(74);
	const layout_1 = __webpack_require__(104);
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
	            this.textContent = text;
	            return yield Runtime.awaitCommand(e_command_type_1.CommandType.SetText, {
	                id: this.appElement.id,
	                text: text,
	                font: this.font,
	                setFont: false
	            }).then((width) => {
	                this.textContent = text;
	                this.appElement.setWidth(width, layout_1.LengthUnit.Pixel);
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
	                this.appElement.setWidth(width, layout_1.LengthUnit.Pixel);
	                return this.font;
	            });
	        });
	    }
	    static OnDeserialized(instance, json) {
	        instance.textContent = json.textContent;
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const expose_as_1 = __webpack_require__(54);
	const component_1 = __webpack_require__(42);
	const e_command_type_1 = __webpack_require__(31);
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let ButtonComponent = class ButtonComponent extends ui_component_1.UIComponent {
	};
	ButtonComponent = tslib_1.__decorate([
	    component_1.component("UI/Button")
	], ButtonComponent);
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let CheckboxComponent = class CheckboxComponent extends ui_component_1.UIComponent {
	};
	CheckboxComponent = tslib_1.__decorate([
	    component_1.component("UI/Checkbox")
	], CheckboxComponent);
	exports.CheckboxComponent = CheckboxComponent;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let SliderComponent = class SliderComponent extends ui_component_1.UIComponent {
	};
	SliderComponent = tslib_1.__decorate([
	    component_1.component("UI/Slider")
	], SliderComponent);
	exports.SliderComponent = SliderComponent;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let DropdownComponent = class DropdownComponent extends ui_component_1.UIComponent {
	};
	DropdownComponent = tslib_1.__decorate([
	    component_1.component("UI/Dropdown")
	], DropdownComponent);
	exports.DropdownComponent = DropdownComponent;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let TextInputComponent = class TextInputComponent extends ui_component_1.UIComponent {
	};
	TextInputComponent = tslib_1.__decorate([
	    component_1.component("UI/TextInput")
	], TextInputComponent);
	exports.TextInputComponent = TextInputComponent;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let NumberInputComponent = class NumberInputComponent extends ui_component_1.UIComponent {
	};
	NumberInputComponent = tslib_1.__decorate([
	    component_1.component("UI/NumberInput")
	], NumberInputComponent);
	exports.NumberInputComponent = NumberInputComponent;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const ui_component_1 = __webpack_require__(74);
	const component_1 = __webpack_require__(42);
	let TextAreaComponent = class TextAreaComponent extends ui_component_1.UIComponent {
	};
	TextAreaComponent = tslib_1.__decorate([
	    component_1.component("UI/TextArea")
	], TextAreaComponent);
	exports.TextAreaComponent = TextAreaComponent;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vertical_stack_1 = __webpack_require__(87);
	const text_input_1 = __webpack_require__(88);
	const evt_selection_changed_1 = __webpack_require__(5);
	const editor_window_element_1 = __webpack_require__(71);
	const inspector_row_1 = __webpack_require__(90);
	const component_menu_1 = __webpack_require__(91);
	const editor_theme_1 = __webpack_require__(61);
	const component_renderer_1 = __webpack_require__(94);
	const element_renderer_1 = __webpack_require__(7);
	const binding_1 = __webpack_require__(13);
	const checkbox_input_1 = __webpack_require__(97);
	const transform_inspector_1 = __webpack_require__(99);
	let inspector = null;
	class InspectorWindow extends editor_window_element_1.EditorWindowElement {
	    onSelectionChanged(newSelection, oldSelection) {
	        this.selection = newSelection;
	        this.getChildRoot().clearChildren();
	        if (!this.selection)
	            return;
	        inspector = element_renderer_1.createElement(transform_inspector_1.TransformInspector, {
	            appElement: this.selection
	        });
	        this.getChildRoot().addChild(inspector);
	        const renderers = component_renderer_1.ComponentRenderer.getAllRenderers(this.selection);
	        for (let i = 0; i < renderers.length; i++) {
	            this.getChildRoot().addChild(renderers[i]);
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
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(89);
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
/* 89 */
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
	            this.binding.setHost(this);
	            this.binding.onChange((a, b) => {
	                this.onValueChanged(a, b);
	            });
	        }
	    }
	    onValueChanged(newValue, oldValue) { }
	}
	exports.InputRenderer = InputRenderer;


/***/ },
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vertical_stack_1 = __webpack_require__(87);
	const text_box_icon_1 = __webpack_require__(92);
	const button_1 = __webpack_require__(64);
	const component_option_1 = __webpack_require__(93);
	const component_1 = __webpack_require__(42);
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
/* 92 */
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
/* 93 */
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const property_renderer_1 = __webpack_require__(95);
	const horizontal_1 = __webpack_require__(96);
	const icon_1 = __webpack_require__(66);
	const element_renderer_1 = __webpack_require__(7);
	const checkbox_input_1 = __webpack_require__(97);
	const util_1 = __webpack_require__(16);
	const editor_theme_1 = __webpack_require__(61);
	const expose_as_1 = __webpack_require__(54);
	const editor_html_element_1 = __webpack_require__(19);
	const binding_1 = __webpack_require__(13);
	const evt_designer_rendererd_1 = __webpack_require__(98);
	class ComponentRenderer extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.editorDataMap = expose_as_1.getExposedFieldMap(this.attrs.component);
	        this.component = this.attrs.component;
	    }
	    getDomData() {
	        return { "tagName": "div", classList: "component-renderer" };
	    }
	    onCreated() {
	        if (this.onDesignerRendered !== ComponentRenderer.prototype.onDesignerRendered) {
	            EditorRuntime.on(evt_designer_rendererd_1.DesignerRendered, this);
	            this.gfx = new PIXI.Graphics();
	        }
	    }
	    onDestroyed() {
	        if (this.onDesignerRendered !== ComponentRenderer.prototype.onDesignerRendered) {
	            EditorRuntime.off(evt_designer_rendererd_1.DesignerRendered, this);
	            this.gfx.parent.removeChild(this.gfx);
	        }
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
	    onDesignerRendered(gfx) { }
	    static getAllRenderers(element) {
	        if (!element)
	            return [];
	        const retn = new Array();
	        const components = element.getAllComponents();
	        for (let i = 0; i < components.length; i++) {
	            const renderer = ComponentRenderer.get(components[i]);
	            retn.push(renderer);
	        }
	        return retn;
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
/* 95 */
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
/* 96 */
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(89);
	class CheckboxInput extends editor_input_1.InputRenderer {
	    getDomData() {
	        return {
	            tagName: "input",
	            attributes: { type: "checkbox" }
	        };
	    }
	    onMounted() {
	        this.onValueChanged(this.binding.get());
	        this.binding.onChange(() => {
	            this.htmlNode.checked = this.binding.get();
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class DesignerRendered extends runtime_event_1.RuntimeEvent {
	}
	exports.DesignerRendered = DesignerRendered;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	const inspector_row_1 = __webpack_require__(90);
	const binding_1 = __webpack_require__(13);
	const app_element_1 = __webpack_require__(29);
	const number_input_1 = __webpack_require__(100);
	const dimension_input_1 = __webpack_require__(102);
	const vector2_input_1 = __webpack_require__(103);
	const horizontal_1 = __webpack_require__(96);
	const icon_1 = __webpack_require__(66);
	const layout_1 = __webpack_require__(104);
	const button_1 = __webpack_require__(64);
	const evt_designer_rendererd_1 = __webpack_require__(98);
	class TransformInspector extends editor_html_element_1.EditorHTMLElement {
	    constructor() {
	        super(...arguments);
	        this.id = Math.random();
	    }
	    onCreated() {
	        this.isEditingAnchors = false;
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
	            this.appElement.setRotation(newValue, app_element_1.Space.Local);
	        });
	        this.localScaleBinding = binding_1.CreateBinding(this.proxy, "localScale").onChange((newValue) => {
	            this.appElement.setScale(newValue);
	        });
	        this.dimensionBinding = binding_1.CreateBinding(this.proxy, "dimension").onChange((newValue) => {
	            this.appElement.setWidth(newValue.width, layout_1.LengthUnit.Pixel);
	            this.appElement.setHeight(newValue.height, layout_1.LengthUnit.Pixel);
	        });
	        EditorRuntime.on(evt_designer_rendererd_1.DesignerRendered, this);
	        EditorRuntime.updateTree.add(this);
	    }
	    onDesignerRendered(gfxContainer, mouse) {
	        if (!this.gfx) {
	            this.gfx = new PIXI.Graphics();
	            gfxContainer.addChild(this.gfx);
	        }
	        this.gfx.clear();
	        // this.anchorFlower.setPosition(this.appElement.getParent().getPosition());
	        // this.anchorFlower.update(EditorRuntime.getSelection(), mouse);
	        // this.anchorFlower.render(this.gfx);
	    }
	    onDestroyed() {
	        if (this.gfx) {
	            this.gfx.clear();
	            this.gfx.parent.removeChild(this.gfx);
	            this.gfx.destroy();
	            this.gfx = null;
	        }
	        EditorRuntime.off(evt_designer_rendererd_1.DesignerRendered, this);
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
	            Hex.createElement(horizontal_1.Horizontal, { style: "position:relative" },
	                Hex.createElement(icon_1.ToggleIcon, { class: "inspector-toggle", visibilityTarget: () => this.getChildRoot() }),
	                Hex.createElement("span", { "x-if-eval": () => !this.appElement.getParent().getComponent(layout_1.LayoutComponent), class: "component-name" }, "Transform"),
	                Hex.createElement("span", { "x-if-eval": () => this.appElement.getParent().getComponent(layout_1.LayoutComponent), class: "component-name" }, "Transform (Controlled by Layout Component)")),
	            Hex.createElement("div", { "x-if-eval": () => !this.appElement.getParent().getComponent(layout_1.LayoutComponent), "x-child-root": true, class: "component-renderer-child-root" },
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Anchors" },
	                    Hex.createElement(button_1.Button, { onClick: () => this.isEditingAnchors = !this.isEditingAnchors }, "Edit")),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Position" },
	                    Hex.createElement(vector2_input_1.Vector2Input, { value: this.localPositionBinding })),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Scale" },
	                    Hex.createElement(vector2_input_1.Vector2Input, { value: this.localScaleBinding })),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Rotation" },
	                    Hex.createElement(number_input_1.AngleInput, { value: this.localRotationBinding })),
	                Hex.createElement(inspector_row_1.InspectorRow, { label: "Dimensions" },
	                    Hex.createElement(dimension_input_1.DimensionInput, { value: this.dimensionBinding })))
	        ];
	    }
	}
	exports.TransformInspector = TransformInspector;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(89);
	const e_keycode_1 = __webpack_require__(101);
	const math_util_1 = __webpack_require__(18);
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
	    onKeyDown(e) {
	        if (e.keyCode === e_keycode_1.KeyCode.UpArrow) {
	            this.binding.set(this.binding.get() + 1);
	            e.preventDefault();
	        }
	        else if (e.keyCode == e_keycode_1.KeyCode.DownArrow) {
	            this.binding.set(this.binding.get() - 1);
	            e.preventDefault();
	        }
	    }
	    onMounted() {
	        this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
	        this.binding.onChange(() => {
	            this.htmlNode.value = this.formatNumber(this.binding.get()).toString();
	        });
	        this.htmlNode.addEventListener("keydown", (e) => {
	            this.onKeyDown(e);
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
	class AngleInput extends NumberInput {
	    onKeyDown(e) {
	        if (e.keyCode === e_keycode_1.KeyCode.UpArrow) {
	            this.binding.set(math_util_1.MathUtil.wrapAngleDegrees(this.binding.get() + 1));
	            e.preventDefault();
	        }
	        else if (e.keyCode == e_keycode_1.KeyCode.DownArrow) {
	            this.binding.set(math_util_1.MathUtil.wrapAngleDegrees(this.binding.get() - 1));
	            e.preventDefault();
	        }
	    }
	    formatNumber(input) {
	        return math_util_1.MathUtil.wrapAngleDegrees(parseFloat(input));
	    }
	}
	exports.AngleInput = AngleInput;


/***/ },
/* 101 */
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const number_input_1 = __webpack_require__(100);
	const binding_1 = __webpack_require__(13);
	const editor_input_1 = __webpack_require__(89);
	const horizontal_1 = __webpack_require__(96);
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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const number_input_1 = __webpack_require__(100);
	const binding_1 = __webpack_require__(13);
	const editor_input_1 = __webpack_require__(89);
	const horizontal_1 = __webpack_require__(96);
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_1 = __webpack_require__(42);
	const app_element_1 = __webpack_require__(29);
	const math_util_1 = __webpack_require__(18);
	const expose_as_1 = __webpack_require__(54);
	const util_1 = __webpack_require__(16);
	var LengthUnit;
	(function (LengthUnit) {
	    LengthUnit[LengthUnit["Percent"] = 0] = "Percent";
	    LengthUnit[LengthUnit["Pixel"] = 1] = "Pixel";
	    LengthUnit[LengthUnit["Flex"] = 2] = "Flex";
	})(LengthUnit = exports.LengthUnit || (exports.LengthUnit = {}));
	function layoutController(...args) {
	}
	function editorEnabled(...args) { }
	class Width {
	    getPixels() {
	        return this._pixels;
	    }
	    setPixels(pixelWidth) {
	    }
	    setPercent(percent) {
	        this._percent = math_util_1.MathUtil.clamp01(percent);
	    }
	    getPixelWidth(reference) {
	    }
	}
	var Alignment;
	(function (Alignment) {
	    Alignment[Alignment["Left"] = 0] = "Left";
	    Alignment[Alignment["Right"] = 1] = "Right";
	    Alignment[Alignment["Center"] = 2] = "Center";
	    Alignment[Alignment["Fill"] = 3] = "Fill";
	})(Alignment || (Alignment = {}));
	let LayoutComponent = class LayoutComponent extends component_1.Component {
	    doLayout() { }
	};
	LayoutComponent = tslib_1.__decorate([
	    layoutController
	], LayoutComponent);
	exports.LayoutComponent = LayoutComponent;
	class HorizontalLayoutSlot extends component_1.Component {
	    constructor() {
	        super(...arguments);
	        this.paddingLeft = 0;
	        this.paddingRight = 0;
	        this.paddingTop = 0;
	        this.paddingBottom = 0;
	        this.flexFactor = 0;
	        this.useFlex = false;
	        this.index = -1;
	        this.totalWidth = 0;
	    }
	}
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "paddingLeft", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "paddingRight", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "paddingTop", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "paddingBottom", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "flexFactor", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Boolean)
	], HorizontalLayoutSlot.prototype, "useFlex", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "width", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Number)
	], HorizontalLayoutSlot.prototype, "height", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(util_1.EnumSelect, Alignment)
	], HorizontalLayoutSlot.prototype, "alignment", void 0);
	let HorizontalLayout = class HorizontalLayout extends LayoutComponent {
	    constructor() {
	        super(...arguments);
	        this.flexElements = new Array();
	        this.nonFlexElements = new Array();
	        this.slotComponents = new Array();
	        this.sizeToContentWidth = false;
	        this.sizeToContentHeight = false;
	    }
	    onMounted() {
	        const children = this.appElement.getChildren();
	        for (let i = 0; i < children.length; i++) {
	            var slot = children[i].getComponent(HorizontalLayoutSlot);
	            slot = slot || children[i].addComponent(HorizontalLayoutSlot);
	            this.slotComponents.push(slot);
	            //slot.onChange();
	        }
	        EditorRuntime.queueLayout(this);
	    }
	    onChildAdded(child) {
	        this.slotComponents.push(child.addComponent(HorizontalLayoutSlot));
	        EditorRuntime.queueLayout(this);
	    }
	    doLayout() {
	        //ignore size to content for now
	        let totalWidth = 0;
	        let fractions = 0;
	        for (let i = 0; i < this.slotComponents.length; i++) {
	            const slot = this.slotComponents[i];
	            slot.index = i;
	            if (slot.useFlex) {
	                this.flexElements.push(slot);
	                fractions += math_util_1.MathUtil.clamp(slot.flexFactor, 0, Number.MAX_SAFE_INTEGER) | 0;
	            }
	            else {
	                this.nonFlexElements.push(slot);
	            }
	        }
	        let spaceToAllocate = this.appElement.getWidth();
	        let allocatedSpace = 0;
	        for (let i = 0; i < this.nonFlexElements.length; i++) {
	            const slot = this.nonFlexElements[i];
	            const width = slot.appElement.getWidth();
	            let total = slot.paddingLeft + width + slot.paddingRight;
	            allocatedSpace += total;
	            slot.totalWidth = total;
	        }
	        let remaining = this.appElement.getWidth() - allocatedSpace;
	        if (fractions > 0) {
	            const pieceSize = remaining / fractions;
	            for (let i = 0; i < this.flexElements.length; i++) {
	                const slot = this.flexElements[i];
	                slot.totalWidth = pieceSize * slot.flexFactor;
	            }
	        }
	        else {
	            for (let i = 0; i < this.flexElements.length; i++) {
	                const slot = this.flexElements[i];
	                slot.totalWidth = 0;
	            }
	        }
	        var currentX = 0;
	        var height = this.appElement.getHeight();
	        for (let i = 0; i < this.slotComponents.length; i++) {
	            const slot = this.slotComponents[i];
	            const appElement = slot.appElement;
	            appElement.setWidth(slot.totalWidth, LengthUnit.Pixel);
	            appElement.setHeight(height, LengthUnit.Pixel);
	            appElement.setPositionValues(currentX, 0, app_element_1.Space.Local);
	            currentX += slot.totalWidth;
	        }
	        this.flexElements.length = 0;
	        this.nonFlexElements.length = 0;
	        totalWidth = Math.max(totalWidth, this.appElement.getWidth());
	    }
	    getWidth() {
	    }
	    getOverflowWidth() {
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.inspector(Boolean)
	], HorizontalLayout.prototype, "sizeToContentWidth", void 0);
	tslib_1.__decorate([
	    expose_as_1.inspector(Boolean)
	], HorizontalLayout.prototype, "sizeToContentHeight", void 0);
	tslib_1.__decorate([
	    editorEnabled
	], HorizontalLayout.prototype, "onChildAdded", null);
	HorizontalLayout = tslib_1.__decorate([
	    layoutController,
	    component_1.component("Layout/Horizontal")
	], HorizontalLayout);
	exports.HorizontalLayout = HorizontalLayout;
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const shape_container_1 = __webpack_require__(106);
	const triangle_1 = __webpack_require__(111);
	const circle_1 = __webpack_require__(113);
	const vector2_1 = __webpack_require__(17);
	const app_element_1 = __webpack_require__(29);
	const math_util_1 = __webpack_require__(18);
	const color_1 = __webpack_require__(53);
	class AnchorFlower extends shape_container_1.ShapeContainer {
	    constructor() {
	        super();
	        const p0 = new vector2_1.Vector2();
	        const p1 = new vector2_1.Vector2(-5, 15);
	        const p2 = new vector2_1.Vector2(5, 15);
	        this.bottomRight = new triangle_1.Triangle(p0, p1, p2, this);
	        this.bottomLeft = new triangle_1.Triangle(p0, p1, p2, this);
	        this.topLeft = new triangle_1.Triangle(p0, p1, p2, this);
	        this.topRight = new triangle_1.Triangle(p0, p1, p2, this);
	        this.center = new circle_1.Circle(p0, 5, this);
	        this.bottomLeft.rotate(math_util_1.MathUtil.PiOver4);
	        this.bottomRight.rotate(-math_util_1.MathUtil.PiOver4);
	        this.topLeft.rotate(math_util_1.MathUtil.PiOver2 + math_util_1.MathUtil.PiOver4);
	        this.topRight.rotate(-math_util_1.MathUtil.PiOver2 - math_util_1.MathUtil.PiOver4);
	        this.appElement = null;
	        this.activeChild = null;
	        this.gfx = new PIXI.Graphics();
	    }
	    startDrag() {
	        this.dragging = true;
	    }
	    update() {
	        this.appElement = EditorRuntime.getSelection();
	        if (!this.appElement)
	            return;
	        this.setPosition(this.appElement.getParent().getPosition(vector2_1.Vector2.scratch0));
	        if (this.dragging) {
	            const delta = EditorRuntime.getInput().getMouseDelta(vector2_1.Vector2.scratch0);
	            if (this.activeChild === this.topLeft) {
	                this.setFromRawAnchors(delta.x, delta.y, 0, 0);
	            }
	            else if (this.activeChild === this.topRight) {
	                this.setFromRawAnchors(0, delta.y, delta.x, 0);
	            }
	            else if (this.activeChild === this.bottomLeft) {
	                this.setFromRawAnchors(delta.x, 0, 0, delta.y);
	            }
	            else if (this.activeChild === this.bottomRight) {
	                this.setFromRawAnchors(0, 0, delta.x, delta.y);
	            }
	            else if (this.activeChild === this.center) {
	                this.setFromRawAnchors(delta.x, delta.y, 0, 0, true);
	            }
	        }
	        else {
	            this.setFromRawAnchors(0, 0, 0, 0);
	        }
	    }
	    endDrag() {
	        this.dragging = false;
	    }
	    getGfx() {
	        return this.gfx;
	    }
	    render() {
	        if (!this.appElement)
	            return;
	        this.center.setLineColor(this.activeChild === this.center ? color_1.Color.Green : color_1.Color.Red);
	        this.topLeft.setLineColor(this.activeChild === this.topLeft ? color_1.Color.Green : color_1.Color.Red);
	        this.topRight.setLineColor(this.activeChild === this.topRight ? color_1.Color.Green : color_1.Color.Red);
	        this.bottomLeft.setLineColor(this.activeChild === this.bottomLeft ? color_1.Color.Green : color_1.Color.Red);
	        this.bottomRight.setLineColor(this.activeChild === this.bottomRight ? color_1.Color.Green : color_1.Color.Red);
	        this.gfx.clear();
	        super.render(this.gfx);
	    }
	    setAppElement(appElement) {
	        this.appElement = appElement;
	    }
	    hitTest(point) {
	        this.activeChild = this.internalHitTest(point);
	        return Boolean(this.activeChild);
	    }
	    internalHitTest(point) {
	        if (this.center.containsPoint(point))
	            return this.center;
	        if (this.topLeft.containsPoint(point))
	            return this.topLeft;
	        if (this.topRight.containsPoint(point))
	            return this.topRight;
	        if (this.bottomLeft.containsPoint(point))
	            return this.bottomLeft;
	        if (this.bottomRight.containsPoint(point))
	            return this.bottomRight;
	        return null;
	    }
	    setFromRawAnchors(deltaMinX, deltaMinY, deltaMaxX, deltaMaxY, center = false) {
	        let width = Math.max(1, this.appElement.getParent().getScaledWidth());
	        let height = Math.max(1, this.appElement.getParent().getScaledHeight());
	        let anchorMin = this.appElement.anchorMin;
	        let anchorMax = this.appElement.anchorMax;
	        const rawAnchorMin = vector2_1.Vector2.scratch0.set(anchorMin.x * width, anchorMin.y * height);
	        const rawAnchorMax = vector2_1.Vector2.scratch1.set(anchorMax.x * width, anchorMax.y * height);
	        if (center) {
	            rawAnchorMin.x = math_util_1.MathUtil.clamp(rawAnchorMin.x + deltaMinX, 0, width);
	            rawAnchorMin.y = math_util_1.MathUtil.clamp(rawAnchorMin.y + deltaMinY, 0, height);
	            rawAnchorMax.x = rawAnchorMin.x;
	            rawAnchorMax.y = rawAnchorMin.y;
	        }
	        else {
	            rawAnchorMin.x = math_util_1.MathUtil.clamp(rawAnchorMin.x + deltaMinX, 0, rawAnchorMax.x);
	            rawAnchorMin.y = math_util_1.MathUtil.clamp(rawAnchorMin.y + deltaMinY, 0, rawAnchorMax.y);
	            rawAnchorMax.x = math_util_1.MathUtil.clamp(rawAnchorMax.x + deltaMaxX, rawAnchorMin.x, width);
	            rawAnchorMax.y = math_util_1.MathUtil.clamp(rawAnchorMax.y + deltaMaxY, rawAnchorMin.y, height);
	        }
	        this.topLeft.setPositionValues(rawAnchorMin.x, rawAnchorMin.y, app_element_1.Space.Local);
	        this.topRight.setPositionValues(rawAnchorMax.x, rawAnchorMin.y, app_element_1.Space.Local);
	        this.bottomLeft.setPositionValues(rawAnchorMin.x, rawAnchorMax.y, app_element_1.Space.Local);
	        this.bottomRight.setPositionValues(rawAnchorMax.x, rawAnchorMax.y, app_element_1.Space.Local);
	        this.center.setPositionValues(rawAnchorMin.x, rawAnchorMin.y, app_element_1.Space.Local);
	        anchorMax.x = rawAnchorMax.x / width;
	        anchorMax.y = rawAnchorMax.y / height;
	        anchorMin.x = rawAnchorMin.x / width;
	        anchorMin.y = rawAnchorMin.y / height;
	        this.center.isEnabled = anchorMin.equals(anchorMax);
	        //update anchor
	    }
	}
	exports.AnchorFlower = AnchorFlower;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const shape_1 = __webpack_require__(107);
	class ShapeContainer extends shape_1.Shape {
	    constructor(parent = null, style) {
	        super(parent, style);
	    }
	    render(gfx) {
	        for (let i = 0; i < this.children.length; i++) {
	            this.children[i].render(gfx);
	        }
	    }
	    containsPoint(point) {
	        for (let i = 0; i < this.children.length; i++) {
	            if (this.children[i].containsPoint(point)) {
	                return true;
	            }
	        }
	        return false;
	    }
	}
	exports.ShapeContainer = ShapeContainer;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const transformable_1 = __webpack_require__(108);
	const pixi_style_1 = __webpack_require__(109);
	const math_util_1 = __webpack_require__(18);
	class Shape extends transformable_1.Transformable {
	    constructor(parent, style) {
	        super(parent);
	        this.isEnabled = true;
	        this.style = (style || pixi_style_1.PixiStyle.Inherit).clone();
	        this.points = [];
	    }
	    beginRender(gfx) { }
	    finishRender(gfx) { }
	    setLineWidth(width) {
	        width = math_util_1.MathUtil.clamp(width, 0.1, 100);
	        this.style.lineWidth = width;
	    }
	    setLineColor(color) {
	        this.style.lineColor = color;
	    }
	    setFillColor(color) {
	        this.style.fillColor = color;
	    }
	    setColor(color) {
	        this.setFillColor(color);
	        this.setLineColor(color);
	    }
	}
	exports.Shape = Shape;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const matrix_1 = __webpack_require__(36);
	const vector3_1 = __webpack_require__(34);
	const quaternion_1 = __webpack_require__(35);
	const app_element_1 = __webpack_require__(29);
	const vector2_1 = __webpack_require__(17);
	const math_util_1 = __webpack_require__(18);
	class Transformable {
	    constructor(parent) {
	        this.dirty = true;
	        this.parent = parent;
	        this.children = [];
	        this.position = new vector2_1.Vector2();
	        this.rotation = new quaternion_1.Quaternion();
	        this.scale = new vector2_1.Vector2(1, 1);
	        this.localMatrix = new matrix_1.Matrix();
	        this.worldMatrix = new matrix_1.Matrix();
	        if (this.parent) {
	            this.parent.children.push(this);
	        }
	    }
	    getWorldMatrix(out) {
	        this.updateWorldMatrix();
	        return this.worldMatrix.clone(out);
	    }
	    updateWorldMatrix() {
	        const scaling = matrix_1.Matrix.scratch0;
	        const rotation = matrix_1.Matrix.scratch1;
	        const translate = matrix_1.Matrix.scratch2;
	        const rotationAndScale = matrix_1.Matrix.scratch3;
	        this.rotation.toRotationMatrix(rotation);
	        matrix_1.Matrix.CreateScale(this.scale.x, this.scale.y, 1, scaling);
	        matrix_1.Matrix.CreateTranslation(this.position.x, this.position.y, 0, translate);
	        matrix_1.Matrix.Multiply(scaling, rotation, rotationAndScale);
	        matrix_1.Matrix.Multiply(rotationAndScale, translate, this.localMatrix);
	        if (this.parent) {
	            this.localMatrix.multiplyToRef(this.parent.getWorldMatrix(), this.worldMatrix);
	        }
	        else {
	            this.worldMatrix.copy(this.localMatrix);
	        }
	    }
	    isDirty() {
	        let ptr = this;
	        while (ptr) {
	            if (ptr.dirty)
	                return true;
	            ptr = ptr.parent;
	        }
	        return false;
	    }
	    translate(translation, relativeTo = app_element_1.Space.World) {
	        return this.translateValues(translation.x, translation.y, relativeTo);
	    }
	    translateValues(x, y, relativeTo = app_element_1.Space.World) {
	        if (this.parent && relativeTo === app_element_1.Space.World) {
	            this.parent.getWorldMatrix(matrix_1.Matrix.scratch0).invert();
	            const scratch = vector3_1.Vector3.scratch0;
	            scratch.x = x;
	            scratch.y = y;
	            scratch.z = 0;
	            vector3_1.Vector3.TransformCoordinates(scratch, matrix_1.Matrix.scratch0, scratch);
	            this.position.addValues(scratch.x, scratch.y);
	        }
	        else {
	            this.position.addValues(x, y);
	        }
	        return this;
	    }
	    setPosition(position, relativeTo = app_element_1.Space.World) {
	        return this.setPositionValues(position.x, position.y, relativeTo);
	    }
	    setPositionValues(x, y, relativeTo = app_element_1.Space.World) {
	        if (this.parent && relativeTo === app_element_1.Space.World) {
	            this.parent.getWorldMatrix(matrix_1.Matrix.scratch0).invert();
	            const scratch = vector3_1.Vector3.scratch0;
	            scratch.x = x;
	            scratch.y = y;
	            scratch.z = 0;
	            vector3_1.Vector3.TransformCoordinates(scratch, matrix_1.Matrix.scratch0, scratch);
	            this.position.x = scratch.x;
	            this.position.y = scratch.y;
	        }
	        else {
	            this.position.set(x, y);
	        }
	    }
	    pointToLocalSpace(point, out) {
	        if (this.parent) {
	            this.parent.getWorldMatrix(matrix_1.Matrix.scratch0).invert();
	            const scratch = vector3_1.Vector3.scratch0;
	            scratch.x = point.x;
	            scratch.y = point.y;
	            scratch.z = 0;
	            vector3_1.Vector3.TransformCoordinates(scratch, matrix_1.Matrix.scratch0, scratch);
	            return point.clone(out).set(scratch.x, scratch.y);
	        }
	        else {
	            return point.clone(out);
	        }
	    }
	    getRotation() {
	        return this.rotation.getRotationZ();
	    }
	    rotate(radians) {
	        quaternion_1.Quaternion.RotationAxis(vector3_1.Vector3.Forward, radians, quaternion_1.Quaternion.scratch0);
	        this.rotation.multiply(quaternion_1.Quaternion.scratch0);
	        return this;
	    }
	    setScale(scale) {
	        this.scale.x = scale.x;
	        this.scale.y = scale.y;
	        return this;
	    }
	    getScale(out) {
	        return (out || new vector2_1.Vector2).copy(this.scale);
	    }
	    getPosition(out) {
	        this.updateWorldMatrix();
	        return (out || new vector2_1.Vector2()).set(this.worldMatrix.m[12], this.worldMatrix.m[13]);
	    }
	    getLocalPosition(out) {
	        return (out || new vector2_1.Vector2()).copy(this.position);
	    }
	    setParent(parent) {
	        if (this.isDescendantOf(parent)) {
	            return false;
	        }
	        if (this.parent) {
	            this.parent.children.remove(this);
	        }
	        this.parent = parent;
	        this.parent.children.push(this);
	    }
	    getParent() {
	        return this.parent;
	    }
	    isDescendantOf(transformable) {
	        if (!transformable || transformable === this) {
	            return false;
	        }
	        var ptr = this.parent;
	        while (ptr) {
	            if (ptr === transformable) {
	                return true;
	            }
	        }
	        return false;
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
	        index = math_util_1.MathUtil.clamp(index, 0, children.length - 1);
	        children.remove(this);
	        children.insert(this, index);
	        return true;
	    }
	    isRoot() {
	        return !this.parent;
	    }
	    getChildAt(index) {
	        return this.children[index];
	    }
	    getChildCount() {
	        return this.children.length;
	    }
	    getDepth() {
	        if (!this.parent)
	            return 0;
	        let ptr = this.parent;
	        let depth = 1;
	        while (ptr) {
	            depth++;
	            ptr = ptr.parent;
	        }
	        return depth;
	    }
	}
	exports.Transformable = Transformable;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const color_1 = __webpack_require__(53);
	const math_util_1 = __webpack_require__(18);
	const bit_util_1 = __webpack_require__(110);
	class PixiStyle {
	    constructor(lineColor = null, lineWidth = 1, fillColor = null) {
	        this.lineColor = lineColor || color_1.Color.Cyan;
	        this.fillColor = fillColor || color_1.Color.Clear;
	        this.lineWidth = math_util_1.MathUtil.clamp(lineWidth, 1, 10);
	    }
	    getFillColor() {
	        return this.fillColor && this.fillColor.toHex() || -1;
	    }
	    getFillAlpha() {
	        if (this.fillColor)
	            return 255;
	        return bit_util_1.getNthByte(this.fillColor.toHexAlpha(), 0);
	    }
	    getLineColor() {
	        return this.lineColor && this.lineColor.toHex() || -1;
	    }
	    getLineAlpha() {
	        if (!this.lineColor)
	            return 255;
	        return bit_util_1.getNthByte(this.lineColor.toHexAlpha(), 0);
	    }
	    clone() {
	        return new PixiStyle(this.lineColor, this.lineWidth, this.fillColor);
	    }
	}
	PixiStyle.Inherit = new PixiStyle();
	exports.PixiStyle = PixiStyle;


/***/ },
/* 110 */
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const shape_1 = __webpack_require__(107);
	const vector2_1 = __webpack_require__(17);
	const polygon_1 = __webpack_require__(112);
	const pointTransformArray = new Array(3);
	class Triangle extends shape_1.Shape {
	    constructor(p1, p2, p3, parent, style) {
	        super(parent, style);
	        this.points.push(p1, p2, p3);
	    }
	    render(gfx) {
	        if (!this.isEnabled)
	            return;
	        const fillColor = this.style.getFillColor();
	        gfx.beginFill(this.style.getFillColor());
	        const position = this.getPosition(vector2_1.Vector2.scratch0);
	        const rotation = this.rotation.getRotationZ();
	        const p1 = this.points[0].clone(vector2_1.Vector2.scratch1).rotate(rotation).addVector(position);
	        const p2 = this.points[1].clone(vector2_1.Vector2.scratch2).rotate(rotation).addVector(position);
	        const p3 = this.points[2].clone(vector2_1.Vector2.scratch3).rotate(rotation).addVector(position);
	        gfx.lineStyle(this.style.lineWidth, this.style.getLineColor(), this.style.getLineAlpha());
	        gfx.moveTo(p1.x, p1.y);
	        gfx.lineTo(p2.x, p2.y);
	        gfx.lineTo(p3.x, p3.y);
	        gfx.lineTo(p1.x, p1.y);
	        gfx.endFill();
	    }
	    containsPoint(point) {
	        if (!this.isEnabled)
	            return false;
	        const rotation = this.rotation.getRotationZ();
	        const position = this.getPosition(vector2_1.Vector2.scratch0);
	        for (let i = 0; i < this.points.length; i++) {
	            pointTransformArray[0] = this.points[0].clone(vector2_1.Vector2.scratch1).rotate(rotation).addVector(position);
	            pointTransformArray[1] = this.points[1].clone(vector2_1.Vector2.scratch2).rotate(rotation).addVector(position);
	            pointTransformArray[2] = this.points[2].clone(vector2_1.Vector2.scratch3).rotate(rotation).addVector(position);
	        }
	        return polygon_1.Polygon.contains(pointTransformArray, point);
	    }
	}
	exports.Triangle = Triangle;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const transformable_1 = __webpack_require__(108);
	class Polygon extends transformable_1.Transformable {
	    constructor() {
	        super();
	        this.points = new Array();
	        this.coordinates = [];
	    }
	    addPoint(point) {
	        this.points.push(new vector2_1.Vector2(point.x, point.y));
	        this.coordinates.push(point.x, point.y);
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
	    static contains(points, target) {
	        let contains = false;
	        const px = target.x;
	        const py = target.y;
	        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
	            const pointI = points[i];
	            const pointJ = points[j];
	            const pIx = pointI.x;
	            const pIy = pointI.y;
	            const pJx = pointJ.x;
	            const pJy = pointJ.y;
	            const test = (pIy >= py) !== (pJy >= py);
	            if (test && (px <= (pJx - pIx) * (py - pIy) / (pJy - pIy) + pIx)) {
	                contains = !contains;
	            }
	        }
	        return contains;
	    }
	}
	exports.Polygon = Polygon;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const shape_1 = __webpack_require__(107);
	const vector2_1 = __webpack_require__(17);
	class Circle extends shape_1.Shape {
	    constructor(center, radius, parent = null, style = null) {
	        super(parent, style);
	        this.position.set(center.x, center.y);
	        this.radius = radius;
	        this.points.push(this.position);
	    }
	    render(gfx) {
	        if (!this.isEnabled)
	            return;
	        gfx.lineStyle(this.style.lineWidth, this.style.getLineColor(), this.style.getLineAlpha());
	        gfx.beginFill(this.style.getFillColor());
	        const position = this.getPosition(vector2_1.Vector2.scratch0);
	        gfx.drawCircle(position.x, position.y, this.radius);
	        gfx.endFill();
	    }
	    containsPoint(point) {
	        if (!this.isEnabled)
	            return false;
	        return this.getPosition(vector2_1.Vector2.scratch0).distanceToSquared(point) <= this.radius * this.radius;
	    }
	}
	exports.Circle = Circle;


/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class StateChartTransition {
	    constructor(evt, target, guardFn) {
	        this.evt = evt;
	        this.target = target;
	        this.guardFn = guardFn || StateChartTransition.NoOpGuard;
	    }
	    static NoOpGuard() { return true; }
	}
	class StateChartEvent {
	}
	exports.StateChartEvent = StateChartEvent;
	class StateChartBehavior {
	    enter() { }
	    update() { }
	    exit() { }
	}
	exports.StateChartBehavior = StateChartBehavior;
	class StateChartState {
	    constructor(id, parent, behavior) {
	        this.id = id;
	        this.parent = parent;
	        this.behavior = behavior;
	        this.isActive = false;
	        this.states = [];
	        this.events = [];
	        this.transitions = [];
	        this.initFns = null;
	        this.enterFns = null;
	        this.exitFns = null;
	        this.updateFns = null;
	    }
	    onInit(fn) {
	        this.initFns = this.initFns || [];
	        this.initFns.push(fn);
	    }
	    onUpdated(fn) {
	        this.updateFns = this.updateFns || [];
	        this.updateFns.push(fn);
	    }
	    onEntered(fn) {
	        this.enterFns = this.enterFns || [];
	        this.enterFns.push(fn);
	    }
	    onExited(fn) {
	        this.exitFns = this.exitFns || [];
	        this.exitFns.push(fn);
	    }
	    addEventHandler(evt, callback) {
	        this.events.push({ event: evt, handler: callback });
	    }
	    handleEvent(evtPackage) {
	        const evt = evtPackage.event;
	        const data = evtPackage.data;
	        for (let i = 0; i < this.events.length; i++) {
	            if (this.events[i].event === evt && this.events[i].handler) {
	                this.events[i].handler(data);
	            }
	        }
	        for (let i = 0; i < this.transitions.length; i++) {
	            const transition = this.transitions[i];
	            if (transition.evt === evt && transition.guardFn(data)) {
	                return { targetId: transition.target, from: this };
	            }
	        }
	        for (let i = 0; i < this.states.length; i++) {
	            if (this.states[i].isActive) {
	                const retn = this.states[i].handleEvent(evtPackage);
	                if (retn)
	                    return retn;
	            }
	        }
	        return null;
	    }
	    enter(enterPath) {
	        if (this.isActive)
	            return;
	        this.isActive = true;
	        this.behavior && this.behavior.enter();
	        this.initFns && this.initFns.forEach(fn => fn());
	        this.enterFns && this.enterFns.forEach(fn => fn());
	        this.initFns = null;
	        if (enterPath && enterPath.length > 0) {
	            const child = enterPath.pop();
	            if (child.parent !== this) {
	                throw new Error("Invalid StateChart enter path");
	            }
	            else {
	                child.enter(enterPath);
	            }
	        }
	        else if (this.states.length > 0) {
	            this.states[0].enter();
	        }
	    }
	    update() {
	        this.behavior && this.behavior.update();
	        this.updateFns && this.updateFns.forEach(fn => fn());
	        for (let i = 0; i < this.states.length; i++) {
	            if (this.states[i].isActive) {
	                this.states[i].update();
	            }
	        }
	    }
	    exit() {
	        if (!this.isActive)
	            return;
	        this.isActive = false;
	        this.behavior && this.behavior.exit();
	        this.exitFns && this.exitFns.forEach(fn => fn());
	        this.exitChildren();
	    }
	    exitChildren(enterPath = null) {
	        for (let i = 0; i < this.states.length; i++) {
	            if (this.states[i].isActive) {
	                if (enterPath) {
	                    if (enterPath.indexOf(this.states[i]) === -1) {
	                        this.states[i].exit();
	                    }
	                }
	                this.states[i].exit();
	            }
	        }
	    }
	    isParentOf(other) {
	        let ptr = other.parent;
	        while (ptr) {
	            if (ptr === this) {
	                return true;
	            }
	            ptr = ptr.parent;
	        }
	        return false;
	    }
	}
	class StateChartParallelState extends StateChartState {
	    enter(enterPath) {
	        if (this.isActive)
	            return;
	        this.isActive = true;
	        this.behavior && this.behavior.enter();
	        this.initFns && this.initFns.forEach(fn => fn());
	        this.initFns = null;
	        enterPath && enterPath.pop();
	        for (let i = 0; i < this.states.length; i++) {
	            this.states[i].enter(enterPath);
	        }
	    }
	}
	class StateChart_Internal extends StateChartState {
	    constructor(definition) {
	        super("$root", null, null);
	        this.isActive = true;
	        this.stateDef = this.getStateFn();
	        this.stateMap = new Map();
	        this.stateStack = [];
	        this.eventQueue0 = [];
	        this.eventQueue1 = [];
	        this.eventQueue = this.eventQueue0;
	        this.stateStack.push(this);
	        this.builder = new StateChartBuilder(this);
	        this.builder.currentState = this;
	        definition(this.builder);
	        this.stateStack.pop();
	        this.stateStack = null;
	        this.initFns && this.initFns.forEach(fn => fn());
	        this.enterFns && this.enterFns.forEach(fn => fn());
	        if (this.states[0]) {
	            this.states[0].enter();
	        }
	    }
	    update() {
	        //process an event queue tick
	        const currentQueue = this.eventQueue;
	        //swap event queues
	        this.eventQueue = this.eventQueue === this.eventQueue0 ? this.eventQueue1 : this.eventQueue0;
	        //do all transitions but queue all events till next frame
	        while (currentQueue.length) {
	            const transition = this.handleEvent(currentQueue.shift());
	            if (transition) {
	                this.goTo(transition.targetId, transition.from);
	            }
	        }
	        this.updateFns && this.updateFns.forEach(fn => fn());
	        const active = this.getActiveState();
	        if (active)
	            active.update();
	    }
	    isInState(id) {
	        const state = this.stateMap.get(id);
	        return state && state.isActive;
	    }
	    trigger(event, data) {
	        if (this.stateStack)
	            throw new Error("StateChart hasn't entered yet, invalid call to trigger()");
	        this.eventQueue.push({ event: event, data: data });
	    }
	    getConfiguration() {
	        const config = new Array();
	        const leaves = new Array();
	        this.stateMap.forEach((state) => {
	            if (state.isActive && state.states.length === 0) {
	                leaves.push(state);
	            }
	        });
	        for (let i = 0; i < leaves.length; i++) {
	            const leaf = leaves[i];
	            const branchConfig = new Array();
	            let ptr = leaf;
	            while (ptr !== this) {
	                branchConfig.push(ptr.id);
	                ptr = ptr.parent;
	            }
	            config.push(branchConfig.reverse());
	        }
	        return config;
	    }
	    getStateFn() {
	        const fn = this.state.bind(this);
	        fn.parallel = this.parallel.bind(this);
	        return fn;
	    }
	    goTo(targetId, from) {
	        let ptr = this.stateMap.get(targetId);
	        if (!ptr) {
	            throw new Error("Invalid state: " + targetId);
	        }
	        if (ptr === from)
	            return;
	        let enterPath = [];
	        //find highest parent of target that is active
	        //if from is a parent of ptr
	        if (from.isParentOf(ptr)) {
	            //work up from ptr until we hit from, enter as we go
	            while (ptr !== from) {
	                enterPath.push(ptr);
	                ptr = ptr.parent;
	            }
	            from.exitChildren(enterPath);
	            enterPath.shift().enter(enterPath);
	        }
	        else {
	            while (!ptr.isActive) {
	                enterPath.unshift(ptr);
	                ptr = ptr.parent;
	            }
	            ptr.exitChildren();
	            enterPath.shift().enter(enterPath);
	        }
	    }
	    transition(evt, targetStateId, guardFunction) {
	        if (!this.stateStack)
	            throw new Error("StateChart has already entered, cannot call 'transition()'");
	        this.stateStack.getLast().transitions.push(new StateChartTransition(evt, targetStateId, guardFunction));
	    }
	    state(id, behaviorOrDefinition, definition) {
	        if (arguments.length === 1) {
	            this.createState(id, null, null, false);
	        }
	        else if (arguments.length === 2) {
	            this.createState(id, behaviorOrDefinition, null, false);
	        }
	        else if (arguments.length === 3) {
	            this.createState(id, definition, behaviorOrDefinition, false);
	        }
	    }
	    parallel(id, behaviorOrDefinition, definition) {
	        if (arguments.length === 2) {
	            this.createState(id, behaviorOrDefinition, null, true);
	        }
	        else if (arguments.length === 3) {
	            this.createState(id, definition, behaviorOrDefinition, true);
	        }
	    }
	    createState(id, definition, behavior, isParallel = false) {
	        if (!this.stateStack)
	            throw new Error("StateChart has already entered, cannot call 'parallel()'");
	        if (this.stateMap.get(id)) {
	            throw new Error("States within a StateChart cannot have duplicate ids, '" + id + "' was already registered");
	        }
	        const parentState = this.stateStack.getLast();
	        const Type = (isParallel) ? StateChartParallelState : StateChartState;
	        const state = new Type(id, parentState, behavior);
	        parentState.states.push(state);
	        this.stateMap.set(id, state);
	        if (typeof definition === "function") {
	            this.stateStack.push(state);
	            this.builder.currentState = state;
	            definition();
	            this.stateStack.pop();
	        }
	        if (state.behavior) {
	            state.behavior.chart = this;
	        }
	    }
	    getActiveState() {
	        return this.states.find(function (state) {
	            return state.isActive;
	        });
	    }
	}
	exports.StateChart_Internal = StateChart_Internal;
	//[Hack!] weirdness w/ typescript compiler makes it hard to hide methods from subclass...no idea why.
	//export a shadow class instead with only the properly exposed signature
	class StateChart {
	    constructor(fn) {
	        return new StateChart_Internal(fn);
	    }
	    static createEvent() {
	        return new StateChartEvent();
	    }
	}
	exports.StateChart = StateChart;
	class StateChartBuilder {
	    constructor(chart) {
	        this.chart = chart;
	    }
	    init(fn) {
	        this.chart.stateStack.getLast().onInit(fn);
	    }
	    enter(fn) {
	        this.chart.stateStack.getLast().onEntered(fn);
	    }
	    exit(fn) {
	        this.chart.stateStack.getLast().onExited(fn);
	    }
	    update(fn) {
	        this.chart.stateStack.getLast().onUpdated(fn);
	    }
	    event(evtType, callback) {
	        this.chart.stateStack.getLast().addEventHandler(evtType, callback);
	    }
	    trigger(evt, data) {
	        this.chart.trigger(evt, data);
	    }
	    toDSL() {
	        return {
	            enter: this.enter.bind(this),
	            exit: this.exit.bind(this),
	            update: this.update.bind(this),
	            init: this.init.bind(this),
	            trigger: this.chart.trigger.bind(this.chart),
	            state: this.chart.getStateFn(),
	            event: this.event.bind(this),
	            isInState: this.chart.isInState.bind(this.chart),
	            transition: this.chart.transition.bind(this.chart)
	        };
	    }
	}
	exports.StateChartBuilder = StateChartBuilder;
	// var b = new StateChartBuilder();
	// var z = b.createEvent<{s : string, y: number}>();
	// b.trigger(z, {s: "", y: 1});
	//
	// const Evt_MouseUp = b.createEvent<Vector2>();
	//
	// b.event(Evt_MouseUp, "stateName");


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_window_element_1 = __webpack_require__(71);
	const vector2_1 = __webpack_require__(17);
	const asset_item_1 = __webpack_require__(116);
	const element_renderer_1 = __webpack_require__(7);
	const prefab_asset_item_1 = __webpack_require__(119);
	const editor_element_annotations_1 = __webpack_require__(72);
	const editor_theme_1 = __webpack_require__(61);
	const folder_asset_item_1 = __webpack_require__(121);
	const folder_asset_1 = __webpack_require__(122);
	const icon_1 = __webpack_require__(66);
	const drag_action_1 = __webpack_require__(44);
	const drag_hierarchy_item_1 = __webpack_require__(67);
	const evt_asset_created_1 = __webpack_require__(47);
	const image_asset_item_1 = __webpack_require__(123);
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const asset_window_1 = __webpack_require__(115);
	const icon_1 = __webpack_require__(66);
	const text_selection_1 = __webpack_require__(117);
	const drag_action_1 = __webpack_require__(44);
	const asset_drag_action_1 = __webpack_require__(118);
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
/* 117 */
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(44);
	class AssetDragAction extends drag_action_1.DragAction {
	    constructor(asset, item) {
	        super();
	        this.asset = asset;
	        this.item = item;
	    }
	}
	exports.AssetDragAction = AssetDragAction;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const prefab_asset_1 = __webpack_require__(120);
	const asset_item_1 = __webpack_require__(116);
	const drag_action_1 = __webpack_require__(44);
	const prefab_drag_action_1 = __webpack_require__(69);
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const app_element_1 = __webpack_require__(29);
	const asset_1 = __webpack_require__(46);
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_item_1 = __webpack_require__(116);
	const icon_1 = __webpack_require__(66);
	const drag_action_1 = __webpack_require__(44);
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const asset_1 = __webpack_require__(46);
	class FolderAsset extends asset_1.Asset {
	}
	exports.FolderAsset = FolderAsset;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_item_1 = __webpack_require__(116);
	const drag_action_1 = __webpack_require__(44);
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_window_element_1 = __webpack_require__(71);
	const scene_meta_bar_1 = __webpack_require__(125);
	const stage_background_1 = __webpack_require__(127);
	const breakpoint_1 = __webpack_require__(126);
	const app_element_1 = __webpack_require__(29);
	const vector2_1 = __webpack_require__(17);
	const stage_foreground_1 = __webpack_require__(128);
	const util_1 = __webpack_require__(16);
	const rect_tool_1 = __webpack_require__(129);
	const editor_element_annotations_1 = __webpack_require__(72);
	const state_chart_1 = __webpack_require__(114);
	const evt_designer_rendererd_1 = __webpack_require__(98);
	const layout_1 = __webpack_require__(104);
	class StageWindow extends editor_window_element_1.EditorWindowElement {
	    onCreated() {
	        PIXI.utils.skipHello();
	        this.zoomLevel = 1;
	        this.frameSize = new vector2_1.Vector2();
	        this.panValue = new vector2_1.Vector2();
	        this.currentBreakpoint = breakpoint_1.BreakpointType.Mobile;
	        this.currentTool = new rect_tool_1.SceneRectTool(this);
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (input.isMouseInEditorElement(this.getChildRoot())) {
	            this.zoom(input.getMouseWheelDelta().y);
	        }
	        //todo there is probably a way not to dirty check this
	        const clientRect = this.getChildRoot().getDomNode().getBoundingClientRect();
	        if (clientRect.width !== this.width || clientRect.height !== this.height) {
	            this.width = clientRect.width;
	            this.height = clientRect.height;
	            this.setPreviewSize(this.currentBreakpoint);
	            this.stageBackground.paint(this.width, this.height);
	        }
	        //this.stateChart.update();
	        // this.currentTool.update();
	        EditorRuntime.emit(evt_designer_rendererd_1.DesignerRendered, this.stageForeground.getGfxRoot(), this.getStageMousePosition());
	        this.stageForeground.paint(this.width, this.height);
	    }
	    onRendered() {
	        const container = this.getChildById("container");
	        this.stageBackground = container.getChildByType(stage_background_1.StageBackground);
	        this.stageForeground = container.getChildByType(stage_foreground_1.StageForeground);
	        EditorRuntime.updateTree.add(this);
	        EditorRuntime.drawScene(".scene-render-root");
	        this.stateChart = createStateChart(this);
	    }
	    createInitialStructure() {
	        return [
	            Hex.createElement(scene_meta_bar_1.SceneMetaBar, null),
	            Hex.createElement("div", { "x-id": "container", class: "stage-container" },
	                Hex.createElement(stage_background_1.StageBackground, null),
	                Hex.createElement("div", { "x-child-root": true, class: "scene-render-root" }),
	                Hex.createElement(stage_foreground_1.StageForeground, null))
	        ];
	    }
	    pan(delta) {
	        if (delta.isZero())
	            return;
	        this.panValue.addVector(delta);
	        app_element_1.AppElement.Root.setPosition(new vector2_1.Vector2(this.panValue.x, this.panValue.y));
	        app_element_1.AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y, layout_1.LengthUnit.Pixel);
	    }
	    getBreakpoint() {
	        return this.currentBreakpoint;
	    }
	    setPreviewSize(breakpointType) {
	        this.currentBreakpoint = breakpointType;
	        this.frameSize = breakpoint_1.Breakpoint.getDimensions(breakpointType);
	        this.panValue.x = ((this.width * 0.5) - (this.frameSize.x * 0.5)) | 0;
	        this.panValue.y = 1;
	        app_element_1.AppElement.Root.setPosition(new vector2_1.Vector2(this.panValue.x, this.panValue.y));
	        app_element_1.AppElement.Root.setDimensions(this.frameSize.x, this.frameSize.y, layout_1.LengthUnit.Pixel);
	    }
	    getStageMousePosition() {
	        const mouse = EditorRuntime.getInput().getMouseRelativeToEditorElement(this);
	        mouse.y -= 21; //bullshit css crap with sizing of meta-bar
	        return mouse;
	    }
	    zoom(zoomDelta) {
	        this.zoomLevel -= 0.05 * zoomDelta;
	        this.zoomLevel = util_1.clamp(this.zoomLevel, 0.1, 4);
	        if (zoomDelta !== 0) {
	            app_element_1.AppElement.Root.setScale(new vector2_1.Vector2(this.zoomLevel, this.zoomLevel));
	        }
	    }
	    drawPrimitive(selection) {
	        // this.stateChart.trigger(new Evt_PaintBox(selection));
	    }
	    onContextClick() {
	        // const selection = EditorRuntime.getSelection();
	        // EditorRuntime.getInput().getMousePosition(Vector2.scratch0);
	        // const menu = new nw.Menu();
	        //
	        // menu.append(new nw.MenuItem({ label: "Create", submenu: getCreationMenu(selection) }));
	        // menu.append(new nw.MenuItem({ label: "Box", click: () => { this.drawPrimitive(selection) } }));
	        // // menu.append(new nw.MenuItem({ label: "Destroy", click: () => this.destroyContextSelection() }));
	        //
	        // menu.popup(Vector2.scratch0.x, Vector2.scratch0.y);
	    }
	}
	tslib_1.__decorate([
	    editor_element_annotations_1.onRightClick
	], StageWindow.prototype, "onContextClick", null);
	exports.StageWindow = StageWindow;
	// class Evt_PaintBox extends StateChartEvent {
	//
	//     public selection : AppElement;
	//
	//     constructor(selection : AppElement) {
	//         super();
	//         this.selection = selection;
	//     }
	//
	// }
	//
	// class Evt_PaintBox_Start extends StateChartEvent {}
	// class Evt_PaintBox_Finish extends StateChartEvent {}
	// class Evt_PaintBox_Cancel extends StateChartEvent {}
	class PaintBoxBehavior extends state_chart_1.StateChartBehavior {
	    constructor(stage) {
	        super();
	        this.stage = stage;
	        this.graphic = new PIXI.Graphics();
	    }
	    enter() {
	        this.stage.stageForeground.getGfxRoot().addChild(this.graphic);
	    }
	    update() {
	        // const input = EditorRuntime.getInput();
	        // const inStage = input.isMouseInEditorElement(this.stage.stageForeground);
	        // this.graphic.clear();
	        //
	        // if (this.chart.isInState("paint-pending")) {
	        //     if (inStage) {
	        //         EditorRuntime.setCursor("crosshair");
	        //         if (input.isMouseDownThisFrame()) {
	        //             this.chart.trigger(new Evt_PaintBox_Start());
	        //         }
	        //     }
	        //
	        // }
	        // else if (this.chart.isInState("paint-started")) {
	        //     const md = input.getMouseDownRelativeToEditorElement(this.stage.stageForeground);
	        //     const mouse = input.getMouseRelativeToEditorElement(this.stage.stageForeground);
	        //     this.graphic.lineStyle(2, 0x0000FF);
	        //     this.graphic.drawRect(md.x, md.y, mouse.x - md.x, mouse.y - md.y);
	        //     if (input.isMouseUpThisFrame()) {
	        //         const element = new AppElement("Box", EditorRuntime.getSelection());
	        //         element.addComponent(PanelComponent);
	        //         element.addComponent(BackgroundComponent);
	        //         const minX = Math.min(mouse.x, md.x);
	        //         const minY = Math.min(mouse.y, md.y);
	        //         const maxX = Math.max(mouse.x, md.x);
	        //         const maxY = Math.max(mouse.y, md.y);
	        //         element.setPositionValues(minX, minY);
	        //         element.setRotation(0, Space.World);
	        //         element.setDimensions(maxX - minX, maxY - minY);
	        //         this.chart.trigger(new Evt_PaintBox_Finish());
	        //     }
	        //     else if (input.isKeyDown(KeyCode.Escape)) {
	        //         this.chart.trigger(new Evt_PaintBox_Cancel());
	        //     }
	        // }
	    }
	    exit() {
	        this.stage.stageForeground.getGfxRoot().removeChild(this.graphic);
	        EditorRuntime.setCursor("default");
	    }
	}
	function createStateChart(stage) {
	    return new state_chart_1.StateChart(function () {
	        // state("default", function () {
	        //
	        // });
	        //
	        // state.parallel("base", function () {
	        //
	        //     state("selection", function () {
	        //         state("selection-none");
	        //         state("selection-single");
	        //         state("selection-multiple");
	        //     });
	        //
	        //     state("tool", function () {
	        //
	        //     });
	        //
	        // });
	        //
	        // state("paint-box", new PaintBoxBehavior(stage), function () {
	        //
	        //     state("paint-pending");
	        //     state("paint-started");
	        //
	        //     event(Evt_PaintBox_Start, "paint-started");
	        //     event(Evt_PaintBox_Finish, "default");
	        //     event(Evt_PaintBox_Cancel, "default");
	        //
	        // });
	        //
	        // state("single-select");
	        // state("multi-select");
	        //
	        // event(Evt_PaintBox, "paint-box");
	    });
	}
	createStyleSheet(`<style>
	        
	.stage-window {
	    overflow:hidden;
	    width: 100%;
	    height: 100%;
	    display: flex;
	    flex-direction: column;
	}

	.stage-container {
	    width: 100%;
	    height: calc(100% - 21px);
	    position:relative;
	}

	.overlay-canvas {
	    position: absolute;
	    top:0;
	    left:0;
	}

	</style>`);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const button_1 = __webpack_require__(64);
	const editor_theme_1 = __webpack_require__(61);
	const breakpoint_1 = __webpack_require__(126);
	const editor_html_element_1 = __webpack_require__(19);
	const stage_window_1 = __webpack_require__(124);
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
	        this.scene = this.getAncestorByType(stage_window_1.StageWindow);
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
	    min-height: 21px;
	    height: 21px;
	    width: 100%;
	    background: ${editor_theme_1.WindowColors.foregroundGrey};
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    justify-content: flex-end;
	    z-index:200;
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const vector2_1 = __webpack_require__(17);
	const TEMP_ANNOTATION_1 = __webpack_require__(43);
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	const editor_theme_1 = __webpack_require__(61);
	class StageBackground extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "canvas", classList: "overlay-canvas" };
	    }
	    onRendered() {
	        this.ctx = this.htmlNode.getContext("2d");
	    }
	    paint(width, height) {
	        this.htmlNode.width = width;
	        this.htmlNode.height = height;
	        this.ctx.clearRect(0, 0, width, height);
	        this.ctx.fillStyle = editor_theme_1.WindowColors.sceneBackground;
	        this.ctx.fillRect(0, 0, width, height);
	        this.ctx.strokeStyle = '#FFFFFF';
	        this.ctx.lineWidth = 0.5;
	        this.ctx.globalAlpha = 0.2;
	        this.ctx.beginPath();
	        const spacing = 25;
	        for (let i = 0; i < 100; i++) {
	            const interval = i * spacing + 0.5;
	            this.ctx.moveTo(0, interval);
	            this.ctx.lineTo(width, interval);
	            this.ctx.moveTo(interval, 0);
	            this.ctx.lineTo(interval, height);
	        }
	        this.ctx.closePath();
	        this.ctx.stroke();
	    }
	}
	exports.StageBackground = StageBackground;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_html_element_1 = __webpack_require__(19);
	const state_chart_1 = __webpack_require__(114);
	const vector2_1 = __webpack_require__(17);
	const app_element_1 = __webpack_require__(29);
	const util_1 = __webpack_require__(16);
	const layout_1 = __webpack_require__(104);
	const e_mouse_state_1 = __webpack_require__(26);
	const anchor_flower_1 = __webpack_require__(105);
	class StageForeground extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "canvas", classList: "overlay-canvas" };
	    }
	    onUpdated() {
	        this.anchorFlower.update();
	        this.stateChart.update();
	    }
	    onRendered() {
	        this.stage = new PIXI.Container();
	        this.anchorFlower = new anchor_flower_1.AnchorFlower();
	        this.selectionContainer = this.stage.addChild(new PIXI.Container());
	        this.selectionOutline = this.selectionContainer.addChild(new PIXI.Graphics());
	        this.selectionContainer.addChild(this.anchorFlower.getGfx());
	        this.stateChart = this.getStateChart();
	        EditorRuntime.updateTree.add(this);
	        this.renderer = new PIXI.WebGLRenderer(256, 256, {
	            autoResize: true,
	            antialias: true,
	            transparent: true,
	            view: this.htmlNode
	        });
	    }
	    getGfxRoot() {
	        return this.stage;
	    }
	    paint(width, height) {
	        if (this.renderer.width !== width || this.renderer.height !== height) {
	            this.renderer.resize(width, height);
	        }
	        this.anchorFlower.render();
	        this.renderer.render(this.stage);
	    }
	    hitTestEdge(point, bounds) {
	        const topLeft = bounds.topLeft;
	        const topRight = bounds.topRight;
	        const bottomRight = bounds.bottomRight;
	        const bottomLeft = bounds.bottomLeft;
	        if (util_1.distanceTestPoint(topLeft, point, 5))
	            return SelectionEdge.TopLeft;
	        if (util_1.distanceTestPoint(topRight, point, 5))
	            return SelectionEdge.TopRight;
	        if (util_1.distanceTestPoint(bottomLeft, point, 5))
	            return SelectionEdge.BottomLeft;
	        if (util_1.distanceTestPoint(bottomRight, point, 5))
	            return SelectionEdge.BottomRight;
	        if (util_1.hitTestLine2(topLeft, topRight, point, 3))
	            return SelectionEdge.Top;
	        if (util_1.hitTestLine2(topLeft, bottomLeft, point, 3))
	            return SelectionEdge.Left;
	        if (util_1.hitTestLine2(bottomLeft, bottomRight, point, 3))
	            return SelectionEdge.Bottom;
	        if (util_1.hitTestLine2(topRight, bottomRight, point, 3))
	            return SelectionEdge.Right;
	        if (bounds.containsPoint(point))
	            return SelectionEdge.Center;
	        return SelectionEdge.None;
	    }
	    updateDragSide(dragSide, delta, appElement) {
	        const p = appElement.getPosition();
	        let width = appElement.getWidth();
	        let height = appElement.getHeight();
	        if ((dragSide & SelectionEdge.Top) !== 0) {
	            p.y += delta.y;
	            height -= delta.y;
	        }
	        else if ((dragSide & SelectionEdge.Bottom) !== 0) {
	            height += delta.y;
	        }
	        if ((dragSide & SelectionEdge.Left) !== 0) {
	            p.x += delta.x;
	            width -= delta.x;
	        }
	        else if ((dragSide & SelectionEdge.Right) !== 0) {
	            width += delta.x;
	        }
	        if (width < 1)
	            width = 1;
	        if (height < 1)
	            height = 1;
	        if (height === 1 && delta.y > 0)
	            p.y -= delta.y;
	        if (width === 1 && delta.x > 0)
	            p.x -= delta.x;
	        appElement.setPositionValues(p.x, p.y, app_element_1.Space.World, true);
	        appElement.setDimensions(width, height, layout_1.LengthUnit.Pixel);
	    }
	    paintSelectionEdges() {
	        this.selectionOutline.clear();
	        const selection = EditorRuntime.getSelection();
	        if (!selection)
	            return;
	        const circleSize = 4;
	        const boundingBox = selection.getBoundingBox();
	        const aabb = selection.getAxisAlignedBoundingBox();
	        this.selectionOutline.lineStyle(1, 0xFF00CD);
	        this.selectionOutline.drawRect(aabb.x, aabb.y, aabb.width, aabb.height);
	        this.selectionOutline.beginFill(0x87b0f2);
	        this.selectionOutline.drawCircle(boundingBox.topRight.x, boundingBox.topRight.y, circleSize);
	        this.selectionOutline.drawCircle(boundingBox.bottomRight.x, boundingBox.bottomRight.y, circleSize);
	        this.selectionOutline.drawCircle(boundingBox.bottomLeft.x, boundingBox.bottomLeft.y, circleSize);
	        this.selectionOutline.endFill();
	        this.selectionOutline.beginFill(0xFF0000);
	        this.selectionOutline.drawCircle(boundingBox.topLeft.x, boundingBox.topLeft.y, circleSize);
	        this.selectionOutline.endFill();
	    }
	    setHoverCursor(dragSide) {
	        switch (dragSide) {
	            case SelectionEdge.Top:
	            case SelectionEdge.Bottom:
	                EditorRuntime.setCursor('ns-resize');
	                break;
	            case SelectionEdge.Left:
	            case SelectionEdge.Right:
	                EditorRuntime.setCursor('ew-resize');
	                break;
	            case SelectionEdge.TopRight:
	            case SelectionEdge.BottomLeft:
	                EditorRuntime.setCursor('nesw-resize');
	                break;
	            case SelectionEdge.TopLeft:
	            case SelectionEdge.BottomRight:
	                EditorRuntime.setCursor('nwse-resize');
	                break;
	            default:
	                EditorRuntime.setCursor('default');
	                break;
	        }
	    }
	    getStateChart() {
	        if (this.stateChart)
	            return this.stateChart;
	        const Evt_DragEdge = state_chart_1.StateChart.createEvent();
	        const Evt_DragAnchor = state_chart_1.StateChart.createEvent();
	        const Evt_StartPanning = state_chart_1.StateChart.createEvent();
	        const Evt_MouseUp = state_chart_1.StateChart.createEvent();
	        const Evt_MouseDown = state_chart_1.StateChart.createEvent();
	        const Evt_MouseDownOverSelection = state_chart_1.StateChart.createEvent();
	        const Evt_MouseDownOutsideSelection = state_chart_1.StateChart.createEvent();
	        const Evt_MouseDownOverSelectionEdge = state_chart_1.StateChart.createEvent();
	        const Evt_Selection = state_chart_1.StateChart.createEvent();
	        const Evt_SelectionCleared = state_chart_1.StateChart.createEvent();
	        return new state_chart_1.StateChart((builder) => {
	            const input = EditorRuntime.getInput();
	            const { state, event, transition, enter, exit, update, init, trigger, isInState } = builder.toDSL();
	            let selection = null;
	            let anchorHit = false;
	            let edgeHit = SelectionEdge.None;
	            let mouse;
	            update(() => {
	                const activeSelection = EditorRuntime.getSelection();
	                mouse = input.getMouseRelativeToEditorElement(this);
	                if (activeSelection !== selection) {
	                    if (activeSelection) {
	                        selection = activeSelection;
	                        trigger(Evt_Selection, selection);
	                    }
	                    else {
	                        trigger(Evt_SelectionCleared, selection);
	                    }
	                }
	                if (input.isMouseUpThisFrame())
	                    trigger(Evt_MouseUp, mouse);
	                if (input.isMouseDownThisFrame())
	                    trigger(Evt_MouseDown, mouse);
	            });
	            state("selection.none", () => {
	                transition(Evt_Selection, "selection");
	            });
	            state("selection", () => {
	                state.parallel("selection-single", () => {
	                    state("manipulating", () => {
	                        state("manipulating.none", () => {
	                            update(() => {
	                                if (!selection)
	                                    return;
	                                edgeHit = this.hitTestEdge(mouse, selection.getBoundingBox());
	                                anchorHit = this.anchorFlower.hitTest(mouse);
	                                this.paintSelectionEdges();
	                                if (!anchorHit)
	                                    this.setHoverCursor(edgeHit);
	                            });
	                            event(Evt_MouseDown, (mouse) => {
	                                if (input.isMouseButtonDown(e_mouse_state_1.MouseButtonState.Right)) {
	                                    return trigger(Evt_StartPanning, null);
	                                }
	                                if (anchorHit) {
	                                    return trigger(Evt_DragAnchor, anchorHit);
	                                }
	                                if (edgeHit === SelectionEdge.Center) {
	                                    return trigger(Evt_MouseDownOverSelection, edgeHit);
	                                }
	                                if (edgeHit !== SelectionEdge.None) {
	                                    return trigger(Evt_MouseDownOverSelectionEdge, edgeHit);
	                                }
	                                trigger(Evt_MouseDownOutsideSelection, null);
	                            });
	                            transition(Evt_StartPanning, "panning");
	                            transition(Evt_MouseDownOverSelection, "translating");
	                            transition(Evt_MouseDownOverSelectionEdge, "resizing");
	                            transition(Evt_DragAnchor, "drag-anchors");
	                        });
	                        state("panning", () => {
	                            update(() => {
	                                const position = app_element_1.AppElement.Root.getPosition(vector2_1.Vector2.scratch0);
	                                app_element_1.AppElement.Root.setPosition(position.addVector(input.getMouseDelta(vector2_1.Vector2.scratch1)));
	                            });
	                            transition(Evt_MouseUp, "manipulating.none");
	                        });
	                        state("translating", () => {
	                            update(() => {
	                                const selection = EditorRuntime.getSelection();
	                                const delta = input.getMouseDelta(vector2_1.Vector2.scratch2);
	                                const position = selection.getPosition(vector2_1.Vector2.scratch0);
	                                position.addVector(delta);
	                                selection.setPositionValues(position.x, position.y, app_element_1.Space.World);
	                                this.paintSelectionEdges();
	                            });
	                            transition(Evt_MouseUp, "manipulating.none");
	                        });
	                        state("manipulating-rotating", () => { });
	                        state("resizing", () => {
	                            enter(() => {
	                                this.setHoverCursor(edgeHit);
	                            });
	                            update(() => {
	                                const delta = input.getMouseDelta(vector2_1.Vector2.scratch2);
	                                this.updateDragSide(edgeHit, delta, selection);
	                                this.paintSelectionEdges();
	                            });
	                            exit(() => {
	                                this.setHoverCursor(SelectionEdge.None);
	                            });
	                            transition(Evt_MouseUp, "manipulating.none");
	                        });
	                        state("drag-anchors", () => {
	                            enter(() => {
	                                this.anchorFlower.startDrag();
	                            });
	                            exit(() => {
	                                this.anchorFlower.endDrag();
	                            });
	                            transition(Evt_MouseUp, "manipulating.none");
	                        });
	                        state("manipulating-tethers", () => { });
	                    });
	                });
	                transition(Evt_SelectionCleared, "selection.none");
	            });
	        });
	    }
	}
	exports.StageForeground = StageForeground;
	var SelectionEdge;
	(function (SelectionEdge) {
	    SelectionEdge[SelectionEdge["None"] = 1] = "None";
	    SelectionEdge[SelectionEdge["Center"] = 2] = "Center";
	    SelectionEdge[SelectionEdge["Top"] = 4] = "Top";
	    SelectionEdge[SelectionEdge["Left"] = 8] = "Left";
	    SelectionEdge[SelectionEdge["Right"] = 16] = "Right";
	    SelectionEdge[SelectionEdge["Bottom"] = 32] = "Bottom";
	    SelectionEdge[SelectionEdge["TopRight"] = 20] = "TopRight";
	    SelectionEdge[SelectionEdge["TopLeft"] = 12] = "TopLeft";
	    SelectionEdge[SelectionEdge["BottomRight"] = 48] = "BottomRight";
	    SelectionEdge[SelectionEdge["BottomLeft"] = 40] = "BottomLeft";
	})(SelectionEdge || (SelectionEdge = {}));


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const scene_tool_1 = __webpack_require__(130);
	const util_1 = __webpack_require__(16);
	const app_element_1 = __webpack_require__(29);
	const layout_1 = __webpack_require__(104);
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
	        const mouse = this.stageWindow.getStageMousePosition();
	        const inElement = input.isMouseInEditorElement(this.stageBodyRoot);
	        if (selection) {
	            const rect = selection.getBoundingBox();
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
	                if (this.draggedSide !== DragSide.None && selection.getComponent(layout_1.LayoutComponent)) {
	                    this.updateDragSide(input.getMouseDelta(), selection);
	                }
	                else if (this.panning) {
	                    this.stageWindow.pan(input.getMouseDelta());
	                }
	            }
	            else if (input.isMouseUp()) {
	                this.draggedSide = DragSide.None;
	                this.panning = false;
	            }
	            if (this.draggedSide === DragSide.None && selection.getComponent(layout_1.LayoutComponent)) {
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
	                this.stageWindow.pan(input.getMouseDelta());
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
	        const topLeft = bounds.topLeft;
	        const topRight = bounds.topRight;
	        const bottomRight = bounds.bottomRight;
	        const bottomLeft = bounds.bottomLeft;
	        if (util_1.distanceTestPoint(topLeft, point, 5))
	            return DragSide.TopLeft;
	        if (util_1.distanceTestPoint(topRight, point, 5))
	            return DragSide.TopRight;
	        if (util_1.distanceTestPoint(bottomLeft, point, 5))
	            return DragSide.BottomLeft;
	        if (util_1.distanceTestPoint(bottomRight, point, 5))
	            return DragSide.BottomRight;
	        if (util_1.hitTestLine2(topLeft, topRight, point, 3))
	            return DragSide.Top;
	        if (util_1.hitTestLine2(topLeft, bottomLeft, point, 3))
	            return DragSide.Left;
	        if (util_1.hitTestLine2(bottomLeft, bottomRight, point, 3))
	            return DragSide.Bottom;
	        if (util_1.hitTestLine2(topRight, bottomRight, point, 3))
	            return DragSide.Right;
	        if (bounds.containsPoint(point))
	            return DragSide.Center;
	        return DragSide.None;
	    }
	    updateDragSide(delta, appElement) {
	        const p = appElement.getPosition();
	        let width = appElement.getWidth();
	        let height = appElement.getHeight();
	        switch (this.draggedSide) {
	            case DragSide.TopRight:
	                p.y += delta.y;
	                width += delta.x;
	                height -= delta.y;
	                break;
	            case DragSide.TopLeft:
	                p.x += delta.x;
	                p.y += delta.y;
	                width -= delta.x;
	                height -= delta.y;
	                break;
	            case DragSide.BottomLeft:
	                p.x += delta.x;
	                width -= delta.x;
	                height += delta.y;
	                break;
	            case DragSide.BottomRight:
	                width += delta.x;
	                height += delta.y;
	                break;
	            case DragSide.Top:
	                p.y += delta.y;
	                height -= delta.y;
	                break;
	            case DragSide.Left:
	                p.x += delta.x;
	                width -= delta.x;
	                break;
	            case DragSide.Right:
	                width += delta.x;
	                break;
	            case DragSide.Bottom:
	                height += delta.y;
	                break;
	            case DragSide.Center:
	                p.x += delta.x;
	                p.y += delta.y;
	                break;
	        }
	        if (width < 1)
	            width = 1;
	        if (height < 1)
	            height = 1;
	        if (height === 1 && delta.y > 0) {
	            p.y -= delta.y;
	        }
	        if (width === 1 && delta.x > 0) {
	            p.x -= delta.x;
	        }
	        appElement.setPositionValues(p.x, p.y, app_element_1.Space.World, true);
	        appElement.setDimensions(width, height, layout_1.LengthUnit.Pixel);
	    }
	}
	exports.SceneRectTool = SceneRectTool;


/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class SceneTool {
	    constructor(stageWindow) {
	        this.stageWindow = stageWindow;
	        this.stageBodyRoot = this.stageWindow.getChildRoot();
	    }
	    update() { }
	    enable() { }
	    disable() { }
	}
	exports.SceneTool = SceneTool;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const button_1 = __webpack_require__(64);
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
/* 132 */
/***/ function(module, exports) {

	// import {ComponentRenderer, renderer} from "./component_renderer";
	// import {SizingComponent, SizingMode} from "../../runtime/components/layout/sizing_component";
	// import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
	// import {NumberInput} from "../../ui_elements/number_input";
	// import {EditorElement} from "../../editor_element/editor_element";
	//
	// @renderer(SizingComponent)
	// class SizingRenderer extends ComponentRenderer<SizingComponent> {
	//
	//     public createInitialStructure(children : any) : JSXElement {
	//
	//         const structure = [
	//             this.getRenderer("sizingMode", {
	//                 onValueChanged: () => {
	//                     this.onModeChanged();
	//                 }
	//             }),
	//             this.getBody()
	//         ];
	//         return [
	//             this.createStandardHeaderStructure(),
	//             this.createStandardBodyStructure(structure)
	//         ]
	//     }
	//
	//     private onModeChanged() : void {
	//         const childRoot = this.getChildRoot();
	//         const length = childRoot.children.length;
	//         //destroy all but first child
	//         for(let i = 1; i < length; i++) {
	//             childRoot.children[1].destroy();
	//         }
	//         const elements = this.getBody();
	//         for(let i = 0; i < elements.length; i++) {
	//             childRoot.addChild(elements[i] as EditorElement);
	//         }
	//     }
	//
	//     public onWidthChanged(newValue : number, oldValue : number) : void {
	//         console.log("Changed width");
	//     }
	//
	//     public onHeightChanged(newValue : number, oldValue : number) : void {
	//         console.log("Changed height");
	//     }
	//
	//     private getAnchorBody() : JSXElement[] {
	//         return [];
	//     }
	//
	//     private getPercentBody() : JSXElement[] {
	//         return [];
	//     }
	//
	//     private getFixedBody() : JSXElement[] {
	//         const widthChanged = (newValue : number, oldValue : number) => {
	//             this.onWidthChanged(newValue, oldValue);
	//         };
	//         const heightChanged = (newValue : number, oldValue : number) => {
	//             this.onHeightChanged(newValue, oldValue);
	//         };
	//         return [
	//             <InspectorRow label="Width">
	//                 <NumberInput value={this.component.width}/>
	//             </InspectorRow>,
	//             <InspectorRow label="Height">
	//                 <NumberInput value={this.component.height}/>
	//             </InspectorRow>
	//         ]
	//     }
	//
	//     private getFractionBody() : JSXElement[] {
	//         const widthChanged = (newValue : number, oldValue : number) => {
	//             this.onWidthChanged(newValue, oldValue);
	//         };
	//         const heightChanged = (newValue : number, oldValue : number) => {
	//             this.onHeightChanged(newValue, oldValue);
	//         };
	//         return [
	//             <InspectorRow label="Width">
	//                 <NumberInput  value={this.component.width}/>
	//             </InspectorRow>,
	//             <InspectorRow label="Height">
	//                 <NumberInput  value={this.component.height}/>
	//             </InspectorRow>
	//         ]
	//     }
	//
	//
	//     private getBody() : JSXElement[] {
	//         switch (this.component.sizingMode) {
	//             case SizingMode.Anchor:
	//                 return this.getAnchorBody();
	//             case SizingMode.Fixed:
	//                 return this.getFixedBody();
	//             case SizingMode.Fraction:
	//                 return this.getFractionBody();
	//             case SizingMode.Percent:
	//                 return this.getPercentBody();
	//             default:
	//                 break;
	//         }
	//     }
	// } 


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const component_renderer_1 = __webpack_require__(94);
	const text_component_1 = __webpack_require__(76);
	const inspector_row_1 = __webpack_require__(90);
	const text_input_1 = __webpack_require__(88);
	const binding_1 = __webpack_require__(13);
	const number_input_1 = __webpack_require__(100);
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(135);
	const property_renderer_1 = __webpack_require__(95);
	const inspector_row_1 = __webpack_require__(90);
	const checkbox_input_1 = __webpack_require__(97);
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const property_renderer_1 = __webpack_require__(95);
	function propertyDrawer(typeToDraw) {
	    return function (target) {
	        property_renderer_1.PropertyRenderer.set(typeToDraw, target);
	    };
	}
	exports.propertyDrawer = propertyDrawer;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_renderer_1 = __webpack_require__(95);
	const color_1 = __webpack_require__(53);
	const inspector_row_1 = __webpack_require__(90);
	const inline_field_1 = __webpack_require__(137);
	const number_input_1 = __webpack_require__(100);
	const property_drawer_1 = __webpack_require__(135);
	const binding_1 = __webpack_require__(13);
	const button_1 = __webpack_require__(64);
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const horizontal_1 = __webpack_require__(96);
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(135);
	const property_renderer_1 = __webpack_require__(95);
	const util_1 = __webpack_require__(16);
	const number_input_1 = __webpack_require__(100);
	const inspector_row_1 = __webpack_require__(90);
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_renderer_1 = __webpack_require__(95);
	const property_drawer_1 = __webpack_require__(135);
	const util_1 = __webpack_require__(16);
	const inspector_row_1 = __webpack_require__(90);
	const select_input_1 = __webpack_require__(140);
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const editor_input_1 = __webpack_require__(89);
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const property_drawer_1 = __webpack_require__(135);
	const property_renderer_1 = __webpack_require__(95);
	const inspector_row_1 = __webpack_require__(90);
	const text_input_1 = __webpack_require__(88);
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
/* 142 */
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
/* 143 */
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const icon_1 = __webpack_require__(66);
	const inspector_body_1 = __webpack_require__(143);
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
/* 145 */
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
/* 146 */
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const editor_html_element_1 = __webpack_require__(19);
	const drag_action_1 = __webpack_require__(44);
	const drag_asset_item_action_1 = __webpack_require__(148);
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drag_action_1 = __webpack_require__(44);
	class DragAssetItemAction extends drag_action_1.DragAction {
	    constructor(asset) {
	        super();
	        this.asset = asset;
	    }
	}
	exports.DragAssetItemAction = DragAssetItemAction;


/***/ },
/* 149 */
/***/ function(module, exports) {

	// import {WindowColors} from "../editor/editor_theme";
	// import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
	// import {SceneTool} from "./scene/scene_tool";
	// import {AppElement, Space} from "../runtime/app_element";
	// import {SceneMetaBar} from "./scene/scene_meta_bar";
	// import {Vector2} from "../runtime/vector2";
	// import {Breakpoint, BreakpointType} from "../runtime/breakpoint";
	// import {clamp} from "../util";
	// import {DragAction} from "../editor/drag_actions/drag_action";
	// import {PrefabDragAction} from "../editor/drag_actions/prefab_drag_action";
	// import {SceneRectTool} from "./scene/rect_tool";
	// import {LayoutComponent} from "../runtime/components/layout/layout";
	//
	// export class SceneWindow extends EditorWindowElement<IWindowAttrs> {
	//
	//     private currentTool : SceneTool;
	//     private ctx : CanvasRenderingContext2D;
	//     private canvas : HTMLCanvasElement;
	//     public pixi : PIXI.WebGLRenderer;
	//     public stage : PIXI.Container;
	//     private width : number;
	//     private height : number;
	//     private dragThing : PIXI.Graphics;
	//     private frameOutline : PIXI.Graphics;
	//     private selectionOutline : PIXI.Graphics;
	//     public zoomLevel : number = 1;
	//     private panValue : Vector2;
	//     private baseYOffset : number = 12;
	//     private frameDimensions : Vector2;
	//     private isPaintQueued : boolean = false;
	//     private currentBreakpoint : BreakpointType = BreakpointType.Mobile;
	//     private scaledMousePosition : PIXI.Graphics;
	//
	//     public getBreakpoint() : BreakpointType {
	//         return this.currentBreakpoint;
	//     }
	//
	//     public setPreviewSize(breakpointType : BreakpointType) : void {
	//         this.currentBreakpoint = breakpointType;
	//         this.frameDimensions = Breakpoint.getDimensions(breakpointType);
	//         this.panValue.x = ((this.width * 0.5) - (this.frameDimensions.x * 0.5)) | 0;
	//         this.panValue.y = this.baseYOffset;
	//
	//         AppElement.Root.setPosition(this.panValue);
	//         AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);
	//
	//         this.drawFrameOutline();
	//         this.paintScene();
	//     }
	//
	//     private paintScene() : void {
	//         this.isPaintQueued = true;
	//     }
	//
	//     public onUpdated() : void {
	//         const input = EditorRuntime.getInput();
	//         if (input.isMouseInEditorElement(this.getChildRoot())) {
	//             this.zoom(input.getMouseWheelDelta().y);
	//         }
	//
	//         //todo there is probably a way not to dirty check this
	//         const clientRect = this.getDomNode().getBoundingClientRect();
	//         if (clientRect.width !== this.width || clientRect.height !== this.height) {
	//             this.width = clientRect.width;
	//             this.height = clientRect.height;
	//             const renderRootBounds = this.getChildRoot().getDomNode().getBoundingClientRect();
	//             const renderRootWidth = renderRootBounds.width;
	//             const renderRootHeight = renderRootBounds.height;
	//             this.pixi.resize(renderRootWidth, renderRootHeight);
	//             this.setPreviewSize(this.currentBreakpoint);
	//         }
	//         this.currentTool.update();
	//         // this.stage.position.set(this.panValue.x, this.panValue.y);
	//         this.paintBackground();
	//         this.drawFrameOutline();
	//         this.drawSelection();
	//         this.drawMouseScaled();
	//         this.pixi.render(this.stage);
	//     }
	//
	//     public pan(delta : Vector2) : void {
	//         if (delta.isZero()) return;
	//         this.panValue.addVector(delta);
	//         AppElement.Root.setPosition(this.panValue);
	//         AppElement.Root.setDimensions(this.frameDimensions.x, this.frameDimensions.y);
	//         this.paintScene();
	//     }
	//
	//     private zoom(zoomDelta : number) : void {
	//
	//         this.zoomLevel -= 0.05 * zoomDelta;
	//         this.zoomLevel = clamp(this.zoomLevel, 0.1, 4);
	//         // this.stage.scale.set(this.zoomLevel);
	//
	//         if (zoomDelta !== 0) {
	//             const childRootDom = this.getChildRoot().getDomNode();
	//             const appRootDom = childRootDom.firstElementChild as HTMLElement;
	//             appRootDom.style.transformOrigin = "top left";
	//             appRootDom.style.transform = "scale(" + this.zoomLevel + ")";
	//         }
	//
	//         this.paintScene();
	//     }
	//
	//     private resetZoom() : void {
	//         this.zoomLevel = 1;
	//         const width = this.width;
	//         const breakpointWidth = this.frameDimensions.x;
	//
	//         if (breakpointWidth > width) {
	//             this.zoomLevel = width / breakpointWidth;
	//             this.panValue.x = ((this.zoomLevel * breakpointWidth * 0.5) - (width * 0.5)) | 0;
	//             this.panValue.y = this.baseYOffset;
	//         }
	//
	//         this.zoom(0);
	//     }
	//
	//     private paintBackground() {
	//         this.canvas.width = this.width;
	//         this.canvas.height = this.height;
	//         this.ctx.clearRect(0, 0, this.width, this.height);
	//         this.ctx.fillStyle = WindowColors.sceneBackground;
	//         this.ctx.fillRect(0, 0, this.width, this.height);
	//         this.ctx.strokeStyle = '#FFFFFF';
	//         this.ctx.lineWidth = 0.5;
	//         this.ctx.globalAlpha = 0.2;
	//         this.ctx.beginPath();
	//         const spacing = 25;
	//         for (let i = 0; i < 100; i++) {
	//             const interval = i * spacing + 0.5;
	//             this.ctx.moveTo(0, interval);
	//             this.ctx.lineTo(this.width, interval);
	//             this.ctx.moveTo(interval, 0);
	//             this.ctx.lineTo(interval, this.height);
	//         }
	//
	//         this.ctx.closePath();
	//         this.ctx.stroke();
	//
	//     }
	//
	//     public onRendered() {
	//         //todo swap tool based on layout type of parent of selection
	//         // this.currentTool = new SceneRectTool(this);
	//         this.panValue = new Vector2();
	//         this.canvas = this.getChildBySelector('canvas').getDomNode() as HTMLCanvasElement;
	//         this.ctx = this.canvas.getContext("2d");
	//         EditorRuntime.drawScene(".scene-render-root");
	//         EditorRuntime.updateTree.add(this);
	//         PIXI.utils.skipHello();
	//         this.stage = new PIXI.Container();
	//         this.pixi = new PIXI.WebGLRenderer(256, 256, {
	//             autoResize: true,
	//             antialias:true,
	//             transparent: true,
	//             view: this.getChildById('foreground-canvas').getDomNode() as HTMLCanvasElement
	//         });
	//         this.frameOutline = new PIXI.Graphics();
	//         this.dragThing = new PIXI.Graphics();
	//         this.selectionOutline = new PIXI.Graphics();
	//         this.scaledMousePosition = new PIXI.Graphics();
	//         this.stage.addChild(this.frameOutline);
	//         this.stage.addChild(this.dragThing);
	//         this.stage.addChild(this.selectionOutline);
	//         this.stage.addChild(this.scaledMousePosition);
	//         this.pixi.render(this.stage);
	//         this.setPreviewSize(this.currentBreakpoint);
	//     }
	//
	//     public drawMouseScaled() {
	//         this.scaledMousePosition.clear();
	//         const relMP = EditorRuntime.getInput().getMouseRelativeToEditorElement(this.getChildById("foreground-canvas"));
	//         this.scaledMousePosition.lineStyle(1, 0x00FF00);
	//         this.scaledMousePosition.drawCircle(relMP.x * this.zoomLevel, relMP.y * this.zoomLevel, 5);
	//     }
	//
	//     public drawDragThing() : void {
	//         // const input = EditorRuntime.getInput();
	//         // const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
	//         // const mouseOver = Runtime.getAppElementAtPoint(mouse);
	//         //
	//         // if (mouseOver) {
	//         //     //see if we are over a layout element
	//         //     //if we are, simulate adding this to the layout at some fixed width (20px or something smallish)
	//         //     //might not need to do an actual layout
	//         //     //might get away with just shifting elements absolutely temporarily
	//         //
	//         //     //if not in a layout element -- fill the current element
	//         //     //if in layout element within some gutter amount, do fancy preview
	//         //
	//         //     this.dragThing.clear();
	//         //     this.dragThing.beginFill(0x00FF00, 0.2);
	//         //     this.dragThing.lineStyle(1, 0x00FF00);
	//         //     const position = mouseOver.getPosition();
	//         //     const layout = mouseOver.getComponent(LayoutComponent);
	//         //     if (layout) {
	//         //
	//         //     }
	//         //     else {
	//         //         //todo lerp this for sexiness
	//         //         this.dragThing.drawRect(
	//         //             position.x,
	//         //             position.y - 1,
	//         //             mouseOver.getWidth(),
	//         //             mouseOver.getHeight()
	//         //         );
	//         //     }
	//         // }
	//         // else {
	//         //     this.dragThing.clear();
	//         //     this.dragThing.beginFill(0x00FF00, 0.2);
	//         //     this.dragThing.lineStyle(1, 0x00FF00);
	//         //     this.dragThing.drawRect(mouse.x - 50, mouse.y - 25, 100, 50);
	//         // }
	//         //
	//         // this.paintScene();
	//     }
	//
	//     private drawFrameOutline() : void {
	//         this.frameOutline.clear();
	//         this.frameOutline.lineStyle(2, 0xFF00CD);
	//         this.frameOutline.drawRect(
	//             0, //this.panValue.x,
	//             0, //this.panValue.y - 1,
	//             this.frameDimensions.x,
	//             this.frameDimensions.y
	//         );
	//     }
	//
	//     public drawSelection() : void {
	//         // this.selectionOutline.clear();
	//         // const selection = EditorRuntime.getSelection();
	//         // if (!selection) return;
	//         //
	//         // const position = selection.getLocalPosition();
	//         // const w = selection.getWidth();
	//         // const h = selection.getHeight();
	//         //
	//         // this.selectionOutline.lineStyle(1, 0xFFFFFFFF);
	//         // this.selectionOutline.rotation = selection.getRotation();
	//         //
	//         // this.selectionOutline.lineStyle(1, 0x000000);
	//         // this.selectionOutline.beginFill(0x87b0f2);
	//         // this.selectionOutline.drawCircle(position.x, position.y, 5);
	//         // this.selectionOutline.drawCircle(position.x + w, position.y, 5);
	//         // this.selectionOutline.drawCircle(position.x + w, position.y + h, 5);
	//         // this.selectionOutline.drawCircle(position.x, position.y + h, 5);
	//         //
	//         // this.selectionOutline.drawCircle(position.x + (w * 0.5), position.y, 5);
	//         // this.selectionOutline.drawCircle(position.x + w, position.y + ( 0.5 * h), 5);
	//         // this.selectionOutline.drawCircle(position.x, position.y + (0.5 * h), 5);
	//         // this.selectionOutline.drawCircle(position.x + (w * 0.5), position.y + h, 5);
	//         //
	//         // this.selectionOutline.endFill();
	//         // const parent = selection.getParent();
	//         // let parentPosition : Vector2 = null;
	//         // if (parent) {
	//         //     parentPosition = selection.getParent().getPosition();
	//         // }
	//         // else {
	//         //     parentPosition = selection.getPosition();
	//         // }
	//         //this.selectionOutline.position.set(parentPosition.x, parentPosition.y);
	//     }
	//
	//     public createInitialStructure(children : any) : JSXElement {
	//         return [
	//             <SceneMetaBar/>,
	//             <canvas x-id="background-canvas" class="overlay-canvas"/>,
	//             <div x-child-root class="scene-render-root"/>,
	//             <canvas x-id="foreground-canvas" class="overlay-canvas"/>,
	//         ]
	//     }
	//
	//     @DragAction.MouseEnter(PrefabDragAction)
	//     public handleAssetDragEnter() : void {
	//         EditorRuntime.setCursor("-webkit-grabbing");
	//     }
	//
	//     @DragAction.MouseOver(PrefabDragAction)
	//     public handleAssetDragHover() : void {
	//         this.drawDragThing();
	//     }
	//
	//     @DragAction.MouseExit(PrefabDragAction)
	//     public handleAssetDragExit() : void {
	//         EditorRuntime.setCursor("default");
	//         this.dragThing.clear();
	//         this.paintScene();
	//     }
	//
	//     @DragAction.Drop(PrefabDragAction)
	//     public handleAssetDrop(action : PrefabDragAction) : void {
	//         const input = EditorRuntime.getInput();
	//         const mouse = input.getMouseRelativeToEditorElement(this.getChildRoot());
	//         const mouseOver = Runtime.getAppElementAtPoint(mouse);
	//         const appElement = action.template.create();
	//         if (mouseOver) {
	//             appElement.setParent(mouseOver);
	//             appElement.setPositionValues(0, 0, Space.Local);
	//             appElement.setDimensions(mouseOver.getWidth(), mouseOver.getHeight());
	//         }
	//         else {
	//             appElement.setParent(AppElement.Root);
	//             //todo handle pan value
	//             appElement.setPositionValues(
	//                 mouse.x - 50,
	//                 mouse.y - 25
	//             );
	//             appElement.setDimensions(100, 50);
	//         }
	//         EditorRuntime.select(appElement);
	//         this.dragThing.clear();
	//         this.paintScene();
	//     }
	//
	// }
	// //
	// // createStyleSheet(`
	// // <style>
	// //
	// // .scene-window {
	// //     overflow:hidden;
	// //     width: 100%;
	// //     height: 100%;
	// //     display: flex;
	// //     flex-direction: column;
	// //     position: relative;
	// // }
	// //
	// // .scene-render-root {
	// //     position: relative;
	// // }
	// //
	// // .overlay-canvas {
	// //     position: absolute;
	// //     top:21px; /*position under meta bar */
	// //     left:0;
	// // }
	// //
	// // </style>`); 


/***/ },
/* 150 */
/***/ function(module, exports) {

	class Stuff {
	}


/***/ },
/* 151 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class DefaultAssetImporter {
	}
	exports.DefaultAssetImporter = DefaultAssetImporter;


/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class ImageImporter {
	}
	exports.ImageImporter = ImageImporter;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const asset_1 = __webpack_require__(46);
	function AssetExtension(str) { }
	let ImageAsset = class ImageAsset extends asset_1.Asset {
	};
	ImageAsset = tslib_1.__decorate([
	    AssetExtension([".jpg", ".png", "svg"])
	], ImageAsset);
	exports.ImageAsset = ImageAsset;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(31);
	function DeserializeComponent(component, element) {
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
	        "InlinePanel": "span",
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
	        element.style.width = (payload.width | 0) + "px";
	        element.style.height = (payload.height | 0) + "px";
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
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetDimensions, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    el.style.width = (payload.width | 0) + "px";
	    el.style.height = (payload.height | 0) + "px";
	});
	BrowserRuntime.setCommandInvoker(e_command_type_1.CommandType.SetTransform, function (payload) {
	    const el = BrowserRuntime.elementIdToDomNode(payload.id);
	    if (!el)
	        return;
	    el.style.transform = payload.matrix;
	    if (payload.origin) {
	        el.style.transformOrigin = payload.origin;
	    }
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(31);
	BrowserRuntime.setCommandSerializer(e_command_type_1.CommandType.UpdateInput, function () {
	    return BrowserRuntime.getInput().serialize();
	});


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const runtime_event_1 = __webpack_require__(6);
	class AssetImported extends runtime_event_1.RuntimeEvent {
	    onAssetImported(asset) { }
	}
	exports.AssetImported = AssetImported;


/***/ },
/* 157 */
/***/ function(module, exports) {

	//
	// export class BreakpointChanged {
	//
	//     public onBreakpointChanged(breakpoint : Breakpoint) : void {}
	//
	// }


/***/ },
/* 158 */
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
/* 159 */
/***/ function(module, exports) {

	

/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(31);
	Runtime.setCommandInvoker(e_command_type_1.CommandType.UpdateInput, function (data) {
	    Runtime.getInput().deserialize(data);
	});


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const e_command_type_1 = __webpack_require__(31);
	const ui_component_1 = __webpack_require__(74);
	const ComponentCache = new Array();
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
	        parentId: appElement.getParent().id,
	        width: appElement.getWidth(),
	        height: appElement.getHeight()
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
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetDimensions, function (id) {
	    const appElement = Runtime.getAppElementById(id);
	    return { id: id, width: appElement.getWidth(), height: appElement.getHeight() };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.SetTransform, function (id) {
	    const appElement = Runtime.getAppElementById(id);
	    const m = appElement.getMatrix();
	    let str = "matrix3d(";
	    for (let i = 0; i < m.m.length - 1; i++) {
	        str += m.m[i] + ",";
	    }
	    str += m.m[15] + ")";
	    return { id: id, matrix: str }; // origin: `${pivot.x}% ${pivot.y}%` };
	});
	Runtime.setCommandSerializer(e_command_type_1.CommandType.PaintBackground, function (data) {
	    return data;
	});


/***/ },
/* 163 */
/***/ function(module, exports) {

	

/***/ },
/* 164 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const vector2_1 = __webpack_require__(17);
	const math_util_1 = __webpack_require__(18);
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
	    get m0() {
	        return this.a;
	    }
	    get m1() {
	        return this.b;
	    }
	    get m2() {
	        return 0;
	    }
	    get m3() {
	        return this.c;
	    }
	    get m4() {
	        return this.d;
	    }
	    get m5() {
	        return 0;
	    }
	    get m6() {
	        return this.tx;
	    }
	    get m7() {
	        return this.ty;
	    }
	    get m8() {
	        return 1;
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
	    scale(scale, center) {
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
	    rotate(angle, center, angleUnit = math_util_1.AngleUnit.Radians) {
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
	    invertNew(out) {
	        const a = this.a;
	        const b = this.b;
	        const c = this.c;
	        const d = this.d;
	        const tx = this.tx;
	        const ty = this.ty;
	        const det = a * d - b * c;
	        if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
	            const retn = out || new Matrix3x3();
	            retn.a = d / det;
	            retn.b = -b / det;
	            retn.c = -c / det;
	            retn.d = a / det;
	            retn.tx = (c * ty - d * tx) / det;
	            retn.ty = (b * tx - a * ty) / det;
	            return retn;
	        }
	        return null;
	    }
	    isIdentity() {
	        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1
	            && this.tx === 0 && this.ty === 0;
	    }
	    transformDirection(point) {
	        const x = point.x;
	        const y = point.y;
	        point.x = x * this.a + y * this.c;
	        point.y = x * this.b + y * this.d;
	        return point;
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
	    getTranslation(out) {
	        out = out || new vector2_1.Vector2();
	        out.x = this.tx;
	        out.y = this.ty;
	        return out;
	    }
	    getScale(out) {
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
	    copy(other) {
	        this.a = other.a;
	        this.b = other.b;
	        this.c = other.c;
	        this.d = other.d;
	        this.tx = other.tx;
	        this.ty = other.ty;
	        return this;
	    }
	    equals(other) {
	        return other.a === this.a && other.b === this.b && other.c === this.c &&
	            other.d === this.d && other.tx === this.tx && other.ty === this.ty;
	    }
	    clone(out) {
	        return (out || new Matrix3x3()).set(this.a, this.b, this.c, this.d, this.tx, this.ty);
	    }
	    static createIdentity() {
	        return new Matrix3x3();
	    }
	    static createRotation(radians, out) {
	        const result = out || new Matrix3x3();
	        const cos = Math.cos(radians);
	        const sin = Math.sin(radians);
	        result.a = cos;
	        result.b = sin;
	        result.c = -sin;
	        result.d = cos;
	        result.tx = 0;
	        result.ty = 0;
	        return result;
	    }
	    static createScale(xScale, yScale, out) {
	        const result = out || new Matrix3x3();
	        result.a = xScale;
	        result.b = 0;
	        result.d = yScale;
	        result.c = 0;
	        result.tx = 0;
	        result.ty = 0;
	        return result;
	    }
	    static createTranslation(x, y, out) {
	        const result = out || new Matrix3x3();
	        result.a = 1;
	        result.b = 0;
	        result.c = 0;
	        result.d = 1;
	        result.tx = x;
	        result.ty = y;
	        return result;
	    }
	    static multiply(mat1, mat2, out) {
	        out = out || new Matrix3x3();
	        out.copy(mat1);
	        out.multiply(mat2);
	        return out;
	    }
	}
	Matrix3x3.scratch0 = new Matrix3x3();
	Matrix3x3.scratch1 = new Matrix3x3();
	Matrix3x3.scratch2 = new Matrix3x3();
	Matrix3x3.scratch3 = new Matrix3x3();
	Matrix3x3.scratch4 = new Matrix3x3();
	exports.Matrix3x3 = Matrix3x3;


/***/ },
/* 166 */
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
/* 167 */
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
/* 168 */
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const tslib_1 = __webpack_require__(4);
	const app_element_1 = __webpack_require__(29);
	const component_1 = __webpack_require__(42);
	const util_1 = __webpack_require__(16);
	const type_1 = __webpack_require__(168);
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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const scene_tool_1 = __webpack_require__(130);
	class ScenePanTool extends scene_tool_1.SceneTool {
	    constructor() {
	        super(...arguments);
	        this.panning = false;
	    }
	    update() {
	        // const input = EditorRuntime.getInput();
	        // if(!input.isMouseInEditorElement(this.sceneBodyRoot)) {
	        //     this.panning = false;
	        //     return;
	        // }
	        // if (input.isMouseDownThisFrame()) {
	        //     this.panning = true;
	        //     this.sceneWindow.pan(input.getMouseDelta());
	        // }
	        // else if(this.panning && input.isMouseDown()) {
	        //     this.sceneWindow.pan(input.getMouseDelta());
	        // }
	        // else if(input.isMouseUp()) {
	        //     this.panning = false;
	        // }
	    }
	}
	exports.ScenePanTool = ScenePanTool;


/***/ },
/* 171 */
/***/ function(module, exports) {

	//
	// class EditorObject {
	//
	//     removeListeners()  {
	//
	//     }
	//
	// }
	//
	// class State {
	//
	//     public enter() : void {}
	//
	//     public exit() : void {}
	//
	//     public update() : void {}
	//
	//     public initialize() : void {}
	//
	//     public destroy() : void {}
	//
	//     public transition() : boolean {
	//         return true;
	//     }
	//
	// }
	//
	//
	// class DefaultStageState extends State {
	//
	//     public enter() {
	//         EditorRuntime.on(Evt_BeginDrawBox, this);
	//     }
	//
	//     @EditorEvent(Evt_BeginDrawBox)
	//
	//
	//     public update() {
	//         this.transition("elsewhere");
	//         //onEditorEvent(EventType, new Transition(StateName));
	//     }
	//
	//     public exit() {
	//
	//     }
	//
	// } 


/***/ }
/******/ ]);