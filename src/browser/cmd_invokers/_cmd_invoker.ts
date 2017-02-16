export abstract class CommandInvoker {

    public abstract invokeCommand(json : IJson, elementMap : IHTMLElementMap) : void;

    private static annotation(commandType : number) {
        return function (target : INewable<CommandInvoker>) {
            CommandInvoker.setInvoker(commandType, target);
        }
    }

    public static setInvoker(commandType : number, CommandInvokerType : INewable<CommandInvoker>) : void {
        const current = (CommandInvoker as any)[commandType];
        if(current) {
            editorGuard(() => {
                throw new Error("Duplicate command interpreter registered for type: " + commandType);
            });
        }
        (CommandInvoker as any)[commandType] = new CommandInvokerType();
    }

    public static getInvoker(commandType : number) : CommandInvoker {
        return (CommandInvoker as any)[commandType];
    }

}

export const invokeCommandType = (CommandInvoker as any).annotation;