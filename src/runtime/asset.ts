
export interface IAssetImporter {
    import(path : string, data : any) : Promise<Asset>;
}

export class Asset {

    public readonly guid : string;
    private pathSegments : string[];
    private children : Asset[];
    public parent : Asset;

    constructor(path : string) {
        this.parent = null;
        this.children = [];
        this.guid = System.createGUID();
        this.pathSegments = FileSystem.getRelativePath(System.AssetRoot, path).split("/");
    }

    public addChild(childAsset : Asset) : void {
        if (childAsset.parent === this) return;
        if (childAsset.parent) {
            childAsset.parent.removeChild(childAsset);
        }
        this.children.push(childAsset);
        const path = this.pathSegments.slice(0);
        path.push(childAsset.getName());
        childAsset.pathSegments = path;
    }

    public removeChild(childAsset : Asset) : void {
        this.children.remove(childAsset);
    }

    public move(path : string) : void {
        const name = this.getName();
        this.pathSegments = path.split("/");
        this.pathSegments.push(name);
    }

    public setName(name : string) : string {
        name = name.replace(/\n/g, "");
        this.pathSegments[this.pathSegments.length - 1] = name;
        return name;
    }

    public getName() : string {
        return FileSystem.getFileName(this.pathSegments[this.pathSegments.length - 1]);
    }

    public getExtension() : string {
        return FileSystem.getExtension(this.getName());
    }

    public getPath() : string {
        return this.pathSegments.join("/");
    }

    public getPathSegments() : string[] {
        return this.pathSegments.slice(0);
    }

    public getFullPath() : string {
        return System.AssetRoot + this.getPath();
    }

    public getDepth() : number {
        return this.pathSegments.length - 1;
    }

    public getWritableData() : string|Buffer {
        return null;
    }

    public static async create(path : string, data : Object) : Promise<Asset> {
        return await Asset.getImporter(FileSystem.getExtension(path)).import(path, data);
    }

    private static importers : Indexable<IAssetImporter> = {};

    private static defaultImporter : IAssetImporter = {

        async import(path : string, data : any) : Promise<Asset> {
            const asset = new Asset(path);
            return  FileSystem.writeFile(asset.getPath(), data).then(function() {
                return asset;
            });
        }

    };

    private static getImporter(extension : string) : IAssetImporter {
        return Asset.importers[extension] || Asset.defaultImporter;
    }

}