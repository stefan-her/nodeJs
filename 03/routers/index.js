import demoRouter from './demo.routers.js';
import { Router } from 'express';

const router = Router();

router.use('/demo', demoRouter);

export default router;