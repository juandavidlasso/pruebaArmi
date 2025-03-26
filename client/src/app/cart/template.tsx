'use client';
import { Box, Grid2, Typography } from '@mui/material';
import { useProductsStore } from '@/store/products';
import ProductCart from './components/ProductCart';

export default function CartTemplate() {
    const {
        productsCardData: { productsData },
    } = useProductsStore();

    return (
        <Box className="w-full pt-8">
            <Typography className="!text-4xl !font-bold text-center text-[#154360]">
                Tus ordenes
            </Typography>

            {productsData.length === 0 ? (
                <Typography className="text-center !mt-10 !text-2xl">
                    No hay productos agregados al carrito
                </Typography>
            ) : (
                <Grid2 container spacing={2} mt={5}>
                    {productsData.map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
                </Grid2>
            )}
        </Box>
    );
}
