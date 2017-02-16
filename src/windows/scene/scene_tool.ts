import {SceneWindow} from "../scene_window";
import {EditorElement} from "../../editor_element/editor_element";

export class SceneTool {

    public sceneWindow : SceneWindow;
    public sceneBodyRoot : EditorElement;

    constructor(sceneWindow : SceneWindow) {
        this.sceneWindow = sceneWindow;
        this.sceneBodyRoot = this.sceneWindow.getChildById("scene-window-body")
    }

    public update() : void {}

    public enable() : void {}

    public disable() : void {}

}