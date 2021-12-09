import config from './config.json';
import env from 'dotenv';

env.config();

const buildConfig = () => {
    if (!process.env["USER-POOL"]) {
        throw new Error('USER_POOL is not defined')
    }

    config.aws.cognito.userPool = process.env["USER-POOL"];

    if (!process.env["CLIENT-ID"]) {
        throw new Error('CLIENT_ID is not defined')
    }

    config.aws.cognito.clientId = process.env["CLIENT-ID"];

    if (!process.env["ADMIN-ACCESS-KEY"]) {
        throw new Error('ADMIN_ACCESS_KEY is not defined')
    }

    config.aws.cognito.cognitoAdminAccessKey = process.env["ADMIN-ACCESS-KEY"];

    if (!process.env["ADMIN-SECRET-ACCESS-KEY"]) {
        throw new Error('ADMIN_SECRET_ACCESS_KEY is not defined')
    }

    config.aws.cognito.cognitoAdminSecretAccessKey = process.env["ADMIN-SECRET-ACCESS-KEY"];

    return config;
}

export default buildConfig();