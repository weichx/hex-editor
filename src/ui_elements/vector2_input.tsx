import {NumberInput} from "./number_input";
import {Vector2} from "../runtime/vector2";
import {CreateBinding} from "../editor/binding";
import {InputRenderer, IInputRendererAttrs} from "./editor_input";
import {Horizontal} from "./horizontal";

export class Vector2Input extends InputRenderer<IInputRendererAttrs<Vector2>, Vector2> {

    public createInitialStructure(children : any) : JSXElement {
        return <Horizontal>
            <div class="field-row">
                <span class="field-label">x = &nbsp;</span>
                <NumberInput style={`padding-left: ${24}px`} value={ CreateBinding(this.binding, "x") }/>
            </div>
            <div class="field-row">
                <span class="field-label">y = &nbsp;</span>
                <NumberInput style={`padding-left: ${24}px`} value={ CreateBinding(this.binding, "y") }/>
            </div>
        </Horizontal>

    }

}

createStyleSheet(`<style>
    .field-row {
        position: relative;
    }
    
    .field-label {
        position: absolute;
        left: 2px;
    }
`);