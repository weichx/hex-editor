import {Vertical} from "../../ui_elements/vertical_stack";
import {TextBoxWithIcon} from "../../ui_elements/text_box_icon";
import {Button} from "../../ui_elements/button";
import {ComponentOption} from "./component_option";
import {Component} from "../../runtime/component";
import {createElement} from "../../editor_element/element_renderer";
import {EditorHTMLElement} from "../../editor_element/editor_html_element";

export class ComponentMenu extends EditorHTMLElement<{}> {

    private showComponentSelection : boolean = false;

    protected getDomData() {
        return { tagName: "div", classList: "inspector-component-menu" }
    }

    public onRendered() {
        const componentPairs = Component.getComponentTypePathPairs();
        type Pair = { type : typeof Component, path : string };
        componentPairs.sort(function (item1 : Pair, item2 : Pair) {
            if (item1.path < item2.path)
                return -1;
            if (item1.path > item2.path)
                return 1;
            return 0;
        });
        for (let i = 0; i < componentPairs.length; i++) {
            this.getChildRoot().addChild(createElement(ComponentOption, {
                label: componentPairs[i].path,
                onClick: () => this.addComponent(componentPairs[i].type)
            }));
        }
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
        return [
            <h4 class="add-component-title" x-if={this.showComponentSelection}>Add Component</h4>,
            <Button x-if-eval={!this.showComponentSelection}
                    onClick={ () => this.showComponentSelection = true}>Add Component</Button>,

            <Vertical x-if={this.showComponentSelection}>
                <TextBoxWithIcon iconName="search" color="grey" binding="searchString"/>
                <Vertical x-child-root/>
            </Vertical>
        ];
    }

    private addComponent(componentType : typeof Component) : void {
        EditorRuntime.getSelection().addComponent(componentType);
        this.showComponentSelection = false;
    }

}

createStyleSheet(`
<style>

.inspector-component-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    border: 1px solid grey;
}

.inspector-component-menu .add-component-title {
    margin: 0.2em; auto;
}

.inspector-component-menu .component-item:hover {
    background: rgba(69,245,255,0.32);
}

</style>`);