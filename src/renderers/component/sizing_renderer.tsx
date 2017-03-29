// import {ComponentRenderer, renderer} from "./component_renderer";
// import {SizingComponent, SizingMode} from "../../runtime/components/layout/sizing_component";
// import {InspectorRow} from "../../ui_elements/inspector/inspector_row";
// import {NumberInput} from "../../ui_elements/number_input";
// import {EditorElement} from "../../editor_element/editor_element";
//
// @renderer(SizingComponent)
// class SizingRenderer extends ComponentRenderer<SizingComponent> {
//
//     public createInitialStructure(children : any) : JSXElement {
//
//         const structure = [
//             this.getRenderer("sizingMode", {
//                 onValueChanged: () => {
//                     this.onModeChanged();
//                 }
//             }),
//             this.getBody()
//         ];
//         return [
//             this.createStandardHeaderStructure(),
//             this.createStandardBodyStructure(structure)
//         ]
//     }
//
//     private onModeChanged() : void {
//         const childRoot = this.getChildRoot();
//         const length = childRoot.children.length;
//         //destroy all but first child
//         for(let i = 1; i < length; i++) {
//             childRoot.children[1].destroy();
//         }
//         const elements = this.getBody();
//         for(let i = 0; i < elements.length; i++) {
//             childRoot.addChild(elements[i] as EditorElement);
//         }
//     }
//
//     public onWidthChanged(newValue : number, oldValue : number) : void {
//         console.log("Changed width");
//     }
//
//     public onHeightChanged(newValue : number, oldValue : number) : void {
//         console.log("Changed height");
//     }
//
//     private getAnchorBody() : JSXElement[] {
//         return [];
//     }
//
//     private getPercentBody() : JSXElement[] {
//         return [];
//     }
//
//     private getFixedBody() : JSXElement[] {
//         const widthChanged = (newValue : number, oldValue : number) => {
//             this.onWidthChanged(newValue, oldValue);
//         };
//         const heightChanged = (newValue : number, oldValue : number) => {
//             this.onHeightChanged(newValue, oldValue);
//         };
//         return [
//             <InspectorRow label="Width">
//                 <NumberInput value={this.component.width}/>
//             </InspectorRow>,
//             <InspectorRow label="Height">
//                 <NumberInput value={this.component.height}/>
//             </InspectorRow>
//         ]
//     }
//
//     private getFractionBody() : JSXElement[] {
//         const widthChanged = (newValue : number, oldValue : number) => {
//             this.onWidthChanged(newValue, oldValue);
//         };
//         const heightChanged = (newValue : number, oldValue : number) => {
//             this.onHeightChanged(newValue, oldValue);
//         };
//         return [
//             <InspectorRow label="Width">
//                 <NumberInput  value={this.component.width}/>
//             </InspectorRow>,
//             <InspectorRow label="Height">
//                 <NumberInput  value={this.component.height}/>
//             </InspectorRow>
//         ]
//     }
//
//
//     private getBody() : JSXElement[] {
//         switch (this.component.sizingMode) {
//             case SizingMode.Anchor:
//                 return this.getAnchorBody();
//             case SizingMode.Fixed:
//                 return this.getFixedBody();
//             case SizingMode.Fraction:
//                 return this.getFractionBody();
//             case SizingMode.Percent:
//                 return this.getPercentBody();
//             default:
//                 break;
//         }
//     }
// }