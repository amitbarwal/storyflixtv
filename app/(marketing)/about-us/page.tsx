import { Info, Target, Users, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | StoryFlix TV",
    description: "Learn more about StoryFlix TV and our mission to provide high-quality bite-sized entertainment.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Hero section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        Our Story
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We&apos;re on a mission to redefine mobile entertainment with high-quality, bite-sized short dramas and series.
                    </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Our Mission",
                            desc: "Providing instant entertainment for busy lives with premium quality short-form content.",
                            icon: Target,
                            color: "text-blue-400"
                        },
                        {
                            title: "Our Vision",
                            desc: "To be the world&apos;s leading platform for cinematic short stories.",
                            icon: Info,
                            color: "text-indigo-400"
                        },
                        {
                            title: "Community First",
                            desc: "Building a platform where viewers and creators connect through powerful storytelling.",
                            icon: Users,
                            color: "text-purple-400"
                        },
                        {
                            title: "Quality Guaranteed",
                            desc: "Every story on StoryFlix TV is curated to ensure the highest production standards.",
                            icon: ShieldCheck,
                            color: "text-pink-400"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors">
                            <item.icon className={`w-10 h-10 mb-4 ${item.color}`} />
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                    <p>
                        StoryFlix TV was born from a simple observation: people love great stories, but they don&apos;t always have two hours to spare. We bridge that gap by delivering cinematic experiences in 15-20 minute episodes.
                    </p>
                    <p>
                        Based in the heart of digital innovation, we work with talented directors and actors to bring you stories across genres&mdash;from heart-pounding action to soul-touching romance.
                    </p>
                </div>
            </div>
        </div>
    );
}
