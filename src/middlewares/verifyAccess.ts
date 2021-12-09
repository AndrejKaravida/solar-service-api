import { verifier } from '../services/aws';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors/unauthorizedError';

export const verifyAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = await verifier.verify(token);
        if (!decodedToken) {
            throw new UnauthorizedError('Not valid token provided.');
        }
    } catch (e) {
        throw new UnauthorizedError('Not valid token provided.');
    }
    return next();
};
