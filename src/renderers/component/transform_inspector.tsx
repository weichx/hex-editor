import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {CreateBinding, IEditorBinding} from "../../editor/binding";
import {AppElement, Space} from "../../runtime/app_element";
import {AngleInput} from "../../ui_elements/number_input";
import {DimensionInput} from "../../ui_elements/dimension_input";
import {Vector2} from "../../runtime/vector2";
import {Vector2Input} from "../../ui_elements/vector2_input";
import {Horizontal} from "../../ui_elements/horizontal";
import {ToggleIcon} from "../../ui_elements/icon";
import {LayoutComponent, LengthUnit} from "../../runtime/components/layout/layout";
import {Button} from "../../ui_elements/button";
import {DesignerRendered} from "../../editor_events/evt_designer_rendererd";
import {StageForeground} from "../../windows/scene/stage_foreground";

export class TransformInspector extends EditorHTMLElement<{ appElement : AppElement }> {

    private proxy : any;
    private appElement : AppElement;
    private dimensionBinding : IEditorBinding<IDimension>;
    private localPositionBinding : IEditorBinding<Vector2>;
    private localRotationBinding : IEditorBinding<number>;
    private localScaleBinding : IEditorBinding<Vector2>;
    private isEditingAnchors : boolean;
    protected gfx : PIXI.Graphics;
    public id = Math.random();

    public onCreated() : void {
        this.isEditingAnchors = false;
        this.appElement = this.attrs.appElement;
        this.proxy = {
            localPosition: this.appElement.getLocalPosition(),
            localRotation: this.appElement.getRotation(),
            localScale: this.appElement.getScale(),
            dimension: {
                width: this.appElement.getWidth(),
                height: this.appElement.getHeight()
            }
        };
        this.localPositionBinding = CreateBinding(this.proxy, "localPosition").onChange((newValue : Vector2) => {
            this.appElement.setPosition(newValue, Space.Local);
        });

        this.localRotationBinding = CreateBinding(this.proxy, "localRotation").onChange((newValue : number) => {
            this.appElement.setRotation(newValue, Space.Local);
        });

        this.localScaleBinding = CreateBinding(this.proxy, "localScale").onChange((newValue : Vector2) => {
            this.appElement.setScale(newValue);
        });

        this.dimensionBinding = CreateBinding(this.proxy, "dimension").onChange((newValue : IDimension) => {
            this.appElement.setWidth(newValue.width, LengthUnit.Pixel);
            this.appElement.setHeight(newValue.height, LengthUnit.Pixel);
        });
        EditorRuntime.on(DesignerRendered, this);
        EditorRuntime.updateTree.add(this);
    }

    public onDesignerRendered(gfxContainer : PIXI.Container, mouse : Vector2) {
        if (!this.gfx) {
            this.gfx = new PIXI.Graphics();
            gfxContainer.addChild(this.gfx);
        }
        this.gfx.clear();
        // this.anchorFlower.setPosition(this.appElement.getParent().getPosition());
        // this.anchorFlower.update(EditorRuntime.getSelection(), mouse);
        // this.anchorFlower.render(this.gfx);
    }

    public onDestroyed() {
        if (this.gfx) {
            this.gfx.clear();
            this.gfx.parent.removeChild(this.gfx);
            this.gfx.destroy();
            this.gfx = null;
        }
        EditorRuntime.off(DesignerRendered, this);
    }

    public onUpdated() : void {
        this.proxy.localPosition = this.appElement.getLocalPosition();
        this.proxy.localRotation = this.appElement.getRotation();
        this.proxy.localScale = this.appElement.getScale();
        this.proxy.dimension.width = this.appElement.getWidth();
        this.proxy.dimension.height = this.appElement.getHeight();
    }

    public createInitialStructure() : JSXElement {
        return [
            <Horizontal style="position:relative">
                <ToggleIcon class="inspector-toggle" visibilityTarget={ () => this.getChildRoot() }/>
                <span x-if-eval={ !this.appElement.getParent().getComponent(LayoutComponent) } class="component-name">
                    Transform
                </span>
                <span x-if-eval={ this.appElement.getParent().getComponent(LayoutComponent) } class="component-name">
                    Transform (Controlled by Layout Component)
                </span>
            </Horizontal>,
            <div x-if-eval={ !this.appElement.getParent().getComponent(LayoutComponent) } x-child-root
                 class="component-renderer-child-root">
                <InspectorRow label="Anchors">
                    <Button onClick={() => StageForeground.showAnchorFlower = !StageForeground.showAnchorFlower }>Edit</Button>
                </InspectorRow>
                <InspectorRow label="Position">
                    <Vector2Input value={ this.localPositionBinding }/>
                </InspectorRow>
                <InspectorRow label="Scale">
                    <Vector2Input value={ this.localScaleBinding }/>
                </InspectorRow>
                <InspectorRow label="Rotation">
                    <AngleInput value={ this.localRotationBinding }/>
                </InspectorRow>
                <InspectorRow label="Dimensions">
                    <DimensionInput value={ this.dimensionBinding }/>
                </InspectorRow>
            </div>
        ]
    }

}
