import { Router, Request, Response } from "express";
import { verifyAccess } from "../middlewares/verifyAccess";

export const currentSolarRoute = Router().get(
  "/",
  (req: Request, res: Response) => {
    res.send({});
  }
);

export const historySolarRoute = Router().get(
  "/",
  (req: Request, res: Response) => {
    res.send({});
  }
);
