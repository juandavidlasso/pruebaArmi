import { Request, Response } from 'express';
import { ProductService } from './product.service';

export const getProducts = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const productService = new ProductService();
        const response = await productService.getProductsService();
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
