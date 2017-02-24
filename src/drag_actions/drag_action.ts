import {EditorElement} from "../editor_element/editor_element";

interface IDragAnnotation {
    eventType : "enter" | "exit" | "hover" | "drop";
    actionType : typeof DragAction;
    methodName : string;
}

const DragAnnotationMap = new Map<Object, Array<IDragAnnotation>>();

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
        const dragEventAnnotations = DragAnnotationMap.get(element.constructor);

        if (!dragEventAnnotations) return;

        const actionType = action.constructor;

        for (let i = 0; i < dragEventAnnotations.length; i++) {
            const annotation = dragEventAnnotations[i];
            if (annotation.actionType === actionType && annotation.eventType === eventType) {
                (element as any)[annotation.methodName](action);
            }
        }

    }

}

type DragDescriptor = TypedPropertyDescriptor<(dragAction : DragAction) => any>;

function onDragActionMouseEnter(actionType : typeof DragAction) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        const array = DragAnnotationMap.get(target) || new Array<IDragAnnotation>();
        array.push({ eventType: "enter", actionType: actionType, methodName: propertyKey });
        DragAnnotationMap.set(target, array);
    };
}

function onDragActionMouseExit(actionType : typeof DragAction) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        const array = DragAnnotationMap.get(target) || new Array<IDragAnnotation>();
        array.push({ eventType: "exit", actionType: actionType, methodName: propertyKey });
        DragAnnotationMap.set(target, array);
    };
}

function onDragActionDrop(actionType : typeof DragAction) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        const array = DragAnnotationMap.get(target) || new Array<IDragAnnotation>();
        array.push({ eventType: "drop", actionType: actionType, methodName: propertyKey });
        DragAnnotationMap.set(target, array);
    };
}

function onDragActionMouseOver(actionType : typeof DragAction) {
    return function (target : Object, propertyKey : string, descriptor : DragDescriptor) {
        const array = DragAnnotationMap.get(target) || new Array<IDragAnnotation>();
        array.push({ eventType: "hover", actionType: actionType, methodName: propertyKey });
        DragAnnotationMap.set(target, array);
    };
}