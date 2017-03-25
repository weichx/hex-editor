namespace StateChart {

    const StateChartStack = new Array<Chart>();
    const StateMap = new Map<string, State>();
    const EventQueue = new Array<any>();

    //always in a leaf state
    //set by path
    //when leaving states, traverse to exit then traverse to enter
    class Chart implements IStateChartState {

        public readonly id : string;
        public readonly chart : Chart;
        public readonly behavior : Behavior;

        private eventQueue : Array<any>;
        private stateMap : Map<string, State>;
        private activeSubstate : State;
        private states : Array<State>;

        constructor(definition : () => void) {
            this.id = "$root";
            this.chart = this;
            this.eventQueue = new Array<any>();
            this.stateMap = new Map<string, State>();
            this.states = [];
            StateChartStack.push(this);
            definition();
            StateChartStack.pop();
            this.enter();
        }

        //todo for concurrent state handling, each state should have a count of how many state paths they are active in
        //when counter hits 0, actually exit, otherwise dont call exit
        //its probably easiest for states to handle that internally via enter/exit calls
        //to report states, when we hit a concurrent state w/ multiple active states, branch for each state
        //and continue to traverse
        protected setPath(source : string[], path : string[]) : void {
            //var source = this.paths[source];
            //find the first node where path and source differ
            //exit the rest of source
            //enter the rest of path
            //assert path ends in a leaf node
            //if not, enter path.end[0] until we hit a leaf node
            let diffIndex = 0;
            while (source[diffIndex] && path[diffIndex] && source[diffIndex] === path[diffIndex]) {
                diffIndex++;
            }

            for (let i = diffIndex; i < source.length; i++) {
                this.stateMap.get(path[i]).exit();
            }

            for (let i = diffIndex; i < path.length; i++) {
                this.stateMap.get(path[i]).enter();
            }

            let statePointer = this.stateMap.get(path.getLast());
            while (!statePointer.isLeaf()) {
                statePointer = statePointer.states[0];
                statePointer.enter();
            }

            for (let i = 0; i < source.length; i++) {
                const currentState = source[i];
                if (currentState === path[i]) {

                }
            }
        }

        private getConfiguration() : Array<State[]> {
            let queue = new Array<State[]>();
            let current = new Array<State>();
            let branches = Array<State[]>();
            queue.push([this.activeSubstate]);

            while(queue.length > 0) {
                branches.push(processBranch(queue.shift()));
            }

            function processBranch(branch : State[]) : Array<State> {
                const node = branch.getLast();
                branch.push(node);
                if(node.isLeaf()) {
                    return branch;
                }

                const activeNodeCount = node.getActiveStateCount();
                if(activeNodeCount === 1) return branch;

                const activeNodes = node.getActiveStates();
                for(let i = 1; i < activeNodes.length; i++) {
                    const branch = current.slice();
                    branch.push(activeNodes[i]);
                    queue.push(branch);
                }
                processBranch(branch);


                return branch;
            }

            return branches;
        }

        protected enter() {
            if (this.behavior) {
                this.behavior.enter();
            }
            const activeState = this.states[0];
            if (activeState) {
                activeState.enter();
            }
        }

        public goTo(id : string) {

        }

        public trigger(evt : ChartEvent) {
            //traverse states
            //for each state
            //if state is active
            //if state handles event
            //push state onto FILO queue
            //run through queue calling event handlers

        }

        public update() : void {
            const evt = this.eventQueue.getFirst();
            if (evt) {
                this.eventQueue.removeAt(0);
                // const handlerStates = this.eventMap.get(evt.constructor);
                // if(!handlerStates) return;
            }
            this.activeSubstate.update();
        }

        public addState(state : State) {

        }

        public addEvent(event : ChartEvent) : void {

        }

        public setBehavior(behavior : Behavior) {
            if (this.behavior) {
                this.behavior.destroy();
            }
            (this as any).behavior = behavior;
            if (this.behavior) {
                this.behavior.initialize();
            }
        }

    }

    interface IStateChartState {

        readonly id : string;
        readonly chart : Chart;
        readonly behavior : Behavior;

        // addState(state : StateChartState) : void;
        // addEvent(event : StateChartEvent) : void;
        // setBehavior(behavior : typeof StateChartBehavior) : void;

    }

    class StateBase {

        protected readonly behavior : Behavior;
        protected readonly states : Array<StateBase>;

        constructor() {

        }

        protected enter() {
            if (this.behavior) this.behavior.enter();
        }

        protected exit() {
            if (this.behavior) this.behavior.exit();
        }

        protected getActiveStateCount() : number {
            return this.states.length;
        }

        protected getActiveStates() : Array<StateBase> {
            return this.states;
        }
    }

    class State extends StateBase {

        public readonly id : string;
        public readonly chart : Chart;
        protected parent : State;
        protected states : Array<State>;

        constructor(id : string, definition : () => void, parent : State) {
            super();
            this.id = id;
            this.chart = StateChartStack.getLast();
            this.parent = parent;
            this.states = [];
            //push active state
            definition();
            //pop active state
        }

        public enter() {
            if (this.isLeaf()) {
                // this.chart.enterLeaf(this);
            }
        }

        public getPath() : string[] {
            let ptr = this as State;
            let retn = new Array<string>();
            while (ptr) {
                retn.push(ptr.id);
                ptr = ptr.parent;
            }
            return retn.reverse();
        }

        public isLeaf() : boolean {
            return this.states.length === 0;
        }

        protected addEvent(evt : any, target : string, guard? : (data : any) => boolean) {

        }

        protected addState(state : State) {
            this.chart.addState(state);
            this.states.push(state);
        }

    }

    class ConcurrentState extends State {

    }

    class ChartEvent {

    }

    var currentState : State = null;
    var eventContext : State = null;

    class Behavior {

        public readonly chart : Chart;
        public readonly state : State;

        public initialize() {}

        public enter() {}

        public update() {}

        public exit() {}

        public destroy() {}

    }

    function state(id : string, definition : () => any) {
        StateChartStack.getLast().addState(new State(id, definition));
    }

    function event(eventName : string, guard? : (data? : any) => boolean) {
        if (currentState === null) {
            throw new Error("Events are only definable within a definition function");
        }
        // eventContext.addEvent(new ChartEvent());
    }

    function behavior(behavior : Behavior) {

    }
}