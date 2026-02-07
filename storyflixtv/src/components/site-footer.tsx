import Link from 'next/link';

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 px-4 border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {currentYear} StoryFlixTV. Design by Next Gen Agency.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/terms" className="hover:text-gray-300 transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
