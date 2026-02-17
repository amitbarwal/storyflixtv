'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Play, Info, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Movie } from '@/lib/movieData';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';
import { cn } from '@/lib/utils'; // Assuming cn exists, if not I'll handle it manually

interface HeroSliderProps {
    movies: Movie[];
}

export function HeroSlider({ movies }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressInterval = useRef<NodeJS.Timeout | null>(null);
    const slideDuration = 8000; // 8 seconds

    // Reset progress when slide changes
    useEffect(() => {
        setProgress(0);

        if (progressInterval.current) clearInterval(progressInterval.current);

        const startTime = Date.now();
        progressInterval.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
            setProgress(newProgress);
        }, 50);

        return () => {
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, [currentIndex]);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning, movies.length]);

    // Auto-slide
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, slideDuration);
        return () => clearTimeout(timer);
    }, [nextSlide]);

    const handleThumbnailClick = (index: number) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    if (!movies || movies.length === 0) return null;

    return (
        <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden bg-black text-white group">

            {/* Main Slide Display */}
            <div className="relative h-full w-full">
                {movies.map((movie, index) => {
                    const isActive = index === currentIndex;
                    const videoId = getYouTubeId(movie.videoUrl);
                    const embedUrl = getYouTubeEmbedUrl(movie.videoUrl);

                    return (
                        <div
                            key={movie.id}
                            className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
                                }`}
                        >
                            {/* Background Media */}
                            <div className="absolute inset-0 w-full h-full">
                                <div className="absolute inset-0 bg-black/40 z-[1]" /> {/* Darken base */}

                                {isActive && videoId ? (
                                    <div className="absolute inset-0 w-full h-full">
                                        <iframe
                                            src={`${embedUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&playsinline=1&enablejsapi=1&showinfo=0`}
                                            className="w-full h-full object-cover scale-[1.35] pointer-events-none opacity-80"
                                            allow="autoplay; encrypted-media"
                                        />
                                    </div>
                                ) : (
                                    <img
                                        src={movie.imageUrl}
                                        alt={movie.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                )}

                                {/* Dramatic Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2]" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-[2]" />
                            </div>

                            {/* Hero Content */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-12">
                                <div className={`max-w-4xl space-y-6 md:space-y-8 transform transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                    }`}>

                                    {/* Meta Badges */}
                                    <div className="flex items-center gap-3 animate-fade-in">
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                                            <span className="text-yellow-400">★</span> {movie.rating || "4.8"}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/80 backdrop-blur-md border border-indigo-500/30 text-xs font-bold uppercase tracking-wider text-white">
                                            {movie.genres?.[0] || "Drama"}
                                        </div>
                                        <div className="px-3 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/5 text-xs font-medium uppercase tracking-wider text-gray-300">
                                            {movie.duration || "20m"}
                                        </div>
                                    </div>

                                    {/* Big Title */}
                                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                                        {movie.title}
                                    </h1>

                                    {/* Description */}
                                    <p className="max-w-xl text-lg md:text-xl text-gray-200 font-medium leading-relaxed line-clamp-3 md:line-clamp-2 text-shadow-sm">
                                        {movie.description}
                                    </p>

                                    {/* Actions */}
                                    <div className="flex flex-wrap items-center gap-4 pt-4">
                                        <Link href={`/dramas/${movie.slug}`}>
                                            <button className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all active:scale-95">
                                                <div className="relative">
                                                    <Play className="w-6 h-6 fill-black" />
                                                </div>
                                                <span>Watch Now</span>
                                                <div className="absolute inset-0 rounded-xl ring-2 ring-white/50 group-hover:ring-4 transition-all opacity-0 group-hover:opacity-100" />
                                            </button>
                                        </Link>
                                        <Link href="/dramas">
                                            <button className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                                                <Info className="w-6 h-6" />
                                                <span>More Info</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Thumbnail Navigation (Right Side) */}
            <div className="absolute bottom-8 right-6 md:right-12 z-30 hidden md:flex flex-col gap-4 items-end">
                <div className="flex items-center gap-4">
                    {movies.map((movie, index) => (
                        <button
                            key={movie.id}
                            onClick={() => handleThumbnailClick(index)}
                            className={`group relative h-16 w-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                    ? 'border-indigo-500 scale-110 shadow-xl shadow-indigo-500/20'
                                    : 'border-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                        >
                            <img
                                src={movie.imageUrl}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Running progress bar on active thumb */}
                            {index === currentIndex && (
                                <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 z-10 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                            )}
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Progress & Dots */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex md:hidden justify-center gap-2 px-6">
                {movies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-white/30'
                            }`}
                    />
                ))}
            </div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </section>
    );
}
