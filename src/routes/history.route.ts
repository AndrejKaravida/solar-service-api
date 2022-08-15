// Global Config

import express, { Request, Response, Router } from "express";
import { check } from "express-validator";
import { validateRequest } from "../middlewares/validateRequest";

export const historyRouter = express.Router();

historyRouter.use(express.json());

// GET HISTORY

export const getHistoryData = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  validateRequest,
  async (req: Request, res: Response) => {
    // await getHistory(req, res);
  }
);
