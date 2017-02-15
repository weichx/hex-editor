namespace EditorEvent {

    import AppElement = Hex.AppElement;

    export class SelectionChanged {

        public onSelectionChanged : (newSelection? : AppElement, previousSelection? : AppElement) => void;

    }
}


