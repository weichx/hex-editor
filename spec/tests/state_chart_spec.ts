import {StateChart, StateChartBehavior, StateChartBuilder} from "../../src/state_chart/state_chart";

describe("Statechart - singular", function () {

    const Evt_DoorUnlock = StateChart.createEvent();
    const Evt_DoorLock = StateChart.createEvent();
    const Evt_DoorOpen = StateChart.createEvent();
    const Evt_DoorClose = StateChart.createEvent();

    function getChart(behaviors : { [str : string] : StateChartBehavior } = {}) {

        return new StateChart(function (builder : StateChartBuilder) {
            var { state, transition } = builder.toDSL();
            state("closed", behaviors["closed"], function () {

                transition(Evt_DoorUnlock, "unlocked");

                state("locked", behaviors["locked"], function () {
                    transition(Evt_DoorUnlock, "unlocked");
                });

                state("unlocked", behaviors["unlocked"], function () {
                    transition(Evt_DoorLock, "locked");
                    transition(Evt_DoorOpen, "opened");
                });

            });

            state("opened", behaviors["opened"], function () {
                transition(Evt_DoorClose, "unlocked");
            });

        });
    }

    it("should start in the closed and locked state", function () {
        expect(getChart().isInState("closed")).toBeTruthy();
        expect(getChart().isInState("locked")).toBeTruthy();
    });

    it("should not start in the open state", function () {
        expect(getChart().isInState("opened")).toBeFalsy();
        expect(getChart().isInState("unlocked")).toBeFalsy();
    });

    it("should move to unlocked from #closed with unlock door event", function () {
        const chart = getChart();
        expect(chart.isInState("unlocked")).toBeFalsy();
        expect(chart.isInState("locked")).toBeTruthy();
        expect(chart.isInState("closed")).toBeTruthy();
        chart.trigger(Evt_DoorUnlock);
        chart.update();
        expect(chart.isInState("unlocked")).toBeTruthy();
        expect(chart.isInState("locked")).toBeFalsy();
        expect(chart.isInState("closed")).toBeTruthy();
    });

    it("should move from closed/unlocked  to opened and back to closed/locked", function () {
        const chart = getChart();
        chart.trigger(Evt_DoorUnlock);
        chart.trigger(Evt_DoorOpen);
        chart.update();
        expect(chart.isInState("opened")).toBeTruthy();
        expect(chart.isInState("closed")).toBeFalsy();
        expect(chart.isInState("locked")).toBeFalsy();
        expect(chart.isInState("unlocked")).toBeFalsy();
        chart.trigger(Evt_DoorClose);
        chart.update();
        expect(chart.isInState("opened")).toBeFalsy();
        expect(chart.isInState("closed")).toBeTruthy();
        expect(chart.isInState("unlocked")).toBeTruthy();
        expect(chart.isInState("locked")).toBeFalsy();
    });

    it("should not transition on invalid event", function () {
        const chart = getChart();
        chart.trigger(Evt_DoorClose);
        chart.update();
        expect(chart.isInState("opened")).toBeFalsy();
        expect(chart.isInState("closed")).toBeTruthy();
        expect(chart.isInState("locked")).toBeTruthy();
        expect(chart.isInState("unlocked")).toBeFalsy();
    });

    it("should run behavior on enter", function () {

        var enterCount = 0;
        var updateCount = 0;
        var exitCount = 0;

        class ClosedBehavior extends StateChartBehavior {

            public enter() {
                enterCount++;
            }

            public update() {
                updateCount++;
            }

            public exit() {
                exitCount++;
            }
        }

        let behaviors : any = {
            closed: new ClosedBehavior()
        };

        var chart = getChart(behaviors); //enter = 1
        chart.trigger(Evt_DoorUnlock);
        chart.update(); //update = 1
        chart.update(); //update = 2
        chart.trigger(Evt_DoorOpen); //exit = 1
        chart.update(); //update = 2, not in closed state
        chart.trigger(Evt_DoorClose); //enter = 2
        chart.update(); //update = 3, in closed state again
        expect(enterCount).toBe(2);
        expect(updateCount).toBe(3);
        expect(exitCount).toBe(1);

    });

    it("should handle state behavior functions", function() {
        let enterCount = 0;
        let exitCount = 0;
        let updateCount = 0;
        let initCount = 0;
        const Evt_Swap = StateChart.createEvent();
        const chart = new StateChart(function(builder : StateChartBuilder) {
            const {state, transition, enter, exit, update, init } = builder.toDSL();
            state("state1", function() {
                enter(function() {
                    enterCount++;
                });
                exit(function() {
                    exitCount++;
                });
                update(function() {
                    updateCount++;
                });
                init(function () {
                    initCount++;
                });
                transition(Evt_Swap, "state2");
            });
            state("state2", function() {
                transition(Evt_Swap, "state1");
            });
        });
        expect(initCount).toBe(1);
        expect(enterCount).toBe(1);
        expect(exitCount).toBe(0);
        expect(updateCount).toBe(0); //exit - no update tick
        chart.trigger(Evt_Swap);
        chart.update();
        expect(initCount).toBe(1);
        expect(enterCount).toBe(1);
        expect(exitCount).toBe(1);
        expect(updateCount).toBe(0);
        chart.trigger(Evt_Swap);
        chart.update();
        expect(initCount).toBe(1);
        expect(enterCount).toBe(2);
        expect(exitCount).toBe(1);
        expect(updateCount).toBe(1); //re-enter so it gets an update tick
        chart.update();
        expect(initCount).toBe(1);
        expect(enterCount).toBe(2);
        expect(exitCount).toBe(1);
        expect(updateCount).toBe(2); //stay - get an update tick
    });

    it("should handle events", function() {
        const Evt_Swap = StateChart.createEvent();
        let count = 0;
        const chart = new StateChart(function(builder : StateChartBuilder) {
            const {state, transition, event } = builder.toDSL();
            state("state1", function() {
                event(Evt_Swap, () => count++);
                transition(Evt_Swap, "state2");
            });
            state("state2", function() {
                transition(Evt_Swap, "state1");
            });
        });
        expect(count).toBe(0);
        chart.trigger(Evt_Swap);
        chart.update();
        expect(count).toBe(1); // events are handled before exits
        chart.trigger(Evt_Swap);
        chart.update();
        expect(count).toBe(1); // events not fired when not active
        chart.trigger(Evt_Swap);
        chart.update();
        expect(count).toBe(2); // event fires when moving into state
    });

    it("should handle events with data", function() {
        const Evt_Swap = StateChart.createEvent<{count : number}>();
        let count = 0;
        const chart = new StateChart(function(builder : StateChartBuilder) {
            const {state, transition, event } = builder.toDSL();
            state("state1", function() {
                event(Evt_Swap, (data : { count : number}) => {
                    expect(data.count).toBe(100);
                    count++
                });
                transition(Evt_Swap, "state2");
            });
            state("state2", function() {
                transition(Evt_Swap, "state1");
            });
        });
        chart.trigger(Evt_Swap, {count: 100});
        chart.update();
        expect(count).toBe(1);
    })
});

describe("StateChart - parallel", function () {

    it("should be in a parallel state", function () {

        const Evt_Parallel = StateChart.createEvent();
        const Evt_Singular = StateChart.createEvent();

        const chart = new StateChart(function (builder : StateChartBuilder) {
            const {state, transition} = builder.toDSL();

            state("state0");

            state.parallel("parallel", function () {
                state("state1");
                state("state2");
            });

            transition(Evt_Parallel, "parallel");
            transition(Evt_Singular, "state0");

        });

        expect(chart.isInState("state0")).toBeTruthy();
        expect(chart.isInState("state1")).toBeFalsy();
        expect(chart.isInState("state2")).toBeFalsy();
        expect(chart.isInState("parallel")).toBeFalsy();
        chart.trigger(Evt_Parallel);
        chart.update();
        expect(chart.isInState("parallel")).toBeTruthy();
        expect(chart.isInState("state1")).toBeTruthy();
        expect(chart.isInState("state2")).toBeTruthy();
        expect(chart.isInState("state0")).toBeFalsy();
        chart.trigger(Evt_Singular);
        chart.update();
        expect(chart.isInState("state0")).toBeTruthy();
        expect(chart.isInState("state1")).toBeFalsy();
        expect(chart.isInState("state2")).toBeFalsy();
        expect(chart.isInState("parallel")).toBeFalsy();

    });

    const Evt_TextBold = StateChart.createEvent();
    const Evt_TextUnderline = StateChart.createEvent();
    const Evt_TextItalic = StateChart.createEvent();
    const Evt_TextReset = StateChart.createEvent();
    const Evt_TextDecorate = StateChart.createEvent();

    function getChart(behaviors : {[str : string] : StateChartBehavior} = {}) {

        return new StateChart(function (builder : StateChartBuilder) {
            const {state, transition} = builder.toDSL();

            state("text-undecorated");

            state.parallel("text-decorated", behaviors["text-decorated"], function () {

                state('bold', behaviors["bold"], function () {

                    state('bold.off', behaviors["bold.off"], function () {
                        transition(Evt_TextBold, "bold.on");
                    });

                    state('bold.on', behaviors["bold.on"], function () {
                        transition(Evt_TextBold, "bold.off");
                    });

                });

                state('underline', behaviors["underline"], function () {

                    state('underline.off', behaviors["underline.on"], function () {
                        transition(Evt_TextUnderline, "underline.on");
                    });

                    state('underline.on', behaviors["underline.off"], function () {
                        transition(Evt_TextUnderline, "underline.off");
                    });

                });

            });

            transition(Evt_TextReset, "text-undecorated");
            transition(Evt_TextDecorate, "text-decorated");

        });

    }

    it("should enter parallel child states", function () {
        const chart = getChart();
        expect(chart.isInState("text-decorated")).toBeFalsy();
        chart.trigger(Evt_TextDecorate);
        chart.update();
        expect(chart.isInState("text-decorated")).toBeTruthy();
        expect(chart.isInState("bold.off")).toBeTruthy();
        expect(chart.isInState("bold.on")).toBeFalsy();
        expect(chart.isInState("underline.on")).toBeFalsy();
        expect(chart.isInState("underline.off")).toBeTruthy();
    });

    it("should enter parallel child child state", function () {
        const chart = getChart();
        expect(chart.isInState("text-decorated")).toBeFalsy();
        chart.trigger(Evt_TextDecorate);
        chart.trigger(Evt_TextBold);
        chart.update();
        expect(chart.isInState("text-decorated")).toBeTruthy();
        expect(chart.isInState("bold.off")).toBeFalsy();
        expect(chart.isInState("bold.on")).toBeTruthy();
        expect(chart.isInState("underline.on")).toBeFalsy();
        expect(chart.isInState("underline.off")).toBeTruthy();
    });

    it("should exit all parallel child states when exiting parallel", function () {
        let count = 0;
        class BoldOffBehavior extends StateChartBehavior {
            exit() {
                count++;
            }
        }
        const chart = getChart({"bold.off": new BoldOffBehavior()});
        chart.trigger(Evt_TextDecorate);
        chart.trigger(Evt_TextBold);
        chart.update();
        expect(count).toBe(1);
    });

});

