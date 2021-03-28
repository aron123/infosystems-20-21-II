import { Router } from 'express';
import { ProductController } from './controller/product.controller';

export function getRouter(): Router {
    const router = Router();

    const productController = new ProductController();

    router.get('/products', productController.getAllProducts);
    router.get('/products/:id', productController.getProductById);

    return router;
}
