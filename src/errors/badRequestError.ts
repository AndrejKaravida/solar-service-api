import { ValidationError } from 'express-validator';
import { CustomError } from './customError';

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super('Invalid request parameters');

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        const message = this.errors.map((err) => err.msg);
        return [...message];
    }
}
