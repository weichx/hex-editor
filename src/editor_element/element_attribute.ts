import {XIf} from "../editor_ui_attrs/attr_x_if";
import {XIfEval} from "../editor_ui_attrs/attr_x_if_eval";
import {EditorElement} from "./editor_element";
import {EditorBinding} from "../editor/binding";

export function IdAndEventsAttributes(context : EditorElement, element : EditorElement, attributes : any) : void {

    if (attributes['x-id']) {
        context.setChildIdAlias(attributes["x-id"], element);
    }

    if (attributes['x-if'] !== void 0) {
        const binding = attributes['x-if'];
        const xif = XIf.Pool.spawn(element, binding);
        EditorRuntime.updateTree.add(xif);
    }

    if (attributes['x-if-eval'] !== void 0) {
        const binding = attributes['x-if-eval'];
        const xif = XIfEval.Pool.spawn(element, binding);
        EditorRuntime.updateTree.add(xif);
    }

    if (attributes['x-hidden'] !== void 0) {
        element.setVisible(!attributes['x-hidden']);
    }

    if (attributes['x-visible'] !== void 0) {
        if(attributes['x-visible']) return;
        attributes['class'] = attributes['class'] || "";
        attributes['class'] = "invisible " + attributes['class'];
    }

    if (attributes['x-invisible'] !== void 0) {
        if(!attributes['x-invisible']) return;
        attributes['class'] = attributes['class'] || "";
        attributes['class'] = "invisible " + attributes['class'];
    }

    if (attributes['x-bind-class']) {
        const attr = attributes['x-bind-class'];
        const keys = Object.keys(attr);
        for(let i = 0; i < keys.length; i++) {
            const className = keys[i];
            const binding = attr[className];
            if(binding instanceof EditorBinding) {
                binding.setHost(element);
                binding.onChange(function(newValue : any) {
                    element.getDomNode().classList.toggle(className, !Boolean(newValue));
                });

            }
        }
    }

    if (attributes['x-child-root']) {
        context.setChildRoot(element);
    }

    if (attributes['x-bind-style']) {
        const attr = attributes['x-bind-style'];
        const keys = Object.keys(attr);
        for(let i = 0; i < keys.length; i++) {
            const styleName = keys[i];
            const binding = attr[styleName];
            if(binding instanceof EditorBinding) {
                binding.setHost(element);
                binding.onChange(function(newValue : any) {
                    (element.getDomNode().style as any)[styleName] = newValue;
                });

            }
        }
    }

    if (attributes['onClick']) {
        const fn = attributes["onClick"];
        if (typeof fn === "function") {
            element.addEventListener("click", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            }, true);
        }
    }

    if (attributes['onRightClick']) {
        const fn = attributes["onRightClick"];
        if (typeof fn === "function") {
            element.addEventListener("contextmenu", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
                e.preventDefault();
            }, true);
        }
    }

    if (attributes['onMouseDown']) {
        const fn = attributes["onMouseDown"];
        if (typeof fn === "function") {
            element.addEventListener("mousedown", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes['onMouseUp']) {
        const fn = attributes["onMouseUp"];
        if (typeof fn === "function") {
            element.addEventListener("mouseup", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes['onMouseMove']) {
        const fn = attributes["onMouseMove"];
        if (typeof fn === "function") {
            element.addEventListener("mousemove", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes['onMouseEnter']) {
        const fn = attributes["onMouseEnter"];
        if (typeof fn === "function") {
            element.addEventListener("mouseenter", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes['onMouseExit']) {
        const fn = attributes["onMouseExit"];
        if (typeof fn === "function") {
            element.addEventListener("mouseleave", function (e : MouseEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onBlur"]) {
        const fn = attributes["onBlur"];
        if (typeof fn === "function") {
            element.addEventListener("blur", function (e : FocusEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onFocus"]) {
        const fn = attributes["onFocus"];
        if (typeof fn === "function") {
            element.addEventListener("focus", function (e : FocusEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onKeyDown"]) {
        const fn = attributes["onKeyDown"];
        if (typeof fn === "function") {
            element.addEventListener("keydown", function (e : KeyboardEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onKeyUp"]) {
        const fn = attributes["onKeyUp"];
        if (typeof fn === "function") {
            element.addEventListener("keyup", function (e : KeyboardEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onKeyPress"]) {
        const fn = attributes["onKeyPress"];
        if (typeof fn === "function") {
            element.addEventListener("keypress", function (e : KeyboardEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

    if (attributes["onInput"]) {
        const fn = attributes["onInput"];
        if (typeof fn === "function") {
            element.addEventListener("input", function (e : KeyboardEvent) {
                fn.call(context, e);
                e.stopPropagation();
            });
        }
    }

}
