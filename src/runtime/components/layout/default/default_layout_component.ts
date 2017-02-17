import {SizingComponent} from "../sizing_component";
import {EnumSelect} from "../../../../util";
import {exposeAs} from "../../../../renderers/component/expose_as";
import {LayoutComponent} from "../layout_component";

enum Axis {
    Horizontal, Vertical
}

export class DefaultLayoutComponent extends LayoutComponent {

    @exposeAs(EnumSelect, Axis) public axis : Axis = Axis.Horizontal;
    protected sizingComponents : Array<SizingComponent>;


    public doLayout() : void {

    }

    public onChildAdded(appElement : AppElement) : void {
        let cmp = appElement.getComponent(SizingComponent);
        if(cmp) {
            this.sizingComponents.push(cmp);
        }
        else {
            //push a default one
        }
        if(this.appElement.getChildCount() === 0) {
            const rect = this.appElement.getRect();
            //this.appElement.getComponent(SizingComponent).setLayoutRect(rect);
        }
        else {
            this.distributeSpace();
        }
    }

    public onChildRemoved(child : AppElement) : void {

    }

    public onChildInserted(appElement : AppElement, index : number) : void {

    }

    private distributeSpace() : void {
        const rect = this.appElement.getRect();

        const width = rect.width;
        const height = rect.height;
        //get only non tethered children?
        //get only non static children?

        for(let i = 0; i < this.sizingComponents.length; i++) {
            const sizer = this.sizingComponents[i];
            //static sizing can be in percentages / fractions / or pixels (ignore ems for now)
            //defaults to 1 fr
            //fr will need a min size of some sort for overflow right?
            //static or tethered elements are not part of layout logic, the effectively 'float'
            //can have min/max/preferred sizes

        }
        const rects = new Array<Rectangle>();
        //do sizing
        for(let i = 0; i < this.sizingComponents.length; i++) {
            const child = this.sizingComponents[i].appElement;
            child.getComponent(SizingComponent).setLayoutRect(rects[i]);
        }
    }
}