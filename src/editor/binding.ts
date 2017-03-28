import {EditorElement} from "../editor_element/editor_element";
import {getGetter, getSetter} from "../editor_ui_attrs/binding_compiler";

export interface IEditorBinding<T> {
    get() : T;
    set(value : T) : void;
    onUpdated() : void;
    onChange(fn : (newValue? : T, oldValue? : T) => any) : this;
    setHost(host : EditorElement) : this;
}

export function CreateBinding<T extends object, U extends keyof T>(context : T|IEditorBinding<T>, one : U) : IEditorBinding<T[U]>;

export function CreateBinding
<T extends object, U extends keyof T, V extends keyof T[U]>
(context : T|IEditorBinding<T>, one : U, two : V) : IEditorBinding<T[U][V]>;

export function CreateBinding
<T extends object, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V]>
(context : T|IEditorBinding<T>, one : U, two : V, three : W) : IEditorBinding<T[U][V][W]>;

export function CreateBinding
<T extends object, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W]>
(context : T|IEditorBinding<T>, one : U, two : V, three : W, four : X) : IEditorBinding<T[U][V][W][X]>;

export function CreateBinding
<T extends object, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W]>
(context : T|IEditorBinding<T>, one? : U, two? : V, three? : W, four? : X) : IEditorBinding<any> {
    const path = Array.prototype.slice.call(arguments, 1);

    if (context instanceof EditorBinding) {
        return new EditorSubBinding<T[U][V][W][X]>(context, path) as any;
    }
    return new EditorBinding<T[U][V][W][X]>(context, path) as any;
}

export class EditorBinding<T> implements IEditorBinding<T> {

    protected value : T;
    protected getterFn : any;
    protected setterFn : any;
    protected context : object;
    protected changeHandlers : Array<(value? : T, old? : T) => void>;
    protected onValueChanged : (value? : T, old? : T) => void;
    public readonly element : EditorElement;

    constructor(context : object, path : string|string[]) {
        this.element = null;
        this.context = context;
        this.getterFn = getGetter(path);
        this.setterFn = getSetter(path);
        this.value = this.getterFn(this.context);
        this.changeHandlers = [];
    }

    public onUpdated() : void {
        const value = this.getterFn(this.context);
        if (value !== this.value) {
            const oldValue = this.value;
            this.value = value;
            this.sendChanges(this.value, oldValue);
        }
    }

    public set(value : T) : void {
        if(value === this.value) return;
        this.setterFn(this.context, value);
        const oldValue = this.value;
        this.value = value;
        this.sendChanges(this.value, oldValue);
    }

    public get() : T {
        return this.value;
    }

    public onChange(fn : (newValue? : T, oldValue? : T) => void) : this {
        this.changeHandlers.push(fn);
        return this;
    }

    public offChange(fn : (newValue? : T, oldValue? : T) => void) : this {
        this.changeHandlers.remove(fn);
        return this;
    }

    public setHost(host : EditorElement) : this {
        if (this.element) {
            EditorRuntime.updateTree.remove(this);
        }
        (this as any).element = host;
        if (this.element) {
            EditorRuntime.updateTree.add(this);
        }
        return this;
    }

    public destroy() : void {
        this.context = null;
        this.changeHandlers = null;
        EditorRuntime.updateTree.remove(this);
        this.getterFn = null;
        this.setterFn = null;
        this.value = null;
        (this as any).element = null;
    }

    protected sendChanges(newValue : T, oldValue : T) : void {
        for(let i = 0; i < this.changeHandlers.length; i++) {
            this.changeHandlers[i](newValue, oldValue);
        }
    }

}

export class EditorSubBinding<T> extends EditorBinding<T> implements IEditorBinding<T> {

    protected context : EditorBinding<object>;

    public set(value : T) : void {
        if(value === this.value) return;
        this.setterFn(this.context.get(), value);
        const oldValue = this.value;
        this.value = value;
        this.sendChanges(this.value, oldValue);
    }

    public onUpdated() : void {
        const value = this.getterFn(this.context.get());
        if (value !== this.value) {
            const oldValue = this.value;
            this.value = value;
            this.sendChanges(this.value, oldValue);
        }
    }

    protected sendChanges(newValue : T, oldValue : T) : void {
        super.sendChanges(newValue, oldValue);
        const parentValue = this.context.get();
        const parentContext = this.context as EditorSubBinding<any>;
        parentContext.sendChanges(parentValue, parentValue);
    }

}
