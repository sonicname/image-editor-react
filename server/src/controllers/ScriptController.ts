import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import upscale from '@utils/upscale';
import downscale from '@utils/downscale';
import BaseController from '@abstractions/BaseController';
import noiseRemove from '@utils/noiseRemove';

export default class ScriptController extends BaseController {
  constructor() {
    super('/scripts');

    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, (_: Request, res: Response) =>
      res.status(StatusCodes.OK).json({
        message: 'Script ok',
      }),
    );

    this.router.get(this.path + '/upscale', this.upscaleImage);
    this.router.get(this.path + '/downscale', this.downscale);
    this.router.get(this.path + '/noise_remove', this.noiseRemove);
  }

  private upscaleImage = async (req: Request, res: Response) => {
    const { path, scale } = req.body as { path: string; scale: string };

    const data = await upscale(path, scale);

    return res.status(StatusCodes.OK).json({
      message: 'upscaled',
      data,
    });
  };

  private downscale = async (req: Request, res: Response) => {
    const { path, scale } = req.body as { path: string; scale: string };

    const data = await downscale(path, scale);

    return res.status(StatusCodes.OK).json({
      message: 'downscaled',
      data,
    });
  };

  private noiseRemove = async (req: Request, res: Response) => {
    const { path } = req.body as { path: string };

    const data = await noiseRemove(path);

    return res.status(StatusCodes.OK).json({
      message: 'noise removed',
      data,
    });
  };
}
