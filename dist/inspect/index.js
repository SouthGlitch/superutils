"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspect = void 0;
var parserFunctions = {
    boolean: function (v) { return "(boolean)   " + String(v); },
    number: function (v) { return "(number)    " + String(v); },
    string: function (v) { return "(number)    " + v; },
    undefined: function (v) { return "(undefined) "; },
    symbol: function (v) { return "(symbol)    "; },
    function: function (v) { return "(function)  "; },
    object: function (v) { return inspect(v, "\t"); },
};
function inspect(item, prefix) {
    if (prefix === void 0) { prefix = ""; }
    var message = "\n";
    for (var key in item) {
        var key_value = item[key];
        message += "" + prefix + key + ": " + parserFunctions[typeof key_value](key_value) + "\n";
    }
    return message;
}
exports.inspect = inspect;
