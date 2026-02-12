import { Cookie, Info, Settings, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cookie Policy | StoryFlix TV",
    description: "Information about how we use cookies and similar technologies on StoryFlix TV.",
};

export default function CookiePolicyPage() {
    const sections = [
        {
            title: "What are Cookies?",
            content: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the site.",
            icon: Info
        },
        {
            title: "How We Use Cookies",
            content: "We use cookies to understand how you interact with our website, to remember your preferences, and to provide you with a more personalized experience. This includes essential cookies for authentication and performance cookies for analytics.",
            icon: Cookie
        },
        {
            title: "Your Preferences",
            content: "You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that blocking some cookies may impact your experience on our site.",
            icon: Settings
        },
        {
            title: "Third-Party Cookies",
            content: "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold italic">Cookie Policy</h1>
                    <p className="text-gray-400">Effective Date: February 12, 2026</p>
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

                <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center text-gray-400">
                    <p>
                        By continuing to use StoryFlix TV, you consent to our use of cookies as described in this policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
