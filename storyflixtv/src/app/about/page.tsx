import { Metadata } from "next";
import { Zap, Film, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | StoryFlix TV",
    description: "Learn about StoryFlix TV, the premier destination for short-form entertainment and web series.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30 pt-20 pb-20">

            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

                <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Redefining Entertainment <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            For The Modern World
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        StoryFlix TV is your destination for premium short-form content.
                        We deliver gripping stories that fit your busy lifestyle without compromising on quality.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="px-6 py-12">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Story */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                                <Film className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">What is StoryFlix TV?</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            StoryFlix TV is a next-generation streaming platform built specifically for the short-attention economy.
                            We curate and produce high-quality short films, mini-series, and documentaries that deliver a complete cinematic experience in under 20 minutes.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Our mission is to provide <strong>instant entertainment</strong>.
                            We believe that powerful stories don't always need two hours to be told.
                            Whether you're on a commute, a break, or just winding down, StoryFlix TV is designed to give you a premium escape, instantly.
                        </p>
                    </div>

                    {/* Global Reach */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Global Storytelling</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            We showcase diverse voices from around the world. From gritty urban dramas in New York to heartwarming animations from Tokyo,
                            StoryFlix TV brings global creativity directly to your screen.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-teal-500/20 rounded-lg text-teal-400">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold">Join the Movement</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            We are more than just a platform; we are a community of creators and film lovers.
                            Join us as we revolutionize how stories are told and consumed in the digital age.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}
