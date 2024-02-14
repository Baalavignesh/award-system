"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUsers = void 0;
const logger_1 = __importDefault(require("../../helpers/logger"));
const response_1 = require("../../helpers/response");
const validation_exception_1 = require("../../exceptions/validation.exception");
class Users {
    static getUsers(req, res) {
        logger_1.default.info("Get User controller called");
        let result = {
            statusCode: 200,
            message: "User Fetched",
        };
        return (0, response_1.sendResponse)(result);
    }
    static addUser(req, res) {
        throw new validation_exception_1.ValidationException("error here", {
            statusCode: 404,
            message: "",
            body: "validation exception",
        });
    }
}
exports.getUsers = Users.getUsers;
exports.addUser = Users.addUser;
