import { Request, Response, NextFunction } from 'express';
import log from '../services/logger';
import { randomBytes } from 'crypto';

export const routeLogger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = randomBytes(3).toString('hex');
    logRequest(id, req);

    res.on('close', () => {
        logResponse(id, req, res);
    });
    next();
};

const logRequest = (requestId: string, req: Request) => {
    const metadata = {
        requestId,
        type: 'request',
        method: req.method,
        route: req.originalUrl,
    };

    log.info(`Request ${requestId} ${req.method} ${metadata.route}`, metadata);
};

const logResponse = (requestId: string, req: Request, res: Response) => {
    const metadata = {
        requestId,
        type: 'response',
        method: req.method,
        route: req.originalUrl,
        statusCode: res.statusCode,
    };

    log.info(
        `Response ${requestId} ${req.method} ${metadata.route} ${metadata.statusCode}`,
        metadata
    );
};
