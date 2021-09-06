"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("inspect unit testing", function () {
    var obj = {
        foo: "bar",
        baz: true,
        laz: 2,
        mix: undefined,
        tes: Symbol("test"),
        cos: function () { },
    };
    test("plain object", function () {
        var msg = (0, index_1.inspect)(obj);
        console.log(msg);
        expect(msg).not.toBeUndefined();
    });
    test("nested object", function () {
        var msg = (0, index_1.inspect)(__assign(__assign({}, obj), { obj: obj }));
        console.log(msg);
        expect(msg).not.toBeUndefined();
    });
});
