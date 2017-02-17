import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {PropertyRenderer} from "../property/property_renderer";
import {Horizontal} from "../../ui_elements/horizontal";
import {ToggleIcon} from "../../ui_elements/icon";
import {createElement} from "../../editor_element/element_renderer";

interface IAttrs {
    component : Component;
}

export class ComponentRenderer extends EditorCustomElement<IAttrs> {

    public onRendered() {
        const editorData = (this.attrs.component.constructor as any).__editorData;
        if (!editorData) return;
        editorData.fieldMap.forEach((value : IEditorAnnotationData) => {
            let renderer = PropertyRenderer.get(this.attrs.component, value);
            if (renderer) {
                this.addChild(renderer);
            }
        });
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <Horizontal>
                <ToggleIcon visibilityTarget={ () => this.childRoot }/>
                <span style="padding-left: 0.5em">
                    {this.getDisplayName(this.attrs.component.constructor.name)}
                </span>
            </Horizontal>,
            <div x-child-root class="component-renderer-child-root"></div>
        ];
    }

    private getDisplayName(input : string) : string {
        const result = input.replace(/([A-Z])/g, ' $1')// insert a space before all caps
            .replace(/^./, function (str) { return str.toUpperCase(); });   // uppercase the first character
        const split = result.split(" ");
        if (split[split.length - 1] === "Component") {
            split.pop();
        }
        return split.join(" ");
    }

    private static rendererMap = new Map<typeof Component, typeof ComponentRenderer>();

    public static set() : void {

    }

    public static get(component : Component) : ComponentRenderer {
        const type = component.constructor as typeof Component;
        const rendererType = ComponentRenderer.rendererMap.get(type);
        return createElement(rendererType || ComponentRenderer, {
            component: component
        });
    }

}


createStyleSheet(`<style>

.component-renderer-root {
    outline: 1px solid white;
    margin: 0.5em !important;
}

.component-render-root > .horizontal {
    padding-top: 3px;
    padding-bottom: 3px;
}

</style>`);