import {InputEventAnnotationMap} from "./editor_html_element";
export type MouseEventHandler = (e? : MouseEvent) => any;
export type MouseDescriptor = TypedPropertyDescriptor<MouseEventHandler>;
export type FileDragHandler = (e? : DragEvent) => any;
export type FileDragDescriptor = TypedPropertyDescriptor<FileDragHandler>;

export function onClick(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "click", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onRightClick(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "contextmenu", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onMouseDown(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "mousedown", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onMouseUp(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "mouseup", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onMouseMove(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "mousemove", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onMouseEnter(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "mouseenter", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onMouseExit(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "mouseleave", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onBlur(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "blur", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFocus(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "focus", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onKeyDown(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "keydown", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onKeyUp(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "keyup", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onKeyPress(target : Object, propertyKey : string, descriptor : MouseDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "keypress", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragEnter(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragenter", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragExit(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragexit", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragStart(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragstart", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragEnd(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragend", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDrop(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "drop", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragLeave(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragleave", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDrag(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "drag", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}

export function onFileDragOver(target : Object, propertyKey : string, descriptor : FileDragDescriptor) {
    const array = InputEventAnnotationMap.get(target) || new Array<any>();
    array.push({ type: "dragover", methodName: propertyKey });
    InputEventAnnotationMap.set(target, array);
}