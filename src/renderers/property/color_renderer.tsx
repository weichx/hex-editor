import {PropertyRenderer, IPropertyRendererAttrs} from "./property_renderer";
import {Color} from "../../runtime/color";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {InlineField} from "../../ui_elements/inline_field";
import {NumberInput} from "../../ui_elements/number_input";
import {propertyDrawer} from "./property_drawer";
import {BackgroundComponent} from "../../runtime/components/background_component";
import {CreateBinding} from "../../editor/binding";
import {Button} from "../../ui_elements/button";
import {randomPositiveInteger, getRandomInt} from "../../util";

interface IColorRenderAttrs extends IPropertyRendererAttrs {
    onValueChanged? (newValue : Color, oldValue : Color) : void;
}

@propertyDrawer(Color)
export class ColorRenderer extends PropertyRenderer<IColorRenderAttrs> {

    private updateColor() : void {
        const cmp = this.attrs.component as BackgroundComponent; //temp! need to implement dirty checking
        cmp.setColor(cmp.getColor());
    }

    private randomize() : void {
        const c = new Color();
        c.r = getRandomInt(0, 255);
        c.g = getRandomInt(0, 255);
        c.b = getRandomInt(0, 255);
        c.a = 1;//getRandomInt(0, 255);
        const cmp = this.attrs.component as BackgroundComponent; //temp! need to implement dirty checking
        cmp.setColor(c);
    }

    public createInitialStructure() {

        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;
        const color : Color = component[propertyName] as Color;

        return <InspectorRow label={propertyName}>
            <InlineField label="Red">
                <NumberInput value={ CreateBinding(color, "r").onChange( () => this.updateColor() ) }/>
            </InlineField>
            <InlineField label="Green">
                <NumberInput value={ CreateBinding(color, "g").onChange( () => this.updateColor() ) }/>
            </InlineField>
            <InlineField label="Blue">
                <NumberInput value={ CreateBinding(color, "b").onChange( () => this.updateColor() ) }/>
            </InlineField>
            <InlineField label="Alpha">
                <NumberInput value={ CreateBinding(color, "a").onChange( () => this.updateColor() ) }/>
            </InlineField>
            <Button onClick={this.randomize}>Random</Button>
        </InspectorRow>

    }

}