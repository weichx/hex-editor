import {Vertical} from "../ui_elements/vertical_stack";
import {TextInput} from "../ui_elements/text_input";
import {SelectionChanged} from "../editor_events/evt_selection_changed";
import {EditorWindowElement, IWindowAttrs} from "../chrome/editor_window_element";
import {InspectorRow} from "../ui_elements/inspector/inspector_row";
import {ComponentMenu} from "./inspector/component_menu";
import {WindowColors} from "../editor_theme";
import {ComponentRenderer} from "../renderers/component/component_renderer";

export class InspectorWindow extends EditorWindowElement<IWindowAttrs> {

    private selection : AppElement;

    public onSelectionChanged(newSelection : AppElement, oldSelection : AppElement) : void {
        this.selection = newSelection;
        this.getChildRoot().clearChildren();
        if (!this.selection) return;
        // this.addChild(createElement(TransformInspector, {
        //     element: this.selection
        // }));
        const components = newSelection.getAllComponents();
        for (let i = 0; i < components.length; i++) {
            this.createComponentDrawer(components[i]);
        }
    }

    public onRendered() {
        EditorRuntime.on(SelectionChanged, this);
        this.onSelectionChanged(EditorRuntime.getSelection() as AppElement, null);
    }

    public createInitialStructure(children : any) : JSX.Element<{}> {
        return <div class="inspector-window">
            <div class="inspector-header">
                <div x-if={this.selection} class="inspector-name-field">
                    <InspectorRow label="Name">
                        <TextInput binding={this.selection.name}/>
                    </InspectorRow>
                </div>
            </div>

            <Vertical x-child-root></Vertical>

            <ComponentMenu x-if={this.selection} x-id="menu"/>

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
    overflow: scroll;
    display:flex;
    flex-direction:column;
}

.inspector-header {
    background: ${WindowColors.foregroundGrey};
}
  
</style>`);