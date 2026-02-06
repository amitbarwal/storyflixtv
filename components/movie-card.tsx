import Image from 'next/image';
import { Play } from 'lucide-react';

interface MovieCardProps {
    title: string;
    imageUrl: string;
    genres: string[];
}

export function MovieCard({ title, imageUrl, genres }: MovieCardProps) {
    return (
        <div className="group relative cursor-pointer sm:w-64 w-full mx-auto">
            {/* Card Image Container */}
            <div className="aspect-[2/3] relative rounded-2xl overflow-hidden glass-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-900/20 border-white/5">
                {/* Placeholder background to reduce layout shift visual impact */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse -z-10" />

                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 hover:bg-blue-600 hover:border-blue-500 transition-all transform hover:scale-110 shadow-lg">
                        <Play className="w-8 h-8 fill-white text-white ml-1" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">
                <h3 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors line-clamp-1">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {genres.slice(0, 3).map((genre) => (
                        <span
                            key={genre}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
