import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { connectionOptions } from '../ormconfig';
import express from 'express';

createConnection(connectionOptions).then(async connection => {
    console.log('Connected to database.');
    const app = express();

    // TODO: set up server

}).catch(error => console.log(error));
