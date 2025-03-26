import { IProductsResponse } from '../../../models/products';
import { ProductRepository } from './product.repository';

export class ProductService {
    private productRepository = new ProductRepository();

    public async getProductsService(): Promise<IProductsResponse> {
        return this.productRepository.getProductsRepository();
    }
}
