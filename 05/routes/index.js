import guestRouter from './guest.router.js';
import { Router } from 'express';

const mainRoute = Router();
mainRoute.use('/guest', guestRouter);

export default mainRoute;