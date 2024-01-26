import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
dotenv.config();

import { HOST, PORT } from './config';

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, '../../client/dist/index.html')));

app.use(catch404);
app.use(globalErrorHandler);

app.listen({ host: HOST, port: PORT }, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
});

// HANDLER
function catch404(_req: Request, _res: Response, next: NextFunction) {
  let msg = '404 - Not found';
  let err = new Error(msg);
  next(err);
}

function globalErrorHandler(err: any, req: Request, res: Response, _next: NextFunction) {
  err.status = err.status || 500;
  console.error(err);
  res.status(err.status);
  res.json({
    req: {
      url: req.url,
    },
    error: {
      status: err.status,
      message: err.message,
    },
  });
}
