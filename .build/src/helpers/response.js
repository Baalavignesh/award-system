"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandller = exports.sendResponse = void 0;
const validation_exception_1 = require("../exceptions/validation.exception");
const response_1 = require("../constants/response");
const logger_1 = __importDefault(require("./logger"));
const system_exception_1 = require("../exceptions/system.exception");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sendResponse = (data) => {
    if (data instanceof validation_exception_1.ValidationException || data instanceof system_exception_1.SystemException) {
        logger_1.default.info("Validation or System Exception");
        return {
            statusCode: data.statusCode,
            body: data.message,
        };
    }
    else if (data instanceof Error) {
        logger_1.default.info("General Error");
        console.error(data);
        return {
            statusCode: response_1.STATUS_CODE.ERROR,
            body: JSON.stringify(new system_exception_1.SystemException(data.message, data), null, 2),
        };
    }
    else {
        logger_1.default.info("Success Response");
        logger_1.default.info({
            statusCode: response_1.STATUS_CODE.SUCCESS,
            body: JSON.stringify({
                data,
            }, null, 2),
        });
        return {
            statusCode: response_1.STATUS_CODE.SUCCESS,
            body: JSON.stringify({
                data,
            }, null, 2),
        };
    }
};
exports.sendResponse = sendResponse;
const errorHandller = (err, _, res) => {
    const message = {
        success: false,
        message: err.message,
    };
    return res.status(err.statusCode || response_1.STATUS_CODE.NOT_FOUND).json(message);
};
exports.errorHandller = errorHandller;
