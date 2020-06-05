import { Request, Response } from 'express';
import ProductModel, { Product } from '../models/product.model';

const ObjectId = require('mongoose').Types.ObjectId;

class ProductController {
    public async addProduct(req: Request, res: Response) {
        try {
            const { type, name, price, userId, valuations, finalValuation, ingredients, description } = req.body;
            const product: Product = new ProductModel({ type, name, price, userId, valuations, finalValuation, ingredients, description });
            await product.save();
            res.send(`${product} Saved`);
        } catch (e) {
            res.send(e);
        }
    }

    public async listById(req: Request, res: Response) {
        const id = new ObjectId(req.params.id);
        try {
            const products: Product[] = await ProductModel.find({ userId: id });
            res.send(products);
        } catch (e) {
            res.send(e);
        }
    }

    // Update de un producto
    public async update(req: Request, res: Response) {
        const id = ObjectId(req.params.id);
        const update: Product = req.body;
        await ProductModel.findByIdAndUpdate(id, update, { new: true },
            (err, todo) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send('OK');
            },
        );
    }
}

export const product = new ProductController();
