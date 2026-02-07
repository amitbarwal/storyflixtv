import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Zap, Film, TrendingUp, Star, Smartphone, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "StoryFlix TV | Watch Best Short Movies & Web Series",
  description: "Discover the best short movies, mini-series, and dramas. Cinematic storytelling in bite-sized formats.",
};

// Mock Data
const featuredMovies = [
  { title: "Neon Nights", genres: ["Sci-Fi", "Thriller"], rating: "4.9", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80" },
  { title: "The Last Horizon", genres: ["Adventure", "Drama"], rating: "4.7", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" },
  { title: "Cyber Heist", genres: ["Action", "Crime"], rating: "4.8", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80" },
  { title: "Echoes of Time", genres: ["Mystery", "Sci-Fi"], rating: "4.6", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=400&q=80" },
];

const mustWatch = [
  { title: "Urban Legends", genres: ["Horror", "Anthology"], rating: "4.9", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&w=400&q=80" },
  { title: "Velocity", genres: ["Action", "Racing"], rating: "4.5", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=400&q=80" },
  { title: "Silent Deep", genres: ["Thriller", "Survival"], rating: "4.8", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" },
  { title: "Love & Glitch", genres: ["Romance", "Comedy"], rating: "4.7", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-zinc-950 to-zinc-950 text-white selection:bg-indigo-500/30">

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 animate-in fade-in zoom-in duration-700">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium backdrop-blur-sm mx-auto shadow-lg shadow-indigo-500/10 hover:bg-white/10 transition-colors cursor-default">
            <Zap className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
            <span className="tracking-wide uppercase text-xs font-bold">New Stories Daily</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Instant Entertainment, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              Anytime, Anywhere!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover a world of bite-sized cinema. From gripping dramas to hilarious web series,
            StoryFlixTV delivers premium short-form content designed for your busy lifestyle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/25 transition-all hover:scale-105">
              <Play className="w-5 h-5 mr-2 fill-white" />
              Start Free Membership
            </Button>

            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white/20 text-gray-300 hover:bg-white/5 hover:text-white backdrop-blur-sm transition-all hover:scale-105">
              <Smartphone className="w-5 h-5 mr-3" />
              App Launch Soon
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/20">
                <Film className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white leading-tight">Featured Stories</h2>
                <p className="text-sm text-gray-500 hidden sm:block">Curated selection just for you</p>
              </div>
            </div>
            <Link href="/featured" className="hidden sm:inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group">
              View All <TrendingUp className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMovies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Must Watch Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-pink-500/20 rounded-xl border border-pink-500/20">
                <Star className="w-6 h-6 text-pink-400 fill-pink-400/20" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white leading-tight">Must Watch</h2>
                <p className="text-sm text-gray-500 hidden sm:block">Highly rated by viewers</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mustWatch.map((movie, i) => (
              <MovieCard key={i} movie={movie} variant="landscape" />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Reusable Movie Card Component (Internal for simplicity, can be moved to components folder)
function MovieCard({ movie, variant = "portrait" }: { movie: any, variant?: "portrait" | "landscape" }) {
  return (
    <div className="group relative cursor-pointer">
      {/* Card Image Container */}
      <div className={cn(
        "relative rounded-2xl overflow-hidden glass transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 border-white/5",
        variant === "portrait" ? "aspect-[2/3]" : "aspect-[16/9] sm:aspect-[2/3]"
      )}>
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all transform scale-90 group-hover:scale-100 shadow-xl">
            <Play className="w-8 h-8 fill-white text-white ml-1" />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold text-yellow-400 z-20">
          <Star className="w-3 h-3 fill-yellow-400" />
          {movie.rating}
        </div>
      </div>

      {/* Content Info */}
      <div className="mt-4 space-y-1.5 px-1">
        <h3 className="font-bold text-lg leading-tight group-hover:text-indigo-400 transition-colors line-clamp-1 text-white">
          {movie.title}
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">{movie.genres[0]}</span>
          {movie.genres[1] && <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">{movie.genres[1]}</span>}
        </div>
      </div>
    </div>
  )
}
