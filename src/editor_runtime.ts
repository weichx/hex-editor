import {SceneLoaded} from "./editor_events/evt_scene_loaded_event";
import {SelectionChanged} from "./editor_events/evt_selection_changed";
import {render, createElement} from "./editor_element/element_renderer";
import {WindowResized} from "./editor_events/evt_window_resized";
import {AppElementCreated} from "./editor_events/evt_app_element_created";
import {EditorElement} from "./editor_element/editor_element";
import {EditorInput} from "./editor_input";
import {CommandSerializer} from "./runtime/cmd_serializers/_cmd_serializer";
import {CommandInvoker} from "./browser/cmd_invokers/_cmd_invoker";
import {DefaultSizingComponent} from "./runtime/components/layout/default/default_sizing_component";
import {HorizontalStackLayout} from "./runtime/components/layout/default/default_layout_component";
import {BackgroundComponent} from "./runtime/components/background_component";
import {ShadowTree, ShadowTreeNode} from "./runtime/tree";
import {RuntimeImpl, IRuntimeCommand} from "./runtime/runtime";
import {AppElement} from "./runtime/app_element";
import {Scene} from "./runtime/scene";
import {CommandType} from "./runtime/enums/e_command_type";
import {Component} from "./runtime/component";
import {Vector2} from "./runtime/vector2";
import {TypeOf} from "./runtime/interfaces/i_typeof";
import {DragAction} from "./drag_actions/drag_action";

export type CommandInterpreter = (command : { type : number, id : number }) => void;

let mouseCache = new Vector2();

class UpdateNode extends ShadowTreeNode<ILifecycle> {

    traverse() : boolean {
        const element = this.element as EditorElement;
        if(element.isDestroyed()) {
            return true;
        }
        //todo or disabled
        for(let i = 0; i < this.items.length; i++) {
            this.items[i].onUpdated();
            if(element.isDestroyed()) {
                for(let j = 0; j < this.items.length; j++) {
                    const ctor = this.items[i].constructor as any;
                    const pool = ctor.Pool;
                    if(pool) {
                        pool.despawn(this.items[i]);
                    }
                }
                return true;
            }
        }

        for(let i = 0; i < this.children.length; i++) {
            const removeChild = this.children[i].traverse();
            if(removeChild) {
                this.children.removeAt(--i);
            }
        }

        return this.items.length === 0;
    }

}


export interface ILifecycle {
    element : EditorElement;
    onUpdated(delta? : number) : void;
}

export class EditorRuntimeImplementation extends RuntimeImpl {

    private selectedElement : AppElement;
    private domElementIdMap : IHTMLElementMap;
    private interpreters : Indexable<CommandInterpreter>;
    //todo -- maybe bucket this
    public readonly updateTree : ShadowTree<UpdateNode, ILifecycle>;
    private lastEnteredElement : EditorElement;

    constructor() {
        super();
        this.domElementIdMap = new Map<number, HTMLElement>();
        this.interpreters = {};
        this.selectedElement = null;
        this.input = new EditorInput();
        this.updateTree = new ShadowTree(UpdateNode);
        this.draggedAction = null;
        this.lastEnteredElement = null;
    }

    private suppressAddElement(fn : () => void) : void {
        this.addElement = function () {};
        fn();
        this.addElement = EditorRuntimeImplementation.prototype.addElement;
    }

    private createApplicationRoot() : void {
        if (!AppElement.Root) {
            this.suppressAddElement(() => {
                AppElement.Root = new AppElement("__Root__");
                this.appElementRegistry[-1] = AppElement.Root;
                AppElement.Root.addComponent(HorizontalStackLayout);
                AppElement.Root.addComponent(DefaultSizingComponent);
                AppElement.Root.addComponent(BackgroundComponent);
            });
        }
    }

    public loadScene(sceneDescription : any) : void {
        this.createApplicationRoot();
        if (!this.scene) this.scene = new Scene();
        this.scene.load(sceneDescription);
        const elements = sceneDescription.elements;
        const parentMap : Indexable<number> = {};
        //todo use an instance id for elements?
        this.suppressAddElement(() => {
            const ids = Object.keys(elements);
            for(let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const elementDesc = elements[id];
                const appElement = new AppElement(elementDesc.name) as any;
                appElement.id = parseInt(id);
                this.appElementRegistry[id] = appElement;
                parentMap[id] = elementDesc.parentId;
            }
            const appElementIds = Object.keys(this.appElementRegistry);
            for(let i = 0; i < appElementIds.length; i++) {
                const appElement = this.appElementRegistry[appElementIds[i]] as any;
                if(appElement.id === -1) continue;
                const parentId = parentMap[appElement.id] || -1;
                appElement.parent = this.appElementRegistry[parentId];
                appElement.parent.children.add(appElement);
            }
            for(let i = 0; i < ids.length; i++) {
                const appElement = this.appElementRegistry[ids[i]];
                if(appElement === AppElement.Root) continue;
                const componentDescriptors = elements[ids[i]].components;
                this.sendCommand(CommandType.Create, appElement.id);
                this.createComponents(appElement, componentDescriptors);
            }
        });
        this.emit(SceneLoaded, this.scene);
        AppElement.Root.getComponent(HorizontalStackLayout).doLayout();
    }

    private createComponents(appElement : AppElement, componentDescriptors : Array<any>) : void {
        for(let i = 0; i < componentDescriptors.length; i++) {
            const desc = componentDescriptors[i];
            const type = Component.getComponentFromPath(desc.type) as any;
            if(type) {
                const cmp = appElement.addComponent(type);
                if(type.OnDeserialized) {
                    type.OnDeserialized(cmp, desc.data); //temp until i optimize cerialize for hex
                }
            }
        }
    }

    public select(newSelection : AppElement) : void {
        const oldSelection = this.selectedElement;
        this.selectedElement = newSelection;
        this.emit(SelectionChanged, newSelection, oldSelection);
    }

    public beginDragAction(dragAction : DragAction) : void {
        if(this.draggedAction) {
            throw new Error("Cannot initiate another drag action while one exists!");
        }
        this.draggedAction = dragAction;
        this.draggedAction.onDragStart();
    }

    public getCurrentDragAction() : DragAction {
        return this.draggedAction;
    }

    public getSelection() : AppElement {
        return this.selectedElement;
    }

    public update(timeStamp : number) {

        for(let i = 0; i < this.pendingComponents.length; i++) {
            const cmp = this.pendingComponents[i];
            cmp.onMounted();
            //todo handle on editor gui
            // if(typeof cmp.onEditorUpdate === "function") {
            //
            // }
        }

        this.pendingComponents.length = 0;

        if(this.draggedAction) {
            const mouse = this.input.getMousePosition(mouseCache);
            const element = this.getEditorElementAtPoint(mouse);
            this.draggedAction.onUpdate();
            if(element) {
                if(element !== this.lastEnteredElement) {
                    if(this.lastEnteredElement) {
                        DragAction.invokeExitHandlers(this.lastEnteredElement, this.draggedAction);
                    }
                    this.lastEnteredElement = element;
                    DragAction.invokeEnterHandlers(this.lastEnteredElement, this.draggedAction);
                }
                else {
                    DragAction.invokeHoverHandlers(this.lastEnteredElement, this.draggedAction);
                }
            }
            if(this.input.isMouseUp()) {
                this.draggedAction.onDrop(element);
                DragAction.invokeExitHandlers(element, this.draggedAction);
                DragAction.invokeDropHandlers(element, this.draggedAction);
                this.draggedAction = null;
            }
        }

        this.updateTree.traverse();

        //the real runtime implementation of buffer building lives
        // on a worker thread and is decoded on a UI thread
        const commandBuffer = this.buildCommandBuffer();
        this.decodeCommandBuffer(commandBuffer);
        this.input.update();
    }

    protected buildCommandBuffer() : string {
        //todo using json for now but later will use a
        //format that doesn't need to use json.stringify/parse
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

    private buildCommandBufferSection(command : IRuntimeCommand) : string {
        const serializer = CommandSerializer.getSerializer(command.type);
        return serializer.serializeCommand(this.appElementRegistry[command.elementId]);
    }

    private decodeCommandBuffer(buffer : string) : void {
        const elementMap = this.domElementIdMap;
        const json = JSON.parse(buffer) as IJson[];
        for (let i = 0; i < json.length; i++) {
            let response : any;
            const command = json[i];
            const commandInvoker = CommandInvoker.getInvoker(command.type);
            editorGuard(() => {
                if (commandInvoker instanceof CommandInvoker) {
                    commandInvoker.invokeCommand(command, elementMap);
                }
                else {
                    console.warn("Unsure how to invokeCommand command", command);
                }
            });
            runtimeGuard(() => {
                commandInvoker.invokeCommand(command, elementMap);
            });
            //if(response) {
            // sendResponse(messageId, Serialize(response));
            //}
        }
    }

    //todo hide this in the api
    public addElement(appElement : AppElement) : void {
        //todo destroy this when element is nuked
        this.appElementRegistry[appElement.id] = appElement;
        this.emit(AppElementCreated, appElement);
        this.sendCommand(CommandType.Create, appElement.id);
        const parent = appElement.getParent();
        if (parent) {
            //todo -- only if they are tagged for editor calls
            const components = parent.getAllComponents();
            for (let i = 0; i < components.length; i++) {
                components[i].onChildAdded(appElement);
            }
        }
    }

    public addComponent(component : Component) : void {
        const appElement = component.appElement;
        this.pendingComponents.push(component);
        // super.addComponent(component);
        if (this.getSelection() === appElement) {
            this.emit(SelectionChanged, appElement);
        }
    }

    public drawScene(targetId : string) : void {
        this.createApplicationRoot();
        const root = document.querySelector("." + targetId);
        const element = this.domElementIdMap.get(-1) || document.createElement("div");
        element.id = "app-element-root";
        this.domElementIdMap.set(-1, element);
        root.appendChild(element);
    }

    public getInput() : EditorInput {
        return this.input as EditorInput;
    }

    public getEditorElementAtPoint<T extends EditorElement>(point : Vector2, type : INewable<T> = null) : T {
        if(!type) type = EditorElement as any;
        //todo find a better way to find elements
        const element = document.elementFromPoint(point.x, point.y).__editorElement;
        if(!element) return null;
        return element.getAncestorByType(type, true);
    }

    protected start(appRoot : TypeOf<EditorElement>, attrs = {}) : void {
        this.loadScene(require('./_data/test_scene1'));
        render(createElement(appRoot, attrs), document.getElementById('root'));
        requestAnimationFrame(this.boundUpdate);

        window.addEventListener("resize", () => {
            this.emit(WindowResized, window.innerWidth, window.innerHeight);
        });
    }

    protected decodeMessage(evt : MessageEvent) : void {

    }

    protected sendCommandBuffer(buffer : string) : void {
        debugger;
    }

}


