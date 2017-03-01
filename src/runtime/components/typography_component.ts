import {UIComponent} from "./ui_component";
import {CommandType} from "../enums/e_command_type";
import {Rectangle} from "../rectangle";

export class Font {
    //size
    //style
    //decoration
    //line height
    //font name
}

export class TypographyComponent extends UIComponent {

    public text : string;
    private setTextPromise : Promise<string>;

    public font : Font;

    public async setTextAsync(text : string) : Promise<string> {
        this.setTextPromise = new Promise((resolve : IResolve<string>) => {

            // Runtime.sendCommand(CommandType.SetText, this.appElement.id, (rect : Rectangle) => {
            //     this.appElement.setRect(rect);
            //     resolve(text);
            // });

        });
        return this.setTextPromise;
    }

    public async setFontAsync(font : string) : Promise<string> {
        return null;
    }

}