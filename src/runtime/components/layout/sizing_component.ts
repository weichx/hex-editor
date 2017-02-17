
export class SizingComponent extends Component {

    public setLayoutRect(rect : Rectangle) : void {

    }

    public onLayoutRectChanged(layoutRect : Rectangle) : void {
        this.appElement.setRect(layoutRect);
    }

}