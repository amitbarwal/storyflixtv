import { MetadataRoute } from 'next';
import { movieData } from '@/lib/movieData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://storyflixtv.com';

    // Core static routes
    const staticRoutes = [
        '',
        '/about',
        '/membership',
        '/movies',
        '/terms',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic movie routes
    const movieRoutes = movieData.map((movie) => ({
        url: `${baseUrl}/movie/${movie.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...movieRoutes];
}
