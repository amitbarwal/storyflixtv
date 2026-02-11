<<<<<<< HEAD
'use client';

=======
>>>>>>> 783623ae04e38ef5479075a9dea8328748be2ee2
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { getYouTubeEmbedUrl, getYouTubeId } from '@/lib/utils';

interface MovieCardProps {
    id: string;
    title: string;
    imageUrl: string;
    genres: string[];
    slug: string;
    videoUrl?: string; // Optional for now to not break usage without it
}

<<<<<<< HEAD
export function MovieCard({ title, imageUrl, genres, slug, videoUrl }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Construct autoplay URL for hover preview
    // Ensure muted=1 for autoplay to work in most browsers without interaction
    const embedBaseUrl = videoUrl ? getYouTubeEmbedUrl(videoUrl) : null;
    const videoId = videoUrl ? getYouTubeId(videoUrl) : null;
    const previewUrl = embedBaseUrl && videoId
        ? `${embedBaseUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${videoId}`
        : '';

    return (
        <Link
            href={`/movies/${slug}`}
            className="group relative cursor-pointer block sm:w-64 w-full mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Image Container */}
            <div className="aspect-[2/3] relative rounded-2xl overflow-hidden glass-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-900/20 border-white/5 bg-gray-900">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse -z-10" />

                {/* Video Preview on Hover */}
                {isHovered && videoUrl ? (
                    <div className="absolute inset-0 z-20 bg-black">
                        <iframe
                            src={previewUrl}
                            className="w-full h-full object-cover pointer-events-none" // pointer-events-none allows clicking through to the Link
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
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                )}

                {/* Gradient Overlay (only if not playing video) */}
                {!isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                )}

                {/* Play Button Overlay (only if not playing video) */}
                {!isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 hover:bg-blue-600 hover:border-blue-500 transition-all transform hover:scale-110 shadow-lg">
                            <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </button>
                    </div>
                )}
=======
export function MovieCard({ id, title, imageUrl, genres }: MovieCardProps) {
    return (
        <Link href={`/movies/${id}`} className="group relative cursor-pointer w-full block">
            {/* Card Image Container */}
            <div className="aspect-[2/3] relative rounded-xl overflow-hidden glass-card transition-all duration-300 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl md:group-hover:shadow-blue-900/20 border-white/5">
                {/* Placeholder background to reduce layout shift visual impact */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse -z-10" />

                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 md:group-hover:opacity-60 transition-opacity duration-300" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 hover:bg-blue-600 hover:border-blue-500 transition-all transform hover:scale-110 shadow-lg">
                        <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                    </button>
                </div>
>>>>>>> 783623ae04e38ef5479075a9dea8328748be2ee2
            </div>

            {/* Content */}
            <div className="mt-2 space-y-1">
                <h3 className="font-bold text-sm md:text-base leading-tight md:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                    {genres.slice(0, 3).map((genre) => (
                        <span
                            key={genre}
                            className="text-[9px] md:text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 md:group-hover:border-white/10 transition-colors"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
