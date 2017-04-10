import {Color} from "../../runtime/color";
import {Vector2} from "../../runtime/vector2";
import {MathUtil} from "../../math_util";
import {IRenderFlaggable, RenderDirtyFlags} from "../render_system";
import {Component} from "../../runtime/component";
import {StyleBatch} from "../style_batch";

enum BackgroundRepeat {
    Repeat,
    RepeatX,
    RepeatY,
    Space,
    Round,
    None
}

enum BackgroundScroll {
    ScrollWithContent,
    DoNotScroll,
    Fixed
}

export class Background extends Component {

    private _color : Color;
    private _position : Vector2;
    //todo combine repeat and scroll into one field
    private _repeat : BackgroundRepeat;
    private _scroll : BackgroundScroll;
    private _image : string;
    private _mode : number;

    private hostElement : IRenderFlaggable;

    constructor(hostElement : IRenderFlaggable) {
        super();
        this._color = Color.Clear;
        this._position = new Vector2();
        this._repeat = 0;
        this._scroll = 0;
        this.hostElement = hostElement;
    }

    public get size() : Vector2 {
        return null;
    }

    public get images() : Array<string> {
        return null;
    }

    public get blend() : number {
        return 0;
    }

    public get scroll() : BackgroundScroll {
        return this._scroll;
    }

    public set scroll(value : BackgroundScroll) {
        this._scroll = value;
        this.hostElement.renderDirtyFlags |= RenderDirtyFlags.Background;
    }

    public get repeat() : BackgroundRepeat {
        return this._repeat;
    }

    public set repeat(value : BackgroundRepeat) {
        this._repeat = value;
        this.hostElement.renderDirtyFlags |= RenderDirtyFlags.Background;
    }

    public get position() : Vector2 {
        return this._position;
    }

    public set position(value : Vector2) {
        this._position.x = MathUtil.clamp01(value.x);
        this._position.y = MathUtil.clamp01(value.y);
        this.hostElement.renderDirtyFlags |= RenderDirtyFlags.Background;
    }

    public get color() : Color {
        return this._color;
    }

    public set color(value : Color) {
        this.color.copy(value);
        this.hostElement.renderDirtyFlags |= RenderDirtyFlags.Background;
    }

    public getStyleUpdates(batch : StyleBatch) {
        batch.add("backgroundColor", this._color.toHexString());
        batch.add("backgroundImage", "url(x/y/z)");
    }
}
