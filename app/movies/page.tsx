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
        <div className="min-h-screen bg-gray-950 text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <div className="p-3 bg-indigo-500/20 rounded-xl">
                        <Film className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">All Movies</h1>
                        <p className="text-gray-400 mt-1">Explore our complete collection of stories.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {movieData.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            slug={movie.slug}
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
