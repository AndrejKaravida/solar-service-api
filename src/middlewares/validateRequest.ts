import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { BadRequestError } from "../errors/badRequestError";
import { ExtendedRequest } from "../routes/types";

export const validateRequest = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new BadRequestError(errors.array());
  }

  next();
};
