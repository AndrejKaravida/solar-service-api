import { Collection, MongoClient } from "mongodb";
import config from "../../config";
import { IMeasurement } from "../../models/Measurement";

const username = config.db.username;
const password = config.db.password;
const cluster = config.db.clusterName;
const database = config.db.dbName;
const collection = config.db.collectionName;

const uri = `mongodb+srv://${username}:${password}@${cluster}.lkam4.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

let dbConnection: Collection<IMeasurement>;

export const createConnection = async () => {
  dbConnection = await (await client.connect())
    .db(database)
    .collection(collection);
};

export const getDb = () => {
  return dbConnection;
};
