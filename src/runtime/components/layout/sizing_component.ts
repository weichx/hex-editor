import {LayoutComponent, ISizingComponent} from "./layout";
import {exposeAs} from "../../../renderers/component/expose_as";
import {EnumSelect} from "../../../util";
import {component, Component} from "../../component";

export enum SizingMode {
    Fixed, Percent, Fraction, Anchor
}

@component("Layout/Sizing")
export class SizingComponent extends Component implements ISizingComponent {

    @exposeAs(EnumSelect, SizingMode)
    public sizingMode : SizingMode = SizingMode.Fraction;

    @exposeAs(Number) public width : number = 1;
    @exposeAs(Number) public height : number = 1;

    public onMounted() : void {
        const layout = this.getComponentInParent(LayoutComponent);
        if(layout) {
            layout.addSizingComponent(this);
        }
        else {
            this.appElement.setDimensions(this.width, this.height);
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