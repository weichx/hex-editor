import {RuntimeEvent} from "./runtime_event";

export class WindowResized extends RuntimeEvent {

    public onWindowResized : (width? : number, height? : number) => void;

}

