import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | StoryFlix TV",
    description: "Learn about how we collect, use, and protect your data at StoryFlix TV.",
};

export default function PrivacyPolicyPage() {
    const policies = [
        {
            title: "Data Collection",
            content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and payment information.",
            icon: Eye
        },
        {
            title: "Data Usage",
            content: "We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about StoryFlix TV.",
            icon: ShieldCheck
        },
        {
            title: "Data Protection",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.",
            icon: Lock
        },
        {
            title: "Your Choices",
            content: "You may update, correct, or delete your account information at any time by logging into your account or contacting us. You can also opt out of receiving promotional communications from us.",
            icon: FileText
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: February 12, 2026</p>
                </div>

                <div className="space-y-12">
                    {policies.map((policy, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                    <policy.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold text-white">{policy.title}</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {policy.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-gray-400">
                    <p>
                        For any questions regarding our privacy practices, please email us at <a href="mailto:privacy@storyflixtv.com" className="text-indigo-400">privacy@storyflixtv.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
