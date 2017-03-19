import {Component, component} from "../component";
import {Color} from "../color";
import {Vector2} from "../vector2";
import {CommandType} from "../enums/e_command_type";

export class Background {

    constructor() {

    }

    public color : Color;

    public serialize() : any {

    }

}

export class Transform {
    rotation : number;
    position : Vector2;
    scale : Vector2;
}

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

    private background : Background;

    public setBackground() : void {
        Runtime.sendCommand(CommandType.PaintBackground, this.appElement.id)
    }

    public getTypeName() : string {
        return this.constructor.name.replace("Component", "");
    }

    public getBackground() : Background {
        return this.background;
    }

    public serialize() : Indexable<any> {
        return {
            commands: [
                {
                    type: CommandType.PaintBackground,
                    data: { }
                }
            ],
        };
    }
}

class TextComponent extends UIComponent {

    public serialize() : Indexable<any> {
        const retn = super.serialize() as any;
        if(!retn.commands) retn.commands = [];
        retn.commands.push( {
            type: CommandType.SetText,
            data: { text: "hello world", font: "some font" }
        });
        return retn;
    }

}

//spacing component for margin/padding?