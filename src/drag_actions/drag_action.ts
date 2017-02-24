import {EditorElement} from "../editor_element/editor_element";

interface IDragAnnotation {
    eventType : string;
    actionType : any;
    methodName : string;
}

const DragAnnotationMap = new Map<Object, DragAnnotationHandler>();

export class DragAction {

    public name : string;

    public onDragStart() : void {}

    public onUpdate() : void {}

    public onDrop(editorElement : EditorElement) : void {}

    public static MouseEnter = onDragActionMouseEnter;
    public static MouseExit = onDragActionMouseExit;
    public static MouseOver = onDragActionMouseOver;
    public static Drop = onDragActionDrop;

    public static invokeDropHandlers(element : EditorElement, action : DragAction) {
        DragAction.invoke(element, action, "drop");
    }

    public static invokeEnterHandlers(element : EditorElement, action : DragAction) {
        DragAction.invoke(element, action, "enter");
    }

    public static invokeExitHandlers(element : EditorElement, action : DragAction) {
        DragAction.invoke(element, action, "exit");
    }

    public static invokeHoverHandlers(element : EditorElement, action : DragAction) {
        DragAction.invoke(element, action, "hover");
    }

    private static invoke(element : EditorElement, action : DragAction, eventType : string) : void {
        const actionType = action.constructor;
        //todo -- use shadow tree to make this faster
        while(element) {
            var handler = DragAnnotationMap.get(element.constructor);
            if(handler && handler.typeSet.has(actionType)) {
                handler.invoke(element, action, eventType);
                return;
            }
            element = element.parent;
        }
    }

}

class DragAnnotationHandler {

    public handlers : Array<IDragAnnotation>;
    public typeSet : Set<any>;

    constructor() {
        this.handlers = [];
        this.typeSet = new Set();
    }

    public add(eventType : string, actionType : any, methodName : string) : void {
        this.typeSet.add(actionType);
        this.handlers.push({eventType, actionType, methodName});
    }

    public invoke(element : EditorElement, action : DragAction, eventType : string) : void {
        const actionType  = action.constructor;
        for (let i = 0; i < this.handlers.length; i++) {
            const annotation = this.handlers[i];
            if (annotation.actionType === actionType && annotation.eventType === eventType) {
                (element as any)[annotation.methodName](action);
            }
        }
    }

}

type DragDescriptor = TypedPropertyDescriptor<(dragAction : DragAction) => any>;

function onDragActionMouseEnter<T extends DragAction>(actionType : INewable<T>) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        target = target.constructor;
        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
        handler.add("enter", actionType, propertyKey);
        DragAnnotationMap.set(target, handler);
    };
}

function onDragActionMouseExit<T extends DragAction>(actionType : INewable<T>) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        target = target.constructor;
        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
        handler.add("exit", actionType, propertyKey);
        DragAnnotationMap.set(target, handler);
    };
}

function onDragActionDrop<T extends DragAction>(actionType : INewable<T>) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        target = target.constructor;
        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
        handler.add("drop", actionType, propertyKey);
        DragAnnotationMap.set(target, handler);
    };
}

function onDragActionMouseOver<T extends DragAction>(actionType : INewable<T>) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        target = target.constructor;
        const handler = DragAnnotationMap.get(target) || new DragAnnotationHandler();
        handler.add("hover", actionType, propertyKey);
        DragAnnotationMap.set(target, handler);
    };
}