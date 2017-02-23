export type EvtType<T> = {
    new () : T;
    eventName? : string
}

export class EventEmitter {

    private listenerMap : Map<any, any>;

    constructor() {
        this.listenerMap = new Map<any, any>();
    }

    public hasListeners<T>(evt : EvtType<T>) : boolean {
        const map = this.listenerMap.get(evt);
        return map && map.length > 0;
    }

    public on<T>(type : EvtType<T>, handler : T) : void {
        const handlers = this.listenerMap.get(type) || [];
        const idx = handlers.indexOf(handler);
        if (idx === -1) {
            handlers.push(handler);
        }
        this.listenerMap.set(type, handlers);
    }

    public off<T>(type : EvtType<T>, handler : T) : void {
        const handlers = this.listenerMap.get(type);
        if (!handlers) return;
        const idx = handlers.indexOf(handler);
        if (idx !== -1) {
            handlers.splice(idx, 1);
        }
    }

    public emit<T>(type : EvtType<T>, ...args : any[]) {
        const handlers = this.listenerMap.get(type);
        if (!handlers || handlers.length === 0) return;
        const eventName = (type.eventName) ? type.eventName : "on" + type.name;
        for (let i = 0; i < handlers.length; i++) {
            handlers[i][eventName].apply(handlers[i], args);
        }
    }
}

