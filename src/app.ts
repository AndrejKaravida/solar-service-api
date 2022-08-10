import express, { json } from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import { routes } from "./routes";
import { verifyAccess } from "./middlewares/verifyAccess";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user: {
        _id: string;
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

app.use("/api", [verifyAccess], routes);

app.use(errorHandler);

export { app };
