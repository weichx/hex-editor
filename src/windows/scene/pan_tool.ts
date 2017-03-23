import {SceneTool} from "./scene_tool";

export class ScenePanTool extends SceneTool {

    protected panning : boolean = false;

    public update() {
        // const input = EditorRuntime.getInput();
        // if(!input.isMouseInEditorElement(this.sceneBodyRoot)) {
        //     this.panning = false;
        //     return;
        // }
        // if (input.isMouseDownThisFrame()) {
        //     this.panning = true;
        //     this.sceneWindow.pan(input.getMouseDelta());
        // }
        // else if(this.panning && input.isMouseDown()) {
        //     this.sceneWindow.pan(input.getMouseDelta());
        // }
        // else if(input.isMouseUp()) {
        //     this.panning = false;
        // }
    }

}