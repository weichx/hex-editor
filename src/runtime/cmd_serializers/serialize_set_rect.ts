import {CommandSerializer, serializeCommandType} from "./_cmd_serializer";

@serializeCommandType(CommandType.SetRect)
class SerializeSetRectCommand extends CommandSerializer {

    public serializeCommand(appElement : AppElement) : string {
        if (!appElement) return "";
        const rect = (appElement as any).rect;
        return JSON.stringify({
            id: appElement.id,
            type: CommandType.SetRect,
            rect: {
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height
            }
        });
    }

}