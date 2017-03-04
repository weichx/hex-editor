import {Scene} from "./scene";
import {Vector2} from "./vector2";
import {Input} from "./input";
import {AppElement} from "./app_element";
import {Component} from "./component";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";
import {LayoutComponent} from "./components/layout/layout_component";
import {DragAction} from "../editor/drag_actions/drag_action";
import {RuntimeBase} from "../shared/runtime_base";
import {AppElementParentChanged} from "../editor_events/evt_app_element_parent_changed";

export class RuntimeImpl extends RuntimeBase {

    protected scene : Scene;
    protected input : Input;
    protected appElementRegistry : Indexable<AppElement>;
    protected draggedAction : DragAction;
    protected layoutQueue : Array<LayoutComponent>;
    protected pendingComponents : Array<Component>;
    protected rootElementCandidates : Array<AppElement>;

    constructor() {
        super();
        this.input = new Input();
        this.rootElementCandidates = [];
        this.pendingComponents = [];
        this.appElementRegistry = {};
        this.commandQueue = [];
        this.layoutQueue = [];
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
        const idx = this.layoutQueue.indexOf(layoutComponent);
        //todo this should be sorted top to bottom, use a shadow/skip tree
        if (!this.layoutQueue.contains(layoutComponent)) {
            this.layoutQueue.push(layoutComponent);
        }
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
        if (AppElement.Root.containsPoint(point)) return AppElement.Root;
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

    public setParent(appElement : AppElement, newParent : AppElement, oldParent : AppElement) : void {
        const storage = new Array<Component>();
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
        this.emit(AppElementParentChanged, appElement, newParent, oldParent);
    }

    public destroyElement(appElement : AppElement) : void {
        if (appElement.isDestroyed()) return;
        appElement.destroy();
        // this.emit(AppElementDestroyed, appElement);
    }

    protected update(delta : number) : void {

        // for(let i = 0; i < this.layoutQueue.length; i++) {
        //     this.layoutQueue[i].doLayout();
        // }

    }

    public getInput() : Input {
        return this.input;
    }

}