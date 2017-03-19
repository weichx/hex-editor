import {Project} from "../../src/project";
import * as fsp from "fs-promise";
import * as path from "path";

describe("Project Tests", function() {

    it("should create a project with a proper hex reference", function() {
        expect(new Project("Spec Project", path.join("test_project1", "project.hex"))).toBeTruthy();
    });

    it("should not create a project with a bad hex file", function() {

        expect(function() {
            new Project("Spec Project", "pzae.hex");
        }).toThrow();

    });

    it("should not create a project without an existing project.hex file", function() {
        expect(function() {
            new Project("Spec Project", path.join("test_project_not_here", "project.hex"));
        }).toThrow();
    });

    it("should load existing files in the project", function(done : any) {
        const project = new Project("Spec Project", path.join("test_project1", "project.hex")) as any;
        const filePath = path.join("assets", "test_file1.png");
        project.load().then(function() {
            expect(project.getAssetCount()).toBe(1);
            expect(project.assetDatabase["SOME_GUID"]).toEqual({
                guid: "SOME_GUID",
                filePath: filePath,
                inode: fsp.lstatSync(path.resolve(path.join("test_project1", filePath))).ino,
                data: {}
            });
            done();
        });
    });

    it("should realize a file was renamed", function (done : any) {
        const basePath = path.resolve(path.join("test_project1", "assets"));
        const originalName = path.join(basePath, "test_file1.png");
        const changedName = path.join(basePath, "test_file_changed.png");
        fsp.renameSync(originalName, changedName);
        const project = new Project("Spec Project", path.join("test_project1", "project.hex")) as any;
        project.load().then(() => {
            expect(project.getAssetCount()).toBe(1);
            expect(project.assetDatabase["SOME_GUID"]).toBeTruthy();
            fsp.renameSync(changedName, originalName);
            done();
        }).catch(() => {
            fsp.renameSync(changedName, originalName);
        });

    });

    it("should handle new files", function(done : any) : any {
        let project : Project = null;
        const filePath = path.resolve(path.join("test_project1", "assets", "somefile.txt"));
        fsp.writeFile(filePath, "some text").then(() => {
            project = new Project("Spec Project", path.join("test_project1", "project.hex")) as any;
            return project.load();
        }).then(() => {
            expect(project.getAssetCount()).toBe(2);
            fsp.remove(filePath);
            done();
        }).catch((e : any) => {
            fsp.remove(filePath);
        });

    });

});