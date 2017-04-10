// import {Matrix} from "./matrix";
// import {Vector3} from "./vector3";
// import {Quaternion} from "./quaternion";
// import {Space} from "./app_element";
// import {Vector2} from "./vector2";
// import {MathUtil} from "../math_util";
//
// export class Transformable {
//
//     protected parent : Transformable;
//     protected children : Transformable[];
//     protected worldMatrix : Matrix;
//     protected position : Vector2;
//     protected rotation : Quaternion;
//     protected scale : Vector2;
//     protected dirty : boolean;
//
//     constructor(parent? : Transformable) {
//         this.dirty = true;
//         this.parent = parent;
//         this.children = [];
//         this.position = new Vector2();
//         this.rotation = new Quaternion();
//         this.scale = new Vector2(1, 1);
//         this.worldMatrix = new Matrix();
//         if(this.parent) {
//             this.parent.children.push(this);
//         }
//     }
//
//     public getWorldMatrix(out? : Matrix) {
//         this.updateWorldMatrix();
//         return this.worldMatrix.clone(out);
//     }
//
//     public updateWorldMatrix() : void {
//         const scaling = Matrix.scratch0;
//         const rotation = Matrix.scratch1;
//         const translate = Matrix.scratch2;
//         const rotationAndScale = Matrix.scratch3;
//         this.rotation.toRotationMatrix(rotation);
//         Matrix.CreateScale(this.scale.x, this.scale.y, 1, scaling);
//         Matrix.CreateTranslation(this.position.x, this.position.y, 0, translate);
//         Matrix.Multiply(scaling, rotation, rotationAndScale);
//         Matrix.Multiply(rotationAndScale, translate, this.localMatrix);
//         if (this.parent) {
//             this.localMatrix.multiplyToRef(this.parent.getWorldMatrix(), this.worldMatrix);
//         } else {
//             this.worldMatrix.copy(this.localMatrix);
//         }
//     }
//
//     protected isDirty() : boolean {
//         let ptr = this as Transformable;
//         while(ptr) {
//             if(ptr.dirty) return true;
//             ptr = ptr.parent;
//         }
//         return false;
//     }
//
//     public translate(translation : Vector2, relativeTo = Space.World) : this {
//         return this.translateValues(translation.x, translation.y, relativeTo);
//     }
//
//     public translateValues(x : number, y : number, relativeTo = Space.World) : this {
//         if (this.parent && relativeTo === Space.World) {
//             this.parent.getWorldMatrix(Matrix.scratch0).invert();
//             const scratch = Vector3.scratch0;
//             scratch.x = x;
//             scratch.y = y;
//             scratch.z = 0;
//             Vector3.TransformCoordinates(scratch, Matrix.scratch0, scratch);
//             this.position.addValues(scratch.x, scratch.y);
//         }
//         else {
//             this.position.addValues(x, y);
//         }
//         return this;
//     }
//
//     public setPosition(position : Vector2,  relativeTo = Space.World) : void {
//         return this.setPositionValues(position.x, position.y, relativeTo);
//     }
//
//     public setPositionValues(x : number, y : number, relativeTo = Space.World) : void {
//         if (this.parent && relativeTo === Space.World) {
//             this.parent.getWorldMatrix(Matrix.scratch0).invert();
//             const scratch = Vector3.scratch0;
//             scratch.x = x;
//             scratch.y = y;
//             scratch.z = 0;
//             Vector3.TransformCoordinates(scratch, Matrix.scratch0, scratch);
//             this.position.x = scratch.x;
//             this.position.y = scratch.y;
//         }
//         else {
//             this.position.set(x, y);
//         }
//     }
//
//     public pointToLocalSpace(point : Vector2, out? : Vector2) {
//         if (this.parent) {
//             this.parent.getWorldMatrix(Matrix.scratch0).invert();
//             const scratch = Vector3.scratch0;
//             scratch.x = point.x;
//             scratch.y = point.y;
//             scratch.z = 0;
//             Vector3.TransformCoordinates(scratch, Matrix.scratch0, scratch);
//             return point.clone(out).set(scratch.x, scratch.y);
//         }
//         else {
//             return point.clone(out);
//         }
//     }
//
//     public getRotation() : number {
//         return this.rotation.getRotationZ();
//     }
//
//     public rotate(radians : number) : this {
//         Quaternion.RotationAxis(Vector3.Forward, radians, Quaternion.scratch0);
//         this.rotation.multiply(Quaternion.scratch0);
//         return this;
//     }
//
//     public setScale(scale : Vector2) : this {
//         this.scale.x = scale.x;
//         this.scale.y = scale.y;
//         return this;
//     }
//
//     public getScale(out? : Vector2) : Vector2 {
//         return (out || new Vector2).copy(this.scale);
//     }
//
//     public getPosition(out? : Vector2) : Vector2 {
//         this.updateWorldMatrix();
//         return (out || new Vector2()).set(this.worldMatrix.m[12], this.worldMatrix.m[13]);
//     }
//
//     public getLocalPosition(out? : Vector2) : Vector2 {
//         return (out || new Vector2()).copy(this.position);
//     }
//
//     public setParent(parent : Transformable) : boolean {
//         if(this.isDescendantOf(parent)) {
//             return false;
//         }
//         if(this.parent) {
//             this.parent.children.remove(this);
//         }
//         this.parent = parent;
//         this.parent.children.push(this);
//     }
//
//     public getParent() : Transformable {
//         return this.parent;
//     }
//
//     public isDescendantOf(transformable : Transformable) {
//         if(!transformable || transformable === this){
//             return false;
//         }
//
//         var ptr = this.parent;
//         while(ptr) {
//             if(ptr === transformable) {
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     public setSiblingIndex(index : number) : boolean {
//         const parent = this.parent;
//         if (!parent) return false;
//         const children = this.parent.children;
//         const currentIndex = children.indexOf(this);
//
//         if (index === currentIndex || currentIndex === -1) {
//             return false;
//         }
//
//         index = MathUtil.clamp(index, 0, children.length - 1);
//         children.remove(this);
//         children.insert(this, index);
//         return true;
//     }
//
//     public isRoot() : boolean {
//         return !this.parent;
//     }
//
//     public getChildAt(index : number) {
//         return this.children[index];
//     }
//
//     public getChildCount() : number {
//         return this.children.length;
//     }
//
//     public getDepth() : number {
//         if(!this.parent) return 0;
//         let ptr = this.parent;
//         let depth = 1;
//         while (ptr) {
//             depth++;
//             ptr = ptr.parent;
//         }
//         return depth;
//     }
//
// }