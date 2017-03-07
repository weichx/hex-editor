//
// let count = 0;
// let map : any = {};
// let str = `(function(modules) {
//  	// The module cache
//  	var installedModules = {};
//
//  	// The require function
//  	function require(moduleId) {
//
//  		// Check if module is in cache
//  		if(installedModules[moduleId])
//  			return installedModules[moduleId].exports;
//
//  		// Create a new module (and put it into the cache)
//  		var module = installedModules[moduleId] = {
//  			exports: {},
//  			id: moduleId,
//  			loaded: false
//  		};
//
//  		// Execute the module function
//  		modules[moduleId].call(module.exports, module, module.exports, require);
//
//  		// Flag the module as loaded
//  		module.loaded = true;
//
//  		// Return the exports of the module
//  		return module.exports;
//  	}
//
// 	return require(0);
// })
// ([`;
//
// export function write(fileList : string[], emitter : ts.LanguageServiceHost) : void {
// for(let i = 0; i < fileList.length; i++) {
//     const output = services.getEmitOutput(serviceHost.fileList[i]);
//     const files = output.outputFiles;
//     for(let j = 0; j < files.length; j++) {
//         if(!map[files[j].name]) {
//             count++;
//             map[files[j].name] = true;
//             str += wrap(files[j].text);
//         }
//     }
// }
//
// function wrap(code : string) : string {
//     return `function(module, exports, require) {
//     ${code}
//     },`
// }
//
// str += "]";
//
// fs.writeFileSync(path.join(__dirname, "./build/bundle.js"), str, {encoding: "UTF-8"});