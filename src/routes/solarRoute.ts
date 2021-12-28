import { Router, Request, Response } from "express";
import { verifyAccess } from "../middlewares/verifyAccess";
import { ILoadMeasurement } from "../models/LoadMeasurement";
import { IMeasurementHistory } from "../models/MeasurementHistory";
import { getDb } from "../repo/mongodb/mongo";
import { calculateLoad } from "../services/calculations";
import { average } from "../utils/average";

export const currentSolarRoute = Router().get(
  "/:city",
  verifyAccess,
  async (req: Request, res: Response) => {
    const mongoClient = getDb();
    const city = req.params.city;
    const currentTime = new Date();
    currentTime.setMinutes(0, 0, 0);
    const measurement = await mongoClient.findOne({
      city,
      date: currentTime,
    });
    if (measurement) {
      const production = calculateLoad(
        measurement.cloud_coverage,
        measurement.temperature
      );
      return res.send({ currentProduction: production });
    }
    return res.send({});
  }
);

export const historySolarRoute = Router().get(
  "/:city",
  verifyAccess,
  async (req: Request, res: Response) => {
    const mongoClient = getDb();
    const city = req.params.city;
    const results = await mongoClient.find({ city }).toArray();

    const measurements: ILoadMeasurement[] = [];
    const measurementHistory: IMeasurementHistory[] = [];
    const days: Date[] = [];

    results.forEach((m) => {
      const production = calculateLoad(m.cloud_coverage, m.temperature);
      const date = new Date(m.date);
      date.setHours(0, 0, 0, 0);
      measurements.push({
        city,
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
        city: city,
        date: day,
        min: minLoad,
        max: maxLoad,
        average: avgLoad,
      });
    });

    return res.send(measurementHistory);
  }
);
