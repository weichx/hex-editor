
const ifMatchRegex = /x-if={([^}]*)}/g; //matches x-if={ this.thing.thing } etc


module.exports = {
    pattern: ifMatchRegex,
    replacement: function (match, capture) {
        let retn = "x-if=";
        let invert = false;

        if(capture.indexOf('(') !== -1) { throw new Error("x-if cannot contain function calls " + match) }
        if(capture.indexOf('{') !== -1) { throw new Error("x-if cannot contain object definitions") }
        if(capture.indexOf('[') !== -1) { throw new Error("x-if cannot contain array or property accesses") }

        const captureTokens = capture.split('.').map(s => s.trim());
        const ctx = captureTokens.shift();
        const firstSymbol = captureTokens[0].charAt(0);
        if(firstSymbol === "!") {
            captureTokens[0] = captureTokens[0].shift();
            invert = true;
        }
        return retn + `{ { ctx:${ctx}, invert: ${invert}, path: "${captureTokens.join('.')}" } }`;
    }
};