import {SizingComponent, SizingMode} from "./sizing_component";
import {Component} from "../../component";
import {Rectangle} from "../../rectangle";
import {AppElement} from "../../app_element";

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

    public layoutRect : Rectangle = new Rectangle();

    public doLayout() : void {}

    public onMounted() : void {
        const childCount = this.appElement.getChildCount();
        for(let i = 0; i < childCount; i++) {
            const child = this.appElement.getChildAt(i);
            let sizing = child.getComponent(SizingComponent) || new DefaultSizer(child);
            this.sizingComponents.add(sizing)
        }
        this.doLayout();
    }

    public onChildAdded(child : AppElement) : void {
        const sizer = child.getComponent(SizingComponent) || new DefaultSizer(child);
        this.sizingComponents.push(sizer);
        this.doLayout();
    }

    public onChildRemoved(child : AppElement) : void {
        for(let i = 0; i < this.sizingComponents.length; i++) {
            if(this.sizingComponents[i].appElement === child) {
                this.sizingComponents.removeAt(i);
                return;
            }
        }
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
















