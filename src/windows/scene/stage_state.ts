//
// class EditorObject {
//
//     removeListeners()  {
//
//     }
//
// }
//
// class State {
//
//     public enter() : void {}
//
//     public exit() : void {}
//
//     public update() : void {}
//
//     public initialize() : void {}
//
//     public destroy() : void {}
//
//     public transition() : boolean {
//         return true;
//     }
//
// }
//
//
// class DefaultStageState extends State {
//
//     public enter() {
//         EditorRuntime.on(Evt_BeginDrawBox, this);
//     }
//
//     @EditorEvent(Evt_BeginDrawBox)
//
//
//     public update() {
//         this.transition("elsewhere");
//         //onEditorEvent(EventType, new Transition(StateName));
//     }
//
//     public exit() {
//
//     }
//
// }