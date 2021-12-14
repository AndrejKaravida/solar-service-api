import express, {json} from 'express';
import cors from 'cors';
import {healthCheckRoute} from './routes/healthCheck';
import solarRoutes from './routes/solarRoute';
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(json());

app.use(express.urlencoded({extended: true}))

app.use(
    cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
    })
);

app.use('/api/v1/health-check', healthCheckRoute);
app.use('/api/v1/solar', solarRoutes);

app.use(errorHandler);

export {app};
