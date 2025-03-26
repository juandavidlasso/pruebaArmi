import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/products',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
