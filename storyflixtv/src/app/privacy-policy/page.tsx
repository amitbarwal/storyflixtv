import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | StoryFlix TV',
    description: 'Learn how StoryFlix TV collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-gray-300 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4 border-b border-white/10 pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
                    <p className="text-lg text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                {/* Content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            StoryFlix TV ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information
                            when you use our website, mobile application, and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
                            <li><strong>Personal Information:</strong> Name, email address, payment information (processed securely by third-party providers).</li>
                            <li><strong>Usage Data:</strong> Information about how you use our service, such as watch history, search queries, and device information.</li>
                            <li><strong>Cookies:</strong> We use cookies to enhance your experience, remember your preferences, and analyze site traffic.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p>
                            We use your information to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500 mt-4">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Personalize your content recommendations.</li>
                            <li>Process transactions and manage your account.</li>
                            <li>Send you updates, security alerts, and support messages.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                            However, no Internet transmission is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                        <p>
                            Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data.
                            To exercise these rights, please contact us.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <p className="mb-4">
                            If you have questions about this Privacy Policy, please contact our Data Protection Officer at:
                        </p>
                        <div className="bg-black/50 p-4 rounded-lg inline-block text-indigo-400 font-mono">
                            privacy@storyflixtv.com
                        </div>
                    </section>

                </article>

            </div>
        </div>
    );
}
