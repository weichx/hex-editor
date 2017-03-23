import {StageWindow} from "./stage_window";
import {EditorElement} from "../../editor_element/editor_element";

export class SceneTool {

    public stageWindow : StageWindow;
    public stageBodyRoot : EditorElement;

    constructor(stageWindow : StageWindow) {
        this.stageWindow = stageWindow;
        this.stageBodyRoot = this.stageWindow.getChildRoot();
    }

    public update() : void {}

    public enable() : void {}

    public disable() : void {}

}