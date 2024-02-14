import { SystemException } from "../exceptions/system.exception";
import logger from "../helpers/logger";
import { sendResponse } from "../helpers/response";

export const GetTwitter = async () => {
  try {
    
  } catch (error: any) {
    if (error instanceof SystemException) {
      throw error;
    } else {
      logger.info("Error adding user:", error);

      throw sendResponse(error);
    }
  }
};
