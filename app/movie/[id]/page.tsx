import { movieData } from '@/lib/movieData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Play, Share2, Plus, Star, Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';

interface MovieDetailProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: MovieDetailProps): Promise<Metadata> {
    const movie = movieData.find((m) => m.id === params.id);

    if (!movie) {
        return {
            title: "Movie Not Found",
        };
    }

    return {
        title: `${movie.title} | a2zmovie`,
        description: movie.description,
        openGraph: {
            title: `${movie.title} | a2zmovie`,
            description: movie.description,
            images: [movie.imageUrl],
            type: "video.movie",
        },
        twitter: {
            card: "summary_large_image",
            title: movie.title,
            description: movie.description,
            images: [movie.imageUrl],
        },
    };
}

// Generate static params for all known movies to optimize build
export async function generateStaticParams() {
    return movieData.map((movie) => ({
        id: movie.id,
    }));
}

export default function MovieDetailPage({ params }: MovieDetailProps) {
    const movie = movieData.find((m) => m.id === params.id);

    if (!movie) {
        notFound();
    }

    return (
        <div className="relative min-h-[calc(100vh-80px)]">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 -z-10 h-[70vh] w-full overflow-hidden">
                <Image
                    src={movie.imageUrl}
                    alt={movie.title}
                    fill
                    className="object-cover blur-[10px] opacity-30 scale-110"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-950/80 to-gray-950" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">

                    {/* Poster Image */}
                    <div className="relative aspect-[2/3] rounded-2xl overflow-hidden glass-card shadow-2xl shadow-indigo-500/10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <Image
                            src={movie.imageUrl}
                            alt={movie.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/* Movie Details */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{movie.title}</h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300">
                                <span className="flex items-center text-yellow-400 font-bold px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20">
                                    <Star className="w-4 h-4 mr-1 fill-yellow-400" /> {movie.rating || "N/A"}
                                </span>
                                <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1.5 opacity-70" /> {movie.duration || "N/A"}
                                </span>
                                <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1.5 opacity-70" /> 2024
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <span key={genre} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                                    {genre}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                            {movie.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="h-14 px-8 text-lg rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25">
                                <Play className="w-5 h-5 mr-2 fill-white" />
                                Watch Now
                            </Button>

                            <Button variant="outline" className="h-14 w-14 rounded-full p-0 border-white/20 hover:bg-white/10">
                                <Plus className="w-6 h-6" />
                            </Button>
                            <Button variant="outline" className="h-14 w-14 rounded-full p-0 border-white/20 hover:bg-white/10">
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
