webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(23);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(41);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(43);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(11);
	__webpack_require__(6);
	__webpack_require__(5);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(52);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(2);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(10);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(30);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(38);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(22);
	__webpack_require__(60);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(33);
	__webpack_require__(28);
	__webpack_require__(32);
	__webpack_require__(31);
	__webpack_require__(24);
	__webpack_require__(27);
	__webpack_require__(26);
	__webpack_require__(61);
	__webpack_require__(64);
	__webpack_require__(34);
	__webpack_require__(65);
	__webpack_require__(39);
	__webpack_require__(21);
	__webpack_require__(37);
	__webpack_require__(19);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(29);
	__webpack_require__(36);
	__webpack_require__(40);
	__webpack_require__(35);
	__webpack_require__(20);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(13);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(81);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(272);
	__webpack_require__(281);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(273);
	__webpack_require__(79);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(268);
	__webpack_require__(282);
	__webpack_require__(286);
	__webpack_require__(74);
	__webpack_require__(270);
	__webpack_require__(267);
	__webpack_require__(276);
	__webpack_require__(291);
	__webpack_require__(266);
	__webpack_require__(292);
	__webpack_require__(275);
	__webpack_require__(277);
	__webpack_require__(274);
	__webpack_require__(80);
	__webpack_require__(78);
	__webpack_require__(77);
	__webpack_require__(265);
	__webpack_require__(269);
	__webpack_require__(271);
	__webpack_require__(82);
	module.exports = __webpack_require__(264);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_runtime_1 = __webpack_require__(2);
	const element_renderer_1 = __webpack_require__(5);
	const editor_binding_element_1 = __webpack_require__(43);
	window.Runtime = null;
	window.HexEnvironmentFlag = 0;
	window.EmptyFunction = function () { };
	window.EditorBindingElement = editor_binding_element_1.EditorBindingElement;
	window.runtimeGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 1) !== 0)
	        fn();
	};
	window.editorGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 2) !== 0)
	        fn();
	};
	window.developmentGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 4) !== 0)
	        fn();
	};
	window.productionGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 16) !== 0)
	        fn();
	};
	window.productionGuard = function (fn) {
	    if ((window.HexEnvironmentFlag & 8) !== 0)
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
	window.Hex = {
	    createElement: element_renderer_1.createElement
	};
	window.HexEnvironmentFlag |= 2;
	window.EditorRuntime = new editor_runtime_1.EditorRuntimeImplementation();
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
	const editor_element_1 = __webpack_require__(12);
	const editor_input_1 = __webpack_require__(18);
	const _cmd_serializer_1 = __webpack_require__(22);
	const _cmd_invoker_1 = __webpack_require__(23);
	const default_sizing_component_1 = __webpack_require__(24);
	const default_layout_component_1 = __webpack_require__(31);
	const background_component_1 = __webpack_require__(32);
	const tree_1 = __webpack_require__(35);
	const runtime_1 = __webpack_require__(36);
	const app_element_1 = __webpack_require__(38);
	const scene_1 = __webpack_require__(40);
	const e_command_type_1 = __webpack_require__(34);
	const component_1 = __webpack_require__(28);
	const vector2_1 = __webpack_require__(20);
	const drag_action_1 = __webpack_require__(41);
	let mouseCache = new vector2_1.Vector2();
	class UpdateNode extends tree_1.ShadowTreeNode {
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
	class EditorRuntimeImplementation extends runtime_1.RuntimeImpl {
	    constructor() {
	        super();
	        this.domElementIdMap = new Map();
	        this.interpreters = {};
	        this.selectedElement = null;
	        this.input = new editor_input_1.EditorInput();
	        this.updateTree = new tree_1.ShadowTree(UpdateNode);
	        this.draggedAction = null;
	        this.lastEnteredElement = null;
	    }
	    suppressAddElement(fn) {
	        this.addElement = function () { };
	        fn();
	        this.addElement = EditorRuntimeImplementation.prototype.addElement;
	    }
	    createApplicationRoot() {
	        if (!app_element_1.AppElement.Root) {
	            this.suppressAddElement(() => {
	                app_element_1.AppElement.Root = new app_element_1.AppElement("__Root__");
	                this.appElementRegistry[-1] = app_element_1.AppElement.Root;
	                app_element_1.AppElement.Root.addComponent(default_layout_component_1.HorizontalStackLayout);
	                app_element_1.AppElement.Root.addComponent(default_sizing_component_1.DefaultSizingComponent);
	                app_element_1.AppElement.Root.addComponent(background_component_1.BackgroundComponent);
	            });
	        }
	    }
	    loadScene(sceneDescription) {
	        this.createApplicationRoot();
	        if (!this.scene)
	            this.scene = new scene_1.Scene();
	        this.scene.load(sceneDescription);
	        const elements = sceneDescription.elements;
	        const parentMap = {};
	        this.suppressAddElement(() => {
	            const ids = Object.keys(elements);
	            for (let i = 0; i < ids.length; i++) {
	                const id = ids[i];
	                const elementDesc = elements[id];
	                const appElement = new app_element_1.AppElement(elementDesc.name);
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
	                if (appElement === app_element_1.AppElement.Root)
	                    continue;
	                const componentDescriptors = elements[ids[i]].components;
	                this.sendCommand(e_command_type_1.CommandType.Create, appElement.id);
	                this.createComponents(appElement, componentDescriptors);
	            }
	        });
	        this.emit(evt_scene_loaded_event_1.SceneLoaded, this.scene);
	        app_element_1.AppElement.Root.getComponent(default_layout_component_1.HorizontalStackLayout).doLayout();
	    }
	    createComponents(appElement, componentDescriptors) {
	        for (let i = 0; i < componentDescriptors.length; i++) {
	            const desc = componentDescriptors[i];
	            const type = component_1.Component.getComponentFromPath(desc.type);
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
	    beginDragAction(dragAction) {
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
	        for (let i = 0; i < this.pendingComponents.length; i++) {
	            const cmp = this.pendingComponents[i];
	            cmp.onMounted();
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
	            let response;
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
	    addElement(appElement) {
	        this.appElementRegistry[appElement.id] = appElement;
	        this.emit(evt_app_element_created_1.AppElementCreated, appElement);
	        this.sendCommand(e_command_type_1.CommandType.Create, appElement.id);
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
	        const element = this.domElementIdMap.get(-1) || document.createElement("div");
	        element.id = "app-element-root";
	        this.domElementIdMap.set(-1, element);
	        root.appendChild(element);
	    }
	    getInput() {
	        return this.input;
	    }
	    getEditorElementAtPoint(point, type = null) {
	        if (!type)
	            type = editor_element_1.EditorElement;
	        const element = document.elementFromPoint(point.x, point.y).__editorElement;
	        if (!element)
	            return null;
	        return element.getAncestorByType(type, true);
	    }
	    start(appRoot, attrs = {}) {
	        this.loadScene(__webpack_require__(42));
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
	    setText(text) {
	        this.content = text;
	        this.textNode.nodeValue = text;
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
	    createDomNode() {
	        throw new Error("Not Implemented, use a subclass");
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
	    getAncestorByType(type, allowSelf = false) {
	        if (allowSelf && this instanceof type)
	            return this;
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
	    return ~~(Math.random() * Number.MAX_SAFE_INTEGER);
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
	const editor_text_element_1 = __webpack_require__(11);
	exports.InputEventAnnotationMap = new Map();
	class EditorHTMLElement extends editor_element_1.EditorElement {
	    constructor(attrs, tagName = "div") {
	        super();
	        this.element = this;
	        this.attrs = attrs || {};
	        this.tagName = tagName;
	        const proto = this.constructor.prototype;
	        const eventAnnotations = exports.InputEventAnnotationMap.get(this.constructor.prototype);
	        if (eventAnnotations) {
	            for (let i = 0; i < eventAnnotations.length; i++) {
	                const annotation = eventAnnotations[i];
	                this.addEventListener(annotation.type, (e) => {
	                    this[annotation.methodName](e);
	                    e.stopPropagation();
	                });
	            }
	        }
	    }
	    getDomData() {
	        return { tagName: this.tagName };
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
	    setText(text) {
	        const textChild = this.children[0];
	        if (!textChild) {
	            this.addChild(new editor_text_element_1.EditorTextElement(text));
	        }
	        else if (textChild instanceof editor_text_element_1.EditorTextElement) {
	            textChild.setText(text);
	        }
	        else {
	        }
	    }
	    getText() {
	        return this.htmlNode.innerText;
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
	    getChildBySelector(selector) {
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
	const input_1 = __webpack_require__(19);
	const vector2_1 = __webpack_require__(20);
	class EditorInput extends input_1.Input {
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vector2_1 = __webpack_require__(20);
	const e_mouse_state_1 = __webpack_require__(21);
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
	    copyTo(input) {
	        input.x = this.x;
	        input.y = this.y;
	        input.lastX = this.lastX;
	        input.lastY = this.lastY;
	        input.lastMouseButtonState = this.lastMouseButtonState;
	        input.mouseButtonState = this.mouseButtonState;
	        for (let i = 8; i < 222; i++) {
	            input.keyMapPrevious[i] = this.keyMapPrevious[i];
	            input.keyMapCurrent[i] = this.keyMapCurrent[i];
	        }
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
/* 20 */
/***/ function(module, exports) {

	"use strict";
	class Vector2 {
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
	    subVector(other) {
	        this.x -= other.x;
	        this.y -= other.y;
	        return this;
	    }
	    addVectorNew(other) {
	        return new Vector2(this.x + other.x, this.y + other.y);
	    }
	    subVectorNew(other) {
	        return new Vector2(this.x - other.x, this.y - other.y);
	    }
	    horizontalAngle() {
	        return Math.atan2(this.y, this.x);
	    }
	    verticalAngle() {
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
	        return new Vector2(nx, ny);
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
	        return dx * dx + dy * dy;
	    }
	    clone() {
	        return new Vector2(this.x, this.y);
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
	}
	exports.Vector2 = Vector2;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const sizing_component_1 = __webpack_require__(26);
	const component_1 = __webpack_require__(28);
	let DefaultSizingComponent = class DefaultSizingComponent extends sizing_component_1.SizingComponent {
	    onMounted() {
	    }
	};
	DefaultSizingComponent = tslib_1.__decorate([
	    component_1.component("Layout/Sizing/Default")
	], DefaultSizingComponent);
	exports.DefaultSizingComponent = DefaultSizingComponent;


/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const layout_component_1 = __webpack_require__(27);
	const expose_as_1 = __webpack_require__(30);
	const util_1 = __webpack_require__(13);
	const component_1 = __webpack_require__(28);
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
	        this.appElement.setRect(layoutRect);
	    }
	    onMounted() {
	        const layout = this.getComponentInParent(layout_component_1.LayoutComponent);
	        if (layout) {
	            layout.addSizingComponent(this);
	        }
	    }
	    onDestroyed() {
	        if (!this.appElement.isDestroyed()) {
	            const layout = this.getComponentInParent(layout_component_1.LayoutComponent);
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const sizing_component_1 = __webpack_require__(26);
	const component_1 = __webpack_require__(28);
	const rectangle_1 = __webpack_require__(29);
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
	        this.layoutRect = new rectangle_1.Rectangle();
	    }
	    doLayout() { }
	    onMounted() {
	        const childCount = this.appElement.getChildCount();
	        for (let i = 0; i < childCount; i++) {
	            const child = this.appElement.getChildAt(i);
	            let sizing = child.getComponent(sizing_component_1.SizingComponent) || new DefaultSizer(child);
	            this.sizingComponents.add(sizing);
	        }
	        this.doLayout();
	    }
	    onChildAdded(child) {
	        const sizer = child.getComponent(sizing_component_1.SizingComponent) || new DefaultSizer(child);
	        this.sizingComponents.push(sizer);
	        this.doLayout();
	    }
	    onChildRemoved(child) {
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            if (this.sizingComponents[i].appElement === child) {
	                this.sizingComponents.removeAt(i);
	                return;
	            }
	        }
	    }
	    onChildMoved(child) {
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


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	class Component {
	    getComponent(type) {
	        return this.appElement.getComponent(type);
	    }
	    getComponents(type) {
	        return this.appElement.getComponents(type);
	    }
	    getComponentInChildren(type) {
	        return this.appElement.getComponentInChildren(type);
	    }
	    getComponentsInChildren(type) {
	        return this.appElement.getComponentsInChildren(type);
	    }
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
	            Component.types.set(path, target);
	        };
	    }
	    static allowMultipleDecorator() {
	    }
	    static requireComponent() {
	    }
	    static getComponentFromPath(path) {
	        return Component.types.get(path);
	    }
	    static getComponentTypePathPairs() {
	        const retn = new Array();
	        Component.types.forEach(function (value, key) {
	            retn.push({ type: value, path: key });
	        });
	        return retn;
	    }
	}
	Component.types = new Map();
	exports.Component = Component;
	exports.allowMultiple = Component.allowMultipleDecorator;
	exports.component = Component.componentDecorator;
	exports.requireComponent = Component.requireComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	class Rectangle {
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
	        return false;
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
	}
	Rectangle.Zero = new Rectangle();
	exports.Rectangle = Rectangle;


/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const sizing_component_1 = __webpack_require__(26);
	const layout_component_1 = __webpack_require__(27);
	const expose_as_1 = __webpack_require__(30);
	const rectangle_1 = __webpack_require__(29);
	class HorizontalStackLayout extends layout_component_1.LayoutComponent {
	    constructor() {
	        super(...arguments);
	        this.totalWidth = 800;
	        this.totalHeight = 600;
	        this.wrap = false;
	    }
	    doLayout() {
	        var remainingSpace = this.totalWidth;
	        const sizings = new Array(this.sizingComponents.length);
	        let totalFractions = 0;
	        for (let i = 0; i < this.sizingComponents.length; i++) {
	            const sizer = this.sizingComponents[i];
	            if (sizer) {
	                switch (sizer.sizingMode) {
	                    case sizing_component_1.SizingMode.Percent:
	                        const percentageValue = sizer.width * 0.01;
	                        sizings[i] = (percentageValue * this.totalWidth) | 0;
	                        remainingSpace -= sizings[i];
	                        break;
	                    case sizing_component_1.SizingMode.Fraction:
	                        totalFractions++;
	                        sizings[i] = sizer.width;
	                        break;
	                    case sizing_component_1.SizingMode.Fixed:
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
	            const rect = new rectangle_1.Rectangle();
	            rect.x = allocatedSpace;
	            rect.y = 0;
	            rect.width = sizings[i];
	            rect.height = 100;
	            allocatedSpace += sizings[i];
	            this.sizingComponents[i].appElement.setRect(rect);
	        }
	    }
	}
	tslib_1.__decorate([
	    expose_as_1.exposeAs(Boolean)
	], HorizontalStackLayout.prototype, "wrap", void 0);
	exports.HorizontalStackLayout = HorizontalStackLayout;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const component_1 = __webpack_require__(28);
	const color_1 = __webpack_require__(33);
	const e_command_type_1 = __webpack_require__(34);
	let BackgroundComponent = class BackgroundComponent extends component_1.Component {
	    constructor() {
	        super(...arguments);
	        this.color = color_1.Color.White;
	    }
	    setColor(color) {
	        Runtime.sendCommand(e_command_type_1.CommandType.PaintBackground, this.appElement.id);
	        this.color = new color_1.Color(color.r, color.g, color.b, color.a);
	    }
	    getColor() {
	        return new color_1.Color(this.color.r, this.color.g, this.color.b, this.color.a);
	    }
	    static OnDeserialized(instance, json) {
	        const c = json.color;
	        instance.setColor(new color_1.Color(c.r, c.g, c.b, c.a));
	    }
	};
	BackgroundComponent = tslib_1.__decorate([
	    component_1.component("Paint/Background")
	], BackgroundComponent);
	exports.BackgroundComponent = BackgroundComponent;


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	class Color {
	    constructor(r = 0, g = 0, b = 0, a = 1) {
	        this.r = r;
	        this.g = g;
	        this.b = b;
	        this.a = a;
	    }
	}
	Color.Black = new Color(0, 0, 0, 1);
	Color.Blue = new Color(0, 0, 1, 1);
	Color.Clear = new Color(0, 0, 0, 0);
	Color.Cyan = new Color(0, 1, 1, 1);
	Color.Gray = new Color(0.5, 0.5, 0.5, 1);
	Color.Green = new Color(0, 1, 0, 1);
	Color.Magenta = new Color(1, 0, 1, 1);
	Color.Red = new Color(1, 0, 0, 1);
	Color.White = new Color(1, 1, 1, 1);
	Color.Yellow = new Color(1, 0.92, 0.016, 1);
	exports.Color = Color;


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	var CommandType;
	(function (CommandType) {
	    CommandType[CommandType["Create"] = 0] = "Create";
	    CommandType[CommandType["Destroy"] = 1] = "Destroy";
	    CommandType[CommandType["Update"] = 2] = "Update";
	    CommandType[CommandType["Move"] = 3] = "Move";
	    CommandType[CommandType["Replace"] = 4] = "Replace";
	    CommandType[CommandType["SetRect"] = 5] = "SetRect";
	    CommandType[CommandType["ResizeRect"] = 6] = "ResizeRect";
	    CommandType[CommandType["MoveRect"] = 7] = "MoveRect";
	    CommandType[CommandType["SetParent"] = 8] = "SetParent";
	    CommandType[CommandType["PaintBorder"] = 9] = "PaintBorder";
	    CommandType[CommandType["PaintOutline"] = 10] = "PaintOutline";
	    CommandType[CommandType["PaintBackground"] = 11] = "PaintBackground";
	    CommandType[CommandType["SetText"] = 12] = "SetText";
	    CommandType[CommandType["SetFont"] = 13] = "SetFont";
	    CommandType[CommandType["SetFontSize"] = 14] = "SetFontSize";
	    CommandType[CommandType["SetFontColor"] = 15] = "SetFontColor";
	})(CommandType = exports.CommandType || (exports.CommandType = {}));


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
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
	            if (ShadowTree.isDescendant(childNode.element, treeNode.element)) {
	                treeNode.children.add(childNode);
	                parentTreeNode.children.splice(i--, 1);
	            }
	        }
	        parentTreeNode.children.add(treeNode);
	    }
	    insertAtRoot(treeNode) {
	        for (let i = 0; i < this.rootNodes.length; i++) {
	            const node = this.rootNodes[i];
	            if (ShadowTree.isDescendant(node.element, treeNode.element)) {
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const event_emitter_1 = __webpack_require__(37);
	const app_element_1 = __webpack_require__(38);
	const component_1 = __webpack_require__(28);
	const e_lifecycle_flags_1 = __webpack_require__(39);
	class RuntimeImpl extends event_emitter_1.EventEmitter {
	    constructor() {
	        super();
	        this.rootElementCandidates = [];
	        this.pendingComponents = [];
	        this.appElementRegistry = {};
	        this.commandQueue = [];
	        this.boundUpdate = (delta) => {
	            this.update(delta);
	        };
	    }
	    queueLayout(layoutComponent) {
	    }
	    sendCommandBuffer(buffer) {
	        debugger;
	    }
	    decodeMessage(evt) {
	    }
	    getScene() {
	        return this.scene;
	    }
	    sendCommand(type, elementId, callback) {
	        this.commandQueue.push({ type, elementId, callback });
	    }
	    getAppElementAtPoint(point) {
	        const roots = this.scene.getRootElements();
	        for (let i = 0; i < roots.length; i++) {
	            const hit = this.appElementAtPointStep(roots[i], point);
	            if (hit) {
	                return hit;
	            }
	        }
	        return null;
	    }
	    appElementAtPointStep(test, point) {
	        if (!test.containsPoint(point))
	            return null;
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
	        this.appElementRegistry[appElement.id] = appElement;
	    }
	    addComponent(component) {
	        this.pendingComponents.push(component);
	    }
	    update(delta) {
	        if (this.rootElementCandidates.length > 0) {
	            for (let i = 0; i < this.rootElementCandidates.length; i++) {
	                const candidate = this.rootElementCandidates[i];
	                if (candidate.getParent() === app_element_1.AppElement.Root) {
	                    this.scene.addRootElement(candidate);
	                }
	            }
	            this.rootElementCandidates.length = 0;
	        }
	        if (this.pendingComponents.length > 0) {
	            for (let i = 0; i < this.pendingComponents.length; i++) {
	                const cmp = this.pendingComponents[i];
	                cmp.lifeCycleFlags = cmp.lifeCycleFlags | e_lifecycle_flags_1.LifeCycleFlag.Created;
	                cmp.onCreated();
	            }
	            for (let i = 0; i < this.pendingComponents.length; i++) {
	                const cmp = this.pendingComponents[i];
	                cmp.lifeCycleFlags = cmp.lifeCycleFlags | e_lifecycle_flags_1.LifeCycleFlag.Mounted;
	                cmp.onMounted();
	            }
	            for (let i = 0; i < this.pendingComponents.length; i++) {
	                const cmp = this.pendingComponents[i];
	                if (cmp.update !== component_1.Component.prototype.update) {
	                    this.updateComponents.push(cmp);
	                }
	                cmp.onEnabled();
	            }
	            this.pendingComponents.length = 0;
	        }
	        for (let i = 0; i < this.updateComponents.length; i++) {
	            this.updateComponents[i].update(delta);
	        }
	    }
	    getInput() {
	        return this.input;
	    }
	}
	exports.RuntimeImpl = RuntimeImpl;


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
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
	const rectangle_1 = __webpack_require__(29);
	const e_lifecycle_flags_1 = __webpack_require__(39);
	const e_command_type_1 = __webpack_require__(34);
	let idGenerator = -1;
	class AppElement {
	    constructor(name, parent = null) {
	        this.id = idGenerator++;
	        this.name = name || "App Element";
	        this.lifeCycleFlags = 0;
	        this.parent = parent || AppElement.Root;
	        this.children = [];
	        this.components = [];
	        this.rect = new rectangle_1.Rectangle();
	        Runtime.addElement(this);
	    }
	    enable() {
	    }
	    setRectValues(x, y, width, height) {
	        this.rect.x = x;
	        this.rect.y = y;
	        this.rect.width = width;
	        this.rect.height = height;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetRect, this.id);
	    }
	    setRect(rect) {
	        this.rect.x = rect.x;
	        this.rect.y = rect.y;
	        this.rect.width = rect.width;
	        this.rect.height = rect.height;
	        Runtime.sendCommand(e_command_type_1.CommandType.SetRect, this.id);
	    }
	    getRect() {
	        return this.rect.clone();
	    }
	    setParent(parent) {
	        this.parent = parent;
	        this.parent.children.push(this);
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
	        const idx = this.children.indexOf(child);
	        if (idx !== -1) {
	            child.setParent(null);
	            this.children.splice(idx, 1);
	        }
	    }
	    getDepth() {
	        if (this === AppElement.Root)
	            return 0;
	        let ptr = this.parent;
	        let depth = 0;
	        while (ptr !== AppElement.Root) {
	            depth++;
	            ptr = ptr.parent;
	        }
	        return depth;
	    }
	    addComponent(componentType) {
	        const component = new componentType();
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
	                return this.components[i];
	            }
	        }
	        return null;
	    }
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
	        for (let i = 0; i < this.components.length; i++) {
	            this.components[i].destroy();
	        }
	    }
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
	        return this.rect.containsPoint(point);
	    }
	    containsRect(rect) {
	        return this.rect.containsRectangle(rect);
	    }
	    overlapsRectangle(rect) {
	        return this.rect.overlapsRectangle(rect);
	    }
	    containsElement(appElement) {
	        return this.rect.containsRectangle(appElement.rect);
	    }
	    overlapsElement(appElement) {
	        return this.rect.overlapsRectangle(appElement.rect);
	    }
	}
	AppElement.Root = null;
	exports.AppElement = AppElement;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const app_element_1 = __webpack_require__(38);
	const component_1 = __webpack_require__(28);
	class Scene {
	    constructor() {
	        this.isRendered = false;
	        this.sceneRoots = [];
	    }
	    save() {
	    }
	    destroy() {
	    }
	    load(sceneDescription) {
	    }
	    hydrateElement(definition) {
	        const appElement = new app_element_1.AppElement(definition.name);
	        for (let j = 0; j < definition.components.length; j++) {
	            const compDesc = definition.components[j];
	            const type = component_1.Component.getComponentFromPath(compDesc.type);
	            const cmp = appElement.addComponent(type);
	        }
	        for (let k = 0; k < definition.children.length; k++) {
	            this.hydrateElement(definition.children[k]).setParent(appElement);
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
	}
	exports.Scene = Scene;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	const DragAnnotationMap = new Map();
	class DragAction {
	    onDragStart() { }
	    onUpdate() { }
	    onDrop(editorElement) { }
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
	            parentId: -1,
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
	            parentId: -1,
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_element_1 = __webpack_require__(12);
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_invoker_1 = __webpack_require__(23);
	const e_command_type_1 = __webpack_require__(34);
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
	    _cmd_invoker_1.invokeCommandType(e_command_type_1.CommandType.Create)
	], InvokeCreateCommand);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_invoker_1 = __webpack_require__(23);
	const e_command_type_1 = __webpack_require__(34);
	let InvokePaintBackground = class InvokePaintBackground extends _cmd_invoker_1.CommandInvoker {
	    invokeCommand(json, elementIdMap) {
	        const el = elementIdMap.get(json.id);
	        const c = json.background.color;
	        el.style.background = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
	    }
	};
	InvokePaintBackground = tslib_1.__decorate([
	    _cmd_invoker_1.invokeCommandType(e_command_type_1.CommandType.PaintBackground)
	], InvokePaintBackground);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_invoker_1 = __webpack_require__(23);
	const e_command_type_1 = __webpack_require__(34);
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
	    _cmd_invoker_1.invokeCommandType(e_command_type_1.CommandType.ResizeRect)
	], InvokeResizeRect);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_invoker_1 = __webpack_require__(23);
	const e_command_type_1 = __webpack_require__(34);
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
	    _cmd_invoker_1.invokeCommandType(e_command_type_1.CommandType.SetRect)
	], InvokeSetRect);


/***/ },
/* 48 */
/***/ function(module, exports) {

	

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const drag_action_1 = __webpack_require__(41);
	class DragAssetItemAction extends drag_action_1.DragAction {
	    constructor(asset) {
	        super();
	        this.asset = asset;
	    }
	}
	exports.DragAssetItemAction = DragAssetItemAction;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_html_element_1 = __webpack_require__(14);
	class EditorCustomElement extends editor_html_element_1.EditorHTMLElement {
	    onMouseDown(e) { }
	    onMouseUp(e) { }
	    onMouseMove(e) { }
	    onMouseEnter(e) { }
	    onMouseExit(e) { }
	    onMouseWheel(e) { }
	    handleDragActionMouseEnter() { }
	    handleDragActionMouseOver() { }
	    handleDragActionMouseExit() { }
	    handleDragActionDrop() { }
	}
	exports.EditorCustomElement = EditorCustomElement;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_html_element_1 = __webpack_require__(14);
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


/***/ },
/* 52 */
/***/ function(module, exports) {

	

/***/ },
/* 53 */
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
/* 54 */
/***/ function(module, exports) {

	

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const property_renderer_1 = __webpack_require__(56);
	function propertyDrawer(typeToDraw) {
	    return function (target) {
	        property_renderer_1.PropertyRenderer.set(typeToDraw, target);
	    };
	}
	exports.propertyDrawer = propertyDrawer;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 57 */
/***/ function(module, exports) {

	"use strict";
	Array.prototype.add = function (item) {
	    this[this.length] = item;
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
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = 0;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const util_1 = __webpack_require__(13);
	class Asset {
	    constructor(path) {
	        this.id = util_1.randomPositiveInteger();
	        this.path = path;
	        this.pathSegments = path.split("/");
	    }
	    getName() {
	        return this.pathSegments[this.pathSegments.length - 1];
	    }
	}
	exports.Asset = Asset;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vector2_1 = __webpack_require__(20);
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
	class Breakpoint {
	    static getDimensions(name) {
	        switch (name) {
	            case BreakpointType.Mobile:
	                return new vector2_1.Vector2(375, 667);
	            case BreakpointType.Tablet:
	                return new vector2_1.Vector2(768, 1024);
	            case BreakpointType.Laptop:
	                return new vector2_1.Vector2(1280, 800);
	            case BreakpointType.Desktop:
	                return new vector2_1.Vector2(1920, 1080);
	            default:
	                return new vector2_1.Vector2(-1, -1);
	        }
	    }
	}
	exports.Breakpoint = Breakpoint;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_serializer_1 = __webpack_require__(22);
	const ui_component_1 = __webpack_require__(61);
	const e_command_type_1 = __webpack_require__(34);
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
	        retn.type = e_command_type_1.CommandType.Create;
	        return JSON.stringify(retn);
	    }
	};
	SerializeCreateCommand = tslib_1.__decorate([
	    _cmd_serializer_1.serializeCommandType(e_command_type_1.CommandType.Create)
	], SerializeCreateCommand);


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const component_1 = __webpack_require__(28);
	class UIComponent extends component_1.Component {
	}
	exports.UIComponent = UIComponent;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_serializer_1 = __webpack_require__(22);
	const background_component_1 = __webpack_require__(32);
	const e_command_type_1 = __webpack_require__(34);
	let SerializePaintBackgroundCommand = class SerializePaintBackgroundCommand extends _cmd_serializer_1.CommandSerializer {
	    serializeCommand(appElement) {
	        const retn = {};
	        const background = appElement.getComponent(background_component_1.BackgroundComponent);
	        const color = background.color;
	        retn.background = {
	            color: { r: color.r, g: color.g, b: color.b, a: color.a }
	        };
	        retn.id = appElement.id;
	        retn.type = e_command_type_1.CommandType.PaintBackground;
	        return JSON.stringify(retn);
	    }
	};
	SerializePaintBackgroundCommand = tslib_1.__decorate([
	    _cmd_serializer_1.serializeCommandType(e_command_type_1.CommandType.PaintBackground)
	], SerializePaintBackgroundCommand);


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const _cmd_serializer_1 = __webpack_require__(22);
	const e_command_type_1 = __webpack_require__(34);
	let SerializeSetRectCommand = class SerializeSetRectCommand extends _cmd_serializer_1.CommandSerializer {
	    serializeCommand(appElement) {
	        if (!appElement)
	            return "";
	        const rect = appElement.rect;
	        return JSON.stringify({
	            id: appElement.id,
	            type: e_command_type_1.CommandType.SetRect,
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
	    _cmd_serializer_1.serializeCommandType(e_command_type_1.CommandType.SetRect)
	], SerializeSetRectCommand);


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const component_1 = __webpack_require__(28);
	class TextComponent extends component_1.Component {
	    setTextAsync(text) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            return Promise.resolve(text);
	        });
	    }
	}
	exports.TextComponent = TextComponent;


/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
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
/* 66 */
/***/ function(module, exports) {

	

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_html_element_1 = __webpack_require__(14);
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const scene_tool_1 = __webpack_require__(71);
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
	            const delta = input.getMouseDelta();
	            if (delta.isZero())
	                return;
	            this.sceneWindow.pan(delta);
	        }
	        else if (this.panning && input.isMouseDown()) {
	            const delta = input.getMouseDelta();
	            if (delta.isZero())
	                return;
	            this.sceneWindow.pan(delta);
	        }
	        else if (input.isMouseUp()) {
	            this.panning = false;
	        }
	    }
	}
	exports.ScenePanTool = ScenePanTool;


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const scene_tool_1 = __webpack_require__(71);
	const util_1 = __webpack_require__(13);
	const rectangle_1 = __webpack_require__(29);
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
	        this.dragRect = new rectangle_1.Rectangle();
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
	                this.draggedSide = SceneRectTool.hitTestDragSide(mouse, rect);
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
	                this.setHoverCursor(SceneRectTool.hitTestDragSide(mouse, rect));
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	const split_pane_1 = __webpack_require__(74);
	const editor_window_frame_1 = __webpack_require__(75);
	const hierarchy_window_1 = __webpack_require__(77);
	const scene_window_1 = __webpack_require__(82);
	const inspector_window_1 = __webpack_require__(265);
	const editor_theme_1 = __webpack_require__(53);
	const asset_window_1 = __webpack_require__(274);
	class EditorApplication extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "editor-application" };
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(split_pane_1.SplitPane, { distribution: 0.2 },
	                Hex.createElement(split_pane_1.SplitPane, { axis: 1 },
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(hierarchy_window_1.HierarchyWindow, { title: "Hierarchy", icon: "" })),
	                    Hex.createElement(editor_window_frame_1.WindowFrame, null,
	                        Hex.createElement(asset_window_1.AssetWindow, { title: "Assets", icon: "" }))),
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const evt_window_resized_1 = __webpack_require__(16);
	const editor_custom_element_1 = __webpack_require__(50);
	const element_renderer_1 = __webpack_require__(5);
	const util_1 = __webpack_require__(13);
	class SplitPane extends editor_custom_element_1.EditorCustomElement {
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
	        return this.attrs.axis === 0;
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const split_pane_1 = __webpack_require__(74);
	const editor_custom_element_1 = __webpack_require__(50);
	const editor_theme_1 = __webpack_require__(53);
	const element_renderer_1 = __webpack_require__(5);
	const editor_window_tab_1 = __webpack_require__(76);
	const coverDiv = document.createElement('div');
	coverDiv.style.position = "absolute";
	coverDiv.style.zIndex = "400";
	coverDiv.style.background = "magenta";
	class WindowFrame extends editor_custom_element_1.EditorCustomElement {
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
	                    this.parentSplitPane.setOrSplitPane0(frame, 0);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (WindowFrame.mouseOnRight(mouse, rect)) {
	                    const frame = element_renderer_1.createElement(WindowFrame);
	                    this.parentSplitPane.setOrSplitPane1(frame, 0);
	                    frame.addExistingWindow(this.draggedWindowData);
	                }
	                else if (WindowFrame.mouseOnBottom(mouse, rect)) {
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	const editor_theme_1 = __webpack_require__(53);
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const button_1 = __webpack_require__(68);
	const hierarchy_item_1 = __webpack_require__(78);
	const evt_selection_changed_1 = __webpack_require__(4);
	const evt_scene_loaded_event_1 = __webpack_require__(3);
	const evt_app_element_created_1 = __webpack_require__(17);
	const element_renderer_1 = __webpack_require__(5);
	const editor_window_element_1 = __webpack_require__(81);
	const editor_theme_1 = __webpack_require__(53);
	const app_element_1 = __webpack_require__(38);
	const e_mouse_state_1 = __webpack_require__(21);
	class HierarchyWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.elementMap = new Map();
	        this.contextSelection = null;
	        this.contextMenu = null;
	        this.dragElement = null;
	    }
	    getDomData() {
	        return { tagName: "div", classList: "hierarchy-window-root" };
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
	                if (!dropElement) {
	                    this.dragElement = null;
	                    return;
	                }
	                const item = dropElement.getFirstOfTypeUpwards(hierarchy_item_1.HierarchyItem);
	                if (!item || item === this.dragElement) {
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
	            if (EditorRuntime.getInput().isMouseButtonDown(e_mouse_state_1.MouseButtonState.Left)) {
	                const mp = EditorRuntime.getInput().getMousePosition();
	                const el = document.elementFromPoint(mp.x, mp.y);
	                if (!this.contextMenu.isElementInHierarchy(el)) {
	                    this.contextMenu.setVisible(false);
	                }
	            }
	        }
	        else if (input.isMouseInEditorElement(this) && input.isMouseDown()) {
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
	        EditorRuntime.updateTree.add(this);
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
	        const root = app_element_1.AppElement.Root;
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
	        const appElement = new app_element_1.AppElement("Child Element");
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
	            appElement = new app_element_1.AppElement("Element", selection);
	        }
	        else {
	            appElement = new app_element_1.AppElement("Element");
	        }
	    }
	    createInitialStructure(children) {
	        this.contextMenu = this.createContextMenu();
	        return [
	            Hex.createElement("div", { class: "hierarchy-top-bar" },
	                Hex.createElement(button_1.Button, { class: "btn btn-xs btn-info", onClick: this.createNewElement }, "Create")),
	            Hex.createElement("div", { "x-child-root": true, class: "hierarchy-main-body", onClick: this.clearSelection })
	        ];
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const icon_1 = __webpack_require__(79);
	const editor_custom_element_1 = __webpack_require__(50);
	const hierarchy_window_1 = __webpack_require__(77);
	const hierarchy_insert_target_1 = __webpack_require__(80);
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
	    createInitialStructure(children) {
	        const appElement = this.attrs.element;
	        let padding = (appElement.getDepth() + 1);
	        return [
	            Hex.createElement("div", { "x-id": "item-details", class: "hierarchy-item-details", style: "padding-left:" + padding + "em", onMouseEnter: this.mouseEnterDetails, onMouseExit: this.mouseExitDetails, onClick: () => EditorRuntime.select(appElement), onRightClick: this.showCreateMenu },
	                Hex.createElement(icon_1.ToggleIcon, { class: "hierarchy-toggle", "x-hidden": true, "x-if-eval": () => appElement.getChildCount() > 0 }),
	                Hex.createElement("a", null,
	                    " ",
	                    new window.EditorBindingElement(appElement, ["name"]),
	                    " ")),
	            Hex.createElement(hierarchy_insert_target_1.HierarchyInsertTarget, null),
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	class BaseIcon extends editor_custom_element_1.EditorCustomElement {
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
	exports.BaseIcon = BaseIcon;
	class FontIcon extends BaseIcon {
	}
	exports.FontIcon = FontIcon;
	class ToggleIcon extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "i", classList: this.getClassList() };
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
	    getIconSize() {
	        return " icon " + (this.attrs.size || "");
	    }
	    getClassList() {
	        const attrs = this.attrs;
	        attrs.open = attrs.open === void 0 ? true : Boolean(attrs.open);
	        if (this.attrs.direction !== "right" && this.attrs.direction !== "left") {
	            this.attrs.direction = "right";
	        }
	        if (this.attrs.open) {
	            return "fa fa-chevron-down" + this.getIconSize();
	        }
	        return "fa fa-chevron-" + this.attrs.direction + this.getIconSize();
	    }
	}
	exports.ToggleIcon = ToggleIcon;
	createStyleSheet(`<style>
	    
	    .icon.small {
	        font-size: 0.7em;
	    }

	    .icon.large {
	        font-size:1.25em;
	    }
	`);


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const editor_html_element_1 = __webpack_require__(14);
	const drag_action_1 = __webpack_require__(41);
	class AppElementAssetDragAction extends drag_action_1.DragAction {
	}
	class HierarchyInsertTarget extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "hierarchy-insert-target" };
	    }
	    handleDragEnter(dragAction) {
	        this.getDomNode().style.background = "blue";
	    }
	    handleDragExit(dragAction) {
	        this.getDomNode().style.background = null;
	    }
	    handleDrop(dragAction) {
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(AppElementAssetDragAction)
	], HierarchyInsertTarget.prototype, "handleDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(AppElementAssetDragAction),
	    drag_action_1.DragAction.Drop(AppElementAssetDragAction)
	], HierarchyInsertTarget.prototype, "handleDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(AppElementAssetDragAction)
	], HierarchyInsertTarget.prototype, "handleDrop", null);
	exports.HierarchyInsertTarget = HierarchyInsertTarget;
	createStyleSheet(`<style>
	    .hierarchy-insert-target {
	        height: 0.2em;
	    }
	`);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	class EditorWindowElement extends editor_custom_element_1.EditorCustomElement {
	}
	exports.EditorWindowElement = EditorWindowElement;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const PIXI = __webpack_require__(83);
	const editor_theme_1 = __webpack_require__(53);
	const editor_window_element_1 = __webpack_require__(81);
	const app_element_1 = __webpack_require__(38);
	const scene_meta_bar_1 = __webpack_require__(264);
	const vector2_1 = __webpack_require__(20);
	const breakpoint_1 = __webpack_require__(59);
	const pan_tool_1 = __webpack_require__(70);
	const util_1 = __webpack_require__(13);
	const drag_action_1 = __webpack_require__(41);
	const drag_asset_item_action_1 = __webpack_require__(49);
	const typography_component_1 = __webpack_require__(293);
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
	        app_element_1.AppElement.Root.setRectValues(this.panValue.x, this.panValue.y, this.frameDimensions.x, this.frameDimensions.y);
	        this.resetZoom();
	        this.drawFrameOutline();
	        this.paintScene();
	    }
	    paintScene() {
	        this.isPaintQueued = true;
	    }
	    drawFrameOutline() {
	        this.frameOutline.clear();
	        this.frameOutline.lineStyle(1, 0xFF00CD);
	        this.frameOutline.drawRect(this.panValue.x, this.panValue.y - 1, this.zoomLevel * this.frameDimensions.x, this.zoomLevel * this.frameDimensions.y);
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (input.isMouseInEditorElement(this.getChildRoot())) {
	            this.zoom(input.getMouseWheelDelta().y);
	        }
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
	        if (this.isPaintQueued) {
	            this.isPaintQueued = false;
	            this.paintBackground();
	            this.drawFrameOutline();
	            this.pixi.render(this.stage);
	        }
	    }
	    pan(delta) {
	        this.panValue.addVector(delta);
	        app_element_1.AppElement.Root.setRectValues(this.panValue.x, this.panValue.y, this.frameDimensions.x, this.frameDimensions.y);
	        this.paintScene();
	    }
	    setCursor(cursorString) {
	        this.getDomNode().style.cursor = cursorString;
	    }
	    zoom(zoomDelta) {
	        if (zoomDelta === 0)
	            return;
	        const oldWidth = this.frameDimensions.x * this.zoomLevel;
	        const oldHeight = this.frameDimensions.y * this.zoomLevel;
	        this.zoomLevel -= 0.1 * zoomDelta;
	        this.zoomLevel = util_1.clamp(this.zoomLevel, 0.1, 4);
	        const newWidth = this.frameDimensions.x * this.zoomLevel;
	        const newHeight = this.frameDimensions.y * this.zoomLevel;
	        const diff = new vector2_1.Vector2((oldWidth - newWidth) * 0.5, (oldHeight - newHeight) * 0.5);
	        this.pan(diff);
	        const childRootDom = this.getChildRoot().getDomNode();
	        const appRootDom = childRootDom.firstElementChild;
	        appRootDom.style.transformOrigin = "top left";
	        appRootDom.style.transform = "scale(" + this.zoomLevel + ")";
	        this.paintScene();
	    }
	    resetZoom() {
	        this.zoomLevel = 1.1;
	        const width = this.width;
	        const breakpointWidth = this.frameDimensions.x;
	        if (breakpointWidth > width) {
	            this.zoomLevel = width / breakpointWidth;
	            this.panValue.x = ((this.zoomLevel * breakpointWidth * 0.5) - (width * 0.5)) | 0;
	            this.panValue.y = this.baseYOffset;
	        }
	        this.zoom(1);
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
	        this.currentTool = new pan_tool_1.ScenePanTool(this);
	        this.panValue = new vector2_1.Vector2();
	        this.canvas = this.getChildBySelector('canvas').getDomNode();
	        this.ctx = this.canvas.getContext("2d");
	        EditorRuntime.drawScene("scene-render-root");
	        EditorRuntime.updateTree.add(this);
	        PIXI.utils.skipHello();
	        this.stage = new PIXI.Container();
	        this.pixi = new PIXI.WebGLRenderer(256, 256, {
	            autoResize: true,
	            transparent: true,
	            view: this.getChildById('foreground-canvas').getDomNode()
	        });
	        this.frameOutline = new PIXI.Graphics();
	        this.stage.addChild(this.frameOutline);
	        this.pixi.render(this.stage);
	        this.setPreviewSize(this.currentBreakpoint);
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(scene_meta_bar_1.SceneMetaBar, null),
	            Hex.createElement("canvas", { "x-id": "background-canvas", class: "overlay-canvas" }),
	            Hex.createElement("div", { "x-child-root": true, class: "scene-render-root" }),
	            Hex.createElement("canvas", { "x-id": "foreground-canvas", class: "overlay-canvas" }),
	            Hex.createElement("div", { "x-id": "highlighter", "x-hidden": true, class: "highlighter" },
	                Hex.createElement("div", { "x-id": "hi-lite-top-right", class: "highlight-corner top-right" }),
	                Hex.createElement("div", { "x-id": "hi-lite-top-left", class: "highlight-corner top-left" }),
	                Hex.createElement("div", { "x-id": "hi-lite-bottom-right", class: "highlight-corner bottom-right" }),
	                Hex.createElement("div", { "x-id": "hi-lite-bottom-left", class: "highlight-corner bottom-left" }))
	        ];
	    }
	    handleAssetDragEnter() {
	        this.setCursor("-webkit-grabbing");
	    }
	    handleAssetDragHover() {
	    }
	    handleAssetDragExit() {
	        this.setCursor("default");
	    }
	    handleAssetDrop() {
	        const element = new app_element_1.AppElement("Generated");
	        const cmp = element.addComponent(typography_component_1.TypographyComponent);
	        cmp.setTextAsync("Text goes here");
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(drag_asset_item_action_1.DragAssetItemAction)
	], SceneWindow.prototype, "handleAssetDragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseOver(drag_asset_item_action_1.DragAssetItemAction)
	], SceneWindow.prototype, "handleAssetDragHover", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(drag_asset_item_action_1.DragAssetItemAction)
	], SceneWindow.prototype, "handleAssetDragExit", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.Drop(drag_asset_item_action_1.DragAssetItemAction)
	], SceneWindow.prototype, "handleAssetDrop", null);
	exports.SceneWindow = SceneWindow;
	createStyleSheet(`
	<style>

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
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	const button_1 = __webpack_require__(68);
	const scene_window_1 = __webpack_require__(82);
	const editor_theme_1 = __webpack_require__(53);
	const breakpoint_1 = __webpack_require__(59);
	function round(places) {
	    return function (value) {
	        return value.toFixed(places);
	    };
	}
	class SceneMetaBar extends editor_custom_element_1.EditorCustomElement {
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
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vertical_stack_1 = __webpack_require__(266);
	const text_input_1 = __webpack_require__(267);
	const evt_selection_changed_1 = __webpack_require__(4);
	const editor_window_element_1 = __webpack_require__(81);
	const inspector_row_1 = __webpack_require__(268);
	const component_menu_1 = __webpack_require__(269);
	const editor_theme_1 = __webpack_require__(53);
	const component_renderer_1 = __webpack_require__(272);
	const element_renderer_1 = __webpack_require__(5);
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
	        this.getChildRoot().addChild(element_renderer_1.createElement(component_menu_1.ComponentMenu));
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
	}
	  
	</style>`);


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const vertical_stack_1 = __webpack_require__(266);
	const text_box_icon_1 = __webpack_require__(270);
	const button_1 = __webpack_require__(68);
	const editor_custom_element_1 = __webpack_require__(50);
	const component_option_1 = __webpack_require__(271);
	const component_1 = __webpack_require__(28);
	const element_renderer_1 = __webpack_require__(5);
	class ComponentMenu extends editor_custom_element_1.EditorCustomElement {
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

	.inspector-component-menu .component-item {
	    cursor: pointer;
	}

	.inspector-component-menu .component-item:hover {
	    background: rgba(69,245,255,0.32);
	}

	</style>`);


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	const property_renderer_1 = __webpack_require__(56);
	const horizontal_1 = __webpack_require__(69);
	const icon_1 = __webpack_require__(79);
	const element_renderer_1 = __webpack_require__(5);
	const checkbox_input_1 = __webpack_require__(273);
	const util_1 = __webpack_require__(13);
	const editor_theme_1 = __webpack_require__(53);
	const expose_as_1 = __webpack_require__(30);
	const component_1 = __webpack_require__(28);
	class ComponentRenderer extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
	        this.editorDataMap = expose_as_1.getExposedFieldMap(this.attrs.component);
	        this.component = this.attrs.component;
	    }
	    getDomData() {
	        component_1.Component.getComponentFromPath("");
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
	    left: 10px;
	}

	.component-renderer .component-name {
	    padding-left: 2em;
	    font-weight: 800;
	    font-size: 0.9em;
	}
	</style>`);


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(50);
	class CheckboxInput extends editor_custom_element_1.EditorCustomElement {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	    }
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
	        EditorRuntime.updateTree.add(this);
	    }
	}
	exports.CheckboxInput = CheckboxInput;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_window_element_1 = __webpack_require__(81);
	const asset_folder_1 = __webpack_require__(275);
	const vector2_1 = __webpack_require__(20);
	const drag_asset_item_action_1 = __webpack_require__(49);
	const asset_item_1 = __webpack_require__(277);
	const element_renderer_1 = __webpack_require__(5);
	class AssetWindow extends editor_window_element_1.EditorWindowElement {
	    constructor() {
	        super(...arguments);
	        this.mouse = new vector2_1.Vector2();
	    }
	    getDomData() {
	        return { tagName: "div", classList: "asset-window" };
	    }
	    onRendered() {
	        this.loadAssets();
	        EditorRuntime.updateTree.add(this);
	    }
	    loadAssets() {
	        const manifest = __webpack_require__(278);
	        manifest.forEach((data) => {
	            this.getChildRoot().addChild(this.loadAsset(data));
	        });
	    }
	    loadAsset(asset) {
	        const data = asset.data;
	        switch (asset.type) {
	            case "folder":
	                const attrs = { name: asset.name, isOpen: data.isOpen };
	                const children = [];
	                data.contents.forEach((asset) => {
	                    const child = this.loadAsset(asset);
	                    if (child) {
	                        children.push(child);
	                    }
	                });
	                return element_renderer_1.createElement(asset_folder_1.AssetSection, attrs, children);
	            case "image":
	                return element_renderer_1.createElement(asset_item_1.AssetSectionItem, data);
	            case "prefab":
	                break;
	        }
	        return null;
	    }
	    onUpdated() {
	        const input = EditorRuntime.getInput();
	        if (!input.isMouseInEditorElement(this)) {
	            return;
	        }
	        if (!EditorRuntime.getCurrentDragAction() && input.isMouseDown()) {
	            input.getMouseDownDelta(this.mouse);
	            if (this.mouse.lengthSquared() > 64) {
	                input.getMouseDownPosition(this.mouse);
	                let hoverElement = EditorRuntime.getEditorElementAtPoint(this.mouse, asset_item_1.AssetSectionItem);
	                if (!hoverElement) {
	                    return;
	                }
	                const action = new drag_asset_item_action_1.DragAssetItemAction(hoverElement.getAsset());
	                EditorRuntime.beginDragAction(action);
	            }
	        }
	    }
	    startDraggingAsset(e) {
	        alert("DOWN");
	    }
	    createInitialStructure() {
	        return [];
	    }
	}
	exports.AssetWindow = AssetWindow;
	createStyleSheet(`
	<style>
	.asset-window {
	    overflow:scroll;
	    width: 100%;
	    height: 100%;
	    background: mediumaquamarine;
	}
	</style>`);


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const util_1 = __webpack_require__(13);
	const editor_html_element_1 = __webpack_require__(14);
	const toggle_icon_label_row_1 = __webpack_require__(276);
	const drag_action_1 = __webpack_require__(41);
	const drag_asset_item_action_1 = __webpack_require__(49);
	class AssetFolderNameRow extends toggle_icon_label_row_1.IconNameToggleRow {
	    dragEnter() {
	        this.getDomNode().style.backgroundColor = "red";
	    }
	    dragExit() {
	        this.getDomNode().style.backgroundColor = null;
	    }
	}
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseEnter(drag_asset_item_action_1.DragAssetItemAction)
	], AssetFolderNameRow.prototype, "dragEnter", null);
	tslib_1.__decorate([
	    drag_action_1.DragAction.MouseExit(drag_asset_item_action_1.DragAssetItemAction)
	], AssetFolderNameRow.prototype, "dragExit", null);
	class AssetSection extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "asset-folder" };
	    }
	    createInitialStructure(children) {
	        this.attrs.isOpen = util_1.setDefault(this.attrs.isOpen, true);
	        const depth = 1;
	        const padding = depth * 16;
	        return [
	            Hex.createElement(AssetFolderNameRow, { toggleElementFn: () => this.getChildRoot(), iconName: "folder", label: "Label" }),
	            Hex.createElement("div", { style: "padding-left: " + padding + "px", "x-child-root": true }, children)
	        ];
	    }
	}
	exports.AssetSection = AssetSection;
	createStyleSheet(`<style>
	    
	     .asset-folder {
	        display:flex;
	        flex-direction: column;
	        width: 100%;
	        cursor: pointer;
	     }
	     
	 
	         
	`);


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const icon_1 = __webpack_require__(79);
	const horizontal_1 = __webpack_require__(69);
	class IconNameToggleRow extends horizontal_1.HorizontalBase {
	    createInitialStructure() {
	        let label = null;
	        if (this.attrs.useBinding) {
	            label = new window.EditorBindingElement(this, ["attrs", "label"]);
	        }
	        else {
	            label = this.attrs.label;
	        }
	        let toggle = void 0;
	        if (this.attrs.toggleElementFn) {
	            toggle = Hex.createElement(icon_1.ToggleIcon, { visibilityTarget: this.attrs.toggleElementFn, class: "toggle", size: "small" });
	        }
	        return [
	            Hex.createElement("div", { class: "icon-container" },
	                toggle,
	                Hex.createElement(icon_1.FontIcon, { style: "padding-left:4px", iconName: this.attrs.iconName })),
	            Hex.createElement("span", { style: "padding-left:4px" }, label)
	        ];
	    }
	}
	exports.IconNameToggleRow = IconNameToggleRow;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_html_element_1 = __webpack_require__(14);
	const toggle_icon_label_row_1 = __webpack_require__(276);
	class AssetSectionItem extends editor_html_element_1.EditorHTMLElement {
	    getDomData() {
	        return { tagName: "div", classList: "asset-item" };
	    }
	    getAsset() {
	        return this.attrs.asset;
	    }
	    createInitialStructure(children) {
	        return [
	            Hex.createElement(toggle_icon_label_row_1.IconNameToggleRow, { iconName: "search", label: "asset" })
	        ];
	    }
	}
	exports.AssetSectionItem = AssetSectionItem;
	createStyleSheet(`<style>
	    
	    .asset-item {

	    }
	    
	    .asset-item-name {
	    
	    }
	    
	`);


/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = [
	    {
	        id: 0x0,
	        name: "thing",
	        type: "folder",
	        data: {
	            contents: [
	                {
	                    id: 0x1,
	                    name: "Folder",
	                    type: "folder",
	                    data: {
	                       contents: [
	                           {
	                               idx: 0x4,
	                               name: "Some Item",
	                               type: "image",
	                               data: {
	                                   format: "png",
	                                   width: 300,
	                                   height: 300
	                               }
	                           }
	                       ]
	                    }
	                },
	                {

	                    id: 0x2,
	                    name: "image",
	                    type: "image",
	                    data: {
	                        format: "png",
	                        width: 300,
	                        height: 300
	                    }
	                },
	                {

	                    id: 0x3,
	                    name: "image",
	                    type: "image",
	                    data: {
	                        format: "png",
	                        width: 300,
	                        height: 300
	                    }
	                }
	            ]
	        }
	    }
	];


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const button_1 = __webpack_require__(68);
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const component_renderer_1 = __webpack_require__(272);
	const sizing_component_1 = __webpack_require__(26);
	const default_sizing_component_1 = __webpack_require__(24);
	const inspector_row_1 = __webpack_require__(268);
	const number_input_1 = __webpack_require__(282);
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
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(50);
	class NumberInput extends editor_custom_element_1.EditorCustomElement {
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
	        EditorRuntime.updateTree.add(this);
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
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const property_drawer_1 = __webpack_require__(55);
	const property_renderer_1 = __webpack_require__(56);
	const inspector_row_1 = __webpack_require__(268);
	const checkbox_input_1 = __webpack_require__(273);
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
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const property_drawer_1 = __webpack_require__(55);
	const property_renderer_1 = __webpack_require__(56);
	const util_1 = __webpack_require__(13);
	const number_input_1 = __webpack_require__(282);
	const inspector_row_1 = __webpack_require__(268);
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
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const property_renderer_1 = __webpack_require__(56);
	const property_drawer_1 = __webpack_require__(55);
	const util_1 = __webpack_require__(13);
	const inspector_row_1 = __webpack_require__(268);
	const select_input_1 = __webpack_require__(286);
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
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const binding_compiler_1 = __webpack_require__(8);
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const property_drawer_1 = __webpack_require__(55);
	const property_renderer_1 = __webpack_require__(56);
	const inspector_row_1 = __webpack_require__(268);
	const text_input_1 = __webpack_require__(267);
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
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const horizontal_1 = __webpack_require__(69);
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
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const editor_custom_element_1 = __webpack_require__(50);
	class InspectorBody extends editor_custom_element_1.EditorCustomElement {
	    getDomData() {
	        return { tagName: "div", classList: "vertical" };
	    }
	}
	exports.InspectorBody = InspectorBody;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const icon_1 = __webpack_require__(79);
	const inspector_body_1 = __webpack_require__(289);
	const editor_custom_element_1 = __webpack_require__(50);
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
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const inline_field_1 = __webpack_require__(288);
	const number_input_1 = __webpack_require__(282);
	const horizontal_1 = __webpack_require__(69);
	const binding_compiler_1 = __webpack_require__(8);
	const vector2_1 = __webpack_require__(20);
	class Vector2Input extends horizontal_1.HorizontalBase {
	    constructor() {
	        super(...arguments);
	        this.element = this;
	    }
	    onMounted() {
	        this.ctx = this.attrs.binding.ctx;
	        this.getterFn = binding_compiler_1.getGetter(this.attrs.binding.path);
	        EditorRuntime.updateTree.add(this);
	    }
	    onUpdated() {
	        const value = this.getterFn(this.ctx) || new vector2_1.Vector2();
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
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const editor_html_element_1 = __webpack_require__(14);
	const drag_action_1 = __webpack_require__(41);
	const drag_asset_item_action_1 = __webpack_require__(49);
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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const tslib_1 = __webpack_require__(25);
	const ui_component_1 = __webpack_require__(61);
	const e_command_type_1 = __webpack_require__(34);
	class TypographyComponent extends ui_component_1.UIComponent {
	    setTextAsync(text) {
	        return tslib_1.__awaiter(this, void 0, void 0, function* () {
	            this.setTextPromise = new Promise((resolve) => {
	                Runtime.sendCommand(e_command_type_1.CommandType.SetText, this.appElement.id, resolve);
	                return text;
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


/***/ }
]);