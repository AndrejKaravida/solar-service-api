import { verifier } from "../services/aws";
import { Request, Response, NextFunction } from "express";

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
  } catch (e) {
    return res.status(401).send("Not valid token provided.");
  }
  return next();
};
