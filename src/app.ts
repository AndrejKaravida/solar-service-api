import express, { json } from "express";
import cors from "cors";
import { healthCheckRoute } from "./routes/healthCheck";
import { currentSolarRoute, historySolarRoute } from "./routes/solarRoute";

const app = express();
app.use(json());

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use("/api/health-check", healthCheckRoute);
app.use("/api/solar/current", currentSolarRoute);
app.use("/api/solar/history", historySolarRoute);

export { app };
