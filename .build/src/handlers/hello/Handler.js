"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloHandler = void 0;
const helloHandler = (req, res) => {
    let response = {
        success: true,
        message: "Hello from path",
        statusCode: 200,
    };
    return response;
};
exports.helloHandler = helloHandler;
