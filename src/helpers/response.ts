import { STATUS_CODE } from "../constants/response";
import logger from "./logger";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendResponse = (
  data: any
) => {
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
};
