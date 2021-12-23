import {MongoClient} from 'mongodb';
import config from '../../config';

const username = config.db.username;
const password = config.db.password;
const cluster = config.db.clusterName;
const database = config.db.dbName;

const uri = `mongodb+srv://${username}:${password}@${cluster}.lkam4.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

export const createConnection = async () => {
    await client.connect();
}

export default client;