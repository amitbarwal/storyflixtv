import { movieData, Movie } from '@/lib/movieData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Star, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getYouTubeEmbedUrl } from '@/lib/utils';

interface MoviePageProps {
    params: {
        id: string; // Dynamic route parameter (folder name) is still [id], but we can treat it as slug or rename folder
    };
}

export async function generateStaticParams() {
    return movieData.map((movie: Movie) => ({
        id: movie.slug, // We are pushing slugs into the [id] param
    }));
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
    const movie = movieData.find((m: Movie) => m.slug === params.id); // params.id holds the slug
    if (!movie) {
        return {
            title: 'Movie Not Found',
        };
    }
    return {
        title: `${movie.title} | StoryFlix TV`,
        description: movie.description,
    };
}

export default function MoviePage({ params }: MoviePageProps) {
    const movie = movieData.find((m: Movie) => m.slug === params.id); // params.id holds the slug

    if (!movie) {
        notFound();
    }

    // Determine if video is an embed or direct file
    const youtubeEmbedUrl = getYouTubeEmbedUrl(movie.videoUrl);
    const isEmbed = !!youtubeEmbedUrl || movie.videoUrl.includes('vimeo.com');
    const finalVideoUrl = youtubeEmbedUrl
        ? `${youtubeEmbedUrl}?autoplay=1&mute=1&controls=1&rel=0`
        : movie.videoUrl;

    return (
        <div className="min-h-screen bg-gray-950 text-white pb-20">
            {/* Hero Section with Video/Image */}
            <div className="relative w-full aspect-video md:h-[70vh] max-h-[800px] bg-black">
                {isEmbed ? (
                    <iframe
                        src={finalVideoUrl}
                        title={movie.title}
                        className="w-full h-full object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <video
                        src={movie.videoUrl}
                        poster={movie.imageUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                    />
                )}

                {/* Back Button */}
                <Link
                    href="/movies"
                    className="absolute top-24 left-4 md:left-8 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </Link>
            </div>

            {/* Movie Details */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">

                    {/* Poster (Hidden on mobile as video is main focus, shown on desktop) */}
                    <div className="hidden md:block relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
                        <Image
                            src={movie.imageUrl}
                            alt={movie.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-400">
                                <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    {movie.rating || "N/A"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {movie.duration || "N/A"}
                                </span>
                                <span className="bg-white/10 px-2 py-0.5 rounded text-xs uppercase tracking-wider">
                                    HD
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((genre: string) => (
                                <span
                                    key={genre}
                                    className="px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 text-sm font-medium border border-indigo-500/20"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            {movie.description}
                        </p>

                        <div className="pt-6 border-t border-white/10">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                                <Play className="w-5 h-5 fill-black" />
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
