import {ObjectPool1, ObjectPool2} from "../object_pool";
import {StyleBatch} from "./style_batch";
import {StylePropertyUpdate} from "./style_property_update";
import {AppEntity} from "./app_entity";
import {Background} from "./ui/background";

export enum RenderDirtyFlags {
    None = 0,
    Dimension = 1 << 0,
    Transform = 1 << 1,
    Border = 1 << 2,
    Background = 1 << 3,
    Outline = 1 << 4,
    TextContent = 1 << 5,
    TextStyle = 1 << 6,
    Visibility = 1 << 7,
    Create = 1 << 8,
    Destroy = 1 << 9
}

export interface IRenderFlaggable {
    renderDirtyFlags : RenderDirtyFlags;
}

export class GradientImage {

}

export class UIImage {

}

class ImageSlice {
    //can probably combine all this into 2 or 3 integers
    public top : number;
    public bottom : number;
    public left : number;
    public right : number;
    public fill : boolean;
    public slice : number;

}

const flag = RenderDirtyFlags.None;

const StyleBatchPool = new ObjectPool1(StyleBatch);
const BatchUpdatePool = new ObjectPool2(StylePropertyUpdate);

export enum UIElementType {
    Text, Box, Shape, Ghost
}

type NodeGenFn = (entity : AppEntity) => Node;
const ElementGenerators : Indexable<NodeGenFn> = {

    [UIElementType.Box]: function (entity : AppEntity) {
        return null;
    },

    [UIElementType.Ghost]: function (entity : AppEntity) {
        return null;
    }

};

class HtmlRenderingEngine {

    private renderList : Array<AppEntity>;
    private creationQueue : Array<AppEntity>;
    private destructionQueue : Array<AppEntity>;
    private domMap : Indexable<HTMLElement>;
    private styleBatches : Array<StyleBatch>;

    constructor() {
        this.renderList = new Array<AppEntity>(100);
        this.styleBatches = new Array<StyleBatch>(100);
    }

    //2 types of entities: rendering and non rendering
    //non rendering has a transform and dimensions
    //rendering also has style / content
    //non rendered elements either don't clip or

    public batch() {
        let i = 0;
        while (this.renderList[i]) {
            const entity = this.renderList[i];
            const tag = entity.getBaseUIElementType();
            const batch = StyleBatchPool.spawn(entity.id);
            const updates = batch.updates;
            let updateIndex = 0;
            const renderFlags = entity.renderFlags;
            if (renderFlags & RenderDirtyFlags.Create) {
                const type = entity.getBaseUIElementType();
                let element = ElementGenerators[type](entity);
            }
            if ((renderFlags & RenderDirtyFlags.Destroy) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.Visibility) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.Border) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.Dimension) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.Outline) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.TextContent) !== 0) {

            }
            if ((renderFlags & RenderDirtyFlags.TextStyle) !== 0) {
                // const bg = entity.getComponent(Text);
                // if(bg) bg.getStyleUpdates(batch);
            }
            if ((renderFlags & RenderDirtyFlags.Background) !== 0) {
                const bg = entity.getComponent(Background);
                if(bg) bg.getStyleUpdates(batch);
            }
            this.styleBatches.push(batch);
            entity.renderFlags = RenderDirtyFlags.None;
            this.renderList[i] = null;
            i++;
        }

    }

    public execute() {
        let i = 0;
        while (this.styleBatches[i]) {
            const batch = this.styleBatches[i];
            const updates = batch.updates;
            const element = this.domMap[batch.entityId];
            const style = element.style;

            let j = 0;
            while (updates[j]) {
                const update = updates[i];
                element.style[update.property] = update.value;
                BatchUpdatePool.despawn(update);
                updates[j] = null;
                j++;
            }

            StyleBatchPool.despawn(batch);
            this.styleBatches[i] = null;
            i++;
        }

    }

    public markElementForRender(entity : AppEntity, flag : RenderDirtyFlags) {
        if (entity.renderFlags === 0) this.renderList.push(entity);
        entity.renderFlags |= flag;
    }

}

class PropertyBinding {

    constructor() {

    }

    public update() {

    }

}

function Panel() {
    //this.bindings.flush();
    //this.width = 100; //binding removed
    //this.bind("width", "other.x");
    //this.getBinding("width").disable();
    //this.getBinding("width").onChange();

    class X {
        // bind(x : keyof this, target : () => this[x]) : void {
        //
        // }
    }
}

//need to profile building shorthands vs real properties
enum StyleProperties {
// background
// background-attachment
// background-clip
// background-color
// background-image
// background-origin
// background-position
// background-repeat
// background-size
// border
// border-bottom
// border-bottom-color
// border-bottom-left-radius
// border-bottom-right-radius
// border-bottom-style
// border-bottom-width
// border-color
// border-image
// border-image-outset
// border-image-repeat
// border-image-slice
// border-image-source
// border-image-width
// border-left
// border-left-color
// border-left-style
// border-left-width
// border-radius
// border-right
// border-right-color
// border-right-style
// border-right-width
// border-style
// border-top
// border-top-color
// border-top-left-radius
// border-top-right-radius
// border-top-style
// border-top-width
// border-width
    //line-height
    //margin
    //padding
    //outline
    //mask
    //clip-path
    //matrix
    //matrix3d
    //width
    //height
    //overflow?
    //box-shadow
    //color
    //font
    //font-family
    //font-size
    //font
}