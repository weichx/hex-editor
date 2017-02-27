import {Vector2} from "./vector2";
import {AppElement} from "./app_element";
import {KeyCode} from "./enums/e_keycode";
import {MouseButtonState} from "./enums/e_mouse_state";

export class Input {
    //todo consider making use of ImmutableVector2 to cut down on new Vector() calls
    protected x : number;
    protected y : number;
    protected lastX : number;
    protected lastY : number;
    protected lastMouseButtonState : MouseButtonState;
    protected mouseButtonState : MouseButtonState;
    protected keyMapCurrent : Array<boolean>;
    protected keyMapPrevious : Array<boolean>;
    protected mouseDownPosition : Vector2;
    protected mouseWheelDeltaX : number;
    protected mouseWheelDeltaY : number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.lastMouseButtonState = 0;
        this.mouseButtonState = 0;
        this.keyMapCurrent = new Array<boolean>(222);
        this.keyMapPrevious = new Array<boolean>(222);
        this.mouseDownPosition = new Vector2(-1, -1);
        this.mouseWheelDeltaX = 0;
        this.mouseWheelDeltaY = 0;
    }

    public update() {
        this.lastX = this.x;
        this.lastY = this.y;
        this.lastMouseButtonState = this.mouseButtonState;
        this.mouseWheelDeltaX = 0;
        this.mouseWheelDeltaY = 0;
        for (let i = 8; i < 222; i++) {
            this.keyMapPrevious[i] = this.keyMapCurrent[i];
        }
    }

    public wasMouseDown() : boolean {
        return (this.lastMouseButtonState & MouseButtonState.AnyButton) !== 0;
    }

    public isMouseDown() : boolean {
        return (this.mouseButtonState & MouseButtonState.AnyButton) !== 0;
    }

    public isMouseUp() : boolean {
        return (this.mouseButtonState & MouseButtonState.AnyButton) === 0;
    }

    public isMouseDownThisFrame() : boolean {
        return !this.wasMouseButtonDown(MouseButtonState.AnyButton) && this.isMouseButtonDown(MouseButtonState.AnyButton);
    }

    public isMouseUpThisFrame() : boolean {
        return !this.wasMouseButtonUp(MouseButtonState.AnyButton) && this.isMouseButtonUp(MouseButtonState.AnyButton);
    }

    public isMouseButtonDownThisFrame(button : MouseButtonState) : boolean {
        return !this.wasMouseButtonDown(button) && this.isMouseButtonDown(button);
    }

    public isMouseButtonUpThisFrame(button : MouseButtonState) : boolean {
        return this.wasMouseButtonUp(button) && !this.isMouseButtonUp(button);
    }

    public isMouseButtonDown(button : MouseButtonState) : boolean {
        return (this.mouseButtonState & button) !== 0;
    }

    public isMouseButtonUp(button : MouseButtonState) : boolean {
        return (this.mouseButtonState & button) === 0;
    }

    public wasMouseButtonDown(button : MouseButtonState) : boolean {
        return (this.lastMouseButtonState & button) !== 0;
    }

    public wasMouseButtonUp(button : MouseButtonState) : boolean {
        return (this.lastMouseButtonState & button) === 0;
    }

    public isKeyDown(key : KeyCode) : boolean {
        return this.keyMapCurrent[key];
    }

    public isKeyUp(key : KeyCode) : boolean {
        return !this.keyMapCurrent[key];
    }

    public isKeyDownThisFrame(key : KeyCode) : boolean {
        return !this.keyMapPrevious[key] && this.keyMapCurrent[key];
    }

    public isKeyUpThisFrame(key : KeyCode) : boolean {
        return this.keyMapPrevious[key] && !this.keyMapCurrent[key];
    }

    public getMouseDelta(cache? : Vector2) {
        if(cache) {
            cache.x = this.x - this.lastX;
            cache.y = this.y - this.lastY;
            return cache;
        }
        return new Vector2(this.x - this.lastX, this.y - this.lastY);
    }

    public getMouseDownDelta(cache? : Vector2) {
        if(cache) {
            cache.x = this.x - this.mouseDownPosition.x;
            cache.y = this.y - this.mouseDownPosition.y;
            return cache;
        }
        return new Vector2(
            this.x - this.mouseDownPosition.x,
            this.y - this.mouseDownPosition.y
        );
    }

    public getMouseWheelDelta(cache? : Vector2) : Vector2 {
        if(cache) {
            cache.x = this.mouseWheelDeltaX;
            cache.y = this.mouseWheelDeltaY;
            return cache;
        }
        return new Vector2(this.mouseWheelDeltaX, this.mouseWheelDeltaY);
    }

    public getMousePosition(cache? : Vector2) : Vector2 {
        if (cache) {
            cache.x = this.x;
            cache.y = this.y;
            return cache;
        }
        return new Vector2(this.x, this.y);
    }

    public getMouseDownPosition(cache? : Vector2) : Vector2 {
        if(cache) {
            cache.x = this.mouseDownPosition.x;
            cache.y = this.mouseDownPosition.y;
            return cache;
        }
        return this.mouseDownPosition.clone();
    }

    public isMouseInAppElement(element : AppElement) : boolean {
        return element.containsPoint(new Vector2(this.x, this.y));
    }

    public getMouseRelative(element : AppElement, cache? : Vector2) {
        const rect = (element as any).rect;
        if(cache) {
            cache.x = this.x - rect.x;
            cache.y = this.y - rect.y;
            return cache;
        }
        return new Vector2(
            this.x - rect.x,
            this.y - rect.y
        );
    }

    public getMouseDownRelative(element : AppElement, cache? : Vector2) {
        const rect = (element as any).rect;
        if(cache) {
            cache.x = this.mouseDownPosition.x - rect.x;
            cache.y = this.mouseDownPosition.y - rect.y;
            return cache;
        }
        return new Vector2(
            this.mouseDownPosition.x - rect.x,
            this.mouseDownPosition.y - rect.y
        );
    }

    public deserialize(data : Indexable<number>) : void {
        this.x = data.x;
        this.y = data.y;
        this.lastX = data.lastX;
        this.lastY = data.lastY;
        this.lastMouseButtonState = data.lastMouseButtonState;
        this.mouseButtonState = data.mouseButtonState;
        this.mouseDownPosition.x = data.mouseDownPositionX;
        this.mouseDownPosition.y = data.mouseDownPositionY;
        this.mouseWheelDeltaX = data.mouseWheelDeltaX;
        this.mouseWheelDeltaY = data.mouseWheelDeltaY;
        //todo - keyboard input
    }

    public serialize() : Indexable<number> {
        return {
            x: this.x,
            y: this.y,
            lastX : this.lastX,
            lastY : this.lastY,
            lastMouseButtonState : this.lastMouseButtonState,
            mouseButtonState : this.mouseButtonState,
            mouseDownPositionX : this.mouseDownPosition.x,
            mouseDownPositionY : this.mouseDownPosition.y,
            mouseWheelDeltaX : this.mouseWheelDeltaX,
            mouseWheelDeltaY : this.mouseWheelDeltaY
        };
        // for(let i = 8; i < 222; i++) {
        //     input.keyMapPrevious[i] = this.keyMapPrevious[i];
        //     input.keyMapCurrent[i] = this.keyMapCurrent[i];
        // }
    }

    protected static normalizeWheelValue(value : number) : number {
        if(value === 0) return 0;
        if(value > 0) return 1;
        return -1;
    }

}