import {SceneWindow} from "../scene_window";
import {SceneTool} from "./scene_tool";

export class ScenePanTool extends SceneTool {

    constructor(sceneWindow : SceneWindow) {
        super(sceneWindow);
    }

    public update() {
        const input = EditorRuntime.getInput();
        if (input.isMouseDown()) { //todo -- and in scene window
            const delta = input.getMouseDelta();
            //size component
            //fit content
        }
    }

}