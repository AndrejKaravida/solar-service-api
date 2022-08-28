import { Router } from "express";
import { investmentRouter } from "./routes/investment.route";
import { solarPanelRoute } from "./routes/solar-panels.route";
import { verifyAccess } from "./middlewares/verifyAccess";
import { productionRouter } from "./routes/production.route";
import { historyRouter } from "./routes/history.route";
import { checkRole } from "./middlewares/checkRole";
import { UserRole } from "./models/IUser";

export const routes = Router();

routes.use("/investment", [verifyAccess], investmentRouter);
routes.use("/solarPanels", solarPanelRoute);
routes.use("/production", productionRouter);
routes.use("/history", [verifyAccess, checkRole(UserRole.USER)], historyRouter);
