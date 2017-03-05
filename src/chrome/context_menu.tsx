import {EditorHTMLElement} from "../editor_element/editor_html_element";
import {createElement} from "../editor_element/element_renderer";
import {onClick} from "../editor_element/editor_element_annotations";
import {FontIcon} from "../ui_elements/icon";

interface IMenuOption {
    name : string;
    icon? : string;
    action? : () => void;
    options? : Array<IMenuOption>
}

export class EditorContextMenu extends EditorHTMLElement<{ options : Array<IMenuOption> }> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "editor-context-menu" }
    }

    public onCreated() : void {
        EditorRuntime.updateTree.add(this);
    }

    public onUpdated() : void {
        const input = EditorRuntime.getInput();
        if(input.isMouseDownThisFrame()) {
            const mp = EditorRuntime.getInput().getMousePosition();
            const el = EditorRuntime.getEditorElementAtPoint(mp);
            if (!this.isDescendant(el)) {
                EditorRuntime.hideContextMenu();
            }
        }
    }

    public createInitialStructure() : JSXElement {
        return this.createMenu(this.attrs.options);
    }

    private createMenu(options : IMenuOption[]) : JSXElement {
        return options.map((option : IMenuOption) => {
            return createElement(EditorContextMenuItem, option);
        });
    }
}

class EditorContextMenuItem extends EditorHTMLElement<IMenuOption> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "editor-context-menu-item" }
    }

    @onClick
    protected onClick() : void {
        if(this.attrs.action) {
            this.attrs.action();
        }
        EditorRuntime.hideContextMenu();
    }

    public createInitialStructure() : JSXElement {
        return [
            <FontIcon iconName={this.attrs.icon}/>,
            this.attrs.name
        ]
    }
}

createStyleSheet(`
<style>

.editor-context-menu {
    position: absolute;
    z-index: 100;
    min-width: 200px;
    background: #d4d4d4;
    display: flex;
    flex-direction: column;
    color: black;
    border-radius: 3px;
    padding: 0.5em;
}

.editor-context-menu-item:hover {
    background: lightblue;
}


`);