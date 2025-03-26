import { listproducts } from '../../../../__mocks/products';
import { IProductsResponse } from '../../../models/products';

export class ProductRepository {
    public async getProductsRepository(): Promise<IProductsResponse> {
        return new Promise<IProductsResponse>((resolve, reject) => {
            return resolve({
                status: 200,
                data: listproducts,
            });
        });
    }
}
