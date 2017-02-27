import {UIComponent} from "../ui_component";

export class PanelComponent extends UIComponent {

    public serialize() : any {
        return {
            elementType: "Panel"
        }
    }

}