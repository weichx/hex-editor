import {CommandSerializer, serializeCommandType} from "./_cmd_serializer";
import {BackgroundComponent} from "../components/background_component";

@serializeCommandType(CommandType.PaintBackground)
class SerializePaintBackgroundCommand extends CommandSerializer {

    public serializeCommand(appElement : AppElement) : string {
        const retn : any = {};
        const background = appElement.getComponent(BackgroundComponent);
        const color = (background as any).color;
        retn.background = {
            color: { r: color.r, g: color.g, b: color.b, a: color.a }
        };
        retn.id = appElement.id;
        retn.type = CommandType.PaintBackground;
        return JSON.stringify(retn);
    }

}