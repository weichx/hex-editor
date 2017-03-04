import {CommandType} from "../runtime/enums/e_command_type";
import {EventEmitter} from "../runtime/event_emitter";
import {IPoolable3, ObjectPool3} from "../object_pool";

export class RuntimeCommand implements IPoolable3<CommandType, any, (arg : any) => any> {

    public readonly id : number;
    public type : CommandType;
    public data : any;
    public resolve : (arg : any) => any;

    constructor() {
        this.id = ++idGenerator;
    }

    public onSpawn(type : CommandType, data : any, resolve : (arg : any) => any) : void {
        this.type = type;
        this.data = data;
        this.resolve = resolve;
    }

    public onDespawn() : void {
        this.type = -1;
        this.data = null;
        this.resolve = null;
    }
}

let idGenerator = 0;
let __cacheSerializeContainer : any = {};

export type ICommandInvoker = (json : IJson) => any;
export type ICommandSerializer = (data : any) => any;

type CommandPool = ObjectPool3<RuntimeCommand, CommandType, any, (arg : any) => any>;

export abstract class RuntimeBase extends EventEmitter {

    protected commandQueue : Array<RuntimeCommand>;
    protected invokers : Indexable<ICommandInvoker>;
    protected serializers : Indexable<ICommandSerializer>;
    protected pendingBuffers : Array<string>;
    protected awaitedCommands : Array<RuntimeCommand>;
    protected commandPool : CommandPool;

    constructor() {
        super();
        this.invokers = {};
        this.serializers = {};
        this.commandQueue = [];
        this.pendingBuffers = [];
        this.awaitedCommands = [];
        this.commandPool = new ObjectPool3<RuntimeCommand, CommandType, any, (arg : any) => any>(RuntimeCommand);
    }

    public sendCommand(commandType : CommandType, data : any) {
        //todo - dedup this
        const command = this.commandPool.spawn(commandType, data, null);
        this.commandQueue.push(command);
    }

    public async awaitCommand<T>(commandType : CommandType, payload : any) : Promise<T> {
        //todo -- de-dup this w/ array of await fns
        return new Promise((resolve : IResolve<T>) => {
            const command = this.commandPool.spawn(commandType, payload, resolve);
            this.awaitedCommands.push(command);
            this.commandQueue.push(command);
        });
    }

    protected abstract postMessage(data : string) : void;

    protected onMessage(message : MessageEvent) : void {
        this.pendingBuffers.push(message.data);
    }

    protected sendCommandBuffer() : void {
        //todo using json for now but later will use a
        //format that doesn't need to use json.stringify/parse
        if (this.commandQueue.length === 0) return;
        var length = this.commandQueue.length;
        var buffer = '{ "type": "CommandBuffer", "data": [';
        for (let i = 0; i < length; i++) {
            const command = this.commandQueue[i];
            buffer += this.serializeCommand(command);
            buffer += (i === length - 1) ? "]}" : ",";
            //if command has resolvers then we can't despawn it yet
            if (!command.resolve) this.commandPool.despawn(command);
        }
        this.commandQueue.length = 0;
        this.postMessage(buffer)
    }

    protected serializeCommand(command : RuntimeCommand) : string {
        const serializer = this.serializers[command.type];
        //using short names so less data gets serialized
        __cacheSerializeContainer.id = command.id;
        __cacheSerializeContainer.r = command.resolve !== null;
        __cacheSerializeContainer.ct = command.type;
        __cacheSerializeContainer.d = serializer(command.data);
        return JSON.stringify(__cacheSerializeContainer);
    }

    public invokeCommand(commandType : CommandType, data : any) : any {
        return this.invokers[commandType](data);
    }

    protected decodeCommandBuffers() : void {
        if (this.pendingBuffers.length === 0) return;
        const responses = new Array<any>();
        for (let i = 0; i < this.pendingBuffers.length; i++) {
            const buffer = this.pendingBuffers[i];
            const json = JSON.parse(buffer) as IJson;
            if (json.type === "CommandBuffer") {
                const data = json.data as IJson[];
                for (let j = 0; j < data.length; j++) {
                    let response : any = void 0;
                    const command = data[j];
                    const commandInvoker = this.invokers[command.ct];
                    if(!commandInvoker) console.log("Cannot find invoker for", CommandType[command.ct]);
                    response = commandInvoker(command.d);
                    if (command.r) {
                        responses.push({ id: command.id, data: response });
                    }
                }
            }
            if (json.type === "ResponseBuffer") {
                const data = json.data as Array<{ id : number, data : any }>;
                for (let j = 0; j < data.length; j++) {
                    const response = data[j];
                    //using an array because I don't expect this to have a size
                    //large enough for a map to make sense.
                    const idx = this.awaitedCommands.findIndex(a => a.id === response.id);
                    if (idx !== -1) {
                        const awaitedCommand = this.awaitedCommands[idx];
                        awaitedCommand.resolve(response.data);
                        this.commandPool.despawn(awaitedCommand);
                        this.awaitedCommands.removeAt(idx);
                    }
                }
            }

        }
        this.pendingBuffers.length = 0;
        this.sendResponseBuffer(responses);
    }

    protected sendResponseBuffer(response : Array<{ id : number, data : any }>) : void {
        if (response.length === 0) return;
        //this.postMessage();
    }

    public setCommandSerializer(commandType : CommandType, serializer : ICommandSerializer) : void {
        this.serializers[commandType] = serializer;
    };

    public setCommandInvoker(commandType : CommandType, invoker : ICommandInvoker) : void {
        this.invokers[commandType] = invoker;
    }
}