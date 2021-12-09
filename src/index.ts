import { app } from './app';
import config from './config';

const start = () => {
    app.listen(config.common.port, () => {
        console.log(`API running on port ${config.common.port}`);
    });
};

start();
