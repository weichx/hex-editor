import {SizingComponent} from "../sizing_component";
import {LayoutComponent} from "../layout_component";
import {exposeAs} from "../../../../renderers/component/expose_as";

enum Axis {
    Horizontal, Vertical
}

export class HorizontalStackLayout extends LayoutComponent {

    // @exposeAs(EnumSelect, Axis) public axis : Axis = Axis.Horizontal;
    protected sizingComponents : Array<SizingComponent> = [];
    protected totalWidth : number;
    protected totalHeight : number;

    @exposeAs(Boolean) public wrap : boolean  = false;

    public doLayout() : void {

    }

    public onMounted() : void {
        const childCount = this.appElement.getChildCount();
        for(let i = 0; i < childCount; i++) {
            const child = this.appElement.getChildAt(i);
            let sizing = child.getComponent(SizingComponent);
            this.sizingComponents.add(sizing)
        }
    }

    public onChildAdded(appElement : AppElement) : void {
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

    //I set text
    //I ask for height
    //block? that sucks
    //await this.element.getHeight()
    //this.setRect(rect)
    // -> do layout async?

    //what needs its layout computed?
    //only when width / height changes does anything change, position does not, unless set to stretch and child leaves bounds


    private distributeSpace() : void {
        const rect = this.appElement.getRect();

        const width = rect.width;
        const height = rect.height;
        //get only non tethered children?
        //get only non static children?

        //each box has stretch behavior in each direction
        //all overflows are hidden outside of scroll elements
        // 'fit content' is tricky
            //in each dimension
                //each element gets the sum of all of it's (non static/non tethered) immediate children
        //default behavior is clamp width, stretch height

        //lets see how this works --
            //for fr sizes when the container scrolls
                //option 1: size them as though they get a proportional fraction of space left after percent + fixed
                //option 2: size them as though the total fractional space is equal to percent + fixed
                //option 3: require explicit min sizing with fr (bad)
                //option 4: add setting on container around how to handle fr, using option 1 or 2, or by including a fixed fr value

        //onLayoutRectChanged

        //parent -> Stretch Fit Children
        //parent -> Fixed
        //child -> Fill Parent

        //setTextAsync("Text")
            //-> Queues a text update
            //-> Does NOT update the rect value
            //-> Next Frame Rect is updated
            //-> getRect() still refers to original
        //await setTextAsync("text")
        //do stuff here, by now layout has occurred

        //two kinds of layout
            //-> top down = parent resize triggers child layout
            //-> bottom up = child resize triggers parent layout

        var remainingSpace = rect.width;
        for(let i = 0; i < this.sizingComponents.length; i++) {
            const sizer = this.sizingComponents[i];
            //const width = sizer.getWidthInPixels();
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
        debugger;


    }
}

