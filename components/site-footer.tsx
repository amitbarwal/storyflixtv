import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/40 border-t border-white/5 backdrop-blur-lg mt-auto">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4 col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            <span className="text-white">StoryFlix</span><span className="text-blue-500">TV</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your ultimate destination for short dramas, web series, and premium entertainment.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/dramas" className="hover:text-blue-400 transition-colors">Dramas</Link></li>
                            <li><Link href="/membership" className="hover:text-blue-400 transition-colors">Membership</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-6 text-white text-lg">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                            <li><Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p suppressHydrationWarning>&copy; {currentYear} StoryFlix TV. Design by Next Gen Agency</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
                        <Link href="/refund-policy" className="hover:text-gray-300 transition-colors">Refund</Link>
                        <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
