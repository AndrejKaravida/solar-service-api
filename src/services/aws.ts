import config from '../config/config.json';
import AWS from 'aws-sdk';
import { verifierFactory } from '@southlane/cognito-jwt-verifier';

AWS.config.update({
    accessKeyId: config.aws.cognito.cognitoAdminAccessKey,
    secretAccessKey: config.aws.cognito.cognitoAdminSecretAccessKey,
    region: config.aws.cognito.region,
});

export const CognitoClient = new AWS.CognitoIdentityServiceProvider({
    apiVersion: config.aws.cliVersion,
    region: config.aws.cognito.region,
});

export const verifier = verifierFactory({
    region: config.aws.cognito.region,
    userPoolId: config.aws.cognito.userPool,
    appClientId: config.aws.cognito.clientId,
    tokenType: 'id',
});
