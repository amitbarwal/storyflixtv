import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | StoryFlix TV",
    description: "Get in touch with the StoryFlix TV team. We are here to help you with any questions or support.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Get in Touch</h1>
                        <p className="text-xl text-gray-400">
                            We&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { icon: Mail, label: "Email Us", detail: "support@storyflixtv.com", color: "text-blue-400" },
                            { icon: Phone, label: "Call Us", detail: "+1 (555) 000-0000", color: "text-indigo-400" },
                            { icon: MapPin, label: "Visit Us", detail: "Street 123, Story City, CA", color: "text-purple-400" },
                            { icon: MessageSquare, label: "Live Chat", detail: "Available 24/7", color: "text-pink-400" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.label}</p>
                                    <p className="text-xl font-medium text-gray-200">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">First Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Last Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" placeholder="Tell us what&apos;s on your mind..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all active:scale-95">
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
