
interface Window {
    EditorRuntime : HexEditorInternal.EditorRuntimeImplementation;
}

declare let EditorRuntime : HexEditorInternal.EditorRuntimeImplementation;
window.EditorRuntime = new HexEditorInternal.EditorRuntimeImplementation(null);
