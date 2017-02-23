import {InlineField} from "./inline_field";
import {NumberInput} from "./number_input";
import {HorizontalBase} from "./horizontal";
import {getGetter} from "../editor_ui_attrs/binding_compiler";
import {Vector2} from "../runtime/vector2";

interface IVector2Input {
    binding : any;
}

export class Vector2Input extends HorizontalBase<IVector2Input> {

    protected getterFn : (renderCtx : any) => any;
    protected ctx : any;
    protected lastValue : Vector2;
    protected vector : Vector2;

    public onMounted() {
        this.ctx = this.attrs.binding.ctx;
        this.getterFn = getGetter(this.attrs.binding.path);
        EditorRuntime.addUpdater(this, 150);
    }

    public onDestroyed() {
        EditorRuntime.removeUpdater(this);
    }

    public onUpdated() {
        const value = this.getterFn(this.ctx) || new Vector2();
        if (this.lastValue !== value) {
            this.lastValue = value;
            this.vector = value;
        }
    }

    public createInitialStructure(children : any) : JSXElement {
        return [
            <InlineField label="X">
                <NumberInput binding={this.vector.x}/>
            </InlineField>,
            <InlineField label="Y">
                <NumberInput binding={this.vector.y}/>
            </InlineField>
        ]
    }

}
