import { Suspense } from 'react';
import makeRequest from '@/store/config/axiosConfig';
import Loading from './loading';
import ListProducts from './components/ListProducts';
import { IProduct } from '@/lib/interfaces/products';

export default async function ProductsPage() {
    const response = await makeRequest(
        `${process.env.NEXT_PUBLIC_API_ROUTE}/products`,
        'GET'
    );
    const products: IProduct[] = response.data;

    return (
        <Suspense fallback={<Loading />}>
            <ListProducts products={products} />
        </Suspense>
    );
}
