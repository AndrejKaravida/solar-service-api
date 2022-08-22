import { verifier } from "../utils/aws";
import { NextFunction, Request, Response } from "express";

export const verifyAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = await verifier.verify(token);
    if (!decodedToken) {
      return res.status(401).send("Not valid token provided.");
    }
    req.user = {
      _id: decodedToken.sub,
    };
  } catch (e) {
    return res.status(401).send("Not valid token provided.");
  }
  return next();
};
