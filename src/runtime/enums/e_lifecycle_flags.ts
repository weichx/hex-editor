export enum LifeCycleFlag {
    Invalid = 1 << 0,
    Created = 1 << 1,
    Enabled = 1 << 2,
    Disabled = 1 << 3,
    Rendered = 1 << 4,
    Mounted = 1 << 5,
    Destroyed = 1 << 6,
    Structured = 1 << 7
}