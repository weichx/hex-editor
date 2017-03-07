import {AppElement} from "../runtime/app_element";
import {RuntimeEvent} from "./runtime_event";

export class AppElementIndexChanged extends RuntimeEvent {

    public onAppElementIndexChanged(appElement? : AppElement, index? : number, oldIndex? : number) : void {}

}

