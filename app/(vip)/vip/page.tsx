import { Play, Star, ShieldCheck, Zap, TrendingUp, Trophy } from 'lucide-react';
import { movieData } from '@/lib/movieData';
import Image from 'next/image';

export default function VipPage() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-6 md:py-10 text-center overflow-hidden selection:bg-indigo-500/30">
            {/* Movie Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 p-4 h-full overflow-hidden">
                    {movieData.map((movie, index) => (
                        <div key={movie.id} className="relative aspect-[2/3] rounded-lg overflow-hidden">
                            <Image
                                src={movie.imageUrl}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Focus */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-black to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03] pointer-events-none" />
            </div>

            <main className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-5 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* 1. Headline & 2. Sub-heading */}
                <header className="space-y-3 md:space-y-4 w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-xl">
                        <Trophy className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                        Exclusive VIP Access
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight text-white px-2">
                        Unlock Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-600">
                            Entertainment for ₹2
                        </span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-400 font-medium max-w-lg mx-auto leading-relaxed px-4">
                        Watch unlimited free shows and <span className="text-white border-b border-indigo-500/50">exclusive cinematic content</span>
                    </p>
                </header>

                {/* 3. Video Core - No Play Button Overlay */}
                <section className="w-[90%] md:w-full max-w-[700px] relative group">
                    <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-[20px] md:rounded-[32px] blur-xl md:blur-2xl transition duration-1000 group-hover:opacity-100 opacity-50"></div>
                    <div className="relative w-full aspect-video rounded-[16px] md:rounded-[32px] overflow-hidden bg-black border border-white/5 shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/kntQeikX4r4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=kntQeikX4r4&playsinline=1"
                            className="w-full h-full object-cover pointer-events-none scale-105"
                            title="StoryFlix TV VIP Preview"
                            allow="autoplay; encrypted-media"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Overlay Meta */}
                        <div className="absolute bottom-3 md:bottom-6 left-0 right-0 flex justify-center gap-2 md:gap-6 px-4">
                            <div className="flex items-center gap-1.5 md:gap-2 bg-black/60 backdrop-blur-2xl border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-2xl">
                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white">1 Crore+ Fans</span>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2 bg-black/60 backdrop-blur-2xl border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-2xl">
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-500 text-yellow-500" />
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white">4.9 ⭐ Rating</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Membership Benefits */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 w-full max-w-2xl px-2 md:px-0">
                    {[
                        { title: "Unlimited Access", icon: Zap, bg: "bg-indigo-500/10" },
                        { title: "Ad-Free Forever", icon: ShieldCheck, bg: "bg-purple-500/10" },
                        { title: "Global Releases", icon: Trophy, bg: "bg-orange-500/10" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center md:flex-col justify-start md:justify-center gap-3 p-3 md:p-4 rounded-[16px] md:rounded-[20px] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                            <div className={`p-2 md:p-2.5 rounded-xl ${item.bg} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                            </div>
                            <span className="text-xs md:text-sm font-black text-gray-200 tracking-tight uppercase whitespace-nowrap">{item.title}</span>
                        </div>
                    ))}
                </section>

                {/* 5. CTA Button */}
                <footer className="w-full pt-2 md:pt-3 space-y-3 md:space-y-4 pb-6">
                    <button className="group relative w-full md:w-auto px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-indigo-600 text-white font-black text-sm md:text-base shadow-[0_15px_40px_-10px_rgba(79,70,229,0.5)] hover:bg-indigo-500 transition-all hover:scale-[1.02] active:scale-95 overflow-hidden ring-1 ring-white/20">
                        <span className="relative z-10 flex items-center justify-center gap-2 tracking-tight uppercase">
                            START FREE TRIAL
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine transition-all duration-1000" />
                    </button>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 text-gray-500 font-bold text-[8px] md:text-[10px] uppercase tracking-wider">
                        <span className="flex items-center gap-1">No Contracts</span>
                        <div className="w-1 h-1 rounded-full bg-indigo-600/30" />
                        <span className="flex items-center gap-1">Instant Activation</span>
                        <div className="w-1 h-1 rounded-full bg-indigo-600/30" />
                        <span className="flex items-center gap-1 text-indigo-400">Cancel Anytime</span>
                    </div>
                </footer>

            </main>
        </div>
    );
}
