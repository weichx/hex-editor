import {XIf} from "../editor_ui_attrs/attr_x_if";
import {XIfEval} from "../editor_ui_attrs/attr_x_if_eval";
import {EditorElement} from "./editor_element";

export function IdAndEventsAttributes(context : EditorElement, element : EditorElement, attributes : any) : void {

    if (attributes['x-id']) {
        context.setChildIdAlias(attributes["x-id"], element);
    }

    if (attributes['x-if'] !== void 0) {
        const fn = attributes['x-if'];
        new XIf(element, fn); //todo attach these to the element they sit on
    }

    if (attributes['x-if-eval'] !== void 0) {
        new XIfEval(element, attributes['x-if-eval']).onUpdated();

    }

    if (attributes['x-hidden'] !== void 0) {
        element.setVisible(false);
    }

    if (attributes['x-child-root']) {
        context.setChildRoot(element);
    }

    if (attributes['x-bind-style']) {
        const styleBindings = attributes['x-bind-style'];
        Object.keys(styleBindings).forEach(function (key : string) {
            //new XStyleBinding(element, key, styleBindings[key]);
        });
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
