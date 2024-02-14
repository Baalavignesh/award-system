import express, {Express} from "express";
import serverless from "serverless-http";
import { errorHandller, sendResponse } from "./src/helpers/response";

const app: Express = express();
app.use(errorHandller);

export const handler = serverless(app);
