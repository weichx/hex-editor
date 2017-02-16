import {Vertical} from "../../ui_elements/vertical_stack";
import {TextBoxWithIcon} from "../../ui_elements/text_box_icon";
import {Button} from "../../ui_elements/button";
import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {ComponentOption} from "./component_option";

export class ComponentMenu extends EditorCustomElement<{}> {

    private showComponentSelection : boolean = false;

    private createComponentOption(componentType : typeof Component, componentName : string) {
        return <ComponentOption
            onClick={() => this.addComponent(componentType)}
            label={componentName}>
        </ComponentOption>;
    }

    public onRendered() {
        // Component.types.forEach((componentType : typeof Component, key : string) => {
        //     const option = this.createComponentOption(componentType, key) as ComponentOption;
        //     this.addChild(option);
        // });
    }

    public onUpdated() {
        if (EditorRuntime.getInput().isMouseDown()) {
            const mp = EditorRuntime.getInput().getMousePosition();
            if (!this.isElementInHierarchy(document.elementFromPoint(mp.x, mp.y))) {
                this.showComponentSelection = false;
            }
        }
    }

    public createInitialStructure(children : any) : JSX.Element<any> {
        return <div class="inspector-add-component">
            <div class="inspector-component-menu">
                <Button x-if-eval={!this.showComponentSelection}
                        onClick={ () => this.showComponentSelection = true}>Add Component</Button>

                <Vertical x-if={this.showComponentSelection}>
                    <TextBoxWithIcon iconName="search" color="grey" binding="searchString"></TextBoxWithIcon>
                    <Vertical x-child-root></Vertical>
                </Vertical>
            </div>
        </div>
    }

    private addComponent(componentType : typeof Component) : void {
        EditorRuntime.getSelection().addComponent(componentType);
        this.showComponentSelection = false;
    }

}

createStyleSheet(`
<style>

.inspector-component-menu {
    width: calc(100% - 4px);
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.inspector-component-menu .component-item {
    cursor: pointer;
}

.inspector-component-menu .component-item:hover {
    background: rgba(69,245,255,0.32);
}

</style>`);