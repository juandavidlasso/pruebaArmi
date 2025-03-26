export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: string;
}

export interface ProductsCardData {
    productDetail: IProduct;
    productsData: IProduct[];
}

export interface IProductState {
    productsCardData: ProductsCardData;
    addProductToCart: (data: IProduct) => void;
    addProductToDetail: (data: IProduct) => void;
}

export interface IProductsResponse {
    status: number;
    data: IProduct[] | string;
}
