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
	__webpack_require__(20);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(30);
	__webpack_require__(35);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(11);
	__webpack_require__(6);
	__webpack_require__(5);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(36);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(16);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(10);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(18);
	__webpack_require__(9);
	__webpack_require__(25);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(2);
	__webpack_require__(19);
	__webpack_require__(41);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(27);
	__webpack_require__(26);
	__webpack_require__(21);
	__webpack_require__(24);
	__webpack_require__(23);
	__webpack_require__(42);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(13);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(51);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(59);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(68);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(69);
	__webpack_require__(58);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(64);
	__webpack_require__(73);
	__webpack_require__(77);
	__webpack_require__(53);
	__webpack_require__(66);
	__webpack_require__(63);
	__webpack_require__(82);
	__webpack_require__(62);
	__webpack_require__(83);
	__webpack_require__(57);
	__webpack_require__(56);
	__webpack_require__(61);
	__webpack_require__(65);
	__webpack_require__(67);
	module.exports = __webpack_require__(60);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const runtime_1 = __webpack_require__(2);
	const element_renderer_1 = __webpack_require__(5);
	const editor_binding_element_1 = __webpack_require__(30);
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
	window.bind = function (ctx, path) {
	    return { ctx: ctx, path: path };
	};
	window.Hex = {
	    createElement: element_renderer_1.createElement,
	    Binding: editor_binding_element_1.EditorBindingElement
	};
	window.HexEnvironmentFlag |= 2;
	window.EditorRuntime = new runtime_1.EditorRuntimeImplementation();
	window.Runtime = EditorRuntime;
	function loop(delta) {
	    EditorRuntime.update(delta);
	    requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const evt_scene_loaded_event_1 = __webpack_require__(3);
	const evt_selection_changed_1 = __webpack_require__(4);
	const element_renderer_1 = __webpack_require__(5);
	const evt_window_resized_1 = __webpack_require__(16);
	const evt_app_element_created_1 = __webpack_require__(17);
	const input_1 = __webpack_require__(18);
	const _cmd_serializer_1 = __webpack_require__(19);
	const _cmd_invoker_1 = __webpack_require__(20);
	const default_sizing_component_1 = __webpack_require__(21);
	const default_layout_component_1 = __webpack_require__(26);
	const background_component_1 = __webpack_require__(27);
	const tree_1 = __webpack_require__(28);
	class UpdateNode extends tree_1.PseudoTreeNode {
	    traverse() {
	        const element = this.element;
	        if (element.isDestroyed()) {
	            return true;
	        }
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
	class EditorRuntimeImplementation extends RuntimeImpl {
	    constructor() {
	        super();
	        this.domElementIdMap = new Map();
	        this.interpreters = {};
	        this.selectedElement = null;
	        this.updateCycles = [];
	        this.input = new input_1.EditorInput();
	        this.updateTree = new tree_1.PseudoTree(UpdateNode);
	    }
	    suppressAddElement(fn) {
	        this.addElement = function () { };
	        fn();
	        this.addElement = EditorRuntimeImplementation.prototype.addElement;
	    }
	    createApplicationRoot() {
	        if (!AppElement.Root) {
	            this.suppressAddElement(() => {
	                AppElement.Root = new AppElement("__Root__");
	                this.appElementRegistry[-1] = AppElement.Root;
	                AppElement.Root.addComponent(default_layout_component_1.HorizontalStackLayout);
	                AppElement.Root.addComponent(default_sizing_component_1.DefaultSizingComponent);
	                AppElement.Root.addComponent(background_component_1.BackgroundComponent);
	            });
	        }
	    }
	    loadScene(sceneDescription) {
	        this.createApplicationRoot();
	        if (!this.scene)
	            this.scene = new Scene();
	        this.scene.load(sceneDescription);
	        const elements = sceneDescription.elements;
	        const parentMap = {};
	        this.suppressAddElement(() => {
	            const ids = Object.keys(elements);
	            for (let i = 0; i < ids.length; i++) {
	                const id = ids[i];
	                const elementDesc = elements[id];
	                const appElement = new AppElement(elementDesc.name);
	                appElement.id = parseInt(id);
	                this.appElementRegistry[id] = appElement;
	                parentMap[id] = elementDesc.parentId;
	            }
	            const appElementIds = Object.keys(this.appElementRegistry);
	            for (let i = 0; i < appElementIds.length; i++) {
	                const appElement = this.appElementRegistry[appElementIds[i]];
	                if (appElement.id === -1)
	                    continue;
	                const parentId = parentMap[appElement.id] || -1;
	                appElement.parent = this.appElementRegistry[parentId];
	                appElement.parent.children.add(appElement);
	            }
	            for (let i = 0; i < ids.length; i++) {
	                const appElement = this.appElementRegistry[ids[i]];
	                if (appElement === AppElement.Root)
	                    continue;
	                const componentDescriptors = elements[ids[i]].components;
	                this.sendCommand(0, appElement.id);
	                this.createComponents(appElement, componentDescriptors);
	            }
	        });
	        this.emit(evt_scene_loaded_event_1.SceneLoaded, this.scene);
	    }
	    createComponents(appElement, componentDescriptors) {
	        for (let i = 0; i < componentDescriptors.length; i++) {
	            const desc = componentDescriptors[i];
	            const type = Component.getComponentFromPath(desc.type);
	            if (type) {
	                const cmp = appElement.addComponent(type);
	                if (type.OnDeserialized) {
	                    type.OnDeserialized(cmp, desc.data);
	                }
	            }
	        }
	    }
	    select(newSelection) {
	        const oldSelection = this.selectedElement;
	        this.selectedElement = newSelection;
	        this.emit(evt_selection_changed_1.SelectionChanged, newSelection, oldSelection);
	    }
	    getSelection() {
	        return this.selectedElement;
	    }
	    update(timeStamp) {
	        for (let i = 0; i < this.pendingComponents.length; i++) {
	            const cmp = this.pendingComponents[i];
	            cmp.onMounted();
	        }
	        this.pendingComponents.length = 0;
	        this.updateTree.traverse();
	        for (var i = 0; i < this.updateCycles.length; i++) {
	            this.updateCycles[i].update(timeStamp);
	        }
	        const commandBuffer = this.buildCommandBuffer();
	        this.decodeCommandBuffer(commandBuffer);
	        this.input.update();
	    }
	    buildCommandBuffer() {
	        var buffer = "[";
	        for (let i = 0; i < this.commandQueue.length - 1; i++) {
	            buffer += this.buildCommandBufferSection(this.commandQueue[i]) + ",";
	        }
	        if (this.commandQueue.length > 0) {
	            const endIdx = this.commandQueue.length - 1;
	            const command = this.commandQueue[endIdx];
	            buffer += this.buildCommandBufferSection(command);
	        }
	        this.commandQueue.length = 0;
	        return buffer + "]";
	    }
	    buildCommandBufferSection(command) {
	        const serializer = _cmd_serializer_1.CommandSerializer.getSerializer(command.type);
	        return serializer.serializeCommand(this.appElementRegistry[command.elementId]);
	    }
	    decodeCommandBuffer(buffer) {
	        const elementMap = this.domElementIdMap;
	        const json = JSON.parse(buffer);
	        for (let i = 0; i < json.length; i++) {
	            const command = json[i];
	            const commandInvoker = _cmd_invoker_1.CommandInvoker.getInvoker(command.type);
	            editorGuard(() => {
	                if (commandInvoker instanceof _cmd_invoker_1.CommandInvoker) {
	                    commandInvoker.invokeCommand(command, elementMap);
	                }
	                else {
	                    console.warn("Unsure how to invokeCommand command", command);
	                }
	            });
	            runtimeGuard(() => {
	                commandInvoker.invokeCommand(command, elementMap);
	            });
	        }
	    }
	    addUpdater(updater, interval = -1) {
	        this.getUpdateCycleForInterval(interval).addUpdater(updater);
	    }
	    removeUpdater(updater) {
	        for (let i = 0; i < this.updateCycles.length; i++) {
	            const length = this.updateCycles[i].removeUpdater(updater);
	            if (length === 0) {
	                this.updateCycles.removeAt(i);
	                return;
	            }
	        }
	    }
	    addElement(appElement) {
	        this.appElementRegistry[appElement.id] = appElement;
	        this.emit(evt_app_element_created_1.AppElementCreated, appElement);
	        this.sendCommand(0, appElement.id);
	        const parent = appElement.getParent();
	        if (parent) {
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
	    drawScene(targetId) {
	        this.createApplicationRoot();
	        const root = document.querySelector("." + targetId);
	        const bounds = root.getBoundingClientRect();
	        const element = this.domElementIdMap.get(-1) || document.createElement("div");
	        element.id = "app-element-root";
	        this.domElementIdMap.set(-1, element);
	        AppElement.Root.setRect(new Rectangle(0, 0, bounds.width, bounds.height));
	        root.appendChild(element);
	    }
	    getInput() {
	        return this.input;
	    }
	    getEditorElementAtPoint(point) {
	        const dom = document.elementFromPoint(point.x, point.y);
	        return dom.__editorElement;
	    }
	    getUpdateCycleForInterval(interval) {
	        if (interval < 0)
	            interval = 0;
	        for (let i = 0; i < this.updateCycles.length; i++) {
	            if (this.updateCycles[i].interval === interval) {
	                return this.updateCycles[i];
	            }
	        }
	        const updateCycle = new UpdateCycle(interval);
	        this.updateCycles.add(updateCycle);
	        return updateCycle;
	    }
	    start(appRoot, attrs = {}) {
	        this.loadScene(__webpack_require__(29));
	        element_renderer_1.render(element_renderer_1.createElement(appRoot, attrs), document.getElementById('root'));
	        requestAnimationFrame(this.boundUpdate);
	        window.addEventListener("resize", () => {
	            this.emit(evt_window_resized_1.WindowResized, window.innerWidth, window.innerHeight);
	        });
	    }
	    decodeMessage(evt) {
	    }
	    sendCommandBuffer(buffer) {
	        debugger;
	    }
	}
	exports.EditorRuntimeImplementation = EditorRuntimeImplementation;
	class UpdateCycle {
	    constructor(interval) {
	        this.interval = interval;
	        this.lastUpdate = 0;
	        this.updaters = [];
	    }
	    update(timeStamp) {
	        if (timeStamp - this.lastUpdate > this.interval) {
	            this.lastUpdate = timeStamp;
	            for (let i = 0; i < this.updaters.length; i++) {
	                this.updaters[i].onUpdated();
	            }
	        }
	    }
	    addUpdater(updater) {
	        const idx = this.updaters.indexOf(updater);
	        if (idx === -1) {
	            this.updaters.add(updater);
	            return true;
	        }
	        return false;
	    }
	    removeUpdater(updater) {
	        const idx = this.updaters.indexOf(updater);
	        if (idx !== -1) {
	            this.updaters.splice(idx, 1);
	        }
	        return this.updaters.length;
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	class SceneLoaded {
	}
	exports.SceneLoaded = SceneLoaded;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	class SelectionChanged {
	}
	exports.SelectionChanged = SelectionChanged;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const element_attribute_1 = __webpack_require__(6);
	const editor_text_element_1 = __webpack_require__(11);
	const editor_html_element_1 = __webpack_require__(14);
	const render_context_stack_1 = __webpack_require__(15);
	const editor_element_1 = __webpack_require__(12);
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
	    retn.onStructured();
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
	    retn.onStructured();
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const attr_x_if_1 = __webpack_require__(7);
	const attr_x_if_eval_1 = __webpack_require__(10);
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
	        element.setVisible(false);
	    }
	    if (attributes['x-child-root']) {
	        context.setChildRoot(element);
	    }
	    if (attributes['x-bind-style']) {
	        const styleBindings = attributes['x-bind-style'];
	        Object.keys(styleBindings).forEach(function (key) {
	        });
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const object_pool_1 = __webpack_require__(9);
	class XIf {
	    onSpawn(element, binding) {
	        this.element = element;
	        this.ctx = binding.ctx;
	        this.invert = binding.invert;
	        this.getterFn = binding_compiler_1.createGetter(binding.path.split("."));
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
	            this.element.setVisible(value);
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
/* 8 */
/***/ function(module, exports) {

	"use strict";
	const FunctionCache = new Map();
	const GetterCache = new Map();
	const SetterCache = new Map();
	function createGetter(split) {
	    const key = "get:" + split.join(".");
	    let retn = FunctionCache.get(key);
	    if (retn)
	        return retn;
	    const body = parse(split, false);
	    const getterFn = new Function("ctx", body);
	    FunctionCache.set(key);
	    return getterFn;
	}
	exports.createGetter = createGetter;
	function createSetter(split) {
	    const key = "set:" + split.join(".");
	    let retn = FunctionCache.get(key);
	    if (retn)
	        return retn;
	    const body = parse(split, true);
	    const setterFn = new Function("ctx", "val", body);
	    FunctionCache.set(key, setterFn);
	    return setterFn;
	}
	exports.createSetter = createSetter;
	function getGetter(path) {
	    const pathString = path.join(".");
	    let retn = GetterCache.get(pathString);
	    if (retn)
	        return retn;
	    const body = genCode(path);
	    const fn = new Function("ctx", body);
	    GetterCache.set(pathString, fn);
	    return fn;
	}
	exports.getGetter = getGetter;
	function getSetter(path) {
	    const pathString = path.join(".");
	    let retn = SetterCache.get(pathString);
	    if (retn)
	        return retn;
	    const body = genCode(path, true);
	    const fn = new Function("ctx", "val", body);
	    SetterCache.set(pathString, fn);
	    return fn;
	}
	exports.getSetter = getSetter;
	function parse(split, isSetter) {
	    if (split.length === 1) {
	        return "return ctx." + split[0] + ";";
	    }
	    let str = `var $0 = ctx.${split[0]};if($0) {\n`;
	    for (let i = 1; i < split.length; i++) {
	        str += `var $${i} = $${i - 1}.${split[i]};\n`;
	        if (i !== split.length - 1) {
	            str += `if($${i}) {\n`;
	        }
	        else {
	            if (isSetter)
	                str += `$${i - 1}.${split[i]} = val;\n`;
	            else
	                str += `return $${i};\n`;
	        }
	    }
	    for (let i = 0; i < split.length - 1; i++) {
	        str += "}\n";
	    }
	    return str;
	}
	function genCode(groups, isSetter = false, varChar = 'a') {
	    let code = "";
	    if (!Array.isArray(groups)) {
	        if (isSetter) {
	            return `this.ctx.${groups} = val;`;
	        }
	        else {
	            return `return this.ctx.${groups}`;
	        }
	    }
	    if (groups.length === 1 && varChar === 'a') {
	        if (Array.isArray(groups[0])) {
	            if (isSetter) {
	                return `this.ctx.${groups[0][0]} = val;`;
	            }
	            else {
	                return `return this.ctx.${groups[0][0]}`;
	            }
	        }
	        else {
	            if (isSetter) {
	                return `this.ctx.${groups[0]} = val;`;
	            }
	            else {
	                return `return this.ctx.${groups[0]}`;
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
/* 9 */
/***/ function(module, exports) {

	"use strict";
	class BaseObjectPool {
	    constructor(type, preload = 5) {
	        this.type = type;
	        this.list = [];
	        if (preload > 0) {
	            for (let i = 0; i < preload; i++) {
	                this.list.add(new this.type());
	            }
	        }
	    }
	    getItem() {
	        return this.list.length > 0 ? this.list.pop() : new this.type();
	    }
	    despawn(item) {
	        item.onDespawn();
	        this.list.add(item);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const object_pool_1 = __webpack_require__(9);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_element_1 = __webpack_require__(12);
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
	}
	exports.EditorTextElement = EditorTextElement;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const util_1 = __webpack_require__(13);
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
	        this.childIdMap = null;
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
	    }
	    setPosition(x, y) {
	        const dom = this.getDomNode();
	        dom.style.left = x + "px";
	        dom.style.top = y + "px";
	    }
	    setRect(rect) {
	        const dom = this.getDomNode();
	        dom.style.left = rect.x + 'px';
	        dom.style.top = rect.y + 'px';
	        dom.style.width = rect.width + 'px';
	        dom.style.height = rect.height + 'px';
	    }
	    getClientBounds() {
	        return (this.htmlNode) ? this.htmlNode.getBoundingClientRect() : null;
	    }
	    addChild(child) {
	        if (this.isDescendant(child)) {
	            debugger;
	        }
	        if (child.parent) {
	            child.parent.removeChild(child);
	        }
	        child.parent = this;
	        this.children.push(child);
	        if (this.isRendered()) {
	            child.render(this.htmlNode);
	        }
	        else if (this.htmlNode) {
	            child.mount(this.htmlNode);
	        }
	    }
	    render(mountPoint) {
	        this.mount(mountPoint);
	        util_1.traverse(this, function (element) {
	            if (element.isRendered()) {
	                element.onRerendered();
	            }
	            else {
	                element.flags |= EditorElementFlags.Rendered;
	                element.onRendered();
	            }
	        });
	        util_1.traverseRootFirst(this, function (element) {
	            element.onParentRendered();
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
	                activeEvents.add(handler);
	                this.addEventListener(handler.type, handler.fn, handler.bubble);
	            }
	            pendingEvents.length = 0;
	            pendingEventMap.set(this, null);
	            activeEventMap.set(this, activeEvents);
	        }
	    }
	    removeChild(child) {
	        this.children.remove(child);
	    }
	    orphan() {
	        if (!this.isOrphaned()) {
	            this.parent.removeChild(this);
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
	    getAncestorByType(type) {
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
	        this.childRoot = element;
	        if (!this.childRoot)
	            this.childRoot = this;
	    }
	    getChildRoot() {
	        return this.childRoot;
	    }
	    hasXId(idName) {
	        const dom = this.getDomNode();
	        return dom.getAttribute("x-id") === idName;
	    }
	    hasCssClass(className) {
	        const dom = this.getDomNode();
	        return dom.classList.contains(className);
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
	        if (this.parent) {
	            if (!this.parent.isDestroyed()) {
	                this.getDomNode().remove();
	                this.parent.removeChild(this);
	            }
	        }
	        this.renderContext = null;
	        this.parent = null;
	        this.childRoot = null;
	        this.childIdMap = null;
	        this.children = null;
	    }
	    isDestroyed() {
	        return (this.flags & EditorElementFlags.Destroyed) !== 0;
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
	        return false;
	    }
	    createInitialStructure(children) {
	        return children;
	    }
	    onDestroyed() { }
	    onCreated() { }
	    onUpdated() { }
	    onRendered() { }
	    onRerendered() { }
	    onParentRendered() { }
	    onMounted() { }
	    onDisabled() { }
	    onEnabled() { }
	    onStructured() { }
	}
	exports.EditorElement = EditorElement;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
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
	    return ~~(Math.random() * 9999999 + 1);
	}
	exports.randomPositiveInteger = randomPositiveInteger;
	function titlize(input) {
	    return input.replace(/([A-Z])/g, ' $1')
	        .replace(/^./, function (str) { return str.toUpperCase(); });
	}
	exports.titlize = titlize;
	function distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py) {
	    var t;
	    if (!lineLengthSquared) {
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
	function distanceSquaredToLineSegment(lx1, ly1, lx2, ly2, px, py) {
	    var ldx = lx2 - lx1, ldy = ly2 - ly1, lineLengthSquared = ldx * ldx + ldy * ldy;
	    return distanceSquaredToLineSegment2(lx1, ly1, ldx, ldy, lineLengthSquared, px, py);
	}
	class Integer {
	}
	exports.Integer = Integer;
	class Select {
	}
	exports.Select = Select;
	class EnumSelect {
	}
	exports.EnumSelect = EnumSelect;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_element_1 = __webpack_require__(12);
	class EditorHTMLElement extends editor_element_1.EditorElement {
	    constructor(attrs, tagName = "div") {
	        super();
	        this.attrs = attrs || {};
	        this.tagName = tagName;
	    }
	    getDomData() {
	        return { tagName: this.tagName };
	    }
	    hasVisibleParentHTML() {
	        let ptr = this.parent;
	        while (ptr) {
	            if (ptr instanceof EditorHTMLElement) {
	                return ptr.isVisible;
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
	        if (domData.style) {
	            const attrStyle = this.attrs.style || "";
	            this.htmlNode.setAttribute("style", domData.style + attrStyle);
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
	        if (!this.isVisible()) {
	            this.htmlNode.classList.add("hidden");
	        }
	        return this.htmlNode;
	    }
	}
	exports.EditorHTMLElement = EditorHTMLElement;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
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
/* 16 */
/***/ function(module, exports) {

	"use strict";
	class WindowResized {
	}
	exports.WindowResized = WindowResized;


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	class AppElementCreated {
	    onAppElementCreated(appElement) { }
	}
	exports.AppElementCreated = AppElementCreated;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_element_1 = __webpack_require__(12);
	class EditorInput extends Input {
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
	        target.addEventListener("keydown", (evt) => {
	            this.keyMapCurrent[evt.keyCode] = true;
	        }, true);
	        target.addEventListener("keyup", (evt) => {
	            this.keyMapCurrent[evt.keyCode] = false;
	        }, true);
	    }
	    isMouseInEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return ((this.x > rect.left && this.x < rect.left + rect.width) &&
	            (this.y > rect.top && this.y < rect.top + rect.height));
	    }
	    getMouseRelativeToEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return new Vector2(this.x - rect.left, this.y - rect.top);
	    }
	    getMouseDownRelativeToEditorElement(element) {
	        let dom = (element instanceof editor_element_1.EditorElement) ? element.getDomNode() : element;
	        const rect = dom.getBoundingClientRect();
	        return new Vector2(this.mouseDownPosition.x - rect.left, this.mouseDownPosition.y - rect.top);
	    }
	}
	exports.EditorInput = EditorInput;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	class CommandSerializer {
	    static annotation(commandType) {
	        return function (target) {
	            CommandSerializer.setSerializer(commandType, target);
	        };
	    }
	    static setSerializer(commandType, CommandSerializerType) {
	        const current = CommandSerializer[commandType];
	        if (current) {
	            editorGuard(() => {
	                throw new Error("Duplicate command CommandSerializer registered for type: " + commandType);
	            });
	        }
	        CommandSerializer[commandType] = new CommandSerializerType();
	    }
	    static getSerializer(commandType) {
	        return CommandSerializer[commandType];
	    }
	}
	exports.CommandSerializer = CommandSerializer;
	exports.serializeCommandType = CommandSerializer.annotation;


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	class CommandInvoker {
	    static annotation(commandType) {
	        return function (target) {
	            CommandInvoker.setInvoker(commandType, target);
	        };
	    }
	    static setInvoker(commandType, CommandInvokerType) {
	        const current = CommandInvoker[commandType];
	        if (current) {
	            editorGuard(() => {
	                throw new Error("Duplicate command interpreter registered for type: " + commandType);
	            });
	        }
	        CommandInvoker[commandType] = new CommandInvokerType();
	    }
	    static getInvoker(commandType) {
	        return CommandInvoker[commandType];
	    }
	}
	exports.CommandInvoker = CommandInvoker;
	exports.invokeCommandType = CommandInvoker.annotation;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const sizing_component_1 = __webpack_require__(23);
	let DefaultSizingComponent = class DefaultSizingComponent extends sizing_component_1.SizingComponent {
	    onMounted() {
	    }
	};
	DefaultSizingComponent = tslib_1.__decorate([
	    component("Layout/Sizing/Default")
	], DefaultSizingComponent);
	exports.DefaultSizingComponent = DefaultSizingComponent;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	        return { next: verb(0), "throw": verb(1), "return": verb(2) };
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [0, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const layout_component_1 = __webpack_require__(24);
	const expose_as_1 = __webpack_require__(25);
	const util_1 = __webpack_require__(13);
	var SizingMode;
	(function (SizingMode) {
	    SizingMode[SizingMode["Fixed"] = 0] = "Fixed";
	    SizingMode[SizingMode["Percent"] = 1] = "Percent";
	    SizingMode[SizingMode["Fraction"] = 2] = "Fraction";
	    SizingMode[SizingMode["Anchor"] = 3] = "Anchor";
	})(SizingMode = exports.SizingMode || (exports.SizingMode = {}));
	let SizingComponent = class SizingComponent extends Component {
	    constructor() {
	        super(...arguments);
	        this.sizingMode = SizingMode.Fraction;
	    }
	    setLayoutRect(rect) {
	    }
	    onLayoutRectChanged(layoutRect) {
	        this.appElement.setRect(layoutRect);
	    }
	    onMounted() {
	        const layout = this.getComponentInParent(layout_component_1.LayoutComponent);
	    }
	};
	tslib_1.__decorate([
	    expose_as_1.exposeAs(util_1.EnumSelect, SizingMode)
	], SizingComponent.prototype, "sizingMode", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "percentage", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "fraction", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "width", void 0);
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Number)
	], SizingComponent.prototype, "height", void 0);
	SizingComponent = tslib_1.__decorate([
	    component("Layout/Sizing")
	], SizingComponent);
	exports.SizingComponent = SizingComponent;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const sizing_component_1 = __webpack_require__(23);
	AppElement.prototype.setRect = function (rect) {
	    this.rect = rect.clone();
	    Runtime.sendCommand(5, this.id);
	    const layoutComponent = this.getComponent(LayoutComponent);
	    const sizingComponent = this.getComponent(sizing_component_1.SizingComponent);
	    if (sizingComponent) {
	    }
	    if (layoutComponent) {
	        layoutComponent.doLayout();
	    }
	};
	class LayoutComponent extends Component {
	    constructor() {
	        super(...arguments);
	        this.layoutRect = new Rectangle();
	    }
	    doLayout() { }
	}
	exports.LayoutComponent = LayoutComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
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
	                        this.fieldMap.set(key, value);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const sizing_component_1 = __webpack_require__(23);
	const layout_component_1 = __webpack_require__(24);
	const expose_as_1 = __webpack_require__(25);
	var Axis;
	(function (Axis) {
	    Axis[Axis["Horizontal"] = 0] = "Horizontal";
	    Axis[Axis["Vertical"] = 1] = "Vertical";
	})(Axis || (Axis = {}));
	class HorizontalStackLayout extends layout_component_1.LayoutComponent {
	    constructor() {
	        super(...arguments);
	        this.sizingComponents = [];
	        this.wrap = false;
	    }
	    doLayout() {
	    }
	    onMounted() {
	        const childCount = this.appElement.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const child = this.appElement.getChildAt(i);
	            let sizing = child.getComponent(sizing_component_1.SizingComponent);
	            this.sizingComponents.add(sizing);
	        }
	    }
	    onChildAdded(appElement) {
	        if (this.appElement.getChildCount() === 0) {
	            const rect = this.appElement.getRect();
	        }
	        else {
	            this.distributeSpace();
	        }
	    }
	    onChildRemoved(child) {
	    }
	    onChildInserted(appElement, index) {
	    }
	    distributeSpace() {
	        const rect = this.appElement.getRect();
	        const width = rect.width;
	        const height = rect.height;
	        var remainingSpace = rect.width;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const sizer = this.sizingComponents[i];
	        }
	        const rects = new Array();
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const child = this.sizingComponents[i].appElement;
	            child.getComponent(sizing_component_1.SizingComponent).setLayoutRect(rects[i]);
	        }
	        debugger;
	    }
	}
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Boolean)
	], HorizontalStackLayout.prototype, "wrap", void 0);
	exports.HorizontalStackLayout = HorizontalStackLayout;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	let BackgroundComponent = class BackgroundComponent extends Component {
	    constructor() {
	        super(...arguments);
	        this.color = Color.White;
	    }
	    setColor(color) {
	        Runtime.sendCommand(11, this.appElement.id);
	        this.color = new Color(color.r, color.g, color.b, color.a);
	    }
	    getColor() {
	        return new Color(this.color.r, this.color.g, this.color.b, this.color.a);
	    }
	    static OnDeserialized(instance, json) {
	        const c = json.color;
	        instance.setColor(new Color(c.r, c.g, c.b, c.a));
	    }
	};
	BackgroundComponent = tslib_1.__decorate([
	    component("Paint/Background")
	], BackgroundComponent);
	exports.BackgroundComponent = BackgroundComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	class PseudoTree {
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
	            currentNode.items.add(item);
	            return;
	        }
	        currentNode = new this.nodeConstructor(item);
	        this.insert(currentNode);
	    }
	    remove(item) {
	        let node = this.nodeMap.get(item.element);
	        if (!node)
	            return;
	        const rootIdx = this.rootNodes.indexOf(node);
	        if (rootIdx !== -1) {
	            this.rootNodes.splice(rootIdx, 1);
	            return;
	        }
	        const parentNode = this.nodeMap.get(item.element.parent);
	        if (!parentNode)
	            return;
	        const nodeIdx = parentNode.children.indexOf(node);
	        if (nodeIdx !== -1) {
	            parentNode.children.splice(nodeIdx, 1);
	        }
	        for (let i = 0; i < node.children.length; i++) {
	            parentNode.children.add(node.children[i]);
	        }
	    }
	    insert(treeNode) {
	        this.nodeMap.set(treeNode.element, treeNode);
	        const parentTreeNode = this.findParent(treeNode);
	        if (!parentTreeNode)
	            return this.insertAtRoot(treeNode);
	        for (let i = 0; i < parentTreeNode.children.length; i++) {
	            const childNode = parentTreeNode.children[i];
	            if (PseudoTree.isDescendant(childNode.element, treeNode.element)) {
	                treeNode.children.add(childNode);
	                parentTreeNode.children.splice(i--, 1);
	            }
	        }
	        parentTreeNode.children.add(treeNode);
	    }
	    insertAtRoot(treeNode) {
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            const node = this.rootNodes[i];
	            if (PseudoTree.isDescendant(node.element, treeNode.element)) {
	                treeNode.children.add(node);
	                this.rootNodes.removeAt(i);
	            }
	        }
	        this.rootNodes.add(treeNode);
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
	exports.PseudoTree = PseudoTree;
	class PseudoTreeNode {
	    constructor(updater) {
	        this.element = updater.element;
	        this.children = [];
	        this.items = [updater];
	    }
	}
	exports.PseudoTreeNode = PseudoTreeNode;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	    elements: {
	        1: {
	            parentId: -1,
	            name: "App Root 1",
	            components: [
	                {
	                    type: "Paint/Background",
	                    data: {
	                        color: {
	                            r: 255, g: 255, b: 255, a: 1
	                        }
	                    }
	                }
	            ]
	        },
	        2: {
	            parentId: -1,
	            name: "App Root 2",
	            components: [{
	                type: "Paint/Background",
	                data: {
	                    color: {
	                        r: 255, g: 0, b: 0, a: 1
	                    }
	                }
	            }]
	        },
	        3: {
	            parentId: 2,
	            name: "Child 1",
	            components: [{
	                type: "Paint/Background",
	                data: {
	                    color: {
	                        r: 0, g: 255, b: 255, a: 1
	                    }
	                }
	            }]
	        },
	        4: {
	            parentId: 2,
	            name: "Child 2",
	            components: [{
	                type: "Paint/Background",
	                data: {
	                    color: {
	                        r: 0, g: 255, b: 0, a: 1
	                    }
	                }
	            }]
	        }

	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_element_1 = __webpack_require__(12);
	class EditorBindingElement extends editor_element_1.EditorElement {
	    constructor(ctx, path) {
	        super();
	        this.ctx = ctx;
	        this.getterFn = binding_compiler_1.getGetter(path);
	    }
	    onEnabled() {
	        if (this.textNode) {
	            EditorRuntime.addUpdater(this, 150);
	        }
	    }
	    onUpdated() {
	        const newValue = this.getterFn(this.ctx);
	        if (this.lastContent !== newValue) {
	            this.textNode.nodeValue = newValue;
	            this.lastContent = newValue;
	        }
	    }
	    onDestroyed() {
	        this.ctx = null;
	        EditorRuntime.removeUpdater(this);
	    }
	    onDisabled() {
	        EditorRuntime.removeUpdater(this);
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
	        this.onEnabled();
	    }
	    createDomNode() {
	        return document.createTextNode(this.getterFn(this.ctx));
	    }
	}
	exports.EditorBindingElement = EditorBindingElement;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_invoker_1 = __webpack_require__(20);
	let InvokeCreateCommand = class InvokeCreateCommand extends _cmd_invoker_1.CommandInvoker {
	    invokeCommand(json, elementIdMap) {
	        const el = document.createElement(json["tagName"]);
	        const id = json["id"];
	        const parentId = json["parentId"];
	        el.setAttribute("app-id", id);
	        elementIdMap.set(id, el);
	        elementIdMap.get(parentId).appendChild(el);
	    }
	};
	InvokeCreateCommand = tslib_1.__decorate([
	    _cmd_invoker_1.invokeCommandType(0)
	], InvokeCreateCommand);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_invoker_1 = __webpack_require__(20);
	let InvokePaintBackground = class InvokePaintBackground extends _cmd_invoker_1.CommandInvoker {
	    invokeCommand(json, elementIdMap) {
	        const el = elementIdMap.get(json.id);
	        const style = el.style;
	        const c = json.background.color;
	        style.background = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
	    }
	};
	InvokePaintBackground = tslib_1.__decorate([
	    _cmd_invoker_1.invokeCommandType(11)
	], InvokePaintBackground);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_invoker_1 = __webpack_require__(20);
	let InvokeResizeRect = class InvokeResizeRect extends _cmd_invoker_1.CommandInvoker {
	    invokeCommand(json, elementIdMap) {
	        const el = elementIdMap.get(json.id);
	        const rect = json.rect;
	        const style = el.style;
	        style.width = rect.width + "px";
	        style.height = rect.height + "px";
	    }
	};
	InvokeResizeRect = tslib_1.__decorate([
	    _cmd_invoker_1.invokeCommandType(6)
	], InvokeResizeRect);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_invoker_1 = __webpack_require__(20);
	let InvokeSetRect = class InvokeSetRect extends _cmd_invoker_1.CommandInvoker {
	    invokeCommand(json, elementIdMap) {
	        const el = elementIdMap.get(json.id);
	        const rect = json.rect;
	        const style = el.style;
	        style.top = (rect.y | 0) + "px";
	        style.left = (rect.x | 0) + "px";
	        style.width = (rect.width | 0) + "px";
	        style.height = (rect.height | 0) + "px";
	    }
	};
	InvokeSetRect = tslib_1.__decorate([
	    _cmd_invoker_1.invokeCommandType(5)
	], InvokeSetRect);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_html_element_1 = __webpack_require__(14);
	class EditorCustomElement extends editor_html_element_1.EditorHTMLElement {
	}
	exports.EditorCustomElement = EditorCustomElement;


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	class BreakpointChanged {
	    onBreakpointChanged(breakpoint) { }
	}
	exports.BreakpointChanged = BreakpointChanged;


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	exports.WindowColors = {
	    backgroundGrey: "#A2A2A2",
	    borderGrey: "#828282",
	    foregroundGrey: "#C2C2C2",
	    selectedTabBodyGrey: "#E4E4E4",
	    selectedTabBorderGrey: "#858585",
	    sceneBackground: "#5D5D5D"
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	class XBind {
	    constructor(element, binding) {
	        this.element = element;
	        this.ctx = binding.ctx;
	        this.getterFn = binding_compiler_1.createGetter(binding.path.split("."));
	        EditorRuntime.addUpdater(this, 200);
	    }
	    onUpdated() {
	        if (this.element.isDestroyed) {
	            EditorRuntime.removeUpdater(this);
	            this.element = null;
	            this.getterFn = null;
	        }
	        else if (this.element.isRendered) {
	            var value = this.getterFn(this.ctx);
	        }
	    }
	}
	exports.XBind = XBind;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const property_renderer_1 = __webpack_require__(40);
	function propertyDrawer(typeToDraw) {
	    return function (target) {
	        property_renderer_1.PropertyRenderer.set(typeToDraw, target);
	    };
	}
	exports.propertyDrawer = propertyDrawer;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const editor_custom_element_1 = __webpack_require__(35);
	const element_renderer_1 = __webpack_require__(5);
	class PropertyRenderer extends editor_custom_element_1.EditorCustomElement {
	    createInitialStructure(children) {
	        return children;
	    }
	    static set(type, renderer) {
	        PropertyRenderer.RendererMap.set(type, renderer);
	    }
	    static get(component, editorData, attrs = null) {
	        const rendererType = PropertyRenderer.RendererMap.get(editorData.propertyType);
	        return element_renderer_1.createElement(rendererType, tslib_1.__assign({ component, editorData }, attrs));
	    }
	}
	PropertyRenderer.RendererMap = new Map();
	exports.PropertyRenderer = PropertyRenderer;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_serializer_1 = __webpack_require__(19);
	const ui_component_1 = __webpack_require__(42);
	let SerializeCreateCommand = class SerializeCreateCommand extends _cmd_serializer_1.CommandSerializer {
	    serializeCommand(appElement) {
	        const retn = {};
	        const uiComponent = appElement.getComponent(ui_component_1.UIComponent);
	        if (uiComponent) {
	            retn.tagName = "div";
	        }
	        else {
	            retn.tagName = "div";
	        }
	        const parent = appElement.getParent();
	        retn.id = appElement.id;
	        retn.parentId = parent.id;
	        retn.type = 0;
	        return JSON.stringify(retn);
	    }
	};
	SerializeCreateCommand = tslib_1.__decorate([
	    _cmd_serializer_1.serializeCommandType(0)
	], SerializeCreateCommand);


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	class UIComponent extends Component {
	}
	exports.UIComponent = UIComponent;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_serializer_1 = __webpack_require__(19);
	const background_component_1 = __webpack_require__(27);
	let SerializePaintBackgroundCommand = class SerializePaintBackgroundCommand extends _cmd_serializer_1.CommandSerializer {
	    serializeCommand(appElement) {
	        const retn = {};
	        const background = appElement.getComponent(background_component_1.BackgroundComponent);
	        const color = background.color;
	        retn.background = {
	            color: { r: color.r, g: color.g, b: color.b, a: color.a }
	        };
	        retn.id = appElement.id;
	        retn.type = 11;
	        return JSON.stringify(retn);
	    }
	};
	SerializePaintBackgroundCommand = tslib_1.__decorate([
	    _cmd_serializer_1.serializeCommandType(11)
	], SerializePaintBackgroundCommand);


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const _cmd_serializer_1 = __webpack_require__(19);
	let SerializeSetRectCommand = class SerializeSetRectCommand extends _cmd_serializer_1.CommandSerializer {
	    serializeCommand(appElement) {
	        if (!appElement)
	            return "";
	        const rect = appElement.rect;
	        return JSON.stringify({
	            id: appElement.id,
	            type: 5,
	            rect: {
	                x: rect.x,
	                y: rect.y,
	                width: rect.width,
	                height: rect.height
	            }
	        });
	    }
	};
	SerializeSetRectCommand = tslib_1.__decorate([
	    _cmd_serializer_1.serializeCommandType(5)
	], SerializeSetRectCommand);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class Button extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return {
	            tagName: "button",
	            classList: "btn " + this.getButtonSize() + this.getButtonType()
	        };
	    }
	    getButtonSize() {
	        return " btn-" + (this.attrs.size || "default");
	    }
	    getButtonType() {
	        return " btn-" + (this.attrs.size || "primary");
	    }
	}
	exports.Button = Button;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class HorizontalBase extends editor_custom_element_1.EditorCustomElement {
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
/* 47 */
/***/ function(module, exports) {

	"use strict";
	class ReferenceTreeNode {
	    constructor(updater) {
	        this.children = [];
	        this.element = updater.element;
	        this.children = [];
	        this.updaters = [updater];
	    }
	    traverse() { }
	}
	exports.ReferenceTreeNode = ReferenceTreeNode;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const update_tree_node_1 = __webpack_require__(47);
	class UpdateTree {
	    constructor() {
	        this.nodeMap = new Map();
	        this.rootNodes = [];
	    }
	    traverse() {
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            this.rootNodes[i].traverse();
	        }
	    }
	    add(updater) {
	        let currentNode = this.nodeMap.get(updater.element);
	        if (currentNode) {
	            currentNode.updaters.add(updater);
	            return;
	        }
	        currentNode = new update_tree_node_1.ReferenceTreeNode(updater);
	        this.insert(currentNode);
	    }
	    insert(treeNode) {
	        const parentTreeNode = this.findParent(treeNode);
	        if (!parentTreeNode)
	            return this.insertAtRoot(treeNode);
	        for (let i = 0; i < parentTreeNode.children.length; i++) {
	            const childNode = parentTreeNode.children[i];
	            if (this.isDescendant(childNode, treeNode)) {
	                treeNode.children.add(childNode);
	                parentTreeNode.children.removeAt(i--);
	            }
	        }
	    }
	    insertAtRoot(treeNode) {
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            const node = this.rootNodes[i];
	            if (this.isDescendant(node, treeNode)) {
	                treeNode.children.add(node);
	                this.rootNodes.removeAt(--i);
	            }
	        }
	        this.rootNodes.add(treeNode);
	    }
	    isDescendant(possibleChild, parent) {
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
	        let ptr = treeNode.element;
	        while (ptr) {
	            const node = this.nodeMap.get(ptr);
	            if (node)
	                return node;
	            ptr = ptr.parent;
	        }
	        return null;
	    }
	}
	exports.UpdateTree = UpdateTree;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const scene_tool_1 = __webpack_require__(50);
	class ScenePanTool extends scene_tool_1.SceneTool {
	    constructor(sceneWindow) {
	        super(sceneWindow);
	    }
	    update() {
	        const input = EditorRuntime.getInput();
	        if (input.isMouseDown()) {
	            const delta = input.getMouseDelta();
	        }
	    }
	}
	exports.ScenePanTool = ScenePanTool;


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	class SceneTool {
	    constructor(sceneWindow) {
	        this.sceneWindow = sceneWindow;
	        this.sceneBodyRoot = this.sceneWindow.getChildById("scene-window-body");
	    }
	    update() { }
	    enable() { }
	    disable() { }
	}
	exports.SceneTool = SceneTool;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const scene_tool_1 = __webpack_require__(50);
	const util_1 = __webpack_require__(13);
	var DragSide;
	(function (DragSide) {
	    DragSide[DragSide["None"] = 0] = "None";
	    DragSide[DragSide["Top"] = 1] = "Top";
	    DragSide[DragSide["Left"] = 2] = "Left";
	    DragSide[DragSide["Right"] = 3] = "Right";
	    DragSide[DragSide["Bottom"] = 4] = "Bottom";
	    DragSide[DragSide["TopRight"] = 5] = "TopRight";
	    DragSide[DragSide["TopLeft"] = 6] = "TopLeft";
	    DragSide[DragSide["BottomRight"] = 7] = "BottomRight";
	    DragSide[DragSide["BottomLeft"] = 8] = "BottomLeft";
	})(DragSide || (DragSide = {}));
	class SceneRectTool extends scene_tool_1.SceneTool {
	    constructor() {
	        super(...arguments);
	        this.draggedSide = DragSide.None;
	        this.dragRect = new Rectangle();
	    }
	    update() {
	        const input = EditorRuntime.getInput();
	        const selection = EditorRuntime.getSelection();
	        const mouse = input.getMouseRelativeToEditorElement(this.sceneBodyRoot);
	        const highlighter = this.sceneWindow.highlighter;
	        if (selection) {
	            const rect = selection.getRect();
	            highlighter.setVisible(true);
	            highlighter.setRect(rect);
	            if (input.isMouseDownThisFrame() && input.isMouseInEditorElement(this.sceneBodyRoot)) {
	                this.draggedSide = this.hitTestDragSide(mouse, rect);
	                if (this.draggedSide === DragSide.None) {
	                    const element = EditorRuntime.getAppElementAtPoint(mouse);
	                    if (element && element !== selection) {
	                        EditorRuntime.select(element);
	                    }
	                    else {
	                        EditorRuntime.select(null);
	                    }
	                }
	                return;
	            }
	            else if (input.isMouseDown()) {
	                if (this.draggedSide !== DragSide.None) {
	                    this.updateDragSide(input.getMouseDelta(), selection);
	                }
	            }
	            else if (input.isMouseUp()) {
	                this.draggedSide = DragSide.None;
	            }
	            if (this.draggedSide === DragSide.None) {
	                this.setHoverCursor(this.hitTestDragSide(mouse, rect));
	            }
	        }
	        else {
	            this.sceneWindow.setCursor('default');
	            this.draggedSide = DragSide.None;
	            highlighter.setVisible(false);
	        }
	    }
	    setHoverCursor(dragSide) {
	        switch (dragSide) {
	            case DragSide.Top:
	            case DragSide.Bottom:
	                this.sceneWindow.setCursor('ns-resize');
	                break;
	            case DragSide.Left:
	            case DragSide.Right:
	                this.sceneWindow.setCursor('ew-resize');
	                break;
	            case DragSide.TopRight:
	            case DragSide.BottomLeft:
	                this.sceneWindow.setCursor('nesw-resize');
	                break;
	            case DragSide.TopLeft:
	            case DragSide.BottomRight:
	                this.sceneWindow.setCursor('nwse-resize');
	                break;
	            default:
	                this.sceneWindow.setCursor('default');
	                break;
	        }
	    }
	    hitTestDragSide(point, bounds) {
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
	        return DragSide.None;
	    }
	    updateDragSide(delta, appElement) {
	        const rect = appElement.getRect();
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
	        appElement.setRect(rect);
	    }
	}
	exports.SceneRectTool = SceneRectTool;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	const split_pane_1 = __webpack_require__(53);
	const editor_window_frame_1 = __webpack_require__(54);
	const hierarchy_window_1 = __webpack_require__(56);
	const scene_window_1 = __webpack_require__(60);
	const inspector_window_1 = __webpack_require__(61);
	const editor_theme_1 = __webpack_require__(37);
	class EditorApplication extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "editor-application" };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(split_pane_1.SplitPane, { distribution: 0.2 },
	                Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                    Hex.createElement(hierarchy_window_1.HierarchyWindow, { title: "Hierarchy", icon: "" })),
	                Hex.createElement(split_pane_1.SplitPane, { distribution: 0.7, axis: 0 },
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const evt_window_resized_1 = __webpack_require__(16);
	const editor_custom_element_1 = __webpack_require__(35);
	const element_renderer_1 = __webpack_require__(5);
	const util_1 = __webpack_require__(13);
	class SplitPane extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
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
	    }
	    onParentRendered() {
	        this.computeDimensions();
	    }
	    onDestroyed() {
	        EditorRuntime.off(evt_window_resized_1.WindowResized, this);
	    }
	    computeDimensions() {
	        if (!this.isRendered)
	            return;
	        this.updateTotalSize();
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
	            EditorRuntime.removeUpdater(this);
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
	        return this.attrs.axis === 0;
	    }
	    startGutterDrag() {
	        EditorRuntime.addUpdater(this);
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
	        if (this.attrs.axis !== 0
	            && this.attrs.axis !== 1) {
	            this.attrs.axis = 0;
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
	        if (this.attrs.axis === 0) {
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
	    setOrSplitPane0(element, axis = 0, distribution = 0.5) {
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
	    setOrSplitPane1(element, axis = 0, distribution = 0.5) {
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
	        this.attrs.axis = 0;
	    }
	}
	exports.VerticalSplitPane = VerticalSplitPane;
	class HorizontalSplitPane extends SplitPane {
	    ensureOrientation() {
	        this.attrs.axis = 1;
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
	    cursor: ew-resize;
	    position:absolute;;
	}

	.gutter-horizontal{
	    width: 100%;
	    height: 4px;
	    min-height:4px;
	    cursor: ns-resize;
	    position:absolute;;
	}

	</style>`);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const split_pane_1 = __webpack_require__(53);
	const editor_custom_element_1 = __webpack_require__(35);
	const editor_theme_1 = __webpack_require__(37);
	const element_renderer_1 = __webpack_require__(5);
	const editor_window_tab_1 = __webpack_require__(55);
	const coverDiv = document.createElement('div');
	coverDiv.style.position = "absolute";
	coverDiv.style.zIndex = "400";
	coverDiv.style.background = "magenta";
	class WindowFrame extends editor_custom_element_1.EditorCustomElement {
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
	            EditorRuntime.removeUpdater(this);
	            const mouse = Input.getMousePosition();
	            const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
	            const windowFrame = hoverElement.getAncestorByType(WindowFrame);
	            if (windowFrame) {
	                const rect = windowFrame.getChildById("body").getClientBounds();
	                if (this.mouseOnLeft(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane0(frame, 0);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (this.mouseOnRight(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane1(frame, 0);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (this.mouseOnBottom(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane1(frame, 1);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (this === windowFrame) {
	                }
	                else {
	                    windowFrame.addExistingWindow(this.draggedWindowData);
	                }
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
	    mouseOnLeft(mouse, rect) {
	        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
	            && (mouse.x > rect.left && mouse.x < rect.left + (0.3 * rect.width));
	    }
	    mouseOnRight(mouse, rect) {
	        return (mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7))
	            && (mouse.x > rect.left + (0.7 * rect.width) && mouse.x < rect.left + rect.width);
	    }
	    mouseOnBottom(mouse, rect) {
	        return !(mouse.y > rect.top && mouse.y < rect.top + (rect.height * 0.7)) && mouse.y > rect.top;
	    }
	    addExistingWindow(windowData) {
	        const header = this.getChildById("header");
	        const body = this.getChildById("body");
	        const data = this.createWindowData(windowData.content);
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
	        EditorRuntime.addUpdater(this);
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
	    overflow:scroll;
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	const editor_theme_1 = __webpack_require__(37);
	class WindowFrameTab extends editor_custom_element_1.EditorCustomElement {
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
	    cursor: pointer;
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const button_1 = __webpack_require__(45);
	const hierarchy_item_1 = __webpack_require__(57);
	const evt_selection_changed_1 = __webpack_require__(4);
	const evt_scene_loaded_event_1 = __webpack_require__(3);
	const evt_app_element_created_1 = __webpack_require__(17);
	const element_renderer_1 = __webpack_require__(5);
	const editor_window_element_1 = __webpack_require__(59);
	const editor_theme_1 = __webpack_require__(37);
	class HierarchyWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.elementMap = new Map();
	        this.contextSelection = null;
	        this.contextMenu = null;
	        this.dragElement = null;
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
	    getHierarchyItemForElement(element) {
	        return this.elementMap.get(element);
	    }
	    onSelectionChanged(newSelection, oldSelection) {
	        if (oldSelection) {
	            const item = this.getHierarchyItemForElement(oldSelection);
	            if (item) {
	                item.setSelected(false);
	            }
	        }
	        if (newSelection) {
	            const selectedItem = this.getHierarchyItemForElement(newSelection);
	            if (selectedItem) {
	                selectedItem.setSelected(true);
	            }
	        }
	    }
	    showContextMenu(item, x, y) {
	        this.contextSelection = item;
	        this.contextMenu.setPosition(x, y);
	        this.contextMenu.setVisible(true);
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (this.dragElement) {
	            const mouse = input.getMousePosition();
	            if (input.isMouseUp()) {
	                const dropElement = EditorRuntime.getEditorElementAtPoint(mouse);
	                const item = dropElement.getFirstOfTypeUpwards(hierarchy_item_1.HierarchyItem);
	                if (item === this.dragElement) {
	                    this.dragElement = null;
	                    return;
	                }
	                if (this.dragElement.isElementInHierarchy(item.getDomNode())) {
	                    this.dragElement = null;
	                    return;
	                }
	                const spacer = dropElement.hasXId("spacer");
	                if (spacer) {
	                    const idx = item.parent.getChildIndex(item);
	                }
	                else {
	                    item.addChild(this.dragElement);
	                }
	                this.dragElement = null;
	                return;
	            }
	        }
	        else if (this.contextMenu.isVisible()) {
	            if (EditorRuntime.getInput().isMouseButtonDown(1)) {
	                const mp = EditorRuntime.getInput().getMousePosition();
	                const el = document.elementFromPoint(mp.x, mp.y);
	                if (!this.contextMenu.isElementInHierarchy(el)) {
	                    this.contextMenu.setVisible(false);
	                }
	            }
	        }
	        else if (input.isMouseDown()) {
	            const mouse = input.getMousePosition();
	            const hoverElement = EditorRuntime.getEditorElementAtPoint(mouse);
	            if (!hoverElement)
	                return;
	            this.dragElement = hoverElement.getFirstOfTypeUpwards(hierarchy_item_1.HierarchyItem);
	        }
	    }
	    onRendered() {
	        element_renderer_1.render(this.contextMenu, document.getElementById("root"));
	        EditorRuntime.on(evt_selection_changed_1.SelectionChanged, this);
	        EditorRuntime.on(evt_scene_loaded_event_1.SceneLoaded, this);
	        EditorRuntime.on(evt_app_element_created_1.AppElementCreated, this);
	        EditorRuntime.addUpdater(this);
	        this.onSceneLoaded(EditorRuntime.getScene());
	    }
	    onAppElementCreated(appElement) {
	        const item = this.createHierarchyItem(appElement);
	        if (appElement.getParent().isRoot()) {
	            this.addChild(item);
	        }
	        else {
	            const parentItem = this.elementMap.get(appElement.getParent());
	            parentItem.addChild(item);
	        }
	    }
	    onSceneLoaded(scene) {
	        const root = AppElement.Root;
	        const rootItem = this.createHierarchyItem(root);
	        this.addChild(rootItem);
	    }
	    isDragging() {
	        return Boolean(this.dragElement);
	    }
	    clearSelection() {
	        EditorRuntime.select(null);
	    }
	    addChildToContextSelection() {
	        const appElement = new AppElement("Child Element");
	        appElement.setParent(this.contextSelection);
	        const item = this.createHierarchyItem(appElement);
	        const itemParent = this.getHierarchyItemForElement(this.contextSelection);
	        itemParent.addChild(item);
	        this.contextMenu.setVisible(false);
	    }
	    destroyContextSelection() {
	        const hierarchyItem = this.getHierarchyItemForElement(this.contextSelection);
	        if (EditorRuntime.getSelection() === this.contextSelection) {
	            EditorRuntime.select(null);
	        }
	        hierarchyItem.destroy();
	        this.contextSelection.destroy();
	        this.contextSelection = null;
	        this.contextMenu.setVisible(false);
	    }
	    createNewElement() {
	        const selection = EditorRuntime.getSelection();
	        let appElement = null;
	        if (selection) {
	            appElement = new AppElement("Element", selection);
	        }
	        else {
	            appElement = new AppElement("Element");
	        }
	    }
	    createInitialStructure(children) {
	        this.contextMenu = this.createContextMenu();
	        return Hex.createElement("div", { class: "hierarchy-window-root" },
	            Hex.createElement("div", { class: "hierarchy-top-bar" },
	                Hex.createElement(button_1.Button, { class: "btn btn-xs btn-info", onClick: this.createNewElement }, "Create")),
	            Hex.createElement("div", { "x-child-root": true, class: "hierarchy-main-body", onClick: this.clearSelection }));
	    }
	    createContextMenu() {
	        return Hex.createElement("div", { "x-id": "ctx-menu", "x-hidden": true, class: "hierarchy-ctx-menu-container" },
	            Hex.createElement("ul", { class: "hierarchy-ctx-menu" },
	                Hex.createElement("li", { class: "ctx-menu-item", onClick: this.addChildToContextSelection },
	                    Hex.createElement("a", null, "Add Child")),
	                Hex.createElement("li", { class: "ctx-menu-item", onClick: this.destroyContextSelection },
	                    Hex.createElement("a", null, "Delete"))));
	    }
	}
	exports.HierarchyWindow = HierarchyWindow;
	createStyleSheet(`
	<style>


	.hierarchy-ctx-menu-container {
	    position: absolute;
	    z-index: 100;
	    min-width: 200px;
	    background: burlywood;
	    display: flex;
	    flex-direction: column;
	    color: black;
	}

	.ctx-menu-item {
	    cursor: pointer;
	}

	.hierarchy-ctx-menu {
	    width: 100%;
	    background: white;
	    padding-left: 1em;
	    list-style: none;
	    margin:0;
	    
	}

	.hierarchy-window-root {
	    display: flex;
	    flex-direction: column;
	    height: 100%;
	    width: 100%;
	}

	.hierarchy-main-body {
	    background: ${editor_theme_1.WindowColors.foregroundGrey};
	    color: black;
	    width:100%;
	}

	</style>
	`);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const icon_1 = __webpack_require__(58);
	const editor_custom_element_1 = __webpack_require__(35);
	const hierarchy_window_1 = __webpack_require__(56);
	class HierarchyItem extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "hierarchy-item" };
	    }
	    setSelected(isSelected) {
	        const node = this.getChildById("item-details");
	        node.getDomNode().classList.toggle("selected", isSelected);
	    }
	    onDestroyed() {
	        this.attrs.element = null;
	    }
	    showCreateMenu(e) {
	        const hierarchy = this.getAncestorByType(hierarchy_window_1.HierarchyWindow);
	        hierarchy.showContextMenu(this.attrs.element, e.pageX, e.pageY);
	    }
	    mouseEnterDetails() {
	        if (this.getAncestorByType(hierarchy_window_1.HierarchyWindow).isDragging()) {
	            this.getChildById("item-details").getDomNode().style.background = "blue";
	        }
	    }
	    mouseExitDetails() {
	        this.getChildById("item-details").getDomNode().style.background = null;
	    }
	    mouseEnterSpace() {
	        if (this.getAncestorByType(hierarchy_window_1.HierarchyWindow).isDragging()) {
	            this.getChildById("spacer").getDomNode().style.background = "blue";
	        }
	    }
	    mouseExitSpace() {
	        this.getChildById("spacer").getDomNode().style.background = null;
	    }
	    createInitialStructure(children) {
	        const appElement = this.attrs.element;
	        let padding = (appElement.getDepth() + 1);
	        return [
	            Hex.createElement("div", { "x-id": "item-details", class: "hierarchy-item-details", style: "padding-left:" + padding + "em", onMouseEnter: this.mouseEnterDetails, onMouseExit: this.mouseExitDetails, onClick: () => EditorRuntime.select(appElement), onRightClick: this.showCreateMenu },
	                Hex.createElement(icon_1.ToggleIcon, { class: "hierarchy-toggle", "x-hidden": true, "x-if-eval": () => appElement.getChildCount() > 0 }),
	                Hex.createElement("a", null, new Hex.Binding(appElement, ["name"]))),
	            Hex.createElement("div", { "x-id": "spacer", class: "item-insert-space", onMouseEnter: this.mouseEnterSpace, onMouseExit: this.mouseExitSpace }),
	            Hex.createElement("div", { "x-child-root": true, class: "item-children" })
	        ];
	    }
	}
	exports.HierarchyItem = HierarchyItem;
	createStyleSheet(`<style>

	.hierarchy-toggle {
	    font-size: 0.7em;
	    position: absolute;
	    left: 0.2em;
	    top: 4px;
	}    
	    
	.hierarchy-item {
	    cursor: pointer;
	}

	.hierarchy-item-details {
	    position: relative;
	}

	.item-insert-space {
	    position: absolute;
	    height: 0.2em;
	    width: 100%;
	}

	.hierarchy-item-details.selected {
	    background: #c8f8ff;
	}


	`);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class BaseIcon extends editor_custom_element_1.EditorCustomElement {
	    setIcon(iconName) {
	        const domNode = this.getDomNode();
	        domNode.classList.remove(this.getIconPrefix() + this.attrs.iconName);
	        domNode.classList.add(this.getIconPrefix() + iconName);
	        this.attrs.iconName = iconName;
	    }
	    createInitialStructure() {
	        return Hex.createElement("i", { class: this.getIconClass() + " " + this.getIconPrefix() + this.attrs.iconName });
	    }
	}
	exports.BaseIcon = BaseIcon;
	class FontIcon extends BaseIcon {
	    getIconClass() {
	        return "fa fa-lg";
	    }
	    getIconPrefix() {
	        return "fa-";
	    }
	    onMounted() {
	        this.getDomNode().style.lineHeight = "1";
	    }
	}
	exports.FontIcon = FontIcon;
	class ToggleIcon extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return {
	            tagName: "i",
	            classList: this.getClassList()
	        };
	    }
	    onMounted() {
	        const attrs = this.attrs;
	        const htmlNode = this.htmlNode;
	        let direction = attrs.direction;
	        attrs.visibilityTarget = attrs.visibilityTarget || (() => {
	            return this.renderContext.getChildRoot();
	        });
	        if (direction !== "right" && direction !== "left") {
	            attrs.direction = direction = "right";
	        }
	        htmlNode.addEventListener('click', (e) => {
	            attrs.open = !attrs.open;
	            const target = attrs.visibilityTarget();
	            target.setVisible(attrs.open);
	            if (attrs.open) {
	                htmlNode.classList.remove("fa-chevron-" + direction);
	                htmlNode.classList.add("fa-chevron-down");
	            }
	            else {
	                htmlNode.classList.remove("fa-chevron-down");
	                htmlNode.classList.add("fa-chevron-" + direction);
	            }
	            e.stopPropagation();
	        }, false);
	    }
	    getClassList() {
	        const attrs = this.attrs;
	        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);
	        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
	            this.attrs.direction = "right";
	        }
	        if (this.attrs.open) {
	            return "fa fa-chevron-down";
	        }
	        return "fa fa-chevron-" + this.attrs.direction;
	    }
	}
	exports.ToggleIcon = ToggleIcon;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class EditorWindowElement extends editor_custom_element_1.EditorCustomElement {
	}
	exports.EditorWindowElement = EditorWindowElement;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_theme_1 = __webpack_require__(37);
	const editor_window_element_1 = __webpack_require__(59);
	const rect_tool_1 = __webpack_require__(51);
	class SceneWindow extends editor_window_element_1.EditorWindowElement {
	    onUpdated() {
	        const clientRect = this.getDomNode().getBoundingClientRect();
	        if (clientRect.width !== this.width || clientRect.height !== this.height) {
	            this.width = clientRect.width;
	            this.height = clientRect.height;
	            AppElement.Root.setRect(new Rectangle(0, 0, this.width, this.height));
	            this.paint();
	        }
	        this.currentTool.update();
	    }
	    setCursor(cursorString) {
	        this.getDomNode().style.cursor = cursorString;
	    }
	    paint() {
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
	    getDomData() {
	        return { tagName: "div", classList: "scene-window-root" };
	    }
	    onRendered() {
	        this.currentTool = new rect_tool_1.SceneRectTool(this);
	        this.highlighter = this.getChildById("highlighter");
	        this.canvas = this.getChildById("canvas").getDomNode();
	        this.ctx = this.canvas.getContext("2d");
	        this.paint();
	        EditorRuntime.drawScene("scene-render-root");
	        EditorRuntime.addUpdater(this);
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("canvas", { "x-id": "canvas" }),
	            Hex.createElement("div", { "x-id": "scene-window-body", class: "scene-window-body" },
	                Hex.createElement("div", { "x-child-root": true, class: "scene-render-root" }),
	                Hex.createElement("div", { "x-id": "scene-viewport", class: "scene-viewport" }),
	                Hex.createElement("div", { "x-id": "highlighter", "x-hidden": true, class: "highlighter" },
	                    Hex.createElement("div", { "x-id": "hi-lite-top-right", class: "highlight-corner top-right" }),
	                    Hex.createElement("div", { "x-id": "hi-lite-top-left", class: "highlight-corner top-left" }),
	                    Hex.createElement("div", { "x-id": "hi-lite-bottom-right", class: "highlight-corner bottom-right" }),
	                    Hex.createElement("div", { "x-id": "hi-lite-bottom-left", class: "highlight-corner bottom-left" })))
	        ];
	    }
	}
	exports.SceneWindow = SceneWindow;
	createStyleSheet(`
	<style>

	.scene-viewport {
	position: absolute;
	    border: 1px dashed white;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}

	.highlighter {
	    position: absolute;
	    transform: translate(0, 0);
	    width: 100px;
	    height: 100px;
	    border: 1px solid lightblue;
	    top: 0;
	    left:0;
	}

	.highlight-corner {
	    position: absolute;
	    background:lightblue;
	    width: 10px;
	    height: 10px;
	    border-radius: 50%;
	    z-index: 100;
	}
	        
	.top-right {
	    top: -5px;
	    right: -5px;
	}

	.top-left{
	    top: -5px;
	    left: -5px;
	}

	.bottom-right {
	    bottom: -5px;
	    right: -5px;
	}

	.bottom-left {
	    bottom: -5px;
	    left: -5px;
	}
	        
	.break-point-bounds {
	    border: 1px dashed white;
	    position: absolute;
	    pointer-events: none;
	    height: 500px;
	    width: 200px;
	    top: 0;
	    left: 25%;
	}

	.scene-window-root {
	    width: 100%;
	    height: 100%;
	    overflow:hidden;
	    position: relative;
	}

	.scene-window-header {
	    width: 100%;
	    background: gray;
	}

	.scene-render-root {
	    position: relative;
	}

	.scene-window-body {
	    position: absolute;
	    top:0; 
	    left:0;
	    width: 100%;
	    height: 100%;
	}

	.scene-window-header .break-point-bar {
	    display:flex;
	    flex-direction: row;
	    align-content: space-between;
	    justify-content: center;
	}

	.break-point-bar > i {
	    padding-right: 0.25em;
	    cursor: pointer;
	}
	</style>`);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vertical_stack_1 = __webpack_require__(62);
	const text_input_1 = __webpack_require__(63);
	const evt_selection_changed_1 = __webpack_require__(4);
	const editor_window_element_1 = __webpack_require__(59);
	const inspector_row_1 = __webpack_require__(64);
	const component_menu_1 = __webpack_require__(65);
	const editor_theme_1 = __webpack_require__(37);
	const component_renderer_1 = __webpack_require__(68);
	class InspectorWindow extends editor_window_element_1.EditorWindowElement {
	    onSelectionChanged(newSelection, oldSelection) {
	        this.selection = newSelection;
	        this.getChildRoot().clearChildren();
	        if (!this.selection)
	            return;
	        const components = newSelection.getAllComponents();
	        for (let i = 0; i < components.length; i++) {
	            this.createComponentDrawer(components[i]);
	        }
	    }
	    onRendered() {
	        EditorRuntime.on(evt_selection_changed_1.SelectionChanged, this);
	        this.onSelectionChanged(EditorRuntime.getSelection(), null);
	    }
	    createInitialStructure(children) {
	        return Hex.createElement("div", { class: "inspector-window" },
	            Hex.createElement("div", { class: "inspector-header" },
	                Hex.createElement("div", { "x-if": { ctx: this, invert: false, path: "selection" }, class: "inspector-name-field" },
	                    Hex.createElement(inspector_row_1.InspectorRow, { label: "Name" },
	                        Hex.createElement(text_input_1.TextInput, { binding: {
	                                ctx: this,
	                                path: ["selection", "name"]
	                            } })))),
	            Hex.createElement(vertical_stack_1.Vertical, { "x-child-root": true }),
	            Hex.createElement(component_menu_1.ComponentMenu, { "x-if": { ctx: this, invert: false, path: "selection" }, "x-id": "menu" }));
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
	    overflow: scroll;
	    display:flex;
	    flex-direction:column;
	}

	.inspector-header {
	    background: ${editor_theme_1.WindowColors.foregroundGrey};
	}
	  
	</style>`);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class VerticalBase extends editor_custom_element_1.EditorCustomElement {
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(35);
	class TextInput extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	    }
	    getDomData() {
	        return {
	            tagName: "input",
	            attributes: {
	                type: "text",
	                style: "width: 100%"
	            }
	        };
	    }
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        this.setterFn = binding_compiler_1.getSetter(this.attrs.binding.path);
	        this.htmlNode.addEventListener("input", (e) => {
	            const value = this.htmlNode.value || "";
	            this.setterFn(this.ctx, value);
	            this.lastValue = value;
	        });
	    }
	    onUpdated() {
	        const value = this.getterFn(this.ctx) || "";
	        if (this.lastValue !== value) {
	            if (this.attrs.onValueChanged) {
	                this.attrs.onValueChanged(value, this.lastValue);
	            }
	            this.lastValue = value;
	            this.htmlNode.value = value;
	        }
	    }
	    onRendered() {
	        EditorRuntime.updateTree.add(this);
	    }
	}
	exports.TextInput = TextInput;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	const util_1 = __webpack_require__(13);
	class InspectorRow extends editor_custom_element_1.EditorCustomElement {
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vertical_stack_1 = __webpack_require__(62);
	const text_box_icon_1 = __webpack_require__(66);
	const button_1 = __webpack_require__(45);
	const editor_custom_element_1 = __webpack_require__(35);
	const component_option_1 = __webpack_require__(67);
	class ComponentMenu extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
	        this.showComponentSelection = false;
	    }
	    createComponentOption(componentType, componentName) {
	        return Hex.createElement(component_option_1.ComponentOption, { onClick: () => this.addComponent(componentType), label: componentName });
	    }
	    onRendered() {
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
	        return Hex.createElement("div", { class: "inspector-add-component" },
	            Hex.createElement("div", { class: "inspector-component-menu" },
	                Hex.createElement(button_1.Button, { "x-if-eval": () => !this.showComponentSelection, onClick: () => this.showComponentSelection = true }, "Add Component"),
	                Hex.createElement(vertical_stack_1.Vertical, { "x-if": { ctx: this, invert: false, path: "showComponentSelection" } },
	                    Hex.createElement(text_box_icon_1.TextBoxWithIcon, { iconName: "search", color: "grey", binding: "searchString" }),
	                    Hex.createElement(vertical_stack_1.Vertical, { "x-child-root": true }))));
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
	    width: calc(100% - 4px);
	    position: absolute;
	    display: flex;
	    flex-direction: row;
	    justify-content: center;
	}

	.inspector-component-menu .component-item {
	    cursor: pointer;
	}

	.inspector-component-menu .component-item:hover {
	    background: rgba(69,245,255,0.32);
	}

	</style>`);


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class TextBoxWithIcon extends editor_custom_element_1.EditorCustomElement {
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
	            Hex.createElement("i", { "x-id": "icon", class: "glyphicon glyphicon-" + this.attrs.iconName }),
	            Hex.createElement("input", { type: "text", class: "text-with-icon" })
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
	.inner-addon .glyphicon {
	  position: absolute;
	  padding-right: 3px;
	  padding-left: 3px;
	  padding-top: 3px;
	  pointer-events: none;
	}

	/* align icon */
	.left-addon .glyphicon  { left:  0;}
	.right-addon .glyphicon { right: 0;}

	/* add padding  */
	.left-addon input  { padding-left:  30px; }
	.right-addon input { padding-right: 30px; }

	</style>`);


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class ComponentOption extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "component-item" };
	    }
	    createInitialStructure() {
	        return this.attrs.label;
	    }
	}
	exports.ComponentOption = ComponentOption;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	const property_renderer_1 = __webpack_require__(40);
	const horizontal_1 = __webpack_require__(46);
	const icon_1 = __webpack_require__(58);
	const element_renderer_1 = __webpack_require__(5);
	const checkbox_input_1 = __webpack_require__(69);
	const util_1 = __webpack_require__(13);
	const editor_theme_1 = __webpack_require__(37);
	const expose_as_1 = __webpack_require__(25);
	class ComponentRenderer extends editor_custom_element_1.EditorCustomElement {
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
	            Hex.createElement(checkbox_input_1.CheckboxInput, { class: "enabled-input", binding: {
	                    ctx: true,
	                    path: []
	                } }),
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
	    left: 1em;
	}

	.component-renderer .component-name {
	    padding-left: 2em;
	    font-weight: 800;
	    font-size: 0.9em;
	}
	</style>`);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(35);
	class CheckboxInput extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return {
	            tagName: "input",
	            attributes: { type: "checkbox" }
	        };
	    }
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        this.setterFn = binding_compiler_1.getSetter(this.attrs.binding.path);
	        this.htmlNode.addEventListener("change", () => {
	            const value = this.htmlNode.checked;
	            this.setterFn(this.ctx, value);
	            this.lastValue = value;
	        }, true);
	    }
	    onUpdated() {
	        const value = Boolean(this.getterFn(this.ctx));
	        if (this.lastValue !== value) {
	            if (this.attrs.onValueChanged) {
	                this.attrs.onValueChanged(value, this.lastValue);
	            }
	            this.lastValue = value;
	            this.htmlNode.checked = value;
	        }
	    }
	    onRendered() {
	        EditorRuntime.addUpdater(this);
	    }
	    onDestroyed() {
	        EditorRuntime.removeUpdater(this);
	    }
	}
	exports.CheckboxInput = CheckboxInput;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class MenuItem extends editor_custom_element_1.EditorCustomElement {
	    noOp() { }
	    createInitialStructure(children) {
	        if (!this.attrs.action) {
	            this.attrs.action = this.noOp;
	        }
	        const pathSegments = this.attrs.path.split("/");
	        const menuText = pathSegments[pathSegments.length - 1];
	        const depth = pathSegments.length;
	        const menuClasses = (depth > 1) ? "sub-menu expand-left" : "sub-menu";
	        return Hex.createElement("li", { class: "menu-item", onClick: this.attrs.action },
	            Hex.createElement("a", { "x-id": "menu-text" }, menuText),
	            Hex.createElement("ul", { "x-child-root": true, class: menuClasses }, children));
	    }
	}
	exports.MenuItem = MenuItem;
	class MenuBar extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super({});
	        this.menus = {};
	    }
	    getDomData() {
	        return { tagName: "div", classList: "menu-bar" };
	    }
	    getMenuParent(tokenizedPath) {
	        if (tokenizedPath.length === 0)
	            return null;
	        const path = tokenizedPath.join('/');
	        if (this.menus[path]) {
	            return this.menus[path];
	        }
	        else {
	            return this.createMenuItem({ path: path, icon: "" });
	        }
	    }
	    createMenuItem(option) {
	        const tokenizedPath = option.path.split("/").map((s) => s.trim());
	        tokenizedPath.pop();
	        const parent = this.getMenuParent(tokenizedPath);
	        const item = Hex.createElement(MenuItem, { path: option.path, action: option.action, icon: option.icon });
	        this.menus[option.path] = item;
	        if (parent) {
	            parent.getChildRoot().addChild(item);
	        }
	        else {
	            this.getChildRoot().addChild(item);
	        }
	        return item;
	    }
	    onRendered() {
	    }
	    createInitialStructure(children) {
	        return Hex.createElement("ul", { "x-child-root": true, class: "menu-bar-root" });
	    }
	}
	exports.MenuBar = MenuBar;
	const bgColor = '#6b6b6b';
	createStyleSheet(`<style>
	.menu-bar {
	    width: 100%;
	    height: 1.5em;
	    background-color: ${bgColor};
	    display:flex;
	    flex-direction: column;
	    align-items: flex-start;
	    justify-items: center;
	}

	.menu-bar ul {
	    margin: 0 0 1em 0;
	    padding: 0;
	}

	.menu-bar-root {
	    margin-left: 1em;
	}

	.menu-bar-root > .menu-item {
	    display: inline-block;
	    color: whitesmoke;
	    padding-right: 1em;
	    text-align: start;
	}

	.sub-menu {
	    position: absolute;
	    display:none;
	    background: ${bgColor};
	    padding-left: 1em;
	    width: 200px;
	    list-style: none;
	}


	.menu-item:hover > .sub-menu {
	    display: block;
	}

	.expand-left {
	    left: 100%;
	    margin-top: -20px; /* todo -- wrong value here */
	}

	</style>`);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const button_1 = __webpack_require__(45);
	const editor_custom_element_1 = __webpack_require__(35);
	class Toolbar extends editor_custom_element_1.EditorCustomElement {
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const component_renderer_1 = __webpack_require__(68);
	const sizing_component_1 = __webpack_require__(23);
	const default_sizing_component_1 = __webpack_require__(21);
	const inspector_row_1 = __webpack_require__(64);
	const number_input_1 = __webpack_require__(73);
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
	                Hex.createElement(number_input_1.NumberInput, { onValueChanged: widthChanged, binding: {
	                        ctx: this,
	                        path: ["component", "width"]
	                    } })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Height" },
	                Hex.createElement(number_input_1.NumberInput, { onValueChanged: heightChanged, binding: {
	                        ctx: this,
	                        path: ["component", "height"]
	                    } }))
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
	                Hex.createElement(number_input_1.NumberInput, { onValueChanged: widthChanged, binding: {
	                        ctx: this,
	                        path: ["component", "width"]
	                    } })),
	            Hex.createElement(inspector_row_1.InspectorRow, { label: "Height" },
	                Hex.createElement(number_input_1.NumberInput, { onValueChanged: heightChanged, binding: {
	                        ctx: this,
	                        path: ["component", "height"]
	                    } }))
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(35);
	class NumberInput extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return {
	            tagName: "input",
	            attributes: {
	                type: "text",
	                style: "width: 100%"
	            }
	        };
	    }
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        this.setterFn = binding_compiler_1.getSetter(this.attrs.binding.path);
	        this.htmlNode.addEventListener("input", (e) => {
	            let value = this.htmlNode.value || "";
	            let parsedValue = this.formatNumber(value);
	            if (!isNaN(parsedValue)) {
	                this.setterFn(this.ctx, parsedValue);
	                if (this.attrs.onValueChanged) {
	                    this.attrs.onValueChanged(parsedValue, this.lastValue);
	                }
	                this.lastValue = parsedValue;
	            }
	        });
	        this.htmlNode.addEventListener("focusout", () => {
	            this.htmlNode.value = this.formatNumber(this.lastValue).toString();
	        });
	    }
	    onUpdated() {
	        const value = this.getterFn(this.ctx) || 0;
	        if (this.lastValue !== value) {
	            if (this.attrs.onValueChanged) {
	                this.attrs.onValueChanged(value, this.lastValue);
	            }
	            this.lastValue = value;
	            this.htmlNode.value = value;
	        }
	    }
	    onRendered() {
	        EditorRuntime.addUpdater(this);
	    }
	    onDestroyed() {
	        EditorRuntime.removeUpdater(this);
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const property_drawer_1 = __webpack_require__(39);
	const property_renderer_1 = __webpack_require__(40);
	const inspector_row_1 = __webpack_require__(64);
	const checkbox_input_1 = __webpack_require__(69);
	let BooleanRenderer = class BooleanRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: propertyName },
	            Hex.createElement(checkbox_input_1.CheckboxInput, { onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } }));
	    }
	};
	BooleanRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(Boolean)
	], BooleanRenderer);
	exports.BooleanRenderer = BooleanRenderer;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const property_drawer_1 = __webpack_require__(39);
	const property_renderer_1 = __webpack_require__(40);
	const util_1 = __webpack_require__(13);
	const number_input_1 = __webpack_require__(73);
	const inspector_row_1 = __webpack_require__(64);
	let NumberRenderer = class NumberRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const propertyName = editorData.propertyName;
	        const component = this.attrs.component;
	        let input = null;
	        if (editorData.propertyType === util_1.Integer) {
	            input = Hex.createElement(number_input_1.IntegerInput, { onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } });
	        }
	        else {
	            input = Hex.createElement(number_input_1.NumberInput, { onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } });
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const property_renderer_1 = __webpack_require__(40);
	const property_drawer_1 = __webpack_require__(39);
	const util_1 = __webpack_require__(13);
	const inspector_row_1 = __webpack_require__(64);
	const select_input_1 = __webpack_require__(77);
	let EnumSelectRenderer = class EnumSelectRenderer extends property_renderer_1.PropertyRenderer {
	    createOptions(e) {
	        const retn = new Array();
	        Object.keys(e).forEach(function (key) {
	            if (isNaN(key)) {
	                retn.add({ name: key, value: e[key] });
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
	            Hex.createElement(select_input_1.SelectInput, { class: "select-renderer", onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } }, options.map((option) => {
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
	            Hex.createElement(select_input_1.SelectInput, { class: "select-renderer", onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } }, editorData.propertyOptions[0].map((option) => {
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(35);
	class SelectInput extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	    }
	    getDomData() {
	        return { tagName: "select" };
	    }
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        this.setterFn = binding_compiler_1.getSetter(this.attrs.binding.path);
	        this.lastValue = this.getterFn(this.ctx);
	        this.htmlNode.addEventListener("change", () => {
	            const select = this.htmlNode;
	            let value = select.options[select.selectedIndex].value;
	            const target = this.children[select.selectedIndex];
	            if (target.attrs.value !== void 0) {
	                value = target.attrs.value;
	            }
	            this.setterFn(this.ctx, value);
	            const lastValue = this.lastValue;
	            this.lastValue = value;
	            if (this.attrs.onValueChanged) {
	                this.attrs.onValueChanged(value, lastValue);
	            }
	        }, true);
	    }
	    onUpdated() {
	        const value = this.getterFn(this.ctx);
	        const lastValue = this.lastValue;
	        if (this.lastValue !== value) {
	            this.lastValue = value;
	            if (this.attrs.onValueChanged) {
	                this.attrs.onValueChanged(value, lastValue);
	                if (this.isDestroyed())
	                    return;
	            }
	            for (var i = 0; i < this.children.length; i++) {
	                const child = this.children[i];
	                if (child.attrs.value === value) {
	                    this.htmlNode.selectedIndex = i;
	                    break;
	                }
	            }
	        }
	    }
	    onRendered() {
	        EditorRuntime.updateTree.add(this);
	    }
	}
	exports.SelectInput = SelectInput;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(22);
	const property_drawer_1 = __webpack_require__(39);
	const property_renderer_1 = __webpack_require__(40);
	const inspector_row_1 = __webpack_require__(64);
	const text_input_1 = __webpack_require__(63);
	let StringRenderer = class StringRenderer extends property_renderer_1.PropertyRenderer {
	    createInitialStructure(children) {
	        const editorData = this.attrs.editorData;
	        const component = this.attrs.component;
	        const propertyName = editorData.propertyName;
	        return Hex.createElement(inspector_row_1.InspectorRow, { label: editorData.propertyName },
	            Hex.createElement(text_input_1.TextInput, { onValueChanged: this.attrs.onValueChanged, binding: {
	                    ctx: component,
	                    path: [[propertyName]]
	                } }));
	    }
	};
	StringRenderer = tslib_1.__decorate([
	    property_drawer_1.propertyDrawer(String)
	], StringRenderer);
	exports.StringRenderer = StringRenderer;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const horizontal_1 = __webpack_require__(46);
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
	        padding-left: 1.8em;
	        width: 125px;
	    }
	    
	`);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class InspectorBody extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "vertical" };
	    }
	}
	exports.InspectorBody = InspectorBody;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const icon_1 = __webpack_require__(58);
	const inspector_body_1 = __webpack_require__(80);
	const editor_custom_element_1 = __webpack_require__(35);
	class InspectorHeader extends editor_custom_element_1.EditorCustomElement {
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const inline_field_1 = __webpack_require__(79);
	const number_input_1 = __webpack_require__(73);
	const horizontal_1 = __webpack_require__(46);
	const binding_compiler_1 = __webpack_require__(8);
	class Vector2Input extends horizontal_1.HorizontalBase {
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        EditorRuntime.addUpdater(this, 150);
	    }
	    onDestroyed() {
	        EditorRuntime.removeUpdater(this);
	    }
	    onUpdated() {
	        const value = this.getterFn(this.ctx) || new Vector2();
	        if (this.lastValue !== value) {
	            this.lastValue = value;
	            this.vector = value;
	        }
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(inline_field_1.InlineField, { label: "X" },
	                Hex.createElement(number_input_1.NumberInput, { binding: {
	                        ctx: this,
	                        path: ["vector", "x"]
	                    } })),
	            Hex.createElement(inline_field_1.InlineField, { label: "Y" },
	                Hex.createElement(number_input_1.NumberInput, { binding: {
	                        ctx: this,
	                        path: ["vector", "y"]
	                    } }))
	        ];
	    }
	}
	exports.Vector2Input = Vector2Input;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(35);
	class AssetWindow extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return {
	            tagName: "div", classList: "asset-window"
	        };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement("h1", null, "Hello Assets")
	        ];
	    }
	}
	exports.AssetWindow = AssetWindow;
	createStyleSheet(`
	<style>
	.asset-window {
	    width: 100%;
	    height: 100%;
	    background: mediumaquamarine;
	}
	</style>`);


/***/ }
/******/ ]);