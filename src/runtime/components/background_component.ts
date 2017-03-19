import {component, Component} from "../component";
import {Color} from "../color";
import {CommandType} from "../enums/e_command_type";
import {inspector} from "../../renderers/component/expose_as";
import {serializeAs} from "cerialize";

@component("Paint/Background")
export class BackgroundComponent extends Component {

    @inspector(Color)
    @serializeAs(Color)
    private _color : Color = Color.White;

    public get color() : Color {
        return this._color;
    }

    public set color(color : Color) {
        this._color.r = color.r;
        this._color.g = color.g;
        this._color.b = color.b;
        this._color.a = color.a;
        Runtime.sendCommand(CommandType.PaintBackground, { id: this.appElement.id, color: this._color });
    }

    public onEnabled() : void {
        Runtime.sendCommand(CommandType.PaintBackground, { id: this.appElement.id, color: this._color });
    }

    public onDisabled() : void {
        Runtime.sendCommand(CommandType.PaintBackground, { id: this.appElement.id, color: null });
    }

    public static OnDeserialized(instance : BackgroundComponent, json : IJson) : void {
        instance.color = json.color;
    }

    public serialize() : any {
        return {
            color: this.color.copyTo({})
        }
    }

}