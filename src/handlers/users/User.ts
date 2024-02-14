import { Request, Response } from "express";
import logger from "../../helpers/logger";
import { sendResponse } from "../../helpers/response";
import { ValidationException } from "../../exceptions/validation.exception";
import { GetTwitter } from "../../services/users.service";

class Users {
  static getUsers(req: Request, res: Response) {
    logger.info("Get User controller called");
    let result: any = {
      statusCode: 200,
      message: "User Fetched",
    };
    return sendResponse(result);
  }

  static getTwitterController = async (req: Request, res: Response) => {
    try {
      const twitter = await GetTwitter();
      sendResponse(twitter);
    } catch (error) {
      logger.info("Error:", error);
      throw new ValidationException(
        "error fetchihng twitter",
        JSON.stringify({
          not: "working",
        })
      );
    }
  };

  static addUser(req: Request, res: Response) {
    throw new ValidationException(
      "error here",
      JSON.stringify({
        statusCode: 404,
        message: "",
        body: "validation exception",
      })
    );
  }
}

export const getUsers = Users.getUsers;
export const addUser = Users.addUser;
