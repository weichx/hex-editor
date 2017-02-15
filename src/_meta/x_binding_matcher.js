const parse = require('./binding_parser').parse;
const recurseToString = require('./binding_parser').recurseToString;
const bindingMatchRegex = /([\s|>]+\({[^}]*}\))/g;

module.exports = {
    pattern: bindingMatchRegex,
    replacement: function (match, capture) {
        let retn = "";
        if(capture[0] === ">") {
            capture = capture.substring(1);
            retn += ">";
        }
        capture = capture.substring(2, capture.length - 2);
        const captureTokens = parse(capture);
        const path = recurseToString(captureTokens.path, captureTokens.refs);
        return retn + `{ new Hex.Binding(${captureTokens.ctx}, ${path}) }`;
    }
};