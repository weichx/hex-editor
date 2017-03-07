import {HexCompiler} from "./hex_compiler";
import {RegisterClass} from "./visitors/register_class";
import {ImportVisitor} from "./visitors/import_visitor";
const globby = require("globby").sync as (s : string[]) => string[];

const codeFiles = globby(["./test_file.ts"]);

const compiler = new HexCompiler(codeFiles);
compiler.addVisitors(
    new RegisterClass(),
    new ImportVisitor()
);

compiler.compile();

// const codeFiles = globby.sync([
//     "../src/global.ts",
//     "../src/_main.ts",
//     "!../src/app.tsx",
//     "../src/**/*.ts",
//     "../src/**/*.tsx",
//     "../src/app.tsx"
// ]);