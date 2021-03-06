import {propertyDrawer} from "./property_drawer";
import {PropertyRenderer} from "./property_renderer";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {TextInput} from "../../ui_elements/text_input";

interface IStringAttrs {
    onValueChanged?(newValue : string, oldValue : string) : void;
}

@propertyDrawer(String)
export class StringRenderer extends PropertyRenderer<IStringAttrs> {

    public onChange() : void {

        // if(this.attrs.editorData.onValueChanged) {
        //
        // }

        if(this.attrs.onValueChanged) {
            this.attrs.onValueChanged("", "");
        }

    }

    public createInitialStructure(children : any) : JSXElement {
        const editorData = this.attrs.editorData;
        const component = this.attrs.component as any;
        const propertyName = editorData.propertyName;
        return <InspectorRow label={editorData.propertyName}>
            <TextInput value={component[propertyName]}/>
        </InspectorRow>
    }

}

