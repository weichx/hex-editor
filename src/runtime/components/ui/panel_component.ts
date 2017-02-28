import {UIComponent} from "../ui_component";
import {component} from "../../component";

@component("UI/Panel")
export class PanelComponent extends UIComponent {

    public serialize() : any {
        return {
            elementType: "Panel"
        }
    }

}