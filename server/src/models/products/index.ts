export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: string;
}

export interface IProductsResponse {
    status: number;
    data: IProduct[] | string;
}
