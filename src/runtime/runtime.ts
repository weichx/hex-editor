import {Scene} from "./scene";
import {Vector2} from "./vector2";
import {Input} from "./input";
import {EventEmitter} from "./event_emitter";
import {AppElement} from "./app_element";
import {Component} from "./component";
import {CommandType} from "./enums/e_command_type";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {LayoutComponent} from "./components/layout/layout_component";
import {DragAction} from "../drag_actions/drag_action";

export interface IRuntimeCommand {
    type : CommandType,
    elementId : number;
    callback? : () => void;
}

export abstract class RuntimeImpl extends EventEmitter {

    protected scene : Scene;
    protected input : Input;
    protected appElementRegistry : Indexable<AppElement>;
    protected commandQueue : Array<IRuntimeCommand>;
    protected draggedAction : DragAction;

    protected pendingComponents : Array<Component>;
    protected updateComponents : Array<Component>;
    protected lateUpdateComponents : Array<Component>;
    protected enabledComponents : Array<Component>;
    protected disabledComponents : Array<Component>;
    protected inUpdateLoop : boolean;
    protected rootElementCandidates : Array<AppElement>;

    protected boundUpdate : (delta : number) => void;

    constructor() {
        super();
        this.rootElementCandidates = [];
        this.pendingComponents = [];
        this.appElementRegistry = {};
        this.commandQueue = [];
        this.boundUpdate = (delta : number) => {
            this.update(delta);
        };
    }

    public queueLayout(layoutComponent : LayoutComponent) : void {

    }

    protected sendCommandBuffer(buffer : string) : void {
        debugger;
    }

    protected decodeMessage(evt : any) : void {

    }

    public getScene() : Scene {
        return this.scene;
    }

    public sendCommand(type : number, elementId : number, callback? : () => void) : void {
        this.commandQueue.push({ type, elementId, callback });
    }

    public getAppElementAtPoint(point : Vector2) : AppElement {
        const roots = this.scene.getRootElements();
        for (let i = 0; i < roots.length; i++) {
            const hit = this.appElementAtPointStep(roots[i], point);
            if (hit) {
                return hit;
            }
        }
        return null;
    }

    //todo this could be more optimized
    //todo this doesn't handle z-ordering at all
    //todo replace with range tree of 4d points http://stackoverflow.com/questions/17651215/storing-rectangles-circles-triangles-in-a-kd-tree
    private appElementAtPointStep(test : AppElement, point : Vector2) : AppElement {
        if (!test.containsPoint(point)) return null;
        const childCount = test.getChildCount();
        for (let i = 0; i < childCount; i++) {
            const hit = this.appElementAtPointStep(test.getChildAt(i), point);
            if (hit) {
                return hit;
            }
        }
        return test;
    }

    public addElement(appElement : AppElement) : void {
        this.rootElementCandidates.push(appElement);
        //todo remove this when destroying app element
        this.appElementRegistry[appElement.id] = appElement;
    }

    public addComponent(component : Component) : void {
        this.pendingComponents.push(component);
    }

    protected update(delta : number) : void {

        //this.host.copyInput(this.input);

        if (this.rootElementCandidates.length > 0) {
            for (let i = 0; i < this.rootElementCandidates.length; i++) {
                const candidate = this.rootElementCandidates[i];
                if (candidate.getParent() === AppElement.Root) {
                    this.scene.addRootElement(candidate);
                }
            }
            this.rootElementCandidates.length = 0;
        }

        if (this.pendingComponents.length > 0) {
            for (let i = 0; i < this.pendingComponents.length; i++) {
                const cmp = this.pendingComponents[i] as any;
                cmp.lifeCycleFlags = cmp.lifeCycleFlags | LifeCycleFlag.Created;
                cmp.onCreated();
            }

            for (let i = 0; i < this.pendingComponents.length; i++) {
                const cmp = this.pendingComponents[i] as any;
                cmp.lifeCycleFlags = cmp.lifeCycleFlags | LifeCycleFlag.Mounted;
                cmp.onMounted();
            }

            for (let i = 0; i < this.pendingComponents.length; i++) {
                const cmp = this.pendingComponents[i];
                if (cmp.update !== Component.prototype.update) {
                    this.updateComponents.push(cmp);
                }
                cmp.onEnabled();
            }
            this.pendingComponents.length = 0;
        }

        for (let i = 0; i < this.updateComponents.length; i++) {
            // if(this.updateComponents[i].isEnabled()) {
            this.updateComponents[i].update(delta);
            // }
        }

        // this.sendCommandBuffer(this.buildBuffer());
        // requestAnimationFrame(this.boundUpdate);
    }

    public getInput() : Input {
        return this.input;
    }

    //todo will need to figure out how to handle delete commands
    //todo will need to figure out how to aggregate commands
    //todo will need to figure out how to dedupe commands
    protected abstract buildCommandBuffer() : string;

}