import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { connectionOptions } from '../ormconfig';
import express from 'express';
import { getRouter } from './routes';

createConnection(connectionOptions).then(() => {
    const app = express();

    app.use('/api', getRouter());

    app.listen(3000, () => {
        console.log('Listening on 3000 ...');
    });
}).catch(error => console.log(error));
