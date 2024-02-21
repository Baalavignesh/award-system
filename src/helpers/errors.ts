import { COMMON_RESPONSE_HEADERS, STATUS_CODE } from "../constants/response";
import { ResponseHandller } from "../types/responseHandler";

class BaseError extends Error implements ResponseHandller {
  statusCode: number;
  success: boolean;
  header: any;

  constructor(
    name: string,
    message: string,
    statusCode: number,
    success: boolean,
    header: any
  ) {
    super(message);
    this.success = success;
    this.name = name;
    this.statusCode = statusCode;
    this.header = header;
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
  constructor(
    message: string,
    statusCode = STATUS_CODE.BAD_REQUEST,
    success = false,
    header = COMMON_RESPONSE_HEADERS
  ) {
    super("Bad Request", message, statusCode, success, header);
  }
}

export class UnAuthorizedError extends BaseError {
  constructor(
    message: string,
    statusCode = STATUS_CODE.UNAUTHORIZED,
    success = false,
    header = COMMON_RESPONSE_HEADERS
  ) {
    super("Unauthorized", message, statusCode, success, header);
  }
}

export class ForbiddenError extends BaseError {
  constructor(
    message: string,
    statusCode = STATUS_CODE.FORBIDDEN,
    success = false,
    header = COMMON_RESPONSE_HEADERS
  ) {
    super("Forbidden", message, statusCode, success, header);
  }
}

export class NotFoundError extends BaseError {
  constructor(
    message: string,
    statusCode = STATUS_CODE.NOT_FOUND,
    success = false,
    header = COMMON_RESPONSE_HEADERS
  ) {
    super("Not Found", message, statusCode, success, header);
  }
}

export class InternalServerError extends BaseError {
  constructor(
    message: string,
    statusCode = 500,
    success = false,
    header = COMMON_RESPONSE_HEADERS
  ) {
    super("Internal Server Error", message, statusCode, success, header);
  }
}
