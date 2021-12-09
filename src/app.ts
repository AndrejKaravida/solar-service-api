import express, { json } from 'express';
import cors from 'cors';
import { healthCheckRoute } from './routes/healthCheck';
import { protectedSolarRoute, publicSolarRoute } from './routes/solarRoute';

const app = express();
app.use(json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
    })
);

app.use('/api/health-check', healthCheckRoute);
app.use('/api/solar', publicSolarRoute);
app.use('/api/solar', protectedSolarRoute);

export { app };
