import { collections } from "../utils/database";
import { Request } from "express";
import { IProduction } from "../models/IProduction";

export const getMostRecent = async (req: Request) => {
  if (!collections.production) {
    return;
  }

  const { investmentId } = req.params;

  const currentTime = new Date();
  currentTime.setMinutes(0, 0, 0);

  return (await collections.production.findOne({
    investmentId: investmentId,
    date: currentTime,
  })) as unknown as IProduction;
};
