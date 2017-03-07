import {AppElement} from "../runtime/app_element";
import {RuntimeEvent} from "./runtime_event";

export class SelectionChanged extends RuntimeEvent {

    public onSelectionChanged : (newSelection? : AppElement, previousSelection? : AppElement) => void;

}



