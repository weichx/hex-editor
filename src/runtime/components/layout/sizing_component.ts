import {LayoutComponent} from "./layout_component";
import {exposeAs} from "../../../renderers/component/expose_as";
import {EnumSelect} from "../../../util";

export enum SizingMode {
    Fixed, Percent, Fraction, Anchor
}

@component("Layout/Sizing")
export class SizingComponent extends Component {

    @exposeAs(EnumSelect, SizingMode)
    public sizingMode : SizingMode = SizingMode.Fraction;

    @exposeAs(Number) public percentage : number;
    @exposeAs(Number) public fraction : number;
    @exposeAs(Number) public width : number;
    @exposeAs(Number) public height : number;

    public setLayoutRect(rect : Rectangle) : void {

    }

    public onLayoutRectChanged(layoutRect : Rectangle) : void {
        this.appElement.setRect(layoutRect);
    }

    public onMounted() : void {
        const layout = this.getComponentInParent(LayoutComponent);
    }

}