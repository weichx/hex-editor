import {LayoutComponent, ISizingComponent} from "./layout_component";
import {exposeAs} from "../../../renderers/component/expose_as";
import {EnumSelect} from "../../../util";
import {component, Component} from "../../component";
import {Rectangle} from "../../rectangle";

export enum SizingMode {
    Fixed, Percent, Fraction, Anchor
}

@component("Layout/Sizing")
export class SizingComponent extends Component implements ISizingComponent {

    @exposeAs(EnumSelect, SizingMode)
    public sizingMode : SizingMode = SizingMode.Fraction;

    @exposeAs(Number) public width : number = 1;
    @exposeAs(Number) public height : number = 1;

    public setLayoutRect(rect : Rectangle) : void {

    }

    public onLayoutRectChanged(layoutRect : Rectangle) : void {

    }

    public onMounted() : void {
        const layout = this.getComponentInParent(LayoutComponent);
        if(layout) {
            layout.addSizingComponent(this);
        }
    }

    public onDestroyed() {
        if(!this.appElement.isDestroyed()) {
            const layout = this.getComponentInParent(LayoutComponent);
            if (layout) {
                layout.removeSizingComponent(this);
            }
        }
    }



}