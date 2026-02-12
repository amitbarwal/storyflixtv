import { Shield, FileText, Lock, Scale } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | StoryFlix TV",
    description: "Read our terms of service and conditions for using StoryFlix TV.",
};

export default function TermsPage() {
    const sections = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing or using StoryFlix TV, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, then you may not access the website or use any services.",
            icon: Shield
        },
        {
            title: "2. Intellectual Property",
            content: "The content on StoryFlix TV, including movies, series, graphics, and software, is the property of StoryFlix TV and is protected by copyright and other intellectual property laws.",
            icon: FileText
        },
        {
            title: "3. User Accounts",
            content: "To access certain features, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
            icon: Lock
        },
        {
            title: "4. Limitation of Liability",
            content: "StoryFlix TV shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the service.",
            icon: Scale
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: February 12, 2026</p>
                </div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                    <section.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-gray-400">
                        Have questions about our terms? <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Contact our legal team</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
