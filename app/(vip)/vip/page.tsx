import { Play, Star, ShieldCheck, Zap, TrendingUp, Trophy } from 'lucide-react';

export default function VipPage() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-8 md:py-16 text-center overflow-hidden selection:bg-indigo-500/30">
            {/* Ambient Background Focus */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-black to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03] pointer-events-none" />
            </div>

            <main className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-8 md:gap-14 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* 1. Headline & 2. Sub-heading */}
                <header className="space-y-4 md:space-y-8 w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-xl">
                        <Trophy className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                        Exclusive VIP Access
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-[1000] tracking-tighter leading-[1.0] md:leading-[0.9] text-white">
                        Unlock Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-600">
                            Entertainment for ₹2
                        </span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium max-w-xl mx-auto leading-relaxed px-4">
                        Watch unlimited free shows and <span className="text-white border-b border-indigo-500/50">exclusive cinematic content</span>
                    </p>
                </header>

                {/* 3. Immersive Video Core */}
                <section className="w-full max-w-4xl relative group px-2 md:px-0">
                    <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-[24px] md:rounded-[40px] blur-xl md:blur-2xl transition duration-1000 group-hover:opacity-100 opacity-50"></div>
                    <div className="relative w-full aspect-video rounded-[20px] md:rounded-[48px] overflow-hidden bg-black border border-white/5 shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/kntQeikX4r4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=kntQeikX4r4&playsinline=1"
                            className="w-full h-full object-cover pointer-events-none scale-[1.03] md:scale-105"
                            title="StoryFlix TV VIP Preview"
                            allow="autoplay; encrypted-media"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Overlay Meta */}
                        <div className="absolute bottom-4 md:bottom-10 left-0 right-0 flex justify-center gap-3 md:gap-8 px-4">
                            <div className="flex items-center gap-1.5 md:gap-2 bg-black/60 backdrop-blur-2xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-2xl">
                                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white">1 Crore+ Fans</span>
                            </div>
                            <div className="flex items-center gap-1.5 md:gap-2 bg-black/60 backdrop-blur-2xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-2xl">
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-500 text-yellow-500" />
                                <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-white">4.9 ⭐ Rating</span>
                            </div>
                        </div>

                        {/* Interactive Play Focus */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-14 h-14 md:w-28 md:h-28 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-700 ring-1 ring-white/10">
                                <Play className="w-6 h-6 md:w-12 md:h-12 text-white fill-white shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Membership Benefits */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 w-full max-w-3xl px-2 md:px-0">
                    {[
                        { title: "Unlimited Access", icon: Zap, bg: "bg-indigo-500/10" },
                        { title: "Ad-Free Forever", icon: ShieldCheck, bg: "bg-purple-500/10" },
                        { title: "Global Releases", icon: Trophy, bg: "bg-orange-500/10" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center md:flex-col justify-start md:justify-center gap-4 p-4 md:p-5 rounded-[20px] md:rounded-[24px] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
                            <div className={`p-2.5 md:p-3 rounded-2xl ${item.bg} group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                            </div>
                            <span className="text-sm md:text-lg font-black text-gray-200 tracking-tight uppercase whitespace-nowrap">{item.title}</span>
                        </div>
                    ))}
                </section>

                {/* 5. The Conversion Engine */}
                <footer className="w-full pt-2 md:pt-4 space-y-6 md:space-y-8 pb-8">
                    <button className="group relative w-full md:w-auto md:min-w-[450px] py-5 md:py-10 rounded-full bg-indigo-600 text-white font-black text-xl md:text-5xl shadow-[0_15px_40px_-10px_rgba(79,70,229,0.5)] md:shadow-[0_20px_80px_-15px_rgba(79,70,229,0.7)] hover:bg-indigo-500 transition-all hover:scale-[1.02] md:hover:scale-[1.05] active:scale-95 overflow-hidden ring-1 ring-white/20">
                        <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 tracking-tighter">
                            START FREE TRIAL
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine transition-all duration-1000" />
                    </button>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-10 text-gray-500 font-black text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em]">
                        <span className="flex items-center gap-2">No Contracts</span>
                        <div className="w-1 h-1 rounded-full bg-indigo-600/30" />
                        <span className="flex items-center gap-2">Instant Activation</span>
                        <div className="w-1 h-1 rounded-full bg-indigo-600/30" />
                        <span className="flex items-center gap-2 text-indigo-400">Cancel Anytime</span>
                    </div>
                </footer>

            </main>
        </div>
    );
}
