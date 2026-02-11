import { movieData } from '@/lib/movieData';
import { MovieCard } from '@/components/movie-card';
import { Film } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Movies | StoryFlix TV",
    description: "Explore our collection of the latest movies, web series, and reels on StoryFlix TV.",
};

export default function MoviesPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white pt-20 md:pt-28 pb-8 md:pb-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8 md:mb-12">
                    <div className="p-3 bg-indigo-500/20 rounded-xl">
                        <Film className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">All Movies</h1>
                        <p className="text-sm md:text-base text-gray-400 mt-1">Explore our complete collection of stories.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                    {movieData.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
<<<<<<< HEAD:app/movies/page.tsx
                            slug={movie.slug}
=======
>>>>>>> 783623ae04e38ef5479075a9dea8328748be2ee2:app/(main)/movies/page.tsx
                            title={movie.title}
                            imageUrl={movie.imageUrl}
                            genres={movie.genres}
                            videoUrl={movie.videoUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
