'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';
import { Movie } from '@/lib/movieData';
import { useMediaQuery } from '@/hooks/use-media-query';

interface MustWatchCardProps {
    movie: Movie;
}

export function MustWatchCard({ movie }: MustWatchCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    useEffect(() => {
        if (isHovered && isDesktop) {
            timeoutRef.current = setTimeout(() => {
                setShouldPlay(true);
            }, 800);
        } else {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setShouldPlay(false);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isHovered, isDesktop]);

    const embedBaseUrl = movie.videoUrl ? getYouTubeEmbedUrl(movie.videoUrl) : null;
    const videoId = movie.videoUrl ? getYouTubeId(movie.videoUrl) : null;
    const previewUrl = embedBaseUrl && videoId
        ? `${embedBaseUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${videoId}&playsinline=1`
        : '';

    return (
        <Link
            href={`/dramas/${movie.slug}`}
            className="group relative block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-[16/9] sm:aspect-[2/3] relative rounded-2xl overflow-hidden glass-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-pink-500/10 border-white/5 bg-gray-900">

                {/* Video Preview on Hover - Only load iframe if actually hovering and delay passed */}
                {shouldPlay && previewUrl ? (
                    <div className="absolute inset-0 z-10 bg-black animate-in fade-in duration-300">
                        <iframe
                            src={previewUrl}
                            className="w-full h-full object-cover pointer-events-none"
                            title={movie.title}
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {/* Gradient Overlay */}
                {!shouldPlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300 z-20 pointer-events-none" />
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 w-full z-30 pointer-events-none">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-pink-400 transition-colors">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-pink-400 font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-pink-400" /> {movie.rating} Rating
                        </span>
                        <span>•</span>
                        <span>{movie.genres[0]}</span>
                    </div>
                </div>

                {/* Play Button Overlay - Only show if NOT hovering/playing video */}
                {!shouldPlay && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:bg-pink-600 group-hover:border-pink-500 transition-all transform scale-90 group-hover:scale-100 shadow-xl">
                            <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}
