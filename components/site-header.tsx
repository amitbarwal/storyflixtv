'use client';

import Link from 'next/link';
import { Menu, Search, X, Crown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';


export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Movies', href: '/movies' },
        { name: 'Membership', href: '/membership' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Terms', href: '/terms-of-service' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter cursor-pointer">
                    <span className="text-white">StoryFlix</span><span className="text-blue-500">TV</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions (Search + Mobile Menu) */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar - Hidden on small mobile */}
                    <div className="hidden sm:flex items-center bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 border border-white/5 focus-within:border-white/20 transition-all group">
                        <Search className="w-4 h-4 text-gray-400 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-24 focus:w-40 transition-all placeholder-gray-500 text-white outline-none"
                        />
                    </div>

                    {/* Join Membership Button */}
                    <Link href="/membership" className="hidden sm:block">
                        <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none h-10 px-6">
                            <Crown className="w-4 h-4 mr-2" />
                            Join Membership
                        </Button>
                    </Link>

                    {/* Mobile Menu Button - Only visible when menu is closed */}
                    {!isMenuOpen && (
                        <button
                            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Navigation Overlay - Full Screen */}
            <div
                className={`fixed inset-0 w-full h-full bg-gradient-to-br from-gray-950 via-black to-gray-900 z-[100] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center px-6 py-20 shadow-2xl overflow-hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                {/* Close Button Inside Overlay */}
                <button
                    className="absolute top-6 right-6 p-3 text-gray-300 hover:text-white transition-all duration-200 bg-white/10 hover:bg-white/20 rounded-full shadow-lg active:scale-90"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <X className="w-7 h-7" />
                </button>

                {/* Menu Items with Touch-Friendly Spacing */}
                <nav className="flex flex-col items-center justify-center space-y-10 w-full max-w-md">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'Movies', href: '/movies' },
                        { name: 'About Us', href: '/about-us' },
                        { name: 'Contact Us', href: '/contact-us' },
                        { name: 'Membership', href: '/membership' },
                        { name: 'VIP', href: '/vip' },
                    ].map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-bold text-white hover:text-indigo-400 transition-all duration-200 tracking-tight hover:scale-110 active:scale-95 py-2 px-4 w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isMenuOpen ? 'slideInFromRight 0.4s ease-out forwards' : 'none'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
}
