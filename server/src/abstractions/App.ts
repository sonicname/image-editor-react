import cors from 'cors';
import morgan from 'morgan';
import express, { Application } from 'express';

import BaseController from './BaseController';
import errorMiddleware from '@middlewares/error.middleware';

class App {
  public app: Application;
  public port: number | string;

  constructor(controllers: BaseController[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    if (process.env['NODE_ENV'] === 'development') {
      this.app.use(morgan('dev'));
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
