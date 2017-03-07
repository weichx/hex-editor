"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var source_map_1 = require("source-map");
var MagicString = require("magic-string");
var MappedAction = (function () {
    function MappedAction() {
    }
    return MappedAction;
}());
exports.MappedAction = MappedAction;
var FastAction = (function () {
    function FastAction() {
    }
    return FastAction;
}());
exports.FastAction = FastAction;
var ReplaceAction = (function (_super) {
    __extends(ReplaceAction, _super);
    function ReplaceAction(start, end, str) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.end = end;
        _this.str = str;
        return _this;
    }
    ReplaceAction.prototype.execute = function (ast, magicString) {
        if (this.start === this.end) {
            magicString.appendLeft(this.start, this.str);
        }
        else {
            magicString.overwrite(this.start, this.end, this.str);
        }
        var textSpan = ts.createTextSpanFromBounds(this.start, this.end);
        var textChangeRange = ts.createTextChangeRange(textSpan, this.str.length);
        return ast.update(magicString.toString(), textChangeRange);
    };
    ReplaceAction.prototype.getStart = function () {
        return this.start;
    };
    return ReplaceAction;
}(MappedAction));
exports.ReplaceAction = ReplaceAction;
var InsertAction = (function (_super) {
    __extends(InsertAction, _super);
    function InsertAction(start, str) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.str = str;
        return _this;
    }
    InsertAction.prototype.execute = function (ast, magicString) {
        magicString.appendLeft(this.start, this.str);
        var textSpan = ts.createTextSpanFromBounds(this.start, this.start);
        var textChangeRange = ts.createTextChangeRange(textSpan, this.str.length);
        return ast.update(magicString.toString(), textChangeRange);
    };
    InsertAction.prototype.getStart = function () {
        return this.start;
    };
    return InsertAction;
}(MappedAction));
exports.InsertAction = InsertAction;
var FastAppendAction = (function (_super) {
    __extends(FastAppendAction, _super);
    function FastAppendAction(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        return _this;
    }
    FastAppendAction.prototype.execute = function (ast) {
        var start = ast.text.length - 1;
        var textSpan = ts.createTextSpanFromBounds(start, start);
        var textChangeRange = ts.createTextChangeRange(textSpan, this.str.length);
        return ast.update(ast.text + this.str, textChangeRange);
    };
    return FastAppendAction;
}(FastAction));
exports.FastAppendAction = FastAppendAction;
var FastRewriteAction = (function (_super) {
    __extends(FastRewriteAction, _super);
    function FastRewriteAction(start, str) {
        var _this = _super.call(this) || this;
        _this.start = start;
        _this.str = str;
        return _this;
    }
    FastRewriteAction.prototype.execute = function (ast) {
        var textSpan = ts.createTextSpanFromBounds(this.start, this.start + this.str.length);
        var textChangeRange = ts.createTextChangeRange(textSpan, this.str.length);
        var newText = ast.text.slice(0, this.start) + this.str + ast.text.slice(this.start + this.str.length);
        return ast.update(newText, textChangeRange);
    };
    return FastRewriteAction;
}(FastAction));
exports.FastRewriteAction = FastRewriteAction;
var compareActions = function (action1, action2) { return (action2.getStart() - action1.getStart()); };
var MutableSourceCode = (function () {
    function MutableSourceCode(ast) {
        this._ast = ast;
        this.originalText = ast.text;
    }
    MutableSourceCode.prototype.getAst = function () {
        return this._ast;
    };
    MutableSourceCode.prototype.execute = function (actionList) {
        var _this = this;
        var fastActions = actionList.filter(function (action) { return action instanceof FastAction; });
        fastActions.forEach(function (action) {
            _this._ast = action.execute(_this._ast);
        });
        this.magicString = new MagicString(this._ast.text);
        var sortedActions = actionList
            .filter(function (action) { return action instanceof MappedAction; })
            .sort(compareActions);
        sortedActions.forEach(function (action) {
            _this._ast = action.execute(_this._ast, _this.magicString);
        });
    };
    MutableSourceCode.prototype.getSourceMap = function () {
        if (!this.magicString) {
            this.magicString = new MagicString(this._ast.text);
        }
        if (!this._sourceMap) {
            this._sourceMap = this.magicString.generateMap({ source: this._ast.fileName, hires: true });
        }
        return this._sourceMap;
    };
    MutableSourceCode.prototype.getCode = function () {
        return this._ast.text;
    };
    MutableSourceCode.prototype.translateMap = function (from) {
        var originalText = this.originalText;
        var intermediateAst = this._ast;
        var mapConsumer = new source_map_1.SourceMapConsumer(this.getSourceMap());
        var fromSMC = new source_map_1.SourceMapConsumer(from);
        var resultMap = new source_map_1.SourceMapGenerator();
        resultMap.setSourceContent(intermediateAst.fileName, originalText);
        fromSMC.eachMapping(function (mapping) {
            var originalPosition = mapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (originalPosition.line != null) {
                resultMap.addMapping({
                    source: intermediateAst.fileName,
                    name: mapping.name,
                    generated: {
                        line: mapping.generatedLine,
                        column: mapping.generatedColumn
                    },
                    original: originalPosition
                });
            }
        });
        this._sourceMap = resultMap.toJSON();
        return resultMap.toJSON();
    };
    MutableSourceCode.prototype.translateDiagnostic = function (diag) {
        var sourceMap = this.getSourceMap();
        var cosumer = new source_map_1.SourceMapConsumer(sourceMap);
        var start = diag.file.getLineAndCharacterOfPosition(diag.start);
        var startPos = cosumer.originalPositionFor({
            line: start.line + 1,
            column: start.character
        });
        if (startPos.line === null) {
            return diag;
        }
        else {
            return {
                file: diag.file,
                start: diag.file.getPositionOfLineAndCharacter(startPos.line - 1, startPos.column),
                length: diag.length,
                messageText: diag.messageText,
                category: diag.category,
                code: diag.code
            };
        }
    };
    return MutableSourceCode;
}());
exports.MutableSourceCode = MutableSourceCode;
