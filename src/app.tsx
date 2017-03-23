import {SplitPane} from "./ui_elements/split_pane";
import {WindowFrame} from "./chrome/editor_window_frame";
import {HierarchyWindow} from "./windows/hierarchy/hierarchy_window";
import {InspectorWindow} from "./windows/inspector_window";
import {WindowColors} from "./editor/editor_theme";
import {AssetWindow} from "./windows/asset/asset_window";
import {EditorHTMLElement} from "./editor_element/editor_html_element";
import {StageWindow} from "./windows/scene/stage_window";

export class EditorApplication extends EditorHTMLElement<{}> {

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "editor-application" };
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <input style="display:none" id="file-chooser" type="file"/>,
            <SplitPane distribution={0.2}>
                <SplitPane axis={SplitDirection.Horizontal}>

                    <WindowFrame>
                        <HierarchyWindow title="Hierarchy" icon=""/>
                    </WindowFrame>

                    <WindowFrame>
                        <AssetWindow title="Assets" icon=""/>
                    </WindowFrame>

                </SplitPane>
                <SplitPane distribution={0.7} axis={SplitDirection.Vertical}>

                    <WindowFrame>
                        <StageWindow title="Stage" icon=""/>
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
