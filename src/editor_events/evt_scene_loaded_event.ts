import {Scene} from "../runtime/scene";
import {RuntimeEvent} from "./runtime_event";

export class SceneLoaded extends RuntimeEvent {

    public onSceneLoaded : (scene : Scene) => void;

}
