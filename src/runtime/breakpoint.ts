import {Vector2} from "./vector2";
import {serializeClass} from "./persistance/TEMP_ANNOTATION";

export enum BreakpointType {
    Mobile, Tablet, Laptop, Desktop
}

export enum BreakpointOrientation {
    Portrait, Landscape
}

@serializeClass
export class Breakpoint {

    //todo this is super basic
    public static getDimensions(name : BreakpointType) : Vector2 {
        switch (name) {
            case BreakpointType.Mobile:
                return new Vector2(375, 667); //iphone 7
            case BreakpointType.Tablet:
                return new Vector2(768, 1024); //ipad
            case BreakpointType.Laptop:
                return new Vector2(1280, 800); //macbook
            case BreakpointType.Desktop:
                return new Vector2(1920, 1080); //hd desktop monitor
            default:
                return new Vector2(-1, -1);

        }
    }

}