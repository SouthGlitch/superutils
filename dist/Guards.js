"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isSymbol = exports.isNullOrUndefined = exports.isUndefined = exports.isNull = void 0;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isUndefined(arg) {
    return arg === undefined;
}
exports.isUndefined = isUndefined;
function isNullOrUndefined(arg) {
    return isNull(arg) || isUndefined(arg);
}
exports.isNullOrUndefined = isNullOrUndefined;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isObject(arg) {
    return arg instanceof Object;
}
exports.isObject = isObject;
