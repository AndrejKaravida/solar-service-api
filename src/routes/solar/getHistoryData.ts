import { Router, Response } from "express";
import { check } from "express-validator";
import { getHistory } from "../../controllers/solar";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  ExtendedRequest,
  RequestBody,
  RequestParams,
  RequestQuery,
} from "../types";

export const getHistoryData = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  validateRequest,
  async (
    req: ExtendedRequest<RequestBody, RequestQuery, RequestParams>,
    res: Response
  ) => {
    await getHistory(req, res);
  }
);
