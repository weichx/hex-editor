

namespace HexEditor {

    import Component = Hex.Component;
    import AppElement = Hex.AppElement;
    import SelectionChanged = EditorEvent.SelectionChanged;
    import createElement = HexEditorInternal.createElement;

    export class InspectorWindow extends EditorWindowElement<IWindowAttrs> {

        private selection : AppElement;

        public onSelectionChanged(newSelection : AppElement, oldSelection : AppElement) : void {
            this.selection = newSelection;
            this.childRoot.clearChildren();
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
                        <InspectorRow label="Static">
                            {/*<CheckboxInput binding={this.selection.isStatic}/>*/}
                        </InspectorRow>
                    </div>
                </div>

                <Vertical x-child-root></Vertical>

                <ComponentMenu x-if={this.selection} x-id="menu"/>

            </div>;
        }

        private createComponentDrawer(component : Component) {
            // const renderer = ComponentRenderer.get(component);
            // if (renderer) {
            //     this.addChild(renderer);
            // }
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
    background: ${HexEditorTheme.WindowColors.foregroundGrey};
}
  
</style>`);