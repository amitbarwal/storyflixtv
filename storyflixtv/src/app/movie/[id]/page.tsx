import { movieData } from '@/lib/movieData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Play, Share2, Plus, Star, Calendar, Clock, MonitorPlay } from 'lucide-react';
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
        title: `${movie.title} | StoryFlix TV`,
        description: movie.description,
        openGraph: {
            title: `${movie.title} - Watch on StoryFlix TV`,
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
        <div className="relative min-h-screen bg-zinc-950 text-white pb-20">
            {/* Background Backdrop */}
            <div className="absolute inset-0 -z-10 h-[60vh] w-full overflow-hidden">
                <Image
                    src={movie.imageUrl}
                    alt={movie.title}
                    fill
                    className="object-cover blur-3xl opacity-20 scale-110"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-40">
                <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">

                    {/* Poster Image */}
                    <div className="relative aspect-[2/3] w-full max-w-[350px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10 animate-in fade-in slide-in-from-bottom-5 duration-700 bg-zinc-900">
                        <Image
                            src={movie.imageUrl}
                            alt={movie.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 350px"
                        />

                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 text-yellow-400 border border-white/10">
                            <Star className="w-3 h-3 fill-yellow-400" /> {movie.rating}
                        </div>
                    </div>

                    {/* Movie Details */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 lg:pt-4">
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-2">
                                {movie.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm md:text-base text-gray-300 font-medium">
                                <span className="flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <Clock className="w-4 h-4 mr-2 opacity-70" /> {movie.duration}
                                </span>
                                <span className="flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <Calendar className="w-4 h-4 mr-2 opacity-70" /> {movie.year}
                                </span>
                                <span className="flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <MonitorPlay className="w-4 h-4 mr-2 opacity-70" /> HD
                                </span>
                            </div>
                        </div>

                        {/* Genres */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                            {movie.genres.map((genre) => (
                                <span key={genre} className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide hover:bg-indigo-500/20 transition-colors cursor-default">
                                    {genre}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                            {movie.description}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 transition-all hover:scale-105">
                                <Play className="w-5 h-5 mr-3 fill-white" />
                                Watch Now
                            </Button>

                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105">
                                    <Plus className="w-6 h-6 text-gray-300" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105">
                                    <Share2 className="w-5 h-5 text-gray-300" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
