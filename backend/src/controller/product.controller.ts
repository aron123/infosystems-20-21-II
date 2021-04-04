import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';
import { Controller } from './controller';

export class ProductController extends Controller {
    repository = getRepository(Product);

    getAll = async (req: Request, res: Response) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('product')
                .where("product.title LIKE CONCAT('%', :search, '%')", { search })
                .leftJoinAndSelect('product.categories', 'category')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    };
}
