import { Request, Response } from "express";
import { ResponseHandller } from "../types/responseHandler";
import { ValidationException } from "../exceptions/validation.exception";
import { STATUS_CODE } from "../constants/response";
import logger from "./logger";
import { SystemException } from "../exceptions/system.exception";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendResponse = (
  data: ValidationException | SystemException | any
) => {
  if (data instanceof ValidationException || data instanceof SystemException) {
    logger.info("Validation or System Exception")
    return {
      statusCode: data.statusCode,
      body: data.message,
    };
  } else if (data instanceof Error) {
    logger.info("General Error")
    console.error(data);
    return {
      statusCode: STATUS_CODE.ERROR,
      body: JSON.stringify(new SystemException(data.message, data), null, 2),
    };
  } else {
    logger.info("Success Response")
    logger.info({
        statusCode: STATUS_CODE.SUCCESS,
        body: JSON.stringify(
          {
            data,
          },
          null,
          2
        ),
      })
    return {
      statusCode: STATUS_CODE.SUCCESS,
      body: JSON.stringify(
        {
          data,
        },
        null,
        2
      ),
    };
  }
};

export const errorHandller = (
  err: ResponseHandller,
  _: Request,
  res: Response
) => {
  const message = {
    success: false,
    message: err.message,
  };

  return res.status(err.statusCode || STATUS_CODE.NOT_FOUND).json(message);
};
