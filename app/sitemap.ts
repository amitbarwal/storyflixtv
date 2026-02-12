import { MetadataRoute } from 'next';
import { movieData } from '@/lib/movieData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://storyflixtv.com';

    // Core static routes
    const staticRoutes = [
        '',
        '/about-us',
        '/membership',
        '/dramas',
        '/terms-of-service',
        '/privacy-policy',
        '/refund-policy',
        '/vip',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic drama routes
    const movieRoutes = movieData.map((movie) => ({
        url: `${baseUrl}/dramas/${movie.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...movieRoutes];
}
