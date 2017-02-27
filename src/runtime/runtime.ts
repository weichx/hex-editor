import {Scene} from "./scene";
import {Vector2} from "./vector2";
import {Input} from "./input";
import {AppElement} from "./app_element";
import {Component} from "./component";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {LayoutComponent} from "./components/layout/layout_component";
import {DragAction} from "../editor/drag_actions/drag_action";
import {RuntimeBase} from "../shared/runtime_base";

export class RuntimeImpl extends RuntimeBase  {

    protected scene : Scene;
    protected input : Input;
    protected appElementRegistry : Indexable<AppElement>;
    protected draggedAction : DragAction;

    protected pendingComponents : Array<Component>;
    protected updateComponents : Array<Component>; //todo replace with ShadowTree
    protected rootElementCandidates : Array<AppElement>;

    constructor() {
        super();
        this.input = new Input();
        this.rootElementCandidates = [];
        this.pendingComponents = [];
        this.appElementRegistry = {};
        this.commandQueue = [];
        self.onmessage = (message : MessageEvent) => {
            this.onMessage(message);
        };
    }

    public getAppElementById(id : number) : AppElement {
        return this.appElementRegistry[id];
    }

    protected postMessage(data : string) : void {
        self.postMessage(data, void 0);
    }

    public queueLayout(layoutComponent : LayoutComponent) : void {

    }

    public getScene() : Scene {
        return this.scene;
    }

    public getAppElementAtPoint(point : Vector2) : AppElement {
        const childCount = AppElement.Root.getChildCount();
        for (let i = 0; i < childCount; i++) {
            const hit = this.appElementAtPointStep(AppElement.Root.getChildAt(i), point);
            if (hit) {
                return hit;
            }
        }
        if(AppElement.Root.containsPoint(point)) return AppElement.Root;
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

}