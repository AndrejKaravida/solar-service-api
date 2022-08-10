// External Dependencies

import express, { Request, Response } from "express";
import {
  getInvestments,
  getUserInvestments,
  makeInvestment,
} from "../services/investment.service";

// Global Config

export const investmentRouter = express.Router();

investmentRouter.use(express.json());

// GET

investmentRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const investments = await getInvestments();

    res.status(200).send(investments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// GET USER INVESTMENTS

investmentRouter.get("/user", async (_req: Request, res: Response) => {
  try {
    const userInvestments = await getUserInvestments(_req);

    res.status(200).send(userInvestments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// POST

investmentRouter.post("/", async (_req: Request, res: Response) => {
  try {
    const result = await makeInvestment(_req);

    result
      ? res
          .status(201)
          .send(
            `Successfully created a new investment with id ${result.insertedId}`
          )
      : res.status(500).send("Failed to create a new investment.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
