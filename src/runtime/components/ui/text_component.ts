import {component} from "../../component";
import {CommandType} from "../../enums/e_command_type";
import {UIComponent} from "../ui_component";
import {inspector} from "../../../renderers/component/expose_as";
import {Vector2} from "../../vector2";

const dirtyMap = new WeakMap<any, any>();

function DirtyCheck(ctx : any, fieldName : string, callback? : (...args : any[]) => any) {
    let map = dirtyMap.get(ctx);
    if (!map) {
        map = {};
        dirtyMap.set(ctx, map);
    }

    const lastValue = map[fieldName];
    const currentValue = ctx[fieldName];

    if (Array.isArray(lastValue)) {
        if (!Array.isArray(currentValue)) {

            return true;
        }
        const ref = map[fieldName].ref;
        if(ref === currentValue) {
            map[fieldName].ref = currentValue;
            return true;
        }
        if (lastValue !== currentValue) {
            map[fieldName] = currentValue;
            callback(currentValue);
            return true;
        }
    }
    else if (typeof lastValue === "object") {

    }

    return lastValue === currentValue;

}

@component("UI/Text")
export class TextComponent extends UIComponent {

    @inspector(String) private textContent : string = "";
    @inspector(Object) private list : Vector2[] = [];

    public async setTextAsync(text : string) : Promise<string> {
        return await Runtime.awaitCommand<number>(CommandType.SetText, {
            id: this.appElement.id,
            text: text
        }).then((width : number) => {
            this.textContent = text;
            this.appElement.setWidth(width);
            return this.textContent;
        });
    }

    public static OnDeserialized(instance : TextComponent, json : IJson) : void {
        instance.textContent = json.textContent;
    }

    public serialize() : any {
        return {
            commands: [
                { type: CommandType.SetText, data: { id: this.appElement.id, text: this.textContent } }
            ]
        }
    }

    public onInspectorUpdated() : void {
        if(DirtyCheck(this, "textContent")) {
            this.setTextAsync(this.textContent);
        }
    }

}