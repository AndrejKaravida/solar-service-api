import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import config from '../config';

const { combine, timestamp, json, colorize, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const consoleTransport = new transports.Console({
    format: combine(timestamp(), colorize(), customFormat),
});

const fileTransport = new transports.DailyRotateFile({
    format: combine(timestamp(), json()),
    dirname: 'logs',
    filename: '%DATE%.log',
});

const isDevelopment = config.env.name === 'development';
const logLevel = config.common.log.level;

const logger = createLogger({
    level: logLevel,
    transports: isDevelopment
        ? [consoleTransport, fileTransport]
        : fileTransport,
});

export const debug = (message: string, metadata?: object) => {
    logger.debug({
        message,
        metadata,
    });
};

export const info = (message: string, metadata?: object) => {
    logger.info({
        message,
        metadata,
    });
};

export const warn = (message: string, metadata?: object) => {
    logger.warn({
        message,
        metadata,
    });
};

export const error = (message: string, metadata?: object) => {
    logger.error({
        message,
        metadata,
    });
};

export default {
    debug,
    info,
    warn,
    error,
};
