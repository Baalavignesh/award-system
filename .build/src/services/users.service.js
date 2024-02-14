"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser = void 0;
const System_exception_1 = require("../exceptions/System.exception");
const logger_1 = __importDefault(require("../helpers/logger"));
const response_1 = require("../helpers/response");
const AddUser = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //
    }
    catch (error) {
        if (error instanceof System_exception_1.SystemException) {
            throw error;
        }
        else {
            logger_1.default.info("Error adding user:", error);
            throw (0, response_1.sendResponse)(error);
        }
    }
});
exports.AddUser = AddUser;
