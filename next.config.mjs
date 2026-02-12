/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.transparenttextures.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/about-us',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/contact-us',
                permanent: true,
            },
            {
                source: '/terms',
                destination: '/terms-of-service',
                permanent: true,
            },
            {
                source: '/movie',
                destination: '/dramas',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
