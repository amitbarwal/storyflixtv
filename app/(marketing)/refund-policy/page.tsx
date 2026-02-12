import { RefreshCw, Clock, CreditCard, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Refund Policy | StoryFlix TV",
    description: "Read our refund policy for StoryFlix TV VIP Membership and other services.",
};

export default function RefundPolicyPage() {
    const sections = [
        {
            title: "1. Virtual Content & Subscriptions",
            content: "StoryFlix TV provides digital content and VIP memberships. Since these are digital services that are accessible immediately upon purchase, we generally do not offer refunds once the service has been accessed or the subscription period has started.",
            icon: RefreshCw
        },
        {
            title: "2. Membership Cancellations",
            content: "You can cancel your VIP membership at any time. Upon cancellation, you will continue to have access to the VIP features until the end of your current billing period. No further charges will be made after cancellation.",
            icon: Clock
        },
        {
            title: "3. Technical Issues",
            content: "If you experience technical difficulties that prevent you from accessing the content you've paid for, please contact our support team. If we are unable to resolve the issue within a reasonable timeframe, we may, at our sole discretion, provide a partial or full refund.",
            icon: CreditCard
        },
        {
            title: "4. Exceptional Circumstances",
            content: "Refund requests are handled on a case-by-case basis. If you believe you have a unique situation that warrants a refund, please reach out to our support team with your transaction details and a clear explanation of your request.",
            icon: HelpCircle
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Refund Policy
                    </h1>
                    <p className="text-gray-400">Last updated: February 12, 2026</p>
                </div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <section.icon className="w-6 h-6 text-blue-400" />
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
                        Have questions about a payment or refund? <a href="mailto:support@storyflixtv.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Contact our support team</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
