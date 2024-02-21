import { Request, Response } from "express";
import { ResponseHandller } from "../../types/responseHandler";

export const helloHandler = (req: Request, res: Response) => {
  let response : ResponseHandller = {
    success: true,
    message: "Hello from path",
    statusCode: 200,
  }
  return response;
};
