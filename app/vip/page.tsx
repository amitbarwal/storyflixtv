'use client';

import Link from 'next/link';
import { Check, Crown, Play, Star, Zap, Shield, Users, Clock } from 'lucide-react';
import { movieData } from '@/lib/movieData';
import type { Metadata } from 'next';


export default function VipPage() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden select-none font-sans">

            {/* Background Movie Cover Grid */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 transform rotate-12 scale-125 -translate-x-10 -translate-y-10">
                    {[...movieData, ...movieData, ...movieData].map((movie, i) => (
                        <div key={i} className="aspect-[2/3] relative rounded-lg overflow-hidden bg-gray-800">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={movie.imageUrl}
                                alt=""
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
            </div>

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
                        <video
                            className="w-full h-full object-cover"
                            src="/promo-clip.mp4"
                            poster="/og-image.jpg"
                            autoPlay
                            muted
                            loop
                            playsInline
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
                </div>
            </div>

            {/* Static (Fixed) Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 flex flex-col items-center gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <Link
                    href="https://razorpay.com/"
                    className="w-full max-w-md relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-violet-600/50 shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse-slow"
                    aria-label="Start for free"
                >
                    Start Free Trial
                    <Play className="w-5 h-5 fill-current" />
                </Link>
                <p className="text-xs text-gray-500 font-medium">Cancel anytime • Secure payment</p>
            </div>

            {/* Marquee Animation Styles */}
            <style jsx global>{`
                /* Add any global styles here if needed */
            `}</style>
        </div>
    );
}
