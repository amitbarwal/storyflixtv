import { Check, Zap, Shield, Star, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Membership | StoryFlix TV",
    description: "Join StoryFlix TV VIP Membership to unlock premium content and an ad-free experience.",
};

export default function MembershipPage() {
    const plans = [
        {
            name: "Basic Plan",
            price: "₹2",
            duration: "30 Days",
            features: [
                "Unlimited access to all stories",
                "Ad-free experience",
                "Early access to new episodes",
                "HD Streaming available"
            ],
            isPopular: false,
            buttonText: "Buy Now",
            link: "https://rzp.io/rzp/storyflixtv"
        },
        {
            name: "Standard Plan",
            price: "₹499",
            duration: "60 Days",
            features: [
                "Unlimited access to all stories",
                "Ad-free experience",
                "Early access to new episodes",
                "4K Ultra HD Streaming",
                "Multi-device login"
            ],
            isPopular: true,
            buttonText: "Buy Now",
            link: "#"
        },
        {
            name: "Premium Plan",
            price: "₹1099",
            duration: "365 Days",
            features: [
                "Unlimited access to all stories",
                "Ad-free experience",
                "Early access to new episodes",
                "Best value for money",
                "Priority Support"
            ],
            isPopular: false,
            buttonText: "Buy Now",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-6 selection:bg-indigo-500/30">
            {/* Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 space-y-16">

                {/* Header Section */}
                <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        StoryFlixTV <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            VIP Membership
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Unlock Unlimited Entertainment
                    </p>
                </div>

                {/* Membership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] flex flex-col ${plan.isPopular
                                ? 'bg-indigo-600/10 border-indigo-500 shadow-2xl shadow-indigo-500/20 md:-translate-y-4'
                                : 'bg-white/5 border-white/10'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-[10px] font-black uppercase tracking-widest text-white shadow-lg z-20">
                                    Most Popular
                                </div>
                            )}

                            <div className="space-y-6 flex-grow">
                                <div className="space-y-2">
                                    <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-indigo-300' : 'text-white'}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-black">{plan.price}</span>
                                        <span className="text-gray-400 text-sm font-medium">/ {plan.duration}</span>
                                    </div>
                                </div>

                                <div className="h-px bg-white/10" />

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-indigo-500/20' : 'bg-white/10'}`}>
                                                <Check className={`w-3 h-3 ${plan.isPopular ? 'text-indigo-400' : 'text-gray-400'}`} />
                                            </div>
                                            <span className="text-gray-300 font-medium text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <a
                                    href={plan.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full h-14 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg flex items-center justify-center ${plan.isPopular
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25'
                                        : 'bg-white text-black hover:bg-gray-200'
                                        }`}
                                >
                                    {plan.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Zap, label: "Instant Activation" },
                        { icon: Shield, label: "Secure Payment" },
                        { icon: Star, label: "Premium Content" },
                        { icon: Clock, label: "Cancel Anytime" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <item.icon className="w-6 h-6 text-indigo-400" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{item.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
