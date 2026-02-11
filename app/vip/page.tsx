import { Check, Play } from 'lucide-react';
import Link from 'next/link';

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
                </div>
            </div>
        </div>
    );
}
