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
            content: "We collect information you provide directly to us when you create an account, purchase a membership, or contact us for support. This includes your name, email address, payment details (processed securely by our payment partners), and any other information you choose to provide.",
            icon: Eye
        },
        {
            title: "Data Usage",
            content: "We use your information to provide access to our dramas, process transactions, maintain your VIP account, and provide technical support. We also use data to analyze viewing patterns to improve our content curation.",
            icon: ShieldCheck
        },
        {
            title: "Data Security",
            content: "Your security is our priority. We implement industry-standard encryption and security protocols to protect your personal data and payment information from unauthorized access or disclosure.",
            icon: Lock
        },
        {
            title: "Your Rights",
            content: "You have the right to access, update, or request the deletion of your personal data at any time. You can manage your account settings directly or contact our privacy team for assistance.",
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
