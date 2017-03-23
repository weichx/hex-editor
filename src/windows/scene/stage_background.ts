import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {WindowColors} from "../../editor/editor_theme";

export class StageBackground extends EditorHTMLElement<any> {

    protected htmlNode : HTMLCanvasElement;
    protected ctx : CanvasRenderingContext2D;

    protected getDomData() {
        return { tagName: "canvas", classList: "overlay-canvas" }
    }

    public onRendered() {
        this.ctx = this.htmlNode.getContext("2d");
    }

    public paint(width : number, height : number) : void {
        this.htmlNode.width = width;
        this.htmlNode.height = height;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = WindowColors.sceneBackground;
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 0.5;
        this.ctx.globalAlpha = 0.2;
        this.ctx.beginPath();
        const spacing = 25;
        for (let i = 0; i < 100; i++) {
            const interval = i * spacing + 0.5;
            this.ctx.moveTo(0, interval);
            this.ctx.lineTo(width, interval);
            this.ctx.moveTo(interval, 0);
            this.ctx.lineTo(interval, height);
        }

        this.ctx.closePath();
        this.ctx.stroke();
    }

}