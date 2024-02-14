"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const response_1 = require("../constants/response");
class ValidationException extends Error {
    constructor(message, body) {
        super();
        this.statusCode = response_1.STATUS_CODE.VALIDATION_ERROR;
        this.body = body;
        this.message = message;
    }
}
exports.ValidationException = ValidationException;
