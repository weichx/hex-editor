const bindingMatchRegex = /binding={[\s]*([^}]*)}/g;
const parse = require('./binding_parser').parse;
const recurseToString = require('./binding_parser').recurseToString;

module.exports = {
    pattern: bindingMatchRegex,
    replacement: function (match, capture) {
        const captureTokens = parse(capture);
        return `binding={{
            ctx: ${captureTokens.ctx}, 
            path: ${recurseToString(captureTokens.path, captureTokens.refs)}
        }}`;
    }
};

