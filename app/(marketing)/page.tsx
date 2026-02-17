'use client';

import { Star, Film, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { MovieCard } from '@/components/movie-card';
import { MustWatchCard } from '@/components/must-watch-card';
import { movieData } from '@/lib/movieData';
import { HeroSlider } from '@/components/hero-slider';

export default function Home() {
  const heroMovies = movieData.slice(0, 5);
  const featuredMovies = movieData;
  const mustWatch = movieData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30">

      {/* Hero Section - Slider */}
      <HeroSlider movies={heroMovies} />

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
            <Link href="/dramas" className="hidden sm:inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group">
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
