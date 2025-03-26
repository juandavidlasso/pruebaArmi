'use client';
import React from 'react';
import Image from 'next/image';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Grid2,
    Typography,
} from '@mui/material';
import { IProduct } from '@/lib/interfaces/products';

interface Props {
    product: IProduct;
}

const ProductCart: React.FC<Props> = ({ product }) => {
    const { name, image, price } = product;
    return (
        <Grid2 size={{ xs: 12, sm: 3 }} className="flex justify-center">
            <Card className="w-[80%] h-[300px] mt-5">
                <CardContent className="!p-0 h-[85%]">
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
                <CardActions className="h-[15%] flex justify-center">
                    <Typography className="!text-xl !text-[#154360] !font-bold">
                        Cantidad: 1
                    </Typography>
                </CardActions>
            </Card>
        </Grid2>
    );
};

export default ProductCart;
