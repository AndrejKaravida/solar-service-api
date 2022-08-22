// Global Config

import express, { Request, Response } from "express";

export const historyRouter = express.Router();

historyRouter.use(express.json());

// GET HISTORY

historyRouter.get("/:city", async (req: Request, res: Response) => {
  // await getHistory(req, res);
});
