"use strict";
exports.__esModule = true;
var hex_compiler_1 = require("./hex_compiler");
var register_class_1 = require("./visitors/register_class");
var import_visitor_1 = require("./visitors/import_visitor");
var globby = require("globby").sync;
var codeFiles = globby(["./test_file.ts"]);
var compiler = new hex_compiler_1.HexCompiler(codeFiles);
compiler.addVisitors(new register_class_1.RegisterClass(), new import_visitor_1.ImportVisitor());
compiler.compile();
// const codeFiles = globby.sync([
//     "../src/global.ts",
//     "../src/_main.ts",
//     "!../src/app.tsx",
//     "../src/**/*.ts",
//     "../src/**/*.tsx",
//     "../src/app.tsx"
// ]); 
