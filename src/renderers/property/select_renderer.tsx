import {PropertyRenderer} from "./property_renderer";
import {propertyDrawer} from "./property_drawer";
import {Select, EnumSelect} from "../../util";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {SelectInput} from "../../ui_elements/select_input";
import {CreateBinding} from "../../editor/binding";

interface ISelectAttrs {
    onValueChanged? : (newValue : any, oldValue : any) => void
}

@propertyDrawer(EnumSelect)
export class EnumSelectRenderer extends PropertyRenderer<ISelectAttrs> {

    private createOptions(e : any) {
        const retn = new Array<any>();
        Object.keys(e).forEach(function (key : string) {
            if (isNaN(key as any)) {
                retn.push({ name: key, value: e[key] });
            }
        });
        return retn;
    }

    public createInitialStructure(children : any) : JSXElement {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;
        const options = this.createOptions(editorData.propertyOptions[0]);
        return <InspectorRow label={propertyName}>
            <SelectInput class="select-renderer" value={ CreateBinding(component, propertyName as any) }>
                {
                    options.map((option : ISelectOption) => {
                        return <option value={option.value} default={option.default}>{option.name}</option>
                    })
                }
            </SelectInput>
        </InspectorRow>
    }

}

@propertyDrawer(Select)
export class SelectRenderer extends PropertyRenderer<ISelectAttrs> {

    public createInitialStructure(children : any) : JSXElement {
        const editorData = this.attrs.editorData;
        const propertyName = editorData.propertyName;
        const component = this.attrs.component;

        return <InspectorRow label={propertyName}>
            <SelectInput class="select-renderer" value={ CreateBinding(component, propertyName as any) }>
                {
                    editorData.propertyOptions[0].map((option : ISelectOption) => {
                        return <option value={option.value} default={option.default}>{option.name}</option>
                    })
                }
            </SelectInput>
        </InspectorRow>
    }

}

createStyleSheet(`<style>

.select-renderer {
    color: black;
    width: 100%;
}

</style>`);