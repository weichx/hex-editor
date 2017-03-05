import {SizingMode} from "./sizing_component";
import {LayoutComponent} from "./layout";
import {component} from "../../component";
import {Space} from "../../app_element";

@component("Layout/VerticalStack")
export class VerticalStackLayout extends LayoutComponent {

    public doLayout() : void {
        var remainingSpace = this.appElement.getHeight();

        const sizings = new Array<number>(this.sizingComponents.length);
        let totalFractions = 0;
        for (let i = 0; i < this.sizingComponents.length; i++) {
            const sizer = this.sizingComponents[i];
            if (sizer) {
                switch (sizer.sizingMode) {
                    case SizingMode.Percent:
                        const percentageValue = sizer.height * 0.01;
                        sizings[i] = (percentageValue * this.appElement.getHeight()) | 0;
                        remainingSpace -= sizings[i];
                        break;
                    case SizingMode.Fraction:
                        totalFractions++;
                        sizings[i] = sizer.height;
                        break;
                    case SizingMode.Fixed:
                        //todo handle fixed-em
                        sizings[i] = sizer.height;
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
                    sizings[i] = pieceSize * (this.sizingComponents[i].height);
                }
            }
        }

        let allocatedSpace = 0;
        for (let i = 0; i < this.sizingComponents.length; i++) {
            const element = this.sizingComponents[i].appElement;
            element.setPositionValues(0, allocatedSpace, Space.Local);
            element.setDimensions(this.appElement.getWidth(), sizings[i]);
            allocatedSpace += sizings[i];
        }
    }
}