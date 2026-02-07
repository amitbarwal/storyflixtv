import { Play, Star, Smartphone, Zap, Film, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { MovieCard } from '@/components/movie-card';

export const metadata: Metadata = {
  title: "Home",
  description: "Watch the latest short movies, web series, and reels. Instant entertainment on StoryFlix TV.",
  openGraph: {
    title: "Instant Entertainment, Anytime, Anywhere | StoryFlix TV",
    description: "Watch high-quality short movies and series for just 2rs.",
  }
};

export default function Home() {
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

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950 to-gray-950 text-white selection:bg-indigo-500/30 pb-20">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium backdrop-blur-sm mx-auto">
            <Zap className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
            <span className="tracking-wide uppercase text-xs font-bold">New Releases Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Instant Entertainment, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Anytime, Anywhere!
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stream high-quality short movies, web series, and exclusive originals.
            Bite-sized entertainment designed for your busy lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="/membership">
              <Button className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 border border-white/10">
                <Play className="w-5 h-5 mr-3 fill-white" />
                Free Membership
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
      </section >

      {/* Featured Moves Section */}
      < section className="py-12 px-6" >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Film className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Featured Movies</h2>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              View All <TrendingUp className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie, i) => (
              <MovieCard
                key={i}
                title={movie.title}
                imageUrl={movie.image}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      </section >

      {/* Must Watch Section */}
      < section className="py-12 px-6" >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Star className="w-6 h-6 text-pink-400 fill-pink-400/20" />
              </div>
              <h2 className="text-3xl font-bold text-white">Must Watch</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mustWatch.map((movie, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[16/9] sm:aspect-[2/3] relative rounded-2xl overflow-hidden glass-card transition-all duration-300 group-hover:-translate-y-2  group-hover:shadow-pink-500/20 border-white/5">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-90 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="font-bold text-lg mb-1">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-pink-400 font-bold">{movie.rating} Rating</span>
                      <span>•</span>
                      <span>{movie.genres[0]}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

    </div >
  );
}
