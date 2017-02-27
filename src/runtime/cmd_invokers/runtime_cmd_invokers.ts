import {CommandType} from "../enums/e_command_type";

Runtime.setCommandInvoker(CommandType.UpdateInput, function(data : IJson) : any {
    Runtime.getInput().deserialize(data);
});