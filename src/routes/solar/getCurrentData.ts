import { Router, Request, Response } from "express";
import { check } from "express-validator";
import { validateRequest } from "../../middlewares/validateRequest";
import { verifyAccess } from "../../middlewares/verifyAccess";
import { ICity } from "../../models/City";
import { IProduction } from "../../models/Production";
import { getDb } from "../../repo/mongodb/mongo";
import { calculateLoad } from "../../services/calculations";
import { Params, Query, ExtendedRequest } from "../types";

interface RequestBody {}
interface RequestQuery extends Query {}
interface RequestParams extends Params {
  city: string;
}

export const getCurrentData = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  validateRequest,
  async (
    req: ExtendedRequest<RequestBody, RequestQuery, RequestParams>,
    res: Response
  ) => {
    const mongoClient = getDb();
    const city: ICity = req.params;
    const currentTime = new Date();
    currentTime.setMinutes(0, 0, 0);
    const measurement = await mongoClient.findOne({
      city: city.city,
      date: currentTime,
    });
    if (measurement) {
      const production: IProduction = {
        production: calculateLoad(
          measurement.cloud_coverage,
          measurement.temperature
        ),
      };

      return res.send(production);
    }
    return res.send({});
  }
);
