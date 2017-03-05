import {AppElement} from "./app_element";
import {Component} from "./component";
import {traverseChildren} from "../util";
import {setTypePath} from "./persistance/type";

@setTypePath("Runtime/Scene")
export class Scene {

    private sceneRoots : AppElement[];

    constructor() {
        this.sceneRoots = [];
    }

    public save() {

        var generateId = (function() {
            let id = 1;
            return function() {
                return id++;
            }
        })();

        function addToMap(o : object) : void {
            if(objectIdMap.has(o)) return;
            objectIdMap.set(o, generateId());
        }

        let json : any = {};
        let objectIdMap = new Map<object, number>();
        //give all objects an id

        traverseChildren(AppElement.Root, (child : AppElement) => {

            addToMap(child);

            objectIdMap.set(child, generateId());
            child.getAllComponents().forEach((component : Component) => {

                addToMap(child);

                Object.keys(component).forEach((key : string) => {
                    const value = (component as any)[key];
                    if(value && typeof value === "object") {
                        addToMap(child);
                    }
                });

            });
        });

        traverseChildren(AppElement.Root, (child : AppElement) => {
            json[objectIdMap.get(child)] =  {
                id: child.id,
                name: child.name,
                parentId: child.getParent().id,
                localPosition: child.getLocalPosition(),
                localRotation: child.getRotation(),
                scale: child.getScale(),
                width: child.getWidth(),
                height: child.getHeight(),
                components: child.getAllComponents().forEach((component : Component) => {
                    json[objectIdMap.get(component)] = "";
                })
            }
        });
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

    private hydrateElement(definition : any, parent? : AppElement) : AppElement {
        const appElement = new AppElement(definition.name, parent);
        for (let j = 0; j < definition.components.length; j++) {
            const compDesc = definition.components[j];
            const type = Component.getComponentFromPath(compDesc.type);
            const cmp = appElement.addComponent(type);
        }
        for (let k = 0; k < definition.children.length; k++) {
            this.hydrateElement(definition.children[k], appElement);
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

