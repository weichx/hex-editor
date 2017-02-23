import {EditorCustomElement} from "../../editor_element/editor_custom_element";
import {Button} from "../../ui_elements/button";
import {SceneWindow} from "../scene_window";
import {WindowColors} from "../../editor_theme";
import {BreakpointType} from "../../runtime/breakpoint";

function round(places : number) {
    return function (value : number) {
        return value.toFixed(places);
    }
}

export class SceneMetaBar extends EditorCustomElement<{}> {

    private scene : SceneWindow;
    private sceneSizeButtons : Button[];

    protected getDomData() : IDomData {
        return { tagName: "div", classList: "scene-meta-bar" }
    }

    public onRendered() {
        this.scene = this.getAncestorByType(SceneWindow);
        this.sceneSizeButtons = this.getChildBySelector(".scene-size").getChildrenByType(Button);
        this.setSelectedButton(this.scene.getBreakpoint());
    }

    public createInitialStructure() {
        return [
            <div class="zoom-level">
                <span>Zoom Level &nbsp;
                    { Bind(this.scene.zoomLevel).format(round(2)) }
                </span>
            </div>,
            <div class="scene-size">
                <Button onClick={ () => { this.setScreenSize(BreakpointType.Mobile); } }>Mobile</Button>
                <Button onClick={ () => { this.setScreenSize(BreakpointType.Tablet); } }>Tablet</Button>
                <Button onClick={ () => { this.setScreenSize(BreakpointType.Laptop); } }>Laptop</Button>
                <Button onClick={ () => { this.setScreenSize(BreakpointType.Desktop); } }>Desktop</Button>
            </div>
        ]
    }

    public setScreenSize(breakpointType : BreakpointType) : void {
        this.scene.setPreviewSize(breakpointType);
        this.setSelectedButton(breakpointType);
    }

    private setSelectedButton(breakpointType : BreakpointType) : void {
        this.sceneSizeButtons.forEach(function (button : Button) {
            button.toggleClass("selected", BreakpointType[breakpointType] === button.getText());
        });
    }

}

createStyleSheet(`<style>

.zoom-level {
    position: absolute;
    left: 12px;
}

.scene-meta-bar {
    height: 21px;
    width: 100%;
    background: ${WindowColors.foregroundGrey};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.scene-size .btn {
    background: none;
    border: none;
}

.scene-size .selected {
    background: aliceblue;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
}

`);