"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyLoader = void 0;
var Guards_1 = require("./Guards");
function lazyLoader(initializer) {
    var element;
    return function lazyGet() {
        if ((0, Guards_1.isNullOrUndefined)(element)) {
            element = initializer();
        }
        return element;
    };
}
exports.lazyLoader = lazyLoader;
