'use client';

import { movieData, getAllMovies, Movie } from '@/lib/movieData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Star, Clock, Lock, Unlock } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getYouTubeEmbedUrl } from '@/lib/utils';
import { useEffect, useState } from 'react';

// 'use client' is necessary to access localStorage
// Metadata generation for dynamic localStorage content is not possible in server component here.
// Only static routes can have metadata pre-generated in this specific client-side only setup.

interface MoviePageProps {
    params: {
        id: string; // This [id] folder captures the slug
    };
}

export default function MoviePage({ params }: MoviePageProps) {
    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [isMember, setIsMember] = useState(false);

    useEffect(() => {
        // Find movie logic
        let foundMovie = movieData.find((m: Movie) => m.slug === params.id);

        if (!foundMovie) {
            const allMovies = getAllMovies();
            foundMovie = allMovies.find((m: Movie) => m.slug === params.id);
        }

        setMovie(foundMovie);
        setLoading(false);

        // Check membership status (Mock or persistent check)
        // For now, we default to false (non-member) as per request context implying we need to show the 'lock' state usually.
        // We can check localStorage if there's a mocked 'isMember' flag for demo purposes.
        const storedMember = localStorage.getItem('isMember');
        if (storedMember === 'true') {
            setIsMember(true);
        }
    }, [params.id]);

    if (loading) {
        return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Loading...</div>;
    }

    if (!movie) {
        notFound();
    }

    // Determine which URL to display
    // If not a member, check if there is a teaser.
    // If there is a teaser, we show it, but also show a persistent 'Unlock' CTA.
    const hasTeaser = !!movie.teaserUrl;

    // Video Source Logic:
    // 1. Member: Always show Full Video
    // 2. Non-Member + Teaser: Show Teaser
    // 3. Non-Member + No Teaser: Show Full Video URL but we will BLOCK it with overlay (or show nothing/poster + lock)
    let videoSource = movie.videoUrl;

    if (!isMember && hasTeaser) {
        videoSource = movie.teaserUrl!;
    }

    const showLockedOverlay = !isMember && !hasTeaser;

    // Helper for embed
    const youtubeEmbedUrl = getYouTubeEmbedUrl(videoSource || '');
    const isEmbed = !!youtubeEmbedUrl || (videoSource && (videoSource.includes('vimeo.com') || videoSource.includes('youtube.com') || videoSource.includes('youtu.be')));

    // Autoplay logic:
    // If watching teaser (non-member), autoplay.
    // If watching full video (member), autoplay.
    // If standard user lands on page, autoplay is generally good for engagement.
    const finalVideoUrl = youtubeEmbedUrl
        ? `${youtubeEmbedUrl}?autoplay=1&mute=0&controls=1&rel=0`
        : videoSource;

    const handleUnlock = () => {
        window.location.href = '/vip';
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white pb-20 pt-20">
            <div className="relative w-full aspect-video bg-black group">

                {showLockedOverlay ? (
                    // LOCKED STATE (No teaser available) - Show poster + Lock Overlay
                    <div className="absolute inset-0 z-10">
                        {/* Background Poster (Blurred) */}
                        <img
                            src={movie.imageUrl}
                            alt={movie.title}
                            className="w-full h-full object-cover opacity-30 blur-sm"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                            <Lock className="w-16 h-16 text-white/50 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-6">Premium Content Locked</h3>
                            <button
                                onClick={handleUnlock}
                                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center gap-2"
                            >
                                <Unlock className="w-5 h-5" />
                                Unlock Full Video
                            </button>
                        </div>
                    </div>
                ) : (
                    // PLAYER STATE (Teaser or Full)
                    <>
                        {isEmbed && youtubeEmbedUrl ? (
                            <iframe
                                src={finalVideoUrl}
                                title={movie.title}
                                className="w-full h-full object-cover"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="w-full h-full relative">
                                <video
                                    src={videoSource}
                                    poster={movie.imageUrl}
                                    controls // Always allow controls if playing
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Teaser Badge */}
                        {!isMember && hasTeaser && (
                            <div className="absolute top-4 right-4 z-20 pointer-events-none">
                                <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-black uppercase tracking-wider rounded shadow-lg flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Teaser Preview
                                </span>
                            </div>
                        )}

                        {/* Persistent Unlock Overlay for Non-Members (watch teaser but CTAs available) */}
                        {!isMember && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-auto">
                                <button
                                    onClick={handleUnlock}
                                    className="px-8 py-3 bg-indigo-600/90 hover:bg-indigo-600 text-white font-bold rounded-full backdrop-blur-md transition-all shadow-lg shadow-black/50 flex items-center gap-2 animate-bounce-subtle"
                                >
                                    <Unlock className="w-4 h-4" />
                                    Unlock Full Movie
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Back Button */}
                <Link
                    href="/dramas"
                    className="absolute top-4 left-4 md:left-8 z-30 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12">

                    {/* Poster Column */}
                    <div className="hidden md:block relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
                        <div className="relative w-full h-full">
                            <img
                                src={movie.imageUrl}
                                alt={movie.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Details Column */}
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
                                {movie.durationLimit && movie.durationLimit > 0 && (
                                    <span className="text-indigo-400 text-xs border border-indigo-500/30 px-2 py-0.5 rounded">
                                        Limit: {movie.durationLimit}m
                                    </span>
                                )}
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

                        {!isMember && (
                            <div className="p-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Watch the Full Story</h4>
                                    <p className="text-gray-300 text-sm">Join our VIP membership to unlock all premium dramas and exclusive content.</p>
                                </div>
                                <button
                                    onClick={handleUnlock}
                                    className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg active:scale-95 whitespace-nowrap"
                                >
                                    Get VIP Access
                                </button>
                            </div>
                        )}

                        <div className="pt-6 border-t border-white/10">
                            {!isMember ? (
                                <button
                                    onClick={handleUnlock}
                                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
                                >
                                    <Unlock className="w-5 h-5" />
                                    Unlock Full Movie
                                </button>
                            ) : (
                                <button
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <Play className="w-5 h-5 fill-black" />
                                    Watch Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
