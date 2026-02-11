import { Check, Play } from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
import { Check, Crown, Play, Star, Zap, Shield, Clock } from 'lucide-react';
import { movieData } from '@/lib/movieData';


=======
>>>>>>> 783623ae04e38ef5479075a9dea8328748be2ee2

export default function VipPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-black text-white px-4 py-12 text-center selection:bg-indigo-500/30">
            {/* Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="relative z-10 max-w-2xl w-full space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Unlock Premium <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            Entertainment for ₹2
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Watch unlimited free shows and exclusive content.
                        Bite-sized entertainment for your busy lifestyle.
                    </p>
                </div>

                {/* Features List */}
                <div className="grid gap-4 max-w-sm mx-auto text-left py-4">
                    {[
                        "Unlimited access to all shows",
                        "Ad-free viewing experience",
                        "Premium exclusive releases"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02]">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                <Check className="w-5 h-5 text-indigo-400" />
                            </div>
                            <span className="font-semibold text-gray-200">{feature}</span>
                        </div>
                    ))}
                </div>

<<<<<<< HEAD
            {/* Main Content Scroll Area */}
            <div className="relative z-10 min-h-screen flex flex-col items-center pb-32 px-4 md:px-6 max-w-lg mx-auto">
                <div className="w-full my-auto flex flex-col items-center gap-8 md:gap-10">

                    {/* Header Block */}
                    <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-semibold tracking-wide text-green-400 uppercase">Trusted by 1 Crore+ Users</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-2xl">
                            Unlock Premium <br />
                            <span className="text-yellow-500">Entertainment</span>
                        </h1>
                    </div>

                    {/* Video Clip Section */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 aspect-video relative group bg-gray-900">
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/kntQeikX4r4?autoplay=1&mute=1&loop=1&playlist=kntQeikX4r4&controls=0&showinfo=0&rel=0"
                            title="VIP Promo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                        {/* Video Overlay Info */}
                        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-500" />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-300 font-medium">+1.2k watching</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof & Rating */}
                    <div className="flex flex-col items-center gap-2 text-center bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm w-full">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-lg font-bold text-white">4.9/5 Rating</p>
                        <p className="text-sm text-gray-400">by 1 Crore+ Happy Viewers</p>
                    </div>

                    {/* Features List */}
                    <div className="w-full space-y-3">
                        <h3 className="text-lg font-bold text-center mb-4 text-gray-200">Premium Benefits</h3>

                        {[
                            { text: "Unlimited Viewing", icon: Play, color: "text-blue-400" },
                            { text: "Ad-free Experience", icon: Zap, color: "text-yellow-400" },
                            { text: "HD Quality Streaming", icon: Crown, color: "text-purple-400" },
                            { text: "Early Access to New Releases", icon: Clock, color: "text-red-400" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                                <div className={`p-2 rounded-full bg-white/5 ${feature.color}`}>
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-gray-100">{feature.text}</span>
                                <Check className="w-5 h-5 text-green-500 ml-auto" />
                            </div>
                        ))}
                    </div>
=======
                {/* CTA Button */}
                <div className="pt-4">
                    <Link
                        href="https://razorpay.com/" // Placeholder for payment
                        className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
                    >
                        Start for Free
                        <Play className="w-6 h-6 fill-white" />
                    </Link>
                    <p className="mt-4 text-sm text-gray-500 font-medium">
                        Cancel anytime • 1 Crore+ users trust us
                    </p>
>>>>>>> 783623ae04e38ef5479075a9dea8328748be2ee2
                </div>
            </div>
        </div>
    );
}
