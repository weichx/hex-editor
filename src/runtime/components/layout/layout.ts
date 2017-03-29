import {Component, component} from "../../component";
import {AppElement, Space} from "../../app_element";
import {MathUtil} from "../../../math_util";
import {inspector} from "../../../renderers/component/expose_as";
import {EnumSelect} from "../../../util";

export enum LengthUnit {
    Percent, Pixel, Flex
}

function layoutController(...args : any[]) : any {

}

function editorEnabled(...args : any[]) : any {}

class Width {

    private _percent : number;
    private _pixels : number;

    public getPixels() : number {
        return this._pixels;
    }

    public setPixels(pixelWidth : number) {

    }

    public setPercent(percent : number) {
        this._percent = MathUtil.clamp01(percent);
    }

    public getPixelWidth(reference : Width) {

    }

}

enum Alignment {
    Left, Right, Center, Fill
}

@layoutController
export class LayoutComponent extends Component {
    public doLayout() {}
}

class HorizontalLayoutSlot extends Component {
    @inspector(Number) public paddingLeft : number = 0;
    @inspector(Number) public paddingRight : number = 0;
    @inspector(Number) public paddingTop : number = 0;
    @inspector(Number) public paddingBottom : number = 0;
    @inspector(Number) public flexFactor : number = 0;
    @inspector(Boolean) public useFlex : boolean = false;
    @inspector(Number) public width : number;
    @inspector(Number) public height : number;
    @inspector(EnumSelect, Alignment) public alignment : Alignment;
    public index : number = -1;
    public totalWidth : number = 0;
}

@layoutController
@component("Layout/Horizontal")
export class HorizontalLayout extends LayoutComponent {

    private flexElements = new Array<HorizontalLayoutSlot>();
    private nonFlexElements = new Array<HorizontalLayoutSlot>();
    private slotComponents = new Array<HorizontalLayoutSlot>();

    @inspector(Boolean) public sizeToContentWidth : boolean = false;
    @inspector(Boolean) public sizeToContentHeight : boolean = false;

    public onMounted() {
        const children = this.appElement.getChildren();
        for (let i = 0; i < children.length; i++) {
            var slot = children[i].getComponent(HorizontalLayoutSlot);
            slot = slot || children[i].addComponent(HorizontalLayoutSlot);
            this.slotComponents.push(slot);
            //slot.onChange();
        }
        EditorRuntime.queueLayout(this);
    }

    @editorEnabled
    public onChildAdded(child : AppElement) {
        this.slotComponents.push(child.addComponent(HorizontalLayoutSlot));
        EditorRuntime.queueLayout(this);
    }

    public doLayout() {
        //ignore size to content for now
        let totalWidth = 0;
        let fractions = 0;
        for (let i = 0; i < this.slotComponents.length; i++) {
            const slot = this.slotComponents[i];
            slot.index = i;
            if (slot.useFlex) {
                this.flexElements.push(slot);
                fractions += MathUtil.clamp(slot.flexFactor, 0, Number.MAX_SAFE_INTEGER) | 0;
            }
            else {
                this.nonFlexElements.push(slot);
            }
        }
        let spaceToAllocate = this.appElement.getWidth();
        let allocatedSpace = 0;
        for (let i = 0; i < this.nonFlexElements.length; i++) {
            const slot = this.nonFlexElements[i];
            const width = slot.appElement.getWidth();
            let total = slot.paddingLeft + width + slot.paddingRight;
            allocatedSpace += total;
            slot.totalWidth = total;
        }

        let remaining = this.appElement.getWidth() - allocatedSpace;
        if (fractions > 0) {
            const pieceSize = remaining / fractions;
            for (let i = 0; i < this.flexElements.length; i++) {
                const slot = this.flexElements[i];
                slot.totalWidth = pieceSize * slot.flexFactor;
            }
        }
        else {
            for (let i = 0; i < this.flexElements.length; i++) {
                const slot = this.flexElements[i];
                slot.totalWidth = 0;
            }
        }

        var currentX = 0;
        var height = this.appElement.getHeight();
        for (let i = 0; i < this.slotComponents.length; i++) {
            const slot = this.slotComponents[i];
            const appElement = slot.appElement;
            appElement.setWidth(slot.totalWidth, LengthUnit.Pixel);
            appElement.setHeight(height, LengthUnit.Pixel);
            appElement.setPositionValues(currentX, 0, Space.Local);
            currentX += slot.totalWidth;
        }
        this.flexElements.length = 0;
        this.nonFlexElements.length = 0;
        totalWidth = Math.max(totalWidth, this.appElement.getWidth());
    }

    public getWidth() {

    }

    public getOverflowWidth() {

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

















