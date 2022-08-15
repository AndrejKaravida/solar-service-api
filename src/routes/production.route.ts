import express, { Request, Response, Router } from "express";
import { check } from "express-validator";
import { validateRequest } from "../middlewares/validateRequest";

// Global Config

export const productionRouter = express.Router();

productionRouter.use(express.json());

// GET CURRENT PRODUCTION

export const getCurrentData = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  validateRequest,
  async (req: Request, res: Response) => {
    // await getCurrent(req, res);
  }
);
