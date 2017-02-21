import {EditorRuntimeImplementation} from "./runtime";
import {createElement} from "./editor_element/element_renderer";
import {EditorBindingElement} from "./editor_element/editor_binding_element";

declare global {

    let EditorRuntime : EditorRuntimeImplementation;

    interface Window {
        EditorRuntime : EditorRuntimeImplementation;
        createStyleSheet : (css : string) => void;
        bind(ctx : any, path: any) : void;
    }

    interface HTMLStyleElement {
        styleSheet : { cssText : string };
    }

}

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

window.bind = function (ctx : any, path : any) {
    return { ctx: ctx, path: path }
};

(window as any).Hex = {
    createElement: createElement,
    Binding: EditorBindingElement
};

window.HexEnvironmentFlag |= EnvironmentFlag.EditorActive;
window.EditorRuntime = new EditorRuntimeImplementation();
window.Runtime = EditorRuntime as RuntimeImpl;

function loop(delta : number) {
    EditorRuntime.update(delta);
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
