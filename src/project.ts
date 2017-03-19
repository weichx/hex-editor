import {Asset} from "./runtime/asset";
import FileStat = FileOptions.IFileStat;
import {ISerializable} from "cerialize";
import {AssetCreated} from "./editor_events/evt_asset_created";

//asset is just a file pointer with an icon and extension and defines an inspector
//dragging an asset onto a field in the inspector just loads the asset
//an importer is just an operation applied to the data before writing it to disk
//there is only 1 kind of asset, no subclasses
//in terms of adding to assets (prefabs mostly, maybe animations)
//this can be done by the asset item itself and not via the project interface
//scripts need to be tracked as assets also for scene dependencies
//but they aren't (probably) loaded in the same way other assets are

//runtime asset bundle -> database of asset data with function for loading them unrelated to the file system

import * as fs from "fs";
import * as File from "mz/fs";
import * as Path from "path";
const globby = require("globby") as any;

interface AssetDatabaseEntry {
    inode : number;
    guid : string;
    filePath : string;
    data : any;
}

function walkSync(dir : string, fileList : string[] = [], fileStats : fs.Stats[] = []) {

    const files = File.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
        const fileName = Path.join(dir, files[i]);
        const stat = File.lstatSync(fileName);
        fileList.push(fileName);
        fileStats.push(stat);
        if (stat.isDirectory()) {
            walkSync(fileName, fileList, fileStats);
        }
    }

    return { fileList, fileStats };
}

export class Project {

    private name : string;
    private projectRoot : string;
    private assets : Asset[];
    private assetDatabase : Indexable<AssetDatabaseEntry>;
    private assetPath : string;
    private projectFilePath : string;

    constructor(name : string, projectRoot : string) {
        this.name = name;
        this.projectRoot = projectRoot;
        this.assetDatabase = {};

        const pathToProject = Path.resolve(projectRoot);

        if (Path.basename(pathToProject) !== "project.hex") {
            throw new Error("Projects must be created from a project.hex file, " + projectRoot + " does not point to a project.hex file");
        }

        if (!File.existsSync(pathToProject)) {
            throw new Error("Cannot find file at " + pathToProject);
        }

        this.projectRoot = Path.dirname(pathToProject);
        this.assetPath = Path.join(this.projectRoot, "assets");
        this.projectFilePath = Path.join(this.projectRoot, "project.hex");

    }

    public getAssetRoot() : string {
        return this.assetPath;
    }

    public pathToGuid(path : string) : string {
        return null;
    }

    public guidToPath(guid : string) : string {
        const assetEntry = this.assetDatabase[guid];
        if (!assetEntry) return null;
        return assetEntry.filePath;
    }

    public getAssetByGUID(guid : string) : Asset {
        return null;
    }

    public getAssetAtPath(path : string, type : any) : Asset {
        return null;
    }

    public createDirectory(pathToFolder : string) : string {
        // FileSystem.createDirectory(pathToFolder);
        return "Folder Name";
    }

    public async createAsset(pathToAsset : string, data : ISerializable) : Promise<Asset> {
        if (!this.isPathInProject(pathToAsset)) throw new Error("Path " + pathToAsset + " must be inside project root");
        const path = Path.resolve(pathToAsset);

        //const asset = Asset.create(path, data);
        return null;
    }

    public isPathInProject(path : string) : boolean {
        return Path.resolve(path).indexOf(this.projectRoot) === 0;
    }

    //dest path is relative to asset root if it is not an absolute path
    public async importAsset(pathToAsset : string, destinationPath? : string) : Promise<Asset> {
        pathToAsset = FileSystem.resolvePath(pathToAsset);
        let dest = FileSystem.resolvePath(destinationPath || System.AssetRoot + FileSystem.getFileName(pathToAsset));
        dest = FileSystem.getRelativePath(System.AssetRoot, dest);
        dest = FileSystem.createUniqueFilePath(dest);
        console.log(System.AssetRoot + dest);
        await FileSystem.createDirectoriesInPath(System.AssetRoot + dest);

        const content = await FileSystem.readFile(pathToAsset);
        if (!content) {
            return Promise.resolve(null);
        }
        const asset = await Asset.create(dest, content);
        EditorRuntime.emit(AssetCreated, asset);
        return Promise.resolve(asset);
    }

    public async importAll(paths : string[], relativeDestRoot : string = null) {
        if (!relativeDestRoot) relativeDestRoot = this.assetPath;
        for (let i = 0; i < paths.length; i++) {
            this.importAsset(paths[i], relativeDestRoot);
        }
    }

    public async refresh() : Promise<this> {
        return Promise.resolve(this);
    }

    public async load() : Promise<this> {

        //find files for all assets
        //if cant find by path, check by inode
        //if still can't find it, mark it as missing
        const fileList : string[] = [];
        const fileStats : fs.Stats[] = [];

        walkSync(this.assetPath, fileList, fileStats);

        const projectData = this.loadProjectFile();
        const assetDatabase : Indexable<AssetDatabaseEntry> = projectData.assetDatabase || {};
        const assetGUIDS = Object.keys(assetDatabase);
        const missingAssets = new Array<AssetDatabaseEntry>();
        const assetsByFileName : Indexable<AssetDatabaseEntry> = {};

        for (let i = 0; i < assetGUIDS.length; i++) {
            const guid = assetGUIDS[i];
            const assetData = assetDatabase[guid];
            assetData.guid = guid;
            let resolvedPath = Path.join(this.projectRoot, assetData.filePath);

            const fileIndex = fileList.indexOf(resolvedPath);
            const statIndex = fileStats.findIndex(function (value : fs.Stats) {
                return value.ino === assetData.inode;
            });

            if (fileIndex === -1) {
                if (statIndex === void 0) {
                    missingAssets.push(assetData);
                    continue;
                }
                else {
                    assetData.filePath = Path.relative(this.projectRoot, fileList[statIndex]);
                }
            }

            //we have the file but the inode is wrong
            if (statIndex === void 0) {
                const stat = File.lstatSync(resolvedPath);
                assetData.inode = stat.ino;
            }

            assetDatabase[guid] = assetData;
            assetsByFileName[assetData.filePath] = assetData;
        }

        for (let i = 0; i < fileList.length; i++) {
            const fileName = Path.relative(this.projectRoot, fileList[i]);
            const match = assetsByFileName[fileName];
            if (!match) {
                //todo -- import this new file
                const guid = System.createGUID();
                assetDatabase[guid] = {
                    filePath: fileName,
                    inode: fs.lstatSync(fileList[i]).ino,
                    guid: guid,
                    data: {}
                };
            }
        }
        //todo -- what happens with missing assets?
        this.assetDatabase = assetDatabase;

        return Promise.resolve(this);
    }

    public async save() : Promise<void> {

        const output : any = {
            name: this.name,
            assetDatabase: {}
        };

        const assetGUIDS = Object.keys(this.assetDatabase);
        for (let i = 0; i < assetGUIDS.length; i++) {
            const guid = assetGUIDS[i];
            const assetEntry = this.assetDatabase[guid];
            output.assetDatabase[guid] = {
                filePath: assetEntry.filePath,
                inode: assetEntry.inode,
                data: assetEntry.data
            }
        }

        return File.writeFile(this.projectFilePath, JSON.stringify(output));
    }

    public getAssetCount() : number {
        return Object.keys(this.assetDatabase).length;
    }

    private loadProjectFile() : any {
        return JSON.parse(File.readFileSync(this.projectFilePath).toString());
    }

}