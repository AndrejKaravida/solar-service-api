import { app } from "./app";
import config from "./config";
import { connectToDatabase } from "./utils/database";

const start = async () => {
  await connectToDatabase();
  console.log("Successfully connected to the database!");

  app.listen(config.common.port, () => {
    console.log(`API running on port ${config.common.port}`);
  });
};

start();
