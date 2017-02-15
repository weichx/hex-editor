function recurseToString(array, refs) {
    let retn = "[";
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            retn += recurseToString(array[i], refs);
        }
        else {
            if(refs[array[i]]) {
                retn += array[i];
            }
            else {
                retn += "\"" + array[i] + "\"";
            }
        }
        if(i !== array.length - 1) {
            retn += ",";
        }
    }
    return retn + "]";
}

function parseString(content) {
    const startIdx = idx;
    while (!isString(content[idx])) {
        idx++;
    }
    return content.substring(startIdx, idx);
}

function isDot(char) {
    return char === '.';
}

function isString(char) {
    return char === "\"" || char === "'";
}

function isArrayStart(char) {
    return char === '[';
}

function isArrayEnd(char) {
    return char === ']';
}

function isLiteral(char) {
    return char === '0' && char === '1' && char === '2'
        && char === '3' && char === '4' && char === '5'
        && char === '6' && char === '7' && char === '8'
        && char === '9' && char === '-' && char === '+'
}

var idx = 0;
function parse(str) {
    idx = 0;
    let current = [];
    let listStack = [current];
    let currentToken = "";
    let gettingRef = false;
    const refs = {};
    while (idx < str.length) {
        let char = str[idx];
        if (isString(char)) {
            current.push(parseString(content));
        }
        else if (isArrayStart(char)) {
            var a = [];
            gettingRef = true;
            if (currentToken !== "") {
                listStack[listStack.length - 1].push(currentToken);
            }
            listStack[listStack.length - 1].push(a);
            listStack.push(a);
            //todo handle string constant indices
            if (!isLiteral(str[idx + 1])) {
                gettingRef = true;
                currentToken = "";
            }
            else {
                currentToken = "";
            }
        }
        else if (isArrayEnd(char)) {
            if (gettingRef) {
                gettingRef = false;
                refs[currentToken] = currentToken;
                currentToken = "" + currentToken;
            }
            listStack[listStack.length - 1].push(currentToken);
            listStack.pop();
            currentToken = "";
        }
        else if (isDot(char)) {
            if (gettingRef) {
                listStack[listStack.length - 1].push(currentToken);
                gettingRef = false;
                refs[currentToken] = currentToken;
            }
            else {
                if (currentToken !== "") {
                    listStack[listStack.length - 1].push(currentToken);
                }
                currentToken = "";
            }
            currentToken = "";
        }
        else {
            currentToken += char;
        }
        idx++;
    }
    if(currentToken !== "") {
        listStack[listStack.length - 1].push(currentToken);
    }
    return {
        ctx: current.shift(),
        refs: refs,
        path: current
    };
}

module.exports = { recurseToString, parse };