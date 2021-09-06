"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateError = exports.PublicError = void 0;
var inspect_1 = require("../inspect");
var SuperError = (function (_super) {
    __extends(SuperError, _super);
    function SuperError(references, logger) {
        var _this = _super.call(this) || this;
        _this.references = references;
        _this.logger = logger;
        return _this;
    }
    SuperError.prototype.getReferencesString = function () {
        return (0, inspect_1.inspect)(this.references);
    };
    return SuperError;
}(Error));
var PublicError = (function (_super) {
    __extends(PublicError, _super);
    function PublicError(references, logger) {
        return _super.call(this, references, logger) || this;
    }
    return PublicError;
}(SuperError));
exports.PublicError = PublicError;
var PrivateError = (function (_super) {
    __extends(PrivateError, _super);
    function PrivateError(references, logger) {
        return _super.call(this, references, logger) || this;
    }
    return PrivateError;
}(SuperError));
exports.PrivateError = PrivateError;
