import express, { json } from "express";
import cors from "cors";
import { routes } from "./routes";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: {
        _id: string;
        role: string;
      };
    }
  }
}

const app = express();
app.use(json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use("/api", routes);

export { app };
