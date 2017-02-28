import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {Integer} from "../../util";
import {IntegerInput, NumberInput} from "../../ui_elements/number_input";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";

interface INumberAttrs {
    onValueChanged(newValue? : number, oldValue? : number) : void;
}

@propertyDrawer(Number)
@propertyDrawer(Integer)
export class NumberRenderer extends PropertyRenderer<INumberAttrs> {

    public createInitialStructure() : JSXElement {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;
        //Bind(this.attrs.component[propertyName])
        //var binding = new Binding(this, this, ["path"], onChange)
        //this.onUpdated() { binding.update() }
        let input = null;
        if (editorData.propertyType === Integer) {
            input = <IntegerInput onValueChanged={this.attrs.onValueChanged} binding={component[propertyName]}/>
        }
        else {
            input = <NumberInput onValueChanged={this.attrs.onValueChanged} binding={component[propertyName]}/>
        }

        return <InspectorRow label={propertyName}>
            {input}
        </InspectorRow>
    }

}
