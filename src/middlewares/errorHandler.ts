import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/customError';

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .send({ errors: err.serializeErrors() });
    }
    return res
        .status(500)
        .send({ errors: [{ message: 'Unknown server error.' }] });
};

export default errorHandler;
