import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {CheckboxInput} from "../../ui_elements/checkbox_input";

interface IBooleanAttrs {
    onValueChanged?(newValue : boolean, oldValue? : boolean) : void;
}

@propertyDrawer(Boolean)
export class BooleanRenderer extends PropertyRenderer<IBooleanAttrs> {

    private valueChanged() : void {
        this.attrs.component.setDirty(this.attrs.editorData.propertyName);
    }

    public createInitialStructure(children : any) : JSXElement {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;
        return <InspectorRow label={propertyName}>
            <CheckboxInput onValueChanged={ this.attrs.onValueChanged } binding={component[propertyName]}/>
        </InspectorRow>
    }

}

