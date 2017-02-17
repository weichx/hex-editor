import {PropertyRenderer} from "./property_renderer";

export function propertyDrawer(typeToDraw : any) {
    return function (target : typeof PropertyRenderer) : void {
        PropertyRenderer.set(typeToDraw, target);
    }
}
