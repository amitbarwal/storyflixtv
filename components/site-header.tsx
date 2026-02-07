'use client';

import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';


export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter cursor-pointer z-50">
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

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-gray-950/95 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-semibold text-gray-300 hover:text-white hover:scale-105 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
