"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemException = void 0;
const response_1 = require("../constants/response");
class SystemException extends Error {
    constructor(message, body) {
        super();
        this.statusCode = response_1.STATUS_CODE.SYSTEM_ERROR;
        this.body = body;
        this.message = message;
    }
}
exports.SystemException = SystemException;
