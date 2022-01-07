import { Router, Request, Response } from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { verifyAccess } from "../middlewares/verifyAccess";
import { ILoadMeasurement } from "../models/LoadMeasurement";
import { IMeasurementHistory } from "../models/MeasurementHistory";
import { getDb } from "../repo/mongodb/mongo";
import { calculateLoad } from "../services/calculations";
import { average } from "../utils/average";
import { check } from "express-validator";
import { ICity } from "../models/City";
import { IProduction } from "../models/Production";

import { Params, Query, ExtendedRequest } from "./types";
interface RequestBody {}
interface RequestQuery extends Query {}
interface RequestParams extends Params {
  city: string;
}

export const currentSolarRoute = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  verifyAccess,
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

export const historySolarRoute = Router().get(
  "/:city",
  [check("city").isLength({ min: 2 }).withMessage("City must be defined")],
  verifyAccess,
  async (
    req: ExtendedRequest<RequestBody, RequestQuery, RequestParams>,
    res: Response
  ) => {
    const mongoClient = getDb();
    const city: ICity = req.params;
    const results = await mongoClient.find({ city }).toArray();
    const measurements: ILoadMeasurement[] = [];
    const measurementHistory: IMeasurementHistory[] = [];
    const days: Date[] = [];

    results.forEach((m) => {
      const production = calculateLoad(m.cloud_coverage, m.temperature);
      const date = new Date(m.date);
      date.setHours(0, 0, 0, 0);
      measurements.push({
        city: city.city,
        date,
        load: production,
      });
      if (days.findIndex((d) => d.getTime() === date.getTime()) === -1) {
        days.push(date);
      }
    });

    days.forEach((day) => {
      const loadsForCurrentDate = measurements
        .filter((m) => m.date.getTime() === day.getTime())
        .map((x) => x.load);

      const minLoad = Math.min(...loadsForCurrentDate);
      const maxLoad = Math.max(...loadsForCurrentDate);
      const avgLoad = average(loadsForCurrentDate);

      measurementHistory.push({
        city: city.city,
        date: day,
        min: minLoad,
        max: maxLoad,
        average: avgLoad,
      });
    });

    return res.send(measurementHistory);
  }
);
