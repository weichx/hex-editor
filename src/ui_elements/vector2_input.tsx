import {InlineField} from "./inline_field";
import {NumberInput} from "./number_input";
import {Vector2} from "../runtime/vector2";
import {CreateBinding} from "../editor/binding";
import {InputRenderer, IInputRendererAttrs} from "./editor_input";

export class Vector2Input extends InputRenderer<IInputRendererAttrs<Vector2>, Vector2> {

    public createInitialStructure(children : any) : JSXElement {
        return [
            <InlineField label="X">
                <NumberInput value={ CreateBinding(this.binding, "x") }/>
            </InlineField>,
            <InlineField label="Y">
                <NumberInput value={ CreateBinding(this.binding, "y") }/>
            </InlineField>
        ]
    }

}
