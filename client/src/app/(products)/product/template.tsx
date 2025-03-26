'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { useProductsStore } from '@/store/products';
import Image from 'next/image';

interface Props {}

const ProductDetail: React.FC<Props> = ({}) => {
    const {
        productsCardData: {
            productDetail: { name, price, image },
        },
    } = useProductsStore();

    return (
        <Box className="w-full pt-3">
            <Link
                href="/products"
                className="ml-10 text-red-800 text-xl font-bold underline"
            >
                Atrás
            </Link>
            <Typography className="!font-bold text-[#154360] pb-8 text-center w-[70%] !mx-auto max-lg:!text-2xl max-lg:w-full max-lg:!mt-10 !text-4xl">
                {name}
            </Typography>
            <Box className="w-full flex">
                <Box className="w-3/4 max-lg:w-1/2">
                    <Image
                        alt={name}
                        width={200}
                        height={200}
                        src={image}
                        className="mx-auto"
                    />
                </Box>
                <Box className="max-lg:w-1/2 max-lg:text-center">
                    <Typography className="!text-2xl !font-bold">
                        Price:
                    </Typography>
                    <Typography className="!text-2xl !font-bold text-red-800">
                        {price}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetail;
