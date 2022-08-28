// Global Config

import express, { Request, Response } from "express";
import { getHistory } from "../services/history.service";

export const historyRouter = express.Router();

historyRouter.use(express.json());

// GET HISTORY

historyRouter.post("", async (req: Request, res: Response) => {
  try {
    const history = await getHistory(req);
    res.status(200).send(history);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
