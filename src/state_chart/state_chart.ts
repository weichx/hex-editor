import {VoidFn} from "../util";

class StateChartEventHandler {

    public target : string;
    public type : typeof StateChartEvent;
    public guardFn : (event? : StateChartEvent) => boolean;

    constructor(type : any, target : string, guardFn? : (event? : StateChartEvent) => boolean) {
        this.type = type;
        this.target = target;
        this.guardFn = guardFn || StateChartEventHandler.NoOpGuard;
    }

    private static NoOpGuard() { return true; }

}

class StateChartState {

    public readonly id : string;
    public states : Array<StateChartState>;
    public events : Array<StateChartEventHandler>;
    public isActive : boolean;
    public behavior : StateChartBehavior;
    public parent : StateChartState;

    constructor(id : string, parent : StateChartState, behavior : StateChartBehavior) {
        this.id = id;
        this.parent = parent;
        this.behavior = behavior;
        this.isActive = false;
        this.states = [];
        this.events = [];
    }

    public handleEvent(evt : StateChartEvent) : { targetId : string, from : StateChartState } {
        const handledEvent = this.events.find((handler : StateChartEventHandler) => {
            return handler.type === evt.constructor;
        });
        if (handledEvent && handledEvent.guardFn(evt)) {
            return { targetId : handledEvent.target, from: this };
        }
        for (let i = 0; i < this.states.length; i++) {
            if (this.states[i].isActive) {
                const retn = this.states[i].handleEvent(evt);
                if(retn) return retn;
            }
        }
        return null;
    }

    public enter(enterPath? : StateChartState[]) {
        if (this.isActive) return;
        this.isActive = true;
        if (this.behavior) {
            this.behavior.enter();
        }
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

    public update() {
        this.behavior && this.behavior.update();
        for (let i = 0; i < this.states.length; i++) {
            if (this.states[i].isActive) {
                this.states[i].update();
            }
        }
    }

    public exit() {
        if (!this.isActive) return;
        this.isActive = false;
        if (this.behavior) {
            this.behavior.exit();
        }
        this.exitChildren();
    }

    public exitChildren() {
        for (let i = 0; i < this.states.length; i++) {
            if (this.states[i].isActive) {
                this.states[i].exit();
            }
        }
    }

}

class StateChartParallelState extends StateChartState {

    public enter(enterPath? : StateChartState[]) {
        if (this.isActive) return;
        this.isActive = true;
        if (this.behavior) {
            this.behavior.enter();
        }
        enterPath && enterPath.pop();
        for (let i = 0; i < this.states.length; i++) {
            this.states[i].enter(enterPath);
        }
    }

    public update() {
        this.behavior && this.behavior.update();
        for (let i = 0; i < this.states.length; i++) {
            this.states[i].update();
        }
    }

    public exit() {
        if (!this.isActive) return;
        this.isActive = false;
        if (this.behavior) this.behavior.exit();
        for (let i = 0; i < this.states.length; i++) {
            this.states[i].exit();
        }
    }

}

export class StateChartEvent {
    public _brand : object;
}

export class StateChartBehavior {

    protected readonly chart : StateChart;

    public enter() {}

    public update() {}

    public exit() {}

}

export type EventDef = (eventType : { new (...args : any[]) : StateChartEvent },
                        targetStateId : string,
                        guardFunction? : (data? : any) => boolean) => void;

export type StateDef = {
    (id : string) : void;
    (id : string, definition : VoidFn) : void;
    (id : string, behavior : StateChartBehavior, definition : VoidFn) : void;
    (id : string, behaviorOrDefinition? : StateChartBehavior | VoidFn, definition? : VoidFn) : void;
    parallel : {
        (id : string, definition : VoidFn) : void;
        (id : string, behavior : StateChartBehavior, definition : VoidFn) : void;
        (id : string, behaviorOrDefinition? : StateChartBehavior | VoidFn, definition? : VoidFn) : void;
    }
};

//compiler seems to be broken w/ how 'protected' works, so to hide internal properties
//i've duplicated some functionality :(
export class StateChart {

    private stateMap : Map<string, StateChartState>;
    private states : Array<StateChartState>;
    private events : Array<StateChartEventHandler>;
    private stateStack : Array<StateChartState>;
    private eventQueue : Array<StateChartEvent>;
    private eventQueue0 : Array<StateChartEvent>;
    private eventQueue1 : Array<StateChartEvent>;
    private stateDef : StateDef;
    private eventDef : EventDef;
    private isActive : boolean;

    constructor(definition : (state : StateDef, event : EventDef) => void) {
        this.isActive = true;
        this.stateDef = this.getStateFn();
        this.eventDef = this.event.bind(this);
        this.stateMap = new Map<string, StateChartState>();
        this.states = [];
        this.events = [];
        this.stateStack = [];
        this.eventQueue0 = [];
        this.eventQueue1 = [];
        this.eventQueue = this.eventQueue0;
        this.stateStack.push(this as any);
        definition.call(this, this.stateDef, this.eventDef);
        this.stateStack.pop();
        this.stateStack = null;
        if(this.states[0]) {
            this.states[0].enter();
        }
    }

    public update() {
        //process an event queue tick
        const currentQueue = this.eventQueue;
        //swap event queues
        this.eventQueue = this.eventQueue === this.eventQueue0 ? this.eventQueue1 : this.eventQueue0;
        //do all transitions but queue all events till next frame
        while (currentQueue.length) {
            this.handleEvent(currentQueue.shift());
        }
        this.getActiveState().update();
    }

    public isInState(id : string) : boolean {
        const state = this.stateMap.get(id);
        return state && state.isActive;
    }

    public trigger(event : StateChartEvent) : void {
        if (this.stateStack) throw new Error("StateChart hasn't entered yet, invalid call to trigger()");
        this.eventQueue.push(event);
    }


    public getConfiguration() {
        const config = new Array<string[]>();
        const leaves = new Array<StateChartState>();
        this.stateMap.forEach((state : StateChartState) => {
            if (state.isActive && state.states.length === 0) {
                leaves.push(state);
            }
        });
        for (let i = 0; i < leaves.length; i++) {
            const leaf = leaves[i];
            const branchConfig = new Array<string>();
            let ptr : any = leaf;
            while (ptr !== this) {
                branchConfig.push(ptr.id);
                ptr = ptr.parent;
            }
            config.push(branchConfig.reverse());
        }
        return config;
    }

    private handleEvent(evt : StateChartEvent) {
        const handledEvent = this.events.find((handler : StateChartEventHandler) => {
            return handler.type === evt.constructor;
        });
        if (handledEvent && handledEvent.guardFn(evt)) {
            this.goTo(handledEvent.target, this as any);
            return;
        }
        for (let i = 0; i < this.states.length; i++) {
            if (this.states[i].isActive) {
                const retn = this.states[i].handleEvent(evt);
                if(retn) {
                    this.goTo(retn.targetId, retn.from);
                    return;
                }
            }
        }
    }

    private exitChildren() {
        for (let i = 0; i < this.states.length; i++) {
            if (this.states[i].isActive) {
                this.states[i].exit();
            }
        }
    }

    private getStateFn() : StateDef {
        const fn : any = this.state.bind(this);
        fn.parallel = this.parallel.bind(this);
        return fn as StateDef;
    }

    private goTo(targetId : string, from : StateChartState) {
        let ptr = this.stateMap.get(targetId) as StateChartState;
        if (!ptr) {
            throw new Error("Invalid state: " + targetId);
        }
        if (ptr === from) return;
        let enterPath : Array<StateChartState> = [];
        //find highest parent of target that is active
        while (!ptr.isActive) {
            enterPath.unshift(ptr);
            ptr = ptr.parent;
        }
        ptr.exitChildren();
        enterPath.shift().enter(enterPath);
    }

    private event(eventType : { new () : StateChartEvent }, targetStateId : string, guardFunction? : (data? : any) => boolean) {
        if (!this.stateStack) throw new Error("StateChart has already entered, cannot call 'event()'");
        this.stateStack.getLast().events.push(new StateChartEventHandler(eventType, targetStateId, guardFunction));
    }

    private state(id : string) : void;
    private state(id : string, definition : VoidFn) : void;
    private state(id : string, behavior : StateChartBehavior, definition : VoidFn) : void;
    private state(id : string, behaviorOrDefinition? : StateChartBehavior | VoidFn, definition? : VoidFn) : void {

        if (arguments.length === 1) {
            this.createState(id, null, null, false);
        }
        else if (arguments.length === 2) {
            this.createState(id, behaviorOrDefinition as VoidFn, null, false);
        }
        else if (arguments.length === 3) {
            this.createState(id, definition, behaviorOrDefinition as StateChartBehavior, false);
        }

    }

    private parallel(id : string, definition : VoidFn) : void;
    private parallel(id : string, behavior : StateChartBehavior, definition : VoidFn) : void;
    private parallel(id : string, behaviorOrDefinition : StateChartBehavior | VoidFn, definition? : VoidFn) : void {

        if (arguments.length === 2) {
            this.createState(id, behaviorOrDefinition as VoidFn, null, true);
        }
        else if (arguments.length === 3) {
            this.createState(id, definition, behaviorOrDefinition as StateChartBehavior, true);
        }

    }

    private createState(id : string, definition : VoidFn, behavior : StateChartBehavior, isParallel = false) {

        if (!this.stateStack) throw new Error("StateChart has already entered, cannot call 'parallel()'");
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
            definition.call(this, this.stateDef, this.eventDef);
            this.stateStack.pop();
        }

        if (state.behavior) {
            (state.behavior as any).chart = this;
        }
    }

    private getActiveState() {
        return this.states.find(function (state : StateChartState) {
            return state.isActive;
        });
    }

}