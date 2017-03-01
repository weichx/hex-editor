import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {Integer} from "../../util";
import {IntegerInput, NumberInput} from "../../ui_elements/number_input";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {CreateBinding} from "../../editor/binding";

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
        let input = null;
        if (editorData.propertyType === Integer) {
            input = <IntegerInput value={ CreateBinding(component, propertyName as any) }/>
        }
        else {
            input = <NumberInput value={ CreateBinding(component, propertyName as any) }/>
        }

        return <InspectorRow label={propertyName}>
            {input}
        </InspectorRow>
    }

}
