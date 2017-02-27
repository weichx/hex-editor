import {CommandType} from "../../runtime/enums/e_command_type";

BrowserRuntime.setCommandSerializer(CommandType.UpdateInput, function() {
    return BrowserRuntime.getInput().serialize();
});