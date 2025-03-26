'use client';
import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import Product from './Product';
import { IProduct } from '@/lib/interfaces/products';

interface Props {
    products: IProduct[];
}

const ListProducts: React.FC<Props> = ({ products }) => {
    return (
        <Box className="w-full text-center pt-3">
            <Typography variant="h3" className="!font-bold text-[#154360] pb-8">
                Listado de productos
            </Typography>

            <Grid2 container spacing={2}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Grid2>
        </Box>
    );
};

export default ListProducts;
