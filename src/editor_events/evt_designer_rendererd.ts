import {RuntimeEvent} from "./runtime_event";
import {Vector2} from "../runtime/vector2";

export class DesignerRendered extends RuntimeEvent {

    public onDesignerRendered : (stage : PIXI.Container, mouse? : Vector2) => void;

}
