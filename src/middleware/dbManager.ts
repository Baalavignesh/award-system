import type middy from "@middy/core";
import {
  type APIGatewayProxyEvent,
  type APIGatewayProxyResult,
} from "aws-lambda";
import { Sequelize } from "sequelize-typescript";
import logger from "../helpers/logger";
import { User } from "../models/User.model";

const defaults = {
  dev: true,
};

export const dbManager = (
  opts = {}
): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const options = { ...defaults, ...opts };

  const connect = async (request: any): Promise<any> => {
    logger.info("DB Connection invoked");
    let sequelizeConn;

    if (options.dev) {
      sequelizeConn = new Sequelize({
        host: "presidio-awards-instance.cdgkfoacvf6u.us-east-1.rds.amazonaws.com",
        port: 3306,
        password: "admin1234",
        username: "admin",
        dialect: "mysql",
        database: "presidio_awards",
        ssl: true,
        models: [User],
        logging: msg => { logger.debug(msg) },
        pool: {
          max: 20,
          min: 0,
          acquire: 60000,
          idle: 10000
        }
      });
      await sequelizeConn.sync();
      logger.info(sequelizeConn)
    } else {
      // TODO: Connect to MySQL Aurora
    }
    request.context.sequelizeConn = sequelizeConn;
  };


  return {
    before: connect,
  }
};
