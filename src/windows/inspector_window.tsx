import {Vertical} from "../ui_elements/vertical_stack";
import {TextInput} from "../ui_elements/text_input";
import {SelectionChanged} from "../editor_events/evt_selection_changed";
import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
import {InspectorRow} from "../ui_elements/inspector/inspector_row";
import {ComponentMenu} from "./inspector/component_menu";
import {WindowColors} from "../editor/editor_theme";
import {ComponentRenderer} from "../renderers/component/component_renderer";
import {AppElement} from "../runtime/app_element";
import {Component} from "../runtime/component";
import {createElement} from "../editor_element/element_renderer";
import {TransformInspector} from "../renderers/component/app_element_inspector";
import {CreateBinding} from "../editor/binding";

export class InspectorWindow extends EditorWindowElement<IWindowAttrs> {

    public readonly selection : AppElement;

    public onSelectionChanged(newSelection : AppElement, oldSelection : AppElement) : void {
        (this as any).selection = newSelection;
        this.getChildRoot().clearChildren();
        if (!this.selection) return;
        this.getChildRoot().addChild(createElement(TransformInspector, {
            appElement: this.selection
        }));
        const components = newSelection.getAllComponents();
        for (let i = 0; i < components.length; i++) {
            this.createComponentDrawer(components[i]);
        }
        this.getChildRoot().addChild(createElement(ComponentMenu));
    }

    public onUpdated() : void {
        if(!this.selection) return;
        const components = this.selection.getAllComponents();
        for(let i = 0; i < components.length; i++) {
            const cmp = components[i] as any;
            if(cmp.onInspectorUpdated) {
                cmp.onInspectorUpdated();
            }
        }
    }

    public onRendered() {
        EditorRuntime.updateTree.add(this);
        EditorRuntime.on(SelectionChanged, this);
        this.onSelectionChanged(EditorRuntime.getSelection() as AppElement, null);
    }

    public createInitialStructure(children : any) : JSX.Element<{}> {
        return <div class="inspector-window">
            <div class="inspector-header">
                <div x-if={this.selection} class="inspector-name-field">
                    <InspectorRow label="Name">
                        <TextInput value={ CreateBinding(this, "selection", "name") }/>
                    </InspectorRow>
                </div>
            </div>

            <Vertical x-child-root/>

        </div>;
    }

    private createComponentDrawer(component : Component) {
        const renderer = ComponentRenderer.get(component as any);
        if (renderer) {
            this.getChildRoot().addChild(renderer);
        }
    }

}

createStyleSheet(`
<style>

.inspector-window {
    width:100%;
    overflow: auto;
    display:flex;
    flex-direction:column;
}

.inspector-header {
    background: ${WindowColors.foregroundGrey};
}
  
</style>`);