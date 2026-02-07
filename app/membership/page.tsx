import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VIP Membership | StoryFlix TV",
    description: "Join StoryFlix TV VIP for unlimited ad-free entertainment.",
};

export default function MembershipPage() {
    const plans = [
        {
            name: "Starter Pack",
            price: "₹2",
            period: "/day",
            description: "Experience premium for a day.",
            features: [
                "Unlimited access to all stories",
                "Ad-free experience",
                "HD streaming quality",
            ],
            popular: false,
            gradient: "from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/30",
            buttonVariant: "outline" as const,
        },
        {
            name: "Monthly Plan",
            price: "₹399",
            period: "/month",
            description: "Our most popular choice.",
            features: [
                "Unlimited access to all stories",
                "Ad-free experience",
                "Early access to new episodes",
                "Download for offline viewing",
                "Cancel anytime",
            ],
            popular: true,
            gradient: "from-indigo-500/20 to-purple-500/20",
            border: "border-indigo-500",
            buttonVariant: "default" as const,
        },
        {
            name: "Yearly Plan",
            price: "₹799",
            period: "/year",
            description: "Best value for serious fans.",
            features: [
                "Everything in Monthly",
                "2 months free",
                "Exclusive behind-the-scenes",
                "Priority customer support",
            ],
            popular: false,
            gradient: "from-yellow-500/10 to-orange-500/10",
            border: "border-yellow-500/30",
            buttonVariant: "outline" as const,
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white py-20 px-6 relative overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-4">
                        <Crown className="w-3 h-3 mr-2 fill-yellow-500" />
                        Premium Access
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        StoryFlix TV <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">VIP Membership</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Unlock unlimited entertainment. Choose the plan that fits your viewing style.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.popular ? 'bg-zinc-900/80 shadow-indigo-500/20 scale-105 z-10 border-indigo-500' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-100">{plan.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                                </div>

                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                    <span className="text-gray-500 ml-2">{plan.period}</span>
                                </div>

                                <Button
                                    className={`w-full h-12 rounded-xl text-base font-semibold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}
                                >
                                    Buy Now
                                </Button>

                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <div className={`p-0.5 rounded-full ${plan.popular ? 'bg-indigo-500/20 text-indigo-400' : 'bg-gray-700 text-gray-400'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/5 text-center">
                    <div className="space-y-2">
                        <div className="flex justify-center text-indigo-400"><Zap className="w-6 h-6" /></div>
                        <h4 className="font-bold">Instant Activation</h4>
                        <p className="text-sm text-gray-500">Start watching immediately after payment.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center text-purple-400"><Star className="w-6 h-6" /></div>
                        <h4 className="font-bold">Premium Quality</h4>
                        <p className="text-sm text-gray-500">4K Ultra HD streaming available.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center text-pink-400"><Check className="w-6 h-6" /></div>
                        <h4 className="font-bold">Cancel Anytime</h4>
                        <p className="text-sm text-gray-500">No long-term commitments required.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
