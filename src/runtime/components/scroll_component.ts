import {UIComponent} from "./ui_component";
import {component} from "../component";

export enum ScrollBarVisibility {
    Never, Always, Auto
}

@component("UI/Scroll")
export class ScrollComponent extends UIComponent {

    public enableXScrolling : boolean;
    public enableYScrolling : boolean;
    public scrollBarVisibility : ScrollBarVisibility;



}