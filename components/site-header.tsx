'use client';

import Link from 'next/link';
import { Menu, X, Crown } from 'lucide-react';
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
        { name: 'Dramas', href: '/dramas' },
        { name: 'Membership', href: '/membership' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Terms', href: '/terms-of-service' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 border-b border-blue-900/30 transition-colors duration-300 ${isMenuOpen ? 'bg-[#0a0f1d]' : 'bg-[#0a0f1d]/95 backdrop-blur-md'}`}>
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
                    {/* Join Membership Button */}
                    <Link href="/membership" className="hidden sm:block">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none h-10 px-6 shadow-lg shadow-blue-500/20">
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

            {/* Mobile Navigation Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f1d] z-[100] transition-transform duration-300 ease-in-out md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-blue-900/30 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-blue-900/30 bg-[#0f172a]">
                    <h2 className="text-xl font-bold text-white tracking-tight">Menu</h2>
                    <button
                        className="p-2 text-blue-300 hover:text-white transition-all bg-blue-900/20 hover:bg-blue-900/40 rounded-xl active:scale-95 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col py-2 divide-y divide-blue-900/20">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'Dramas', href: '/dramas' },
                        { name: 'About Us', href: '/about-us' },
                        { name: 'Contact Us', href: '/contact-us' },
                        { name: 'Membership', href: '/membership' },
                        { name: 'VIP', href: '/vip' },
                    ].map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-6 py-5 text-base font-semibold text-gray-300 hover:text-white hover:bg-blue-900/20 transition-all duration-200 active:bg-blue-900/40"
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Backdrop Overlay - Fully Opaque */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black z-[90] md:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes slideInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
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
