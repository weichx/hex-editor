"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
function standardPromiseHandler(resolve, reject) {
    return function (error, data) {
        if (error)
            return reject(error);
        return resolve(data);
    };
}
function wrap(fn, ...args) {
    return new Promise(function (resolve, reject) {
        fn(...args, standardPromiseHandler(resolve, reject));
    });
}
exports.System = {
    AssetRoot: process.cwd() + "\\test_project\\assets\\",
    createGUID: uuid.v4
};
global.System = exports.System;
function fixSlashes(filePath) {
    return filePath.replace(/\\/g, "/");
}
exports.FileSystem = {
    getRelativePath(targetPath, checkPath) {
        return path.relative(fixSlashes(targetPath), fixSlashes(checkPath));
    },
    createUniqueFilePath(filePath) {
        filePath = fixSlashes(filePath);
        //todo handle extensions
        if (!fs.existsSync(filePath))
            return filePath;
        let i = 1;
        while (true) {
            if (!fs.existsSync(filePath + " " + i)) {
                return filePath + " " + i;
            }
            i++;
        }
    },
    getFileName(filePath) {
        filePath = fixSlashes(filePath);
        return path.basename(filePath);
    },
    getFileNameWithExtension(filePath) {
        filePath = fixSlashes(filePath);
        return path.basename(filePath);
    },
    getExtension(filePath) {
        filePath = fixSlashes(filePath);
        return path.extname(filePath).substring(1);
    },
    normalizePath(filePath) {
        filePath = fixSlashes(filePath);
        return path.normalize(filePath);
    },
    resolvePath(filePath) {
        filePath = fixSlashes(filePath);
        return path.resolve(filePath);
    },
    createDirectory(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            return new Promise(function (resolve, reject) {
                mkdirp(filePath, function (err, made) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(filePath);
                });
            });
        });
    },
    createDirectoriesInPath(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            const split = filePath.split("/");
            split.pop();
            return this.createDirectory(split.join("/"));
        });
    },
    createFile(filePath, content) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            filePath = path.resolve(filePath);
            return wrap(fs.writeFile, filePath, content).then(function () {
                return filePath;
            });
        });
    },
    lstat(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            return wrap(fs.lstat, filePath);
        });
    },
    readFile(filePath, options = null) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            return new Promise(function (resolve, reject) {
                fs.readFile(filePath, options, standardPromiseHandler(resolve, reject));
            });
        });
    },
    readTextFile(filePath, options = null) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            return yield this.readFile(filePath, options).then(function (buffer) {
                return buffer.toString();
            });
        });
    },
    writeFile(filePath, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            filePath = fixSlashes(filePath);
            return wrap(fs.writeFile, filePath, data, options);
        });
    },
    getAllFileNames(glob) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
            // (globby as any)(Array.isArray(glob) ? glob : [glob]).then(function (result : string[]) {
            //     return result.map(function (filePath : string) {
            //         return fixSlashes(filePath);
            //     });
            // });
        });
    }
};
