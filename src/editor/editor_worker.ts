//polyfill for webworker while in editor mode

interface IFakeMessageEvent {
    data: any;
    origin: string;
}
export class EditorWorker {

    public onmessage : (e : IFakeMessageEvent) => void;

    public onerror: (this: this, ev: ErrorEvent) => any;

    public postMessage(message : any, ports? : any) : void {
        if(!self.onmessage) return;
        setTimeout(function() {
            //sending to fake worker context instance
            (self as any).onmessage({origin: "", data:message});
        }, 0);
    }

    public terminate() : void {}

    addEventListener(type : "error", listener : (this : this, ev : ErrorEvent) => any, useCapture? : boolean) : void;
    addEventListener(type : "message", listener : (this : this, ev : MessageEvent) => any, useCapture? : boolean) : void;
    addEventListener(type : string, listener : EventListenerOrEventListenerObject, useCapture? : boolean) : void {

    };

    dispatchEvent(evt : Event) : boolean { return true; };

    removeEventListener(type : string, listener? : EventListenerOrEventListenerObject, useCapture? : boolean) : void {

    };

}

export class EditorWorkerContext {

    public postMessage(message : string) : void {
        (BrowserRuntime as any).worker.onmessage({
            data:message
        });
    }

    public onmessage : (message : IFakeMessageEvent) => void;

}