const FunctionCache = new Map<string, Function>();
const GetterCache = new Map<any, Function>();
const SetterCache = new Map<any, Function>();

export function createGetter(split : string[]) : (ctx : any) => any {
    const key = "get:" + split.join(".");
    let retn = FunctionCache.get(key);
    if (retn) return retn as (ctx : any) => any;
    const body = parse(split, false);
    const getterFn = new Function("ctx", body) as any;
    FunctionCache.set(key);
    return getterFn;
}

export function createSetter(split : string[]) : (ctx : any, val : any) => any {
    const key = "set:" + split.join(".");
    let retn = FunctionCache.get(key);
    if (retn) return retn as (ctx : any, val : any) => any;
    const body = parse(split, true);
    const setterFn = new Function("ctx", "val", body) as any;
    FunctionCache.set(key, setterFn);
    return setterFn;
}

export function getGetter(path : Array<any>) : (ctx : any) => any {
    let retn = GetterCache.get(path);
    if (retn) return retn as (ctx : any) => any;
    const body = genCode(path);
    const fn = new Function("ctx", body) as (ctx : any) => any;
    GetterCache.set(path, fn);
    return fn;
}

export function getSetter(path : Array<any>) : (ctx : any) => any {
    let retn = SetterCache.get(path);
    if (retn) return retn as (ctx : any) => any;
    const body = genCode(path, true);
    const fn = new Function("ctx", "val", body) as (ctx : any) => any;
    SetterCache.set(path, fn);
    return fn;
}

function parse(split : string[], isSetter : boolean) {
    if (split.length === 1) {
        return "return ctx." + split[0] + ";";
    }
    let str = `var $0 = ctx.${split[0]};if($0) {\n`;
    for (let i = 1; i < split.length; i++) {
        str += `var $${i} = $${i - 1}.${split[i]};\n`;

        if (i !== split.length - 1) {
            str += `if($${i}) {\n`;
        }
        else {
            if (isSetter) str += `$${i - 1}.${split[i]} = val;\n`;
            else str += `return $${i};\n`
        }
    }
    for (let i = 0; i < split.length - 1; i++) {
        str += "}\n";
    }
    return str;
}

export function genCode(groups : any, isSetter = false, varChar = 'a',) {
    let code = "";
    if (!Array.isArray(groups)) {
        if (isSetter) {
            return `this.ctx.${groups} = val;`;
        }
        else {
            return `return this.ctx.${groups}`;
        }
    }
    if (groups.length === 1 && varChar === 'a') {
        if (Array.isArray(groups[0])) {
            if (isSetter) {
                return `this.ctx.${groups[0][0]} = val;`;
            }
            else {
                return `return this.ctx.${groups[0][0]}`;
            }
        }
        else {
            if (isSetter) {
                return `this.ctx.${groups[0]} = val;`;
            }
            else {
                return `return this.ctx.${groups[0]}`;
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
