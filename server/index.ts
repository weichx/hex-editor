import * as uuid from "uuid";
import * as fs from "fs";
import * as path from "path";
import * as mkdirp from "mkdirp";

type PromiseResolver<T> = (a : T|PromiseLike<T>) => void;
type PromiseRejecter = (reason? : any) => void;

function standardPromiseHandler(resolve : any, reject : any) {
    return function (error : any, data : any) {
        if (error)   return reject(error);
        return resolve(data);
    }
}

function wrap<T>(fn : any, ...args : any[]) {
    return new Promise(function (resolve : PromiseResolver<T>, reject : PromiseRejecter) {
        fn(...args, standardPromiseHandler(resolve, reject));
    });
}

export const System : ISystem = {
    AssetRoot: process.cwd() + "\\test_project\\assets\\",
    createGUID: uuid.v4 as () => string
};

(global as any).System = System;

function fixSlashes(filePath : string) : string {
    return filePath.replace(/\\/g, "/");
}

export const FileSystem : IFileSystem = {

    getRelativePath(targetPath : string, checkPath : string): string {
        return path.relative(fixSlashes(targetPath), fixSlashes(checkPath));
    },

    createUniqueFilePath(filePath : string): string {
        filePath = fixSlashes(filePath);
        //todo handle extensions
        if (!fs.existsSync(filePath)) return filePath;
        let i = 1;
        while (true) {
            if (!fs.existsSync(filePath + " " + i)) {
                return filePath + " " + i;
            }
            i++;
        }
    },

    getFileName(filePath : string): string {
        filePath = fixSlashes(filePath);
        return path.basename(filePath);
    },

    getFileNameWithExtension(filePath : string) : string {
        filePath = fixSlashes(filePath);
        return path.basename(filePath);
    },

    getExtension(filePath : string): string {
        filePath = fixSlashes(filePath);
        return path.extname(filePath).substring(1);
    },

    normalizePath(filePath : string): string {
        filePath = fixSlashes(filePath);
        return path.normalize(filePath);
    },

    resolvePath(filePath : string): string {
        filePath = fixSlashes(filePath);
        return path.resolve(filePath);
    },

    async createDirectory(filePath : string): Promise<string> {
        filePath = fixSlashes(filePath);
        return new Promise(function (resolve : PromiseResolver<string>, reject : PromiseRejecter) {
            mkdirp(filePath, function (err : any, made : string) {
                if (err) {
                    return reject(err);
                }
                resolve(filePath);
            });
        });
    },

    async createDirectoriesInPath(filePath : string): Promise<string> {
        filePath = fixSlashes(filePath);
        const split = filePath.split("/");
        split.pop();
        return this.createDirectory(split.join("/"));
    },

    async createFile(filePath : string, content : string|Buffer): Promise<string> {
        filePath = fixSlashes(filePath);
        filePath = path.resolve(filePath);
        return wrap<string>(fs.writeFile, filePath, content).then(function () {
            return filePath;
        });
    },

    async lstat(filePath : string): Promise<FileOptions.IFileStat> {
        filePath = fixSlashes(filePath);
        return wrap<FileOptions.IFileStat>(fs.lstat, filePath);
    },

    async readFile(filePath : string, options : FileOptions.ReadFileOptions = null): Promise<Buffer> {
        filePath = fixSlashes(filePath);
        return new Promise(function (resolve : PromiseResolver<Buffer>, reject : PromiseRejecter) {
            fs.readFile(filePath, options, standardPromiseHandler(resolve, reject));
        });
    },

    async readTextFile(filePath : string, options : FileOptions.ReadFileOptions = null): Promise<string> {
        filePath = fixSlashes(filePath);
        return await this.readFile(filePath, options).then(function (buffer : Buffer) {
            return buffer.toString();
        });
    },

    async writeFile(filePath : string, data : string|Buffer, options? : FileOptions.WriteFileOptions): Promise<void> {
        filePath = fixSlashes(filePath);
        return wrap<void>(fs.writeFile, filePath, data, options);
    },

    async getAllFileNames(glob : string|string[]): Promise<string[]> {
        return null;
        // (globby as any)(Array.isArray(glob) ? glob : [glob]).then(function (result : string[]) {
        //     return result.map(function (filePath : string) {
        //         return fixSlashes(filePath);
        //     });
        // });
    }

};
