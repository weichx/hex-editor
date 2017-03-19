"use strict";
exports.__esModule = true;
var editor_html_element_1 = require("./editor_html_element");
function onClick(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "click", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onClick = onClick;
function onRightClick(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "contextmenu", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onRightClick = onRightClick;
function onMouseDown(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "mousedown", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onMouseDown = onMouseDown;
function onMouseUp(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "mouseup", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onMouseUp = onMouseUp;
function onMouseMove(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "mousemove", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onMouseMove = onMouseMove;
function onMouseEnter(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "mouseenter", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onMouseEnter = onMouseEnter;
function onMouseExit(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "mouseleave", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onMouseExit = onMouseExit;
function onBlur(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "blur", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onBlur = onBlur;
function onFocus(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "focus", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onFocus = onFocus;
function onKeyDown(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "keydown", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onKeyDown = onKeyDown;
function onKeyUp(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "keyup", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onKeyUp = onKeyUp;
function onKeyPress(target, propertyKey, descriptor) {
    var array = editor_html_element_1.InputEventAnnotationMap.get(target) || new Array();
    array.push({ type: "keypress", methodName: propertyKey });
    editor_html_element_1.InputEventAnnotationMap.set(target, array);
}
exports.onKeyPress = onKeyPress;
