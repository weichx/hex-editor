
namespace HexEditorInternal {

    import AppElement = Hex.AppElement;
    import Scene = Hex.Scene;
    import SceneLoaded = EditorEvent.SceneLoaded;
    import SelectionChanged = EditorEvent.SelectionChanged;
    import BreakpointChanged = EditorEvent.BreakpointChanged;
    import AppElementCreated = EditorEvent.AppElementCreated;
    import Input = Hex.Input;
    import Component = Hex.Component;
    import EditorElement = HexEditor.EditorElement;
    import WindowResized = EditorEvent.WindowResized;

    export class EditorRuntimeImplementation extends HexRuntimeInternal.Runtime {

        private selectedElement : AppElement;
        private updateCycles : Array<UpdateCycle>;
        private boundUpdate : (delta : number) => void;

        constructor(host : EditorRuntimeHost) {
            super(host);
            this.selectedElement = null;
            this.updateCycles = [];
            this.boundUpdate = (delta : number) => {
                this.update(delta);
            };
        }

        public loadScene(sceneDescription : any) : void {
            if (!this.scene) this.scene = new Scene();
            this.scene.load(sceneDescription);
            this.emit(SceneLoaded, this.scene);
        }

        public select(newSelection : AppElement) : void {
            const oldSelection = this.selectedElement;
            this.selectedElement = newSelection;
            this.emit(SelectionChanged, newSelection, oldSelection);
        }

        public start(appRoot : TypeOf<EditorElement>) : void {
            EditorRuntime.loadScene(require('./_data/test_scene1'));
            render(createElement(appRoot), document.getElementById('root'));
            requestAnimationFrame(this.boundUpdate);

            window.addEventListener("resize", function () {
                EditorRuntime.emit(WindowResized, window.innerWidth, window.innerHeight);
            });
        }

        public getSelection() : AppElement {
            return this.selectedElement;
        }

        // public setActiveBreakpoint(name : string) : void {
        //     activeBreakpoint = Breakpoint.get(name);
        //     this.emit(BreakpointChanged, activeBreakpoint);
        // }
        //
        // public getActiveBreakpoint() : Breakpoint {
        //     return activeBreakpoint;
        // }

        public update(timeStamp : number) {
            for (let i = 0; i < this.updateCycles.length; i++) {
                this.updateCycles[i].update(timeStamp);
            }
            this.input.update();
            this.flushRenderThreadCommands();
        }

        public addUpdater(updater : Updater, interval : number = -1) {
            this.getUpdateCycleForInterval(interval).addUpdater(updater);
        }

        private getUpdateCycleForInterval(interval : number) : UpdateCycle {
            if (interval < 0) interval = 0;
            for (let i = 0; i < this.updateCycles.length; i++) {
                if (this.updateCycles[i].interval === interval) {
                    return this.updateCycles[i];
                }
            }
            const updateCycle = new UpdateCycle(interval);
            this.updateCycles.push(updateCycle);
            return updateCycle;
        }

        public removeUpdater(updater : Updater) {
            for (let i = 0; i < this.updateCycles.length; i++) {
                const length = this.updateCycles[i].removeUpdater(updater);
                if (length === 0) {
                    this.updateCycles.splice(i, 1);
                    return;
                }
            }
        }

        public addElement(appElement : AppElement) : void {
            //todo destroy this when element is nuked
            this.appElementRegistry[appElement.id.toString()] = appElement;
            this.emit(AppElementCreated, appElement);
            (<any>appElement).render();
        }

        public addComponent(component : Component) : void {
            const appElement = component.appElement;
            // super.addComponent(component);
            if (this.getSelection() === appElement) {
                this.emit(SelectionChanged, appElement);
            }
        }

        public drawScene(targetId : string) : void {
            this.host.drawScene(targetId);
            const root = document.getElementById("scene-render-root");
            const bounds = root.getBoundingClientRect();
            AppElement.Root.setRect(new Rectangle(0, 0, bounds.width, bounds.height));
            const roots = this.scene.getRootElements();
            for (let i = 0; i < roots.length; i++) {
                const rootElement = roots[i] as any;
                rootElement.render();
            }
        }

        public getInput() : Input {
            return this.input;
        }

        public getEditorElementAtPoint(point : Vector2) : EditorElement {
            const dom = document.elementFromPoint(point.x, point.y) as any;
            return dom.__editorElement;
        }
    }


    export interface Updater {
        onUpdated : () => void;
    }

    export class UpdateCycle {

        private updaters : Array<Updater>;
        private lastUpdate : number;
        public readonly interval : number;

        constructor(interval : number) {
            this.interval = interval;
            this.lastUpdate = 0;
            this.updaters = [];
        }

        update(timeStamp : number) {
            if(timeStamp - this.lastUpdate > this.interval) {
                this.lastUpdate = timeStamp;
                for(let i = 0; i < this.updaters.length; i++) {
                    this.updaters[i].onUpdated();
                }
            }
        }

        addUpdater(updater : Updater) : boolean {
            const idx = this.updaters.indexOf(updater);
            if(idx === -1) {
                this.updaters.push(updater);
                return true;
            }
            return false;
        }

        removeUpdater(updater : Updater) : number {
            const idx = this.updaters.indexOf(updater);
            if(idx !== -1) {
                this.updaters.splice(idx, 1);
            }
            return this.updaters.length;
        }

    }


}