import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
dotenv.config();

import { HOST, PORT } from './config';

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.listen({ host: HOST, port: PORT }, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});
