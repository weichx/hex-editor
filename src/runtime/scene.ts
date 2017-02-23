import {AppElement} from "./app_element";
import {Component} from "./component";
export class Scene {

    private isRendered : boolean;
    private sceneRoots : AppElement[];

    constructor() {
        this.isRendered = false;
        this.sceneRoots = [];
    }

    public save() : any {

    }

    public destroy() : void {
        //todo -- tear down existing scene
    }

    public load(sceneDescription : any) {
        // this.destroy();
        // const elements = sceneDescription.elements;
        // for(let i = 0; i < elements.length; i++) {
        //     this.sceneRoots.push(this.hydrateElement(elements[i]));
        // }
    }

    private hydrateElement(definition : any) : AppElement {
        const appElement = new AppElement(definition.name);
        for (let j = 0; j < definition.components.length; j++) {
            const compDesc = definition.components[j];
            const type = Component.getComponentFromPath(compDesc.type);
            const cmp = appElement.addComponent(type);
        }
        for (let k = 0; k < definition.children.length; k++) {
            this.hydrateElement(definition.children[k]).setParent(appElement);
        }
        return appElement;
    }

    public unload() : any {

    }

    public addRootElement(element : AppElement) : void {
        this.sceneRoots.push(element);
    }

    public getRootElements() : Array<AppElement> {
        return this.sceneRoots.slice(0);
    }

}

