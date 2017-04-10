import {AppElement} from "./app_element";
import {TypeOf} from "./interfaces/i_typeof";
import {LifeCycleFlag} from "./enums/e_lifecycle_flags";

export class Component {

    public readonly appElement : AppElement;
    private lifeCycleFlags : LifeCycleFlag = LifeCycleFlag.Enabled;

    public get isEnabled() : boolean {
        return (this.lifeCycleFlags & LifeCycleFlag.Enabled) !== 0;
    }

    //todo -- need to incorporate 'ActiveAndEnabled'
    public set isEnabled(value : boolean) {
        if(this.isEnabled === value) return;
        if(value) {
            this.lifeCycleFlags |= LifeCycleFlag.Enabled;
            this.onEnabled();
        }
        else {
            this.lifeCycleFlags ^= LifeCycleFlag.Enabled;
            this.onDisabled();
        }
    }

    public getComponent<T extends Component>(type : TypeOf<T>) : T {
        return this.appElement.getComponent(type);
    }

    //Returns all components of Type type in the GameObject
    public getComponents<T extends Component>(type : TypeOf<T>) : Array<T> {
        return this.appElement.getComponents(type);
    }

    public getComponentInChildren<T extends Component>(type : TypeOf<T>) : T {
        return this.appElement.getComponentInChildren(type);
    }

    //Returns all components of Type in the AppElement in it's direct children
    public getComponentsInChildren<T extends Component>(type : TypeOf<T>) : Array<T> {
        return this.appElement.getComponentsInChildren(type);
    }

    //Returns all components of Type in the AppElement recursively in its children
    public getComponentsInDescendants<T extends Component>(type : TypeOf<T>) : Array<T> {
        return this.appElement.getComponentsInDescendants(type);
    }

    public getComponentInParent<T extends Component>(type : TypeOf<T>) : T {
        return this.appElement.getComponentInParent(type);
    }

    public getComponentsInParent<T extends Component>(type : TypeOf<T>) : Array<T> {
        return this.appElement.getComponentsInParent(type);
    }

    public onChildAdded(child : AppElement) : void {}

    public onChildRemoved(child : AppElement) : void {}

    public onCreated() : void {}

    public onMounted() : void {}

    public onEnabled() : void {}

    public onDisabled() : void {}

    public onDestroyed() : void {}

    public update(deltaTime? : number) : void {}

    public destroy() {
        (<any>this).appElement = null;
    }

    private static types = new Map<string, any>();

    public static componentDecorator(path : string) {
        return function (target : any) {
            Component.types.set(path, target);
        }
    }

    public static allowMultipleDecorator() {
        // return function(target : any) {
        //     Component.types.set(path, {
        //
        //     })
        // }
    }

    public static requireComponent() {

    }

    public static getComponentFromPath(path : string) : typeof Component {
        return Component.types.get(path);
    }

    public static getComponentTypePathPairs() : Array<{ type : typeof Component, path : string }> {
        const retn = new Array<{ type : typeof Component, path : string }>();
        Component.types.forEach(function (value : typeof Component, key : string) {
            retn.push({ type: value, path: key });
        });
        return retn;
    }

    public serialize() : IJson {
        return null;
    }

    public static Serialize(component : Component) : any {
        return {
            id: "blach", data:  component.serialize()
        }
    }
}

export const allowMultiple = Component.allowMultipleDecorator;
export const component = Component.componentDecorator;
export const requireComponent = Component.requireComponent;

