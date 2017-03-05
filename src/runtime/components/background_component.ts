import {component, Component} from "../component";
import {Color} from "../color";
import {CommandType} from "../enums/e_command_type";
import {inspector} from "../../renderers/component/expose_as";
import {serializeAs} from "cerialize";

@component("Paint/Background")
export class BackgroundComponent extends Component {

    @inspector(Color)
    @serializeAs(Color)
    private color : Color = Color.White;

    public setColor(color : Color) : void {
        this.color.r = color.r;
        this.color.g = color.g;
        this.color.b = color.b;
        this.color.a = color.a;
        Runtime.sendCommand(CommandType.PaintBackground, this.appElement.id);
    }

    public getColor() : Color {
        return new Color(this.color.r, this.color.g, this.color.b, this.color.a);
    }

    public static OnDeserialized(instance : BackgroundComponent, json : IJson) : void {
        const c = json.color;
        instance.setColor(new Color(c.r, c.g, c.b, c.a));
    }

    public serialize() : any {
        return {
            color: this.color.copyTo({})
        }
    }

    // public onInspectorUpdated() : void {
    //     if(dirtyFields.get("color")) {
    //
    //     }
    // }

}