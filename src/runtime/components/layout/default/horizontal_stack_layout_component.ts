import {SizingMode} from "../sizing_component";
import {LayoutComponent} from "../layout_component";
import {exposeAs} from "../../../../renderers/component/expose_as";
import {component} from "../../../component";
import {Space} from "../../../app_element";

@component("Layout/HorizontalStack")
export class HorizontalStackLayout extends LayoutComponent {


    @exposeAs(Boolean) public wrap : boolean = false;

    public doLayout() : void {
        //todo -- assuming height stretches to highest child for now, allow other clamp modes later
        var remainingSpace = this.appElement.getWidth();

        const sizings = new Array<number>(this.sizingComponents.length);
        let totalFractions = 0;
        for (let i = 0; i < this.sizingComponents.length; i++) {
            const sizer = this.sizingComponents[i];
            if (sizer) {
                switch (sizer.sizingMode) {
                    case SizingMode.Percent:
                        const percentageValue = sizer.width * 0.01;
                        sizings[i] = (percentageValue * this.appElement.getWidth()) | 0;
                        remainingSpace -= sizings[i];
                        break;
                    case SizingMode.Fraction:
                        totalFractions++;
                        sizings[i] = sizer.width;
                        break;
                    case SizingMode.Fixed:
                        //todo handle fixed-em
                        sizings[i] = sizer.width;
                        remainingSpace -= sizings[i];
                        break;
                }
            }
            else {
                sizings[i] = -1;
            }
        }

        if (totalFractions > 0) {
            const pieceSize = remainingSpace / totalFractions;
            for (let i = 0; i < sizings.length; i++) {
                if (this.sizingComponents[i].sizingMode === SizingMode.Fraction) {
                    sizings[i] = pieceSize * (this.sizingComponents[i].width);
                }
            }
        }

        let allocatedSpace = 0;
        for (let i = 0; i < this.sizingComponents.length; i++) {
            const element = this.sizingComponents[i].appElement;
            element.setPositionValues(allocatedSpace, 0, Space.Local);
            element.setDimensions(sizings[i], this.appElement.getHeight());
            allocatedSpace += sizings[i];
        }
    }


    //I set text
    //I ask for height
    //block? that sucks
    //await this.element.getHeight()
    //this.setRect(rect)
    // -> do layout async?

    //what needs its layout computed?
    //only when width / height changes does anything change, position does not, unless set to stretch and child leaves bounds

    //const width = sizer.getWidthInPixels();
    //static sizing can be in percentages / fractions / or pixels (ignore ems for now)
    //defaults to 1 fr
    //fr will need a min size of some sort for overflow right?
    //static or tethered elements are not part of layout logic, the effectively 'float'
    //can have min/max/preferred sizes

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

}

