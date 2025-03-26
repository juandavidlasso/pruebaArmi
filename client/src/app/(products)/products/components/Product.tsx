'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid2,
    Typography,
} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { IProduct } from '@/lib/interfaces/products';
import { useProductsStore } from '@/store/products';

interface Props {
    product: IProduct;
}

const Product: React.FC<Props> = ({ product }) => {
    const { name, image, price } = product;
    const { addProductToCart, addProductToDetail } = useProductsStore();

    return (
        <Grid2 size={{ xs: 12, sm: 3 }} className="flex justify-center">
            <Card className="w-[80%] h-[380px] mt-5">
                <CardContent className="!p-0 h-[80%]">
                    <Box className="w-full px-1 h-[25%]">
                        <Typography className="text-left !text-sm !font-bold">
                            {name}
                        </Typography>
                    </Box>
                    <Box className="w-full p-1 h-[60%] flex items-center justify-center bg-gray-100">
                        <Image
                            alt={name}
                            src={image}
                            width={100}
                            height={100}
                            className="mx-auto !max-h-[150px]"
                        />
                    </Box>
                    <Box className="w-full p-1 h-[15%] bg-gray-200 flex items-end justify-center">
                        <Typography>Price:</Typography>
                        <Typography className="text-red-900 !font-bold !ml-1">
                            {price}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions className="h-[20%] flex flex-col">
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ textTransform: 'none' }}
                        className="!text-sm !bg-[#154360]"
                        onClick={() => addProductToCart(product)}
                    >
                        Agregar al carrito
                        <AddShoppingCartOutlinedIcon className="ml-3" />
                    </Button>
                    <Link
                        href="/product"
                        className="text-[#154360] mt-1 underline"
                        onClick={() => addProductToDetail(product)}
                    >
                        Ver producto
                    </Link>
                </CardActions>
            </Card>
        </Grid2>
    );
};

export default Product;
