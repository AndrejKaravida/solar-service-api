import config from '../config';
import AWS from 'aws-sdk';
// @ts-ignore
import { verifierFactory } from '@southlane/cognito-jwt-verifier';

AWS.config.update({
    accessKeyId: config.aws.cognito.cognitoAdminAccessKey,
    secretAccessKey: config.aws.cognito.cognitoAdminSecretAccessKey,
    region: config.aws.cognito.region,
});

export const CognitoClient = new AWS.CognitoIdentityServiceProvider({
    region: config.aws.cognito.region,
});

export const verifier = verifierFactory({
    region: config.aws.cognito.region,
    userPoolId: config.aws.cognito.userPool,
    appClientId: config.aws.cognito.clientId,
    tokenType: 'id',
});
