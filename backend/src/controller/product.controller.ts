import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';

export class ProductController {
    repository = getRepository(Product);

    getAllProducts = async (req, res) => {
        try {
            const products = await this.repository.find();
            res.json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Database error' });
        }
    }

    getProductById = async (req, res) => {
        try {
            const product = await this.repository.findOne(req.params.id);

            if (!product) {
                res.status(404).json({ message: 'Can not find product.' });
                return;
            }

            res.json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Database error' });
        }
    }
}
