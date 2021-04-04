import { Router } from 'express';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';

export function getRouter(): Router {
    const router = Router();

    const productController = new ProductController();
    const categoryController = new CategoryController();

    router.get('/products', productController.getAll);
    router.get('/products/:id', productController.getOne);
    router.post('/products', productController.create);
    router.put('/products', productController.update);
    router.delete('/products/:id', productController.delete);

    router.get('/categories', categoryController.getAll);
    router.post('/categories', categoryController.create);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
