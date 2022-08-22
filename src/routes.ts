import { Router } from "express";
import { investmentRouter } from "./routes/investment.route";
import { solarPanelRoute } from "./routes/solar-panels.route";
import { verifyAccess } from "./middlewares/verifyAccess";
import { productionRouter } from "./routes/production.route";
import { historyRouter } from "./routes/history.route";

export const routes = Router();

routes.use("/investment", [verifyAccess], investmentRouter);
routes.use("/solarPanels", solarPanelRoute);
routes.use("/production", productionRouter);
routes.use("/history", historyRouter);
