import { Play, Star, Smartphone, Zap, Film, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { MovieCard } from '@/components/movie-card';
import { movieData } from '@/lib/movieData';

export const metadata: Metadata = {
  title: "Home",
  description: "Watch the latest short movies, web series, and reels. Instant entertainment on StoryFlix TV.",
  openGraph: {
    title: "Instant Entertainment, Anytime, Anywhere | StoryFlix TV",
    description: "Watch high-quality short movies and series for just 2rs.",
  }
};

export default function Home() {
  // Use the first 5 movies for featured and must watch sections
  const featuredMovies = movieData;
  const mustWatch = movieData;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950 to-gray-950 text-white selection:bg-indigo-500/30 pb-20">

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-16 px-4 md:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium backdrop-blur-sm mx-auto">
            <Zap className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
            <span className="tracking-wide uppercase text-xs font-bold">New Releases Live</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Instant Entertainment, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Anytime, Anywhere!
            </span>
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stream high-quality short movies, web series, and exclusive originals.
            Bite-sized entertainment designed for your busy lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/membership" className="w-full sm:w-auto">
              <Button className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 border border-white/10">
                <Play className="w-5 h-5 mr-3 fill-white" />
                free Membership
              </Button>
            </Link>

            <Button variant="glass" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto text-gray-300 pointer-events-none opacity-80 backdrop-blur-md">
              <Smartphone className="w-5 h-5 mr-3" />
              App Launch Soon
            </Button>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Featured Moves Section */}
      <section className="py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Film className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-white">Featured Movies</h2>
            </div>
            <Link href="/movies" className="hidden sm:inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              View All <TrendingUp className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Must Watch Section */}
      <section className="py-6 md:py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Star className="w-6 h-6 text-pink-400 fill-pink-400/20" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-white">Must Watch</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
            {mustWatch.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.imageUrl}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
