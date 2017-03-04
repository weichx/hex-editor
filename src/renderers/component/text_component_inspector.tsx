import {ComponentRenderer, renderer} from "./component_renderer";
import {TextComponent, IFont} from "../../runtime/components/ui/text_component";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {TextInput} from "../../ui_elements/text_input";
import {IEditorBinding, CreateBinding} from "../../editor/binding";
import {NumberInput} from "../../ui_elements/number_input";

@renderer(TextComponent)
export class TextComponentRenderer extends ComponentRenderer<TextComponent> {

    protected proxy : {
        textContent : string;
        font : IFont;
    };

    private textBinding : IEditorBinding<string>;
    private fontNameBinding : IEditorBinding<string>;
    private fontSizeBinding : IEditorBinding<number>;

    public onCreated() : void {

        this.proxy = {
            textContent: this.component.getTextContent(),
            font: {
                name: this.component.getFontName(),
                size: this.component.getFontSize(),
                lineHeight: 1,
                weight: 400,
                decoration: "none"
            }
        };

        this.textBinding = CreateBinding(this.proxy, "textContent").onChange(() => {
            this.component.setTextAsync(this.proxy.textContent);
        });

        this.fontSizeBinding = CreateBinding(this.proxy, "font", "size").onChange(() => {
            this.component.setFontAsync(this.proxy.font);
        });

        this.fontNameBinding = CreateBinding(this.proxy, "font", "name").onChange(() => {
            this.component.setFontAsync(this.proxy.font);
        });

        this.textBinding.setHost(this);
        this.fontNameBinding.setHost(this);
        this.fontSizeBinding.setHost(this);
        EditorRuntime.updateTree.add(this);
    }

    public createInitialStructure() : JSXElement {
        return [
            this.createStandardHeaderStructure(),
            this.createStandardBodyStructure([

                <InspectorRow label="Text">
                    <TextInput value={ this.textBinding }/>
                </InspectorRow>,

                <InspectorRow label="Text">
                    <TextInput value={ this.fontNameBinding }/>
                </InspectorRow>,

                <InspectorRow label="Font Size">
                    <NumberInput value={ this.fontSizeBinding }/>
                </InspectorRow>

            ])
        ];
    }

}