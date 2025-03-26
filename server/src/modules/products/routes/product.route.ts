import { Router } from 'express';
import { getProducts } from '../controllers/product.controller';

const router = Router();

router.get('/products', getProducts as any);

export default router;
