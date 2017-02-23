import {EditorRuntimeImplementation} from "./runtime";
import {createElement} from "./editor_element/element_renderer";
import {EditorBindingElement as EBindingElement, EditorBindingElement} from "./editor_element/editor_binding_element";
import {RuntimeImpl} from "./runtime/runtime";

const enum EnvironmentFlag {
    RuntimeActive = 1 << 0,
    EditorActive = 1 << 1,
    DevelopmentEnv = 1 << 2,
    ProductionEnv = 1 << 3,
    TestEnvironment = 1 << 4
}

declare global {

    let EmptyFunction : () => void;
    const editorGuard : (fn : () => void) => void;
    const runtimeGuard : (fn : () => void) => void;
    const developmentGuard : (fn : () => void) => void;
    const productionGuard : (fn : () => void) => void;
    const testGuard : (fn : () => void) => void;
    let EditorRuntime : EditorRuntimeImplementation;
    let Runtime : RuntimeImpl;
    let Bind : (expression : any) => EditorBindingElement;

    let EditorBindingElement : typeof EBindingElement;

    interface Window {
        Runtime : RuntimeImpl;
        EditorRuntime : EditorRuntimeImplementation;
        EditorBindingElement: typeof EBindingElement;
        createStyleSheet : (css : string) => void;
        Bind(ctx : any, path : any) : void;
        editorGuard(fn : () => void) : void;
        runtimeGuard(fn : () => void) : void;
        developmentGuard(fn : () => void) : void;
        productionGuard(fn : () => void) : void;
        testGuard(fn : () => void) : void;
        EmptyFunction(...args : any[]) : void;
        HexEnvironmentFlag : EnvironmentFlag;
    }

    interface HTMLStyleElement {
        styleSheet : { cssText : string };
    }

}

window.Runtime = null;
window.HexEnvironmentFlag = 0;
window.EmptyFunction = function () {};
window.EditorBindingElement = EBindingElement;

window.runtimeGuard = function (fn : () => void) {
    if ((window.HexEnvironmentFlag & EnvironmentFlag.RuntimeActive) !== 0) fn();
};

window.editorGuard = function (fn : () => void) {
    if ((window.HexEnvironmentFlag & EnvironmentFlag.EditorActive) !== 0) fn();
};

window.developmentGuard = function (fn : () => void) {
    if ((window.HexEnvironmentFlag & EnvironmentFlag.DevelopmentEnv) !== 0) fn();
};

window.productionGuard = function (fn : () => void) {
    if ((window.HexEnvironmentFlag & EnvironmentFlag.TestEnvironment) !== 0) fn();
};

window.productionGuard = function (fn : () => void) {
    if ((window.HexEnvironmentFlag & EnvironmentFlag.ProductionEnv) !== 0) fn();
};

const DocumentHead = document.head || document.getElementsByTagName('head')[0];

window.createStyleSheet = function (css : string) {

    css = css.replace('<style>', "").replace("</style>", "");
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    if (styleTag.styleSheet) {
        styleTag.styleSheet.cssText = css;
    } else {
        styleTag.appendChild(document.createTextNode(css));
    }

    DocumentHead.appendChild(styleTag);
    return styleTag;
};

window.Bind = function (ctx : any, path : any) {
    return { ctx: ctx, path: path }
};

(window as any).Hex = {
    createElement: createElement
};

window.HexEnvironmentFlag |= EnvironmentFlag.EditorActive;
window.EditorRuntime = new EditorRuntimeImplementation();
window.Runtime = EditorRuntime as any;

function loop(delta : number) {
    EditorRuntime.update(delta);
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
