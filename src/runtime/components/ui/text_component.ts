import {component} from "../../component";
import {CommandType} from "../../enums/e_command_type";
import {UIComponent} from "../ui_component";

export interface IFont {
    name : string;
    size : number;
    lineHeight : number;
    weight : number;
    decoration : string;
}

@component("UI/Text")
export class TextComponent extends UIComponent {

    private textContent : string = "";

    private font : IFont = {
        name: "Roboto",
        size: 12,
        lineHeight: 1,
        weight: 400,
        decoration: "none"
    };

    public getFontSize() : number {
        return this.font.size;
    }

    public getFontName() : string {
        return this.font.name;
    }

    public getTextContent() : string {
        return this.textContent;
    }

    public async setTextAsync(text : string) : Promise<string> {
        return await Runtime.awaitCommand<number>(CommandType.SetText, {
            id: this.appElement.id,
            text: text,
            font: this.font,
            setFont: false
        }).then((width : number) => {
            this.textContent = text;
            this.appElement.setWidth(width);
            return this.textContent;
        });
    }

    public async setFontAsync(font : IFont) : Promise<IFont> {
        return await Runtime.awaitCommand<number>(CommandType.SetText, {
            id: this.appElement.id,
            text: this.textContent,
            font: font,
            setFont: true
        }).then((width : number) => {
            this.font = font;
            this.appElement.setWidth(width);
            return this.font;
        });
    }

    public static OnDeserialized(instance : TextComponent, json : IJson) : void {
        instance.textContent = json.textContent;
        //instance.font = json.font || instance.font;
    }

    public serialize() : any {
        return {
            commands: [
                {
                    type: CommandType.SetText,
                    data: {
                        id: this.appElement.id,
                        text: this.textContent,
                        font: this.font
                    }
                }
            ]
        }
    }

}