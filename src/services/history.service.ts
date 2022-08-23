import { collections } from "../utils/database";
import { Request } from "express";
import { IProduction } from "../models/IProduction";

export const getHistory = async (req: Request) => {
  if (!collections.production) {
    return;
  }

  let { startDate, endDate } = req.params;

  const startingDate = new Date(startDate).setMinutes(0, 0, 0);
  const endingDate = new Date(endDate).setMinutes(0, 0, 0);

  // @ts-ignore

  return (await collections.history.findOne({
    date: startingDate,
  })) as unknown as IProduction;
};
