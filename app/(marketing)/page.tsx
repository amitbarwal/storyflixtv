import { Play, Star, Smartphone, Zap, Film, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { MovieCard } from '@/components/movie-card';
import { MustWatchCard } from '@/components/must-watch-card';
import { movieData } from '@/lib/movieData';

export const metadata: Metadata = {
  title: "Home",
  description: "Watch the latest short dramas, web series, and reels. Instant entertainment on StoryFlix TV.",
  openGraph: {
    title: "Instant Entertainment, Anytime, Anywhere | StoryFlix TV",
    description: "Watch high-quality short dramas and series for just 2rs.",
  }
};

export default function Home() {
  const featuredMovies = movieData.slice(0, 5);
  const mustWatch = movieData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-gray-950 to-gray-950 text-white selection:bg-indigo-500/30">

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
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Instant Entertainment, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Anytime, Anywhere!
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover a world of bite-sized cinema. From gripping dramas to hilarious web series,
            StoryFlix TV delivers premium short-form content designed for your busy lifestyle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link href="/membership" className="w-full sm:w-auto">
              <Button className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/25 transition-all hover:scale-105">
                <Play className="w-5 h-5 mr-3 fill-white" />
                Start ₹2 Membership
              </Button>
            </Link>

            <Button variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto border-white/20 text-gray-300 pointer-events-none opacity-80 backdrop-blur-sm transition-all">
              <Smartphone className="w-5 h-5 mr-3" />
              App Launch Soon
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dramas Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/20">
                <Film className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Featured Stories</h2>
                <p className="text-sm text-gray-500 hidden sm:block">Curated selection just for you</p>
              </div>
            </div>
            <Link href="/movies" className="hidden sm:inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group">
              View All <TrendingUp className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                slug={movie.slug}
                title={movie.title}
                imageUrl={movie.imageUrl}
                genres={movie.genres}
                videoUrl={movie.videoUrl}
              />
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
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Must Watch</h2>
                <p className="text-sm text-gray-500 hidden sm:block">Highly rated by viewers</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mustWatch.map((movie) => (
              <MustWatchCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
