import {AppElement} from "../app_element";
export abstract class CommandSerializer {

    public abstract serializeCommand(appElement : AppElement) : string;

    private static annotation(commandType : number) {
        return function (target : INewable<CommandSerializer>) {
            CommandSerializer.setSerializer(commandType, target);
        }
    }

    public static setSerializer(commandType : number, CommandSerializerType : INewable<CommandSerializer>) : void {
        const current = (CommandSerializer as any)[commandType];
        if(current) {
            editorGuard(() => {
                throw new Error("Duplicate command CommandSerializer registered for type: " + commandType);
            });
        }
        (CommandSerializer as any)[commandType] = new CommandSerializerType();
    }

    public static getSerializer(commandType : number) : CommandSerializer {
        return (CommandSerializer as any)[commandType];
    }

}

export const serializeCommandType = (CommandSerializer as any).annotation;