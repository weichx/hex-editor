// import {getSetter, getGetter} from "../editor_ui_attrs/binding_compiler";
// import {EditorCustomElement} from "../editor_element/editor_custom_element";
// import {ILifecycle} from "../editor/editor_runtime";
// import {Repeat} from "./repeat";
// import {EditorBindingElement} from "../editor_element/editor_binding_element";
// import {NumberInput} from "./number_input";
//
// interface IArrayInput {
//     binding : any;
//     onValueChanged? : (newValue? : string, oldValue? : string) => void;
// }
//
// //todo -- formatters
//
// class PropertyRenderer extends EditorCustomElement<any> {
//
//     constructor(attrs : any) {
//         super(attrs);
//         for(let key in attrs) {
//             Object.defineProperty(attrs.prototype, key, {
//                 get: function () {
//                     return this._bindings(key).get();
//                 },
//                 set: function (value : any) {
//                    this._bindings(key).set(value);
//                    this.attributeChanged(key, value, null);
//                 }
//             })
//         }
//     }
//
//     protected isAttrDirty(check : any) : boolean {
//         if(check instanceof Binding) {
//             return check.isDirty();
//         }
//         return false;
//     }
//
// }
//
//
//
// export class ArrayInput extends EditorCustomElement<IArrayInput> implements ILifecycle {
//
//     private getterFn : (renderCtx : any) => any;
//     private setterFn : (renderCtx : any, value : any) => void;
//     private lastValue : any;
//     private ctx : any;
//
//     protected getDomData() : IDomData {
//         return { tagName: "div" };
//     }
//
//     public createInitialStructure() : JSXElement {
//         return [
//             <NumberInput binding="" value={ Binding<string>(this, "lastValue") }/>
//             //<Repeat list={ Binding<string>(this.attrs.list) } itemFactory={null}></Repeat>
//             // /*
//             // *
//             // * <Repeat list={this.list} itemBuilder={ (index : number) => this.buildItem(index) >
//             // *     <Label> { Repeat.Index } </Label>
//             // *     <Value> { GetInspectorForType(Repeat.CurrentItem) </Value>
//             // * </Repeat>
//             // *
//             // * */
//         ]
//     }
//
//     public onMounted() {
//         this.ctx = this.attrs.binding.ctx;
//         this.getterFn = getGetter(this.attrs.binding.path);
//         this.setterFn = getSetter(this.attrs.binding.path);
//         const attrs = this.attrs as any;
//         Object.keys(attrs).forEach((key : string) => {
//             if(attrs[key] instanceof EditorBindingElement) {
//                 attrs[key].onChange(() => {
//
//                 })
//             }
//         })
//         // if(this.isBinding(this.attrs.value)) {
//         //
//         // }
//     }
//
//     public onFieldDirty(fieldPath : any, value : any, oldValue : any) : void {
//         if(fieldPath.ChangeSource === "Inspector") {
//
//         }
//         if(fieldPath.fieldName === "x") {
//
//         }
//     }
//
//     public onValueChanged() : void {
//         //getParent(ValueRenderer)
//         //if handler => handler.onValueChanged(this.path.slice(0).push(this.propertyName), value)
//     }
//
//     public onUpdated() {
//
//         /*
//
//         ComponentRenderer
//             FieldRenderer
//                 NumberInput
//
//             FieldRenderer
//                 ArrayRenderer
//                     ObjectRenderer
//                         FloatRenderer
//                         FloatRenderer
//                         ArrayRenderer
//                             ObjectRender
//                                 NumberRenderer
//
//         onInspectorFieldDirty(path, value, oldValue) {
//             [Transform.Position.X]
//             if(path.getReference() === this.transform.position) {
//
//             }
//             if(path.propertyName === "x") {
//
//             }
//
//         }
//
//         object.things[i].name
//         ObjectInspector
//             ArrayInspector
//                 IndexInspector
//                     StringInput
//
//             function recursiveDirtyCheck(index, item) {
//                 const child = getChildById(index)
//                 child.recursiveDirtyCheck();
//             }
//
//             foreach list item
//                 if(recursive dirty check item) {
//                     this.onValueChanged(index)
//                 }
//
//          */
//         // const value = this.getterFn(this.ctx) || "";
//         // if (this.lastValue !== value) {
//         //     if(this.attrs.onValueChanged) {
//         //         this.attrs.onValueChanged(value, this.lastValue);
//         //     }
//         //     this.lastValue = value;
//         //     (this.htmlNode as HTMLInputElement).value = value;
//         // }
//     }
//
//     public onRendered() {
//         EditorRuntime.updateTree.add(this);
//     }
//
// }