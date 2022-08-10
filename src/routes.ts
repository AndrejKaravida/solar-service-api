import { Router } from "express";
import { healthCheckRoute } from "./routes/healthCheck";
import { investmentRouter } from "./routes/investment.route";

export const routes = Router();

routes.use("/investment", investmentRouter);
routes.use("/health-check", healthCheckRoute);
