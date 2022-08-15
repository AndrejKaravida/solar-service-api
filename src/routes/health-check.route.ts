import { Router, Request, Response } from 'express';

export const healthCheckRoute = Router().get('/', (req: Request, res: Response) => {
    res.send({});
});
