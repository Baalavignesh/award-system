import { STATUS_CODE } from "../constants/response";
import { ResponseHandller } from "../types/responseHandler";

class BaseError extends Error implements ResponseHandller {
  statusCode: number;
  success: boolean;

  constructor(
    name: string,
    message: string,
    statusCode: number,
    success: boolean
  ) {
    super(message);
    this.success = success;
    this.name = name;
    this.statusCode = statusCode;
  }

  toJSON() {
    return {
      success: this.success,
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
    };
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string, statusCode = 400, success = false) {
    super("Bad Request", message, statusCode, success);
  }
}

export class UnAuthorizedError extends BaseError {
  constructor(message: string, statusCode = 401, success = false) {
    super("Unauthorized", message, statusCode, success);
  }
}

export class ForbiddenError extends BaseError {
  constructor(message: string, statusCode = 403, success = false) {
    super("Forbidden", message, statusCode, success);
  }
}

export class NotFoundError extends BaseError {
  constructor(
    message: string,
    statusCode = STATUS_CODE.NOT_FOUND,
    success = false
  ) {
    super("Not Found", message, statusCode, success);
    
  }
}

export class InternalServerError extends BaseError {
  constructor(message: string, statusCode = 500, success = false) {
    super("Internal Server Error", message, statusCode, success);
  }
}
