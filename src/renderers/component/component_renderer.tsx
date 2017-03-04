import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {PropertyRenderer} from "../property/property_renderer";
import {Horizontal} from "../../ui_elements/horizontal";
import {ToggleIcon} from "../../ui_elements/icon";
import {createElement} from "../../editor_element/element_renderer";
import {CheckboxInput} from "../../ui_elements/checkbox_input";
import {titlize} from "../../util";
import {WindowColors} from "../../editor/editor_theme";
import {getExposedFieldMap} from "./expose_as";
import {Component} from "../../runtime/component";
import {TypeOf} from "../../runtime/interfaces/i_typeof";

interface IAttrs<T extends Component> {
    component : T;
}

export class ComponentRenderer<T extends Component> extends EditorCustomElement<IAttrs<T>> {

    protected editorDataMap = getExposedFieldMap(this.attrs.component);
    protected component = this.attrs.component as T;

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "component-renderer" }
    }

    public getRenderer<T>(propertyName : string, attrs : any) : PropertyRenderer<T> {
        const editorData = this.editorDataMap.get(propertyName);
        return PropertyRenderer.get(this.attrs.component, editorData, attrs);
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            this.createStandardHeaderStructure(),
            this.createStandardBodyStructure(children)
        ];
    }

    public createStandardHeaderStructure() : JSXElement {
        return <Horizontal style="position:relative">
            <ToggleIcon class="inspector-toggle" visibilityTarget={ () => this.getChildRoot() }/>
            <CheckboxInput class="enabled-input" value={true}/>
            <span class="component-name">
                    {this.getDisplayName(this.attrs.component.constructor.name)}
                </span>
        </Horizontal>
    }

    public createStandardBodyStructure(children? : JSXElement) : JSXElement {
        return <div x-child-root class="component-renderer-child-root">
            {children}
        </div>;
    }

    public getDisplayName(input : string) : string {
        const split = titlize(input).split(" ");
        if (split[split.length - 1] === "Component") {
            split.pop();
        }
        return split.join(" ");
    }

    private static rendererMap = new Map<typeof Component, typeof ComponentRenderer>();

    public static get<T extends Component>(component : TypeOf<T>) : ComponentRenderer<T> {
        const type = component.constructor as typeof Component;
        const rendererType = ComponentRenderer.rendererMap.get(type);
        return createElement(rendererType || DefaultComponentRenderer, {
            component: component
        });
    }

    public static annotation(component : typeof Component) {
        return function (target : typeof ComponentRenderer) {
            ComponentRenderer.rendererMap.set(component, target);
        }
    }

}

export const renderer = ComponentRenderer.annotation;

class DefaultComponentRenderer extends ComponentRenderer<any> {

    public onRendered() {
        if (!this.editorDataMap) return;
        const childRoot = this.getChildRoot();
        this.editorDataMap.forEach((value : IEditorAnnotationData) => {
            let renderer = PropertyRenderer.get(this.attrs.component, value);
            if (renderer) {
                childRoot.addChild(renderer);
            }
        });
    }

}

createStyleSheet(`<style>

.component-renderer {
    border-bottom: 1px solid ${WindowColors.borderGrey};
    margin-bottom: 0.25em;
    padding-bottom: 0.25em;
}

.component-renderer .inspector-toggle {
    position: absolute;
    top: 4px;
    left: 1px;
    font-size: 0.7em;
}

.component-renderer .enabled-input {
    position: absolute;
    left: 10px;
}

.component-renderer .component-name {
    padding-left: 2em;
    font-weight: 800;
    font-size: 0.9em;
}
</style>`);