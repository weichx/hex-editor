import {PropertyRenderer} from "../property/property_renderer";
import {Horizontal} from "../../ui_elements/horizontal";
import {ToggleIcon} from "../../ui_elements/icon";
import {createElement} from "../../editor_element/element_renderer";
import {CheckboxInput} from "../../ui_elements/checkbox_input";
import {titlize} from "../../util";
import {WindowColors} from "../../editor/editor_theme";
import {getExposedFieldMap} from "./expose_as";
import {Component} from "../../runtime/component";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {CreateBinding} from "../../editor/binding";
import {AppElement} from "../../runtime/app_element";
import {DesignerRendered} from "../../editor_events/evt_designer_rendererd";

interface IAttrs<T extends Component> {
    component : T;
}

export class ComponentRenderer<T extends Component> extends EditorHTMLElement<IAttrs<T>> {

    protected editorDataMap = getExposedFieldMap(this.attrs.component);
    protected component = this.attrs.component as T;
    protected gfx : PIXI.Graphics;

    public onCreated() {
        if (this.onDesignerRendered !== ComponentRenderer.prototype.onDesignerRendered) {
            EditorRuntime.on(DesignerRendered, this);
            this.gfx = new PIXI.Graphics();
        }
    }

    public onDestroyed() {
        if (this.onDesignerRendered !== ComponentRenderer.prototype.onDesignerRendered) {
            EditorRuntime.off(DesignerRendered, this);
            this.gfx.parent.removeChild(this.gfx);
        }
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
            <CheckboxInput class="enabled-input" value={ CreateBinding(this.component, "isEnabled") }/>
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

    public onDesignerRendered(gfx : PIXI.Container) {}

    private static rendererMap = new Map<typeof Component, typeof ComponentRenderer>();

    public static getAllRenderers(element : AppElement) {
        if (!element) return [];
        const retn = new Array<ComponentRenderer<any>>();
        const components = element.getAllComponents();
        for (let i = 0; i < components.length; i++) {
            const renderer = ComponentRenderer.get(components[i]);
            retn.push(renderer);

        }
        return retn;
    }

    public static get<T extends Component>(component : T) : ComponentRenderer<T> {
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