import 'express-async-errors';
import { config } from 'dotenv';

import App from '@abstractions/App';
import UploadController from '@controllers/UploadController';
import ScriptController from '@controllers/ScriptController';

config();

new App([new UploadController(), new ScriptController()], process.env['PORT'] as string).start();
