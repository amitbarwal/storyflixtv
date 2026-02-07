'use client';

import Link from 'next/link';
import { Menu, Search, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';


export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Membership', href: '/membership' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];

    // Prevent body scroll when menu is open
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

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                setIsSearchOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl sm:text-2xl font-bold tracking-tighter cursor-pointer z-50 flex-shrink-0"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-white">StoryFlix</span><span className="text-blue-500">TV</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-blue-400 transition-colors duration-200 whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions (Search + Account + Mobile Menu) */}
                <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Search Toggle - Mobile */}
                    <button
                        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        aria-label="Toggle search"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-center bg-white/5 hover:bg-white/10 rounded-full px-4 py-2 border border-white/5 focus-within:border-blue-500/50 transition-all group">
                        <Search className="w-4 h-4 text-gray-400 group-focus-within:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-28 xl:w-40 transition-all placeholder-gray-500 text-white outline-none"
                            aria-label="Search content"
                        />
                    </div>

                    {/* Account Button - Hidden on small mobile */}
                    <button
                        className="hidden sm:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/25"
                        aria-label="Sign in or create account"
                    >
                        <User className="w-4 h-4" />
                        <span className="hidden md:inline">Sign In</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors z-50 rounded-full hover:bg-white/5"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Search Overlay */}
            <div
                className={`lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="px-4 sm:px-6 py-4">
                    <div className="flex items-center bg-white/10 rounded-lg px-4 py-3 border border-white/10 focus-within:border-blue-500/50">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search movies, series..."
                            className="bg-transparent border-none focus:ring-0 text-base ml-3 w-full placeholder-gray-500 text-white outline-none"
                            aria-label="Search content"
                            autoFocus={isSearchOpen}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-gray-950/98 backdrop-blur-xl z-40 transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <nav className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 px-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl sm:text-3xl font-bold text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 text-center animate-in fade-in slide-in-from-right"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                            tabIndex={isMenuOpen ? 0 : -1}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Sign In Button */}
                    <button
                        className="mt-8 flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl shadow-blue-500/30"
                        onClick={() => setIsMenuOpen(false)}
                        tabIndex={isMenuOpen ? 0 : -1}
                    >
                        <User className="w-5 h-5" />
                        <span>Sign In / Register</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
