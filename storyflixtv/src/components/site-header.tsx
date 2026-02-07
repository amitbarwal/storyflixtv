'use client';

import Link from 'next/link';
import { Menu, X, Play } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Membership', href: '/membership' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-500 transition-colors">
                        <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        StoryFlix<span className="text-indigo-500">TV</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="ml-4">
                        Join Now
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white transition-colors z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-5 duration-300">
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
                    <Button variant="default" size="lg" className="mt-4" onClick={() => setIsMenuOpen(false)}>
                        Join Now
                    </Button>
                </div>
            )}
        </header>
    );
}
