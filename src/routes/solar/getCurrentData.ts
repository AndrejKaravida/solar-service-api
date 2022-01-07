import { Router, Response } from "express";
import { check } from "express-validator";
import { getCurrent } from "../../controllers/solar";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  ExtendedRequest,
  RequestBody,
  RequestParams,
  RequestQuery,
} from "../types";

export const getCurrentData = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  validateRequest,
  async (
    req: ExtendedRequest<RequestBody, RequestQuery, RequestParams>,
    res: Response
  ) => {
    await getCurrent(req, res);
  }
);
