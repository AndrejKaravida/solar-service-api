import { Collection, Db, MongoClient } from "mongodb";
import config from "../config";

// Global variables

export const collections: { investments?: Collection } = {};

// Initialize connection

export const connectToDatabase = async () => {
  const username = config.db.username;
  const password = config.db.password;
  const cluster = config.db.clusterName;
  const database = config.db.dbName;
  const investmentCollectionName = config.db.investmentCollectionName;

  const uri = `mongodb+srv://${username}:${password}@${cluster}.lkam4.mongodb.net/${database}?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  await client.connect();

  const db: Db = client.db(database);

  collections.investments = db.collection(investmentCollectionName);
};
