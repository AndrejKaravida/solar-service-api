import { collections } from "../utils/database";
import { Request } from "express";
import { IHistory } from "../models/IHistory";

export const getHistory = async (req: Request) => {
  if (!collections.history) {
    return;
  }

  const { investmentId, startDate, endDate } = req.body;

  let startingDate = new Date(startDate);
  startingDate.setUTCHours(0, 0, 0, 0);
  startingDate.setDate(startingDate.getDate() + 1);

  const endingDate = new Date(endDate);
  endingDate.setUTCHours(0, 0, 0, 0);
  endingDate.setDate(endingDate.getDate() + 1);

  return (await collections.history
    .find({
      investmentId: investmentId,
      date: { $gte: startingDate, $lte: endingDate },
    })
    .toArray()) as unknown as IHistory[];
};
