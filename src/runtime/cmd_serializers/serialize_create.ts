import {CommandSerializer, serializeCommandType} from "./_cmd_serializer";
import {UIComponent} from "../components/ui_component";

@serializeCommandType(CommandType.Create)
class SerializeCreateCommand extends CommandSerializer {

    public serializeCommand(appElement : AppElement) : string {
        const retn : any = {};
        const uiComponent = appElement.getComponent(UIComponent);
        if(uiComponent) {
            // uiComponent.getTagName();
            // uiComponent.getAttributes();
            // uiComponent.getPaintClasses();
            // uiComponent.getPaintStyles();
            retn.tagName = "div";
        }
        else {
            retn.tagName = "div";
        }

        const parent = appElement.getParent();
        retn.id = appElement.id;
        retn.parentId = parent.id;
        retn.type = CommandType.Create;
        return JSON.stringify(retn);
    }

}