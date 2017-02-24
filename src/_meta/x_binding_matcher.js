const parse = require('./binding_parser').parse;
const recurseToString = require('./binding_parser').recurseToString;
// const bindingMatchRegex = /\+([\s]*\({[^}]*}\))\+/g;
const bindingMatchRegex = /Bind(\(.*)/g;
module.exports = {
    pattern: bindingMatchRegex,
    replacement: function (match, capture) {
        var block = capture;
        var currPos = 0;
        var openParens = 0;
        var stillSearching = true;
        var waitForChar = false;

        while (stillSearching && currPos <= block.length) {
            var currChar = block.charAt(currPos);

            if (!waitForChar) {
                switch (currChar) {
                    case '(':
                        openParens++;
                        break;
                    case ')':
                        openParens--;
                        break;
                    case '"':
                    case "'":
                        waitForChar = currChar;
                        break;
                    case '/':
                        var nextChar = block.charAt(currPos + 1);
                        if (nextChar === '/') {
                            waitForChar = '\n';
                        } else if (nextChar === '*') {
                            waitForChar = '*/';
                        }
                }
            } else {
                if (currChar === waitForChar) {
                    if (waitForChar === '"' || waitForChar === "'") {
                        block.charAt(currPos - 1) !== '\\' && (waitForChar = false);
                    } else {
                        waitForChar = false;
                    }
                } else if (currChar === '*') {
                    block.charAt(currPos + 1) === '/' && (waitForChar = false);
                }
            }

            currPos++;
            if (openParens === 0) {
                stillSearching = false;
            }
        }

        const targetText = block.substring(1, currPos - 1);
        const rest = block.substring(currPos);
        const captureTokens = parse(targetText);
        const path = recurseToString(captureTokens.path, captureTokens.refs);
        return `new window.EditorBindingElement(${captureTokens.ctx}, ${path})` + rest;
    }
};