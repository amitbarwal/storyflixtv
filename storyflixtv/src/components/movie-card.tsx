import Image from "next/image";
import { Play } from "lucide-react";

interface MovieCardProps {
    title: string;
    imageUrl: string;
    genres: string[];
}

export function MovieCard({ title, imageUrl, genres }: MovieCardProps) {
    return (
        <div className="group relative cursor-pointer w-full">
            {/* Image Container */}
            <div className="aspect-[2/3] relative rounded-xl overflow-hidden bg-zinc-900 border border-white/5 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-indigo-500/20">
                <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300 hover:bg-white/20">
                        <Play className="w-8 h-8 fill-white text-white pl-1" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-3 space-y-2">
                <h3 className="font-bold text-white text-lg leading-tight group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                    {genres.slice(0, 3).map((genre) => (
                        <span key={genre} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
