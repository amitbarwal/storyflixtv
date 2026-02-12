'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';

interface MovieCardProps {
    id: string;
    title: string;
    imageUrl: string;
    genres: string[];
    slug: string;
    videoUrl?: string;
}

export function MovieCard({ title, imageUrl, genres, slug, videoUrl }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    // Delay playback to prevent accidental triggers while scrolling
    useEffect(() => {
        if (isHovered && isDesktop) {
            timeoutRef.current = setTimeout(() => {
                setShouldPlay(true);
            }, 800); // 800ms delay before playing
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setShouldPlay(false);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isHovered, isDesktop]);

    // Construct autoplay URL for hover preview
    const embedBaseUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;
    const videoId = videoUrl ? getYouTubeId(videoUrl) : null;
    // Add playsinline=1, modestbranding=1, rel=0 to improve performance and UX
    const previewUrl = embedBaseUrl && videoId
        ? `${embedBaseUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${videoId}&playsinline=1`
        : '';

    return (
        <Link
            href={`/dramas/${slug}`}
            className="group relative cursor-pointer block w-full mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Image Container */}
            <div className="aspect-[2/3] relative rounded-xl overflow-hidden glass-card transition-all duration-300 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl md:group-hover:shadow-blue-900/20 border-white/5 bg-gray-900">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse -z-10" />

                {/* Video Preview on Hover - Only load iframe if actually hovering and delay passed */}
                {shouldPlay && videoUrl ? (
                    <div className="absolute inset-0 z-20 bg-black animate-in fade-in duration-300">
                        <iframe
                            src={previewUrl}
                            className="w-full h-full object-cover pointer-events-none"
                            title={title}
                            allow="autoplay; encrypted-media"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={false}
                    />
                )}

                {/* Gradient Overlay (only if not playing video) */}
                {!shouldPlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 md:group-hover:opacity-60 transition-opacity duration-300" />
                )}

                {/* Play Button Overlay (only if not playing video) */}
                {!shouldPlay && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/30 hover:bg-blue-600 hover:border-blue-500 transition-all transform hover:scale-110 shadow-lg" aria-label={`Play ${title}`}>
                            <Play className="w-6 h-6 md:w-8 md:h-8 fill-white text-white ml-0.5 md:ml-1" />
                        </button>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-3 space-y-1.5">
                <h3 className="font-bold text-sm md:text-base leading-tight md:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                    {genres.slice(0, 3).map((genre) => (
                        <span
                            key={genre}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 md:group-hover:border-white/10 transition-colors"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
