module.exports = {
    pattern: /x-if-eval={([^}]*)}[\s|>]/g,
    replacement: function (match, capture) {
        return "x-if-eval={ () => " + capture + "}";
    }
};