import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/40 border-t border-white/5 backdrop-blur-lg mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4 col-span-1 text-center sm:text-left">
                        <Link href="/" className="inline-block text-2xl font-bold tracking-tighter">
                            <span className="text-white">StoryFlix</span><span className="text-blue-500">TV</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Your ultimate destination for short movies, web series, and premium entertainment.
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-white/5"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-pink-500 transition-colors p-2 rounded-full hover:bg-white/5"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-white/5"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors inline-block">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors inline-block">About Us</Link></li>
                            <li><Link href="/membership" className="hover:text-blue-400 transition-colors inline-block">Membership</Link></li>
                            <li><Link href="/movies" className="hover:text-blue-400 transition-colors inline-block">Movies</Link></li>
                            <li><Link href="/tv-shows" className="hover:text-blue-400 transition-colors inline-block">TV Shows</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Legal</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
                            <li><Link href="/terms" className="hover:text-blue-400 transition-colors inline-block">Terms of Service</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors inline-block">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-blue-400 transition-colors inline-block">Cookie Policy</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-blue-400 transition-colors inline-block">Refund Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors inline-block">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4 max-w-xs mx-auto sm:mx-0">Subscribe to our newsletter for the latest releases.</p>
                        <div className="flex flex-col sm:flex-row max-w-sm mx-auto sm:mx-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-t-md sm:rounded-l-md sm:rounded-tr-none px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 w-full transition-colors"
                                aria-label="Email for newsletter"
                            />
                            <button
                                className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-b-md sm:rounded-r-md sm:rounded-bl-none text-sm font-medium transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
                                aria-label="Subscribe to newsletter"
                            >
                                <Mail className="w-4 h-4 sm:hidden" />
                                <span>Subscribe</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 space-y-4 sm:space-y-0">
                    <p className="text-center sm:text-left">
                        &copy; {currentYear} StoryFlix TV. Design by Next Gen Agency
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                        <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
                        <Link href="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
