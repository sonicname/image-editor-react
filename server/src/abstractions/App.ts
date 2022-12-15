import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import express, { Application } from 'express';

import BaseController from './BaseController';
import errorMiddleware from '@middlewares/error.middleware';

class App {
  public app: Application;
  public port: number | string;

  constructor(controllers: BaseController[], port: number | string) {
    this.app = express();
    this.port = port;

    this.app.use('/uploads', express.static(path.join(__dirname + '/../..' + '/uploads')));
    this.app.use('/edited', express.static(path.join(__dirname + '/../..' + '/python_scripts')));

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    if (process.env['NODE_ENV'] === 'development') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(
        morgan('combined', {
          stream: createWriteStream(path.join(__dirname, '../..', 'logs', 'server.log'), {
            encoding: 'utf8',
            flags: 'a',
          }),
        }),
      );
    }
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeControllers(controllers: BaseController[]) {
    this.app.get('/', (_, res) =>
      res.json({
        message: 'App running on port ' + this.port,
      }),
    );

    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
