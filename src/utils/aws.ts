import config from "../config";
// @ts-ignore
import { verifierFactory } from "@southlane/cognito-jwt-verifier";

export const verifier = verifierFactory({
  region: config.aws.cognito.region,
  userPoolId: config.aws.cognito.userPool,
  appClientId: config.aws.cognito.clientId,
  tokenType: "id",
});
