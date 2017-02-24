import {SceneTool} from "./scene_tool";

export class ScenePanTool extends SceneTool {

    protected panning : boolean = false;

    public update() {
        const input = EditorRuntime.getInput();
        if(!input.isMouseInEditorElement(this.sceneBodyRoot)) {
            this.panning = false;
            return;
        }
        if (input.isMouseDownThisFrame()) {
            this.panning = true;
            const delta = input.getMouseDelta();
            if(delta.isZero()) return;
            this.sceneWindow.pan(delta);
        }
        else if(this.panning && input.isMouseDown()) {
            const delta = input.getMouseDelta();
            if(delta.isZero()) return;
            this.sceneWindow.pan(delta);
        }
        else if(input.isMouseUp()) {
            this.panning = false;
        }
    }

}