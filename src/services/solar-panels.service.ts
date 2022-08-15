import { Request } from "express";
import { collections } from "./database.service";
import { ISolarPanel } from "../models/ISolarPanel";

export const getSolarPanels = async () => {
  if (!collections.solarPanels) {
    return;
  }
  return (await collections.solarPanels
    .find({})
    .toArray()) as unknown as ISolarPanel[];
};

export const makeSolarPanel = async (req: Request) => {
  if (!collections.solarPanels) {
    return;
  }

  const newSolarPanel = req.body as ISolarPanel;

  return await collections.solarPanels.insertOne(newSolarPanel);
};
