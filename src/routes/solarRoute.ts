import { Router, Request, Response } from "express";
import { getDb } from "../repo/mongodb/mongo";
import { calculateLoad } from "../services/calculations";

export const currentSolarRoute = Router().get(
  "/:city",
  async (req: Request, res: Response) => {
    const city = req.params.city;
    const mongoClient = getDb();
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
  "/",
  (req: Request, res: Response) => {
    return res.send({});
  }
);
