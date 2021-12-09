import { CustomError } from './customError';

export class UnauthorizedError extends CustomError {
    readonly statusCode = 401;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}
