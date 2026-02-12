'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Movie } from '@/lib/movieData';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';

interface HeroSliderProps {
    movies: Movie[];
}

export function HeroSlider({ movies }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, movies.length]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isTransitioning, movies.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 8000); // Increased time for video viewing
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-black pt-5">

            {/* Slides */}
            <div className="relative h-full w-full">
                {movies.map((movie, index) => {
                    const videoId = getYouTubeId(movie.videoUrl);
                    const embedUrl = getYouTubeEmbedUrl(movie.videoUrl);
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={movie.id}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            {/* Background Container */}
                            <div className="relative h-full w-full">
                                {/* Video Background (Only for active slide) */}
                                {isActive && videoId && (
                                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                        <iframe
                                            src={`${embedUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}&playsinline=1&enablejsapi=1`}
                                            className="w-full h-full scale-[1.5] object-cover opacity-60"
                                            allow="autoplay; encrypted-media"
                                        />
                                    </div>
                                )}

                                {/* Fallback/Underlay Image */}
                                <Image
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    fill
                                    className={`object-cover object-center transition-transform duration-[10000ms] ease-linear ${isActive ? 'scale-110' : 'scale-100'
                                        } ${isActive && videoId ? 'opacity-40' : 'opacity-100'}`}
                                    priority={index === 0}
                                />

                                {/* Overlay Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-[1]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
                                <div className={`max-w-2xl space-y-4 md:space-y-6 transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}>
                                    {/* Badge */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                        <Zap className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
                                        Featured Drama
                                    </div>

                                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white drop-shadow-2xl">
                                        {movie.title}
                                    </h1>

                                    <p className="text-xs md:text-lg text-gray-300 font-medium line-clamp-3 md:line-clamp-none max-w-xl leading-relaxed">
                                        {movie.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2 md:pt-4">
                                        <Link href={`/dramas/${movie.slug}`}>
                                            <Button className="h-11 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/25 transition-all hover:scale-105">
                                                <Play className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 fill-white" />
                                                Watch Now
                                            </Button>
                                        </Link>
                                        <Link href="/membership">
                                            <Button variant="outline" className="h-11 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all">
                                                VIP Access
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 z-30 flex items-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all active:scale-95"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 border border-blue-500/50 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-6 md:left-12 lg:left-24 z-30 flex items-center gap-2">
                {movies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (!isTransitioning) {
                                setIsTransitioning(true);
                                setCurrentIndex(index);
                                setTimeout(() => setIsTransitioning(false), 500);
                            }
                        }}
                        className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
