import { app } from './app';
import config from './config/config.json';

const start = async () => {
    app.listen(config.common.port, () => {
        console.log(`API running on port ${config.common.port}`);
    });
};

start();
