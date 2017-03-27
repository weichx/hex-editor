import {EventDef, StateChart, StateChartBehavior, StateChartEvent, StateDef} from "../../src/state_chart/state_chart";

describe("Statechart - singular", function () {

    class Evt_DoorUnlock extends StateChartEvent {}
    class Evt_DoorLock extends StateChartEvent {}
    class Evt_DoorOpen extends StateChartEvent {}
    class Evt_DoorClose extends StateChartEvent {}

    function getChart(behaviors : { [str : string] : StateChartBehavior } = {}) {

        return new StateChart(function (state : StateDef, event : EventDef) {

            state("closed", behaviors["closed"], function () {

                event(Evt_DoorUnlock, "unlocked");

                state("locked", behaviors["locked"], function () {
                    event(Evt_DoorUnlock, "unlocked");
                });

                state("unlocked", behaviors["unlocked"], function () {
                    event(Evt_DoorLock, "locked");
                    event(Evt_DoorOpen, "opened");
                });

            });

            state("opened", behaviors["opened"], function () {
                event(Evt_DoorClose, "unlocked");
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
        chart.trigger(new Evt_DoorUnlock());
        chart.update();
        expect(chart.isInState("unlocked")).toBeTruthy();
        expect(chart.isInState("locked")).toBeFalsy();
        expect(chart.isInState("closed")).toBeTruthy();
    });

    it("should move from closed/unlocked  to opened and back to closed/locked", function () {
        const chart = getChart();
        chart.trigger(new Evt_DoorUnlock());
        chart.trigger(new Evt_DoorOpen());
        chart.update();
        expect(chart.isInState("opened")).toBeTruthy();
        expect(chart.isInState("closed")).toBeFalsy();
        expect(chart.isInState("locked")).toBeFalsy();
        expect(chart.isInState("unlocked")).toBeFalsy();
        chart.trigger(new Evt_DoorClose());
        chart.update();
        expect(chart.isInState("opened")).toBeFalsy();
        expect(chart.isInState("closed")).toBeTruthy();
        expect(chart.isInState("unlocked")).toBeTruthy();
        expect(chart.isInState("locked")).toBeFalsy();
    });

    it("should not transition on invalid event", function () {
        const chart = getChart();
        chart.trigger(new Evt_DoorClose());
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
        chart.trigger(new Evt_DoorUnlock());
        chart.update(); //update = 1
        chart.update(); //update = 2
        chart.trigger(new Evt_DoorOpen()); //exit = 1
        chart.update(); //update = 2, not in closed state
        chart.trigger(new Evt_DoorClose()); //enter = 2
        chart.update(); //update = 3, in closed state again
        expect(enterCount).toBe(2);
        expect(updateCount).toBe(3);
        expect(exitCount).toBe(1);

    });

});

describe("StateChart - parallel", function () {

    it("should be in a parallel state", function () {

        class Evt_Parallel extends StateChartEvent {}
        class Evt_Singular extends StateChartEvent {}

        const chart = new StateChart(function (state : StateDef, event : EventDef) {

            state("state0");

            state.parallel("parallel", function () {
                state("state1");
                state("state2");
            });

            event(Evt_Parallel, "parallel");
            event(Evt_Singular, "state0");

        });

        expect(chart.isInState("state0")).toBeTruthy();
        expect(chart.isInState("state1")).toBeFalsy();
        expect(chart.isInState("state2")).toBeFalsy();
        expect(chart.isInState("parallel")).toBeFalsy();
        chart.trigger(new Evt_Parallel());
        chart.update();
        expect(chart.isInState("parallel")).toBeTruthy();
        expect(chart.isInState("state1")).toBeTruthy();
        expect(chart.isInState("state2")).toBeTruthy();
        expect(chart.isInState("state0")).toBeFalsy();
        chart.trigger(new Evt_Singular());
        chart.update();
        expect(chart.isInState("state0")).toBeTruthy();
        expect(chart.isInState("state1")).toBeFalsy();
        expect(chart.isInState("state2")).toBeFalsy();
        expect(chart.isInState("parallel")).toBeFalsy();

    });

    class Evt_TextBold extends StateChartEvent {}
    class Evt_TextUnderline extends StateChartEvent {}
    class Evt_TextItalic extends StateChartEvent {}
    class Evt_TextReset extends StateChartEvent {}
    class Evt_TextDecorate extends StateChartEvent {}

    function getChart(behaviors : {[str : string] : StateChartBehavior} = {}) {

        return new StateChart(function (state : StateDef, event : EventDef) {

            state("text-undecorated");

            state.parallel("text-decorated", behaviors["text-decorated"], function () {

                state('bold', behaviors["bold"], function () {

                    state('bold.off', behaviors["bold.off"], function () {
                        event(Evt_TextBold, "bold.on");
                    });

                    state('bold.on', behaviors["bold.on"], function () {
                        event(Evt_TextBold, "bold.off");
                    });

                });

                state('underline', behaviors["underline"], function () {

                    state('underline.off', behaviors["underline.on"], function () {
                        event(Evt_TextUnderline, "underline.on");
                    });

                    state('underline.on', behaviors["underline.off"], function () {
                        event(Evt_TextUnderline, "underline.off");
                    });

                });

            });

            event(Evt_TextReset, "text-undecorated");
            event(Evt_TextDecorate, "text-decorated");

        });

    }

    it("should enter parallel child states", function () {
        const chart = getChart();
        expect(chart.isInState("text-decorated")).toBeFalsy();
        chart.trigger(new Evt_TextDecorate());
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
        chart.trigger(new Evt_TextDecorate());
        chart.trigger(new Evt_TextBold());
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
        chart.trigger(new Evt_TextDecorate());
        chart.trigger(new Evt_TextBold());
        chart.update();
        expect(count).toBe(1);
    });

});

