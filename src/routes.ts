import { Router } from "express";
import { healthCheckRoute } from "./routes/healthCheck";
import solarRouter from "./routes/solar";

export const routes = Router();

routes.use("/solar", solarRouter);
routes.use("/health-check", healthCheckRoute);
