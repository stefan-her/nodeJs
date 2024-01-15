import demoRouter from './demo.routers.js';
import productRouter from './product.router.js';
import { Router } from 'express';

const router = Router();

router.use('/demo', demoRouter);
router.use('/produit', productRouter);

export default router;