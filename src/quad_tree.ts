import {BoundingBox} from "./runtime/bounding_box";
import {AppElement} from "./runtime/app_element";
import {Vector2} from "./runtime/vector2";

const MinSize = 1;

class AxisAlignedBoundingBox {
    public min : Vector2;
    public max : Vector2;

    constructor() {
        this.min = new Vector2();
        this.max = new Vector2();
    }

}

export class QuadTree {

    private boundingBox : AxisAlignedBoundingBox;
    private objects : Array<AppElement>;
    private children : Array<QuadTree>;
    private activeNodes : number;
    private parent : QuadTree;

    constructor() {
        this.boundingBox = new AxisAlignedBoundingBox();
        this.children = new Array<QuadTree>(4);
        this.objects = new Array<AppElement>();
    }

    public build() : void {
        const region = this.boundingBox;
        const dimensions = region.max.subVectorNew(region.min, Vector2.scratch0);
        if (dimensions.isZero()) {
            this.findEnclosingRect();
        }
    }

    private findEnclosingRect() {

        const globalMin = this.boundingBox.min;
        const globalMax = this.boundingBox.max;

        for (let i = 0; i < this.objects.length; i++) {
            const localMin = Vector2.scratch0;
            const localMax = Vector2.scratch1;
            const boundingBox = this.objects[i].getBoundingBox();
            if (!boundingBox.topLeft.equals(boundingBox.bottomRight)) {
                localMin.copy(boundingBox.topLeft);
                localMax.copy(boundingBox.bottomRight);
            }

            if (localMin.x < globalMin.x) globalMin.x = localMin.x;
            if (localMin.y < globalMin.y) globalMin.y = localMin.y;

            if (localMax.x > globalMax.x) globalMax.x = localMax.x;
            if (localMax.y > globalMax.y) globalMax.y = localMax.y;
        }

    }

    private findEnclosingPow2Rect() {
        const regionMin = this.boundingBox.min;
        const regionMax = this.boundingBox.max;
        //todo this offset feels wrong
        const offsetX = regionMin.x;
        const offsetY = regionMin.y;
        //translate to 0,0, round max up to power of 2, translate back
        regionMin.subValues(offsetX, offsetY);
        regionMax.subValues(offsetX, offsetY);
        let max = ~~(Math.max(regionMax.x, regionMax.y)) | 0;

        //round to upper power of 2
        max--;
        max |= max >> 1;
        max |= max >> 2;
        max |= max >> 4;
        max |= max >> 8;
        max |= max >> 16;
        max++;
        regionMax.x = max;
        regionMax.y = max;
        regionMin.addValues(offsetX, offsetY);
        regionMax.addValues(offsetX, offsetY);
    }

    public insert(appElement : AppElement) {
        if(this.objects.length <= 1 && this.activeNodes === 0) {
            this.objects.push(appElement);
            return;
        }
        const region = this.boundingBox;
        const dimensions = region.max.subVectorNew(region.min, Vector2.scratch0);
        if(dimensions.x <= MinSize && dimensions.y <= MinSize) {
            this.objects.push(appElement);
        }

    }

}