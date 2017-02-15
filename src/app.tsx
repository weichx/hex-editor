

namespace HexEditorInternal {

    import EditorCustomElement = HexEditor.EditorCustomElement;
    import MenuBar = HexEditorInternal.MenuBar;
    import Toolbar = HexEditorInternal.Toolbar;
    import WindowFrame = HexEditorInternal.WindowFrame;
    import SplitPane = HexEditor.SplitPane;
    import HierarchyWindow = HexEditor.HierarchyWindow;
    import AssetWindow = HexEditor.AssetWindow;
    import SceneWindow = HexEditor.SceneWindow;
    import InspectorWindow = HexEditor.InspectorWindow;

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
}

createStyleSheet(`<style>

.editor-application {
    overflow:hidden;
    width: 100%;
    height: 100%;
    background: ${HexEditorTheme.WindowColors.backgroundGrey};
    position: relative;
}
</style>`);



(window as any).Hex = {
    createElement: HexEditorInternal.createElement,
    Binding: HexEditor.EditorBindingElement
};

EditorRuntime.start(HexEditorInternal.EditorApplication);
