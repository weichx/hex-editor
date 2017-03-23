import {Component, component} from "../component";
import {Color} from "../color";
import {Vector2} from "../vector2";

@component("UI")
export class UIComponent extends Component {

    public tagName : string;
    public position : Vector2;
    public dimensions : Vector2;
    public rotation : number;
    public scale : number;
    public anchors : Vector2[];
    public tethers : Vector2[];
    public foregroundColor : Color;
    public backgroundColor : Color;


    public getTypeName() : string {
        return this.constructor.name.replace("Component", "");
    }

    public serialize() : Indexable<any> {
        return {
            commands: [],
        };
    }
}