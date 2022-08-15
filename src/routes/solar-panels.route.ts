// External Dependencies

import express, { Request, Response } from "express";
import {
  getSolarPanels,
  makeSolarPanel,
} from "../services/solar-panels.service";

// Global Config

export const solarPanelRoute = express.Router();

solarPanelRoute.use(express.json());

// GET ALL

solarPanelRoute.get("/", async (_req: Request, res: Response) => {
  try {
    const solarPanels = await getSolarPanels();

    res.status(200).send(solarPanels);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// POST

solarPanelRoute.post("/", async (_req: Request, res: Response) => {
  try {
    const result = await makeSolarPanel(_req);

    result
      ? res
          .status(201)
          .send(
            `Successfully created a new solar panel with id ${result.insertedId}`
          )
      : res.status(500).send("Failed to create a new solar panel.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
