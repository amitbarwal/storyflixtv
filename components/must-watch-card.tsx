'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';
import { Movie } from '@/lib/movieData';

interface MustWatchCardProps {
    movie: Movie;
}

export function MustWatchCard({ movie }: MustWatchCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const embedBaseUrl = movie.videoUrl ? getYouTubeEmbedUrl(movie.videoUrl) : null;
    const videoId = movie.videoUrl ? getYouTubeId(movie.videoUrl) : null;
    const previewUrl = embedBaseUrl && videoId
        ? `${embedBaseUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${videoId}`
        : '';

    return (
        <Link
            href={`/movies/${movie.slug}`}
            className="group relative block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-[16/9] sm:aspect-[2/3] relative rounded-2xl overflow-hidden glass-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-pink-500/20 border-white/5 bg-gray-900">

                {/* Video Preview on Hover */}
                {isHovered && previewUrl ? (
                    <div className="absolute inset-0 z-10 bg-black">
                        <iframe
                            src={previewUrl}
                            className="w-full h-full object-cover pointer-events-none"
                            title={movie.title}
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <Image
                        src={movie.imageUrl}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-90 transition-opacity duration-300 z-20 pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 w-full z-30 pointer-events-none">
                    <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-pink-400 font-bold">{movie.rating} Rating</span>
                        <span>•</span>
                        <span>{movie.genres[0]}</span>
                    </div>
                </div>

                {/* Play Button Overlay - Only show if NOT hovering/playing video */}
                {(!isHovered || !previewUrl) && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                        <Play className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                )}
            </div>
        </Link>
    );
}
