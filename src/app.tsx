import {EditorCustomElement} from "./editor_element/editor_custom_element";
import {Toolbar} from "./chrome/toolbar";
import {SplitPane} from "./ui_elements/split_pane";
import {WindowFrame} from "./chrome/editor_window_frame";
import {HierarchyWindow} from "./windows/hierarchy/hierarchy_window";
import {AssetWindow} from "./windows/asset_window";
import {SceneWindow} from "./windows/scene_window";
import {InspectorWindow} from "./windows/inspector_window";
import {WindowColors} from "./editor_theme";
import {MenuBar} from "./chrome/menu_bar";


export class EditorApplication extends EditorCustomElement<{}> {

    public getDomData() : IDomData {
        return { tagName: "div", classList: "editor-application" };
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <MenuBar/>,
            <Toolbar/>,
            <SplitPane distribution={0.2}>

                <SplitPane axis={SplitDirection.Horizontal}>

                    <WindowFrame>
                        <HierarchyWindow title="Hierarchy" icon=""/>
                    </WindowFrame>
                    <WindowFrame>
                        <AssetWindow title="Assets"/>
                    </WindowFrame>
                </SplitPane>

                <SplitPane distribution={0.7}>
                    <WindowFrame>
                        <SceneWindow title="Scene" icon=""/>
                    </WindowFrame>
                    <WindowFrame>
                        <InspectorWindow title="Inspector" icon=""/>
                    </WindowFrame>
                </SplitPane>


            </SplitPane>
        ]
    }

}

createStyleSheet(`<style>

.editor-application {
    overflow:hidden;
    width: 100%;
    height: 100%;
    background: ${WindowColors.backgroundGrey};
    position: relative;
}
</style>`);

(EditorRuntime as any).start(EditorApplication);
