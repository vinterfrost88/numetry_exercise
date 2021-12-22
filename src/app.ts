import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import "reflect-metadata";
import {ConnectionOptions, createConnection} from "typeorm";
import userRouter from './modules/assignment/assignment.route';
import { Assignment } from './entity/Assignment';
import { Game } from './entity/game';

const app: Application = express();
app.use(cors());
app.use('/user', userRouter.router);

const databaseConfig: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.TYPEORM_HOST || '',
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME || '',
  password: process.env.TYPEORM_PASSWORD || '',
  database: process.env.TYPEORM_DATABASE || '',
  logging: true,
  synchronize: false,
  entities: [
    Assignment,
    Game
  ],
  migrations: ['src/migration/**/*.ts'],
};

const dataBaseInitialize = async () => {
  await createConnection(databaseConfig)
  .catch((error) => {
    console.log('database::conection:: error to connect', error);
  });
}

dataBaseInitialize();

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  return res.render('error', { error: err });
});

export default app;
