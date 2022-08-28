import { UserRole } from "../models/IUser";
import { NextFunction, Response } from "express";

export const checkRole = (requiredRole: UserRole) => {
  return async (req: any, res: Response, next: NextFunction) => {
    const role = req.user.role!;

    const roleMatches = role.toString() === requiredRole.toString();

    if (!roleMatches) {
      throw new Error("Not authorized!");
    }
    return next();
  };
};
