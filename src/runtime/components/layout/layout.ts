import {SizingComponent, SizingMode} from "./sizing_component";
import {Component} from "../../component";
import {AppElement} from "../../app_element";
import {Vector2} from "../../vector2";

export interface ISizingComponent{
    appElement : AppElement;
    width: number;
    height: number;
    sizingMode : SizingMode;
}

export class DefaultSizer implements ISizingComponent {

    appElement : AppElement;
    width: number;
    height: number;
    sizingMode : SizingMode;

    constructor(appElement : AppElement) {
        this.appElement = appElement;
        this.width = 1;
        this.height = 1;
        this.sizingMode = SizingMode.Fraction;
    }

}

export class LayoutComponent extends Component {

    protected sizingComponents : Array<ISizingComponent> = [];

    public doLayout() : void {}

    public onMounted() : void {
        const childCount = this.appElement.getChildCount();
        for(let i = 0; i < childCount; i++) {
            const child = this.appElement.getChildAt(i);
            let sizing = child.getComponent(SizingComponent) || new DefaultSizer(child);
            this.sizingComponents.push(sizing)
        }
        Runtime.queueLayout(this);
    }

    public getSlotAtPosition(position : Vector2) : any {
        if(this.sizingComponents.length === 0) return;

    }

    public onChildAdded(child : AppElement) : void {
        const sizer = child.getComponent(SizingComponent) || new DefaultSizer(child);
        this.sizingComponents.push(sizer);
        Runtime.queueLayout(this);
    }

    public onChildRemoved(child : AppElement) : void {
        for(let i = 0; i < this.sizingComponents.length; i++) {
            if(this.sizingComponents[i].appElement === child) {
                this.sizingComponents.removeAt(i);
                break;
            }
        }
        Runtime.queueLayout(this);
    }

    public onChildMoved(child : AppElement) : void {
        //maybe just rebuild sizing component list
    }

    public addSizingComponent(sizingComponent : SizingComponent) : void {
        for(let i = 0; i < this.sizingComponents.length; i++) {
            const cmp = this.sizingComponents[i];
            if(cmp.appElement === sizingComponent.appElement) {
                this.sizingComponents[i] = sizingComponent;
                return;
            }
        }
        Runtime.queueLayout(this);
    }

    public removeSizingComponent(sizingComponent : SizingComponent) : void {
        for(let i = 0; i < this.sizingComponents.length; i++) {
            const cmp = this.sizingComponents[i];
            if(cmp.appElement === sizingComponent.appElement) {
                this.sizingComponents[i] = new DefaultSizer(sizingComponent.appElement);
                return;
            }
        }
        Runtime.queueLayout(this);
    }

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


//tethers -> Sticky positioning based on screen size and tether point within some element (not only parent)
//anchors -> Stretch width/height based on anchor points on parent

//tether and anchor are mutually exclusive

//anchor drives size
//it is a subclass of SizingComponent

//Tether is a subclass of Layout?

//adjusting sizes
    //layout items are locked

//sizing
    //anchor
    //percent of parent remaining
    //percent of parent total space
    //fraction of parent remaining space
    //fraction of parent total space based on # of siblings
    //min / max / preferred
    //fit child content width
    //fit child content height
    //fill parent
    //stretch left
    //stretch right
    //stretch up
    //stretch down
    //stretch to sibling

//margin / padding / border -> Ignored for layout, layout only deals with total width / height
//margin / padding / border -> Optionally collapsible

//onLayoutSet()
//onLayoutChanged()

//anything with an anchor is NOT part of layout children
//anything with a tether is NOT part of layout children
//absolute width / height
//position


//possible to use layout meta-elements that can declare sizing for their child
//these elements can have only 1 child but many components
//auto generated when attaching to child of layout

















