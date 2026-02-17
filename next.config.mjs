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
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
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
