namespace HexEditor {

    import distanceTestPoint = HexUtil.distanceTestPoint;
    import AppElement = Hex.AppElement;
    import hitTestLine = HexUtil.hitTestLine;

    class SceneTool {

        public sceneWindow : SceneWindow;
        public sceneBodyRoot : EditorElement;

        constructor(sceneWindow : SceneWindow) {
            this.sceneWindow = sceneWindow;
            this.sceneBodyRoot = this.sceneWindow.getChildById("scene-window-body")
        }

        public update() : void {}

        public enable() : void {}

        public disable() : void {}

    }

    enum DragSide {
        None, Top, Left, Right, Bottom, TopRight, TopLeft, BottomRight, BottomLeft
    }

    class SceneRectTool extends SceneTool {

        private draggedSide : DragSide = DragSide.None;
        private dragRect : Rectangle = new Rectangle();
        private selection : AppElement;

        public update() : void {

            // const input = EditorRuntime.getInput();
            // const selection = EditorRuntime.getSelection();
            // const mouse = input.getRelativeMousePosition(this.sceneBodyRoot);
            // const highlighter = this.sceneWindow.highlighter;
            //
            // if (selection) {
            //     const transform = selection.transform as Transform;
            //     const rect = selection.transform.getRect();
            //     highlighter.setVisible(true);
            //     highlighter.setRect(rect);
            //     if (input.isMouseDownThisFrame()) {
            //
            //         this.draggedSide = this.hitTestDragSide(mouse, transform);
            //         if (this.draggedSide === DragSide.None) {
            //             const element = EditorRuntime.getAppElementAtPoint(mouse);
            //             if (element && element !== selection) {
            //                 EditorRuntime.select(element);
            //             }
            //             else {
            //                 EditorRuntime.select(null);
            //             }
            //         }
            //
            //         //hit test sides
            //         //hit test corners
            //         //hit test element
            //         //hit test other elements
            //         //deselect
            //         return;
            //     }
            //     else if (input.isMouseDown()) {
            //         if (this.draggedSide !== DragSide.None) {
            //             this.updateDragSide(input.getMouseDelta(), transform);
            //         }
            //     }
            //     else if (input.isMouseUp()) {
            //         this.draggedSide = DragSide.None;
            //     }
            //
            //     if (this.draggedSide === DragSide.None) {
            //         this.setHoverCursor(this.hitTestDragSide(mouse, transform));
            //     }
            //
            // }
            // else {
            //     this.sceneWindow.setCursor('default');
            //     this.draggedSide = DragSide.None;
            //     highlighter.setVisible(false);
            // }
            //
            // // if (!input.isMouseInElement(this.sceneBodyRoot)) return;

        }

        private setHoverCursor(dragSide : DragSide) {
            switch (dragSide) {
                case DragSide.Top:
                case DragSide.Bottom:
                    this.sceneWindow.setCursor('ns-resize');
                    break;
                case DragSide.Left:
                case DragSide.Right:
                    this.sceneWindow.setCursor('ew-resize');
                    break;
                case DragSide.TopRight:
                case DragSide.BottomLeft:
                    this.sceneWindow.setCursor('nesw-resize');
                    break;
                case DragSide.TopLeft:
                case DragSide.BottomRight:
                    this.sceneWindow.setCursor('nwse-resize');
                    break;
                default:
                    this.sceneWindow.setCursor('default');
                    break;
            }
        }

        private hitTestDragSide(point : Vector2, appElement : AppElement) : DragSide {
            const bounds = appElement.getRect();
            const x = bounds.x;
            const y = bounds.y;
            const xw = bounds.x + bounds.width;
            const yh = bounds.y + bounds.height;

            if (distanceTestPoint(x, y, point, 5)) return DragSide.TopLeft;
            if (distanceTestPoint(xw, y, point, 5)) return DragSide.TopRight;
            if (distanceTestPoint(x, yh, point, 5)) return DragSide.BottomLeft;
            if (distanceTestPoint(xw, yh, point, 5)) return DragSide.BottomRight;

            if (hitTestLine(x, y, xw, y, point, 3)) return DragSide.Top;
            if (hitTestLine(x, y, x, yh, point, 3)) return DragSide.Left;
            if (hitTestLine(x, yh, xw, yh, point, 3)) return DragSide.Bottom;
            if (hitTestLine(xw, y, xw, yh, point, 3)) return DragSide.Right;

            return DragSide.None;
        }

        private updateDragSide(delta : Vector2, appElement : AppElement) {
            const rect = appElement.getRect();
            switch (this.draggedSide) {
                case DragSide.TopRight:
                    rect.y += delta.y;
                    rect.width += delta.x;
                    rect.height -= delta.y;
                    break;
                case DragSide.TopLeft:
                    rect.x += delta.x;
                    rect.y += delta.y;
                    rect.width -= delta.x;
                    rect.height -= delta.y;
                    break;
                case DragSide.BottomLeft:
                    rect.x += delta.x;
                    rect.width -= delta.x;
                    rect.height += delta.y;
                    break;
                case DragSide.BottomRight:
                    rect.width += delta.x;
                    rect.height += delta.y;
                    break;
                case DragSide.Top:
                    rect.y += delta.y;
                    rect.height -= delta.y;
                    break;
                case DragSide.Left:
                    rect.x += delta.x;
                    rect.width -= delta.x;
                    break;
                case DragSide.Right:
                    rect.width += delta.x;
                    break;
                case DragSide.Bottom:
                    rect.height += delta.y;
                    break;
            }
            if (rect.width < 1) rect.width = 1;
            if (rect.height < 1) rect.height = 1;
            if (rect.height === 1 && delta.y > 0) {
                rect.y -= delta.y;
            }
            if (rect.width === 1 && delta.x > 0) {
                rect.x -= delta.x;
            }
            appElement.setRect(rect);
        }

    }

    class ScenePanTool extends SceneTool {

        constructor(sceneWindow : SceneWindow) {
            super(sceneWindow);
        }

        public update() {
            const input = EditorRuntime.getInput();
            if (input.isMouseDown()) { //todo -- and in scene window
                const delta = input.getMouseDelta();
                //size component
                //fit content
            }
        }

    }


    export class SceneWindow extends EditorWindowElement<IWindowAttrs> {

        private currentTool : SceneTool;
        private ctx : CanvasRenderingContext2D;
        private canvas : HTMLCanvasElement;
        public highlighter : EditorElement;

        private width : number;
        private height : number;

        public onUpdated() : void {
            this.currentTool.update();
            this.paint();
        }

        public setCursor(cursorString : string) : void {
            this.getDomNode().style.cursor = cursorString;
        }

        private paint() {
            this.width = this.getDomNode().offsetWidth;
            this.height = this.getDomNode().offsetHeight;

            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = HexEditorTheme.WindowColors.sceneBackground;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.ctx.strokeStyle = '#FFFFFF';
            this.ctx.lineWidth = 0.5;
            this.ctx.globalAlpha = 0.2;
            this.ctx.beginPath();
            const spacing = 25;
            for (let i = 0; i < 100; i++) {
                const interval = i * spacing + 0.5;
                this.ctx.moveTo(0, interval);
                this.ctx.lineTo(this.width, interval);
                this.ctx.moveTo(interval, 0);
                this.ctx.lineTo(interval, this.height);
            }

            this.ctx.closePath();
            this.ctx.stroke();

        }

        public onRendered() {
            this.currentTool = new SceneRectTool(this);
            this.highlighter = this.getChildById("highlighter");
            this.canvas = this.getChildById("canvas").getDomNode() as HTMLCanvasElement;
            this.ctx = this.canvas.getContext("2d");
            this.paint();
            EditorRuntime.drawScene("scene-render-root");
            EditorRuntime.addUpdater(this);
        }

        public createInitialStructure(children : any) : JSXElement {
            return <div x-id="scene-window-root" class="scene-window-root">
                <canvas x-id="canvas"></canvas>
                <div x-id="scene-window-body" class="scene-window-body">
                    <div x-child-root id="scene-render-root" class="scene-render-root"></div>
                    <div x-id="highlighter" x-hidden class="highlighter">
                        <div x-id="hi-lite-top-right" class="highlight-corner top-right"></div>
                        <div x-id="hi-lite-top-left" class="highlight-corner top-left"></div>
                        <div x-id="hi-lite-bottom-right" class="highlight-corner bottom-right"></div>
                        <div x-id="hi-lite-bottom-left" class="highlight-corner bottom-left"></div>
                    </div>
                </div>
            </div>;
        }
    }
}

createStyleSheet(`
<style>

.highlighter {
    position: absolute;
    transform: translate(0, 0);
    width: 100px;
    height: 100px;
    border: 1px solid lightblue;
    top: 0;
    left:0;
}

.highlight-corner {
    position: absolute;
    background:lightblue;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 100;
}
        
.top-right {
    top: -5px;
    right: -5px;
}

.top-left{
    top: -5px;
    left: -5px;
}

.bottom-right {
    bottom: -5px;
    right: -5px;
}

.bottom-left {
    bottom: -5px;
    left: -5px;
}
        
.break-point-bounds {
    border: 1px dashed white;
    position: absolute;
    pointer-events: none;
    height: 500px;
    width: 200px;
    top: 0;
    left: 25%;
}

.scene-window-root {
    width: 100%;
    height: 100%;
    overflow:hidden;
    position: relative;
}

.scene-window-header {
    width: 100%;
    background: gray;
}

.scene-render-root {
    position: relative;
    width: 600px;
    height: 400px;
    border: 1px dashed white;
}

.scene-window-body {
    position: absolute;
    top:0; 
    left:0;
    width: 100%;
    height: 100%;
}

.scene-window-header .break-point-bar {
    display:flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
}

.break-point-bar > i {
    padding-right: 0.25em;
    cursor: pointer;
}
</style>`);