import express, { Request, Response } from "express";
import { getMostRecent } from "../services/production.service";

// Global Config

export const productionRouter = express.Router();

productionRouter.use(express.json());

// GET CURRENT PRODUCTION

productionRouter.get(
  "/current/:investmentId",
  async (req: Request, res: Response) => {
    try {
      const production = await getMostRecent(req);
      res.status(200).send(production);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);
