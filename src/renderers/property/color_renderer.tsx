import {PropertyRenderer, IPropertyRendererAttrs} from "./property_renderer";
import {Color} from "../../runtime/color";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {InlineField} from "../../ui_elements/inline_field";
import {NumberInput} from "../../ui_elements/number_input";
import {propertyDrawer} from "./property_drawer";
import {BackgroundComponent} from "../../runtime/components/background_component";

interface IColorRenderAttrs extends IPropertyRendererAttrs {
    onValueChanged? (newValue : Color, oldValue : Color) : void;
}

@propertyDrawer(Color)
export class ColorRenderer extends PropertyRenderer<IColorRenderAttrs> {

    private onColorChannelChanged(newValue : number, oldValue : number) : void {
        const cmp = this.attrs.component as BackgroundComponent; //temp! need to implement dirty checking
        cmp.setColor(cmp.getColor());
    }

    public createInitialStructure() {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;

        return <InspectorRow label={propertyName}>
            <InlineField label="Red">
                <NumberInput onValueChanged={ (n : number, o : number) => this.onColorChannelChanged(n,o) }
                             binding={component[propertyName].r}/>
            </InlineField>
            <InlineField label="Green">
                <NumberInput onValueChanged={ (n : number, o : number) => this.onColorChannelChanged(n,o) }
                             binding={component[propertyName].g}/>
            </InlineField>
            <InlineField label="Blue">
                <NumberInput onValueChanged={ (n : number, o : number) => this.onColorChannelChanged(n,o) }
                             binding={component[propertyName].b}/>
            </InlineField>
            <InlineField label="Alpha">
                <NumberInput onValueChanged={ (n : number, o : number) => this.onColorChannelChanged(n,o) }
                             binding={component[propertyName].a}/>
            </InlineField>
        </InspectorRow>

    }

}