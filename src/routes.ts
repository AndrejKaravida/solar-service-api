import { Router } from "express";
import { healthCheckRoute } from "./routes/health-check.route";
import { investmentRouter } from "./routes/investment.route";
import { historyRouter } from "./routes/history.route";
import { productionRouter } from "./routes/production.route";
import { solarPanelRoute } from "./routes/solar-panels.route";

export const routes = Router();

routes.use("/investment", investmentRouter);
routes.use("/solarPanels", solarPanelRoute);
routes.use("/production", productionRouter);
routes.use("/history", historyRouter);
routes.use("/health-check", healthCheckRoute);
