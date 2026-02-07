import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | StoryFlix TV',
    description: 'Read the Terms of Service for using StoryFlix TV.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-gray-300 py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4 border-b border-white/10 pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>

                </div>

                {/* content */}
                <article className="prose prose-invert prose-lg max-w-none space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to StoryFlix TV. By accessing our website, mobile application, or any of our services, you agree to be bound by these Terms of Service.
                            Please read them carefully. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. User Eligibility</h2>
                        <p>
                            You must be at least 13 years old to use StoryFlix TV. By using our service, you represent and warrant that you meet this age requirement.
                            If you are under 18, you may use the service only with the involvement of a parent or guardian.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Content Usage Rules</h2>
                        <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
                            <li>You are granted a limited, non-exclusive, non-transferable license to access and view content for personal, non-commercial use.</li>
                            <li>You may not download (except via authorized app features), copy, distribute, or publicly display any content.</li>
                            <li>You agree not to bypass, modify, or tamper with any security technology or software that protects our content.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Subscriptions & Payments</h2>
                        <p>
                            Certain features of StoryFlix TV may require a paid subscription.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500 mt-4">
                            <li><strong>Billing:</strong> Subscription fees are billed in advance on a recurring basis (monthly or annually).</li>
                            <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Access will continue until the end of the current billing cycle.</li>
                            <li><strong>Refunds:</strong> Payments are non-refundable, except as required by applicable law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
                        <p>
                            StoryFlix TV is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that the service will be uninterrupted, error-free, or free from viruses.
                            We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, StoryFlix TV and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages
                            arising out of or in connection with your use of the service.
                        </p>
                    </section>

                    <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="bg-black/50 p-4 rounded-lg inline-block text-indigo-400 font-mono">
                            legal@storyflixtv.com
                        </div>
                    </section>

                </article>

            </div>
        </div>
    );
}
