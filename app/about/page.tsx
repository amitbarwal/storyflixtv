import { Metadata } from 'next';
import { Film, Zap, Globe, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Us | StoryFlix TV",
    description: "Learn more about StoryFlix TV, your destination for short movies, reels, and web series.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 -z-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />

                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        About <span className="text-indigo-400">StoryFlix</span>TV
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Redefining entertainment for the modern era. We bring you the best stories in the shortest time.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            StoryFlix TV is a next-generation streaming platform designed for those who value their time but crave high-quality entertainment.
                            In a world where attention spans are shrinking, we deliver impactful storytelling through bite-sized content.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Whether you&apos;re on a coffee break, commuting, or just have a few minutes to spare, we ensure you have access to
                            premium entertainment that fits your schedule.
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl">
                        {/* Decorative gradient/placeholder since we don't have a specific team image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Film className="w-24 h-24 text-white/10" />
                        </div>
                    </div>
                </div>

                {/* Focus Areas */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                            <Film className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Short Movies</h3>
                        <p className="text-gray-400">
                            Award-winning short films from independent creators across the globe. Stories that leave a mark in under 20 minutes.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Web Series</h3>
                        <p className="text-gray-400">
                            Binge-worthy mini-series with gripping plots. No fillers, just pure entertainment designed to keep you hooked.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                            <Heart className="w-6 h-6 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Curated Reels</h3>
                        <p className="text-gray-400">
                            A handpicked selection of emotional, funny, and inspiring vertical video content for quick dopamine hits.
                        </p>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="text-center max-w-3xl mx-auto glass-card p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10" />
                    <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6">
                        <Globe className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-300 leading-relaxed italic">
                        &quot;To democratize storytelling by providing a platform where short-form content is celebrated as a primary form of entertainment,
                        making instant joy accessible to everyone, anywhere.&quot;
                    </p>
                </div>
            </section>
        </div>
    );
}
