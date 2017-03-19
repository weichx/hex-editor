
declare namespace FileOptions {

    export interface IFileStat {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    export type EncodingOption = 'ascii'|'base64'|'binary'|'hex'|'ucs2'|'utf16le'|'utf8';
    export type FileModeFlags = 'r'|'r+'|'rs'|'rs+'|'w'|'wx'|'w+'|'wx+'|'a'|'ax'|'a+'|'ax+';

    export type ReadFileOptions = {
        encoding? : EncodingOption,
        flag? : FileModeFlags
    } | EncodingOption | FileModeFlags

    export type WriteFileOptions = {
        encoding? : EncodingOption,
        flag? : FileModeFlags
        mode? : number|string
    } | EncodingOption | FileModeFlags

}

interface IFileSystem {
    getRelativePath(target : string, compare : string) : string;
    createUniqueFilePath(path :string) : string;
    getFileName(path : string) : string;
    getFileNameWithExtension(path : string) : string;
    getExtension(path : string) : string;
    // existsSync(path : string) : string;
    normalizePath(path : string) : string;
    createDirectory(path : string) : Promise<string>;
    createDirectoriesInPath(path : string) : Promise<string>;
    createFile(path : string, content : string|Buffer) : Promise<string>;
    resolvePath(path : string) : string;
    readFile(path : string, options? : FileOptions.ReadFileOptions) : Promise<Buffer>
    readTextFile(path : string, options? : FileOptions.ReadFileOptions) : Promise<string>;
    writeFile(path : string, data : Buffer) : Promise<void>;
    lstat(path : string) : Promise<FileOptions.IFileStat>;
    getAllFileNames(start : string, filter? : string) : Promise<string[]>;
}