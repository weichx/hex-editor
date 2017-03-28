import {EditorHTMLElement} from "../../editor_element/editor_html_element";
import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
import {CreateBinding, IEditorBinding} from "../../editor/binding";
import {AppElement, Space} from "../../runtime/app_element";
import {AngleInput} from "../../ui_elements/number_input";
import {DimensionInput} from "../../ui_elements/dimension_input";
import {Vector2} from "../../runtime/Vector2";
import {Vector2Input} from "../../ui_elements/vector2_input";
import {Horizontal} from "../../ui_elements/horizontal";
import {ToggleIcon} from "../../ui_elements/icon";
import {LayoutComponent} from "../../runtime/components/layout/layout";
import {Button} from "../../ui_elements/button";
import {DesignerRendered} from "../../editor_events/evt_designer_rendererd";
import {ShapeContainer} from "../../pixi/shape_container";
import {Triangle} from "../../pixi/triangle";
import {Color} from "../../runtime/color";

class AnchorFlower extends ShapeContainer {
    // this.powerFlower = new ShapeContainer();
    // var rotation = 0;
    // for(let i = 0; i < 8; i++) {
    // const p0 = new Vector2();
    // const p1 = new Vector2(-5, 15);
    // const p2 = new Vector2(5, 15);
    // const tri = new Triangle(p0, p1, p2);
    // tri.rotate(rotation);
    // rotation += MathUtil.PiOver4;
    // tri.setParent(this.powerFlower);

    protected bottom : Triangle;

    constructor() {
        super();
        const p0 = new Vector2();
        const p1 = new Vector2(-5, 15);
        const p2 = new Vector2(5, 15);
        this.bottom = new Triangle(p0, p1, p2);
        this.bottom.setParent(this);
    }

    public update(mouse : Vector2) {
        if (this.bottom.containsPoint(mouse)) {
            this.bottom.setColor(Color.Green);
        }
        else {
            this.bottom.setColor(Color.Red);
        }
    }

    // public getStateChart() {
    //     return new StateChart(function (chart : StateChartBuilder) {
    //         const evtTyp = fn<{}>();
    //         this.state(function () {
    //             behavior();
    //             enter(() => {
    //                 trigger(evtType, 1, 2, 3);
    //             });
    //             exit();
    //             update();
    //             init();
    //         });
    //     });
    // }

}

export class TransformInspector extends EditorHTMLElement<{ appElement : AppElement }> {

    private proxy : any;
    private appElement : AppElement;
    private dimensionBinding : IEditorBinding<IDimension>;
    private localPositionBinding : IEditorBinding<Vector2>;
    private localRotationBinding : IEditorBinding<number>;
    private localScaleBinding : IEditorBinding<Vector2>;
    private isEditingAnchors : boolean;
    protected gfx : PIXI.Graphics;
    protected anchorFlower : AnchorFlower;

    public onCreated() : void {
        this.isEditingAnchors = false;
        this.anchorFlower = new AnchorFlower();
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
            this.appElement.setWidth(newValue.width);
            this.appElement.setHeight(newValue.height);
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
        this.anchorFlower.setPosition(this.appElement.getPosition());
        this.anchorFlower.update(mouse);
        this.anchorFlower.render(this.gfx);
        if (this.isEditingAnchors) {
            // this.anchorFlower.setPosition(this.appElement.getPosition());
            // this.anchorFlower.update(mouse);
            // this.anchorFlower.render(this.gfx);
        }
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
                    <Button onClick={() => this.isEditingAnchors = !this.isEditingAnchors}>Edit</Button>
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
