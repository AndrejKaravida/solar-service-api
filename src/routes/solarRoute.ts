import { Router, Request, Response } from 'express';
import { verifyAccess } from '../middlewares/verifyAccess';

export const publicSolarRoute = Router().get('/', (req: Request, res: Response) => {
    res.send({});
});

export const protectedSolarRoute = Router().get(
    '/protected',
    verifyAccess,
    (req: Request, res: Response) => {
        res.send({});
    }
);
