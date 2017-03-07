import {AppElement} from "../runtime/app_element";
import {RuntimeEvent} from "./runtime_event";

export class AppElementParentChanged extends RuntimeEvent {

    public onAppElementParentChanged(appElement? : AppElement, newParent? : AppElement, oldParent? : AppElement) : void {}

}

