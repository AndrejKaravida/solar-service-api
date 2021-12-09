import { CustomError } from '../errors/customError';

export class NotFoundError extends CustomError {
    readonly statusCode = 404;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}
