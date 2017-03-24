import {ImmutableVector2, Vector2} from "../runtime/vector2";
import {Transformable} from "../runtime/transformable";

export class Polygon extends Transformable {

    public readonly points : ImmutableVector2[];
    public readonly coordinates : number[];

    constructor() {
        super();
        this.points = new Array<ImmutableVector2>();
        this.coordinates = [];
    }

    public addPoint(point : IVector2) : void {
        this.points.push(new Vector2(point.x, point.y));
        this.coordinates.push(point.x, point.y);
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

    public static contains(points : Array<IVector2>, target : IVector2) {
        let contains = false;
        const px = target.x;
        const py = target.y;
        for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
            const pointI = points[i];
            const pointJ = points[j];
            const pIx = pointI.x;
            const pIy = pointI.y;
            const pJx = pointJ.x;
            const pJy = pointJ.y;
            const test = (pIy >= py ) !== (pJy >= py);
            if (test && (px <= (pJx - pIx) * (py - pIy) / (pJy - pIy) + pIx)) {
                contains = !contains;
            }
        }

        return contains;
    }
}
