import "reflect-metadata";
import {createConnection} from "typeorm";
import { connectionOptions } from "./ormconfig";
import express from 'express';
import { getRouter } from "./routes";

createConnection(connectionOptions).then(async connection => {

    const app = express();

    app.use(express.json());
    app.use('/api', getRouter());

    app.listen(3000, () => console.log('Successfully listening on 3000 ...'));

}).catch(error => console.log(error));
