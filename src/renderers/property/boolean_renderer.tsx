import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {CheckboxInput} from "../../ui_elements/checkbox_input";
import {CreateBinding} from "../../editor/binding";

interface IBooleanAttrs {
    onValueChanged?(newValue : boolean, oldValue? : boolean) : void;
}

@propertyDrawer(Boolean)
export class BooleanRenderer extends PropertyRenderer<IBooleanAttrs> {

    public createInitialStructure(children : any) : JSXElement {

        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;

        return <InspectorRow label={propertyName}>
            <CheckboxInput value={ CreateBinding(component, propertyName as string)}/>
        </InspectorRow>
    }

}

