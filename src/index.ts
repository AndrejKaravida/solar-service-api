import {app} from './app';
import config from './config';
import {createConnection} from "./repo/mongodb/mongo";

const start = async () => {

    createConnection();
    console.log('Successfully connected to the database!')

    app.listen(config.common.port, () => {
        console.log(`API running on port ${config.common.port}`);
    });
};

start();
