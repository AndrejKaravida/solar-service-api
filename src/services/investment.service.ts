import { IInvestment } from "../models/IInvestment";
import { collections } from "./database.service";
import { Request } from "express";

export const getInvestments = async () => {
  if (!collections.investments) {
    return;
  }
  return (await collections.investments
    .find({})
    .toArray()) as unknown as IInvestment[];
};

export const getUserInvestments = async (req: Request) => {
  if (!collections.investments) {
    return;
  }

  const userId = req.user._id;

  return (await collections.investments
    .find({ "user.userId": userId })
    .toArray()) as unknown as IInvestment[];
};

export const makeInvestment = async (req: Request) => {
  if (!collections.investments) {
    return;
  }

  const newInvestment = req.body as IInvestment;

  return await collections.investments.insertOne(newInvestment);
};
