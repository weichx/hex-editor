import {AppElement} from "../runtime/app_element";
import {Component} from "../runtime/component";
import {Asset} from "../runtime/asset";

export interface IPrefabDefinition {
    name: string;
    data: any;
    components: any[]
}

interface ComponentTemplate {}

export class PrefabTemplate extends Asset {

    private assetDef : IPrefabDefinition;
    private children : Array<PrefabTemplate>;
    private components : Array<ComponentTemplate>;

    constructor(assetDef : any) {
        super(assetDef);
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