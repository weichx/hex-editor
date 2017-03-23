import {AppElement} from "./app_element";
import {Vector2} from "./vector2";
import {Rectangle} from "./rectangle";
import {MathUtil} from "../math_util";

export class BoundingBox {

    public readonly topLeft : Readonly<IVector2>;
    public readonly topRight : Readonly<IVector2>;
    public readonly bottomRight : Readonly<IVector2>;
    public readonly bottomLeft : Readonly<IVector2>;
    public readonly appElement : AppElement;
    private points : Readonly<IVector2>[];

    constructor(appElement : AppElement) {
        this.appElement = appElement;
        this.topLeft = new Vector2();
        this.topRight = new Vector2();
        this.bottomLeft = new Vector2();
        this.bottomRight = new Vector2();
        this.points = [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
        this.update();
    }

    public update() : void {
        const element = this.appElement;
        const wm = element.getWorldMatrix();
        const scale = wm.getScale();
        const rotation = wm.getRotation();
        const theta = -rotation;
        const position = element.getLocalPosition();

        const pivot = element.getPivot();
        const w = element.getWidth() * scale.x;
        const h = element.getHeight() * scale.y;
        const pivotPoint = new Vector2(pivot.x * w, pivot.y * h);
        const parent = element.getParent();

        if(parent) {
            const p = parent.getPosition();
            //maybe this needs to be done for all parents and get the result?
            position.x = p.x + (position.x * scale.x); //this may incorrectly add 1 when scale === 1
            position.y = p.y + (position.y * scale.y);
        }

        (this.topLeft as Vector2).set(0, 0).rotateAround(theta, pivotPoint).addVector(position);
        (this.topRight as Vector2).set(w, 0).rotateAround(theta, pivotPoint).addVector(position);
        (this.bottomRight as Vector2).set(w, h).rotateAround(theta, pivotPoint).addVector(position);
        (this.bottomLeft as Vector2).set(0, h).rotateAround(theta, pivotPoint).addVector(position);

        //now rotate around parent

    }

    public containsPoint(point : IVector2) : boolean {
        const points = this.points;
        let c = false;
        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
            const pointI = points[i];
            const pointJ = points[j];
            if (( (pointI.y >= point.y ) !== (pointJ.y >= point.y) ) &&
                (point.x <= (pointJ.x - pointI.x) * (point.y - pointI.y) / (pointJ.y - pointI.y) + pointI.x)
            ) {
                c = !c;
            }
        }

        return c;
    }

    public getAxisAlignedBoundingBox() {
        let minX = this.topLeft.x;
        let minY = this.topLeft.y;
        let maxX = this.topLeft.x;
        let maxY = this.topLeft.y;
        for(let i = 0; i < this.points.length; i++) {
            const v = this.points[i];
            if(v.x > maxX) {
                maxX = v.x;
            }
            if(v.x < minX) {
                minX = v.x;
            }
            if(v.y > maxY) {
                maxY = v.y;
            }
            if(v.y < minY) {
                minY = v.y;
            }
        }
        return new Rectangle().setFromPoints(minX, minY, maxX, maxY);
    }
}