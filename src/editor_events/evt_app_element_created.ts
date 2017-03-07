import {AppElement} from "../runtime/app_element";
import {RuntimeEvent} from "./runtime_event";

export class AppElementCreated extends RuntimeEvent {

    public onAppElementCreated(appElement? : AppElement) : void {}

}

