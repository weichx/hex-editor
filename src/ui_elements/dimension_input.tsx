import {NumberInput} from "./number_input";
import {CreateBinding} from "../editor/binding";
import {InputRenderer, IInputRendererAttrs} from "./editor_input";
import {Horizontal} from "./horizontal";

export class DimensionInput extends InputRenderer<IInputRendererAttrs<IDimension>, IDimension> {

    public createInitialStructure(children : any) : JSXElement {
        return <Horizontal>
            <div class="field-row">
                <span class="field-label">width = &nbsp;</span>
                <NumberInput style={`padding-left: ${52}px`} value={ CreateBinding(this.binding, "width") }/>
            </div>
            <div class="field-row">
                <span class="field-label">height = &nbsp;</span>
                <NumberInput style={`padding-left: ${56}px`} value={ CreateBinding(this.binding, "height") }/>
            </div>
        </Horizontal>

    }

}

createStyleSheet(`<style>
    
    .dimension-input .field-row {
        position: relative;
    }
    
    .dimension-input .field-label {
        position: absolute;
        left: 2px;
    }
`);