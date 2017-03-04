import {SizingComponent, SizingMode} from "./layout/sizing_component";

export class FitContentSizeComponent extends SizingComponent {

    public onCreated() : void {
        this.sizingMode = SizingMode.Fixed;
        this.width = this.appElement.getWidth();
        this.height = this.appElement.getHeight();
    }

    public getPixelWidth(totalWidth : number, totalHeight : number) : number {
        return this.appElement.getWidth();
    }

    public getPixelHeight(totalWidth : number, totalHeight : number) : number {
        return this.appElement.getHeight();
    }
}