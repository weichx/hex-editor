type EventDescriptor = TypedPropertyDescriptor<(event : RuntimeEvent) => any>;

export class RuntimeEvent {

    public static on<T extends RuntimeEvent>(eventType : INewable<T>) {
        return function (target : object, propertyKey : string, descriptor : EventDescriptor) {
            const proto = target as any;
            proto.__runtime_events__ = proto.__runtime_events__ || new Map<any, any>();
            const eventMap = proto.__runtime_events__;
            eventMap.set(eventType, propertyKey);
        }
    }

}