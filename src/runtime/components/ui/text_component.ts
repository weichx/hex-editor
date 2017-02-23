import {Component} from "../../component";

export class TextComponent extends Component {

    private textContent : string;

    public async setTextAsync(text : string) : Promise<string> {
        return Promise.resolve(text);
        // return Runtime.nextTick(() => {
        //     this.textContent = text;
        //     Runtime.sendCommand("SetText", this.appElement.id);
        //     return text;
        // })
    }

}