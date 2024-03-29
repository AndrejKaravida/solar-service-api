import config from "./config.json";
import env from "dotenv";

env.config();

const buildConfig = () => {
  loadAwsConfig();
  loadDbConfig();
  return config;
};

const loadAwsConfig = () => {
  if (!process.env["USER-POOL"]) {
    throw new Error("USER_POOL is not defined");
  }

  config.aws.cognito.userPool = process.env["USER-POOL"];

  if (!process.env["CLIENT-ID"]) {
    throw new Error("CLIENT_ID is not defined");
  }

  config.aws.cognito.clientId = process.env["CLIENT-ID"];
};

const loadDbConfig = () => {
  if (!process.env["DB-USERNAME"]) {
    throw new Error("DB_USERNAME is not defined");
  }

  config.db.username = process.env["DB-USERNAME"];

  if (!process.env["DB-PASSWORD"]) {
    throw new Error("DB_PASSWORD is not defined");
  }

  config.db.password = process.env["DB-PASSWORD"];
};

export default buildConfig();
