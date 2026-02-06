import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: "Privacy Policy | a2zmovie",
    description: "Read the Privacy Policy for a2zmovie to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen pb-20 pt-20">
            {/* Header */}
            <section className="relative py-16 px-6 border-b border-white/5 bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

                {/* Intro */}
                <section className="space-y-4">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        At a2zmovie, accessible from a2zmovie.com, one of our main priorities is the privacy of our visitors.
                        This Privacy Policy document contains types of information that is collected and recorded by a2zmovie and how we use it.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                            <FileText className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h2 className="text-2xl font-bold">Information We Collect</h2>
                    </div>
                    <div className="space-y-4 text-gray-300">
                        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                            <li>Contact information (email address)</li>
                            <li>Account login details</li>
                            <li>Usage data and viewing history</li>
                            <li>Device and browser information</li>
                        </ul>
                    </div>
                </section>

                {/* How We Use Your Information */}
                <section className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Eye className="w-5 h-5 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                    </div>
                    <p className="text-gray-300">We use the information we collect in various ways, including to:</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Provide, operate, and maintain our website",
                            "Improve, personalize, and expand our website",
                            "Understand and analyze how you use our website",
                            "Develop new products, services, features, and functionality",
                            "Send you emails regarding updates and other information",
                            "Find and prevent fraud"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Cookies */}
                <section className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-pink-500/20 rounded-lg">
                            <Lock className="w-5 h-5 text-pink-400" />
                        </div>
                        <h2 className="text-2xl font-bold">Cookies and Web Beacons</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Like any other website, a2zmovie uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                    </p>
                </section>

                {/* User Rights */}
                <section className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold">Your Data Protection Rights</h2>
                    </div>
                    <p className="text-gray-300 mb-4">
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </p>
                    <div className="grid gap-4">
                        {[
                            { title: "The right to access", desc: "You have the right to request copies of your personal data." },
                            { title: "The right to rectification", desc: "You have the right to request that we correct any information you believe is inaccurate." },
                            { title: "The right to erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
                            { title: "The right to restrict processing", desc: "You have the right to request that we restrict the processing of your personal data." }
                        ].map((right, i) => (
                            <div key={i} className="border-l-2 border-blue-500 pl-4 py-1">
                                <h3 className="font-bold text-white">{right.title}</h3>
                                <p className="text-sm text-gray-400">{right.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center pt-8 border-t border-white/10">
                    <p className="text-gray-400">
                        If you have any questions about this Privacy Policy, you can contact us at: <a href="mailto:support@a2zmovie.com" className="text-indigo-400 hover:text-indigo-300">support@a2zmovie.com</a>
                    </p>
                </section>

            </div>
        </div>
    );
}
