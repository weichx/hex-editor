const GetterCache = new Map<any, Function>();
const SetterCache = new Map<any, Function>();

export function getGetter(path : Array<string> | string) : (ctx : any) => any {
    const pathString = Array.isArray(path) ? path.join(".") : path as string;
    const retn = GetterCache.get(pathString);
    if (retn) return retn as (ctx : any) => any;
    const body = genCode(path);
    const fn = new Function("ctx", body) as (ctx : any) => any;
    GetterCache.set(pathString, fn);
    return fn;
}

export function getSetter(path : Array<string> | string) : (ctx : any) => any {
    const pathString = Array.isArray(path) ? path.join(".") : path as string;
    let retn = SetterCache.get(pathString);
    if (retn) return retn as (ctx : any) => any;
    const body = genCode(path, true);
    const fn = new Function("ctx", "val", body) as (ctx : any) => any;
    SetterCache.set(pathString, fn);
    return fn;
}

export function genSimpleGetter(fieldName : string) : string {
    return "return ctx." + fieldName;
}

export function genCode(groups : any, isSetter = false, varChar = 'a',) {
    let code = "";
    if (!Array.isArray(groups)) {
        if (isSetter) {
            return `ctx.${groups} = val;`;
        }
        else {
            return `return ctx.${groups}`;
        }
    }
    if (groups.length === 1 && varChar === 'a') {
        if (Array.isArray(groups[0])) {
            if (isSetter) {
                return `ctx.${groups[0][0]} = val;`;
            }
            else {
                return `return ctx.${groups[0][0]}`;
            }
        }
        else {
            if (isSetter) {
                return `ctx.${groups[0]} = val;`;
            }
            else {
                return `return ctx.${groups[0]}`;
            }
        }
    }
    let nextVarChar = String.fromCharCode(varChar.charCodeAt(0) + 1);
    code += `var ${varChar} = ctx.${groups[0]};\n`;
    code += `if (!${varChar}) return null\n\n`;
    for (let i = 1; i < groups.length; i++) {

        if (i === groups.length - 1 && varChar === 'a') {
            if (isSetter) {
                code += `${varChar}.${groups[groups.length - 1]} = val;\n`;
            }
            else {
                code += `return ${varChar}.${groups[groups.length - 1]};\n`;
            }
            break;
        }

        if (Array.isArray(groups[i])) {
            code += "\n" + genCode(groups[i], isSetter, nextVarChar) + "\n";
            code += `${varChar} = ${varChar}.${nextVarChar};\n`;
            code += `if (!${varChar}) return null;\n`;
        }
        else {
            code += `${varChar} = ${varChar}.${groups[i]};\n`;
            code += `if (!${varChar}) return null;\n`;
        }

    }
    return code;
}
