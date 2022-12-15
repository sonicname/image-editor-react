import multer from 'multer';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import BaseController from '@abstractions/BaseController';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + '.png');
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 20 * 1024 * 1024 } });

export default class UploadController extends BaseController {
  constructor() {
    super('/upload');
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, (_: Request, res: Response) =>
      res.status(StatusCodes.OK).json({
        message: 'upload router',
      }),
    );
    this.router.post(this.path, upload.single('images'), this.uploadingImage);
  }

  private uploadingImage = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
      message: 'uploaded',
      path: req.file?.path,
    });
  };
}
