import logger from "../../helpers/logger";
import { AddUserService, GetUserService } from "../../services/users.service";
import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { middyfy } from "../../middleware/handler";

class Users {
  static getUser = async (event: any): Promise<APIGatewayProxyResult> => {
    return await GetUserService();
  };

  static addUser = async (event: any): Promise<APIGatewayProxyResult> => {
    return await AddUserService();
  };
}

const getUser = async (event: any): Promise<APIGatewayProxyResult> => {
  logger.info("Get User handler called");
  return await GetUserService();
};

export const getUsersHandler: Handler = middyfy(getUser, {
  dbManagerOpts: { dev: true },
});

export const addUserHandler: Handler = middyfy(Users.addUser, {
  dbManagerOpts: { dev: true },
});
