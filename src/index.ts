import {app} from './app';
import config from './config';
import {createConnection} from "./repo/mongodb/mongo";

const start = async () => {

    try {
        await createConnection();
        console.log('Successfully connected to the database!')
    } catch (e) {
        console.error('Unable to establish a connection to the database')
    }

    app.listen(config.common.port, () => {
        console.log(`API running on port ${config.common.port}`);
    });
};

start();
