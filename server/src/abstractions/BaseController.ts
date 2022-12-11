import { Router } from 'express';

export default abstract class BaseController {
  public router: Router;

  constructor(protected path: string) {
    this.router = Router();
  }

  public abstract initializeRoutes(): void;
}
