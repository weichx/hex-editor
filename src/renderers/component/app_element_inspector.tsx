import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {Vector2Input} from "../../ui_elements/vector2_input";
import {CreateBinding, IEditorBinding} from "../../editor/binding";
import {AppElement, Space} from "../../runtime/app_element";
import {Vector2} from "../../runtime/vector2";
import {NumberInput} from "../../ui_elements/number_input";
import {InlineField} from "../../ui_elements/inline_field";

export class TransformInspector extends EditorHTMLElement<{ appElement : AppElement }> {

    private proxy : any;
    private appElement : AppElement;
    private localPositionBinding : IEditorBinding<Vector2>;
    private localRotationBinding : IEditorBinding<number>;
    private localScaleBinding : IEditorBinding<Vector2>;
    private widthBinding : IEditorBinding<number>;
    private heightBinding : IEditorBinding<number>;

    public onCreated() : void {
        this.appElement = this.attrs.appElement;
        this.proxy = {
            localPosition: this.appElement.getLocalPosition(),
            localRotation: this.appElement.getRotation(),
            localScale: this.appElement.getScale(),
            width : this.appElement.getWidth(),
            height: this.appElement.getHeight()
        };
        this.localPositionBinding = CreateBinding(this.proxy, "localPosition").onChange((newValue : Vector2) => {
            this.appElement.setPosition(newValue, Space.Local);
        });

        this.localRotationBinding = CreateBinding(this.proxy, "localRotation").onChange((newValue : number) => {
            this.appElement.setRotation(newValue);
        });

        this.localScaleBinding = CreateBinding(this.proxy, "localScale").onChange((newValue : Vector2) => {
            this.appElement.setScale(newValue);
        });

        this.widthBinding = CreateBinding(this.appElement as any, "width").onChange((newValue : number) => {
            this.appElement.setWidth(newValue);
        });

        this.heightBinding = CreateBinding(this.appElement as any, "height").onChange((newValue : number) => {
            this.appElement.setHeight(newValue);
        });

        EditorRuntime.updateTree.add(this);
    }

    public onUpdated() : void {
        this.proxy.localPosition = this.appElement.getLocalPosition();
        this.proxy.localRotation = this.appElement.getRotation();
        this.proxy.localScale = this.appElement.getScale();
    }

    public createInitialStructure() : JSXElement {
        return [
            <InspectorRow label="Position">
                <Vector2Input value={ this.localPositionBinding }/>
            </InspectorRow>,
            <InspectorRow label="Scale">
                <Vector2Input value={ this.localScaleBinding }/>
            </InspectorRow>,
            <InspectorRow label="Rotation">
                <InlineField label="">
                    <NumberInput value={ this.localRotationBinding }/>
                </InlineField>
            </InspectorRow>,
            <InspectorRow label="Dimensions">
                <InlineField label="Width">
                    <NumberInput value={ this.widthBinding }/>
                </InlineField>
                <InlineField label="Height">
                    <NumberInput value={ this.heightBinding }/>
                </InlineField>
            </InspectorRow>
        ];
    }

}