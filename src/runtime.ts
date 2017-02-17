import {SceneLoaded} from "./editor_events/evt_scene_loaded_event";
import {SelectionChanged} from "./editor_events/evt_selection_changed";
import {render, createElement} from "./editor_element/element_renderer";
import {WindowResized} from "./editor_events/evt_window_resized";
import {AppElementCreated} from "./editor_events/evt_app_element_created";
import {EditorElement} from "./editor_element/editor_element";
import {EditorInput} from "./input";
import {CommandSerializer} from "./runtime/cmd_serializers/_cmd_serializer";
import {CommandInvoker} from "./browser/cmd_invokers/_cmd_invoker";
import {DefaultSizingComponent} from "./runtime/components/layout/default/default_sizing_component";
import {DefaultLayoutComponent} from "./runtime/components/layout/default/default_layout_component";
import {BackgroundComponent} from "./runtime/components/background_component";

export type CommandInterpreter = (command : { type : number, id : number }) => void;

export class EditorRuntimeImplementation extends RuntimeImpl {

    private selectedElement : AppElement;
    private updateCycles : Array<UpdateCycle>;
    private domElementIdMap : IHTMLElementMap;
    private interpreters : Indexable<CommandInterpreter>;

    constructor() {
        super();
        this.domElementIdMap = new Map<number, HTMLElement>();
        this.interpreters = {};
        this.selectedElement = null;
        this.updateCycles = [];
        this.input = new EditorInput();
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
                AppElement.Root.addComponent(DefaultLayoutComponent);
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
        });
        this.emit(SceneLoaded, this.scene);
    }

    private hydrateElement(definition : any) : AppElement {
        //todo dont call addElement until the end when building a scene
        const appElement = new AppElement(definition.name);

        for (let j = 0; j < definition.components.length; j++) {
            const compDesc = definition.components[j];
            const type = Component.getComponentFromPath(compDesc.type);
            if(type) {
                const cmp = appElement.addComponent(type);
                this.hydrateComponent(cmp, compDesc.data);
            }
        }
        for (let k = 0; k < definition.children.length; k++) {
            this.hydrateElement(definition.children[k]).setParent(appElement);
        }
        return appElement;
    }

    private hydrateComponent(component : Component & Indexable<any>, data: IJson) : Component {
        const keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++) {
            const propertyName  = keys[i];
            //todo use a more formal serialize / deserialize
            component[propertyName] = data[propertyName];
        }
        return component;
    }

    public select(newSelection : AppElement) : void {
        const oldSelection = this.selectedElement;
        this.selectedElement = newSelection;
        this.emit(SelectionChanged, newSelection, oldSelection);
    }

    public getSelection() : AppElement {
        return this.selectedElement;
    }

    public update(timeStamp : number) {
        for (let i = 0; i < this.updateCycles.length; i++) {
            this.updateCycles[i].update(timeStamp);
        }
        //the real runtime implementation of buffer building lives
        // on a worker thread and is decoded on a UI thread
        const commandBuffer = this.buildCommandBuffer();
        this.decodeCommandBuffer(commandBuffer);
        this.input.update();
        requestAnimationFrame(this.boundUpdate);
    }

    protected buildCommandBuffer() : string {
        //todo using json for now but later will use a
        //format that doesn't need to use json.stringify/parse
        let buffer = "[";
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
        }
    }

    public addUpdater(updater : Updater, interval : number = -1) {
        this.getUpdateCycleForInterval(interval).addUpdater(updater);
    }

    public removeUpdater(updater : Updater) {
        for (let i = 0; i < this.updateCycles.length; i++) {
            const length = this.updateCycles[i].removeUpdater(updater);
            if (length === 0) {
                this.updateCycles.removeAt(i);
                return;
            }
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
            const components = parent.getAllComponents();
            for (let i = 0; i < components.length; i++) {
                components[i].onChildAdded(appElement);
            }
        }
    }

    public addComponent(component : Component) : void {
        const appElement = component.appElement;
        // super.addComponent(component);
        if (this.getSelection() === appElement) {
            this.emit(SelectionChanged, appElement);
        }
    }

    public drawScene(targetId : string) : void {
        this.createApplicationRoot();
        const root = document.getElementById(targetId);
        const bounds = root.getBoundingClientRect();
        const element = this.domElementIdMap.get(-1) || document.createElement("div");
        element.id = "app-element-root";
        this.domElementIdMap.set(-1, element);
        AppElement.Root.setRect(new Rectangle(0, 0, bounds.width, bounds.height));
        root.appendChild(element);
    }

    public getInput() : EditorInput {
        return this.input as EditorInput;
    }

    public getEditorElementAtPoint(point : Vector2) : EditorElement {
        const dom = document.elementFromPoint(point.x, point.y) as any;
        return dom.__editorElement;
    }

    private getUpdateCycleForInterval(interval : number) : UpdateCycle {
        if (interval < 0) interval = 0;
        for (let i = 0; i < this.updateCycles.length; i++) {
            if (this.updateCycles[i].interval === interval) {
                return this.updateCycles[i];
            }
        }
        const updateCycle = new UpdateCycle(interval);
        this.updateCycles.add(updateCycle);
        return updateCycle;
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

export interface Updater {
    onUpdated : () => void;
}

class UpdateCycle {

    private updaters : Array<Updater>;
    private lastUpdate : number;
    public readonly interval : number;

    constructor(interval : number) {
        this.interval = interval;
        this.lastUpdate = 0;
        this.updaters = [];
    }

    update(timeStamp : number) {
        if (timeStamp - this.lastUpdate > this.interval) {
            this.lastUpdate = timeStamp;
            for (let i = 0; i < this.updaters.length; i++) {
                this.updaters[i].onUpdated();
            }
        }
    }

    addUpdater(updater : Updater) : boolean {
        const idx = this.updaters.indexOf(updater);
        if (idx === -1) {
            this.updaters.add(updater);
            return true;
        }
        return false;
    }

    removeUpdater(updater : Updater) : number {
        const idx = this.updaters.indexOf(updater);
        if (idx !== -1) {
            this.updaters.splice(idx, 1);
        }
        return this.updaters.length;
    }

}


