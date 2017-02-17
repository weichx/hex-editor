import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {Integer} from "../../util";
import {IntegerInput, NumberInput} from "../../ui_elements/number_input";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";


@propertyDrawer(Number)
@propertyDrawer(Integer)
export class NumberRenderer extends PropertyRenderer {

    public createInitialStructure(children : any) : JSXElement {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;

        let input = null;
        if (editorData.propertyType === Integer) {
            input = <IntegerInput binding={component[propertyName]}></IntegerInput>
        }
        else {
            input = <NumberInput binding={component[propertyName]}></NumberInput>
        }

        return <InspectorRow label={propertyName}>
            {input}
        </InspectorRow>
    }

}
