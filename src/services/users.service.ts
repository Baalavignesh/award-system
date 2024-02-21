import { InternalServerError } from "../helpers/errors";
import logger from "../helpers/logger";
import { APIGatewayProxyResult } from "aws-lambda";
import { sendResponse } from "../helpers/response";
import { User } from "../models/User.model";
import { v4 as uuidv4 } from 'uuid';


export const GetUserService = async () => {
  try {
    const all_users = await User.findAll();
    return sendResponse(all_users);
  } catch (error: any) {
    logger.info("Error getting all user in service: ", error);
    throw new InternalServerError(error);
  }
};

export const AddUserService = async (): Promise<APIGatewayProxyResult> => {
  try {
    const user_data = {
      id: uuidv4(),
      email: "baalavignesha@presidio.com",
      name: "baalavignesh",
      role: "Admin",
    };

    console.log(user_data);
    const added_users = await User.create(user_data);
    return sendResponse(added_users);
  } catch (error: any) {
    logger.info("Error adding user in service: ", error);
    throw new InternalServerError(error);
  }
};
