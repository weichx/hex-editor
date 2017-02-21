import {SizingComponent} from "./sizing_component";

AppElement.prototype.setRect = function (rect : Rectangle) {
    this.rect = rect.clone();
    Runtime.sendCommand(CommandType.SetRect, this.id);
    // Runtime.sendCommand(CommandType.Layout, this.id);
    const layoutComponent = this.getComponent(LayoutComponent);
    const sizingComponent = this.getComponent(SizingComponent);
    if(sizingComponent) {

    }
    if(layoutComponent) {
        layoutComponent.doLayout();
    }

};

export class LayoutComponent extends Component {

    public layoutRect : Rectangle = new Rectangle();

    public doLayout() : void {}

}

//Margin -> Space Outside border
//Padding -> Space Inside border

//SetRect -> ComputeContentRect(Margin/Padding/Offset/Stretch/Anchor) -> DoLayout
//SetRect -> Stretch/Anchor -> Margin -> Border -> Padding -> Content -> Layout

//items that are laid out are allocated a given rect
//they can choose to ignore this rect, default behavior is to fill it
//could also fill in one direction, or apply margin / padding to it
//before filling it. Could also use this for centering / alignment / offsetting

//how are animation triggers handled? possibly using this layout rect
















