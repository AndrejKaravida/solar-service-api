// import { ICity } from "../models/City";
// import { IProduction } from "../models/Production";
// import { ExtendedRequest } from "../routes/types";
// import { calculateLoad } from "../services/calculations";
// import { Response } from "express";
// import { ILoadMeasurement } from "../models/LoadMeasurement";
// import { IMeasurementHistory } from "../models/MeasurementHistory";
// import { average } from "../utils/average";
// import { getAllMeasurements, getCurrentMeasurement } from "../services/solar";
//
// export const makeInvestment = async (req: ExtendedRequest, res: Response) => {};
//
// export const getCurrent = async (req: ExtendedRequest, res: Response) => {
//   const city: ICity = req.params;
//   const measurement = await getCurrentMeasurement(city.city);
//   if (measurement) {
//     const production: IProduction = {
//       production: calculateLoad(
//         measurement.cloud_coverage,
//         measurement.temperature
//       ),
//     };
//
//     return res.send(production);
//   }
//   return res.send({});
// };
//
// export const getHistory = async (req: ExtendedRequest, res: Response) => {
//   const city: ICity = req.params;
//   const results = await getAllMeasurements(city.city);
//   const measurements: ILoadMeasurement[] = [];
//   const measurementHistory: IMeasurementHistory[] = [];
//   const days: Date[] = [];
//
//   results.forEach((m) => {
//     const production = calculateLoad(m.cloud_coverage, m.temperature);
//     const date = new Date(m.date);
//     date.setHours(0, 0, 0, 0);
//     measurements.push({
//       city: city.city,
//       date,
//       load: production,
//     });
//     if (days.findIndex((d) => d.getTime() === date.getTime()) === -1) {
//       days.push(date);
//     }
//   });
//
//   days.forEach((day) => {
//     const loadsForCurrentDate = measurements
//       .filter((m) => m.date.getTime() === day.getTime())
//       .map((x) => x.load);
//
//     const minLoad = Math.min(...loadsForCurrentDate);
//     const maxLoad = Math.max(...loadsForCurrentDate);
//     const avgLoad = average(loadsForCurrentDate);
//
//     measurementHistory.push({
//       city: city.city,
//       date: day,
//       min: minLoad,
//       max: maxLoad,
//       average: avgLoad,
//     });
//   });
//
//   return res.send(measurementHistory);
// };
