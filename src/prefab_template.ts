import {AppElement} from "./runtime/app_element";
import {Component} from "./runtime/component";

export interface IPrefabDefinition {
    name: string;
    data: any;
    components: any[]
}

export class PrefabTemplate {

    public name : string;
    private assetDef : IPrefabDefinition;

    constructor(assetDef : any) {
        this.name = assetDef.name;
        this.assetDef = assetDef;
    }

    public create() : AppElement {
        const appElement = new AppElement(this.assetDef.name);
        //todo - apply data desc
        for(let i = 0; i < this.assetDef.components.length; i++) {
            const desc = this.assetDef.components[i];
            const type = Component.getComponentFromPath(desc.type) as any;
            if (type) {
                const cmp = appElement.addComponent(type);
                if (type.OnDeserialized) {
                    type.OnDeserialized(cmp, desc.data); //temp until i optimize cerialize for hex
                }
            }
        }
        return appElement;
    }

}