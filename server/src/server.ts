import 'express-async-errors';
import { config } from 'dotenv';

import App from '@abstractions/App';

config();

new App([], process.env['PORT'] as string).start();
