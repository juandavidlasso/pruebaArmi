import {
    IProduct,
    IProductState,
    ProductsCardData,
} from '@/lib/interfaces/products';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const productsCardData: ProductsCardData = {
    productDetail: {
        id: 0,
        name: '',
        image: '',
        price: '',
    },
    productsData: [],
};

export const useProductsStore = create<IProductState>()(
    persist(
        (set) => ({
            productsCardData,
            addProductToCart: (data: IProduct) =>
                set((state: IProductState) => ({
                    productsCardData: {
                        ...state.productsCardData,
                        productsData: [
                            ...state.productsCardData.productsData,
                            data,
                        ],
                    },
                })),
            addProductToDetail: (data: IProduct) =>
                set((state: IProductState) => ({
                    productsCardData: {
                        ...state.productsCardData,
                        productDetail: data,
                    },
                })),
        }),
        {
            name: 'productStorage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
