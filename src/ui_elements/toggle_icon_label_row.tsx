import {FontIcon, ToggleIcon} from "./icon";
import {HorizontalBase} from "./horizontal";
import {EditorElement} from "../editor_element/editor_element";

interface IAttrs {
    iconName : string;
    label : string;
    useBinding? : boolean;
    toggleElementFn?: () => EditorElement;
}

export class IconNameToggleRow extends HorizontalBase<IAttrs> {

    public createInitialStructure() : JSXElement {
        let label : any = null;
        if(this.attrs.useBinding) {
            label = Bind(this.attrs.label);
        }
        else {
            label = this.attrs.label;
        }
        let toggle : any = void 0;
        if(this.attrs.toggleElementFn) {
            toggle = <ToggleIcon visibilityTarget={ this.attrs.toggleElementFn } class="toggle" size="small"/>;
        }
        return [
            <div class="icon-container">
                {toggle}
                <FontIcon style="padding-left:4px" iconName={this.attrs.iconName}/>
            </div>,
            <span style="padding-left:4px">{ label }</span>
        ]
    }

}