
@component("Paint/Background")
export class BackgroundComponent extends Component {

    private color : Color = Color.White;

    public setColor(color : Color) : void {
        Runtime.sendCommand(CommandType.PaintBackground, this.appElement.id);
        this.color = new Color(color.r, color.g, color.b, color.a);
    }

    public getColor() : Color {
        return new Color(this.color.r, this.color.g, this.color.b, this.color.a);
    }

}