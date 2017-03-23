import {ImmutableVector2, Vector2} from "./vector2";

export class Polygon {

    public readonly points : ImmutableVector2[];

    constructor() {
        this.points = new Array<ImmutableVector2>();
    }

    public addPoint(point : IVector2) : void {
        this.points.push(new Vector2(point.x, point.y));
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
}